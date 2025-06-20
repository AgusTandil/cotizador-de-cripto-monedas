import { useEffect } from "react"
import CriptoSearchForm from "./components/CriptoSearchForm"
import { useCryptoStore } from "./store/store"

function App() {

  const {fetchCryptos} = useCryptoStore()

  useEffect(()=> {fetchCryptos()},[])
 

  return (
    <>
    <div className="container">
      <h1 className="app-title">
      Cotizador de <span>Criptomonedas</span>
      </h1>
      <div className="content">
        <CriptoSearchForm/>
      </div>
    </div>
    </>
  )
}

export default App
