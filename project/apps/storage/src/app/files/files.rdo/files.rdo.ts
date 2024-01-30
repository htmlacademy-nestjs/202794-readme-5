import { Expose, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { IFile, IPagination } from '@project/libs/shared/types';
import { FilesPropDesc } from '../files.const';
import { FileRdo } from './file.rdo';

export class FilesRdo implements IPagination<IFile> {
  @ApiProperty({ description: FilesPropDesc.Count })
  @Expose()
  public count: number;

  @ApiProperty({
    type: [FileRdo],
    description: FilesPropDesc.Count,
  })
  @Expose()
  @Type(() => FileRdo)
  public items: IFile[];

  @ApiProperty({ description: FilesPropDesc.Limit })
  @Expose()
  public limit?: number;

  @ApiProperty({ description: FilesPropDesc.Offset })
  @Expose()
  public offset?: number;

  @ApiProperty({ description: FilesPropDesc.Page })
  @Expose()
  public page?: number;

  @ApiProperty({ description: FilesPropDesc.Pages })
  @Expose()
  public pages?: number;
}
