import { IsString, IsEnum, IsOptional } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { TaskStatus } from '../task.entity';

export class UpdateTaskDto {
  @ApiPropertyOptional({ description: 'Título da tarefa', example: 'Estudar NestJS' })
  @IsString()
  @IsOptional()
  title?: string;

  @ApiPropertyOptional({ description: 'Descrição detalhada da tarefa', example: 'Ler documentação e praticar exemplos' })
  @IsString()
  @IsOptional()
  description?: string;

  @ApiPropertyOptional({ description: 'Status da tarefa', enum: TaskStatus, example: TaskStatus.FAZENDO })
  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus;
}
