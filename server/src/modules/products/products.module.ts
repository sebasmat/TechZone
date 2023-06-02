import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { productsProviders } from './products.providers';
import { SequelizeModule } from '@nestjs/sequelize';
import { Products } from './products.entity';
import { ProductsController } from './products.controller';

@Module({
  imports: [SequelizeModule.forFeature([Products])],
  providers: [ProductsService, ...productsProviders],
  controllers: [ProductsController],
})
export class ProductsModule {}
