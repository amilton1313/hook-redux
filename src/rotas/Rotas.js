import React from 'react'
import { useRoutes } from 'hookrouter'

import Entrada from '../principal/Entrada'

import Calculadora from '../modulos/calculadora/Calculadora'

import ConversorMoedas from '../modulos/conversorMoedas/ConversorMoedas'

import Listar from '../modulos/tarefas/Listar'
import Cadastrar from '../modulos/tarefas/Cadastrar'
import Atualizar from '../modulos/tarefas/Atualizar'

import DashBoard from '../modulos/dashboard/DashBoard'

import Ecomerce from '../modulos/ecomerce/Ecomerce'

import Propostas from '../modulos/propostas/Propostas'

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
      '/tarefas/cadastrar': (xxx) => <Cadastrar xxx={xxx}/>,
      '/tarefas/atualizar/:id': ({id}) => <Atualizar id={id} />
    }

    const dashboard = {
      '/dashboard': () => <DashBoard />
    }

    const ecomerce = {
      '/ecomerce': () => <Ecomerce />
    }

    const propostas = {
      '/propostas': () => <Propostas />
    }

    const rotas = {
      ...entrada,
      ...calculadora,
      ...moedas,
      ...tarefas,
      ...dashboard,
      ...ecomerce,
      ...propostas
    }
  
  
    return useRoutes(rotas)
  }
  
  export default Rotas;