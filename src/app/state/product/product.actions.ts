import { createAction, props } from "@ngrx/store";
import { IProduct } from "../../model/product.model";

export const loadProducts = createAction('[Products] Loading Products')

export const loadProductsSuccess = createAction('[Products] Products Loaded Successfully', props<{products: IProduct[]}>())

export const loadProductsFailure = createAction('[Products] Error while loading products', props<{error: string}>())

export const addToCart = createAction('[Products] Added to cart', props<{product: IProduct}>())