import React, { useState } from 'react'
import { A } from 'hookrouter'

import { Button, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'

import ConcluirTarefa from './ConcluirTarefa'
import RemoverTarefa from './RemoverTarefa'

import './tarefas.css'

const ItensListar = (props) => {

    console.log('itens ',props)

    const tarefas = props.tarefas

    const marcarConcluida = tarefa => {
        return tarefa.concluida ? 'line-through' : 'none'
    }

    return ( 
        props.tarefas.map(tarefa => 

            
            <tr key={tarefa.id} style={{width: '100%'}}>
                <td style={{width: '76%'}} style={{textDecoration: marcarConcluida(tarefa), padding: 0, width: '84%'}}>
                    {tarefa.nome}
                </td>
                <td  style={{padding: 2, width: '8%'}}>
                    {
                     !tarefa.concluida
                     ? <ConcluirTarefa 
                        tarefa={tarefa}
                        recarregarTarefas={props.recarregarTarefas}
                        />  
                    : null   
                    }
                    
                </td>
                <td style={{padding: 2, width: '8%'}}>
                    {
                     !tarefa.concluida
                     ? <Button className={tarefa.concluida ? 'hidden' : 'btn-sm margin1'} >
                            <A style={{color: 'white'}}
                                href={"/tarefas/atualizar/" + tarefa.id}                                
                            ><FontAwesomeIcon icon={faEdit}/></A>
                        </Button>  
                    : null   
                    }
                
                </td>
                <td style={{padding: 2, width: '8%'}}>
                    <RemoverTarefa 
                        tarefa={tarefa}
                        recarregarTarefas={props.recarregarTarefas}
                    />
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