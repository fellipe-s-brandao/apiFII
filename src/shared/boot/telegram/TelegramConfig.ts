import { Telegraf } from 'telegraf';

export default function Telegram() {
    return new Telegraf(process.env.TELEGRAM_BOT_API_TOKEN);
}

// exemple

// bot.hears("opa", (ctx) => {
//     ctx.reply("brinca com o homi")
// })

// bot.launch()