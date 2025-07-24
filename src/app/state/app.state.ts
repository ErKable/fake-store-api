import { IProduct } from "../model/product.model";

export interface AppState {
    products: IProduct[],
    error: string,
    loading: boolean,
    cart: IProduct[]
}