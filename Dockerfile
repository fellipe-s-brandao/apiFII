FROM node

ENV TZ="America/Sao_Paulo"

WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3334

CMD ["npm", "run", "dev"]