import { Fiis } from "@modules/fundos_imobiliarios/infra/typeorm/entities/Fiis";
import * as puppeteer from "puppeteer";
import moment from 'moment';

class CrawlerFiis {
    async execute(): Promise<Fiis[]> {
        try {
            console.log("Crawler is running");

            const browser = await puppeteer.launch({
                args: ['--no-sandbox'],
                executablePath: '/usr/bin/chromium',
                headless: true,
                defaultViewport: null,
            });

            const page = await browser.newPage();
            await page.goto(process.env.APIFUNDO);

            const result: Fiis[] = await page.evaluate(() => {
                
                const FiisEncontrados: Fiis[] = [];

                function moneyParse(valor: string): number {
                    if (valor == "N/A") {
                        return 0;
                    }

                    return parseFloat(valor.replace("R$ ", "").replace(".", "").replace(",", "."));
                }

                function percentParse(valor: string): number {
                    if (valor == "N/A") {
                        return 0;
                    }

                    return parseFloat(valor.replace("%", "").replace(".", "").replace(",", "."));
                }

                document.querySelectorAll('tbody > tr').forEach(
                    linhas => {
                        let linha = linhas.querySelectorAll('td');

                        if (linha.length < 0) {
                            throw new console.error(
                                "Crawler parou"
                            );
                        }

                        const fii: Fiis = {
                            codigo_fundo: linha[0].innerText,
                            setor: linha[1].innerText,
                            preco_atual: moneyParse(linha[2].innerText),
                            liquidez_diaria: parseInt(linha[3].innerText.replace(".0", "")),
                            dividendo: moneyParse(linha[4].innerText),
                            dy: percentParse(linha[5].innerText),
                            dy_3m_acumulado: percentParse(linha[6].innerText),
                            dy_6m_acumulado: percentParse(linha[7].innerText),
                            dy_12m_acumulado: percentParse(linha[8].innerText),
                            dy_3m_media: percentParse(linha[9].innerText),
                            dy_6m_media: percentParse(linha[10].innerText),
                            dy_12m_media: percentParse(linha[11].innerText),
                            dy_ano: percentParse(linha[12].innerText),
                            variacao_preco: percentParse(linha[13].innerText),
                            rentabilidade_periodo: percentParse(linha[14].innerText),
                            rentabilidade_acumulada: percentParse(linha[15].innerText),
                            patrimonio_liquido: moneyParse(linha[16].innerText),
                            vpa: moneyParse(linha[17].innerText),
                            p_vpa: percentParse(linha[18].innerText),
                            dy_patrimonial: percentParse(linha[19].innerText),
                            variacao_patrimonial: percentParse(linha[20].innerText),
                            rentabilidade_patrimonial_periodo: percentParse(linha[21].innerText),
                            rentabilidade_patrimonial_acumulada: percentParse(linha[22].innerText),
                            vacancia_fisica: percentParse(linha[23].innerText),
                            vacancia_financeira: percentParse(linha[24].innerText),
                            quantidade_ativos: parseInt(linha[25].innerText.replace(".0", "")),
                        };
                        FiisEncontrados.push(fii);
                    }
                );
                return FiisEncontrados;
            });

            browser.close();
            console.log("Crawler rodou!");

            return result;
        } catch (error) {
            console.log(`Crawler parou - ${error}`);
        }
    }
}

export { CrawlerFiis };