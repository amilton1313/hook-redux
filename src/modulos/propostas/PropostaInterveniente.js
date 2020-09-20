import React, { useState } from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import { faMinus, faPlus, faFolderOpen } from '@fortawesome/free-solid-svg-icons'

import BotaoLinha from './BotaoLinha'
import MostrarIntervenientes from './MostrarIntervenientes'

const PropostaInterveniente =
    ({
        setIdInterveniente,
        setNomeInterveniente,
        nomeInterveniente
    }) => {

    const [exibirModalInterveniente, setExibirModalInterveniente] = useState(false)
    const [exibirBotoesInterveniente, setExibirBotoesInterveniente] = useState(false)

    const [classe, setClasse] = useState('gr')

    return (
        <>
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
                    placeholder="Selecione uma Imobiliária no botão ao lado."
                    name="id_Interveniente"
                    className="cont"
                    value={nomeInterveniente}
                    readonly
                />
                <Form.Control.Feedback type="invalid">
                    Selecione a Imobiliária válida.
                        </Form.Control.Feedback>
            </Col>
            <div className="d-flex" >
                {
                    exibirBotoesInterveniente
                        ? <div className="d-flex">
                                <BotaoLinha
                                    disabled={false}
                                    classe="bot btn-primary"
                                    icone={faFolderOpen}
                                    onClick={() => setExibirModalInterveniente(!exibirModalInterveniente)}
                                />
                                <BotaoLinha
                                    disabled={false}
                                    classe="bot btn-success"
                                    icone={faPlus}
                                    onClick={() => setIdInterveniente(null)}
                                />
                                <BotaoLinha
                                    disabled={false}
                                    classe="bot btn-light"
                                    icone={faMinus}
                                    onClick={() => setIdInterveniente(null)}
                                />
                            </div>
                        : null
                }
            </div>
        </Form.Group>
        {
            <MostrarIntervenientes 
            titulo='Intervenientes'
            setIdInterveniente={setIdInterveniente}
            setNomeInterveniente={setNomeInterveniente}
            setExibirModalInterveniente={setExibirModalInterveniente}
            exibirModalInterveniente={exibirModalInterveniente} />
        }
    </>
    );
    }

export default PropostaInterveniente;