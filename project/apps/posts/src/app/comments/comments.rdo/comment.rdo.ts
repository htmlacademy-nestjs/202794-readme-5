import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IPostComment } from '@project/libs/shared/types';

export class CommentRdo implements IPostComment {
  @ApiProperty({ description: 'Индентификатор комментария' })
  @Expose()
  public id: string;

  @ApiProperty({ description: 'Дата создания' })
  @Expose()
  public createdAt: Date;

  @ApiProperty({ description: 'Дата изменения' })
  @Expose()
  public updatedAt: Date;

  @ApiProperty({ description: 'Индентификатор автора' })
  @Expose()
  public ownerId: string;

  @ApiProperty({ description: 'Индентификатор поста' })
  @Expose()
  public postId: string;

  @ApiProperty({ description: 'Текст комментария' })
  @Expose()
  public message: string;
}
