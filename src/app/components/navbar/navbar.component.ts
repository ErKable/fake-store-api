import { Component } from "@angular/core";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatBadgeModule} from '@angular/material/badge';
import { Store } from "@ngrx/store";
import { selectCart } from "../../state/product/product.selectors";
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import { RouterLink, RouterModule } from "@angular/router";


@Component({
    selector: 'navbar',
    styleUrl: './navbar.componet.css',
    templateUrl: './navbar.componet.html',
    imports: [MatBadgeModule, MatIconModule, MatButtonModule, FormsModule, MatFormFieldModule, MatInputModule, MatGridListModule, RouterModule, RouterLink]
})
export class NavbarComponet{
    cartLength: number = 0

    constructor(private store: Store,){
        this.store.select(selectCart).subscribe(
            cart => this.cartLength = cart.length
        )
    }

}