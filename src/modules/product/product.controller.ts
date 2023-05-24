import { Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
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

    @Delete(':id')
    remove(@Param('id') id: string) {
        return 'Boa Sorte';
    }
}
