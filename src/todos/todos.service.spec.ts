import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';

const prisma = new PrismaClient();

@Injectable()
export class TodosService {
  async create(createTodoDto: CreateTodoDto) {
    return prisma.todo.create({ data: createTodoDto });
  }

  async findAll() {
    return prisma.todo.findMany();
  }

  async findOne(id: string) {
    return prisma.todo.findUnique({ where: { id } });
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    return prisma.todo.update({ where: { id }, data: updateTodoDto });
  }

  async remove(id: string) {
    return prisma.todo.delete({ where: { id } });
  }
}
