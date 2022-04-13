import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InTheatersComponent } from './component/in-theaters.component';

const routes: Routes = [{ path: '', component: InTheatersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InTheatersRoutingModule { }
