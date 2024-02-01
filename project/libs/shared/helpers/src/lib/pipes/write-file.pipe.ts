import dayjs from 'dayjs';
import sanitize from 'sanitize-filename';
import { ensureDir } from 'fs-extra';
import { extension } from 'mime-types';
import { extname, join } from 'node:path';
import { randomUUID } from 'node:crypto';
import { writeFile } from 'node:fs/promises';
import { PipeTransform } from '@nestjs/common';
import { MulterFile, IFile } from '@project/libs/shared/types';

export class WriteFilePipe implements PipeTransform {
  constructor(
    protected uploadsPath: string,
    protected staticsPath: string,
    protected pwdPath: string,
  ) {}

  public async transform(file: MulterFile): Promise<Partial<IFile>> {
    if (typeof file === 'undefined') {
      return file;
    }
    const [year, month] = dayjs().format('YYYY MM').split(' ');
    const name = file.originalname;
    const mimetype = file.mimetype;
    const size = file.size;

    const hash = randomUUID();
    const ext = sanitize(extension(mimetype) || extname(name));
    const filename = `${hash}.${ext}`;
    const path = `/${year}/${month}`;

    await ensureDir(join(this.pwdPath, this.uploadsPath, path));
    await writeFile(join(this.pwdPath, this.uploadsPath, path, filename), file.buffer);

    const src = join(this.staticsPath, path, filename);

    return { mimetype, name, hash, ext, path, src, size };
  }
}
