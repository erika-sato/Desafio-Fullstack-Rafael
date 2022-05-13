// Responsável por relacionar as rotas com as funções a serem executadas
import { Router, Response ,Request } from 'express'
import { getProduto, getProdutos, removeProduto, saveProduto, updateProduto } from "./controller/ProdutosController"
 
const routes = Router();

routes.get('/produtos', getProdutos) 

routes.get('/produtos/:id', getProduto) 

routes.post('/produtos', saveProduto) 

routes.put('/produtos/:id', updateProduto) 

routes.delete('/produtos/:id', removeProduto) 

export default routes