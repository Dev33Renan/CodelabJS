import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  SomaDto(): number {
    const x = 10;
    const y = 10;
    return x + y;
  }
}
