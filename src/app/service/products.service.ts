import { HttpClient } from "@angular/common/http";
import { IProduct } from "../model/product.model";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class ProductService {
    api: string = 'https://fakestoreapi.com/products'
    constructor(private httpClient: HttpClient){}

    getProducts(): Observable<IProduct[]>{
        return this.httpClient.get<IProduct[]>(this.api)
    }
}