import { ICreateFiisDTOS } from "../dtos/ICreateFiisDTOS";
import { Fiis } from "../infra/typeorm/entities/Fiis";

interface IFiisRepository {
    create(data: ICreateFiisDTOS): Promise<void>;
    findByCodigoFundo(codigo_fundo: string): Promise<Fiis>;
    updateFundoById(data: ICreateFiisDTOS, id: string): Promise<void>;
    getBestFiisQuery1(): Promise<Fiis[]>
}

export { IFiisRepository };