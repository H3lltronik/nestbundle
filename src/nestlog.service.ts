import { Injectable } from '@nestjs/common';

@Injectable()
export class NestlogService {
  log(logData: string) {
    console.log(logData);
  }
}
