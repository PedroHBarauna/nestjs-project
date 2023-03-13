import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type UsuarioDocument = Usuario & Document;

@Schema()
export class Usuario {
    @Prop()
    nome: string;

    @Prop()
    email: string;

    @Prop()
    senha:string;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);