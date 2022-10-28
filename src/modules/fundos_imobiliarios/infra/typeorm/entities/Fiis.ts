import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from "uuid";

@Entity('fiis')
class Fiis {
    @PrimaryColumn()
    id?: string;

    @Column()
    codigo_fundo: string;

    @Column()
    setor: string;

    @Column({type: "decimal", precision: 12, scale: 2})
    preco_atual: number;

    @Column({type: "decimal", precision: 12, scale: 2})
    liquidez_diaria: number;

    @Column({type: "decimal", precision: 12, scale: 2})
    dividendo: number;

    @Column({type: "decimal", precision: 12, scale: 2})
    dy: number;

    @Column({type: "decimal", precision: 12, scale: 2})
    dy_3m_acumulado: number;

    @Column({type: "decimal", precision: 12, scale: 2})
    dy_6m_acumulado: number;

    @Column({type: "decimal", precision: 12, scale: 2})
    dy_12m_acumulado: number;

    @Column({type: "decimal", precision: 12, scale: 2})
    dy_3m_media: number;

    @Column({type: "decimal", precision: 12, scale: 2})
    dy_6m_media: number;

    @Column({type: "decimal", precision: 12, scale: 2})
    dy_12m_media: number;

    @Column({type: "decimal", precision: 12, scale: 2})
    dy_ano: number;

    @Column({type: "decimal", precision: 12, scale: 2})
    variacao_preco: number;

    @Column({type: "decimal", precision: 12, scale: 2})
    rentabilidade_periodo: number;

    @Column({type: "decimal", precision: 12, scale: 2})
    rentabilidade_acumulada: number;

    @Column({type: "decimal", precision: 12, scale: 2})
    patrimonio_liquido: number;

    @Column({type: "decimal", precision: 12, scale: 2})
    vpa: number;

    @Column({type: "decimal", precision: 12, scale: 2})
    p_vpa: number;

    @Column({type: "decimal", precision: 12, scale: 2})
    dy_patrimonial: number;

    @Column({type: "decimal", precision: 12, scale: 2})
    variacao_patrimonial: number;

    @Column({type: "decimal", precision: 12, scale: 2})
    rentabilidade_patrimonial_periodo: number;

    @Column({type: "decimal", precision: 12, scale: 2})
    rentabilidade_patrimonial_acumulada: number;

    @Column({type: "decimal", precision: 12, scale: 2})
    vacancia_fisica: number;

    @Column({type: "decimal", precision: 12, scale: 2})
    vacancia_financeira: number;

    @Column()
    quantidade_ativos: number;

    @CreateDateColumn()
    data_atualizacao: Date;

    @CreateDateColumn()
    data_atualizacao_api?: Date;

    constructor(){
        if(! this.id){
            this.id = uuidV4();
        }
        
        if(! this.data_atualizacao_api){
            this.data_atualizacao_api = new Date();
        }
    }
}

export { Fiis };