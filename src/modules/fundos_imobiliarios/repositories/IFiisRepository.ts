import { ICreateFiisDTOS } from "../dtos/ICreateFiisDTOS";
import { Fiis } from "../entities/Fiis";

interface IFiisRepository {
    create(data: ICreateFiisDTOS): Promise<void>;
    findByCodigoFundo(codigo_fundo: string): Promise<Fiis>;
    updateFundoById(data:ICreateFiisDTOS, id: string): Promise<void>;
}

export { IFiisRepository };