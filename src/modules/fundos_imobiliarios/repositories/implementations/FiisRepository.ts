import { getRepository, Repository } from "typeorm";
import { ICreateFiisDTOS } from "../../dtos/ICreateFiisDTOS";
import { Fiis } from "../../entities/Fiis";
import { IFiisRepository } from "../IFiisRepository";

class FiisRepository implements IFiisRepository {
    private repository: Repository<Fiis>

    constructor() {
        this.repository = getRepository(Fiis);
    }

    async create(data: ICreateFiisDTOS): Promise<void> {
        const fundo = this.repository.create({
            codigo_fundo: data.codigo_fundo,
            setor: data.setor,
            preco_atual: data.preco_atual,
            liquidez_diaria: data.liquidez_diaria,
            dividendo: data.dividendo,
            dy: data.dy,
            dy_3m_acumulado: data.dy_3m_acumulado,
            dy_6m_acumulado: data.dy_6m_acumulado,
            dy_12m_acumulado: data.dy_12m_acumulado,
            dy_3m_media: data.dy_3m_media,
            dy_6m_media: data.dy_6m_media,
            dy_12m_media: data.dy_12m_media,
            dy_ano: data.dy_ano,
            variacao_preco: data.variacao_preco,
            rentabilidade_periodo: data.rentabilidade_periodo,
            rentabilidade_acumulada: data.rentabilidade_acumulada,
            patrimonio_liquido: data.patrimonio_liquido,
            vpa: data.vpa,
            p_vpa: data.p_vpa,
            dy_patrimonial: data.dy_patrimonial,
            variacao_patrimonial: data.variacao_patrimonial,
            rentabilidade_patrimonial_periodo: data.rentabilidade_patrimonial_periodo,
            rentabilidade_patrimonial_acumulada: data.rentabilidade_patrimonial_acumulada,
            vacancia_fisica: data.vacancia_fisica,
            vacancia_financeira: data.vacancia_financeira,
            quantidade_ativos: data.quantidade_ativos,
            data_atualizacao: data.data_atualizacao,
        });
        
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