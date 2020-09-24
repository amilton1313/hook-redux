import React, {useContext} from 'react'


import {MeuAmbiente} from './UsarContext'
import { SegundoAmbiente } from './ComponenteB'

import Espelho from './Espelho'


const ComponenteC = () => {
    const {nome, setNome} = useContext(MeuAmbiente)
    const { segundo } = useContext(SegundoAmbiente)
    setNome('amilton jose rocha')
    return ( 
        <div>
            {nome} - {segundo}
        </div>

     )
}
 
export default ComponenteC;