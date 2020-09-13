import React, { useState, useEffect } from 'react'
import { A } from 'hookrouter'
import { Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

import ItensListar from './ItensListar'

const Listar = () => {
        const [tarefas, setTarefas] = useState([])
    const [carregarTarefas, setCarregarTarefas] = useState(true)

    useEffect(() => {

        function obterTarefas() {
            const tarefasDB = localStorage['tarefas']
            let listarTarefas = tarefasDB ? JSON.parse(tarefasDB) : []
            setTarefas(listarTarefas)
        }

        if (carregarTarefas) {
            obterTarefas()
            setCarregarTarefas(false)
        }
    }, [carregarTarefas])

    return ( 
            <div className="text-center">
                <h3>Tarefas a fazer</h3>
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Tarefa</th>
                            <th>
                                <A 
                                    href="/cadastrar"
                                    className="btn btn-success btn-sm"    
                                ><FontAwesomeIcon icon={faPlus}/> Cadastrar</A>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <ItensListar tarefas={tarefas} recarregarTarefas={setCarregarTarefas}/>
                    </tbody>
                </Table>

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