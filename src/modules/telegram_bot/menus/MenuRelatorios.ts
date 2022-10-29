import { Context } from "grammy"
import { Menu } from "@grammyjs/menu";
import { RelatorioV1 } from "../relatorios/RelatorioV1";
import type { ParseModeFlavor } from "@grammyjs/parse-mode";

class MenuRelatorios {
    private relatorioV1: RelatorioV1
    constructor() {
        this.relatorioV1 = new RelatorioV1
    }

    execute(): Menu {
        const menu_relatorios = new Menu<ParseModeFlavor<Context>>("menu-relatorios")
            .text("Relatório V1", async (ctx) => {
                ctx.replyWithHTML(await this.gerar_relatorio_v1())
            })
            .back("Go Back");

        return menu_relatorios;
    }

    private async gerar_relatorio_v1(): Promise<string> {
        const relatorio = await this.relatorioV1.execute();
        return relatorio;
    }
}

export { MenuRelatorios }