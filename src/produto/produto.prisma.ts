import { Injectable } from '@nestjs/common';
import { Produto } from '@gstore/core';
import { PrismaProvider } from 'src/db/prisma.provider';

@Injectable()
export class ProdutoPrisma {
  constructor(readonly repo: PrismaProvider) {}

  async salvar(produto: Produto): Promise<void> {
    await this.repo.produto.upsert({
      where: { id: produto.id ?? -1 },
      update: produto,
      create: produto,
    });
  }

  async obter(): Promise<Produto[]> {
    return this.repo.produto.findMany() as any;
  }

  async obterPorId(id: number): Promise<Produto | null> {
    const produto = await this.repo.produto.findUnique({ where: { id } });
    return (produto as any) || null;
  }

  async excluir(id: number): Promise<void> {
    await this.repo.produto.delete({ where: { id } });
  }
}
