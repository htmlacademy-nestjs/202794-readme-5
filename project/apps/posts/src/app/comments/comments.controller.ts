import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Query, UseInterceptors } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './comments.dto/create-comment.dto';
import { UpdateCommentDto } from './comments.dto/update-comment.dto';
import { CommentTransformInterceptor, CommentNotFoundInterceptor } from './comments.interceptors';
import { CommentsApiDesc } from './comments.const';
import { LimitValidationPipe, MongoIdValidationPipe, OffsetValidationPipe, UUIDValidationPipe } from '@project/libs/shared/helpers';

@ApiTags('Comments')
@Controller('comments')
export class CommentsController {
  constructor(
    private readonly commentsService: CommentsService
  ) {}

  @ApiResponse({
    status: HttpStatus.OK,
    description: CommentsApiDesc.GetAll,
  })
  @Get()
  @UseInterceptors(CommentTransformInterceptor)
  public async findAll(
    @Query('offset', OffsetValidationPipe) offset?: number,
    @Query('limit', LimitValidationPipe) limit?: number,
    @Query('postId', UUIDValidationPipe) postId?: string,
    @Query('authorId', MongoIdValidationPipe) authorId?: string,
  ) {
    return this.commentsService.findAll({
      offset, limit, postId, authorId,
    });
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: CommentsApiDesc.GetOne,
  })
  @Get(':id')
  @UseInterceptors(CommentTransformInterceptor, CommentNotFoundInterceptor)
  public async findOne(@Param('id', UUIDValidationPipe) id: string) {
    return this.commentsService.findOne(id);
  }

  @ApiResponse({
    type: CreateCommentDto,
    status: HttpStatus.OK,
    description: CommentsApiDesc.Create,
  })
  @Post()
  @UseInterceptors(CommentTransformInterceptor)
  public async create(@Body() dto: CreateCommentDto) {
    return this.commentsService.create(dto);
  }

  @ApiResponse({
    type: UpdateCommentDto,
    status: HttpStatus.OK,
    description: CommentsApiDesc.Update,
  })
  @Patch(':id')
  @UseInterceptors(CommentTransformInterceptor, CommentNotFoundInterceptor)
  public async update(
    @Param('id', UUIDValidationPipe) id: string,
    @Body() dto: UpdateCommentDto,
  ) {
    return this.commentsService.update(id, dto);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: CommentsApiDesc.Remove,
  })
  @Delete(':id')
  @UseInterceptors(CommentTransformInterceptor, CommentNotFoundInterceptor)
  public async remove(@Param('id', UUIDValidationPipe) id: string) {
    return this.commentsService.remove(id);
  }
}
