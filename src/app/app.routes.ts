import { Routes } from '@angular/router';
import { ProductGrid } from './components/products-grid/products-grid.component';
import { CartComponent } from './components/cart/cart.component';

export const routes: Routes = [
    {
        path: '',
        component: ProductGrid
    },
    {
        path: 'cart',
        component: CartComponent
    }
];
