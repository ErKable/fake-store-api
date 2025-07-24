import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideHttpClient } from '@angular/common/http';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { productsReducer } from './state/product/product.reducer';
import { ProductsEffect } from './state/product/product.effects';
import { ProductService } from './service/products.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideStore(), 
    provideHttpClient(), 
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() }), 
    provideState({name: 'products', reducer: productsReducer}),
    provideEffects([ProductsEffect]), 
    ProductService,
  ]
};
