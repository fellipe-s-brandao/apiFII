import { Bot, Context } from "grammy"
import { MenuInicial } from "./menus/MenuInicial";
import { MenuRelatorios } from "./menus/MenuRelatorios";
import { hydrateReply, parseMode } from "@grammyjs/parse-mode";
import type { ParseModeFlavor } from "@grammyjs/parse-mode";

const bot = new Bot<ParseModeFlavor<Context>>(process.env.TELEGRAM_BOT_API_TOKEN);

/**
 * Configuraco Formarto da resposta -Bot
 */
bot.use(hydrateReply);  
bot.api.config.use(parseMode('MarkdownV2'));

/**
 * Configuracao Menu - Bot
 */
const menuRelatorio = new MenuRelatorios();
const menuInicial = new MenuInicial();

const menu_inicial = menuInicial.execute();
const menu_relatorios = menuRelatorio.execute();

menu_inicial.register(menu_relatorios, "menu-inicial");

bot.use(menu_inicial);
bot.use(menu_relatorios);

/**
 * Start - Bot
 */
bot.command("start", async (ctx) => {
    await ctx.reply("Escolha uma opção:", { reply_markup: menu_inicial });
});

bot.start();