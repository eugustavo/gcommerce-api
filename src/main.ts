import 'dotenv/config';

import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    app.enableCors();

    // swagger
    const options = new DocumentBuilder()
        .setTitle('NestJS API')
        .setDescription('NestJS API description')
        .setVersion('1.0')
        .addTag('nestjs')
        .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);

    await app.listen(process.env.PORT || 3333);
}
bootstrap();
