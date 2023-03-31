import React from 'react'
import Cabecalho from './Cabecalho'
import Rodape from './Rodape'

const Pagina = () => {
  return (
    <>
    <Cabecalho />
    <div classeName='bg-secundary text-white py-3 text-center mb-3'>
        <h1>Página</h1>
    </div>
    <Rodape />
    </>
  )
}

export default Pagina