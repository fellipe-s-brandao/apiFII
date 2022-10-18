
import { Fiis } from "@modules/fundos_imobiliarios/infra/typeorm/entities/Fiis";
import axios from "axios";

class GetFiis {

    constructor() { }

    async execute(): Promise<Fiis[]> {
        try {
            const response = await axios.get<Fiis[]>(process.env.APIFUNDO);

            return response.data;
        } catch (error) {
            console.log("getFiis", error);
        }
    }
}

export { GetFiis }