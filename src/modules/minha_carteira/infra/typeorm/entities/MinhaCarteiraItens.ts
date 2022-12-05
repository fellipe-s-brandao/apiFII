import { Fiis } from "@modules/fundos_imobiliarios/infra/typeorm/entities/Fiis";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuidV4 } from "uuid";

@Entity("minha_carteira_itens")
class MinhaCarteiraItens {
    @PrimaryColumn()
    id: string;

    @ManyToOne(() => Fiis)
    @JoinColumn({ name: "fii_id" })
    fiis: Fiis

    @Column()
    fii_id: string;

    @Column()
    preco_compra: number;

    @Column()
    quantidade: number;

    @Column()
    data_compra: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { MinhaCarteiraItens }