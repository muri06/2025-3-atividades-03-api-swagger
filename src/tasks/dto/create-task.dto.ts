import { IsString, IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { TaskStatus } from '../task.entity';

export class CreateTaskDto {
  @ApiProperty({ description: 'Título da tarefa', example: 'Estudar NestJS', minLength: 3, maxLength: 100 })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: 'Descrição detalhada da tarefa', example: 'Ler documentação e praticar exemplos' })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiPropertyOptional({ description: 'Status da tarefa', enum: TaskStatus, default: TaskStatus.ABERTO, example: TaskStatus.ABERTO })
  @IsEnum(TaskStatus)
  @IsOptional()
  status?: TaskStatus;
}
