import { Controller, Get, Post, Body, Delete, HttpStatus, UseInterceptors, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { MongoIdValidationPipe, UUIDValidationPipe } from '@project/libs/shared/helpers';
import { LikesService } from './likes.service';
import { CreateLikeDto } from './likes.dto/create-like.dto';
import { RemoveLikeDto } from './likes.dto/remove-like.dto';
import { LikesApiDesc } from './likes.const';
import { LikeNotFoundInterceptor, LikeTransformInterceptor, LikesTransformInterceptor } from './likes.interceptors';

@ApiTags('Likes')
@Controller('likes')
export class LikesController {
  constructor(
    private readonly likesService: LikesService
  ) {}

  @ApiResponse({
    status: HttpStatus.OK,
    description: LikesApiDesc.GetAll,
  })
  @Get()
  @UseInterceptors(LikesTransformInterceptor)
  public async findAll(
    @Query('postId', UUIDValidationPipe) postId: string,
    @Query('authorId', MongoIdValidationPipe) authorId: string,
  ) {
    return this.likesService.findAll({ postId, authorId });
  }

  @ApiResponse({
    type: CreateLikeDto,
    status: HttpStatus.OK,
    description: LikesApiDesc.Create,
  })
  @Post()
  @UseInterceptors(LikeTransformInterceptor)
  public async create(@Body() dto: CreateLikeDto) {
    return this.likesService.create(dto);
  }

  @ApiResponse({
    type: RemoveLikeDto,
    status: HttpStatus.OK,
    description: LikesApiDesc.Remove,
  })
  @Delete()
  @UseInterceptors(LikeTransformInterceptor, LikeNotFoundInterceptor)
  public async remove(@Body() dto: RemoveLikeDto) {
    return this.likesService.remove(dto);
  }
}
