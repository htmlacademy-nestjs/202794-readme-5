import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Query, UseInterceptors } from '@nestjs/common';
import { UUIDValidationPipe } from '@project/libs/shared/helpers';
import { CommentTransform, CommentNotFound, CommentsTransform } from './comments.interceptors';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './comments.dto/create-comment.dto';
import { UpdateCommentDto } from './comments.dto/update-comment.dto';
import { CommentsApiDesc } from './comments.const';
import { CommentsQuery } from './comments.query';

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
  @UseInterceptors(CommentsTransform)
  public async findAll(@Query() query?: CommentsQuery) {
    return this.commentsService.findAll(query);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: CommentsApiDesc.GetOne,
  })
  @Get(':id')
  @UseInterceptors(CommentTransform, CommentNotFound)
  public async findOne(@Param('id', UUIDValidationPipe) id: string) {
    return this.commentsService.findOne(id);
  }

  @ApiResponse({
    type: CreateCommentDto,
    status: HttpStatus.OK,
    description: CommentsApiDesc.Create,
  })
  @Post()
  @UseInterceptors(CommentTransform)
  public async create(@Body() dto: CreateCommentDto) {
    return this.commentsService.create(dto);
  }

  @ApiResponse({
    type: UpdateCommentDto,
    status: HttpStatus.OK,
    description: CommentsApiDesc.Update,
  })
  @Patch(':id')
  @UseInterceptors(CommentTransform, CommentNotFound)
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
  @UseInterceptors(CommentTransform, CommentNotFound)
  public async remove(@Param('id', UUIDValidationPipe) id: string) {
    return this.commentsService.remove(id);
  }
}
