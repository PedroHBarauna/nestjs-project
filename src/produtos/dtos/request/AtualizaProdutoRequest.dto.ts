import { IsOptional, IsNumber, IsArray, ValidateNested, IsNotEmpty } from "class-validator";
import { CaracteristicasImagemDto } from "../classes/CaracteristicasImagem.dto";
import { CaracteristicasProdutoDto } from "../classes/CaracteristicasProduto.dto";

export class AtualizaProdutoRequestDto {
    @IsNotEmpty()
    @IsOptional()
    nome: string;

    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    valor: number;

    @IsNumber()
    @IsNotEmpty()
    @IsOptional()
    quantidadeDisponivel: number;

    @IsNotEmpty()
    @IsOptional()
    descricao: string;

    @ValidateNested()
    @IsArray()
    @IsOptional()
    caracteristicas: CaracteristicasProdutoDto[];

    @ValidateNested()
    @IsArray()
    @IsOptional()
    imagens: CaracteristicasImagemDto[];

    @IsNotEmpty()
    @IsOptional()
    categoria: string;
}