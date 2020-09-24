import React, { useContext } from 'react'

import { NumeroContext } from './UsarContext'

const Espelho = () => {

  const { numero, setNumero } = useContext(NumeroContext)

  return ( 
        <div>

  <h1>{numero}</h1>
        </div>
      );
}
 
export default Espelho;