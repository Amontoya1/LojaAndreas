
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import  { HomeComponent } from './view/home/home.component';
import  { CrudComponent } from './view/product/crud/crud.component';
import { CreateComponent } from './components/product/create/create.component';


const routes: Routes = [
{
  path: "",
  component: HomeComponent
},
{
  path: "crud",
  component: CrudComponent
},
{
  path: "create",
  component: CreateComponent
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
