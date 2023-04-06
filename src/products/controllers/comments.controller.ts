import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateCommentDto } from '../dtos/create-comment.dto';

import { IComment } from '../models/comment';

import { CommentsService } from '../services/comments.service';

@ApiTags('Comments')
@Controller('products/:id')
export class CommentsController {
  constructor(private commentService: CommentsService) {}

  @Get('comments')
  async getCommentsForProduct(@Param('id', ParseIntPipe) productId: number) {
    const comments: IComment[] = await this.commentService.list(productId);

    if (!comments || comments?.length === 0) {
      throw new HttpException(
        `No comments found for product id: ${productId}`,
        HttpStatus.NOT_FOUND,
      );
    }

    return comments;
  }

  @Post('comments')
  @UsePipes(new ValidationPipe())
  async createComment(
    @Param('id', ParseIntPipe) productId: number,
    @Body() commentDetails: CreateCommentDto,
  ) {
    return this.commentService.create(productId, commentDetails);
  }
}
