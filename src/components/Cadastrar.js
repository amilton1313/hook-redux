import React, {useState} from 'react'
import { A, navigate } from 'hookrouter'
import { Button, Form, Jumbotron, Modal } from 'react-bootstrap'

import Tarefa from '../models/Tarefa.model'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Cadastrar = props => {

    const [tarefa, setTarefa] = useState('')
    const [formValidado, setFormValidado] = useState(false)
    const [exibirModal, setExibirModal] = useState(false)

    const cadastrar = event => {
        event.preventDefault()
        setFormValidado(true)
        if (event.currentTarget.checkValidity() === true) {
            const tarefasDB = localStorage['tarefas']
            const tarefas = tarefasDB ? JSON.parse(tarefasDB) : []

            tarefas.push(new Tarefa(new Date().getTime(), tarefa, false))
            localStorage['tarefas'] = JSON.stringify(tarefas)
            setExibirModal(true)
        }
    }

    const handleTxtTarefa = event => {
        setTarefa(event.target.value)
    }

    const handleFecharModal = () => {
        setExibirModal(false)
        navigate("/")
    }

    return (
        <div>
            <h3 className="text-center">Cadastrar</h3>
            <Jumbotron>
                <Form 
                    validated={formValidado}
                    noValidate
                    onSubmit={cadastrar}
                >
                    <Form.Group>
                        <Form.Label>Tarefa</Form.Label>
                        <Form.Control 
                            type="text" 
                            placeholder="Digite a tarefa"
                            minLength="5"
                            maxLength="100"
                            required
                            value={tarefa}
                            onChange={handleTxtTarefa}
                        />
                        <Form.Control.Feedback type="invalid">
                            A tarefa deve conter ao menos 5 caracteres.
                        </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className="text-center">
                        <Button 
                            variant="success"
                            type="submit">
                                Cadastrar
                            </Button>
                        &nbsp;
                        <A href="/" className="btn btn-light">Voltar</A>
                    </Form.Group>
                </Form>
                <Modal show={exibirModal} onHide={handleFecharModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Sucesso</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Tarefa adicionada com sucesso !
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={handleFecharModal}>Continuar</Button>
                    </Modal.Footer>
                </Modal>
            </Jumbotron>

        </div> 
     )
}
 
export default Cadastrar