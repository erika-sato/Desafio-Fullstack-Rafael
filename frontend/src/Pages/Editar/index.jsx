import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from 'react-hook-form'
import './style.css'
import api from "../../services/api";

function confirmProduto (e) {
    return confirm(`Deseja realmente atualizar o item: ${e}`)
}

export const Editar = () => {

  const { register, handleSubmit } = useForm();
  const [ produtos, setProdutos ] = useState([]);

  const history = useNavigate(); // Para trabalhar com navegação
  const { id } = useParams() // Para pegar parâmetros passados na URL

  useEffect(() => {
    if( id !== undefined) {
        findProduto(id)
    }
}, [id])

async function findProduto (id) {
  const response = await api.get(`/produtos/${id}`)
  const data = {
    nome: response.data.nome,
    preco: response.data.preco,
    estoque: response.data.estoque
}
  setProdutos(data)
  editData(data)
}

const editData = (data) => {
  const nome = document.querySelector("#nome")
  const preco = document.querySelector("#preco")
  const estoque = document.querySelector("#estoque")

  nome.value = data.nome;
  preco.value = data.preco;
  estoque.value = data.estoque;
}

  useEffect(() => {
    console.log(produtos)
  }, [produtos])

  async function onEdit(e) {
    e.preventDefault()

    if (isValidFields()) {

      const nome = document.querySelector("#nome").value
      const preco = document.querySelector("#preco").value
      const estoque = document.querySelector("#estoque").value

      const data = {
        nome: nome,
        preco: preco,
        estoque: estoque
    }

      if (id !== undefined) {
        const confirm = confirmProduto(nome)
        if(confirm) {
            const response = await api.put(`/produtos/${id}`, data)
            alert('Item atualizado com sucesso!')
            back()
        }
      } 
    }

  }

  // AUXILIAR

  const back = () => {
      history('/cadastro')
  }

  const isValidFields = () => {
    return document.querySelector('form').reportValidity()
  }

  return (
    <div className="editar">
      <div className="container">
        <form>
          <fieldset className='form-area'>
            <div className="form-input">
              <legend>DESCRIÇÃO DO ITEM</legend>
              <input id="nome"  placeholder='Insira o nome da peça'  required></input>
            </div>
            <div className="form-input">
              <legend>PREÇO</legend>
              <input type="number" id='preco' placeholder='Insira o valor da peça' required />
            </div>
            <div className="form-input">
              <legend>Nº DE PEÇAS</legend>
              <input type="number" id='estoque'  placeholder='Insira a qtde em estoque' required />
            </div>
            <div className="form-input">
              <button id='save' onClick={onEdit}>ATUALIZAR</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  )
}
