import React, { useState } from 'react'
import { navigate } from 'hookrouter'
import { Button, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClipboardCheck } from '@fortawesome/free-solid-svg-icons'

const ConcluirTarefa = props => {

    const [exibirModal, setExibirModal] = useState(false)

    const handleAbrirModal = event => {
        event.preventDefault()
        setExibirModal(true)
    }

    const handleFecharModal = () => {
        setExibirModal(false)    
    }

    const handleConcluirTarefa = event => {
        event.preventDefault()
        const tarefasDB = localStorage['tarefas']
        let tarefas = tarefasDB ? JSON.parse(tarefasDB) : []

        tarefas = tarefas.map(tarefa => {
            if (tarefa.id === props.tarefa.id) {
                tarefa.concluida = true
            }

            return tarefa
        })

        localStorage['tarefas'] = JSON.stringify(tarefas)
        setExibirModal(false)
        props.recarregarTarefas(true)
        navigate('/')

    }

    return ( 
        <span className={props.ClassName}>
            <Button className="btn-sm" onClick={handleAbrirModal}>
                <FontAwesomeIcon icon={faClipboardCheck} /> 
            </Button>

            <Modal show={exibirModal} onHide={handleFecharModal}>
                <Modal.Header closeButton >
                    <Modal.Title>Concluir tarefa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Deseja realmente concluir a seguinte tarefa ?
                    <br />
                    <strong>{props.tarefa.nome}</strong>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleConcluirTarefa} >
                        Sim
                    </Button>

                    <Button variant="light" onClick={handleFecharModal} >
                        Não
                    </Button>
                </Modal.Footer>
            </Modal>    

        </span>
     )
}
 
export default ConcluirTarefa