
import axios from "axios";
import { Fiis } from "../../entities/Fiis";

class GetFiis {

    constructor(){}

    async execute(): Promise<Fiis[]> {
        try {
            const response = await axios.get<Fiis[]>("https://fii.samuelterra.dev/");

            return response.data;
        } catch (error) {
            console.log("getFiis", error);
        }
    }
}

export { GetFiis }