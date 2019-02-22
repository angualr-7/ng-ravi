import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { MessageComponent } from './message/message.component';
import { HomeComponent } from './home/home.component';
import { ViewHandlerComponent } from './eventEmmiterUsingServces/view-handler/view-handler.component';
import { HtmlReferenceComponent } from './referencePassing/html-reference/html-reference.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'batabinding', loadChildren: './bata-binding/bata-binding.module#BataBindingModule' },

  { path: 'type1', component: MessageComponent },
  { path: 'type2', component: HtmlReferenceComponent },


  { path: 'type3', component: ViewHandlerComponent },
  { path: 'type4', component: Page1Component },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
