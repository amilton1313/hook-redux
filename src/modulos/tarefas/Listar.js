import React, { useState, useEffect } from 'react'
import { A, navigate } from 'hookrouter'
import { Table, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'

import ItensListar from './ItensListar'
import Paginacao from './Paginacao'
import axios from 'axios'

const Listar = () => {

    const ITEMS_POR_PAG = 3
    const API_URL_TAREFAS = 'http://localhost:3001/tarefas'

    const [tarefas, setTarefas] = useState([])
    const [carregarTarefas, setCarregarTarefas] = useState(true)
    const [totalItems, setTotalItems] = useState(0)
    const [paginaAtual, setPaginaAtual] = useState(1)

    useEffect(() => {

        async function obterTarefas() {
            try {
                let { data } = await axios.get(API_URL_TAREFAS)
                console.log('data', data)
                let listaTarefas = data
                setTotalItems(listaTarefas.length)
                setTarefas(listaTarefas.splice((paginaAtual - 1) * ITEMS_POR_PAG, ITEMS_POR_PAG))

            } catch(err) {
                
            }

        }

        if (carregarTarefas) {
            obterTarefas()
            setCarregarTarefas(false)
        }
    }, [carregarTarefas, paginaAtual])

    const handleMudarPagina = (pagina) => {
        setPaginaAtual(pagina)
        setCarregarTarefas(true)
    }

    return ( 
            <div className="text-center">
                <h3>Tarefas a fazer</h3>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th style={{width: '84%'}}>Tarefa</th>
                            <th style={{width: '8%'}}>
                                <A 
                                    href="/tarefas/cadastrar"
                                    className="btn btn-success btn-sm"    
                                ><FontAwesomeIcon icon={faPlus}/> Cadastrar</A>
                                </th>
                                <th style={{width: '8%'}}>
                                <A 
                                    href="/"
                                    className="btn btn-primary btn-sm"    
                                ><FontAwesomeIcon icon={faSignOutAlt}/> Sair</A>
                            </th>
                            <th>
                                <Button onClick={() => navigate('/tarefas/cadastrar? a="aaaa" & b="bbbb"')}>teste</Button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>

                        <ItensListar tarefas={tarefas} recarregarTarefas={setCarregarTarefas}/>

                    </tbody>
                </Table>
                <Paginacao
                    totalItems={totalItems}
                    ItensPorPagina={ITEMS_POR_PAG}
                    paginaAtual={paginaAtual}
                    mudarPagina={handleMudarPagina}
                >

                </Paginacao>

            </div>

)
}

export default Listar

    {/* <Link to={{
                pathname: "/cad",
                state: { titulo: 'Cadastrar' }
            }} 
            className="btn btn-success btn-sm"
            ><FontAwesomeIcon icon={faPlus}/> Cadastrar</Link> */}