import { FiisRepositoryInMemory } from "@modules/fundos_imobiliarios/repositories/in-memory/FiisRepositoryInMemory";
import { FiiExemple } from "@utils/test/FiiExemple";

import { FiisUseCase } from "./FiisUseCase";

let fiisUseCase: FiisUseCase;
let fiisRepositoryInMemory: FiisRepositoryInMemory;


describe("Fiis Use Case", () => {
    beforeEach(() => {
        fiisRepositoryInMemory = new FiisRepositoryInMemory();
        fiisUseCase = new FiisUseCase(fiisRepositoryInMemory);
    });

    // Ajustar teste
    it("should be able to create a new fii", async () => {
        let fundoExemple = [ FiiExemple ];

        await fiisUseCase.update_fiis(fundoExemple);
        const fundo = await fiisRepositoryInMemory.findByCodigoFundo(FiiExemple.codigo_fundo)

        expect(fundo).not.toBeNull();
    });

    const insertAndReturnFii = async () => {
        await fiisUseCase.update_fiis([FiiExemple]);
        return await fiisRepositoryInMemory.findByCodigoFundo(FiiExemple.codigo_fundo)
    }

    it("should be able to update fii", async () => {

        //const fundo = await insertAndReturnFii();

        let fundoExemple = FiiExemple;
        
        await fiisUseCase.update_fiis([fundoExemple]);
        const fundo = await fiisRepositoryInMemory.findByCodigoFundo(fundoExemple.codigo_fundo)
        console.log(fundo);

    });
})
