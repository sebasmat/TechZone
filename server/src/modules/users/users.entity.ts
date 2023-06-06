/* eslint-disable prettier/prettier */
import { Table, Column, Model, DataType, HasMany, } from 'sequelize-typescript';
import { Products } from '../products/products.entity';
@Table
export class User extends Model<User> {
    @Column({
        type: DataType.STRING,
        allowNull: false,
        primaryKey: true,
    })
    id: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    email: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    password: string;

    @HasMany(() => Products)
  Products: Products;

    @Column({
    type: DataType.ARRAY,
    allowNull: true,
  })
  favorite: string[]
}