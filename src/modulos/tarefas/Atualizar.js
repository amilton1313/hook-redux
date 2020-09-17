import React, { useState, useEffect } from 'react'
import { A, navigate } from 'hookrouter'
import { Button, Form, Jumbotron, Modal } from 'react-bootstrap'

const Atualizar = props => {

    const [exibirModal, setExibirModal] = useState(false)
    const [formValidado, setFormValidado] = useState(false)
    const [tarefa, setTarefa] = useState('')
    const [carregarTarefa, setCarregarTarefa] = useState(true)

    useEffect(() => {

        if (carregarTarefa) {

            const tarefasDB = localStorage['tarefas']
            let tarefas = tarefasDB ? JSON.parse(tarefasDB) : []

            tarefas = tarefas.filter(
                tarefa => tarefa.id === parseInt(props.id)
                )[0]
            localStorage['tarefas'] = JSON.stringify(tarefas)

            setTarefa(tarefa.nome)
        }

    }, [carregarTarefa, props])

    const voltar = event => {
        event.preventDefault()
        navigate('/')
    }

    const handleFecharModal = () => {
        navigate('/')    
    }

    const atualizar = event => {
        event.preventDefault()
        setFormValidado(true)

        if (event.currentTarget.checkValidity() === true) {



            exibirModal(true)
        }
    }


    const handleTxtTarefa = event => {
        setTarefa(event.target.value)
    }

    return ( 
        <div>
            <h1 className="text-center">Atualizar</h1>
            <Jumbotron>
                <Form noValidate onSubmit={atualizar} validated={formValidado}>
                    <Form.Group>
                        <Form.Label>Tarefa</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Digite a tarefa"
                            minLength= "5"
                            maxLength="100"
                            required
                            value={tarefa}
                            onChange={handleTxtTarefa}
                        />

                        <Form.Control.Feedback type="invalid"></Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group className="text-center">
                        <Button variant="success" className="col-1" type="submit">Atualizar</Button>
                        &nbsp;
                        <A href="/" className="btn btn-light" onClick={voltar}>Voltar</A>
                    </Form.Group>
                </Form>
                <Modal show={exibirModal} onHide={handleFecharModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Sucesso</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Tarefa atualizada com sucesso !
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={handleFecharModal}>Continuar</Button>
                    </Modal.Footer>
                </Modal>
            </Jumbotron>


        </div>
     )
}
 
export default Atualizar