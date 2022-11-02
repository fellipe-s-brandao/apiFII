
import { Fiis } from "@modules/fundos_imobiliarios/infra/typeorm/entities/Fiis";
import { CrawlerFiis } from "@shared/crawler/CrawlerFiis";
import axios from "axios";

class GetFiis {
    private crawler: CrawlerFiis;

    constructor() { 
        this.crawler = new CrawlerFiis;
    }

    async execute(): Promise<Fiis[]> {
        try {
            const fundos = await this.crawler.execute();
            return fundos;

        } catch (error) {
            console.log("getFiis", error);
        }
    }
}

export { GetFiis }