import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { transform } from '@project/libs/shared/helpers';
import { CommentsService } from './comments.service';
import { CreateCommentDto } from './comments.dto/create-comment.dto';
import { UpdateCommentDto } from './comments.dto/update-comment.dto';
import { CommentRdo } from './comments.rdo/comment.rdo';

@ApiTags('Comments')
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @ApiResponse({
    type: CreateCommentDto,
    status: HttpStatus.OK,
    description: 'Создать комментарий',
  })
  @Post()
  public async create(@Body() dto: CreateCommentDto) {
    const comment = await this.commentsService.create(dto);
    return transform(CommentRdo, comment);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Вернуть список комментариев',
  })
  @Get()
  public async findAll() {
    const comments = await this.commentsService.findAll();
    return { comments: transform(CommentRdo, comments) };
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Вернуть комментарий',
  })
  @Get(':id')
  public async findOne(@Param('id') id: string) {
    const comment = await this.commentsService.findOne(id);
    return transform(CommentRdo, comment);
  }

  @ApiResponse({
    type: UpdateCommentDto,
    status: HttpStatus.OK,
    description: 'Обновить данные комментария',
  })
  @Patch(':id')
  public async update(@Param('id') id: string, @Body() dto: UpdateCommentDto) {
    const comment = await this.commentsService.update(id, dto);
    return transform(CommentRdo, comment);
  }

  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Удалить комментарий',
  })
  @Delete(':id')
  public async remove(@Param('id') id: string) {
    const comment = await this.commentsService.remove(id);
    return transform(CommentRdo, comment);
  }
}
