import { Controller, Get } from '@nestjs/common';
import { Produto, produtos } from 'src/core';

@Controller('produtos')
export class ProdutoController {
    @Get()
    async obterProdutos(): Promise<Produto[]>{
        await this.esperarSegundos(2);
        return produtos;
    }

    esperarSegundos(segundos: number): Promise<void>{
        return new Promise((resolve)=>{
            setTimeout(resolve, segundos * 1000);
        })
    }
}
