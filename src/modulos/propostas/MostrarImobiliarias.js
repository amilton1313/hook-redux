import React, { useState } from 'react'
import { Form, Row, Col, Button, Jumbotron, Modal } from 'react-bootstrap'

import imobiliarias from './lista-de-imobiliarias'

const MostrarImobiliarias = ({setIdImobiliaria, setNomeImobiliaria,
        setExibirModalImobiliarias, setExibirBotoesImobiliarias}) => {

    const [exibirModal, setExibirModal] = useState(true)
    const [contador, setContador] = useState(0)

    const handleFecharModal = () => {
        setExibirModal(false)
        
        setExibirModalImobiliarias(false)
        setExibirBotoesImobiliarias(false)
    }

    const handleSelecionar = (imob) => {
        setIdImobiliaria(imob.id)
        setNomeImobiliaria(imob.nome)
        handleFecharModal()
    }

    return ( 
        <Modal show={exibirModal} onHide={handleFecharModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Sucesso</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {
                            imobiliarias.map(imob => { 
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
 
export default MostrarImobiliarias