import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const port = config.get('app.port');
  const globalPrefix = 'api';

  app.setGlobalPrefix(globalPrefix);

  const document = SwaggerModule.createDocument(
    app, new DocumentBuilder()
      .setTitle('The «Users» service')
      .setDescription('Users service API')
      .setVersion('1.0')
      .build()
  );

  SwaggerModule.setup(`${globalPrefix}/spec`, app, document);

  await app.listen(port);

  Logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap();
