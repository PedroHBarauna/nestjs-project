import { Param, Body, Controller, Get, Post, Put, Delete } from "@nestjs/common";
import { ProdutosService } from "src/produtos/produtos.service";
import { CriaProdutoRequest } from "./dtos/request/CriaProdutoRequest.dto";
import moment from "moment";
import mongoose from "mongoose";

@Controller('/produtos')
export class ProdutosController {
    constructor(private ProdutosService: ProdutosService){}

    @Get()
    async listaProdutos(){
        try{
            const Produtos = await this.ProdutosService.listaProdutos();
            return Produtos;
        }
        catch(error){
            return error.toString();
        }
    }

    @Post()
    async criaProdutos(@Body() dadosProduto: CriaProdutoRequest){
        try{
            dadosProduto['dataCriacao'] = new Date().toUTCString();
            const dadosCriacao = await this.ProdutosService.criaProdutos(dadosProduto);
            return dadosCriacao;
        }
        catch(error){
            return error.toString();
        }
    }

    @Put('/:id')
    async atualizaProduto(@Param() id: mongoose.Types.ObjectId, @Body() dadosProduto){
        try{
            dadosProduto['dataAtualizacao'] = new Date().toUTCString();
            const dadosAtualizados = await this.ProdutosService.atualizaProduto(id, dadosProduto);
            return dadosAtualizados;
        }
        catch(error){
            return error.toString();
        }
    }

    @Delete('/:id')
    async deletaProduto(@Param() id: mongoose.Types.ObjectId){
        try{
            await this.ProdutosService.deletaProduto(id);
        }
        catch(error){
            return error.toString();
        }
    }
    
}