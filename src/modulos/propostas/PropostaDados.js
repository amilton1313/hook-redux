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
import PropostaProponente from './PropostaProponente'
import PropostaInterveniente from './PropostaInterveniente'
import tabelasVendas from './lista-de-tabelas-vendas'

registerLocale('pt', 'pt')

const PropostaDados = () => {

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
        if (!idProponente) { setNomeProponente('') }
        if (!idInterveniente) { setNomeInterveniente('') }
    }, [idImobiliaria, idCorretor, idProponente, idInterveniente])

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
                    className="gr"
                >
                    <Form.Label column sm={2} className="lab">Tabela de Vendas : </Form.Label>
                    <Col sm={4}>
                    <Form.Control as="select" name="id_tabela" className="cont">
                        {
                            tabelasVendas.map(tab => <option value={tab.id_tabela_vendas}>{tab.descricao}</option>)
                        }
                    </Form.Control>
                    </Col>

                </Form.Group>


                {/* Proponente */}
                <PropostaProponente 
                    setIdProponente={setIdProponente}
                    setNomeProponente={setNomeProponente}
                    nomeProponente={nomeProponente}
                />


                {/* Interveniente */}
                <PropostaInterveniente 
                    setIdInterveniente={setIdInterveniente}
                    setNomeInterveniente={setNomeInterveniente}
                    nomeInterveniente={nomeInterveniente}
                />


                {/* Local da Captacao */}
                <Form.Group 
                    as={Row}
                    className="gr"
                >
                    <Form.Label column sm={2} className="lab">Local da Captação : </Form.Label>
                    <Col sm={4}>
                    <Form.Control as="select" name="id_tabela" className="cont">
                        <option value={1}>PLANTÃO / LOJA DE VENDAS</option>
                        <option value={2}>SALÃO DO IMÓVEL</option>
                        <option value={3}>IMOBILIÁRIA</option>
                        <option value={4}>ON LINE</option>
                        <option value={5}>MÍDIA IMPRESSSA</option>
                        <option value={6}>MÍDIA TV</option>
                        <option value={7}>MÍDIA RÁDIO</option>
                        <option value={8}>MÍDIA OUTDOOR</option>
                        <option value={9}>INDICAÇÃO</option>
                        <option value={10}>PROSPECÇÃO CORRETOR</option>
                        <option value={11}>ACM</option>
                    </Form.Control>
                    </Col>

                </Form.Group>

                 {/* Observações */}
                 <Form.Group 
                    as={Row}

                    className="gr"
                >
                    <Form.Label column sm={2} className="lab">Observações : </Form.Label>
                    <Col sm={4}>
                    <Form.Control as="textarea" name="id_tabela" className="cont" style={{height: '200px'}}>

                    </Form.Control>
                    </Col>

                </Form.Group>

            </Form>

        </Jumbotron>
                        
        </>
    )
}

export default PropostaDados