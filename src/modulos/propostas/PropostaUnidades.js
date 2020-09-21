import React, { useState, useEffect } from 'react'
import { Form, Row, Col, Button, Jumbotron, Table } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faFolderOpen, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

import PropostaEmpreendimento from './PropostaEmpreendimento'
import tabelasVendas from './lista-de-tabelas-vendas'
import './propo.css'

const PropostaUnidades = () => {

    const [idEmpreendimento, setIdEmpreendimento] = useState(null)
    const [nomeEmpreendimento, setNomeEmpreendimento] = useState('')
    const [exibirModalEmpreendimento, setExibirModalEmpreendimento] = useState(false)
    const [exibirBotoesEmpreendimento, setExibirBotoesEmpreendimento] = useState(false)

    const unidades = [
        { id_unidade: 34, blocox: 'Aurora', numero: '404', garagensx: '25 e 36', depositosx: '65 e 21' },
        { id_unidade: 35, blocox: 'Aurora', numero: '502', garagensx: '25 e 40', depositosx: '70 e 75' },
    ]

    useEffect(() => {
        if (!idEmpreendimento) { setNomeEmpreendimento('') }

    }, [idEmpreendimento])

    return (
        <>
            <Jumbotron
                fluid
                style={{ paddingTop: '10px' }}
            >
                <Form noValidate style={{ margin: '10px' }}>

                {/* Empreedimento */}
                    <PropostaEmpreendimento
                        setIdEmpreendimento={setIdEmpreendimento}
                        setNomeEmpreendimento={setNomeEmpreendimento}
                        nomeEmpreendimento={nomeEmpreendimento}
                    />

                {/* Tabela de Vendas */}
                <Form.Group 
                    as={Row}
                    className="gr"
                >
                    <Form.Label column sm={2} className="lab">Tabela de Vendas : </Form.Label>
                    <Col sm={5}>
                    <Form.Control as="select" name="id_tabela" className="cont">
                        {
                            tabelasVendas.map(tab => <option value={tab.id_tabela_vendas}>{tab.descricao}</option>)
                        }
                    </Form.Control>
                    </Col>

                </Form.Group>

                </Form>

                <div style={{marginLeft: '18%'}}>
                    <div className="d-flex ">
                        <div className="div-unidades-1">Bloco</div>
                        <div className="div-unidades-2">Unidade</div>
                        <div className="div-unidades-2">Garagens</div>
                        <div className="div-unidades-2">Depósitos</div>
                    </div>
                        {
                            unidades.map(und => (

                                <div className="d-flex ">
                        <div className="div-unidades-3">{und.blocox}</div>
                            <div className="div-unidades-4">{und.numero}</div>
                            <div className="div-unidades-4">{und.garagensx}</div>
                            <div className="div-unidades-4">{und.depositosx}</div>
                    </div>
                            ))
                        }
                </div>

            </Jumbotron>

        </>
    );
}

export default PropostaUnidades;