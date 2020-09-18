import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import placeholder from '../../imagens/286x180.png'

const ListarProdutos = () => {

    const produtos = [
        { nome: 'Aprenda Java', preco: 'R$ 59,99' },
        { nome: 'JavaScript em 24 horas', preco: 'R$ 19,99' },
        { nome: 'Reactem 7 dias', preco: 'R$ 29,99' },
        { nome: 'Algoritmos e Estrutura de Dados', preco: 'R$ 25,99' },
        { nome: 'Start-up', preco: 'R$ 29,99' },
        { nome: 'Testes unitários com Jasmine', preco: 'R$ 14,99' },
        { nome: 'APIs RESTful co Spring e Java', preco: 'R$ 15,99' },
        { nome: 'TypesScript na prática', preco: 'R$ 9,99' },
    ]

    const handleComprar = (event, produto) => {
        
    } 

    function render() {
        { let key = 1 }

        const cards = produtos.map(produto =>
            <Card key={key} style={{ width: '18rem', margin: '10px', float: 'left' }}>
                <Card.Img variant="top" src={placeholder} />
                <Card.Body className="text-center">
                    <Card.Title style={{ height: '40px' }}>
                        {produto.nome}
                    </Card.Title>
                    <Card.Text>
                        Descrição do produto aqui
                    </Card.Text>
                    <Button
                        variant="success"
                        style={{ width: '100%' }}
                        onClick={(event) => handleComprar(event, produto)}
                    >
                        Comprar {produto.preco}
                    </Button>
                </Card.Body>

            </Card>
        )

        return cards

    }

    return render()
}

export default ListarProdutos;