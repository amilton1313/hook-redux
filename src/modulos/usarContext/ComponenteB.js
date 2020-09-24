import React, { createContext, useState } from 'react'

import ComponenteC from './ComponenteC'
import { MeuAmbiente } from './UsarContext'

export const SegundoAmbiente = createContext()

const ComponenteB = () => {
    const [segundo, setSegundo] = useState('second')
    return ( 
        <>
        <SegundoAmbiente.Provider value={{segundo}}>
        <ComponenteC/>
        </SegundoAmbiente.Provider>
        </>
     )
}
 
export default ComponenteB;