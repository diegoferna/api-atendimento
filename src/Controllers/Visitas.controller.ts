import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { VisitasService } from 'src/Services/Visitas.service';
import { Visitas as VisitasModel } from '@prisma/client';

@Controller()
export class VisitasControlle {
  constructor(private readonly visitasService: VisitasService) {}

  @Get('visitas/:id')
  async getOne(@Param('id') id: string): Promise<VisitasModel> {
    return this.visitasService.getOne({ id: Number(id) });
  }

  @Get('visitas')
  async getAll(): Promise<VisitasModel[]> {
    return this.visitasService.getAll();
  }

  @Post('cadastrar-visitas')
  async create(@Body() funcionarioData): Promise<VisitasModel> {
    return this.visitasService.create(funcionarioData);
  }

  @Put('visitas/:id')
  async update(@Param('id') id: string): Promise<VisitasModel> {
    return this.visitasService.update({
      where: { id: Number(id) },
      data: { note: '' },
    });
  }

  @Delete('visitas/:id')
  async delete(@Param('id') id: string): Promise<VisitasModel> {
    return this.visitasService.delte({ id: Number(id) });
  }
}
