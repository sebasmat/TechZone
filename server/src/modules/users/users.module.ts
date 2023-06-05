/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { usersProviders } from './users.providers';
import { SequelizeModule } from '@nestjs/sequelize';
import {User} from './users.entity'

@Module({
    imports: [SequelizeModule.forFeature([User])],
    providers: [UsersService, ...usersProviders],
    exports: [UsersService],
})
export class UsersModule {}