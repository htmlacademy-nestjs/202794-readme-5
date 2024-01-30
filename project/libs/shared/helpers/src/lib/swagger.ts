import { Logger, INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { spawn } from 'node:child_process';

export interface SwaggerSpecOptions {
  app: INestApplication;
  host?: string;
  path: string;
  version: string;
  name: string;
}

export async function setupSwaggerSpec(options: SwaggerSpecOptions) {
  const { app, path, version, name } = options;

  const document = SwaggerModule.createDocument(
    app, new DocumentBuilder()
      .setTitle(`The «${name}» service`)
      .setDescription(`${name} service API`)
      .setVersion(version)
      .build(),
      { operationIdFactory: (_: string, method: string) => method }
  );

  SwaggerModule.setup(path, app, document);
}

export async function generateSwaggerClient(options: SwaggerSpecOptions) {
  if (!process.env.APP_GENERATE_CLIENT) {
    return;
  }
  const { host = 'http://localhost:3001', path, name } = options;

  await new Promise((resolve, reject) => {
    const inputPath = `${host}/${path}-json`.toLowerCase();
    const outputPath = `./libs/${name}/clients/src/lib`.toLowerCase();

    const command = [
      `npx openapi-generator-cli generate`,
      `-g typescript-axios`,
      `-i \"${inputPath}\"`,
      `-o \"${outputPath}\"`,
      `--additional-properties=\"${[
        'apiModulePrefix=api',
        'apiPackage=clients',
        'enumNameSuffix=""',
        'fileNaming=kebab-case',
        'modelFileSuffix=.model',
        'modelPackage=models',
        'useSingleRequestParameter=true',
        'withoutPrefixEnums=true',
        'withSeparateModelsAndApi=true',
      ].join(',')}\"`,
      `--skip-validate-spec`,
    ].join(' ');

    const cmd = spawn(command, { stdio: 'ignore', shell: true });

    cmd.on('data', () => {});
    cmd.on('error', () => reject('Error running openapi-generator-cli command.'));
    cmd.on('exit', resolve);
  });

  Logger.log(`📗 Rest API client [${name}] is generated`);
}
