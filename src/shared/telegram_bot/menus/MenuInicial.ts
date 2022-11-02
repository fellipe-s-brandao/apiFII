import { Menu } from "@grammyjs/menu";

class MenuInicial {
    execute(): Menu {
        const menu_inicial = new Menu("menu-inicial")
        .text("Minha Carteira", (ctx) => ctx.reply(this.gerar_dados_minha_carteira())).row()
        .submenu("Relatórios", "menu-relatorios");

        return menu_inicial
    }

    private gerar_dados_minha_carteira() {
        return "teste"
    }
}

export { MenuInicial }