import { Module } from '@nestjs/common';
import { TodosModule } from './todos/todos.module';
import { NotesModule } from './notes/notes.module';

@Module({
  imports: [TodosModule, NotesModule],
})
export class AppModule {}
