
import { Fiis } from "@modules/fundos_imobiliarios/infra/typeorm/entities/Fiis";
import { CrawlerFiis } from "@shared/crawler/CrawlerFiis";

class GetFiis {
    private crawler: CrawlerFiis;

    constructor() { 
        this.crawler = new CrawlerFiis;
    }

    execute(): Promise<Fiis[]> {
        try {
            const fundos = this.crawler.execute();
            return fundos;

        } catch (error) {
            console.log("getFiis", error);
        }
    }
}

export { GetFiis }