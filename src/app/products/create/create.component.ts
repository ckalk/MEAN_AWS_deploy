import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { InventoryService } from '../../inventory.service';

import { Item } from '../../item';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  item: Item = new Item();
  formErrors: String[];

  constructor( private _router: Router, private _invService: InventoryService ) { }

  ngOnInit() {
  }

  onSubmit(event: Event, newitem: Item): void {

    event.preventDefault();

    console.log('CREATE component onSubmit with new item: ', newitem);

    // on submit of form, call _invService.createItem to add new item to db
    this._invService.createProduct(newitem).subscribe(
      () => {
        console.log('CREATE component onSubmit _invService.createProduct in success branch');

        // redirect to products listing route
        this._router.navigateByUrl('/products/list');
        },
        error => {
          console.log('CREATE component onSubmit _invService.createProduct returned with error:', error.error);
          this.formErrors = error.error;
        }
      );
    }

  // clear form if user clicks reset button
  resetForm(event: Event, formData: NgForm): void {

    console.log('CREATE component resetForm');
    // reset formData
    formData.reset();
    this.formErrors = null;

    }

}
