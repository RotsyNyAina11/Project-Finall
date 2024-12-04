import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductInterface } from './types/ProductInterface';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {

    constructor(private productService :  ProductService){}

    @Get()
    findAll(): Promise<ProductInterface[]> {
        return this.productService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: string): Promise<ProductInterface>{
        return this.productService.findOne(+id);
    }

    @Post()
    create(@Body() product: Omit<ProductInterface, 'id'>): Promise<ProductInterface>{
        return this.productService.create(product);
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() product: Partial<ProductInterface>){
        return this.productService.update(+id, product)
    }

    @Delete(':id')
    delete(@Param('id') id: string) : Promise<ProductInterface[]> {
        return this.productService.delete(+id)
    }
}
