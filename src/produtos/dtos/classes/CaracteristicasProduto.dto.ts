import { IsString } from "class-validator";

export class CaracteristicasProdutoDto {
    @IsString()
    nome: string;
    @IsString()
    descricao: string;
}