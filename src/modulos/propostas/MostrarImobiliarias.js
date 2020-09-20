import React, { useState, useEffect } from 'react'
import { Form, Row, Col, Button, Jumbotron, Modal } from 'react-bootstrap'

import imobiliarias from './lista-de-imobiliarias'
import Lateral from './Lateral'
import './propo.css'

const MostrarImobiliarias = ({setIdImobiliaria, setNomeImobiliaria,
        setExibirModalImobiliaria, setExibirBotoesImobiliaria}) => {

    const [exibirModal, setExibirModal] = useState(true)
    const [esconderModal, setEsconderModal] = useState(false)
    const [contador, setContador] = useState(0)

    const handleFecharModal = () => {
        setEsconderModal(true)
        setExibirModal(false)
        
        setExibirModalImobiliaria(false)
        setExibirBotoesImobiliaria(false)
    }

    const handleSelecionar = (imob) => {
        setIdImobiliaria(imob.id)
        setNomeImobiliaria(imob.nome)
        handleFecharModal()
    }

    // useEffect(() => {
    //     if (esconderModal === true) {
    //         setExibirModal(false)

    //     }
    // }, [esconderModal])

    const classe = exibirModal ? "left_sidebar left_sidebar-show" : "left_sidebar left_sidebar-hide"

    return ( 
        <div className={classe}>
            <Button onClick={() => handleFecharModal()}>Fechar</Button>


        </div>







        // <Modal show={exibirModal} onHide={handleFecharModal}>
        //             <Modal.Header closeButton>
        //                 <Modal.Title>Sucesso</Modal.Title>
        //             </Modal.Header>
        //             <Modal.Body>
        //                 {
        //                     imobiliarias.map(imob => { 
        //                             return(
        //                             <Row onClick={() => handleSelecionar(imob)}>{imob.nome}</Row>
        //                         )
        //                 })
        //                 }

        //             </Modal.Body>
        //             <Modal.Footer>
        //                 <Button variant="success" onClick={handleFecharModal}>Continuar</Button>
        //             </Modal.Footer>
        //         </Modal>
     )
}
 
export default MostrarImobiliarias