import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

export enum TaskStatus {
  ABERTO = 'aberto',
  FAZENDO = 'fazendo',
  FINALIZADO = 'finalizado',
}

@Entity()
export class Task {
  @ApiProperty({ description: 'Identificador único', example: 1 })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ description: 'Título da tarefa', example: 'Estudar NestJS' })
  @Column()
  title: string;

  @ApiProperty({ description: 'Descrição da tarefa', example: 'Ler documentação e praticar exemplos' })
  @Column()
  description: string;

  @ApiProperty({ description: 'Status da tarefa', enum: TaskStatus, example: TaskStatus.ABERTO, default: TaskStatus.ABERTO })
  @Column({
    type: 'text',
    enum: TaskStatus,
    default: TaskStatus.ABERTO,
  })
  status: TaskStatus;

  @ApiProperty({ description: 'Data de criação', type: String, example: new Date().toISOString() })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({ description: 'Data de atualização', type: String, example: new Date().toISOString() })
  @UpdateDateColumn()
  updatedAt: Date;
}
