import { outputAst } from '@angular/compiler';
import { Component ,Input,Output,EventEmitter} from '@angular/core';
import { IProduct } from '../Products';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent {
  @Input() Inoutp1!: IProduct;
  @Output() notiFy = new EventEmitter;
 }
