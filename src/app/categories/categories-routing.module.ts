import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComingSoonComponent } from './components/coming-soon/coming-soon.component';
import { ViewAllComponent } from './components/view-all/view-all.component';


const routes: Routes = [
  { path: '',  component: ComingSoonComponent },
  { path: 'movies/:category',  component: ViewAllComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
