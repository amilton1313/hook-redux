import React, { useState } from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import { faMinus, faPlus, faFolderOpen } from '@fortawesome/free-solid-svg-icons'

import BotaoLinha from './BotaoLinha'
import MostrarProponentes from './MostrarProponentes'

const PropostaProponente =
    ({
        setIdProponente,
        setNomeProponente,
        nomeProponente
    }) => {

    const [exibirModalProponente, setExibirModalProponente] = useState(false)
    const [exibirBotoesProponente, setExibirBotoesProponente] = useState(false)

    const [classe, setClasse] = useState('gr')

    return (
        <>
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
                    placeholder="Selecione uma Imobiliária no botão ao lado."
                    name="id_Proponente"
                    className="cont"
                    value={nomeProponente}
                    readonly
                />
                <Form.Control.Feedback type="invalid">
                    Selecione a Imobiliária válida.
                        </Form.Control.Feedback>
            </Col>
            <div className="d-flex" >
                {
                    exibirBotoesProponente
                        ? <div className="d-flex">
                                <BotaoLinha
                                    disabled={false}
                                    classe="bot btn-primary"
                                    icone={faFolderOpen}
                                    onClick={() => setExibirModalProponente(!exibirModalProponente)}
                                />
                                <BotaoLinha
                                    disabled={false}
                                    classe="bot btn-success"
                                    icone={faPlus}
                                    onClick={() => setIdProponente(null)}
                                />
                                <BotaoLinha
                                    disabled={false}
                                    classe="bot btn-light"
                                    icone={faMinus}
                                    onClick={() => setIdProponente(null)}
                                />
                            </div>
                        : null
                }
            </div>
        </Form.Group>
        {
            <MostrarProponentes 
            titulo='Proponentes'
            setIdProponente={setIdProponente}
            setNomeProponente={setNomeProponente}
            setExibirModalProponente={setExibirModalProponente}
            exibirModalProponente={exibirModalProponente} />
        }
    </>
    );
    }

export default PropostaProponente;