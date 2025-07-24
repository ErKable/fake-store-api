import { createSelector, Store } from "@ngrx/store";
import { selectCart, selectProducts } from "../../state/product/product.selectors";
import { Component, HostListener, OnDestroy, OnInit } from "@angular/core";
import { addToCart, loadProducts } from "../../state/product/product.actions";
import { Observable, Subscription } from "rxjs";
import { IProduct } from "../../model/product.model";
import { CommonModule } from "@angular/common";
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatDialog, MatDialogModule } from "@angular/material/dialog";
import { ProductDetailsComponent } from "../product-details/product-details.component";

@Component({
    selector: 'products-grid-app',
    templateUrl: './products-grid.component.html',
    styleUrl: './products-grid.component.css',
    imports: [CommonModule, MatGridListModule, MatCardModule, MatButtonModule, MatIconModule, MatDialogModule, ProductDetailsComponent]
})
export class ProductGrid implements OnInit, OnDestroy{
    products$: Observable<IProduct[]>
    colnumber: number = 4
    resizeSubscription: Subscription = new Subscription()

    constructor(private store: Store, private dialog: MatDialog){
        this.products$ = this.store.select(selectProducts)        
    }

    ngOnInit(){
        this.store.dispatch(loadProducts())
        this.products$.subscribe(products => console.log(products))
    }

    addTocart(product: IProduct){
        this.store.dispatch(addToCart({product}))
        this.store.select(selectCart).subscribe(cart => console.log(cart))
    }

    openDetails(product: IProduct){
        const dialogRef = this.dialog.open(ProductDetailsComponent,{
                data: {
                    product: product
                }
            }
        )
    }


    @HostListener('window: resize', ['$event'])
    onResize(event: Event){
        const currentWidth = (event.target as Window).innerWidth;
        if (currentWidth < 600) {
            this.colnumber = 1;
        } else if (currentWidth < 1024) {
            this.colnumber = 2;
        } else {
            this.colnumber = 4;
        }
    }

    ngOnDestroy(): void {
        this.resizeSubscription.unsubscribe();
    }

    
}