import { CronJob } from 'cron';

class Jobs {

  cronJob: CronJob;

  constructor() {
    console.log("Jobs is running");

    this.cronJob = new CronJob('1 * * * * *', async () => {
      try {
        this.getInfoFundos();
      } catch (e) {
        console.error(e);
      }
    });
    
    // Start job
    if (!this.cronJob.running) {
      this.cronJob.start();
    }
  }
    getInfoFundos() {
    }

}

export { Jobs }