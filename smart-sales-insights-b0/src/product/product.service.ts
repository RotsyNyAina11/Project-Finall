import { Injectable } from '@nestjs/common';
import { ProductInterface } from './types/ProductInterface';
import { InjectRepository } from '@nestjs/typeorm';
import {Product} from './entities/product.entity'
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product) private productRepository: Repository<Product>
    ){}

    findAll(): Promise<ProductInterface[]> {
        return this.productRepository.find()
    }

    findOne(id: number): Promise<ProductInterface> {
        return this.productRepository.findOneBy({ id })
    }

    create(product: Omit<ProductInterface, 'id'>): Promise<ProductInterface> {
        const data = this.productRepository.create(product)
        return this.productRepository.save(data)
    }

    async update(id: number, product: Partial<ProductInterface>): Promise<ProductInterface> {
        await this.productRepository.update(id, product);
        const updatedProduct = await this.productRepository.findOneBy({ id });
        return updatedProduct
    }

    async delete(id: number): Promise<ProductInterface[]> {
        await this.productRepository.delete(id)
        return this.productRepository.find()
    }
}
