import React, { useState, useEffect } from 'react'
import { Form, Row, Col, Button, Jumbotron, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faFolderOpen, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import ReactDatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from "react-datepicker"
import pt from 'date-fns/locale/pt'
import './propo.css'

import MostrarImobiliarias from './MostrarImobiliarias'

registerLocale('pt', 'pt')


const Propostas = () => {

    const [idImobiliaria, setIdImobiliaria] = useState(null)
    const [nomeImobiliaria, setNomeImobiliaria] = useState('')
    const [exibirModalImobiliarias, setExibirModalImobiliarias] = useState(false)
    const [exibirBotoesImobiliarias, setExibirBotoesImobiliarias] = useState(false)


    // const getNomeImobiliaria = (id) => {
    //     console.log('get')
    //     const imob = imobiliarias.filter(imob => imob.id === id)
    //     if (imob.length === 0) {
    //         setNomeImobiliaria('')
    //     } else {
    //         setNomeImobiliaria(imob[0].nome)
    //         console.log('imob', imob)
    //     }
    // }

    // useEffect(() => {
    //     console.log('efe')
    //     getNomeImobiliaria(idImobiliaria)
    // }, [idImobiliaria])

    const handleExibirModalImobiliarias = () => {
        console.log('exib imob')
        setExibirModalImobiliarias(true)
    }


    return (
        <Jumbotron
            fluid
            style={{ paddingTop: '10px' }}
        >

            <Form noValidate style={{ margin: '10px' }}>

                <Form.Group as={Row} className="gr" controlId="nomeCompleto">
                    <Form.Label column sm={2} className="lab">Número : </Form.Label>
                    <Col sm={2}>
                        <Form.Control
                            type="text"
                            placeholder="Digite o seu nome completo"
                            name="nomeCompleto"
                            className="cont"
                            readonly
                        />
                        <Form.Control.Feedback type="invalid">
                            Digite o seu nome completo (mínimo 5 caracteres).
                            </Form.Control.Feedback>
                    </Col>

                </Form.Group>

                <Form.Group as={Row} className="gr" controlId="nomeCompleto">
                    <Form.Label column sm={2} className="lab">Data : </Form.Label>
                    <Col sm={2}>
                        <Form.Control
                            type="text"
                            placeholder="Digite o seu nome completo"
                            name="nomeCompleto"
                            className="cont"
                            readonly
                        />
                        <Form.Control.Feedback type="invalid">
                            Digite o seu nome completo (mínimo 5 caracteres).
                            </Form.Control.Feedback>
                    </Col>

                </Form.Group>


                <Form.Group as={Row} className="gr" controlId="email">
                    <Form.Label column sm={2} className="lab">Imobiliária : </Form.Label>
                    <Col sm={4}>
                        <Form.Control
                            type="text"
                            placeholder="Selecione a Imobiliária no botão ao lado."
                            name="email"
                            className="cont"
                            value={nomeImobiliaria}
                            readonly
                        />
                        <Form.Control.Feedback type="invalid">
                            Digite um e-mail válido.
                            </Form.Control.Feedback>
                    </Col>
                    <div className="d-flex" >
                        {
                            exibirBotoesImobiliarias
                            ?   <div className="d-flex">
                                    <Button disabled={false} className="bot" onClick={() => setExibirModalImobiliarias(true)}><FontAwesomeIcon icon={faFolderOpen} /></Button>
                                    <Button className="bot" onClick={() => setIdImobiliaria(null)}><FontAwesomeIcon icon={faPlus} /></Button>
                                    <Button className="bot" onClick={() => setIdImobiliaria(null)}><FontAwesomeIcon icon={faMinus} /></Button>
                                    <Button className="bot btn-light" onClick={() => setExibirBotoesImobiliarias(false)}><FontAwesomeIcon icon={faAngleDoubleLeft} /></Button>
                                </div>
                            :   <Button className="bot btn-light" onClick={() => setExibirBotoesImobiliarias(true)}><FontAwesomeIcon icon={faAngleDoubleRight} /></Button>
                        }



                    </div>


                </Form.Group>

                <Form.Group as={Row} className="gr" controlId="nomeCompleto">
                    <Form.Label column sm={2} className="lab">Corretor: </Form.Label>
                    <Col sm={4}>
                        <Form.Control
                            type="text"
                            placeholder="Digite o seu nome completo"
                            name="nomeCompleto"
                            className="cont"
                        />
                        <Form.Control.Feedback type="invalid">
                            Digite o seu nome completo (mínimo 5 caracteres).
                            </Form.Control.Feedback>
                    </Col>
                    <div className="d-flex m0" >
                        <Button disabled={false} className=" bot" onClick={() => setExibirModalImobiliarias(true)}><FontAwesomeIcon icon={faFolderOpen} /></Button>
                        <Button className=" bot" onClick={() => setIdImobiliaria(null)}><FontAwesomeIcon icon={faPlus} /></Button>
                        <Button className=" bot" onClick={() => setIdImobiliaria(null)}><FontAwesomeIcon icon={faMinus} /></Button>

                    </div>

                </Form.Group>

                <Form.Group as={Row} className="gr" controlId="nomeCompleto">
                    <Form.Label column sm={2} className="lab">Empreendimento : </Form.Label>
                    <Col sm={4}>
                        <Form.Control
                            type="text"
                            placeholder="Digite o seu nome completo"
                            name="nomeCompleto"
                            className="cont"
                        />
                        <Form.Control.Feedback type="invalid">
                            Digite o seu nome completo (mínimo 5 caracteres).
                            </Form.Control.Feedback>
                    </Col>
                    <div className="d-flex m0" >
                        <Button disabled={false} className=" bot" onClick={() => setExibirModalImobiliarias(true)}><FontAwesomeIcon icon={faFolderOpen} /></Button>
                        <Button className=" bot" onClick={() => setIdImobiliaria(null)}><FontAwesomeIcon icon={faPlus} /></Button>
                        <Button className=" bot" onClick={() => setIdImobiliaria(null)}><FontAwesomeIcon icon={faMinus} /></Button>

                    </div>

                </Form.Group>

                <Form.Group as={Row} className="gr" controlId="nomeCompleto">
                    <Form.Label column sm={2} className="lab">Tabela de Vendas : </Form.Label>
                    <Col sm={4}>
                        <Form.Control
                            type="text"
                            placeholder="Digite o seu nome completo"
                            name="nomeCompleto"
                            className="cont"
                        />
                        <Form.Control.Feedback type="invalid">
                            Digite o seu nome completo (mínimo 5 caracteres).
                            </Form.Control.Feedback>
                    </Col>
                    <div className="d-flex m0" >
                        <Button disabled={false} className=" bot" onClick={() => setExibirModalImobiliarias(true)}><FontAwesomeIcon icon={faFolderOpen} /></Button>
                        <Button className=" bot" onClick={() => setIdImobiliaria(null)}><FontAwesomeIcon icon={faPlus} /></Button>
                        <Button className=" bot" onClick={() => setIdImobiliaria(null)}><FontAwesomeIcon icon={faMinus} /></Button>

                    </div>

                </Form.Group>

                <Form.Group as={Row} className="gr" controlId="nomeCompleto">
                    <Form.Label column sm={2} className="lab">Proponente : </Form.Label>
                    <Col sm={4}>
                        <Form.Control
                            type="text"
                            placeholder="Digite o seu nome completo"
                            name="nomeCompleto"
                            className="cont"
                        />
                        <Form.Control.Feedback type="invalid">
                            Digite o seu nome completo (mínimo 5 caracteres).
                            </Form.Control.Feedback>
                    </Col>
                    <div className="d-flex m0" >
                        <Button disabled={false} className="bot" onClick={() => setExibirModalImobiliarias(true)}><FontAwesomeIcon icon={faFolderOpen} /></Button>
                        <Button className="bot" onClick={() => setIdImobiliaria(null)}><FontAwesomeIcon icon={faPlus} /></Button>
                        <Button className="bot" onClick={() => setIdImobiliaria(null)}><FontAwesomeIcon icon={faMinus} /></Button>

                    </div>

                </Form.Group>

                <Form.Group as={Row} className="gr" controlId="nomeCompleto">
                    <Form.Label column sm={2} className="lab">Interveniente : </Form.Label>
                    <Col sm={4}>
                        <Form.Control
                            type="text"
                            placeholder="Digite o seu nome completo"
                            name="nomeCompleto"
                            className="cont"
                        />
                        <Form.Control.Feedback type="invalid">
                            Digite o seu nome completo (mínimo 5 caracteres).
                            </Form.Control.Feedback>
                    </Col>
                    <div className="d-flex m0" >
                        <Button disabled={false} className="bot" onClick={() => setExibirModalImobiliarias(true)}><FontAwesomeIcon icon={faFolderOpen} /></Button>
                        <Button className="bot" onClick={() => setIdImobiliaria(null)}><FontAwesomeIcon icon={faPlus} /></Button>
                        <Button className="bot" onClick={() => setIdImobiliaria(null)}><FontAwesomeIcon icon={faMinus} /></Button>

                    </div>

                </Form.Group>

                <Form.Group as={Row} className="gr" controlId="nomeCompleto">
                    <Form.Label column sm={2} className="lab">Local da Captação : </Form.Label>
                    <Col sm={4}>
                        <Form.Control
                            type="text"
                            placeholder="Digite o seu nome completo"
                            name="nomeCompleto"
                            className="cont"
                        />
                        <Form.Control.Feedback type="invalid">
                            Digite o seu nome completo (mínimo 5 caracteres).
                            </Form.Control.Feedback>
                    </Col>
                    <div className="d-flex m0" >
                        <Button disabled={false} className="bot" onClick={() => setExibirModalImobiliarias(true)}><FontAwesomeIcon icon={faFolderOpen} /></Button>
                        <Button className="bot" onClick={() => setIdImobiliaria(null)}><FontAwesomeIcon icon={faPlus} /></Button>
                        <Button className="bot" onClick={() => setIdImobiliaria(null)}><FontAwesomeIcon icon={faMinus} /></Button>

                    </div>

                </Form.Group>

            </Form>

            {
                exibirModalImobiliarias
                    ? <MostrarImobiliarias 
                        setIdImobiliaria={setIdImobiliaria}
                        setNomeImobiliaria={setNomeImobiliaria}
                        setExibirModalImobiliarias={setExibirModalImobiliarias}
                        setExibirBotoesImobiliarias={setExibirBotoesImobiliarias} />
                    : null
            }

        </Jumbotron>
    )
}

export default Propostas