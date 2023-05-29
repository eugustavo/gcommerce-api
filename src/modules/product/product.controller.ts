import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')
export class ProductController {
    constructor(private readonly productService: ProductService) {}

    @Post('popule-database')
    async populeDataBase() {
        await this.productService.populeDataBase();
        return 'Database populated';
    }

    @Get()
    findAll() {
        return this.productService.findAll();
    }

    @Get(':id')
    findById(@Param('id') id: number) {
        return this.productService.findById(id);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.productService.remove(id);
    }
}
