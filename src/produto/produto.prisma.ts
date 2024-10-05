import { Injectable } from '@nestjs/common';
import { Produto } from '@prisma/client';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class ProdutoPrisma {
  constructor(readonly repo: PrismaProvider) {}

  async obter(): Promise<Produto[]> {
    return this.repo.produto.findMany() as any;
  }

  async obterPorId(id: number): Promise<Produto | null> {
    const produto = await this.repo.produto.findUnique({ where: { id } });
    return (produto as any) || null;
  }
}
