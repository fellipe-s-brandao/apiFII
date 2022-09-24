import { inject, injectable } from "tsyringe";
import { ICreateFiisDTOS } from "../../dtos/ICreateFiisDTOS";
import { IFiisRepository } from "../../repositories/IFiisRepository";

@injectable()
class FiisUseCase {
    constructor(
        @inject('FiisRepository')
        private fiisRepository: IFiisRepository
    ){}

    async update_fiis(fundos: ICreateFiisDTOS[]): Promise<void> {
        console.log("Atualizando Fundos!");

        fundos.map(async (fundo) => {
            const { codigo_fundo } = fundo;
            let fundoCriado = await this.fiisRepository.findByCodigoFundo(codigo_fundo);

            if(fundoCriado === undefined) {
                await this.fiisRepository.create(fundo);
            } else {
                fundo.data_atualizacao_api = new Date();

                await this.fiisRepository.updateFundoById(fundo, fundoCriado.id);
            }
        })

        console.log("Fundos Atualizados!");
    }
}

export { FiisUseCase };