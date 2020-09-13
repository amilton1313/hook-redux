import React, { useState } from 'react'
import { A } from 'hookrouter'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import ConcluirTarefa from './ConcluirTarefa'

const ItensListar = props => {

    const tarefas = props.tarefas

    const marcarConcluida = tarefa => {
        return tarefa.concluida ? 'line-through' : 'none'
    }

    return ( 
        props.tarefas.map(tarefa => 
            <tr key={tarefa.id}>
                <td width="75%" style={{textDecoration: marcarConcluida(tarefa)}}>
                    {tarefa.nome}
                </td>
                <td className="text-right">
                    <ConcluirTarefa 
                        tarefa={tarefa}
                        recarregarTarefas={props.recarregarTarefas}
                        className={tarefa.concluida ? 'hidden' : null}
                    />
                    &nbsp;
                <A 
                    href={"/atualizar/" + tarefa.id}
                    className="tarefa.concluida ? 'hidden' : 'btn btn-warning btn-sm !important'"
                ><FontAwesomeIcon icon={faEdit}/></A>
                </td>
            </tr>
            )   
            )
        }
        
        export default ItensListar


            {/* <Link to={{
                pathname: `/atu/${tarefa.id}`,
                state: { titulo: 'Atualizar' }
            }} 
            className="tarefa.concluida ? 'hidden' : 'btn btn-warning btn-sm !important'"
            ><FontAwesomeIcon icon={faEdit}/></Link>  */}