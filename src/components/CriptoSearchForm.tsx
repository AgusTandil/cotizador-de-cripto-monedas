import { useState } from 'react'
import {currencies} from '../data'
import { useCryptoStore } from '../store/store'
import type { Pair } from '../types'
export default function CriptoSearchForm() {

    const {cryptoCurrencies} = useCryptoStore()
    const [pair,setPair]= useState<Pair>({
        currency:'',
        cryptoCurrency: ''
    });

  return (
    <form className="form">
        <div className="field">
            <label htmlFor="currency">Moneda:</label>
            <select name="currency" id="currency">
                <option value="">-- Seleccione --</option>
                 {currencies.map(currency => (
                    <option value={currency.code} key={currency.code}>{currency.name}</option>
                ))}
            </select>
        </div>
        <div className="field">
            <label htmlFor="criptocurrency">Criptomoneda:</label>
            <select name="criptocurrency" id="criptocurrency">
                <option value="">-- Seleccione --</option>
               {cryptoCurrencies.map((crypto)=>(
                <option key={crypto.CoinInfo.Name} value={crypto.CoinInfo.Name}>{crypto.CoinInfo.FullName}</option>
               ))}
            </select>
        </div>
        <input type="submit" value="Cotizar" />
    </form>
  )
}
