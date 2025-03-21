import { Module } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';

@Module({
  controllers: [TodosController],
  providers: [TodosService], // Pastikan ini ada
  exports: [TodosService], // Jika ingin digunakan di module lain
})
export class TodosModule {}
