import { ICreateFiisDTOS } from "@modules/fundos_imobiliarios/dtos/ICreateFiisDTOS";
import { IFiisRepository } from "@modules/fundos_imobiliarios/repositories/IFiisRepository";
import { getRepository, Repository } from "typeorm";
import { Fiis } from "../entities/Fiis";


class FiisRepository implements IFiisRepository {
    private repository: Repository<Fiis>

    constructor() {
        this.repository = getRepository(Fiis)
    }

    async getBestFiisQuery1(): Promise<Fiis[]> {
        const data = await
            this.repository.createQueryBuilder('fiis')
                .where('fiis.dy >= :dy', { dy: process.env.BEST1_dy })
                .andWhere('fiis.rentabilidade_periodo >= :rentabilidade_periodo', { rentabilidade_periodo: process.env.BEST1_rentabilidade_periodo })
                .andWhere('fiis.rentabilidade_acumulada >= :rentabilidade_acumulada', { rentabilidade_acumulada: process.env.BEST1_rentabilidade_acumulada })
                .andWhere('fiis.p_vpa <= :p_vpa', { p_vpa: process.env.BEST1_p_vpa })
                .andWhere('fiis.variacao_patrimonial >= :variacao_patrimonial', { variacao_patrimonial: process.env.BEST1_variacao_patrimonial })
                .andWhere('fiis.rentabilidade_patrimonial_periodo >= :rentabilidade_patrimonial_periodo', { rentabilidade_patrimonial_periodo: process.env.BEST1_rentabilidade_patrimonial_periodo })
                .andWhere('fiis.rentabilidade_patrimonial_acumulada >= :rentabilidade_patrimonial_acumulada', { rentabilidade_patrimonial_acumulada: process.env.BEST1_rentabilidade_patrimonial_acumulada })
                .andWhere('fiis.vacancia_financeira = :vacancia_financeira', { vacancia_financeira: process.env.BEST1_vacancia_financeira })
                .andWhere('fiis.vacancia_fisica <= :vacancia_fisica', { vacancia_fisica: process.env.BEST1_vacancia_fisica })
                .andWhere('fiis.liquidez_diaria >= :liquidez_diaria', { liquidez_diaria: process.env.BEST1_liquidez_diaria })
                .andWhere('abs(fiis.dy - fiis.dy_12m_media) <= :diferenca_entre_medias ', { diferenca_entre_medias : process.env.BEST1_diferenca_entre_medias })
                .andWhere('fiis.dy_12m_media >= :dy_12m_media ', { dy_12m_media : process.env.BEST1_dy_12m_media })
                .orderBy('fiis.dy', "DESC")
                .limit(null)
                .getMany();

        return data;
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