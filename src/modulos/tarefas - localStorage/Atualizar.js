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

           const tarefaAtual = tarefas.filter(
                tarefa => parseInt(tarefa.id) === parseInt(props.id)
                )[0]

                setCarregarTarefa(false)
                setTarefa(tarefaAtual.nome)
        }

    }, [carregarTarefa, props])

    const voltar = event => {
        event.preventDefault()
       navigate('/tarefas/listar')
    }

    const handleFecharModal = () => {
       navigate('/tarefas/listar')    
    }

    const salvar = event => {
        event.preventDefault()
        setFormValidado(true)

        if (event.currentTarget.checkValidity() === true) {
            const tarefasDB = localStorage['tarefas']
            let tarefas = tarefasDB ? JSON.parse(tarefasDB) : []

            tarefas = tarefas.map(tarefaOb => {
                if (tarefaOb.id === parseInt(props.id)) {
                    tarefaOb.nome = tarefa
                }
                return tarefaOb
            })

            localStorage['tarefas'] = JSON.stringify(tarefas)

            setExibirModal(true)
        }
    }


    const handleTxtTarefa = event => {
        setTarefa(event.target.value)
    }

    // const salvar = event => {
    //     event.preventDefault()
    //     const tarefas = carregarTarefa.map(tarefa => {
    //         if (tarefa.id = props.id) {
    //             tarefa.nome = tarefa
    //         }
    //         return tarefa
    //     })

    //     console.log('salvar', tarefas)
    // }

    return ( 
        <div>
            <h1 className="text-center">Atualizar</h1>
            <Jumbotron>
                <Form noValidate onSubmit={salvar} validated={formValidado}>
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
                        <Button variant="success" className="col-2" type="submit" onSubmit={salvar}>Atualizar</Button>
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