import React, { useState } from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import { faMinus, faPlus, faFolderOpen } from '@fortawesome/free-solid-svg-icons'

import BotaoLinha from './BotaoLinha'
import MostrarImobiliarias from './MostrarImobiliarias'

const PropostaImobiliaria =
    ({
        setIdImobiliaria,
        setNomeImobiliaria,
        nomeImobiliaria
    }) => {

    const [exibirModalImobiliaria, setExibirModalImobiliaria] = useState(false)
    const [exibirBotoesImobiliaria, setExibirBotoesImobiliaria] = useState(false)

    const [classe, setClasse] = useState('gr')

    return (
        <>
        <Form.Group
            as={Row}
            onMouseOver={() => setExibirBotoesImobiliaria(true)}
            onMouseLeave={() => setExibirBotoesImobiliaria(false)}
            className="gr"
        >
            <Form.Label column sm={2} className="lab">Imobiliária : </Form.Label>
            <Col sm={4}>
                <Form.Control
                    type="text"
                    placeholder="Selecione uma Imobiliária no botão ao lado."
                    name="id_Imobiliaria"
                    className="cont"
                    value={nomeImobiliaria}
                    readonly
                />
                <Form.Control.Feedback type="invalid">
                    Selecione a Imobiliária válida.
                        </Form.Control.Feedback>
            </Col>
            <div className="d-flex" >
                {
                    exibirBotoesImobiliaria
                        ? <div className="d-flex">
                                <BotaoLinha
                                    disabled={false}
                                    classe="bot btn-primary"
                                    icone={faFolderOpen}
                                    onClick={() => setExibirModalImobiliaria(!exibirModalImobiliaria)}
                                />
                                <BotaoLinha
                                    disabled={false}
                                    classe="bot btn-success"
                                    icone={faPlus}
                                    onClick={() => setIdImobiliaria(null)}
                                />
                                <BotaoLinha
                                    disabled={false}
                                    classe="bot btn-light"
                                    icone={faMinus}
                                    onClick={() => setIdImobiliaria(null)}
                                />
                            </div>
                        : null
                }
            </div>
        </Form.Group>
        {
            <MostrarImobiliarias 
            titulo='Imobiliárias'
            setIdImobiliaria={setIdImobiliaria}
            setNomeImobiliaria={setNomeImobiliaria}
            setExibirModalImobiliaria={setExibirModalImobiliaria}
            exibirModalImobiliaria={exibirModalImobiliaria} />
        }
    </>
    );
    }

export default PropostaImobiliaria;