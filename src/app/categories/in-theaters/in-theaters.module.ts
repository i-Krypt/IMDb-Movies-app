import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InTheatersRoutingModule } from './in-theaters-routing.module';
import { InTheatersComponent } from './component/in-theaters.component';


@NgModule({
  declarations: [
    InTheatersComponent
  ],
  imports: [
    CommonModule,
    InTheatersRoutingModule
  ]
})
export class InTheatersModule { }
