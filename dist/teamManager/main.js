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
/* harmony import */ var _players_players_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./players/players.component */ "./src/app/players/players.component.ts");
/* harmony import */ var _players_list_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./players/list/list.component */ "./src/app/players/list/list.component.ts");
/* harmony import */ var _players_addplayer_addplayer_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./players/addplayer/addplayer.component */ "./src/app/players/addplayer/addplayer.component.ts");
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./status/status.component */ "./src/app/status/status.component.ts");
/* harmony import */ var _status_game_game_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./status/game/game.component */ "./src/app/status/game/game.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', redirectTo: 'players', pathMatch: 'full' },
    { path: 'status', component: _status_status_component__WEBPACK_IMPORTED_MODULE_5__["StatusComponent"], children: [
            { path: '', redirectTo: 'game/1', pathMatch: 'full' },
            { path: 'game/:id', component: _status_game_game_component__WEBPACK_IMPORTED_MODULE_6__["GameComponent"] },
        ] },
    { path: 'players', component: _players_players_component__WEBPACK_IMPORTED_MODULE_2__["PlayersComponent"], children: [
            { path: '', redirectTo: 'list', pathMatch: 'full' },
            { path: 'list', component: _players_list_list_component__WEBPACK_IMPORTED_MODULE_3__["ListComponent"] },
            { path: 'addplayer', component: _players_addplayer_addplayer_component__WEBPACK_IMPORTED_MODULE_4__["AddplayerComponent"] }
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

module.exports = ".banner {\n  height: 250px;\n  width: 100%;\n  max-height: 50%;\n  max-width: 100%;\n  min-height: 20%;\n  min-width: 30%;\n  background-image: url('soccer-hero.jpg');\n  background-size: cover;\n}\n\nh1 {\n  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;\n  margin-top: 100px;;\n}\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\">\n\n  <div class=\"jumbotron banner\">\n      <h1 class=\"display-4 text-white align-baseline\">{{ title }}</h1>\n  </div>\n\n  <!-- navigation bar here -->\n\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-success\">\n\n    <a class=\"navbar-brand\" href=\"\">Team Manager</a>\n\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n\n        <li class=\"nav-item ml-5\">\n            <a class=\"text-white\" [routerLink]=\"['players', 'list']\">Manage Players</a>\n          </li>\n          <li class=\"nav-item ml-5\">\n            <a  class=\"text-white\" [routerLink]=\"['status']\">Manage Player Status</a>\n          </li>\n\n      </ul>\n\n    </div>\n\n  </nav>\n\n   <!-- content body here, depending on nav option chosen -->\n\n  <router-outlet></router-outlet>\n\n  <hr class='mt-5'>\n\n  <footer>\n      <p>&copy; Kalkulations 2018</p>\n  </footer>\n\n</div>\n\n\n"

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
        this.title = 'Team Manager';
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
/* harmony import */ var _teamdata_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./teamdata.service */ "./src/app/teamdata.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _players_players_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./players/players.component */ "./src/app/players/players.component.ts");
/* harmony import */ var _status_status_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./status/status.component */ "./src/app/status/status.component.ts");
/* harmony import */ var _players_list_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./players/list/list.component */ "./src/app/players/list/list.component.ts");
/* harmony import */ var _players_addplayer_addplayer_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./players/addplayer/addplayer.component */ "./src/app/players/addplayer/addplayer.component.ts");
/* harmony import */ var _status_game_game_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./status/game/game.component */ "./src/app/status/game/game.component.ts");
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
                _players_players_component__WEBPACK_IMPORTED_MODULE_7__["PlayersComponent"],
                _status_status_component__WEBPACK_IMPORTED_MODULE_8__["StatusComponent"],
                _players_list_list_component__WEBPACK_IMPORTED_MODULE_9__["ListComponent"],
                _players_addplayer_addplayer_component__WEBPACK_IMPORTED_MODULE_10__["AddplayerComponent"],
                _status_game_game_component__WEBPACK_IMPORTED_MODULE_11__["GameComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            ],
            providers: [
                _teamdata_service__WEBPACK_IMPORTED_MODULE_4__["TeamdataService"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/client-player.ts":
/*!**********************************!*\
  !*** ./src/app/client-player.ts ***!
  \**********************************/
/*! exports provided: ClientPlayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientPlayer", function() { return ClientPlayer; });
// Angular blueprint for  single player.
// I think it's important to name the attributes the same to allow for ease in sending json response directly to database
var ClientPlayer = /** @class */ (function () {
    function ClientPlayer() {
        this.player_name = '';
        this.pref_position = '';
        this.game1_status = 'Undecided';
        this.game2_status = 'Undecided';
        this.game3_status = 'Undecided';
    }
    return ClientPlayer;
}());



/***/ }),

/***/ "./src/app/players/addplayer/addplayer.component.css":
/*!***********************************************************!*\
  !*** ./src/app/players/addplayer/addplayer.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/players/addplayer/addplayer.component.html":
/*!************************************************************!*\
  !*** ./src/app/players/addplayer/addplayer.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"card mt-2\">\n\n  <h3 class=\"card-header primary-color white-text\">\n    Add Player\n  </h3>\n\n  <div class=\"card-body\">\n\n    <form (submit)='onSubmit($event, formData)' #formData='ngForm'>\n\n    <!-- player_name field -->\n      <div class=\"form-group row\">\n\n        <div class = 'col-sm-8'>\n          <input\n          name ='player_name'\n          placeholder =\"Enter player name\"\n          type ='text'\n          class ='form-control'\n          required\n          minlength ='2'\n          #player_name = 'ngModel'\n          [(ngModel)] ='player.player_name'\n          />\n        </div>\n\n        <div *ngIf=\"player_name.invalid && (player_name.dirty || player_name.touched)\"\n        class=\"alert alert-danger\">\n\n          <div *ngIf=\"player_name.errors.required\">\n              Player name is required.\n          </div>\n\n          <div *ngIf=\"player_name.errors.minlength\">\n              Name must be at least {{ player_name.errors.minlength.requiredLength }} characters long.\n          </div>\n        </div>\n      </div>\n\n    <!-- pref_position field -->\n      <div class=\"form-group row\">\n\n        <div class = 'col-sm-8'>\n          <select\n            name=\"pref_position\"\n            type=\"text\"\n            class=\"form-control\"\n            #pref_position = 'ngModel'\n            [(ngModel)] ='player.pref_position'>\n            <option\n            *ngFor='let pos of soccerPositions()'\n            value=\"{{ pos }}\">\n            {{ pos }}\n            </option>\n          </select>\n\n\n<!--           <input\n          name ='pref_position'\n          placeholder =\"Enter player's preferred position\"\n          type ='text'\n          class ='form-control'\n          #pref_position = 'ngModel'\n          [(ngModel)] ='player.pref_position'\n          /> -->\n        </div>\n\n      </div>\n\n\n\n\n\n\n\n\n\n\n\n      <p *ngIf = 'formData.invalid && formData.dirty' class = 'errors' class = 'alert alert-danger'> You can submit after fixing any errors shown above</p>\n      <div class = 'row col-sm-8 justify-content-end'>\n        <button type = 'submit' class = 'btn btn-primary' [disabled] = 'formData.invalid'>\n          Add Player\n        </button>\n      </div>\n\n    </form>\n\n  </div>\n\n</div>\n\n\n"

/***/ }),

/***/ "./src/app/players/addplayer/addplayer.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/players/addplayer/addplayer.component.ts ***!
  \**********************************************************/
/*! exports provided: AddplayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddplayerComponent", function() { return AddplayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _client_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../client-player */ "./src/app/client-player.ts");
/* harmony import */ var _teamdata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../teamdata.service */ "./src/app/teamdata.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddplayerComponent = /** @class */ (function () {
    function AddplayerComponent(_router, _teamService) {
        this._router = _router;
        this._teamService = _teamService;
        this.player = new _client_player__WEBPACK_IMPORTED_MODULE_2__["ClientPlayer"]();
    }
    AddplayerComponent.prototype.ngOnInit = function () {
    };
    AddplayerComponent.prototype.onSubmit = function (event, formData) {
        event.preventDefault();
        console.log('in addplayer component onSubmit with new player: ', this.player);
        // on submit of form, call _teamService.createPlayer to add new product to db
        this._teamService.createPlayer(this.player).subscribe();
        // reset the product for next createProduct
        this.player = new _client_player__WEBPACK_IMPORTED_MODULE_2__["ClientPlayer"]();
        // redirect to player listing route
        this._router.navigateByUrl('/players/list');
    };
    // helper function for perferred position seletion - forward, midfielder, defender, sweeper, or goalkeeper
    AddplayerComponent.prototype.soccerPositions = function () {
        var positions = [];
        positions[0] = 'Defender';
        positions[1] = 'Forward';
        positions[2] = 'Goalkeeper';
        positions[3] = 'Midfielder';
        positions[4] = 'Sweeper';
        return positions;
    };
    AddplayerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-addplayer',
            template: __webpack_require__(/*! ./addplayer.component.html */ "./src/app/players/addplayer/addplayer.component.html"),
            styles: [__webpack_require__(/*! ./addplayer.component.css */ "./src/app/players/addplayer/addplayer.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _teamdata_service__WEBPACK_IMPORTED_MODULE_3__["TeamdataService"]])
    ], AddplayerComponent);
    return AddplayerComponent;
}());



/***/ }),

/***/ "./src/app/players/list/list.component.css":
/*!*************************************************!*\
  !*** ./src/app/players/list/list.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/players/list/list.component.html":
/*!**************************************************!*\
  !*** ./src/app/players/list/list.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<table class=\"mt-2 table table-striped table-bordered\">\n\n  <thead class=\"thead\">\n    <tr>\n      <th scope=\"col\">Player Name</th>\n      <th scope=\"col\">Preferred Position</th>\n      <th scope=\"col\">Actions</th>\n    </tr>\n  </thead>\n\n  <tbody>\n    <tr *ngFor='let p of allPlayers'>\n      <td>{{ p.player_name }}</td>\n      <td>{{ p.pref_position }}</td>\n      <td>\n        <button (click) = 'deleteP(p._id, p.player_name)' class = 'btn btn-danger'>\n          Delete Player\n        </button>\n      </td>\n    </tr>\n  </tbody>\n\n</table>\n\n"

/***/ }),

/***/ "./src/app/players/list/list.component.ts":
/*!************************************************!*\
  !*** ./src/app/players/list/list.component.ts ***!
  \************************************************/
/*! exports provided: ListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListComponent", function() { return ListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _client_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../client-player */ "./src/app/client-player.ts");
/* harmony import */ var _teamdata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../teamdata.service */ "./src/app/teamdata.service.ts");
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
    function ListComponent(_teamservice, _router) {
        this._teamservice = _teamservice;
        this._router = _router;
        this.player = new _client_player__WEBPACK_IMPORTED_MODULE_2__["ClientPlayer"]();
        this.allPlayers = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        this.getSlate();
    };
    ListComponent.prototype.getSlate = function () {
        var _this = this;
        this._teamservice.getPlayers()
            .subscribe(function (response) {
            console.log('list.component.ts call _teamservice.getPlayers() and got response', response);
            _this.allPlayers = response;
            console.log('list.component.ts call _teamservice.getPlayers() allPlayers:', _this.allPlayers);
        }, function (err) {
            console.log('list.component.ts call _teamservice.getPlayers() error:', err);
        });
    };
    ListComponent.prototype.deleteP = function (id, name) {
        var _this = this;
        console.log('in list.component deletePlayer with player._id: ', id);
        // display confirm window
        var yesdelete = window.confirm("Do you really want to delete player " + name + "?");
        // if user clicks yes in confirm window
        if (yesdelete) {
            // on click of delete button  call _teamservice to delete product with product.id from db
            this._teamservice.deletePlayer(id).subscribe(function () {
                // filter out deleted player in allPlayers
                _this.allPlayers = _this.allPlayers.filter(function (player) { return player._id !== id; });
            });
            // if user clicks cancel in confirm window
        }
        else {
            console.log('in list.component deletePlayer window yesdelete and user cancelled, so do nothing');
        }
    };
    ListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-list',
            template: __webpack_require__(/*! ./list.component.html */ "./src/app/players/list/list.component.html"),
            styles: [__webpack_require__(/*! ./list.component.css */ "./src/app/players/list/list.component.css")]
        }),
        __metadata("design:paramtypes", [_teamdata_service__WEBPACK_IMPORTED_MODULE_3__["TeamdataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], ListComponent);
    return ListComponent;
}());



/***/ }),

/***/ "./src/app/players/players.component.css":
/*!***********************************************!*\
  !*** ./src/app/players/players.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/players/players.component.html":
/*!************************************************!*\
  !*** ./src/app/players/players.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n<!-- players navigation bar here -->\n\n<nav class=\"navbar navbar-expand-lg navbar-light bg-light mt-1\">\n\n  <a class=\"navbar-brand\" href=\"\"></a>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n\n      <li class=\"nav-item ml-1\">\n        <!-- note that since we are in list and addplayer parent path, we only list thc child path in the routerlinl-->\n\n        <a class=\"text-success\" [routerLink]=\"['list']\">List</a>\n      </li>\n      <li class=\"nav-item ml-5\">\n        <a  class=\"text-success\" [routerLink]=\"['addplayer']\">Add Player</a>\n      </li>\n\n    </ul>\n\n  </div>\n\n</nav>\n\n<!-- content body here, depending on player nav option chosen -->\n\n  <router-outlet></router-outlet>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/players/players.component.ts":
/*!**********************************************!*\
  !*** ./src/app/players/players.component.ts ***!
  \**********************************************/
/*! exports provided: PlayersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayersComponent", function() { return PlayersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var PlayersComponent = /** @class */ (function () {
    function PlayersComponent() {
    }
    PlayersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-players',
            template: __webpack_require__(/*! ./players.component.html */ "./src/app/players/players.component.html"),
            styles: [__webpack_require__(/*! ./players.component.css */ "./src/app/players/players.component.css")]
        })
    ], PlayersComponent);
    return PlayersComponent;
}());



/***/ }),

/***/ "./src/app/status/game/game.component.css":
/*!************************************************!*\
  !*** ./src/app/status/game/game.component.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".undecided {\n  background-color: yellow;\n}\n\n.playing {\n  background-color: green;\n}\n\n.notplaying {\n  background-color: red;\n}\n"

/***/ }),

/***/ "./src/app/status/game/game.component.html":
/*!*************************************************!*\
  !*** ./src/app/status/game/game.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class = \"text-center\">Player Status - Game {{ game_num }}</h2>\n\n<table class=\"mt-2 table table-striped table-bordered\">\n\n    <thead class=\"thead\">\n      <tr>\n        <th scope=\"col\">Player Name</th>\n        <th scope=\"col\">Actions</th>\n      </tr>\n    </thead>\n\n    <tbody>\n      <tr *ngFor='let p of allPlayers'>\n\n        <td>\n          {{ p.player_name }}\n        </td>\n\n        <td *ngIf = 'game_num === \"1\"' class = \"mx-auto\">\n          <button (click) = 'changeStatus(p, game_num, \"Playing\")' class = 'btn btn-outline-dark ml-5 mr-5'\n          [ngClass]=\"{ 'playing': ( p.game1_status === 'Playing') }\">\n            Playing\n          </button>\n\n          <button (click) = 'changeStatus(p, game_num, \"Not Playing\")' class = 'btn btn-outline-dark ml-5 mr-5'\n          [ngClass]=\"{ 'notplaying': (p.game1_status === 'Not Playing') }\">\n            Not Playing\n          </button>\n\n          <button (click) = 'changeStatus(p, game_num, \"Undecided\")'\n          [ngClass]=\"{ 'undecided': (p.game1_status === 'Undecided') }\" class = 'btn btn-outline-dark ml-5 mr-5'>\n              Undecided\n          </button>\n\n        </td>\n\n        <td *ngIf = 'game_num === \"2\"' class = \"mx-auto\">\n          <button (click) = 'changeStatus(p, game_num, \"Playing\")' class = 'btn btn-outline-dark ml-5 mr-5'\n          [ngClass]=\"{ 'playing': ( p.game2_status === 'Playing') }\">\n            Playing\n          </button>\n\n          <button (click) = 'changeStatus(p, game_num, \"Not Playing\")' class = 'btn btn-outline-dark ml-5 mr-5'\n          [ngClass]=\"{ 'notplaying': (p.game2_status === 'Not Playing') }\">\n            Not Playing\n          </button>\n\n          <button (click) = 'changeStatus(p, game_num, \"Undecided\")'\n          [ngClass]=\"{ 'undecided': (p.game2_status === 'Undecided') }\" class = 'btn btn-outline-dark ml-5 mr-5'>\n              Undecided\n          </button>\n\n        </td>\n\n        <td *ngIf = 'game_num === \"3\"' class = \"mx-auto\">\n          <button (click) = 'changeStatus(p, game_num, \"Playing\")' class = 'btn btn-outline-dark ml-5 mr-5'\n          [ngClass]=\"{ 'playing': ( p.game3_status === 'Playing') }\">\n            Playing\n          </button>\n\n          <button (click) = 'changeStatus(p, game_num, \"Not Playing\")' class = 'btn btn-outline-dark ml-5 mr-5'\n          [ngClass]=\"{ 'notplaying': (p.game3_status === 'Not Playing') }\">\n            Not Playing\n          </button>\n\n          <button (click) = 'changeStatus(p, game_num, \"Undecided\")'\n          [ngClass]=\"{ 'undecided': (p.game3_status === 'Undecided') }\" class = 'btn btn-outline-dark ml-5 mr-5'>\n              Undecided\n          </button>\n\n        </td>\n\n      </tr>\n\n    </tbody>\n\n  </table>\n\n"

/***/ }),

/***/ "./src/app/status/game/game.component.ts":
/*!***********************************************!*\
  !*** ./src/app/status/game/game.component.ts ***!
  \***********************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _client_player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../client-player */ "./src/app/client-player.ts");
/* harmony import */ var _teamdata_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../teamdata.service */ "./src/app/teamdata.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GameComponent = /** @class */ (function () {
    function GameComponent(_teamservice, _route) {
        var _this = this;
        this._teamservice = _teamservice;
        this._route = _route;
        this.player = new _client_player__WEBPACK_IMPORTED_MODULE_2__["ClientPlayer"]();
        this.allPlayers = [];
        this.game_num = '1';
        // call on ActivatedRoute to get game number from the current route /status/game/:id
        this._route.paramMap.subscribe(function (params) {
            _this.game_num = params.get('id');
            console.log('in game.component w this.game_num =', _this.game_num);
        });
    }
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._teamservice.getPlayers()
            .subscribe(function (response) {
            _this.allPlayers = response;
            console.log('list.component.ts call _teamservice.getPlayers() allPlayers=response:', _this.allPlayers);
        }, function (err) {
            console.log('list.component.ts call _teamservice.getPlayers() error:', err);
        });
    };
    GameComponent.prototype.changeStatus = function (p, game_num, status) {
        var _this = this;
        // set this.player to player object returned via changeStatus
        this.player = p;
        // update player's status for game game_num
        if (game_num === '1') {
            this.player.game1_status = status;
        }
        else if (game_num === '2') {
            this.player.game2_status = status;
        }
        else {
            this.player.game3_status = status;
        }
        // call _teamservice.updatePlayer to update player in db
        this._teamservice.updatePlayer(p._id, this.player).subscribe(function () {
            // update player status in allPlayers
            // first get index of player in allPlayers
            var idx = _this.allPlayers.findIndex(function (found_player) { return found_player._id === p._id; });
            // then set that player index (if the player was found in allPlayers) to updated this.player
            if (idx > 0) {
                _this.allPlayers[idx] = _this.player;
            }
            // reset this.player for next changeStatus
            _this.player = new _client_player__WEBPACK_IMPORTED_MODULE_2__["ClientPlayer"]();
        });
    };
    GameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-game',
            template: __webpack_require__(/*! ./game.component.html */ "./src/app/status/game/game.component.html"),
            styles: [__webpack_require__(/*! ./game.component.css */ "./src/app/status/game/game.component.css")]
        }),
        __metadata("design:paramtypes", [_teamdata_service__WEBPACK_IMPORTED_MODULE_3__["TeamdataService"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "./src/app/status/status.component.css":
/*!*********************************************!*\
  !*** ./src/app/status/status.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/status/status.component.html":
/*!**********************************************!*\
  !*** ./src/app/status/status.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <!-- games navigation bar here -->\n\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light mt-1\">\n\n    <a class=\"navbar-brand\" href=\"\"></a>\n\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mx-auto\">\n\n        <li class=\"nav-item ml-5 mr-5\">\n          <!-- note that since we are in game parent path, we only list the child path in the routerlink-->\n          <a class=\"text-success\" [routerLink]=\"['game','1']\">Game 1</a>\n        </li>\n        <li class=\"nav-item ml-5 mr-5\">\n          <a class=\"text-success\" [routerLink]=\"['game','2']\">Game 2</a>\n        </li>\n        <li class=\"nav-item ml-5 mr-5\">\n          <a class=\"text-success\" [routerLink]=\"['game','3']\">Game 3</a>\n        </li>\n      </ul>\n\n    </div>\n\n  </nav>\n\n  <!-- content body here, depending on game nav option chosen -->\n\n    <router-outlet></router-outlet>\n\n  </div>\n\n"

/***/ }),

/***/ "./src/app/status/status.component.ts":
/*!********************************************!*\
  !*** ./src/app/status/status.component.ts ***!
  \********************************************/
/*! exports provided: StatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusComponent", function() { return StatusComponent; });
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

var StatusComponent = /** @class */ (function () {
    function StatusComponent() {
    }
    StatusComponent.prototype.ngOnInit = function () {
    };
    StatusComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-status',
            template: __webpack_require__(/*! ./status.component.html */ "./src/app/status/status.component.html"),
            styles: [__webpack_require__(/*! ./status.component.css */ "./src/app/status/status.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StatusComponent);
    return StatusComponent;
}());



/***/ }),

/***/ "./src/app/teamdata.service.ts":
/*!*************************************!*\
  !*** ./src/app/teamdata.service.ts ***!
  \*************************************/
/*! exports provided: TeamdataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamdataService", function() { return TeamdataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TeamdataService = /** @class */ (function () {
    function TeamdataService(_http) {
        this._http = _http;
        this.players = [];
        // players = new BehaviorSubject([]);
        // this must agree with what is included in server.js for routes -- server-side page routing
        this.base = '/api/players';
    }
    TeamdataService.prototype.getPlayers = function () {
        console.log('SERVICE in TeamdataService getPlayers');
        return this._http.get(this.base);
    };
    TeamdataService.prototype.createPlayer = function (player) {
        console.log('SERVICE in TeamdataService ClientPlayer to add player: ', player);
        return this._http.post(this.base, player);
    };
    TeamdataService.prototype.updatePlayer = function (_id, player) {
        console.log('SERVICE in TeamdataService updatePlayer to change player _id: ', _id, 'to be player:', player);
        console.log('SERVICE in TeamdataService updatePlayer is calling .put route $(this.base)/$(_id): ', this.base + "/" + _id);
        return this._http.put(this.base + "/" + _id, player);
    };
    TeamdataService.prototype.deletePlayer = function (_id) {
        console.log('SERVICE in TeamdataService deleteProduct to delete _id:', _id);
        console.log('SERVICE in TeamdataService deleteProduct is calling .delete route $(this.base)/$(_id): ', this.base + "/" + _id);
        return this._http.delete(this.base + "/" + _id);
    };
    TeamdataService.prototype.getPlayer = function (_id) {
        console.log('SERVICE in TeamdataService getPlayer (single) to get _id:', _id);
        console.log('SERVICE in TeamdataService getPlayer is calling .get route $(this.base)/$(_id): ', this.base + "/" + _id);
        return this._http.get(this.base + "/" + _id);
    };
    TeamdataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TeamdataService);
    return TeamdataService;
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

module.exports = __webpack_require__(/*! /Users/cindykalkomey/Desktop/MEAN_stack/_fullMEAN/teamManager/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map