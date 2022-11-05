import { Fiis } from "@modules/fundos_imobiliarios/infra/typeorm/entities/Fiis";
import { FiisUseCase } from "@modules/fundos_imobiliarios/useCases/Fiis/FiisUseCase";
import { container } from "tsyringe";

class RelatorioV1 {

    async execute(): Promise<string> {
        const fiisUseCase = container.resolve(FiisUseCase);
        const fundos = await fiisUseCase.processar_dados_fiis();

        return this.cria_relatorio(fundos);
    }

    private cria_relatorio(fundos: Fiis[]): string {
        let text = `Relatório
`;

        text += `<b>Lista Melhores Fiis - V1</b>

`;

        fundos.map(fundo => {
            let date = new Date(fundo.data_atualizacao_api);

            text += ` <b>${fundo.codigo_fundo}</b>
`;
            text += ` - Preço: ${fundo.preco_atual}
`;
            text += ` - Dy: ${fundo.dy}
`;
            text += ` - Dividendo: ${fundo.dividendo}
`;
            text += ` - Setor: ${fundo.setor}
`;
            text += ` - P VPA: ${fundo.p_vpa}
`;
            text += ` - Data Atualização: ${date.getDate()}/${date.getMonth()}/${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()} 
`;
            text += `
`;
        });

        return text;
    }
}

export { RelatorioV1 }