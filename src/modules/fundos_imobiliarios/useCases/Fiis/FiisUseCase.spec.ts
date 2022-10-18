import { FiisRepositoryInMemory } from "@modules/fundos_imobiliarios/repositories/in-memory/FiisRepositoryInMemory";
import { FiiExemple } from "utils/test/FiiExemple";
import { FiisUseCase } from "./FiisUseCase";

let fiisUseCase: FiisUseCase;
let fiisRepositoryInMemory: FiisRepositoryInMemory;


describe("Fiis Use Case", () => {
    beforeEach(() => {
        fiisRepositoryInMemory = new FiisRepositoryInMemory();
        fiisUseCase = new FiisUseCase(fiisRepositoryInMemory);
    });

    it("should be able to create a new fii", async () => {
        let fundoExemple = FiiExemple;

        console.log(fundoExemple);
        
    });
})
