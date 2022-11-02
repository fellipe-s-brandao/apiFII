FROM node

ENV TZ="America/Sao_Paulo"

RUN apt-get update && apt-get install -y unzip wget bash


WORKDIR /usr/app

RUN apt-get update \
  && apt-get install -y wget gnupg \
  && wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - \
  && sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list' \
  && apt-get update \
  && apt-get install -y google-chrome-stable fonts-ipafont-gothic fonts-wqy-zenhei fonts-thai-tlwg fonts-kacst fonts-freefont-ttf libxss1 \
  --no-install-recommends \
  && rm -rf /var/lib/apt/lists/*

COPY package.json ./

RUN npm install

RUN node /usr/app/node_modules/puppeteer/install.js

COPY . .

EXPOSE 3334

CMD ["npm", "run", "dev"]
