import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Comment } from '../entities/comment.entity';
import { Product } from '../entities/product.entity';

import { CreateCommentType } from '../models/comment';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment) private commentRepository: Repository<Comment>,
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  async list(productId: number) {
    const product = await this.productRepository.findOne({
      where: {
        id: productId,
      },
      relations: {
        comments: true,
      },
    });

    return product?.comments;
  }

  async create(productId: number, commentDetails: CreateCommentType) {
    const product = await this.productRepository.findOneBy({ id: productId });
    const comment = this.commentRepository.create({
      ...commentDetails,
      product,
    });
    return this.commentRepository.save(comment);
  }
}
