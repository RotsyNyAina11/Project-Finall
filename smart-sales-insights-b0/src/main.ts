import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //resolve cors probleme doing request
  app.enableCors({
    origin: 'http://localhost:5173', // Remplacez par l'URL de votre client
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Si vous utilisez des cookies
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
