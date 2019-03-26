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
		var e = new Error("Cannot find module '" + req + "'");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./search-results/search-results.component */ "./src/app/search-results/search-results.component.ts");





var routes = [
    { path: 'search', component: _search_search_component__WEBPACK_IMPORTED_MODULE_3__["SearchComponent"] },
    { path: 'search-results/:query/:eval/:name', component: _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_4__["SearchResultsComponent"] },
    { path: '', redirectTo: 'search', pathMatch: 'full' },
    { path: '**', redirectTo: 'search', pathMatch: 'prefix' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.config.ts":
/*!*******************************!*\
  !*** ./src/app/app.config.ts ***!
  \*******************************/
/*! exports provided: APP_CONFIG, AppConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_CONFIG", function() { return APP_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var APP_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('app.config');
var AppConfig = {
    baseUrl: 'http://localhost:9200/product',
    defaultResultsLoaded: 25
};


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _pipes_HighlightSearchPipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pipes/HighlightSearchPipe */ "./src/app/pipes/HighlightSearchPipe.ts");
/* harmony import */ var _search_shared_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search/shared/search.service */ "./src/app/search/shared/search.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/esm5/slider.es5.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./search-results/search-results.component */ "./src/app/search-results/search-results.component.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./search/search.component */ "./src/app/search/search.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.config */ "./src/app/app.config.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _search_results_search_results_component__WEBPACK_IMPORTED_MODULE_10__["SearchResultsComponent"],
                _search_search_component__WEBPACK_IMPORTED_MODULE_11__["SearchComponent"],
                _pipes_HighlightSearchPipe__WEBPACK_IMPORTED_MODULE_1__["HighlightSearch"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_14__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSlideToggleModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_8__["MatSliderModule"]
            ],
            providers: [_search_shared_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"], { provide: _app_config__WEBPACK_IMPORTED_MODULE_13__["APP_CONFIG"], useValue: _app_config__WEBPACK_IMPORTED_MODULE_13__["AppConfig"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/enums/sort-mode.ts":
/*!************************************!*\
  !*** ./src/app/enums/sort-mode.ts ***!
  \************************************/
/*! exports provided: SortMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortMode", function() { return SortMode; });
var SortMode;
(function (SortMode) {
    SortMode[SortMode["Relevance"] = 0] = "Relevance";
    SortMode[SortMode["Price"] = 1] = "Price";
})(SortMode || (SortMode = {}));


/***/ }),

/***/ "./src/app/models/evaluation.ts":
/*!**************************************!*\
  !*** ./src/app/models/evaluation.ts ***!
  \**************************************/
/*! exports provided: Evaluation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Evaluation", function() { return Evaluation; });
var Evaluation = /** @class */ (function () {
    function Evaluation(rank, relevant) {
        this.rank = rank;
        this.relevant = relevant;
    }
    return Evaluation;
}());



/***/ }),

/***/ "./src/app/models/metric.ts":
/*!**********************************!*\
  !*** ./src/app/models/metric.ts ***!
  \**********************************/
/*! exports provided: Metric */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Metric", function() { return Metric; });
var Metric = /** @class */ (function () {
    function Metric(name, value) {
        this.name = name;
        this.value = value;
    }
    return Metric;
}());



/***/ }),

/***/ "./src/app/pipes/HighlightSearchPipe.ts":
/*!**********************************************!*\
  !*** ./src/app/pipes/HighlightSearchPipe.ts ***!
  \**********************************************/
/*! exports provided: HighlightSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HighlightSearch", function() { return HighlightSearch; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HighlightSearch = /** @class */ (function () {
    function HighlightSearch() {
    }
    HighlightSearch.prototype.transform = function (value, args) {
        if (!args) {
            return value;
        }
        var re = new RegExp(args, 'gi'); // 'gi' for case insensitive and can use 'g' if you want the search to be case sensitive.
        return value.replace(re, '<b>' + args + '</b>');
    };
    HighlightSearch = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({
            name: 'highlight'
        })
    ], HighlightSearch);
    return HighlightSearch;
}());



/***/ }),

/***/ "./src/app/search-results/search-results.component.html":
/*!**************************************************************!*\
  !*** ./src/app/search-results/search-results.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mat-typography header-bar\">\r\n    <div style=\"text-align:center\" class=\"mat-typography title\">\r\n        <a [routerLink]=\"['/']\"><h1>Home</h1></a>\r\n    </div>\r\n  <form class=\"example-form header-inner\">\r\n\r\n    <mat-form-field class=\"search-bar\">\r\n      <input name=\"searchQuery\" matInput [(ngModel)]='searchQuery' placeholder=\"Enter your search query here\">\r\n    </mat-form-field>\r\n\r\n    <button mat-button class=\"search-button\" (click)=\"searchClicked()\">Search</button>\r\n\r\n    <div *ngIf=\"evalMode\" class=\"mat-typography\" style=\"margin-top: 10px; color: gray\">\r\n        <p>Evalutation Mode - Assessor: {{assessorName}}</p>\r\n        <p>Total Documents Assessed: {{totalEvaluated}}/20</p>\r\n        <p>{{metricsDisplay}}</p>\r\n        <a *ngIf=\"totalEvaluated >= 20\" [(href)]=\"evaluationFile\" download=\"evaluation.json\">Download Evaluation File</a>\r\n    </div>\r\n  \r\n\r\n  </form>\r\n</div>\r\n\r\n<div class=\"main-content\">\r\n\r\n  <mat-expansion-panel>\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        Filter Results\r\n      </mat-panel-title>\r\n\r\n    </mat-expansion-panel-header>\r\n\r\n    Minimum contents (g/ml) <mat-slider thumbLabel [min]=\"sliderMin\" [max]=\"sliderMax\" step=\"100\" [(ngModel)]=\"sliderMinValue\"></mat-slider>\r\n    Maximum contents (g/ml) <mat-slider thumbLabel [min]=\"sliderMin\" [max]=\"sliderMax\" step=\"100\" [(ngModel)]=\"sliderMaxValue\"></mat-slider>\r\n    <br><button mat-raised-button color=\"primary\" (click)=\"filtersAppliedClicked()\">Apply</button>\r\n  \r\n  </mat-expansion-panel>\r\n\r\n  <div *ngIf=\"queryTranslated\" class=\"mat-typography\" style=\"margin-top: 10px; color: gray\">\r\n    <p>Translated from original query: {{originalQuery}}</p>\r\n  </div>\r\n\r\n  <div class=\"mat-typography\" style=\"margin-top: 10px; color: gray\">\r\n    <p>Loaded {{ resultsReturned }} results in {{ resultsTook }} ms</p>\r\n  </div>\r\n\r\n  <div class=\"options-wrapper\" >\r\n\r\n    <mat-select placeholder=\"View Mode\" [(ngModel)]='viewMode' class=\"hide-under-600px options-child\">\r\n      <mat-option [value]=\"0\">Regular Mode</mat-option>\r\n      <mat-option [value]=\"1\">Compact Mode</mat-option>\r\n    </mat-select>\r\n\r\n    <mat-select placeholder=\"Sort by\" [(ngModel)]='sortMode' (ngModelChange)=\"updateSort()\" class=\"options-child\">\r\n      <mat-option [value]=\"0\">Sort by Relevance</mat-option>\r\n      <mat-option [value]=\"1\">Sort by Lowest Price</mat-option>\r\n    </mat-select>\r\n\r\n  </div>\r\n  \r\n  <div class=\"mat-typography\" *ngIf=\"resultsReturned < 1\">\r\n    <span>Did you mean</span>\r\n    <div *ngFor=\"let term of spellSuggestions\">\r\n        <span *ngFor=\"let suggestion of term.options\">\r\n          <button mat-button color=\"primary\" (click)=\"suggestionClicked(suggestion.text)\">{{ suggestion.text }} </button>\r\n        </span>\r\n      </div>\r\n  </div>\r\n  \r\n  <div class=\"row\">\r\n\r\n    <ul class=\"card\">\r\n      <li *ngFor=\"let product of searchResults\" [className]=\"viewMode == 1 ? 'comp-mode' : 'reg-mode'\">\r\n        <mat-card matRipple>\r\n          <img *ngIf=\"viewMode == 1\" mat-card-image [src]=\"product._source.img_url\">\r\n          <div [className]=\"viewMode == 1 ? 'header-compact' : 'header'\">\r\n              <div class=\"header-aside\">\r\n                  <!-- <span>{{product.supermarketImg}}</span> -->\r\n                  <div *ngIf=\"product._source\">\r\n                    <span><img [src]=\"product.supermarketImg\"></span>\r\n                   </div>\r\n                  <div *ngIf=\"product._source\">\r\n                   <span *ngIf=\"viewMode !== 1\"><img [src]=\"product._source.img_url\" width=\"70\" height=\"70\"></span>\r\n                  </div>\r\n              </div>\r\n            <div class=\"header-main\">\r\n                <a (click)=\"productClicked(product._source.url)\" target=\"_blank\" [innerHtml]=\"product._source.product_name | highlight:searchQuery\" style=\"cursor:pointer\"></a>\r\n                <br><span class=\"product-url\" [innerHtml]=\"product._source.url\"></span>\r\n                <p [innerHtml]=\"product._source.page_title | highlight:searchQuery\"></p>\r\n            </div>\r\n            <div class=\"header-aside text-align-right\">\r\n              <span *ngIf=\"product._source.weight_q\"> {{ product._source.weight_q }} {{ product._source.weight_ind }} </span>\r\n              <span *ngIf=\"product._source.size\"> {{ product._source.size }} </span>\r\n            </div>\r\n            <div class=\"header-aside text-align-right\">\r\n              <span class=\"product-price\">€ {{product._source.price}}</span>\r\n            </div>\r\n          </div>\r\n          <mat-card-content class=\"last-child\">\r\n            <p align=\"right\" *ngIf=\"evalMode && !product.evaluated\">Is this document relevant?</p>\r\n          </mat-card-content>\r\n          <mat-card-actions *ngIf=\"evalMode && !product.evaluated\">\r\n            <button mat-button class=\"feedback\" (click)=\"feedbackButtonClicked(product, false)\"\r\n                mat-raised-button color=\"warn\">No</button>\r\n            <button mat-button class=\"feedback\" (click)=\"feedbackButtonClicked(product, true)\"\r\n                mat-raised-button color=\"green\" style=\"background:green; color: white\">Yes</button>\r\n        </mat-card-actions>\r\n        </mat-card>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div *ngIf=\"resultsLoaded < resultsReturned\">\r\n    <button (click)=\"loadMoreClicked()\" style=\"width: 100%; margin-bottom: 5em\" mat-button>Load More Results</button>\r\n  </div>\r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/search-results/search-results.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/search-results/search-results.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-bar {\n  background-color: white;\n  box-shadow: 3px 3px 5px 6px #ccc;\n  padding: 20px;\n  margin-bottom: 20px;\n  position: fixed;\n  width: 100%;\n  z-index: 999;\n  top: 0; }\n\n.title {\n  float: left;\n  width: 8em; }\n\n.search-bar {\n  width: calc(100% - 16em); }\n\n.search-button {\n  width: 8em; }\n\ndiv.row {\n  text-align: center; }\n\n.card {\n  list-style-type: none;\n  padding-left: 0;\n  display: flex;\n  flex-wrap: wrap; }\n\n.card li {\n  margin-bottom: 10px; }\n\n.header {\n  text-align: left;\n  display: flex;\n  justify-content: space-between; }\n\n.header-compact {\n  text-align: left;\n  display: flex;\n  flex-wrap: wrap; }\n\n.header-compact .header-main {\n    width: 100%;\n    order: 3; }\n\n.header-compact .header-aside {\n    width: 50%;\n    height: 2em; }\n\n.header-main {\n  width: 74%; }\n\n.header-aside {\n  width: 12%; }\n\na {\n  color: blue; }\n\na:hover {\n  text-decoration: underline; }\n\n.product-price {\n  font-weight: bold; }\n\n.mat-card .last-child {\n  margin-bottom: 0;\n  text-align: left; }\n\n.options-wrapper {\n  display: flex;\n  justify-content: flex-end; }\n\n.options-wrapper .options-child {\n    width: 10em; }\n\n.comp-mode {\n  min-width: 150px;\n  max-width: 250px; }\n\n.reg-mode {\n  width: 100%; }\n\n.product-url {\n  color: darkgreen;\n  font-size: 85%; }\n\n.img-comp {\n  padding-bottom: 70px; }\n\n.feedback {\n  float: right; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoLXJlc3VsdHMvRDpcXERvY3VtZW50c1xcRGV2ZWxvcG1lbnRcXGlyX3Byb2plY3RcXGdyb2Nlcnlib3RcXGZyb250LWVuZC9zcmNcXGFwcFxcc2VhcmNoLXJlc3VsdHNcXHNlYXJjaC1yZXN1bHRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQXVCO0VBQ3ZCLGlDQUFnQztFQUNoQyxjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLGdCQUFlO0VBQ2YsWUFBVztFQUNYLGFBQVk7RUFDWixPQUFNLEVBQ1Q7O0FBRUQ7RUFDSSxZQUFXO0VBQ1gsV0FBVSxFQUNiOztBQUVEO0VBQ0kseUJBQXdCLEVBQzNCOztBQUVEO0VBQ0ksV0FBVSxFQUNiOztBQUVEO0VBQ0UsbUJBQWtCLEVBQ25COztBQUVEO0VBQ0Usc0JBQXFCO0VBQ3JCLGdCQUFlO0VBQ2YsY0FBYTtFQUNiLGdCQUFlLEVBQ2hCOztBQUVEO0VBQ0Usb0JBQW1CLEVBQ3BCOztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLGNBQWE7RUFDYiwrQkFBOEIsRUFDL0I7O0FBRUQ7RUFDRSxpQkFBZ0I7RUFDaEIsY0FBYTtFQUNiLGdCQUFlLEVBU2hCOztBQVpEO0lBS0ksWUFBVztJQUNYLFNBQVEsRUFDVDs7QUFQSDtJQVNJLFdBQVU7SUFDVixZQUFXLEVBQ1o7O0FBR0g7RUFDRSxXQUFVLEVBQ1g7O0FBRUQ7RUFDRSxXQUFVLEVBQ1g7O0FBRUQ7RUFDRSxZQUFXLEVBQ1o7O0FBRUQ7RUFDRSwyQkFBMEIsRUFDM0I7O0FBRUQ7RUFDRSxrQkFBaUIsRUFDbEI7O0FBRUQ7RUFDRSxpQkFBZ0I7RUFDaEIsaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UsY0FBYTtFQUNiLDBCQUF5QixFQUkxQjs7QUFORDtJQUlJLFlBQVcsRUFDWjs7QUFHSDtFQUNJLGlCQUFnQjtFQUNoQixpQkFBZ0IsRUFDbkI7O0FBRUQ7RUFDSSxZQUFXLEVBQ2Q7O0FBRUQ7RUFDRSxpQkFBZ0I7RUFDaEIsZUFBYyxFQUNmOztBQUVEO0VBQ0UscUJBQW9CLEVBQ3JCOztBQUVEO0VBQ0UsYUFDRixFQUFDIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoLXJlc3VsdHMvc2VhcmNoLXJlc3VsdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWJhciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJveC1zaGFkb3c6IDNweCAzcHggNXB4IDZweCAjY2NjO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDk5OTtcclxuICAgIHRvcDogMDtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDhlbTtcclxufVxyXG5cclxuLnNlYXJjaC1iYXIge1xyXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE2ZW0pO1xyXG59XHJcblxyXG4uc2VhcmNoLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogOGVtO1xyXG59XHJcblxyXG5kaXYucm93IHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG59XHJcblxyXG4uY2FyZCBsaSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmhlYWRlci1jb21wYWN0IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC13cmFwOiB3cmFwO1xyXG4gIC5oZWFkZXItbWFpbiB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9yZGVyOiAzO1xyXG4gIH1cclxuICAuaGVhZGVyLWFzaWRlIHtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBoZWlnaHQ6IDJlbTtcclxuICB9XHJcbn1cclxuXHJcbi5oZWFkZXItbWFpbiB7XHJcbiAgd2lkdGg6IDc0JTtcclxufVxyXG5cclxuLmhlYWRlci1hc2lkZSB7XHJcbiAgd2lkdGg6IDEyJTtcclxufVxyXG5cclxuYSB7XHJcbiAgY29sb3I6IGJsdWU7XHJcbn1cclxuXHJcbmE6aG92ZXIge1xyXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xyXG59XHJcblxyXG4ucHJvZHVjdC1wcmljZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5tYXQtY2FyZCAubGFzdC1jaGlsZCB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG59XHJcblxyXG4ub3B0aW9ucy13cmFwcGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgLm9wdGlvbnMtY2hpbGQge1xyXG4gICAgd2lkdGg6IDEwZW07XHJcbiAgfVxyXG59XHJcblxyXG4uY29tcC1tb2RlIHtcclxuICAgIG1pbi13aWR0aDogMTUwcHg7XHJcbiAgICBtYXgtd2lkdGg6IDI1MHB4O1xyXG59XHJcblxyXG4ucmVnLW1vZGUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5wcm9kdWN0LXVybCB7XHJcbiAgY29sb3I6IGRhcmtncmVlbjtcclxuICBmb250LXNpemU6IDg1JTtcclxufVxyXG5cclxuLmltZy1jb21wIHtcclxuICBwYWRkaW5nLWJvdHRvbTogNzBweDtcclxufVxyXG5cclxuLmZlZWRiYWNrIHtcclxuICBmbG9hdDpyaWdodFxyXG59Il19 */"

/***/ }),

/***/ "./src/app/search-results/search-results.component.ts":
/*!************************************************************!*\
  !*** ./src/app/search-results/search-results.component.ts ***!
  \************************************************************/
/*! exports provided: SearchResultsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchResultsComponent", function() { return SearchResultsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _search_shared_search_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search/shared/search.service */ "./src/app/search/shared/search.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/app.config */ "./src/app/app.config.ts");
/* harmony import */ var src_app_enums_sort_mode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/enums/sort-mode */ "./src/app/enums/sort-mode.ts");
/* harmony import */ var _shared_services_evaluation_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/evaluation.service */ "./src/app/shared/services/evaluation.service.ts");
/* harmony import */ var _models_evaluation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../models/evaluation */ "./src/app/models/evaluation.ts");








var ViewMode;
(function (ViewMode) {
    ViewMode[ViewMode["Regular"] = 0] = "Regular";
    ViewMode[ViewMode["Compact"] = 1] = "Compact";
})(ViewMode || (ViewMode = {}));
var SearchResultsComponent = /** @class */ (function () {
    function SearchResultsComponent(_searchService, _evalService, _route, _router, _config) {
        this._searchService = _searchService;
        this._evalService = _evalService;
        this._route = _route;
        this._router = _router;
        this._config = _config;
        this.defaultResultsLoaded = this._config.defaultResultsLoaded;
        this.lastRank = 0; // rank assigned to last loaded document, used to rank next documents.
        this.metricsDisplay = '';
        this.searchResults = [];
        this.resultsLoaded = 0;
        this.sliderMinValue = 0;
        this.sliderMaxValue = 0;
        this.sliderMin = 0;
        this.sliderMax = 0;
        this.sortMode = src_app_enums_sort_mode__WEBPACK_IMPORTED_MODULE_5__["SortMode"].Relevance;
        this.viewMode = ViewMode.Regular;
        this.evalMode = false;
        this.assessorName = '';
        this.totalEvaluated = 0;
        this.evaluationFile = '';
    }
    SearchResultsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.paramMap.subscribe(function (params) {
            _this.searchQuery = params.get('query');
            _this.evalMode = params.get('eval') === 'true';
            _this.assessorName = params.get('name');
        });
        this.searchByQuery(this.searchQuery);
        this.spellSuggestionsByQuery(this.searchQuery);
        if (this._searchService.translated) {
            this.queryTranslated = true;
            this.originalQuery = this._searchService.originalQuery;
        }
        // Eval mode
        if (this.evalMode) {
            this._evalService.initialize(this.assessorName, this.searchQuery);
        }
    };
    SearchResultsComponent.prototype.searchClicked = function () {
        this._router.navigate(['search-results', this.searchQuery, this.evalMode, this.assessorName]);
        this.searchByQuery(this.searchQuery);
        this.spellSuggestionsByQuery(this.searchQuery);
        if (this.evalMode) {
            this.totalEvaluated = 0;
            this._evalService.initialize(this.assessorName, this.searchQuery);
            this.updateMetricsDisplay();
        }
    };
    SearchResultsComponent.prototype.loadMoreClicked = function () {
        this.loadMoreResults(this.searchQuery);
    };
    SearchResultsComponent.prototype.updateSort = function () {
        this.searchByQuery(this.searchQuery);
    };
    SearchResultsComponent.prototype.suggestionClicked = function (searchQuery) {
        this.searchQuery = searchQuery;
        this.searchClicked();
    };
    SearchResultsComponent.prototype.productClicked = function (url) {
        // modify the url if it's from albert heijn
        if (url.includes('ah.nl')) {
            var productUrl = url.split('url=')[1];
            url = 'http://ah.nl' + productUrl;
        }
        window.open(url);
    };
    SearchResultsComponent.prototype.filtersAppliedClicked = function () {
        this.applyFiltersAndSearch();
    };
    SearchResultsComponent.prototype.searchByQuery = function (query) {
        var _this = this;
        this._searchService.searchByQuery(query, this.sortMode)
            .subscribe(function (data) {
            // console.log(data);
            _this.searchResults = data.hits.hits;
            // Parse results
            _this.parseSearchResults();
            _this.resultsReturned = data.hits.total;
            _this.resultsLoaded = _this._config.defaultResultsLoaded;
            _this.resultsTook = data.took;
            var minVal = data.aggregations.min_weight.value;
            var maxVal = data.aggregations.max_weight.value;
            _this.sliderMin = Math.round(minVal / 100) * 100;
            _this.sliderMax = (Math.round(maxVal / 100) * 100) + 100;
            _this.sliderMinValue = _this.sliderMin;
            _this.sliderMaxValue = _this.sliderMax;
        }, function (error) { return console.error(error); });
    };
    SearchResultsComponent.prototype.parseSearchResults = function () {
        var _this = this;
        this.lastRank = 0; // because it parses all the results always - fix if we have time
        this.searchResults.forEach(function (product) {
            product.rank = ++_this.lastRank;
            product.supermarketImg = 'assets/img/' + product._source.supermarket.split(' ')[0] + '.png';
            // Domain-specific manipulations
            if (product._source.supermarket === 'vomar') {
                product._source.img_url = 'http://' + product._source.img_url;
            }
        });
    };
    SearchResultsComponent.prototype.applyFiltersAndSearch = function () {
        var _this = this;
        this._searchService.searchByQueryWithWeightFilter(this.searchQuery, this.sliderMinValue, this.sliderMaxValue).subscribe(function (data) {
            _this.searchResults = data.hits.hits;
            _this.resultsReturned = data.hits.total;
            _this.resultsLoaded = _this._config.defaultResultsLoaded;
            _this.resultsTook = data.took;
            _this.parseSearchResults();
        }, function (error) { return console.error(error); });
    };
    SearchResultsComponent.prototype.spellSuggestionsByQuery = function (query) {
        var _this = this;
        this._searchService.spellingSuggestionsByQuery(query)
            .subscribe(function (data) {
            // console.log(data);
            _this.spellSuggestions = data.suggest.suggest;
        }, function (error) { return console.error(error); });
    };
    SearchResultsComponent.prototype.loadMoreResults = function (query) {
        var _this = this;
        this._searchService.searchByQuery(query, this.sortMode, this.resultsLoaded)
            .subscribe(function (data) {
            // console.log(data);
            _this.searchResults = _this.searchResults.concat(data.hits.hits);
            _this.parseSearchResults();
            _this.resultsLoaded += _this._config.defaultResultsLoaded;
            // console.log(this.searchResults);
        }, function (error) { return console.error(error); });
    };
    SearchResultsComponent.prototype.feedbackButtonClicked = function (product, isRelevant) {
        this._evalService.addEvaluation(new _models_evaluation__WEBPACK_IMPORTED_MODULE_7__["Evaluation"](product.rank, isRelevant));
        this.updateMetricsDisplay();
        product.evaluated = true;
        this.totalEvaluated++;
        if (this.totalEvaluated === 20) {
            this.evaluationFile = this._evalService.finishEvaluation();
        }
    };
    SearchResultsComponent.prototype.updateMetricsDisplay = function () {
        var _this = this;
        this.metricsDisplay = '';
        this._evalService.metrics.forEach(function (metric) {
            _this.metricsDisplay += metric.name + ': ' + metric.value.toFixed(3) + ', ';
        });
    };
    SearchResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-search-results',
            template: __webpack_require__(/*! ./search-results.component.html */ "./src/app/search-results/search-results.component.html"),
            styles: [__webpack_require__(/*! ./search-results.component.scss */ "./src/app/search-results/search-results.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_app_config__WEBPACK_IMPORTED_MODULE_4__["APP_CONFIG"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_search_shared_search_service__WEBPACK_IMPORTED_MODULE_2__["SearchService"],
            _shared_services_evaluation_service__WEBPACK_IMPORTED_MODULE_6__["EvaluationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], Object])
    ], SearchResultsComponent);
    return SearchResultsComponent;
}());



/***/ }),

/***/ "./src/app/search/search.component.html":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row mat-typography center-in-page\">\r\n  <h1 class=\"title\">\r\n    Welcome to Grocerybot!\r\n  </h1>\r\n  <form class=\"search-wrapper\">\r\n    <mat-form-field class=\"search-box\">\r\n      <input name=\"searchQuery\" matInput [(ngModel)]='searchQuery' placeholder=\"Enter your search query here\">\r\n    </mat-form-field>\r\n\r\n    <div class=\"options-wrapper\">\r\n      <button mat-raised-button color=\"primary\" (click)=\"searchClicked()\">Grocerybot Search\r\n      </button>\r\n      <div>\r\n        <mat-slide-toggle name=\"translate\" [(ngModel)]=\"translateChecked\">\r\n          Translate Query\r\n        </mat-slide-toggle>\r\n      </div>\r\n      <div>\r\n        <mat-slide-toggle name=\"evaluate\" [(ngModel)]=\"evaluationChecked\">\r\n          Evaluation Mode\r\n        </mat-slide-toggle>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"evaluation-form\" *ngIf=\"evaluationChecked\">\r\n      <mat-form-field class=\"search-box\">\r\n          <input name=\"assessorName\" matInput [(ngModel)]='assessorName' placeholder=\"Please enter your name\">\r\n      </mat-form-field>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/search/search.component.scss":
/*!**********************************************!*\
  !*** ./src/app/search/search.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-form-field {\n  width: 75%; }\n\ndiv.row {\n  text-align: center; }\n\n.search-box {\n  width: 30%; }\n\n.center-in-page {\n  height: 50em;\n  display: flex;\n  flex-direction: column;\n  align-content: center;\n  justify-content: center; }\n\n.options-wrapper button {\n  margin-right: 2em;\n  margin-bottom: 2em; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VhcmNoL0Q6XFxEb2N1bWVudHNcXERldmVsb3BtZW50XFxpcl9wcm9qZWN0XFxncm9jZXJ5Ym90XFxmcm9udC1lbmQvc3JjXFxhcHBcXHNlYXJjaFxcc2VhcmNoLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FDSixFQUFDOztBQUVEO0VBQ0ksbUJBQ0osRUFBQzs7QUFFRDtFQUNJLFdBQVUsRUFDYjs7QUFFRDtFQUNJLGFBQVk7RUFDWixjQUFhO0VBQ2IsdUJBQXNCO0VBQ3RCLHNCQUFxQjtFQUNyQix3QkFBdUIsRUFDMUI7O0FBRUQ7RUFFUSxrQkFBaUI7RUFDakIsbUJBQWtCLEVBQ3JCIiwiZmlsZSI6InNyYy9hcHAvc2VhcmNoL3NlYXJjaC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgICB3aWR0aDogNzUlXHJcbn1cclxuXHJcbmRpdi5yb3cge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyXHJcbn1cclxuXHJcbi5zZWFyY2gtYm94IHtcclxuICAgIHdpZHRoOiAzMCU7XHJcbn1cclxuXHJcbi5jZW50ZXItaW4tcGFnZSB7XHJcbiAgICBoZWlnaHQ6IDUwZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4ub3B0aW9ucy13cmFwcGVyIHtcclxuICAgIGJ1dHRvbiB7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMmVtO1xyXG4gICAgfVxyXG59Il19 */"

/***/ }),

/***/ "./src/app/search/search.component.ts":
/*!********************************************!*\
  !*** ./src/app/search/search.component.ts ***!
  \********************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_search_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared/search.service */ "./src/app/search/shared/search.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_services_translate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../shared/services/translate.service */ "./src/app/shared/services/translate.service.ts");





var SearchComponent = /** @class */ (function () {
    function SearchComponent(_searchService, _translateService, _router) {
        this._searchService = _searchService;
        this._translateService = _translateService;
        this._router = _router;
        this.searchQuery = '';
        this.translateChecked = false;
        this.evaluationChecked = false;
    }
    SearchComponent.prototype.ngOnInit = function () {
        this._searchService.translated = false;
        this.assessorName = ' ';
    };
    SearchComponent.prototype.searchClicked = function () {
        var _this = this;
        if (this.translateChecked) {
            var googleObject = new _shared_services_translate_service__WEBPACK_IMPORTED_MODULE_4__["GoogleObj"]();
            googleObject.q = this.searchQuery;
            // tslint:disable-next-line:max-line-length
            var bearer_token = 'ya29.c.ElrUBnL0kds8P_BGi9gp8C25OaK5e3-y_EUHAqAp7gMFR__2OrqRy0REWIvui9JcDz1YeAqeGPfrAEZ6npYHdYKjdNh2p49WweZf-mwx9UOBYF5xIpwzrIq3nP0';
            this._translateService
                .translate(googleObject, bearer_token)
                .subscribe(function (data) {
                var transData = data.data;
                if (transData.translations) {
                    if (transData.translations.length > 0) {
                        _this._searchService.originalQuery = _this.searchQuery;
                        _this._searchService.translated = true;
                        _this.searchQuery = transData.translations[0].translatedText;
                    }
                }
            }, function (error) { return console.log(error); }, function () { return _this.navigateToSearchResults(); });
        }
        else {
            this.navigateToSearchResults();
        }
    };
    SearchComponent.prototype.navigateToSearchResults = function () {
        this._searchService.setSearchQuery(this.searchQuery);
        this._router.navigate(['/search-results', this.searchQuery, this.evaluationChecked, this.assessorName]);
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.scss */ "./src/app/search/search.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_shared_search_service__WEBPACK_IMPORTED_MODULE_1__["SearchService"],
            _shared_services_translate_service__WEBPACK_IMPORTED_MODULE_4__["TranslateService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/search/shared/search.service.ts":
/*!*************************************************!*\
  !*** ./src/app/search/shared/search.service.ts ***!
  \*************************************************/
/*! exports provided: SearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchService", function() { return SearchService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var src_app_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.config */ "./src/app/app.config.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_enums_sort_mode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/enums/sort-mode */ "./src/app/enums/sort-mode.ts");






var SearchService = /** @class */ (function () {
    function SearchService(_http, _config) {
        this._http = _http;
        this._config = _config;
        this.baseUrl = this._config.baseUrl + '/_search';
        this.translated = false; // if query translation was enabled.
    }
    SearchService.prototype.searchByQuery = function (searchQuery, sortMode, from, size) {
        if (from === void 0) { from = 0; }
        if (size === void 0) { size = this._config.defaultResultsLoaded; }
        var body = {
            query: {
                bool: {
                    must: {
                        multi_match: {
                            query: searchQuery,
                            fields: ['product_name^10', 'category^3', 'page_title^2', 'description']
                        }
                    }
                }
            },
            from: from,
            size: size,
            aggs: {
                max_weight: { max: { field: 'weight_q' } },
                min_weight: { min: { field: 'weight_q' } }
            }
        };
        var bodyPriceSort = {
            query: {
                bool: {
                    must: {
                        multi_match: {
                            query: searchQuery,
                            fields: ['product_name^10', 'category^3', 'page_title^2', 'description']
                        }
                    }
                }
            },
            from: from,
            size: size,
            sort: [{ price: 'asc' }],
            aggs: {
                max_weight: { max: { field: 'weight_q' } },
                min_weight: { min: { field: 'weight_q' } }
            }
        };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return this._http
            .post(this.baseUrl, sortMode === src_app_enums_sort_mode__WEBPACK_IMPORTED_MODULE_5__["SortMode"].Price ? bodyPriceSort : body, {
            headers: headers,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }));
    };
    SearchService.prototype.searchByQueryWithWeightFilter = function (query, weightMin, weightMax) {
        var body = {
            query: {
                bool: {
                    must: {
                        multi_match: {
                            query: query,
                            fields: ['product_name^10', 'category^3', 'page_title^2', 'description']
                        }
                    },
                    filter: {
                        range: {
                            weight_q: {
                                gte: weightMin,
                                lte: weightMax
                            }
                        }
                    }
                }
            }
        };
        return this._http
            .post(this.baseUrl, body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json')
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }));
    };
    SearchService.prototype.spellingSuggestionsByQuery = function (searchQuery) {
        var body = {
            suggest: {
                suggest: {
                    text: searchQuery,
                    term: {
                        field: 'product_name'
                    }
                }
            }
        };
        return this._http
            .post(this.baseUrl, body, {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json')
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (response) { return response; }));
    };
    SearchService.prototype.setSearchQuery = function (searchQuery) {
        this.searchQuery = searchQuery;
    };
    SearchService.prototype.getSearchQuery = function () {
        return this.searchQuery;
    };
    SearchService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(src_app_app_config__WEBPACK_IMPORTED_MODULE_3__["APP_CONFIG"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], Object])
    ], SearchService);
    return SearchService;
}());



/***/ }),

/***/ "./src/app/shared/services/evaluation.service.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/evaluation.service.ts ***!
  \*******************************************************/
/*! exports provided: EvaluationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EvaluationService", function() { return EvaluationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_app_models_metric__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/metric */ "./src/app/models/metric.ts");




var EvaluationService = /** @class */ (function () {
    function EvaluationService(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    EvaluationService.prototype.initialize = function (assessor, query) {
        this.assessor = assessor;
        this.date = new Date();
        this.evaluations = [];
        this.metrics = [];
        this.query = query;
    };
    EvaluationService.prototype.addEvaluation = function (evaluation) {
        this.evaluations.push(evaluation);
        this.calculateMetrics();
    };
    EvaluationService.prototype.calculateMetrics = function () {
        this.metrics = [];
        this.metrics.push(this.calcPrecisionAt(5));
        this.metrics.push(this.calcPrecisionAt(10));
        this.metrics.push(this.calcPrecisionAt(20));
        var recRank = this.calcReciprocalRank();
        if (recRank) {
            this.metrics.push(recRank);
        }
        this.metrics.push(this.calcAveragePrecision());
    };
    EvaluationService.prototype.calcPrecisionAt = function (rank) {
        var relevantCount = 0;
        this.evaluations
            .filter(function (e) { return e.rank <= rank; })
            .forEach(function (ev) {
            if (ev.relevant) {
                relevantCount++;
            }
        });
        var p = relevantCount / rank;
        return new src_app_models_metric__WEBPACK_IMPORTED_MODULE_3__["Metric"]('p@' + rank, p);
    };
    EvaluationService.prototype.calcReciprocalRank = function () {
        var firstRelevant = this.evaluations.filter(function (ev) { return ev.relevant; })[0];
        if (firstRelevant) {
            return new src_app_models_metric__WEBPACK_IMPORTED_MODULE_3__["Metric"]('reciprocalRanking', 1 / firstRelevant.rank);
        }
        else {
            return null;
        }
    };
    EvaluationService.prototype.calcAveragePrecision = function () {
        var _this = this;
        var sum = 0;
        var relevantDocs = this.evaluations.filter(function (ev) { return ev.relevant; });
        relevantDocs.forEach(function (doc) {
            var p = _this.calcPrecisionAt(doc.rank);
            sum += p.value;
        });
        var ap = sum / relevantDocs.length;
        return new src_app_models_metric__WEBPACK_IMPORTED_MODULE_3__["Metric"]('averagePrecision', ap);
    };
    EvaluationService.prototype.finishEvaluation = function () {
        var evalSession = {
            assessor: this.assessor,
            date: this.date,
            query: this.query,
            metrics: this.metrics,
            evaluations: this.evaluations
        };
        var json_data = JSON.stringify(evalSession);
        var uri = this._sanitizer.bypassSecurityTrustUrl('data:text/json;charset=UTF-8,' + encodeURIComponent(json_data));
        return uri;
    };
    EvaluationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], EvaluationService);
    return EvaluationService;
}());



/***/ }),

/***/ "./src/app/shared/services/translate.service.ts":
/*!******************************************************!*\
  !*** ./src/app/shared/services/translate.service.ts ***!
  \******************************************************/
/*! exports provided: TranslateService, GoogleObj */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TranslateService", function() { return TranslateService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GoogleObj", function() { return GoogleObj; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var TranslateService = /** @class */ (function () {
    function TranslateService(_http) {
        this._http = _http;
    }
    TranslateService.prototype.translate = function (obj, token) {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Authorization', 'Bearer ' + token);
        var body = {
            'source': obj.source,
            'target': obj.target,
            'format': obj.format,
            'q': obj.q
        };
        return this._http.post(url, body, {
            headers: headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    TranslateService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], TranslateService);
    return TranslateService;
}());

var url = 'https://translation.googleapis.com/language/translate/v2';
var GoogleObj = /** @class */ (function () {
    function GoogleObj() {
        this.source = 'en';
        this.target = 'nl';
        this.format = 'text';
    }
    return GoogleObj;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Documents\Development\ir_project\grocerybot\front-end\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map