import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ProductService } from "../../service/products.service";
import { loadProducts, loadProductsFailure, loadProductsSuccess } from "./product.actions";
import { catchError, map, mergeMap, of } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class ProductsEffect {
    loadProducts$

    constructor(private actions$: Actions, private productService: ProductService){
        this.loadProducts$ = createEffect(() => 
            this.actions$.pipe(
                ofType(loadProducts),
                mergeMap(() => 
                    this.productService.getProducts().pipe(
                        map(products => loadProductsSuccess({products})),
                        catchError(() => of(loadProductsFailure({error: "Error while loading products"})))
                    ))
            )
        )
    }
}