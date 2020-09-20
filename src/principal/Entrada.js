import React from 'react'
import { A } from 'hookrouter'

const Entrada = () => {
    return ( 
        <div>
            <h1>Estudos</h1>
            <A href="/calculadora" className="btn btn-primary">Calculadora</A>
            &nbsp;
            <A href="/moedas" className="btn btn-primary">ConversorMoedas</A>
            &nbsp;
            <A href="/tarefas/listar" className="btn btn-primary">Tarefas</A>
            &nbsp;
            <A href="/dashboard" className="btn btn-primary">Dashboard</A>
            &nbsp;
            <A href="/ecomerce" className="btn btn-primary">e-Comerce</A>
            &nbsp;
            <A href="/propostas" className="btn btn-primary">Propostas</A>
            &nbsp;
            <A href="/sidebar" className="btn btn-primary">Sidebar</A>
        </div>
     )
}
 
export default Entrada