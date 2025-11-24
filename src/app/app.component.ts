import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MiniCatalogApp';

  productos: Product[] = [];

  productCreated(nuevoProducto: Product){
    this.productos.push(nuevoProducto)
  }

  deletProduct(index : number){
    this.productos.splice(index, 1)
  }
}
