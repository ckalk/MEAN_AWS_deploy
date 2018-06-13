import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsComponent } from './products/products.component';
import { ListComponent } from './products/list/list.component';
import { CreateComponent } from './products/create/create.component';
import { ShowComponent } from './products/show/show.component';
import { UpdateComponent } from './products/update/update.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full'},
  { path: 'products', component: ProductsComponent,   children: [
    { path: '', redirectTo: 'list' , pathMatch: 'full' },
    { path: 'list', component: ListComponent },
    { path: 'new', component: CreateComponent },
    { path: ':id', component: ShowComponent},
    { path: ':id/edit', component: UpdateComponent}
    ]}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
