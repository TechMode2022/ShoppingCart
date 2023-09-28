import { Component,OnInit,ChangeDetectorRef } from '@angular/core';
import { CartService } from '../cart.service';
import { CartInteractiveServiceService } from '../cart-interactive-service.service';
import { FormBuilder } from '@angular/forms';
// import router module
import { Router } from '@angular/router';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit {
  items = this.cartService.getItems();
  isCartEmpty = false;

  checkoutForm = this.formBuilder.group({
    name: '',
    address: ''
  });

  constructor(private cartService: CartService,
              private cartInteractiveService: CartInteractiveServiceService,
              private cdr: ChangeDetectorRef,
              private router: Router,
              private formBuilder: FormBuilder) {
                this.cartInteractiveService.removeItem$.subscribe(() => {
                  this.RemoveItems();
                })
              }

  ngOnInit() {
    // Subscribe to changes in the cart items
    this.cartService.cartChanged.subscribe(() => {
      this.items = this.cartService.getItems();
      this.checkCartEmpty();
    });

    // Initialize the cart state
    this.checkCartEmpty();
  }

  RemoveProduct(id:number){
    this.cartService.RemoveItem(id);
    this.items=this.cartService.getItems();
  }

  RemoveItems() {
    this.cartService.clearCart();
    this.checkCartEmpty();
    this.router.navigate(['']);
  }

  private checkCartEmpty() {
    this.isCartEmpty = this.items.length === 0;
    this.cdr.detectChanges(); // Trigger change detection
  }

  onSubmit(): void {
    // Process checkout data here
    this.items = this.cartService.clearCart();
    console.warn('Your order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
