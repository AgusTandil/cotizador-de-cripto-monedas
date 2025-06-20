import axios from "axios";
import { CryptoCurrenciesResponseSchema } from "../schemas/crypto-schema";

export async function getCryptos() {
  const url =
    "https://min-api.cryptocompare.com/data/top/totalvolfull?limit=20&tsym=USD";

  const {
    data: { Data },
  } = await axios.get(url);

  const result = CryptoCurrenciesResponseSchema.safeParse(Data);

  if (result.success) {
    return result.data;
  }
}
