import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "../app.state";

export const selectAppState = createFeatureSelector<AppState>('products')

export const selectProducts = createSelector(
    selectAppState,
    (state: AppState) => {
        return state.products
    }
)

export const selectCartState = createFeatureSelector<AppState>('cart')

export const selectCart = createSelector(
    selectAppState,
    (state: AppState) => {
        return state.cart
    }
)