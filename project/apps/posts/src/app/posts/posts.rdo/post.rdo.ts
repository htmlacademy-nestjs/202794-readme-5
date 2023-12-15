import { ApiProperty } from '@nestjs/swagger';
import { Expose } from 'class-transformer';
import { IPost, PostStatus, PostType } from '@project/libs/shared/types';

export class PostRdo implements IPost {
  @ApiProperty({ description: 'Индентификатор поста' })
  @Expose()
  public id: string;

  @ApiProperty({ description: 'Тип поста' })
  @Expose()
  public postType: PostType;

  @ApiProperty({ description: 'Состояние поста' })
  @Expose()
  public postStatus: PostStatus;

  @ApiProperty({ description: 'Дата создания поста' })
  @Expose()
  public dateOfCreation: Date;

  @ApiProperty({ description: 'Дата публикации поста' })
  @Expose()
  public dateOfPublish: Date;

  @ApiProperty({ description: 'id автора поста' })
  @Expose()
  public authorId: string;

  @ApiProperty({ description: 'id автора поста с которого сделали репост' })
  @Expose()
  public ownerId?: string;

  @ApiProperty({ description: 'id поста с которого сделали репост' })
  @Expose()
  public ownerPostId?: string;

  @ApiProperty({ description: 'Пост является репостом' })
  @Expose()
  public isRepost?: boolean;
}
