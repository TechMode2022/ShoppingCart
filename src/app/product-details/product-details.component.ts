import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products,IProduct } from '../Products';
import { CartService } from '../cart.service';  
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  ProdDetail:IProduct | undefined;
  constructor(
    private route: ActivatedRoute,
    private cartService :CartService
    ){}

    addToMyCart(prod1:IProduct){
    this.cartService.addToCart(prod1);
    window.alert('Your product has been added to the cart!');

  }
  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number (routeParams.get('productId'));

    // find the product that corresponds with the id provided in the route

    this.ProdDetail = products.find(p => p.id === productIdFromRoute);

  }
}
