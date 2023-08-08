import mongoose, { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Produtos, ProdutosDocument } from "src/Produtos/Produtos.schema";

@Injectable()
export class ProdutosService {
    
    constructor(@InjectModel(Produtos.name) private ProdutosModel: Model<ProdutosDocument>) {}

    async listaProdutos(){
        return await this.ProdutosModel.find().exec();
    }

    async criaProdutos(dadosProduto){
        return await this.ProdutosModel.create(dadosProduto);
    }

    async atualizaProduto(id: mongoose.Types.ObjectId, dadosProduto: Partial<Produtos>){
        return await this.ProdutosModel.updateOne({_id: id}, dadosProduto);
    }

    async deletaProduto(id: mongoose.Types.ObjectId){
        return await this.ProdutosModel.deleteOne({_id: id});
    }

}