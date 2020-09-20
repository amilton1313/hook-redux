import React, { useState } from 'react'
import { Form, Row, Col, Button, Jumbotron, Modal } from 'react-bootstrap'

import corretores from './lista-de-imobiliarias'

const MostrarCorretores = ({setIdCorretor, setNomeCorretor,
        setExibirModalCorretor, setExibirBotoesCorretor}) => {

    const [exibirModal, setExibirModal] = useState(true)
    const [contador, setContador] = useState(0)

    const handleFecharModal = () => {
        setExibirModal(false)
        
        setExibirModalCorretor(false)
        setExibirBotoesCorretor(false)
    }

    const handleSelecionar = (imob) => {
        setIdCorretor(imob.id)
        setNomeCorretor(imob.nome)
        handleFecharModal()
    }

    return ( 
        <Modal show={exibirModal} onHide={handleFecharModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Sucesso</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {
                            corretores.map(imob => { 
                                    return(
                                    <Row onClick={() => handleSelecionar(imob)}>{imob.nome}</Row>
                                )
                        })
                        }

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="success" onClick={handleFecharModal}>Continuar</Button>
                    </Modal.Footer>
                </Modal>
     )
}
 
export default MostrarCorretores