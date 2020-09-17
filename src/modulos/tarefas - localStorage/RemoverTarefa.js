import React, { useState } from 'react'
import { navigate } from 'hookrouter'
import { Button, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'


const RemoverTarefa = props => {

    const [exibirModal, setExibirModal] = useState(false)

    const handleAbrirModal = event => {
        event.preventDefault()
        setExibirModal(true)
    }

    const handleFecharModal = () => {
        setExibirModal(false)    
    }

    const handleRemoverTarefa = event => {
        event.preventDefault()
        const tarefasDB = localStorage['tarefas']
        let tarefas = tarefasDB ? JSON.parse(tarefasDB) : []

        tarefas = tarefas.filter(tarefa => tarefa.id !== props.tarefa.id)
        localStorage['tarefas'] = JSON.stringify(tarefas)
        setExibirModal(false)
        props.recarregarTarefas(true)
        navigate('/tarefas/listar')

    }

    return ( 
        <span>
            <Button className="btn-danger btn-sm margin1"  onClick={handleAbrirModal}>
                <FontAwesomeIcon icon={faTrashAlt} /> 
            </Button>

            <Modal show={exibirModal} onHide={handleFecharModal}>
                <Modal.Header closeButton >
                    <Modal.Title>Remover tarefa</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Deseja realmente remover a seguinte tarefa ?
                    <br />
                    <strong>{props.tarefa.nome}</strong>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleRemoverTarefa} >
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
 
export default RemoverTarefa