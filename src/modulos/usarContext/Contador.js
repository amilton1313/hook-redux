import React, { useContext } from 'react'

import { NumeroContext } from './UsarContext'

const Contador = () => {

    const { numero, setNumero } = useContext(NumeroContext)

    return ( 
        <>
        <h1>{numero}</h1>
        <button onClick={() => setNumero(numero + 1)} className="btn btn-primary col-1">Incrementar</button>

        </>
     )
}
 
export default Contador