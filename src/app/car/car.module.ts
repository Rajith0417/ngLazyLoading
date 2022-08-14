import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarRoutingModule } from './car-routing.module';
import { CarDashboardComponent } from './car-dashboard/car-dashboard.component';
import { OtherProductComponent } from './other-product/other-product.component';


@NgModule({
  declarations: [
    CarDashboardComponent,
    OtherProductComponent
  ],
  imports: [
    CommonModule,
    CarRoutingModule
  ]
})
export class CarModule { }
