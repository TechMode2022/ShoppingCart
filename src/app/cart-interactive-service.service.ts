import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartInteractiveServiceService {

  private removeItemSubject = new Subject<void>();

  removeItem$ = this.removeItemSubject.asObservable();

  triggerRemoveItem(){
    this.removeItemSubject.next();
  }

  constructor() { }
}
