import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateFiiss1663542224931 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(
         'CREATE TABLE fiis (id UUID PRIMARY KEY, codigo_fundo text,  setor text,  preco_atual decimal(12, 2),  liquidez_diaria decimal(12, 2),  dividendo decimal(12, 2),  dy decimal(12, 2),  dy_3m_acumulado decimal(12, 2),  dy_6m_acumulado decimal(12, 2),  dy_12m_acumulado decimal(12, 2),  dy_3m_media decimal(12, 2),  dy_6m_media decimal(12, 2),  dy_12m_media decimal(12, 2),  dy_ano decimal(12, 2),  variacao_preco decimal(12, 2),  rentabilidade_periodo decimal(12, 2),  rentabilidade_acumulada decimal(12, 2),  patrimonio_liquido decimal(12, 2),  vpa decimal(12, 2),  p_vpa decimal(12, 2),  dy_patrimonial decimal(12, 2),  variacao_patrimonial decimal(12, 2),  rentabilidade_patrimonial_periodo decimal(12, 2),  rentabilidade_patrimonial_acumulada decimal(12, 2),  vacancia_fisica decimal(12, 2),  vacancia_financeira decimal(12, 2),  quantidade_ativos integer, data_atualizacao_api timestamp default now())'
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query('DROP TABLE "fiis"');
    }

}
