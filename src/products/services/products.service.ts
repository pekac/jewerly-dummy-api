import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import {
  CreateProductType,
  UpdateProductType,
} from 'src/products/models/product';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>,
  ) {}

  list() {
    return this.productRepository.find();
  }

  one(id: number) {
    return this.productRepository.findOneBy({ id });
  }

  create(productDetails: CreateProductType) {
    const product = this.productRepository.create(productDetails);
    return this.productRepository.save(product);
  }

  update(id: number, productUpdate: UpdateProductType) {
    return this.productRepository.update({ id }, productUpdate);
  }

  remove(id: number) {
    return this.productRepository.delete({ id });
  }
}
