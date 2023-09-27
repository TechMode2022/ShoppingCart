import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent
  ],
  imports: [
    
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path:'',component:ProductListComponent
      },
      {
        path:'products/:productId',component:ProductDetailsComponent
      }
    ]),
    AppRoutingModule
  ],

  // declarations:[

  // ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
