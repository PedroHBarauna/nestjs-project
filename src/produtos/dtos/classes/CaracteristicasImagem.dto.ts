import { IsString } from "class-validator";

export class CaracteristicasImagemDto {
    @IsString()
    url: string;

    @IsString()
    descricao: string;
}