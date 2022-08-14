import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'car', loadChildren: ()=>import('./car/car.module').then(mod=>mod.CarModule)},
  { path: 'bus', loadChildren: ()=>import('./bus/bus.module').then(mod=>mod.BusModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
