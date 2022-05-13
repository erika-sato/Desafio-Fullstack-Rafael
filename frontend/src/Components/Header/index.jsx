import React from 'react'
import {Link} from 'react-router-dom'
import './style.css'

export const Header = () => {
  return (
    <div className='header'>
      <div className="container-header">
      <h1>CASCAVEL</h1>
    <nav className='header-nav'>
               <ul className='list'>
               <li className='item'><Link to="/">HOME</Link></li>  
               <li className='item'><Link to="/catalogo">CATÁLOGO</Link></li>
               <li className='item'><Link to="/cadastro">CADASTRO</Link></li>  
               </ul>
    </nav>
    </div>
    </div>
  )
}
