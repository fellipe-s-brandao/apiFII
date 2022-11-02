import { FiisUseCase } from "@modules/fundos_imobiliarios/useCases/Fiis/FiisUseCase";
import { GetFiis } from "@modules/fundos_imobiliarios/useCases/Fiis/GetFiis";
import { CronJob } from "cron";
import { container } from "tsyringe";

class Jobs {
    cronJobGetFundos: CronJob;

    constructor() {
        console.log("Jobs is running");

        this.cronJobGetFundos = new CronJob('1 * * * * *', async () => {
            try {
                await this.getInfoFundos();
            } catch (e) {
                console.error(e);
            }
        });

        // Start job
        if (!this.cronJobGetFundos.running) {
            this.cronJobGetFundos.start();
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

}

export { Jobs }