import React, { useState } from 'react'

import Menu from './components/menu/Menu'
import Produtos from './components/produtos/Produtos'
import Checkout from './components/checkout/Checkout'

const Ecomerce = () => {

    const [carrinho, setCarrinho] = useState({ produtos: [] })
    const [exibirProdutos, setExibirProdutos] = useState(true)
    const [exibirCheckout, setExibirCheckout] = useState(true)
    const [total, setTotal] = useState('0,00')

    return ( 
        <>
        <Menu />
        <Produtos />
        <Checkout />
        </>
     )
}
 
export default Ecomerce