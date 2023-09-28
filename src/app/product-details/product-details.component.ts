import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products,IProduct } from '../Products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  ProdDetail:IProduct | undefined;
  constructor(private route: ActivatedRoute){}
  ngOnInit(){
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number (routeParams.get('productId'));

    // find the product that corresponds with the id provided in the route

    this.ProdDetail = products.find(p => p.id === productIdFromRoute);

  }
}
