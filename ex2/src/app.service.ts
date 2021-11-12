import { AlunoDto } from './aluno/dto/aluno.dto';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  AlunoDto(): string {
    return 'Hello World!';
  }
}
