import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useForm } from 'react-hook-form'
import './style.css'
import api from "../../services/api";

export const Cadastro = () => {

  const { register, handleSubmit } = useForm();
  const [produtos, setProdutos] = useState([]);

  const history = useNavigate(); // Para trabalhar com navegação
  const { id } = useParams() // Para pegar parâmetros passados na URL

  useEffect(() => {
    loadProdutos()
  }, [])

  useEffect(() => {
    
  }, [produtos])

  async function loadProdutos() {
    const response = await api.get('/produtos')
    console.log(response)
    setProdutos(response.data)
  }

  async function onSubmit(e) {
    if (isValidFields()) {
        const response = await api.post('/produtos', e)
        clearInput()
        alert('Item criado com sucesso!')
        loadProdutos()
    }

  }

  async function deleteProduto(id) {
    await api.delete(`/produtos/${id}`)
    alert('Item deletado com sucesso!')
    loadProdutos()
  }


  // NAVEGAÇÃO 

  function editProduto(id) {
    history(`/editar/${id}`)
  }

  // AUXILIAR

  const clearInput = () => {
    const nome = document.querySelector("#nome")
    const preco = document.querySelector("#preco")
    const estoque = document.querySelector("#estoque")

    nome.value = "";
    preco.value = "";
    estoque.value = '';
  }

  const isValidFields = () => {
    return document.querySelector('form').reportValidity()
  }

  return (
    <div className="cadastro">
      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <fieldset className='form-area'>
            <div className="form-input">
              <legend>DESCRIÇÃO DO ITEM</legend>
              <input id="nome" {...register("nome")} placeholder='Insira o nome da peça' required />
            </div>
            <div className="form-input">
              <legend>PREÇO</legend>
              <input type="number" id='preco' {...register("preco")} placeholder='Insira o valor da peça' required />
            </div>
            <div className="form-input">
              <legend>Nº DE PEÇAS</legend>
              <input type="number" id='estoque' {...register("estoque")} placeholder='Insira a qtde em estoque' required />
            </div>
            <div className="form-input">
              <button id='save' type='submit'>INSERIR</button>
            </div>
          </fieldset>
        </form>
        <div className="lista-cadastro">
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>NOME</th>
                <th>PREÇO</th>
                <th>ESTOQUE</th>
                <th>AÇÕES</th>
              </tr>
            </thead>
            <tbody>
              {
                produtos.map(produto => (
                  <tr key={produto.id}>
                    <td>{produto.id}</td>
                    <td>{produto.nome}</td>
                    <td>{produto.preco}</td>
                    <td>{produto.estoque}</td>
                    <td>
                      <button onClick={() => editProduto(produto.id)}>Editar</button>{' '}
                      <button onClick={() => deleteProduto(produto.id)} >Remover</button>{' '}
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>

        </div>
      </div>
    </div>
  )
}
