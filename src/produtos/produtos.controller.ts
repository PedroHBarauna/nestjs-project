import { Param, Body, Controller, Get, Post, Put, Delete } from "@nestjs/common";
import { ProdutosService } from "src/produtos/produtos.service";

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
    async criaProdutos(@Body() dadosProduto){
        try{
            await this.ProdutosService.criaProdutos(dadosProduto);
            return;
        }
        catch(error){
            return error.toString();
        }
    }

    @Put()
    async atualizaProduto(@Param() id: number, @Body() dadosProduto){
        try{
            await this.ProdutosService.atualizaProduto(id, dadosProduto);
        }
        catch(error){
            return error.toString();
        }
    }

    @Delete()
    async deletaProduto(@Param() id: String){
        try{
            await this.ProdutosService.deletaProduto(id);
        }
        catch(error){
            return error.toString();
        }
    }
    
}