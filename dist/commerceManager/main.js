(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _products_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./products/list/list.component */ "./src/app/products/list/list.component.ts");
/* harmony import */ var _products_create_create_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./products/create/create.component */ "./src/app/products/create/create.component.ts");
/* harmony import */ var _products_show_show_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./products/show/show.component */ "./src/app/products/show/show.component.ts");
/* harmony import */ var _products_update_update_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./products/update/update.component */ "./src/app/products/update/update.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: 'products', pathMatch: 'full' },
    { path: 'products', component: _products_products_component__WEBPACK_IMPORTED_MODULE_2__["ProductsComponent"], children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: _products_list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"] },
            { path: 'new', component: _products_create_create_component__WEBPACK_IMPORTED_MODULE_4__["CreateComponent"] },
            { path: ':id', component: _products_show_show_component__WEBPACK_IMPORTED_MODULE_5__["ShowComponent"] },
            { path: ':id/edit', component: _products_update_update_component__WEBPACK_IMPORTED_MODULE_6__["UpdateComponent"] }
        ] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"jumbotron banner\">\n      <h1 class=\"display-5\">{{ title }}</h1>\n  </div>\n\n  <!-- main navigation bar here if you need one -->\n\n\n   <!-- content body here -->\n\n   <router-outlet></router-outlet>\n\n  <hr class='mt-5'>\n\n  <footer>\n      <p>&copy; Kalkulations 2018</p>\n  </footer>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Commerce Manager';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inventory.service */ "./src/app/inventory.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _products_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./products/products.component */ "./src/app/products/products.component.ts");
/* harmony import */ var _products_list_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./products/list/list.component */ "./src/app/products/list/list.component.ts");
/* harmony import */ var _products_show_show_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./products/show/show.component */ "./src/app/products/show/show.component.ts");
/* harmony import */ var _products_create_create_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./products/create/create.component */ "./src/app/products/create/create.component.ts");
/* harmony import */ var _products_update_update_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./products/update/update.component */ "./src/app/products/update/update.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"],
                _products_list_list_component__WEBPACK_IMPORTED_MODULE_8__["ListComponent"],
                _products_show_show_component__WEBPACK_IMPORTED_MODULE_9__["ShowComponent"],
                _products_create_create_component__WEBPACK_IMPORTED_MODULE_10__["CreateComponent"],
                _products_update_update_component__WEBPACK_IMPORTED_MODULE_11__["UpdateComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            ],
            providers: [
                _inventory_service__WEBPACK_IMPORTED_MODULE_4__["InventoryService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/inventory.service.ts":
/*!**************************************!*\
  !*** ./src/app/inventory.service.ts ***!
  \**************************************/
/*! exports provided: InventoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryService", function() { return InventoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InventoryService = /** @class */ (function () {
    function InventoryService(_http) {
        this._http = _http;
        this.allItems = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        // this must agree with what is included in server.js for routes -- // products here is the server-side page routing for all pages
        // beginning with /products
        this.base = '/api/products';
    }
    InventoryService.prototype.getProducts = function () {
        console.log('SERVICE in InventoryService getProducts');
        return this._http.get(this.base);
    };
    InventoryService.prototype.createProduct = function (item) {
        console.log('SERVICE in InventoryService createProduct to add item: ', item);
        return this._http.post(this.base, item);
    };
    InventoryService.prototype.updateProduct = function (_id, item) {
        console.log('SERVICE in InventoryService updateProduct to change item _id: ', _id, 'to be item:', item);
        console.log('SERVICE in InventoryService updateProduct is calling .put route $(this.base)/$(_id): ', this.base + "/" + _id);
        return this._http.put(this.base + "/" + _id, item);
    };
    InventoryService.prototype.deleteProduct = function (_id) {
        console.log('SERVICE in InventoryService deleteProduct to delete _id:', _id);
        console.log('SERVICE in InventoryService deleteProduct is calling .delete route $(this.base)/$(_id): ', this.base + "/" + _id);
        return this._http.delete(this.base + "/" + _id);
    };
    InventoryService.prototype.getProduct = function (_id) {
        console.log('SERVICE in InventoryService getProduct (single) to get _id:', _id);
        console.log('SERVICE in InventoryService getProduct is calling .get route $(this.base)/$(_id): ', this.base + "/" + _id);
        return this._http.get(this.base + "/" + _id);
    };
    InventoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], InventoryService);
    return InventoryService;
}());



/***/ }),

/***/ "./src/app/item.ts":
/*!*************************!*\
  !*** ./src/app/item.ts ***!
  \*************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
// Angular blueprint for product items.
var Item = /** @class */ (function () {
    function Item() {
    }
    return Item;
}());



/***/ }),

/***/ "./src/app/products/create/create.component.css":
/*!******************************************************!*\
  !*** ./src/app/products/create/create.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/create/create.component.html":
/*!*******************************************************!*\
  !*** ./src/app/products/create/create.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-header\">\n\n      <h3>New Product</h3>\n\n</div>\n\n<div class=\"card-body\">\n\n  <!-- if errors returned, display them -->\n  <div *ngIf='formErrors'>\n    <ul class=\"alert alert-danger\">\n      <li *ngFor = \"let e of formErrors\">\n        {{ e }}\n      </li>\n    </ul>\n  </div>\n\n  <!-- <form (submit)='onSubmit($event, formData.value)' #formData='ngForm'> -->\n\n  <form  #formData='ngForm'>\n\n      <div class = 'form-group row' >\n\n        <label for = 'name'  class = 'col-sm-2 col-form-label text-right'>\n          Name\n        </label>\n\n        <div class = 'col-sm-4'>\n          <input\n            name ='name'\n            placeholder = \"Enter product name\"\n            type = 'text'\n            class ='form-control'\n            required\n            minlength = '3'\n            #name = 'ngModel'\n            [(ngModel)]='item.name'\n          />\n        </div>\n\n        <div *ngIf=\"name.invalid && (name.dirty || name.touched)\"\n        class=\"alert alert-danger\">\n\n          <div *ngIf=\"name.errors.required\">\n              Name is required.\n          </div>\n\n          <div *ngIf=\"name.errors.minlength\">\n              Name must be at least {{ name.errors.minlength.requiredLength }} characters long.\n          </div>\n\n        </div>\n\n      </div>\n\n\n      <div class = 'form-group row' >\n\n          <label for = 'qty'  class = 'col-sm-2 col-form-label text-right'>\n            Qty\n          </label>\n\n          <div class = 'col-sm-4'>\n            <input\n              name ='qty'\n              placeholder = \"Enter product quantity\"\n              type = 'number'\n              pattern=\"^[0-9]*$\"\n              class ='form-control'\n              required\n              #qty = 'ngModel'\n              [(ngModel)]='item.qty'\n            />\n          </div>\n\n          <div class = 'col-sm-6' *ngIf=\"qty.invalid && (qty.dirty || qty.touched)\"\n                class=\"alert alert-danger\">\n\n            <div *ngIf=\"qty.errors.required\">\n              Quantity is required.\n            </div>\n\n            <div *ngIf=\"qty.errors.pattern\">\n                Qty must be an integer greater than 0.\n            </div>\n\n          </div>\n\n      </div>\n\n\n      <div class = 'form-group row' >\n\n          <label for = 'price'  class = 'col-sm-2 col-form-label text-right'>\n            Price\n          </label>\n\n          <div class = 'col-sm-4'>\n            <input\n              name ='price'\n              placeholder = \"Enter product price\"\n              type = 'number'\n              pattern=\"^\\s*(?=.*[0-9])\\d*(?:\\.\\d{1,2})?\\s*$\"\n              class ='form-control'\n              required\n              #price = 'ngModel'\n              [(ngModel)]='item.price'\n            />\n          </div>\n\n          <div class = 'col-sm-6' *ngIf=\"price.invalid && (price.dirty || price.touched)\"\n                class=\"alert alert-danger\">\n\n            <div *ngIf=\"price.errors.required\">\n              Price is required.\n            </div>\n\n            <div *ngIf=\"price.errors.pattern\">\n                Price must be greater than 0.\n            </div>\n\n          </div>\n\n      </div>\n\n    </form>\n\n    <div class = 'row col-sm-6 justify-content-end'>\n      <button (click) = 'resetForm($event, formData)' class = 'btn btn-warning mr-5'>\n          Reset\n      </button>\n      <button (click) = 'onSubmit($event, formData.value)' class = 'btn btn-success' [disabled] = 'formData.invalid'>\n          Create\n      </button>\n    </div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/products/create/create.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/products/create/create.component.ts ***!
  \*****************************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../inventory.service */ "./src/app/inventory.service.ts");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../item */ "./src/app/item.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateComponent = /** @class */ (function () {
    function CreateComponent(_router, _invService) {
        this._router = _router;
        this._invService = _invService;
        this.item = new _item__WEBPACK_IMPORTED_MODULE_3__["Item"]();
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent.prototype.onSubmit = function (event, newitem) {
        var _this = this;
        event.preventDefault();
        console.log('CREATE component onSubmit with new item: ', newitem);
        // on submit of form, call _invService.createItem to add new item to db
        this._invService.createProduct(newitem).subscribe(function () {
            console.log('CREATE component onSubmit _invService.createProduct in success branch');
            // redirect to products listing route
            _this._router.navigateByUrl('/products/list');
        }, function (error) {
            console.log('CREATE component onSubmit _invService.createProduct returned with error:', error.error);
            _this.formErrors = error.error;
        });
    };
    // clear form if user clicks reset button
    CreateComponent.prototype.resetForm = function (event, formData) {
        console.log('CREATE component resetForm');
        // reset formData
        formData.reset();
        this.formErrors = null;
    };
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/products/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/products/create/create.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _inventory_service__WEBPACK_IMPORTED_MODULE_2__["InventoryService"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/products/list/list.component.css":
/*!**************************************************!*\
  !*** ./src/app/products/list/list.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/list/list.component.html":
/*!***************************************************!*\
  !*** ./src/app/products/list/list.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-header\">\n  <div class =\"justify-content-between row\" >\n    <h3>Product List</h3>\n    <a  class=\"btn btn-primary\" [routerLink]=\"['/products', 'new']\">Add New Product</a>\n  </div>\n\n</div>\n\n\n<div class=\"card-body\">\n\n  <table class=\"mt-2 table table-striped table-bordered\">\n\n      <thead class=\"thead-dark\">\n        <tr>\n          <th scope=\"col\">ID</th>\n          <th scope=\"col\">Name</th>\n          <th scope=\"col\">Qty</th>\n          <th scope=\"col\">Price</th>\n          <th scope=\"col\">Actions</th>\n        </tr>\n      </thead>\n\n      <tbody>\n        <tr *ngFor='let i of allItems'>\n          <td>{{ i._id}}</td>\n          <td>{{ i.name }}</td>\n          <td>{{ i.qty }}</td>\n          <td>{{ i.price | currency }}</td>\n          <td>\n\n            <div class='row justify-content-center'>\n\n              <button (click) = 'editItem(i._id)' class = 'btn btn-primary mr-5'>\n                Edit\n              </button>\n\n              <button [routerLink]=\"['/products', i._id]\"\n              class = 'btn btn-success'>\n                Details\n              </button>\n\n            </div>\n          </td>\n        </tr>\n      </tbody>\n\n    </table>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/products/list/list.component.ts":
/*!*************************************************!*\
  !*** ./src/app/products/list/list.component.ts ***!
  \*************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../item */ "./src/app/item.ts");
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../inventory.service */ "./src/app/inventory.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ListComponent = /** @class */ (function () {
    function ListComponent(_invservice, _router) {
        this._invservice = _invservice;
        this._router = _router;
        this.item = new _item__WEBPACK_IMPORTED_MODULE_2__["Item"]();
        this.allItems = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.getAll();
    };
    ListComponent.prototype.getAll = function () {
        var _this = this;
        this._invservice.getProducts()
            .subscribe(function (response) {
            _this.allItems = response;
            console.log('list.component.ts call _invservice.getProducts() allItems', _this.allItems);
        }, function (err) {
            console.log('list.component.ts call _invservice.getProducts() error:', err);
        });
    };
    ListComponent.prototype.editItem = function (id) {
        console.log('LIST component editItem with product._id: ', id);
        // redirect to product edit route
        console.log('LIST COMPONENT calling Angular route:', "/products/" + id + "/edit");
        this._router.navigateByUrl("/products/" + id + "/edit");
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/products/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/products/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [_inventory_service__WEBPACK_IMPORTED_MODULE_3__["InventoryService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/products/products.component.css":
/*!*************************************************!*\
  !*** ./src/app/products/products.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/products.component.html":
/*!**************************************************!*\
  !*** ./src/app/products/products.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card mt-5\">\n\n\n  <!--  card content = products content here, depending on angular routing-->\n\n  <router-outlet></router-outlet>\n\n\n</div>\n<!-- end of card-->\n"

/***/ }),

/***/ "./src/app/products/products.component.ts":
/*!************************************************!*\
  !*** ./src/app/products/products.component.ts ***!
  \************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProductsComponent = /** @class */ (function () {
    function ProductsComponent() {
    }
    ProductsComponent.prototype.ngOnInit = function () {
    };
    ProductsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-products',
            template: __webpack_require__(/*! ./products.component.html */ "./src/app/products/products.component.html"),
            styles: [__webpack_require__(/*! ./products.component.css */ "./src/app/products/products.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "./src/app/products/show/show.component.css":
/*!**************************************************!*\
  !*** ./src/app/products/show/show.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/show/show.component.html":
/*!***************************************************!*\
  !*** ./src/app/products/show/show.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"card-header\">\n\n    <h3>Product Details</h3>\n\n</div>\n\n\n<div class=\"card-body\">\n\n\n    <p class = 'small'>To delete a product, the Qty must be 0.</p>\n\n    <div class=\"row mt-3\">\n        <div class=\"col-3 font-weight-bold\">\n          Name:\n        </div>\n        <div class=\"col\">\n          {{ item?.name }}\n        </div>\n    </div>\n\n    <div class=\"row mt-3\">\n      <div class=\"col-3 font-weight-bold\">\n          Qty:\n      </div>\n      <div class=\"col\">\n          {{ item?.qty }}\n      </div>\n    </div>\n\n    <div class=\"row mt-3\">\n      <div class=\"col-3 font-weight-bold\">\n          Price:\n      </div>\n      <div class=\"col\">\n          {{ item?.price | currency}}\n      </div>\n    </div>\n\n    <div class = 'row offset-3 mt-3'>\n      <button [routerLink]=\"['/products']\" class = 'btn btn-primary mr-5'>\n        Back\n      </button>\n      <button (click) = 'deleteItem(item._id)' class = 'btn btn-danger' [disabled] = \"noDelete\">\n        Delete\n      </button>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/products/show/show.component.ts":
/*!*************************************************!*\
  !*** ./src/app/products/show/show.component.ts ***!
  \*************************************************/
/*! exports provided: ShowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowComponent", function() { return ShowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../item */ "./src/app/item.ts");
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../inventory.service */ "./src/app/inventory.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ShowComponent = /** @class */ (function () {
    function ShowComponent(_router, _route, _invservice) {
        this._router = _router;
        this._route = _route;
        this._invservice = _invservice;
    }
    ShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.paramMap
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (params) { return _this._invservice.getProduct(params.get('id')); }))
            .subscribe(function (item) {
            _this.item = item;
            _this.noDelete = true;
            if (_this.item.qty <= 0) {
                _this.noDelete = false;
            }
            console.log('SHOW component OnInit this.item:', _this.item, ' this.noDelete:', _this.noDelete);
        }, function (error) {
            console.log('SHOW component OnInit error retrieving item', error);
            _this.errorMessage = error.statusText;
            _this._router.navigateByUrl('products');
        });
    };
    ShowComponent.prototype.deleteItem = function (id) {
        console.log('SHOW component deleteItem with product._id: ', id);
        // on click of delete button  call _invservice to delete product with product.id from db
        this._invservice.deleteProduct(id).subscribe();
        this._router.navigateByUrl('products');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _item__WEBPACK_IMPORTED_MODULE_3__["Item"])
    ], ShowComponent.prototype, "item", void 0);
    ShowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-show',
            template: __webpack_require__(/*! ./show.component.html */ "./src/app/products/show/show.component.html"),
            styles: [__webpack_require__(/*! ./show.component.css */ "./src/app/products/show/show.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _inventory_service__WEBPACK_IMPORTED_MODULE_4__["InventoryService"]])
    ], ShowComponent);
    return ShowComponent;
}());



/***/ }),

/***/ "./src/app/products/update/update.component.css":
/*!******************************************************!*\
  !*** ./src/app/products/update/update.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/products/update/update.component.html":
/*!*******************************************************!*\
  !*** ./src/app/products/update/update.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card-header\">\n\n    <h3>Update Product</h3>\n\n</div>\n\n<!-- if errors returned, display them -->\n<div *ngIf='formErrors'>\n  <ul class=\"alert alert-danger\">\n    <li *ngFor = \"let e of formErrors\">\n      {{ e }}\n    </li>\n  </ul>\n</div>\n\n\n<div class=\"card-body\">\n\n<form #formData='ngForm'>\n\n    <div class = 'form-group row' >\n\n      <label for = 'name'  class = 'col-sm-2 col-form-label text-right'>\n        Name\n      </label>\n\n      <div class = 'col-sm-4'>\n        <input\n          name ='name'\n          placeholder = \"Enter product name\"\n          type = 'text'\n          class ='form-control'\n          required\n          minlength = '3'\n          #name = 'ngModel'\n          [(ngModel)]='item.name'\n          value ='item.name'\n        />\n      </div>\n\n      <div *ngIf=\"name.invalid && (name.dirty || name.touched)\"\n      class=\"alert alert-danger\">\n\n        <div *ngIf=\"name.errors.required\">\n            Name is required.\n        </div>\n\n        <div *ngIf=\"name.errors.minlength\">\n            Name must be at least {{ name.errors.minlength.requiredLength }} characters long.\n        </div>\n\n      </div>\n\n    </div>\n\n\n    <div class = 'form-group row' >\n\n        <label for = 'qty'  class = 'col-sm-2 col-form-label text-right'>\n          Qty\n        </label>\n\n        <div class = 'col-sm-4'>\n          <input\n            name ='qty'\n            placeholder = \"Enter product quantity\"\n            type = 'number'\n            pattern=\"^[0-9]*$\"\n            class ='form-control'\n            required\n            #qty = 'ngModel'\n            [(ngModel)]='item.qty'\n            value ='item.qty'\n          />\n        </div>\n\n        <div class = 'col-sm-6' *ngIf=\"qty.invalid && (qty.dirty || qty.touched)\"\n              class=\"alert alert-danger\">\n\n          <div *ngIf=\"qty.errors.required\">\n            Quantity is required.\n          </div>\n\n          <div *ngIf=\"qty.errors.pattern\">\n              Qty must be an integer greater than 0.\n          </div>\n\n        </div>\n\n    </div>\n\n\n    <div class = 'form-group row' >\n\n        <label for = 'price'  class = 'col-sm-2 col-form-label text-right'>\n          Price\n        </label>\n\n        <div class = 'col-sm-4'>\n          <input\n            name ='price'\n            placeholder = \"Enter product price\"\n            type = 'number'\n            pattern=\"^\\s*(?=.*[0-9])\\d*(?:\\.\\d{1,2})?\\s*$\"\n            class ='form-control'\n            required\n            #price = 'ngModel'\n            [(ngModel)]='item.price'\n            value ='item.price'\n          />\n        </div>\n\n        <div class = 'col-sm-6' *ngIf=\"price.invalid && (price.dirty || price.touched)\"\n              class=\"alert alert-danger\">\n\n          <div *ngIf=\"price.errors.required\">\n            Price is required.\n          </div>\n\n          <div *ngIf=\"price.errors.pattern\">\n              Price must be greater than 0.\n          </div>\n\n        </div>\n\n    </div>\n\n  </form>\n\n    <div class = 'row col-sm-6 justify-content-end'>\n      <button (click) = 'initialValues($event, formData)' class = 'btn btn-warning mr-5'>\n        Reset\n      </button>\n      <button (click) = 'onUpdate($event, formData.value)' class = 'btn btn-success' [disabled] = 'formData.invalid'>\n          Update\n      </button>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/products/update/update.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/products/update/update.component.ts ***!
  \*****************************************************/
/*! exports provided: UpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateComponent", function() { return UpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _inventory_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../inventory.service */ "./src/app/inventory.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UpdateComponent = /** @class */ (function () {
    function UpdateComponent(_invservice, _route, _router) {
        this._invservice = _invservice;
        this._route = _route;
        this._router = _router;
    }
    UpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        // call on InventoryService getProduct(_id: string) to return Observable of type Item with that id to be edited
        this._route.paramMap.subscribe(function (params) {
            _this._id_of_item = params.get('id');
            console.log('this._id_of_item:', _this._id_of_item);
            _this._invservice.getProduct(_this._id_of_item)
                .subscribe(function (itemReturned) {
                _this.item = itemReturned;
                _this.tmpItem = Object.assign({}, itemReturned);
                console.log('UPDATE COMPONENT ngOnInit retrieved this.item: ', _this.item);
            }, function (error) {
                console.log(error);
            });
        });
    };
    UpdateComponent.prototype.onUpdate = function (event, changeditem) {
        var _this = this;
        event.preventDefault();
        console.log('UPDATE COMPONENT  onUpdate with changed product with _id: ', this._id_of_item, 'with changed product:', changeditem);
        // on submit, call _invservice.updateProduct to update product in db
        this._invservice.updateProduct(this._id_of_item, changeditem).subscribe(function () {
            console.log('UPDATE component onUpdate _invservice.updateProduct in success branch');
            // redirect to products listing route
            _this._router.navigateByUrl('/products');
        }, function (error) {
            console.log('UPDATE component onUpdate _invservice.updateProduct returned with error:', error.error);
            _this.formErrors = error.error;
        });
    };
    // return to initial values if user clicks reset button
    UpdateComponent.prototype.initialValues = function (event, formData) {
        console.log('UPDATE component resetForm to initial values', this.tmpItem);
        // reset formData to initial values
        formData.resetForm(this.tmpItem);
        this.formErrors = null;
    };
    UpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-update',
            template: __webpack_require__(/*! ./update.component.html */ "./src/app/products/update/update.component.html"),
            styles: [__webpack_require__(/*! ./update.component.css */ "./src/app/products/update/update.component.css")]
        }),
        __metadata("design:paramtypes", [_inventory_service__WEBPACK_IMPORTED_MODULE_2__["InventoryService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], UpdateComponent);
    return UpdateComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/cindykalkomey/Desktop/_AWS_MEAN/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map