import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World from Ravichander!';
  }
  getAbout(): string {
    return "About Ravichander.";
  }
}
