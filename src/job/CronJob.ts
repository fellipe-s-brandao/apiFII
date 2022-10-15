import { FiisUseCase } from "@modules/fundos_imobiliarios/useCases/Fiis/FiisUseCase";
import { GetFiis } from "@modules/fundos_imobiliarios/useCases/Fiis/GetFiis";
import { CronJob } from "cron";
import { container } from "tsyringe";

class Jobs {
    cronJob: CronJob;

    constructor() {
        console.log("Jobs is running");

        this.cronJob = new CronJob('* 30 * * * *', async () => {
            try {
                await this.getInfoFundos();
                await this.processaDados();
            } catch (e) {
                console.error(e);
            }
        });

        // Start job
        if (!this.cronJob.running) {
            this.cronJob.start();
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

    }

}

export { Jobs }