import React, { useState, useEffect } from 'react'
import { Produto } from '../../Components/Produto'
import './style.css'
import api from "../../services/api";

export const Catalogo = () => {

  const [ produtos, setProdutos ] = useState([]);

  useEffect(() => {
      loadProdutos()
  }, [])

  useEffect(() => {
    console.log(produtos)
}, [produtos])

  async function loadProdutos() {
      const response = await api.get('/produtos')
      console.log(response)
      setProdutos(response.data)
  }

  return (
    <div className="catalogo">
      <div className="container">
        <div className="catalogo-intro">
        <h1 className='home-title'>CASCAVEL</h1>
        <p>COM INTUITO DE MUDAR O CENÁRIO DA MODA NO INTERIOR DO PARANÁ, LANÇAMOS A CASCAVEL,
          UMA MARCA DE ROUPA ÚNICA QUE BUSCA TRAZER PONTOS IMPORTANTES DA NOSSA CULTURA, POR 
          MEIO DE UMA PRODUÇÃO SUSTENTÁVEL E QUE NÃO AGRIDE O MEIO-AMBIENTE
        </p>
        </div>
        <div className='catalogo-produtos'>
          {
            produtos.map(({nome, preco}) => (
              <Produto nome={nome} preco={`R$${preco}`} />
            ))
          }

        </div>
      </div>
    </div>
  )
}
