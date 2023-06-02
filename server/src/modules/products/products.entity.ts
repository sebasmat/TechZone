/* eslint-disable prettier/prettier */
import { Table, Column, Model, DataType , ForeignKey} from 'sequelize-typescript';
import { User } from '../users/users.entity'; 
@Table
export class Products extends Model<Products> {
    @Column({
        type: DataType.NUMBER,
        allowNull: false,
        primaryKey: true
    })
    id: number;
    @ForeignKey(() => User)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    userId: number;

    @Column({
        type: DataType.STRING,
        unique: true,
        allowNull: false,
    })
    name: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    image: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    description: string;

    @Column({
        type: DataType.NUMBER,
        allowNull: false,
    })
    price: number;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    avalaible: boolean;

}