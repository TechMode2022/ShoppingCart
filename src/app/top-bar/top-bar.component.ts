import { Component } from '@angular/core';

import { CartInteractiveServiceService } from '../cart-interactive-service.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
  constructor(private cartInteractiveService: CartInteractiveServiceService){}

  onRemoveCartClick(){
    this.cartInteractiveService.triggerRemoveItem();
  }
}
