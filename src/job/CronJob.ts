import { FiisUseCase } from "@modules/fundos_imobiliarios/useCases/Fiis/FiisUseCase";
import { GetFiis } from "@modules/fundos_imobiliarios/useCases/Fiis/GetFiis";
import { CronJob } from "cron";
import { container } from "tsyringe";

class Jobs {
    cronJobGetFundos: CronJob;
    cronJobProcessaDados: CronJob;

    constructor() {
        console.log("Jobs is running");

        this.cronJobGetFundos = new CronJob('* 50 * * * *', async () => {
            try {
                await this.getInfoFundos();
            } catch (e) {
                console.error(e);
            }
        });

        this.cronJobProcessaDados = new CronJob('1 * * * * *', async () => {
            try {
                await this.processaDados();
            } catch (e) {
                console.error(e);
            }
        });

        // Start job
        if (!this.cronJobGetFundos.running) {
            this.cronJobGetFundos.start();
        }

        // Start job
        if (!this.cronJobProcessaDados.running) {
            this.cronJobProcessaDados.start();
        }
    }

    async getInfoFundos() {
        let getFiis = new GetFiis;
        let fundos = await getFiis.execute();

        if (fundos) {
            const fiisUseCase = container.resolve(FiisUseCase);
            await fiisUseCase.update_fiis(fundos);
        } else {
            console.log('Dados nao atualizados!');
        }
    }

    async processaDados() {
        const fiisUseCase = container.resolve(FiisUseCase);
        await fiisUseCase.processar_dados_fiis();
    }

}

export { Jobs }