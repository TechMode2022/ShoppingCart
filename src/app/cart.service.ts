import { Injectable } from '@angular/core';
import { IProduct } from './Products';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CartService {

    items:IProduct[] = [];
    newItems:IProduct[] = [];

    constructor(private http: HttpClient) {}

    cartChanged = new Subject<void>(); // create a subject to be notified when the cart has changed

    addToCart (prod1:IProduct){
      this.items.push(prod1);
      this.cartChanged.next(); // notify subscribers of cart changes
    }

    getItems () {
      return this.items;
    }

    RemoveItem (id:number){
        if (id >= 0 && id < this.items.length) {
          this.items.splice(id, 1);
          this.cartChanged.next(); // notify subscribers of cart changes
    }
  }

    clearCart () {
      this.items = [];
      this.cartChanged.next();// notify subscribers of cart changes
      return this.items;
    }

    getShippingPrices() {
      return this.http.get<{type: string, price: number}[]>('/assets/shipping.json');
    }

   
}
