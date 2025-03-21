import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { CreateNoteDto } from './dto/create-note.dto';
import { UpdateNoteDto } from './dto/update-note.dto';

const prisma = new PrismaClient();

@Injectable()
export class NotesService {
  async create(createNoteDto: CreateNoteDto) {
    return prisma.note.create({ data: createNoteDto });
  }

  async findAll() {
    return prisma.note.findMany();
  }

  async findOne(id: string) {
    return prisma.note.findUnique({ where: { id } });
  }

  async update(id: string, updateNoteDto: UpdateNoteDto) {
    return prisma.note.update({ where: { id }, data: updateNoteDto });
  }

  async remove(id: string) {
    return prisma.note.delete({ where: { id } });
  }
}
