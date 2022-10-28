import { ICreateFiisDTOS } from "@modules/fundos_imobiliarios/dtos/ICreateFiisDTOS";
import { Fiis } from "@modules/fundos_imobiliarios/infra/typeorm/entities/Fiis";
import { IFiisRepository } from "../IFiisRepository";

class FiisRepositoryInMemory implements IFiisRepository {
    fiis: Fiis [] = [];
    
    getBestFiisQuery1(): Promise<[Fiis]> {
        throw new Error("Method not implemented.");
    }

    async create(data: ICreateFiisDTOS): Promise<void> {
        const fii = new Fiis();
        Object.assign(fii, data);

        this.fiis.push(fii);
    }

    async findByCodigoFundo(codigo_fundo: string): Promise<Fiis> {
        return this.fiis.find((fii) => fii.codigo_fundo === codigo_fundo);
    }

    async updateFundoById(data: ICreateFiisDTOS, id: string): Promise<void> {
        Object.assign(this.fiis.find((fii) => fii.id === id), data);
    }

}

export { FiisRepositoryInMemory }