import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusRoutingModule } from './bus-routing.module';
import { BusDashboardComponent } from './bus-dashboard/bus-dashboard.component';


@NgModule({
  declarations: [
    BusDashboardComponent
  ],
  imports: [
    CommonModule,
    BusRoutingModule
  ]
})
export class BusModule { }
