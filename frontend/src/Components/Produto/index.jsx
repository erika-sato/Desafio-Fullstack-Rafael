import React from 'react'

export const Produto = (props) => {

  return (
    <div className='produto'>
        <img width='150px' src="https://t-static.dafiti.com.br/2JsD2jYsUDVASfmvzJMmwGOvdd8=/fit-in/100x200/static.dafiti.com.br/p/leboh-cal%c3%a7a-jeans-leboh-reta-bot%c3%b5es-azul-9412-70815111-1-zoom.jpg" alt="Modelo com Roupa da Cascavel" />
        <p>{props.nome}</p>
        <span>{props.preco}</span>
    </div>
  )
}
