import React from 'react'
import { useRoutes } from 'hookrouter'

import Listar from '../components/Listar'
import Cadastrar from '../components/Cadastrar'
import Atualizar from '../components/Atualizar'

function Rotas() {

  
    const routes = {
      '/': () => <Listar />,
      '/cadastrar': () => <Cadastrar />,
      '/atualizar/:id': ({id}) => <Atualizar id={id} />
    }
  
  
    return useRoutes(routes)
  }
  
  export default Rotas