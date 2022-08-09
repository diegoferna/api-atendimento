import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { PessoaService } from 'src/Services/Pessoa.service';
import { Pessoa as PessoaModel } from '@prisma/client';

@Controller()
export class PessoaControlle {
  constructor(private readonly pessoaService: PessoaService) {}

  @Get('pessoa/:id')
  async getOne(@Param('id') id: string): Promise<PessoaModel> {
    return this.pessoaService.getOne({ id: Number(id) });
  }

  @Get('pessoa')
  async getAll(): Promise<PessoaModel[]> {
    return this.pessoaService.getAll();
  }

  @Post('cadastrar-pessoa')
  async create(@Body() pessoaData): Promise<PessoaModel> {
    return this.pessoaService.create(pessoaData);
  }

  @Put('pessoa/:id')
  async update(@Param('id') id: string): Promise<PessoaModel> {
    return this.pessoaService.update({
      where: { id: Number(id) },
      data: { ativo: true },
    });
  }

  @Delete('pessoa/:id')
  async delete(@Param('id') id: string): Promise<PessoaModel> {
    return this.pessoaService.delte({ id: Number(id) });
  }
}
