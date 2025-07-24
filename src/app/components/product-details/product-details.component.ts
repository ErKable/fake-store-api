import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { IProduct } from '../../model/product.model';

@Component({
  selector: 'app-product-details',
  imports: [],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  constructor(public dialogRef: MatDialogRef<ProductDetailsComponent>, 
      @Inject(MAT_DIALOG_DATA) public data: {product: IProduct}){
      console.log(data)
  }
    
}
