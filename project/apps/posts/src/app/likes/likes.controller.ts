import { Controller, Get, Post, Body, Delete, HttpStatus, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { transform } from '@project/libs/shared/helpers';
import { LikesService } from './likes.service';
import { CreateLikeDto } from './likes.dto/create-like.dto';
import { RemoveLikeDto } from './likes.dto/remove-like.dto';
import { LikeRdo } from './likes.rdo/likes.rdo';
import { LikesApiDesc } from './likes.const';

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
  public async findAll(@Query('postId') postId?: string) {
    const likes = await this.likesService.findAll({ postId });
    const count = likes.length;

    return { count, items: transform(LikeRdo, likes) };
  }

  @ApiResponse({
    type: CreateLikeDto,
    status: HttpStatus.OK,
    description: LikesApiDesc.Create,
  })
  @Post()
  public async create(@Body() dto: CreateLikeDto) {
    return transform(LikeRdo, await this.likesService.create(dto));
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: LikesApiDesc.Remove,
  })
  @Delete()
  public async remove(@Body() dto: RemoveLikeDto) {
    return transform(LikeRdo, await this.likesService.remove(dto));
  }
}
