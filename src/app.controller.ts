import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern('foo')
  getHello(): string {
    return 'Hello, world!';
  }
}
