/* eslint-disable prettier/prettier */
import { Products } from "./products.entity";
import { PRODUCTS_REPOSITORY} from '../../core/constants';

export const productsProviders = [{
    provide: PRODUCTS_REPOSITORY,
    useValue: Products,
}]