import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, Query } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { transform } from '@project/libs/shared/helpers';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './comments.dto/create-comment.dto';
import { UpdateCommentDto } from './comments.dto/update-comment.dto';
import { CommentRdo } from './comments.rdo/comment.rdo';
import { CommentsApiDesc } from './comments.const';

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
  public async findAll(@Query('postId') postId?: string) {
    const comments = await this.commentsService.findAll({ postId });
    const count = comments.length;

    return { count, items: transform(CommentRdo, comments) };
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: CommentsApiDesc.GetOne,
  })
  @Get(':id')
  public async findOne(@Param('id') id: string) {
    return transform(CommentRdo, await this.commentsService.findOne(id));
  }

  @ApiResponse({
    type: CreateCommentDto,
    status: HttpStatus.OK,
    description: CommentsApiDesc.Create,
  })
  @Post()
  public async create(@Body() dto: CreateCommentDto) {
    return transform(CommentRdo, await this.commentsService.create(dto));
  }

  @ApiResponse({
    type: UpdateCommentDto,
    status: HttpStatus.OK,
    description: CommentsApiDesc.Update,
  })
  @Patch(':id')
  public async update(
    @Param('id') id: string,
    @Body() dto: UpdateCommentDto,
  ) {
    return transform(CommentRdo, await this.commentsService.update(id, dto));
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: CommentsApiDesc.Remove,
  })
  @Delete(':id')
  public async remove(@Param('id') id: string) {
    return transform(CommentRdo, await this.commentsService.remove(id));
  }
}
