import React, { useState, useEffect } from 'react'
import { Form, Row, Col, Button, Jumbotron, Modal } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faFolderOpen, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'
import ReactDatePicker, { registerLocale } from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from "react-datepicker"
import pt from 'date-fns/locale/pt'
import './propo.css'

import PropostaImobiliaria from './PropostaImobiliaria'
import PropostaCorretor from './PropostaCorretor'
import Lateral from './Lateral'

registerLocale('pt', 'pt')

const Propostas = () => {

    const [idProposta, setIdProposta] = useState(3606)
    const [data, setData] = useState('10/09/2020')


    const [idImobiliaria, setIdImobiliaria] = useState(null)
    const [nomeImobiliaria, setNomeImobiliaria] = useState('')

    const [idCorretor, setIdCorretor] = useState(null)
    const [nomeCorretor, setNomeCorretor] = useState('')
    const [exibirModalCorretor, setExibirModalCorretor] = useState(false)
    const [exibirBotoesCorretor, setExibirBotoesCorretor] = useState(false)

    const [idEmpreendimento, setIdEmpreendimento] = useState(null)
    const [nomeEmpreendimento, setNomeEmpreendimento] = useState('')
    const [exibirModalEmpreendimento, setExibirModalEmpreendimento] = useState(false)
    const [exibirBotoesEmpreendimento, setExibirBotoesEmpreendimento] = useState(false)

    const [idTabVenda, setIdTabVenda] = useState(null)
    const [nomeTabVenda, setNomeTabVenda] = useState('')
    const [exibirModalTabVendas, setExibirModalTabVendas] = useState(false)
    const [exibirBotoesTabVendas, setExibirBotoesTabVendas] = useState(false)

    const [idProponente, setIdProponente] = useState(null)
    const [nomeProponente, setNomeProponente] = useState('')
    const [exibirModalProponente, setExibirModalProponente] = useState(false)
    const [exibirBotoesProponente, setExibirBotoesProponente] = useState(false)

    const [idInterveniente, setIdInterveniente] = useState(null)
    const [nomeInterveniente, setNomeInterveniente] = useState('')
    const [exibirModalInterveniente, setExibirModalInterveniente] = useState(false)
    const [exibirBotoesInterveniente, setExibirBotoesInterveniente] = useState(false)

    const [idLocalCaptacao, setIdLocalCaptacao] = useState(null)
    const [nomeLocalCaptacao, setNomeLocalCaptacao] = useState('')
    const [exibirModalLocaisCaptacao, setExibirModalLocaisCaptacao] = useState(false)
    const [exibirBotoesLocaisCaptacao, setExibirBotoesLocaisCaptacao] = useState(false)


    const handleExibirModalImobiliarias = () => {
        // setExibirModalImobiliaria(true)
    }

     useEffect(() => {
        if (!idImobiliaria) { setNomeImobiliaria('') }
        if (!idCorretor) { setNomeCorretor('') }
    }, [idImobiliaria, idCorretor])

    return (
        <>
        <Jumbotron
            fluid
            style={{ paddingTop: '10px' }}
        >

            <Form noValidate style={{ margin: '10px' }}>


                {/* Numero */}
                <Form.Group as={Row} className="gr">
                    <Form.Label column sm={2} className="lab">Número : </Form.Label>
                    <Col sm={2}>
                        <Form.Control
                            type="text"
                            name="numero"
                            className="cont"
                            value={idProposta}
                            readonly
                        />
                    </Col>
                </Form.Group>


                {/* Data */}
                <Form.Group as={Row} className="gr">
                    <Form.Label column sm={2} className="lab">Data : </Form.Label>
                    <Col sm={2}>
                        <Form.Control
                            type="text"
                            name="data"
                            className="cont"
                            value={data}
                            readonly
                        />
                    </Col>

                </Form.Group>

                {/* Imobiliaria */}
                <PropostaImobiliaria 
                    setIdImobiliaria={setIdImobiliaria}
                    setNomeImobiliaria={setNomeImobiliaria}
                    nomeImobiliaria={nomeImobiliaria}
                />

                {/* Corretor */}
                <PropostaCorretor 
                    setIdCorretor={setIdCorretor}
                    setNomeCorretor={setNomeCorretor}
                    nomeCorretor={nomeCorretor}
                />

                {/* Empreendimento */}
                <Form.Group 
                    as={Row}
                    onMouseOver={() => setExibirBotoesEmpreendimento(true)}   
                    onMouseLeave={() => setExibirBotoesEmpreendimento(false)} 
                    className="gr"
                >
                    <Form.Label column sm={2} className="lab">Empreendimento : </Form.Label>
                    <Col sm={4}>
                        <Form.Control
                            type="text"
                            placeholder="Selecione um Empreendimento no botão ao lado."
                            name="id_empreendimento"
                            className="cont"
                        />
                        <Form.Control.Feedback type="invalid">
                            Digite o seu nome completo (mínimo 5 caracteres).
                            </Form.Control.Feedback>
                    </Col>
                    <div className="d-flex" >
                        {
                            exibirBotoesEmpreendimento
                            ?   <div className="d-flex">
                                    <Button disabled={false} className="bot" onClick={() => setExibirModalEmpreendimento(true)}><FontAwesomeIcon icon={faFolderOpen} /></Button>
                                    <Button className="bot" onClick={() => setIdEmpreendimento(null)}><FontAwesomeIcon icon={faPlus} /></Button>
                                    <Button className="bot" onClick={() => setIdEmpreendimento(null)}><FontAwesomeIcon icon={faMinus} /></Button>
                                </div>
                            :   null
                        }
                    </div>

                </Form.Group>



                {/* Tabela de Vendas */}
                <Form.Group 
                    as={Row}
                    onMouseOver={() => setExibirBotoesTabVendas(true)}   
                    onMouseLeave={() => setExibirBotoesTabVendas(false)} 
                    className="gr"
                >
                    <Form.Label column sm={2} className="lab">Tabela de Vendas : </Form.Label>
                    <Col sm={4}>
                        <Form.Control
                            type="text"
                            placeholder="Selecione uma Tabela de Vendas no botão ao lado."
                            name="id_tabela"
                            className="cont"
                        />
                        <Form.Control.Feedback type="invalid">
                            Digite o seu nome completo (mínimo 5 caracteres).
                            </Form.Control.Feedback>
                    </Col>
                    <div className="d-flex" >
                        {
                            exibirBotoesTabVendas
                            ?   <div className="d-flex">
                                    <Button disabled={false} className="bot" onClick={() => setExibirModalTabVendas(true)}><FontAwesomeIcon icon={faFolderOpen} /></Button>
                                    <Button className="bot" onClick={() => setIdTabVenda(null)}><FontAwesomeIcon icon={faPlus} /></Button>
                                    <Button className="bot" onClick={() => setIdTabVenda(null)}><FontAwesomeIcon icon={faMinus} /></Button>
                                </div>
                            :   null
                        }
                    </div>

                </Form.Group>



                {/* Proponente */}
                <Form.Group 
                    as={Row}
                    onMouseOver={() => setExibirBotoesProponente(true)}   
                    onMouseLeave={() => setExibirBotoesProponente(false)} 
                    className="gr"
                >
                    <Form.Label column sm={2} className="lab">Proponente : </Form.Label>
                    <Col sm={4}>
                        <Form.Control
                            type="text"
                            placeholder="Selecione um Proponente no botão ao lado."
                            name="id_proponente"
                            className="cont"
                        />
                        <Form.Control.Feedback type="invalid">
                            Digite o seu nome completo (mínimo 5 caracteres).
                            </Form.Control.Feedback>
                    </Col>
                    <div className="d-flex" >
                        {
                            exibirBotoesProponente
                            ?   <div className="d-flex">
                                    <Button disabled={false} className="bot" onClick={() => setExibirModalProponente(true)}><FontAwesomeIcon icon={faFolderOpen} /></Button>
                                    <Button className="bot" onClick={() => setIdProponente(null)}><FontAwesomeIcon icon={faPlus} /></Button>
                                    <Button className="bot" onClick={() => setIdProponente(null)}><FontAwesomeIcon icon={faMinus} /></Button>
                                </div>
                            :   null
                        }
                    </div>

                </Form.Group>


                {/* Interveniente */}
                <Form.Group 
                    as={Row}
                    onMouseOver={() => setExibirBotoesInterveniente(true)}   
                    onMouseLeave={() => setExibirBotoesInterveniente(false)} 
                    className="gr"
                >
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
                    <div className="d-flex" >
                        {
                            exibirBotoesInterveniente
                            ?   <div className="d-flex">
                                    <Button disabled={false} className="bot" onClick={() => setExibirModalInterveniente(true)}><FontAwesomeIcon icon={faFolderOpen} /></Button>
                                    <Button className="bot" onClick={() => setIdInterveniente(null)}><FontAwesomeIcon icon={faPlus} /></Button>
                                    <Button className="bot" onClick={() => setIdInterveniente(null)}><FontAwesomeIcon icon={faMinus} /></Button>
                                </div>
                            :   null
                        }
                    </div>

                </Form.Group>


                {/* Local da Captacao */}
                <Form.Group 
                    as={Row}
                    onMouseOver={() => setExibirBotoesLocaisCaptacao(true)}   
                    onMouseLeave={() => setExibirBotoesLocaisCaptacao(false)} 
                    className="gr"
                >
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
                    <div className="d-flex" >
                        {
                            exibirBotoesLocaisCaptacao
                            ?   <div className="d-flex">
                                    <Button disabled={false} className="bot" onClick={() => setExibirModalLocaisCaptacao(true)}><FontAwesomeIcon icon={faFolderOpen} /></Button>
                                    <Button className="bot" onClick={() => setIdLocalCaptacao(null)}><FontAwesomeIcon icon={faPlus} /></Button>
                                    <Button className="bot" onClick={() => setIdLocalCaptacao(null)}><FontAwesomeIcon icon={faMinus} /></Button>
                                </div>
                            :   null
                        }
                    </div>

                </Form.Group>

            </Form>

        </Jumbotron>
                        />
        </>
    )
}

export default Propostas