import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product} from '../../models/product.model';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.scss']
})
export class ProductListComponentComponent {

  @Input() productList : Product[] = [];

  @Output() deletRequest = new EventEmitter<number>();

  eliminar(index : number){
    this.deletRequest.emit(index);
  }
}
