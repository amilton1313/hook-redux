import React, { useState } from 'react'
import { Tabs, Tab } from 'react-bootstrap'

import PropostaDados from './PropostaDados'
import PropostaUnidades from './PropostaUnidades'

const Proposta = () => {
    return (
        <>
            <h3>Proposta</h3>
            <div>
                <Tabs defaultActiveKey="proposta" id="uncontrolled-tab-example">
                    <Tab eventKey="proposta" title="Proposta">
                        <PropostaDados />
                    </Tab>
                    <Tab eventKey="unidades" title="Unidades">
                        <PropostaUnidades />
                    </Tab>
                    <Tab eventKey="valores" title="Valores">
                        <div>Valores</div>
                    </Tab>
                </Tabs>
            </div>
        </>
    )
}

export default Proposta