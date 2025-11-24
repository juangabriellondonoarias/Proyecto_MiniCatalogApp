import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-form-component',
  templateUrl: './product-form-component.component.html',
  styleUrls: ['./product-form-component.component.scss']
})

export class ProductFormComponentComponent {
  private id: number = 0;
  name: string = '';
  price: number = 0;

  @Output() productCreated = new EventEmitter<Product>();

  agregar(){
    if(this.name.trim() === '' || this.price <= 0){
      return;
    }

    const newProduct : Product = {
      id: this.id++,
      name: this.name,
      price: this.price
    };

    this.productCreated.emit(newProduct);

    this.name = '';
    this.price = 0;
  }
}
