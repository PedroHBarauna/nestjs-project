import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';


export type ProdutosDocument = Produtos & Document;

@Schema()
export class Produtos {
    @Prop()
    nome: string;

    @Prop()
    preco: number;

    @Prop()
    idUsuario: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Usuario'
    }

    @Prop()
    email: {
        type: mongoose.Schema.Types.String,
        ref: 'Usuario'
    }
}

export const ProdutosSchema = SchemaFactory.createForClass(Produtos);