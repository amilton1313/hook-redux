import React from 'react'
import { useRoutes } from 'hookrouter'

import Entrada from '../principal/Entrada'

import Calculadora from '../modulos/calculadora/Calculadora'

import ConversorMoedas from '../modulos/conversorMoedas/ConversorMoedas'

import Listar from '../modulos/tarefas/Listar'
import Cadastrar from '../modulos/tarefas/Cadastrar'
import Atualizar from '../modulos/tarefas/Atualizar'

function Rotas() {

    const entrada = {
      '/': () => <Entrada />
    }

    const calculadora = {
      '/moedas': () => <ConversorMoedas />
    }

    const moedas = {
      '/calculadora': () => <Calculadora />
    }

    const tarefas = {
      '/tarefas/listar': () => <Listar />,
      '/tarefas/cadastrar': () => <Cadastrar />,
      '/tarefas/atualizar/:id': ({id}) => <Atualizar id={id} />
    }

    const rotas = {
      ...entrada,
      ...calculadora,
      ...moedas,
      ...tarefas
    }
  
  
    return useRoutes(rotas)
  }
  
  export default Rotas;