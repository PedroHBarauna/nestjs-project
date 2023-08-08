import mongoose, { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Usuario, UsuarioDocument } from "src/usuario/usuario.schema";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {
    
    constructor(@InjectModel(Usuario.name) private UsuarioModel: Model<UsuarioDocument>) {}

    async criaUsuario(dadosUsuario): Promise<Usuario>{
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(dadosUsuario.senha, salt);
        dadosUsuario.senha = hashPassword;
        const usuarioCriado = new this.UsuarioModel(dadosUsuario);
        return await usuarioCriado.save()
    }

    async login(dadosUsuario){
        const usuario = await this.UsuarioModel.findOne({email: dadosUsuario.email});
        if(usuario){
            const match = await bcrypt.compare(dadosUsuario.senha, usuario.senha);
            if(match) return 'Fez Login';
            return 'Credenciais Inválidas'; 
        }
        return 'Invalido';
    }

    async listaUsuario(): Promise<Usuario[]>{
        return await this.UsuarioModel.find().exec();
    }

    async buscaUsuarioPorId(id: mongoose.Types.ObjectId): Promise<Usuario>{
        const dadosDoUsuario = await this.UsuarioModel.findById(id).exec();
        delete dadosDoUsuario?.senha;
        return dadosDoUsuario;
    }

    async buscaUsuarioPorEmail(email: string): Promise<Usuario>{
        const dadosDoUsuario = await this.UsuarioModel.findOne({email: email}).exec();
        delete dadosDoUsuario?.senha;
        return dadosDoUsuario;
    }
    async atualizaUsuario(id: mongoose.Types.ObjectId, objetoUpdate){
        return await this.UsuarioModel.updateOne({_id: id}, objetoUpdate);
    }

    async deletaUsuario(id: mongoose.Types.ObjectId ){
        return await this.UsuarioModel.deleteOne({_id: id});
    }
}