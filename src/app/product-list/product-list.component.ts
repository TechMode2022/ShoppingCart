import { Component } from '@angular/core';
import {  products } from '../Products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  prodlist = products;

share(){
  window.alert('The product has been successfully shared');
} 

}
