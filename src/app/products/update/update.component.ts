import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Item } from '../../item';
import { InventoryService } from '../../inventory.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  item: Item;
  tmpItem: Item;
  _id_of_item: string;
  formErrors: String[];

  constructor(
    private _invservice: InventoryService,
    private _route: ActivatedRoute,
    private _router: Router ) {
    }

  ngOnInit() {
    // call on InventoryService getProduct(_id: string) to return Observable of type Item with that id to be edited
    this._route.paramMap.subscribe( params => {
        this._id_of_item = params.get('id');
        console.log('this._id_of_item:', this._id_of_item);

        this._invservice.getProduct(this._id_of_item)
        .subscribe(
          itemReturned => {
          this.item = itemReturned;
          this.tmpItem = Object.assign({}, itemReturned);
          console.log('UPDATE COMPONENT ngOnInit retrieved this.item: ', this.item);
          },
          error => {
            console.log(error);
          }
        );
    });
  }

  onUpdate(event: Event, changeditem: Item): void {

      event.preventDefault();

      console.log('UPDATE COMPONENT  onUpdate with changed product with _id: ', this._id_of_item, 'with changed product:', changeditem);

      // on submit, call _invservice.updateProduct to update product in db
      this._invservice.updateProduct(this._id_of_item, changeditem).subscribe(
        () => {
          console.log('UPDATE component onUpdate _invservice.updateProduct in success branch');

          // redirect to products listing route
          this._router.navigateByUrl('/products');
          },
          error => {
            console.log('UPDATE component onUpdate _invservice.updateProduct returned with error:', error.error);
            this.formErrors = error.error;
          }
        );
      }


    // return to initial values if user clicks reset button
    initialValues(event: Event, formData: NgForm): void {

      console.log('UPDATE component resetForm to initial values', this.tmpItem);
      // reset formData to initial values
      formData.resetForm(this.tmpItem);
      this.formErrors = null;

      }

}
