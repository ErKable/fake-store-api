import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductGrid } from "./components/products-grid/products-grid.component";
import { NavbarComponet } from "./components/navbar/navbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductGrid, NavbarComponet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fake-store-api';
}
 