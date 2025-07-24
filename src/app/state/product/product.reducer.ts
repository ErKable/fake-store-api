import { createReducer, on } from "@ngrx/store";
import { AppState } from "../app.state";
import { addToCart, loadProducts, loadProductsFailure, loadProductsSuccess } from "./product.actions";

export const initialState: AppState = {
    products: [],
    error: '',
    loading: false,
    cart: []
}

export const productsReducer = createReducer(
    initialState,
    on(loadProducts, (state) => ({
        ...state,
        loading: true
    })),
    on(loadProductsSuccess, (state, {products}) => ({
        ...state,
        products,
        loading: false
    })),
    on(loadProductsFailure, (state, {error}) => ({
        ...state,
        error,
        loading: false
    })),
    on(addToCart, (state, {product}) => ({
        ...state,
        cart: [...state.cart, product]
    }))
)