import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export interface SwaggerSpecOptions {
  app: INestApplication;
  path: string;
  version: string;
  name: string;
}

export function setupSwaggerSpec(options: SwaggerSpecOptions) {
  const { app, path, version, name } = options;

  const document = SwaggerModule.createDocument(
    app, new DocumentBuilder()
      .setTitle(`The «${name}» service`)
      .setDescription(`${name} service API`)
      .setVersion(version)
      .build()
  );

  SwaggerModule.setup(path, app, document);

  return document;
}
