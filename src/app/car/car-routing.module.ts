import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDashboardComponent } from './car-dashboard/car-dashboard.component';
import { OtherProductComponent } from './other-product/other-product.component';

const routes: Routes = [
  {path: "", component: CarDashboardComponent},
  {path: "car-dashboard", component: OtherProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarRoutingModule { }
