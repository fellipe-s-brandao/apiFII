import { ICreateFiisDTOS } from "@modules/fundos_imobiliarios/dtos/ICreateFiisDTOS";
import { IFiisRepository } from "@modules/fundos_imobiliarios/repositories/IFiisRepository";
import Telegram from "@shared/boot/telegram/TelegramConfig";

import { Telegraf } from 'telegraf';
import { inject, injectable } from "tsyringe";

@injectable()
class FiisUseCase {
    private bot: Telegraf

    constructor(
        @inject('FiisRepository')
        private fiisRepository: IFiisRepository
    ) {
        this.bot = Telegram();
    }

    async update_fiis(fundos: ICreateFiisDTOS[]): Promise<void> {
        fundos.map(async (fundo) => {
            const { codigo_fundo } = fundo;
            let fundoCriado = await this.fiisRepository.findByCodigoFundo(codigo_fundo);

            if (fundoCriado === undefined) {

                await this.fiisRepository.create(fundo);
            } else {

                fundo.data_atualizacao_api = new Date();

                await this.fiisRepository.updateFundoById(fundo, fundoCriado.id);
            }
        })
    }

    async processar_dados_fiis(): Promise<void> {
        const fundos = await this.fiisRepository.getBestFiisQuery1();

        let text = `* Bot Fundos de Investimentos Imobiliário - Fellipe Brandao *`;

        fundos.map(fundo => {
            text +=`
                * ${fundo.codigo_fundo}*
                - Preço: ${fundo.preco_atual}
                - Dy: ${fundo.dy}
                - Dividendo: ${fundo.dividendo}
                `
        })
        console.log('Bot is running');

        this.bot.telegram.sendMessage(process.env.CHAT_ID, text, { parse_mode: "Markdown" });
    }
}

export { FiisUseCase };