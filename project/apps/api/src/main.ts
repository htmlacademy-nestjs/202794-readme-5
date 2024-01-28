import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { ConfigApi } from '@project/libs/config/api';
import { RequestIdInterceptor, setupSwaggerSpec } from '@project/libs/shared/helpers';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService<ConfigApi>);
  const name = config.get('app.name', { infer: true });
  const port = config.get('app.port', { infer: true });
  const version = config.get('app.api.version', { infer: true });
  const prefix = config.get('app.api.prefix', { infer: true });
  const SPEC_PATH = `${prefix}/spec`;

  app.setGlobalPrefix(prefix);
  app.useGlobalInterceptors(new RequestIdInterceptor());
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    validateCustomDecorators: true,
  }));

  setupSwaggerSpec({
    app: app,
    path: SPEC_PATH,
    version: version,
    name: name,
  });

  await app.listen(port);

  Logger.log(`🚀 Application [${name}] is running on: http://localhost:${port}/${prefix}`);
  Logger.log(`📗 Specification [${name}] is running on: http://localhost:${port}/${SPEC_PATH}`);
}

bootstrap();
