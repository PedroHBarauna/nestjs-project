import mongoose, { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from '@nestjs/mongoose';
import { Usuario, UsuarioDocument } from "src/usuario/usuario.schema";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuarioService {
    
    constructor(@InjectModel(Usuario.name) private UsuarioModel: Model<UsuarioDocument>) {}

    async criaUsuario(dadosUsuario): Promise<Usuario>{
        try{
            const salt = await bcrypt.genSalt();
            const hashPassword = await bcrypt.hash(dadosUsuario.senha, salt);
            dadosUsuario.senha = hashPassword;
            const usuarioCriado = new this.UsuarioModel(dadosUsuario);
            return await usuarioCriado.save()
        }
        catch(error){
            throw new Error(error);
        }
    }

    async login(dadosUsuario){
        try{
            const usuario = await this.UsuarioModel.findOne({email: dadosUsuario.email});
            if(usuario){
                const match = await bcrypt.compare(dadosUsuario.senha, usuario.senha);
                if(match) return 'Fez Login';
                return 'Credenciais Inválidas'; 
            }
            return 'Invalido';
        }
        catch(error){
            throw new Error(error);
        }
    }

    async listaUsuario(): Promise<Usuario[]>{
        try{
            return await this.UsuarioModel.find().exec();
        }
        catch(error){
            throw new Error(error);
        }
    }

    async buscaUsuarioPorId(id: mongoose.Types.ObjectId): Promise<Usuario>{
        try{
            const dadosDoUsuario = await this.UsuarioModel.findById(id).exec();
            delete dadosDoUsuario?.senha;
            return dadosDoUsuario;
        }
        catch(error){
            throw new Error(error);
        }
    }

    async buscaUsuarioPorEmail(email: string): Promise<Usuario>{
        try{
            const dadosDoUsuario = await this.UsuarioModel.findOne({email: email}).exec();
            delete dadosDoUsuario?.senha;
            return dadosDoUsuario;
        }
        catch(error){
            throw new Error(error);
        }
    }
    async atualizaUsuario(id: mongoose.Types.ObjectId, objetoUpdate: Partial<Usuario>){
        try{
            return await this.UsuarioModel.updateOne({_id: id}, objetoUpdate);
        }    
        catch(error){
            throw new Error(error);
        }
    }

    async deletaUsuario(id: mongoose.Types.ObjectId ){
        try{
            return await this.UsuarioModel.deleteOne({_id: id});
        }
        catch(error){
            throw new Error(error);
        }
    }
}