import { CronJob } from 'cron';
import { GetFiis } from '../modules/fundos_imobiliarios/useCases/getFiis/GetFiis';

class Jobs {

  cronJob: CronJob;

  constructor() {
    console.log("Jobs is running");

    this.cronJob = new CronJob('* 30 * * * *', async () => {
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
      
    }

}

export { Jobs }