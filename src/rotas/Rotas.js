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

import Proposta from '../modulos/propostas/Proposta'

import Sidebar from '../modulos/sidebar/Sidebar'

import UsarContext from '../modulos/usarContext/UsarContext'

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
      '/proposta': () => <Proposta />
    }

    const sidebar = {
      '/sidebar': () => <Sidebar />
    }

    const usarContext = {
      '/usarContext': () => <UsarContext />
    }

    const rotas = {
      ...entrada,
      ...calculadora,
      ...moedas,
      ...tarefas,
      ...dashboard,
      ...ecomerce,
      ...propostas,
      ...sidebar,
      ...usarContext
    }
  
  
    return useRoutes(rotas)
  }
  
  export default Rotas;