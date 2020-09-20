import React, { useState } from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import { faMinus, faPlus, faFolderOpen } from '@fortawesome/free-solid-svg-icons'

import BotaoLinha from './BotaoLinha'
import MostrarCorretores from './MostrarCorretores'

const PropostaCorretor =
    ({
        setIdCorretor,
        setNomeCorretor,
        nomeCorretor
    }) => {

    const [exibirModalCorretor, setExibirModalCorretor] = useState(false)
    const [exibirBotoesCorretor, setExibirBotoesCorretor] = useState(false)

    return (
        <>
        <Form.Group
            as={Row}
            onMouseOver={() => setExibirBotoesCorretor(true)}
            onMouseLeave={() => setExibirBotoesCorretor(false)}
            className="gr"
        >
            <Form.Label column sm={2} className="lab">Corretor : </Form.Label>
            <Col sm={4}>
                <Form.Control
                    type="text"
                    placeholder="Selecione um Corretor no botão ao lado."
                    name="id_Corretor"
                    className="cont"
                    value={nomeCorretor}
                    readonly
                />
                <Form.Control.Feedback type="invalid">
                    Selecione a Imobiliária válida.
                        </Form.Control.Feedback>
            </Col>
            <div className="d-flex" >
                {
                    exibirBotoesCorretor
                        ? <div className="d-flex">
                                <BotaoLinha
                                    disabled={false}
                                    classe="bot btn-primary"
                                    icone={faFolderOpen}
                                    onClick={() => setExibirModalCorretor(true)}
                                />
                                <BotaoLinha
                                    disabled={false}
                                    classe="bot btn-success"
                                    icone={faPlus}
                                    onClick={() => setIdCorretor(null)}
                                />
                                <BotaoLinha
                                    disabled={false}
                                    classe="bot btn-light"
                                    icone={faMinus}
                                    onClick={() => setIdCorretor(null)}
                                />
                            </div>
                        : null
                }
            </div>
        </Form.Group>
        {
            exibirModalCorretor
                ? <MostrarCorretores 
                    setIdCorretor={setIdCorretor}
                    setNomeCorretor={setNomeCorretor}
                    setExibirModalCorretor={setExibirModalCorretor}
                    setExibirBotoesCorretor={setExibirBotoesCorretor} />
                : null
        }
        </>
    );
    }

export default PropostaCorretor;