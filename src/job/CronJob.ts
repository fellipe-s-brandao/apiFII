import { CronJob } from 'cron';
import { GetFiis } from '../modules/fundos_imobiliarios/useCases/Fiis/GetFiis';
import { container } from "tsyringe";
import { FiisUseCase } from '../modules/fundos_imobiliarios/useCases/Fiis/FiisUseCase';
import { ICreateFiisDTOS } from '../modules/fundos_imobiliarios/dtos/ICreateFiisDTOS';

class Jobs {

  cronJob: CronJob;

  constructor() {
    console.log("Jobs is running");

    this.cronJob = new CronJob('1 * * * * *', async () => {
      try {
        await this.getInfoFundos();
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

      const fiisUseCase = container.resolve(FiisUseCase);
      await fiisUseCase.update_fiis(fundos);
    }

}

export { Jobs }