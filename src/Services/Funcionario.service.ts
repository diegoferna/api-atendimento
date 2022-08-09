import { Injectable } from '@nestjs/common';
import { Prisma, Funcionario } from '@prisma/client';
import { FuncionarioDTO } from 'src/dto/Funcionario.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class FuncionarioService {
  constructor(private prisma: PrismaService) {}

  async getOne(
    funcionarioWhereUniqueInput: Prisma.FuncionarioWhereUniqueInput,
  ): Promise<Funcionario | null> {
    return this.prisma.funcionario.findUnique({
      where: funcionarioWhereUniqueInput,
    });
  }

  async getAll(): Promise<Funcionario[]> {
    return this.prisma.funcionario.findMany();
  }

  async create(data: FuncionarioDTO): Promise<Funcionario> {
    try {
      const funcionario = await this.prisma.funcionario.create({
        data,
      });

      const eita = this.prisma.visitas.create
      console.log(funcionario);
      return funcionario;
    } catch (error) {
      console.log(error.message);
    }

  }

  async update(params: {
    where: Prisma.FuncionarioWhereUniqueInput;
    data: Prisma.FuncionarioUpdateInput;
  }): Promise<Funcionario> {
    const { where, data } = params;
    return this.prisma.funcionario.update({
      data,
      where,
    });
  }

  async delete(
    where: Prisma.FuncionarioWhereUniqueInput,
  ): Promise<Funcionario> {
    return this.prisma.funcionario.delete({
      where,
    });
  }
}
