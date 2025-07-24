import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductGrid } from "./components/products-grid/products-grid.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductGrid],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fake-store-api';
}
