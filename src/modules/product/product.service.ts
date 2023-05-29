import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ) {}

    async populeDataBase() {
        const productsToCreate = [];
        for (let i = 0; i < 8; i++) {
            const product = new Product();
            product.name = faker.commerce.productName();
            product.description = faker.commerce.productDescription();
            product.category = faker.commerce.department();
            product.price = Math.floor(Math.random() * 1000) + 1;
            product.image = faker.image.urlLoremFlickr({ category: 'fashion' });
            product.rating_stars = Math.floor(Math.random() * 5) + 1;

            productsToCreate.push(product);
        }

        await this.productRepository.save(productsToCreate);
    }

    async findAll() {
        return await this.productRepository.find();
    }

    async findById(id: number) {
        const product = await this.productRepository.findOne({
            where: { id },
        });

        if (!product) {
            throw new Error('Product not found');
        }

        return product;
    }

    async remove(id: number) {
        return await this.productRepository.delete(id);
    }
}
