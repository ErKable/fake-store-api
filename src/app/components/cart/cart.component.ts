import { Component } from "@angular/core";
import { Store } from "@ngrx/store";
import { selectCart } from "../../state/product/product.selectors";
import { CommonModule } from "@angular/common";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatButtonModule } from "@angular/material/button";
import { removeFromCart } from "../../state/product/product.actions";

@Component({
    selector: 'cart',
    templateUrl: "./cart.component.html",
    styleUrl: "./cart.component.css",
    imports: [CommonModule, MatGridListModule, MatButtonModule]
})
export class CartComponent {
    cartItems$

    constructor(private store: Store){
        this.cartItems$ = this.store.select(selectCart)
    }

    removeItem(indexToRemove: number){
        this.store.dispatch(removeFromCart({indexToRemove}))
    }
} 