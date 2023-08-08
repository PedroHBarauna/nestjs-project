import { IsString, IsNumber, IsArray, ValidateNested } from "class-validator";
import { CaracteristicasImagemDto } from "../classes/CaracteristicasImagem.dto";
import { CaracteristicasProdutoDto } from "../classes/CaracteristicasProduto.dto";

export class CriaProdutoRequest {
    @IsString()
    nome: string;
    @IsNumber()
    valor: number;
    @IsNumber()
    quantidadeDisponivel: number;
    @IsString()
    descricao: string;
    @ValidateNested()
    @IsArray()
    caracteristicas: CaracteristicasProdutoDto[];
    @ValidateNested()
    @IsArray()
    imagens: CaracteristicasImagemDto[];
    @IsString()
    categoria: string;
}