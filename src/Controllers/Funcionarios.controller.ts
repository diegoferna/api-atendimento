import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { FuncionarioService } from 'src/Services/Funcionario.service';
import { Funcionario as FuncionarioModel } from '@prisma/client';

@Controller()
export class FuncionariosControlle {
  constructor(private readonly funcionarioService: FuncionarioService) {}

  @Get('funcionario/:id')
  async getOne(@Param('id') id: string): Promise<FuncionarioModel> {
    return this.funcionarioService.getOne({ id: Number(id) });
  }

  @Get('funcionario')
  async getAll(): Promise<FuncionarioModel[]> {
    return this.funcionarioService.getAll();
  }

  @Post('cadastrar-funcionario')
  async create(@Body() funcionarioData): Promise<FuncionarioModel> {
    return this.funcionarioService.create(funcionarioData);
  }

  @Put('funcionario/:id')
  async update(@Param('id') id: string): Promise<FuncionarioModel> {
    return this.funcionarioService.update({
      where: { id: Number(id) },
      data: { ativo: true },
    });
  }

  @Delete('funcionario/:id')
  async delete(@Param('id') id: string): Promise<FuncionarioModel> {
    return this.funcionarioService.delete({ id: Number(id) });
  }
}
