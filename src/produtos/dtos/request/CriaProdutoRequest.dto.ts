import { IsString, IsNumber, IsArray, ValidateNested, IsNotEmpty } from "class-validator";
import { CaracteristicasImagemDto } from "../classes/CaracteristicasImagem.dto";
import { CaracteristicasProdutoDto } from "../classes/CaracteristicasProduto.dto";
import mongoose from "mongoose";

export class CriaProdutoRequest {
    @IsNotEmpty()
    usuarioId: mongoose.Types.ObjectId;
    @IsNotEmpty()
    nome: string;
    @IsNumber()
    @IsNotEmpty()
    valor: number;
    @IsNumber()
    @IsNotEmpty()
    quantidadeDisponivel: number;
    @IsString()
    descricao: string;
    @ValidateNested()
    @IsArray()
    caracteristicas: CaracteristicasProdutoDto[];
    @ValidateNested()
    @IsArray()
    imagens: CaracteristicasImagemDto[];
    @IsNotEmpty()
    categoria: string;
}