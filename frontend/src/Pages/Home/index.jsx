import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'

export const Home = () => {

  const history = useNavigate()

    function goCatalogo() {
        history('/catalogo')
    }

  return (
    <div className='container'>
        <div className='home'>
                <h1 className='home-title'>CASCAVEL</h1>
                <h2 className='home-description'>CLOTHING STORE</h2>
                <button className='home-btn' onClick={goCatalogo} >ACESSAR LOJA</button>
        </div>
        </div>
  )
}
