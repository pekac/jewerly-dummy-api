import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CommentsController } from './controllers/comments.controller';
import { ProductsController } from './controllers/products.controller';

import { Comment } from './entities/comment.entity';
import { Product } from './entities/product.entity';

import { ExampleMiddleware } from './middleware/example.middleware';

import { CommentsService } from './services/comments.service';
import { ProductsService } from './services/products.service';

@Module({
  controllers: [ProductsController, CommentsController],
  imports: [TypeOrmModule.forFeature([Product, Comment])],
  providers: [ProductsService, CommentsService],
})
export class ProductsModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ExampleMiddleware).forRoutes('products');
  }
}
