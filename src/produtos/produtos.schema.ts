import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { CaracteristicasProdutoDto } from './dtos/classes/CaracteristicasProduto.dto';
import { CaracteristicasImagemDto } from './dtos/classes/CaracteristicasImagem.dto';


export type ProdutosDocument = Produtos & Document;

@Schema()
export class Produtos {
    @Prop()
    nome: string;

    @Prop()
    valor: number;

    @Prop()
    quantidadeDisponivel: number;

    @Prop()
    descricao: string;

    @Prop()
    caracteristicas: CaracteristicasProdutoDto[];

    @Prop()
    imagens: CaracteristicasImagemDto[];

    @Prop()
    categoria: string;

    @Prop()
    dataCriacao: Date;

    @Prop()
    dataAtualizacao: Date;
}

export const ProdutosSchema = SchemaFactory.createForClass(Produtos);