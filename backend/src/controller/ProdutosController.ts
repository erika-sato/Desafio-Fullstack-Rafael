// Responsável por conter as funções/ métodos que serão executadas nas chamadas de API
import { AppDataSource } from "../data-source" 
import { Produtos } from "../entity/Produtos";
import { Request, Response } from 'express'


export const getProdutos = async (request:Request, response: Response) => {
    const produtos = await AppDataSource.getRepository(Produtos).find()
    return response.json(produtos)
}


export const getProduto = async (request: Request, response: Response) => {
    const { id  } = request.params
    const produtos = await AppDataSource.getRepository(Produtos).findOne({where: {id: parseInt(id, 10)}})
    return response.json(produtos)
}


export const saveProduto = async (request:Request, response: Response) => {
    const produtos = await AppDataSource.getRepository(Produtos).save(request.body)
    return response.json(produtos)
}


export const updateProduto = async (request: Request, response: Response) => {
    const { id } = request.params
    const produtos = await AppDataSource.getRepository(Produtos).update(id, request.body)

    if(produtos.affected === 1) {
        const produtosUpdated = await AppDataSource.getRepository(Produtos).findOne({where: {id: parseInt(id, 10)}})
        return response.json(produtosUpdated)
    }

    return response.status(404).json({ message: "Produto não encontrado!"})
}

export const removeProduto = async (request: Request, response: Response) => {
    const { id } = request.params
    const produtos = await AppDataSource.getRepository(Produtos).delete(id)

    if(produtos.affected === 1) {
        return response.json({ message: "Produto excluído com sucesso!"})
    }

    return response.status(404).json({ message: "Produto não encontrado!"})
}