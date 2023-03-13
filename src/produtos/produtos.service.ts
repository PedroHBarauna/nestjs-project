import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Produtos, ProdutosDocument } from "src/Produtos/Produtos.schema";
import * as bcrypt from 'bcrypt';

@Injectable()
export class ProdutosService {
    
    constructor(@InjectModel(Produtos.name) private ProdutosModel: Model<ProdutosDocument>) {}

    async listaProdutos(){

    }

    async criaProdutos(dadosProduto){

    }

    async atualizaProduto(id, dadosProduto){

    }

    async deletaProduto(id){

    }

}