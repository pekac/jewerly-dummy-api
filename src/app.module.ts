import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Comment } from './products/entities/comment.entity';
import { Product } from './products/entities/product.entity';

import { ProductsModule } from './products/products.module';

require('dotenv').config();

const port: number = parseInt(process.env.POSTGRES_PORT);

@Module({
  imports: [
    ProductsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      entities: [Comment, Product],
      synchronize: false,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
