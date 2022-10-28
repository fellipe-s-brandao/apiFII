import { Fiis } from "@modules/fundos_imobiliarios/infra/typeorm/entities/Fiis";

const FiiExemple: Fiis = {
    codigo_fundo: "opas11",
    setor: "papel",
    preco_atual: 15.05,
    liquidez_diaria: 20000,
    dividendo: 0.08,
    dy: 0.80,
    dy_3m_acumulado: 0.91,
    dy_6m_acumulado: 0.98,
    dy_12m_acumulado: 1.00,
    dy_3m_media: 2.00,
    dy_6m_media: 1.00,
    dy_12m_media: 1.00,
    dy_ano: 1.00,
    variacao_preco: 10,
    rentabilidade_periodo: 15,
    rentabilidade_acumulada: 20,
    patrimonio_liquido: 22222,
    vpa: 14.52,
    p_vpa: 0.80,
    dy_patrimonial: 1.00,
    variacao_patrimonial: 50,
    rentabilidade_patrimonial_periodo: 50,
    rentabilidade_patrimonial_acumulada: 50,
    vacancia_fisica: 0,
    vacancia_financeira: 0,
    quantidade_ativos: 15,
    data_atualizacao: new Date(),
}

export { FiiExemple };