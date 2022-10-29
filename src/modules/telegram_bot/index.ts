import { Bot } from "grammy"
import { MenuInicial } from "./menus/MenuInicial";
import { MenuRelatorios } from "./menus/MenuRelatorios";

const menuRelatorio = new MenuRelatorios();
const menuInicial = new MenuInicial();

const bot = new Bot(process.env.TELEGRAM_BOT_API_TOKEN);

const menu_inicial = menuInicial.execute();
const menu_relatorios = menuRelatorio.execute();

menu_inicial.register(menu_relatorios, "menu-inicial");

bot.use(menu_inicial);
bot.use(menu_relatorios);

bot.command("start", async (ctx) => {
    await ctx.reply("Escolha uma opção:", { reply_markup: menu_inicial });
});

bot.start();