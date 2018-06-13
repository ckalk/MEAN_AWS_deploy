import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Item } from '../../item';
import { InventoryService } from '../../inventory.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  @Input() item: Item;
  noDelete: boolean;
  errorMessage: string;


  constructor(
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
    private readonly _invservice: InventoryService
  ) {}

  ngOnInit() {
    this._route.paramMap
      .pipe(
        switchMap(params => this._invservice.getProduct(params.get('id')))
      )
      .subscribe(
        item => {
          this.item = item;
          this.noDelete = true;
          if (this.item.qty <= 0) {
            this.noDelete = false;
          }
          console.log('SHOW component OnInit this.item:', this.item, ' this.noDelete:', this.noDelete);
        },
        (error: HttpErrorResponse) => {
          console.log('SHOW component OnInit error retrieving item', error);
          this.errorMessage = error.statusText;
          this._router.navigateByUrl('products');
        }
      );
  }


  deleteItem(id) {

    console.log('SHOW component deleteItem with product._id: ', id);

    // on click of delete button  call _invservice to delete product with product.id from db
    this._invservice.deleteProduct(id).subscribe();
    this._router.navigateByUrl('products');

  }


}
