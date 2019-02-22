import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BataBindingRoutingModule } from './bata-binding-routing.module';
import { BataBindingComponent } from './bata-binding.component';
import { StringInterpolationComponent } from './string-interpolation/string-interpolation.component';
import { PropertyBindingComponent } from './property-binding/property-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TwoWayBindingComponent } from './two-way-binding/two-way-binding.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [BataBindingComponent, StringInterpolationComponent, PropertyBindingComponent, EventBindingComponent, TwoWayBindingComponent],
  imports: [
    CommonModule,
    BataBindingRoutingModule,
    FormsModule
  ]
})
export class BataBindingModule { }
