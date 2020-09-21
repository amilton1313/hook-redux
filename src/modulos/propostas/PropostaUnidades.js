import React, { useState, useEffect } from 'react'
import { Form, Row, Col, Button, Jumbotron, Table } from 'react-bootstrap'
import ReactList from 'react-list'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus, faFolderOpen, faAngleDoubleLeft, faAngleDoubleRight } from '@fortawesome/free-solid-svg-icons'

import './propo.css'

const PropostaUnidades = () => {

    const unidades = [
        { id_unidade: 34, blocox: 'Aurora', numero: '404', garagensx: '25 e 36', depositosx: '65 e 21' },
        { id_unidade: 35, blocox: 'Aurora', numero: '502', garagensx: '25 e 40', depositosx: '70 e 75' },
    ]

    return (
        <>
            <Jumbotron
                fluid
                style={{ paddingTop: '10px' }}
            >
                <Form noValidate style={{ margin: '10px' }}>


                    {/* Empreendimento */}
                    <Form.Group
                        as={Row}
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