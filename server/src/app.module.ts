/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { User } from './modules/users/users.entity'
import { Products } from './modules/products/products.entity';

@Module({
    imports: [
        ConfigModule.forRoot({ isGlobal: true }),
        SequelizeModule.forRoot({
          dialect: 'mysql',
          host: process.env.DB_HOST,
          port: process.env.DB_POR,
          username: process.env.DB_USER,
          password: process.env.DB_PASS,
          database: 'techzone_vi0e',
          models: [User , Products],
        }),
        UsersModule,
        ProductsModule,
    ]
})
export class AppModule { }