import React, { createContext, useState } from 'react'

import Contador from './Contador'
import Espelho from './Espelho'

export const NumeroContext = createContext()

const UsarContext = () => {

    const [numero, setNumero] = useState(0)

    return ( 
        <div>
            <NumeroContext.Provider value = {{numero, setNumero}}>
            <Contador />
            <br />
            <Espelho />

            </NumeroContext.Provider>
        </div>
     );
}
 
export default UsarContext