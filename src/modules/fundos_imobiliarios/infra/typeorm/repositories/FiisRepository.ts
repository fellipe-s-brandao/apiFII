import { ICreateFiisDTOS } from "@modules/fundos_imobiliarios/dtos/ICreateFiisDTOS";
import { IFiisRepository } from "@modules/fundos_imobiliarios/repositories/IFiisRepository";
import { getRepository, Repository } from "typeorm";
import { Fiis } from "../entities/Fiis";


class FiisRepository implements IFiisRepository {
    private repository: Repository<Fiis>

    constructor() {
        this.repository = getRepository(Fiis);
    }

    async create(data: ICreateFiisDTOS): Promise<void> {
        const fundo = this.repository.create(data);

        await this.repository.save(fundo);
    }

    async findByCodigoFundo(codigo_fundo: string): Promise<Fiis> {
        const fundo = await this.repository.findOne({ codigo_fundo });
        return fundo;
    }

    async updateFundoById(data: ICreateFiisDTOS, id: string): Promise<void> {
        this.repository.createQueryBuilder().update(data).where({ id }).execute();
    }
}

export { FiisRepository };