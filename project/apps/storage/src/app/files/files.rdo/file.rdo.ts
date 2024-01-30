import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IFile } from '@project/libs/shared/types';
import { FilesPropDesc } from '../files.const';

export class FileRdo implements IFile {
  @ApiProperty({ description: FilesPropDesc.Id })
  @Expose()
  public id: string;

  @ApiProperty({ description: FilesPropDesc.CreatedAt })
  @Expose()
  public createdAt: Date;

  @ApiProperty({ description: FilesPropDesc.Hash })
  @Expose()
  public hash: string;

  @ApiProperty({ description: FilesPropDesc.MimeType })
  @Expose()
  public mimetype: string;

  @ApiProperty({ description: FilesPropDesc.FileExt })
  @Expose()
  public ext: string;

  @ApiProperty({ description: FilesPropDesc.FileName })
  @Expose()
  public name: string;

  @ApiProperty({ description: FilesPropDesc.FilePath })
  @Expose()
  public path: string;

  @ApiProperty({ description: FilesPropDesc.FileSrc })
  @Expose()
  public src: string;

  @ApiProperty({ description: FilesPropDesc.FileSize })
  @Expose()
  public size: number;
}
