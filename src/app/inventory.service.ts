import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

// import Angular blueprint for a product item -- Product
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  item: Item;
  allItems = new BehaviorSubject([]);

// this must agree with what is included in server.js for routes -- // products here is the server-side page routing for all pages
// beginning with /products
  private base = '/api/products';

  constructor( private _http: HttpClient ) { }

  getProducts() {
    console.log('SERVICE in InventoryService getProducts');
    return this._http.get(this.base);
  }

  createProduct(item: Item): Observable<Item> {
    console.log('SERVICE in InventoryService createProduct to add item: ', item);
    return this._http.post<Item>(this.base, item);
  }

  updateProduct(_id: string, item: Item) {
    console.log('SERVICE in InventoryService updateProduct to change item _id: ', _id, 'to be item:', item);

    console.log('SERVICE in InventoryService updateProduct is calling .put route $(this.base)/$(_id): ', `${this.base}/${_id}` );
    return this._http.put( `${this.base}/${_id}`,  item);
  }

  deleteProduct(_id: string): Observable<Item> {
    console.log('SERVICE in InventoryService deleteProduct to delete _id:', _id);
    console.log('SERVICE in InventoryService deleteProduct is calling .delete route $(this.base)/$(_id): ', `${this.base}/${_id}` );

    return this._http.delete<Item>( `${this.base}/${_id}` );
  }

  getProduct(_id: string): Observable<Item> {
    console.log('SERVICE in InventoryService getProduct (single) to get _id:', _id);
    console.log('SERVICE in InventoryService getProduct is calling .get route $(this.base)/$(_id): ', `${this.base}/${_id}` );
    return this._http.get<Item>( `${this.base}/${_id}` );
  }

}
