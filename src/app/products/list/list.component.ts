import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Item } from '../../item';
import { InventoryService } from '../../inventory.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  item: Item = new Item();
  allItems: Item[] = [];

  constructor( private _invservice: InventoryService, private _router: Router ) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this._invservice.getProducts()
    .subscribe(
      (response: any) => {
        this.allItems = response;
        console.log('list.component.ts call _invservice.getProducts() allItems', this.allItems);
     },
      (err) => {
        console.log('list.component.ts call _invservice.getProducts() error:', err);
     }
   );
  }

  editItem(id) {

    console.log('LIST component editItem with product._id: ', id);

    // redirect to product edit route
    console.log('LIST COMPONENT calling Angular route:', `/products/${id}/edit`);
    this._router.navigateByUrl(`/products/${id}/edit`);

    }

  // showItem(id) {

  //   console.log('LIST component showItem with product._id: ', id);

  //   // redirect to product show (Angular) route
  //   console.log('LIST COMPONENT calling Angular route:', `/products/${id}`);

  //   this._router.navigateByUrl('/products/{$id)');

  // }

}
