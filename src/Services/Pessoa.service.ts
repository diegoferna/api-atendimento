import { Injectable } from '@nestjs/common';
import { Prisma, Pessoa } from '@prisma/client';
import { PessoaDTO } from 'src/dto/Pessoa.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class PessoaService {
  constructor(private prisma: PrismaService) {}

  async getOne(id: Prisma.PessoaWhereUniqueInput): Promise<Pessoa | null> {
    return this.prisma.pessoa.findUnique({
      where: id,
    });
  }


  async getAll(): Promise<Pessoa[]> {
    return this.prisma.pessoa.findMany();
  }

  async create(data: PessoaDTO): Promise<Pessoa> {
    return this.prisma.pessoa.create({
      data,
    });
  }

  async update(params: {
    where: Prisma.PessoaWhereUniqueInput;
    data: Prisma.PessoaUpdateInput;
  }): Promise<Pessoa> {
    const { where, data } = params;
    return this.prisma.pessoa.update({
      data,
      where,
    });
  }

  async delte(where: Prisma.PessoaWhereUniqueInput): Promise<Pessoa> {
    return this.prisma.pessoa.delete({
      where,
    });
  }
}
