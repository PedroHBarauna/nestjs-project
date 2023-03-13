import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Usuario, UsuarioDocument } from "src/usuario/usuarioSchema";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {
    
    constructor(@InjectModel(Usuario.name) private usuarioModel: Model<UsuarioDocument>) {}

    async criaUsuario(dadosUsuario): Promise<Usuario>{
        const salt = await bcrypt.genSalt();
        const hashPassword = await bcrypt.hash(dadosUsuario.senha, salt);
        dadosUsuario.senha = hashPassword;
        const usuarioCriado = new this.usuarioModel(dadosUsuario);
        return await usuarioCriado.save()
    }

    async login(dadosUsuario){
        const usuario = await this.usuarioModel.findOne({email: dadosUsuario.email});
        if(usuario){
            const match = await bcrypt.compare(dadosUsuario.senha, usuario.senha);
            if(match) return 'Fez Login';
            return 'Credenciais Inválidas'; 
        }
        return 'Invalido';
    }

    async listaUsuario(): Promise<Usuario[]>{
        return await this.usuarioModel.find().exec();
    }

    async buscaUsuarioPorId(id: number): Promise<Usuario>{
        return await this.usuarioModel.findById(id).exec();
    }

    async atualizaUsuario(id, objetoUpdate){
        return await this.usuarioModel.updateOne({_id: id}, objetoUpdate);
    }

    async deletaUsuario(id: number){
        return await this.usuarioModel.deleteOne({_id: id});
    }
}