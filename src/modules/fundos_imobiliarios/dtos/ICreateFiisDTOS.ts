interface ICreateFiisDTOS {
    codigo_fundo: string,
    setor: string,
    preco_atual: number,
    liquidez_diaria: number,
    dividendo: number,
    dy: number,
    dy_3m_acumulado: number,
    dy_6m_acumulado: number,
    dy_12m_acumulado: number,
    dy_3m_media: number,
    dy_6m_media: number,
    dy_12m_media: number,
    dy_ano: number,
    variacao_preco: number,
    rentabilidade_periodo: number,
    rentabilidade_acumulada: number,
    patrimonio_liquido: number,
    vpa: number,
    p_vpa: number,
    dy_patrimonial: number,
    variacao_patrimonial: number,
    rentabilidade_patrimonial_periodo: number,
    rentabilidade_patrimonial_acumulada: number,
    vacancia_fisica: number,
    vacancia_financeira: number,
    quantidade_ativos: number,
    data_atualizacao: Date,
    data_atualizacao_api?: Date,
}

export { ICreateFiisDTOS }