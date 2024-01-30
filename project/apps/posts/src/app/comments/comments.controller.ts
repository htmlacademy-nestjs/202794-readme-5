import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { Controller, Get, Post, Body, Patch, Param, Delete, Query, UseInterceptors } from '@nestjs/common';
import { UUIDValidationPipe } from '@project/libs/shared/helpers';
import { CommentTransform, CommentNotFound, CommentsTransform } from './comments.interceptors';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './comments.dto/create-comment.dto';
import { UpdateCommentDto } from './comments.dto/update-comment.dto';
import { RemoveCommentDto } from './comments.dto/remove-comment.dto';
import { CommentRdo } from './comments.rdo/comment.rdo';
import { CommentsRdo } from './comments.rdo/comments.rdo';
import { CommentsApiDesc } from './comments.const';
import { CommentsQuery } from './comments.query';

@ApiTags('Comments')
@Controller('comments')
export class CommentsController {
  constructor(
    private readonly commentsService: CommentsService
  ) {}

  @ApiOkResponse({
    type: CommentsRdo,
    description: CommentsApiDesc.GetAll,
  })
  @Get()
  @UseInterceptors(CommentsTransform)
  public async findAll(@Query() query?: CommentsQuery) {
    return this.commentsService.findAll(query);
  }

  @ApiOkResponse({
    type: CommentRdo,
    description: CommentsApiDesc.GetOne,
  })
  @Get(':id')
  @UseInterceptors(CommentTransform, CommentNotFound)
  public async findOne(@Param('id', UUIDValidationPipe) id: string) {
    return this.commentsService.findOne(id);
  }

  @ApiOkResponse({
    type: CommentRdo,
    description: CommentsApiDesc.Create,
  })
  @Post()
  @UseInterceptors(CommentTransform)
  public async create(@Body() dto: CreateCommentDto) {
    return this.commentsService.create(dto);
  }

  @ApiOkResponse({
    type: CommentRdo,
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

  @ApiOkResponse({
    type: CommentRdo,
    description: CommentsApiDesc.Remove,
  })
  @Delete(':id')
  @UseInterceptors(CommentTransform, CommentNotFound)
  public async remove(
    @Param('id', UUIDValidationPipe) id: string,
    @Body() dto: RemoveCommentDto,
  ) {
    return this.commentsService.remove(id, dto);
  }
}
