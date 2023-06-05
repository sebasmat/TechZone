/* eslint-disable prettier/prettier */
export class ProductsDto {
    readonly id: number;
    readonly name: string;
    readonly image: string;
    readonly password: string;
    readonly images: Array<string>;
    readonly description: string;
    readonly price: number;
    readonly avalaible: boolean;
}