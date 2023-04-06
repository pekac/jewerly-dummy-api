import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

import { CreateProductDto } from '../dtos/create-product.dto';
import { UpdateProductDto } from '../dtos/update-product.dto';

import { AuthGuard } from '../guards/auth.guard';

import { ProductsService } from '../services/products.service';

@ApiTags('Products')
@Controller('products')
@UseGuards(AuthGuard)
export class ProductsController {
  constructor(private productService: ProductsService) {}

  @Get()
  getProducts() {
    return this.productService.list();
  }

  @Post()
  @UsePipes(new ValidationPipe())
  createProduct(@Body() product: CreateProductDto) {
    return this.productService.create(product);
  }

  @Get(':id')
  getProductById(@Param('id', ParseIntPipe) id: number) {
    const product = this.productService.one(id);

    if (!product) {
      throw new HttpException('Product not found', HttpStatus.NOT_FOUND);
    }

    return product;
  }

  @Put(':id')
  updateProduct(
    @Param('id', ParseIntPipe) id: number,
    @Body() productUpdate: UpdateProductDto,
  ) {
    this.productService.update(id, productUpdate);
  }

  @Delete(':id')
  deleteProduct(@Param('id', ParseIntPipe) id: number) {
    return this.productService.remove(id);
  }
}
