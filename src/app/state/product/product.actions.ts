import { createAction, props } from "@ngrx/store";
import { IProduct } from "../../model/product.model";

export const loadProducts = createAction('[Products] Loading Products')

export const loadProductsSuccess = createAction('[Products] Products Loaded Successfully', props<{products: IProduct[]}>())

export const loadProductsFailure = createAction('[Products] Error while loading products', props<{error: string}>())

export const addToCart = createAction('[Cart] Product added to cart', props<{product: IProduct}>())

export const removeFromCart = createAction('[Cart] Product removed from cart', props<{indexToRemove: number}>())