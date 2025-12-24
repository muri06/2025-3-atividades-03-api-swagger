import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';

@ApiTags('root')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Informações da API', description: 'Retorna status, versão e descrição da API' })
  @ApiResponse({ status: 200, description: 'Informações da API retornadas com sucesso' })
  getInfo() {
    return this.appService.getInfo();
  }
}
