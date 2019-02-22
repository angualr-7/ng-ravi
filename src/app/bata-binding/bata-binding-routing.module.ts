import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BataBindingComponent } from './bata-binding.component';

const routes: Routes = [{ path: '', component: BataBindingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BataBindingRoutingModule { }
