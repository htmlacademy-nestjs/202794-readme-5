import { Inject, Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';
import { MulterFile } from '@project/libs/shared/types';
import { appStorageConfig } from '@project/libs/config/storage';
import { ensureDir } from 'fs-extra';
import { writeFile } from 'node:fs/promises';
import { randomUUID } from 'node:crypto';
import { extname, join } from 'node:path';
import { extension } from 'mime-types';
import sanitize from 'sanitize-filename';
import dayjs from 'dayjs';
import { FilesRepository } from './files.repository';

@Injectable()
export class FilesService {
  constructor(
    private readonly filesRepository: FilesRepository,
    @Inject(appStorageConfig.KEY)
    private readonly appConfig: ConfigType<typeof appStorageConfig>,
  ) {}

  protected async writeFile(file: MulterFile) {
    const [year, month] = dayjs().format('YYYY MM').split(' ');
    const uploadsPath = this.appConfig.path.uploads;
    const staticsPath = this.appConfig.path.statics;
    const pwdPath = this.appConfig.path.pwd;
    const name = file.originalname;
    const mimetype = file.mimetype;
    const size = file.size;

    const hash = randomUUID();
    const ext = sanitize(extension(mimetype) || extname(name));
    const filename = `${hash}.${ext}`;
    const path = `/${year}/${month}`;

    await ensureDir(join(pwdPath, uploadsPath, path));
    await writeFile(join(pwdPath, uploadsPath, path, filename), file.buffer);

    const src = join(staticsPath, path, filename);

    return { mimetype, name, hash, ext, path, src, size };
  }

  public async upload(file: MulterFile) {
    return this.filesRepository.create(
      await this.writeFile(file),
    );
  }

  public async findAll() {
    return this.filesRepository.findAll();
  }

  public async findOne(id: string) {
    return this.filesRepository.findOne(id);
  }

  public async remove(id: string) {
    return this.filesRepository.remove(id);
  }
}
