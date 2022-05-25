import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DemoStrategy } from './demo-strategy';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    strategy: new DemoStrategy(),
  });
  await app.listen();
}
bootstrap();
