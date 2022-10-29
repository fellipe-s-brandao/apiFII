import { Menu } from "@grammyjs/menu";

class MenuRelatorios {
    execute() {
        const menu_relatorios = new Menu("menu-relatorios")
        .text("Relatório 01", (ctx) => ctx.reply(this.gerar_relatorio_v1()))
        .text("Relatório 02", (ctx) => ctx.reply(this.gerar_relatorio_v2()))
        .back("Go Back");

        return menu_relatorios;
    }

    private gerar_relatorio_v1() {
        return "relatorio v1"
    }

    private gerar_relatorio_v2() {
        return "relatorio v2"
    }
}

export { MenuRelatorios }