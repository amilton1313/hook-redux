import React, { useState } from 'react'
import { A } from 'hookrouter'
import './ConversorMoedas.css'
import {
  Jumbotron, Button, Form, Col, Spinner, Alert, Modal
} from 'react-bootstrap'
import {  FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

import ListarMoedas from './ListarMoedas'

function ConversorMoedas() {

  const [valor, setValor] = useState('1')
  const [moedaDe, setMoedaDe] = useState('BRL')
  const [moedaPara, setMoedaPara] = useState('USD')
  const [exibirSpinner, setExibirSpinner] = useState(false) 
  const [exibirModal, setExibirModal] = useState(false) 
  const [formValidado, setFormValidado] = useState(false) 
  const [resultadoConversao, setResultadoConversao] = useState('') 

  const FIXER_URL = 'http://data.fixer.io/api/latest?access_key=eba7130a5b2d720ce43eb5fcddd47cc3';

  const handleValor = event => {
    setValor(event.target.value.replace(/\D/g, ''))
  }

  const handleMoedaDe = event => {
    setMoedaDe(event.target.value)
  }

  const handleMoedaPara = event => {
    setMoedaPara(event.target.value)
  }

  const converter = event => {
    event.preventDefault()
    setFormValidado(true)
    if (event.currentTarget.checkValidity() === true) {
      setExibirSpinner(true)
      axios.get(FIXER_URL)
        .then(res => {
          const cotacao = obterCotacao(res.data)
          setResultadoConversao(`${valor} ${moedaDe} = ${cotacao} ${moedaPara}`)
          setExibirModal(true)
          setExibirSpinner(false)
        })
    
    }
  }

  const obterCotacao = (dadosCotacao) => {
    if (!dadosCotacao || dadosCotacao.success !== true) {
      return false
    }

    const cotacaoDe = dadosCotacao.rates[moedaDe]
    const cotacaoPara = dadosCotacao.rates[moedaPara]
    const cotacao = (1 / cotacaoDe * cotacaoPara) * valor
    return cotacao.toFixed(2)
  }

  const handleFecharModal = event => {
    setValor('1')  
    setMoedaDe('BRL')
    setMoedaPara('USD')
    setFormValidado(false)
    setExibirModal(false)
  }

  return (
    <div>
      <h1 className="text-center">Conversor de Moedas</h1>
      <Alert variant="danger" show={false}>
        Erro obtendo dados de conversao, tente novamente.
      </Alert>
      <Jumbotron >
        <Form onSubmit={converter} noValidate validated={formValidado}>
          <div className="d-flex align-items-baseline"> 
            <Col sm="3" >
              <Form.Control 
                placeholder="0" 
                value={valor}
                onChange={handleValor}
                required
                // className="margin1"
              /> 
            </Col>
            <Col sm="3">
              <Form.Control as="select"
                value={moedaDe}
                onChange={handleMoedaDe}
              >
                <ListarMoedas />
              </Form.Control>
            </Col>
            <Col sm="1" className="text-center" style={{paddingTop: '5px'}}>
              <FontAwesomeIcon icon={faAngleDoubleRight} />
            </Col>
            <Col sm="3">
              <Form.Control as="select"
                value={moedaPara}
                onChange={handleMoedaPara}
              >
                <ListarMoedas />
              </Form.Control>
            </Col>
            <Col sm="2">
              <Button variant="success" type="submit">
                <span className={exibirSpinner ? null : "hidden"}>
                  <Spinner animation="border" size="sm" />
                </span>
                <span className={exibirSpinner ? "hidden" : null}>
                  Converter
                </span>
              </Button>
            </Col>
          </div>
        </Form>  
        <br />
        <div  className="text-center ">
        <A 
    style={{
      background: 'transparent !important',
      backgroundColor: '#007bff',
      padding: '5px',
      margin: '3px',
      width: '100%',
      color: 'white',
      heightLine: '50px'
    }}
        href="/"
        className="btn"    
    ><FontAwesomeIcon icon={faSignOutAlt}/> Sair</A>
        

        </div>
        <Modal show={exibirModal} onHide={handleFecharModal}>
          <Modal.Header closeButton>
              <Modal.Title>Conversão</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {resultadoConversao} 
          </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleFecharModal}>
              Nova Conversão
            </Button>
          </Modal.Footer>
        </Modal>
      </Jumbotron>
    </div>

  );
}

export default ConversorMoedas;
