import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateMinhaCarteiraItens1667698867901 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "minha_carteira_itens",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "fii_id",
                        type: "uuid",
                        isNullable: true
                    },
                    {
                        name: "preco_compra",
                        type: "numeric"
                    },
                    {
                        name: "quantidade",
                        type: "integer",
                        isNullable: true
                    },
                    {
                        name: "data_compra",
                        type: "timestamp",
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKFiiId",
                        referencedTableName: "fiis",
                        referencedColumnNames: ["id"],
                        columnNames: ["fii_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("minha_carteira_itens");
    }

}
