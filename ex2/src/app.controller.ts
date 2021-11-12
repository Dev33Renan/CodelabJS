import { AlunoDto } from './aluno/dto/aluno.dto';
import { Controller, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  AlunoDto(): string {
    return this.appService.AlunoDto();
  }
}
