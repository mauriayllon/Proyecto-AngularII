import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from './pages.component';



const routes: Routes = [
   {path:'', 
   component: PagesComponent,
   children:[
  {path:'',redirectTo:'home',pathMatch:'full'},
  
  {path:'home', loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)},
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
