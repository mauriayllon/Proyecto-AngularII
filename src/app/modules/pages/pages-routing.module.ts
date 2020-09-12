import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';


const routes: Routes = [
   {path:'', 
   component: HomeComponent,
   children:[
  {path:'contact', loadChildren: () => import('./modules/contact/contact.module').then(m => m.ContactModule)},
  {path:'news', loadChildren: () => import('./modules/news/news.module').then(m => m.NewsModule)},
   ] 
 }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})

export class PagesRoutingModule{}
