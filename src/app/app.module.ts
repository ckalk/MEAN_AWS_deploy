import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { InventoryService } from './inventory.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ListComponent } from './products/list/list.component';
import { ShowComponent } from './products/show/show.component';
import { CreateComponent } from './products/create/create.component';
import { UpdateComponent } from './products/update/update.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ListComponent,
    ShowComponent,
    CreateComponent,
    UpdateComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [
    InventoryService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
