import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Delete, UseInterceptors, Query } from '@nestjs/common';
import { MongoIdValidationPipe, UUIDValidationPipe } from '@project/libs/shared/helpers';
import { LikeNotFound, LikeTransform, LikesTransform } from './likes.interceptors';
import { LikesService } from './likes.service';
import { CreateLikeDto } from './likes.dto/create-like.dto';
import { RemoveLikeDto } from './likes.dto/remove-like.dto';
import { LikeRdo } from './likes.rdo/like.rdo';
import { LikesRdo } from './likes.rdo/likes.rdo';
import { LikesApiDesc } from './likes.const';

@ApiTags('Likes')
@Controller('likes')
export class LikesController {
  constructor(
    private readonly likesService: LikesService
  ) {}

  @ApiOkResponse({
    type: LikesRdo,
    description: LikesApiDesc.GetAll,
  })
  @Get()
  @UseInterceptors(LikesTransform)
  public async findAll(
    @Query('postId', UUIDValidationPipe) postId: string,
    @Query('authorId', MongoIdValidationPipe) authorId: string,
  ) {
    return this.likesService.findAll({ postId, authorId });
  }

  @ApiOkResponse({
    type: LikeRdo,
    description: LikesApiDesc.Create,
  })
  @Post()
  @UseInterceptors(LikeTransform)
  public async create(@Body() dto: CreateLikeDto) {
    return this.likesService.create(dto);
  }

  @ApiOkResponse({
    type: LikeRdo,
    description: LikesApiDesc.Remove,
  })
  @Delete()
  @UseInterceptors(LikeTransform, LikeNotFound)
  public async remove(@Body() dto: RemoveLikeDto) {
    return this.likesService.remove(dto);
  }
}
