import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProdutosController } from 'src/produtos/produtos.controller';
import { ProdutosService } from 'src/produtos/produtos.service';
import { Produtos, ProdutosSchema } from 'src/produtos/produtos.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Produtos.name, schema: ProdutosSchema }])],
  controllers: [ProdutosController],
  providers: [ProdutosService],
})
export class ProdutosModule {}