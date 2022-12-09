"use strict";
(self["webpackChunkedxplore"] = self["webpackChunkedxplore"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);



const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./banner/banner.component */ 7068);
/* harmony import */ var _pillers_pillers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pillers/pillers.component */ 1610);
/* harmony import */ var _card_deck_card_deck_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./card-deck/card-deck.component */ 5058);
/* harmony import */ var _ed_xplorecertificate_ed_xplorecertificate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ed-xplorecertificate/ed-xplorecertificate.component */ 778);






class AppComponent {
    constructor() {
        this.title = 'edxplore';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "app-header")(1, "app-banner")(2, "app-pillers")(3, "app-card-deck")(4, "app-ed-xplorecertificate");
    } }, dependencies: [_header_header_component__WEBPACK_IMPORTED_MODULE_0__.HeaderComponent, _banner_banner_component__WEBPACK_IMPORTED_MODULE_1__.BannerComponent, _pillers_pillers_component__WEBPACK_IMPORTED_MODULE_2__.PillersComponent, _card_deck_card_deck_component__WEBPACK_IMPORTED_MODULE_3__.CardDeckComponent, _ed_xplorecertificate_ed_xplorecertificate_component__WEBPACK_IMPORTED_MODULE_4__.EdXplorecertificateComponent], styles: [".wrapper[_ngcontent-%COMP%]{\n    position: relative;\n    max-width: 1300px;\n    padding: 40px 30px;\n    height: 70px;\n    line-height: 70px;\n    margin: auto;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7QUFDbEMiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlcntcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWF4LXdpZHRoOiAxMzAwcHg7XG4gICAgcGFkZGluZzogNDBweCAzMHB4O1xuICAgIGhlaWdodDogNzBweDtcbiAgICBsaW5lLWhlaWdodDogNzBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuIl19 */"] });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ 970);
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./banner/banner.component */ 7068);
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./carousel/carousel.component */ 5405);
/* harmony import */ var _pillers_pillers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pillers/pillers.component */ 1610);
/* harmony import */ var _card_deck_card_deck_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./card-deck/card-deck.component */ 5058);
/* harmony import */ var _ed_xplorecertificate_ed_xplorecertificate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ed-xplorecertificate/ed-xplorecertificate.component */ 778);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);











class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent,
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent,
        _banner_banner_component__WEBPACK_IMPORTED_MODULE_4__.BannerComponent,
        _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_5__.CarouselComponent,
        _pillers_pillers_component__WEBPACK_IMPORTED_MODULE_6__.PillersComponent,
        _card_deck_card_deck_component__WEBPACK_IMPORTED_MODULE_7__.CardDeckComponent,
        _ed_xplorecertificate_ed_xplorecertificate_component__WEBPACK_IMPORTED_MODULE_8__.EdXplorecertificateComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule] }); })();


/***/ }),

/***/ 7068:
/*!********************************************!*\
  !*** ./src/app/banner/banner.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BannerComponent": () => (/* binding */ BannerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../carousel/carousel.component */ 5405);


class BannerComponent {
    constructor() { }
    ngOnInit() {
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], decls: 49, vars: 0, consts: [[1, "container2"], [1, "item-right2"], [1, "container-xxl"], [1, "container3"], [1, "item-right3"], [1, "item1001"], [1, "item1002"], [1, "item1003"], [1, "divinput"], ["type", "text", "placeholder", "Search institutes,course and more", 1, "item1004"], [1, "row", "itemcourseserch"], [1, "col-4", "course"], ["aria-label", "Default select example", 1, "form-select"], ["selected", ""], ["value", "1"], ["value", "2"], ["value", "3"], [1, "col-4", "state"], ["aria-label", ".form-select-lg select example", 1, "form-select", "dropend"], [1, "col-4", "submit"], ["type", "submit", "value", "Submit", 1, "form-select"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Explore x Connect x Learn");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "India\u2019s Leading Skilling Platform");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Find the best verified training institutes and trending courses here! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div")(14, "div", 10)(15, "div", 11)(16, "select", 12)(17, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Search Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "One");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Two");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, "Three");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Four");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Five");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, "Six");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, "Seven");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, "Eight");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 17)(36, "select", 18)(37, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, "State/ City");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, "Bengaluru");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "option", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, "Noida");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "option", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](44, "Pariyaram");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](45, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](46, "input", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](47, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](48, "app-carousel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } }, dependencies: [_carousel_carousel_component__WEBPACK_IMPORTED_MODULE_0__.CarouselComponent], styles: [".container2[_ngcontent-%COMP%] {display: flex;background-color: rgb(68, 83, 102);margin:20px 0px;}  \n.container2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {background-color:  rgb(68, 83, 102);color: white;width: auto;margin: 0px;text-align: center;line-height: 75px;font-size: 30px;}  \n.item-left2[_ngcontent-%COMP%] {background-color: #f1f1f1;padding: 0px;flex: 100%;}  \n.item-right2[_ngcontent-%COMP%] {background-color:#293682;padding: 0px;flex: 100%;}  \n@media(max-width:200px){ .container2[_ngcontent-%COMP%] {flex-direction: column;text-align: center;}}  \n.container3[_ngcontent-%COMP%] {display: flex;background-color: #f1f1f1;}  \n.container3[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {background-color: rgb(68, 83, 102);color: white;width: auto;padding-left: 40px;text-align: left;line-height: 75px;color: black;}  \n.item-left3[_ngcontent-%COMP%] {background-color: #f1f1f1;padding: 0px;flex: 100%;}  \n.item-right3[_ngcontent-%COMP%] {background-color: rgb(255, 255, 255);padding: 0px;flex: 100%; color: black; }  \n@media(max-width:800px){ .container3[_ngcontent-%COMP%] {flex-direction: column;text-align: center;}}  \n.item1001[_ngcontent-%COMP%]{\n    color:#FFCA08;\n\n}  \n.item1002[_ngcontent-%COMP%]{\n    color:white;\n    font-size: 64px;\n}  \n.item1003[_ngcontent-%COMP%]{\n    color:white;\n    font-size: 16px;\n}  \n.item1004[_ngcontent-%COMP%]{\n   height: 2.4375em;\n   width: 77%;\n   font-size: 16px;\n   background-color: #FFCA08;\n}  \n.itemcourseserch[_ngcontent-%COMP%]{\n    margin-top: -12px;\n    padding-left: 8px;\n    \n}  \n.state[_ngcontent-%COMP%]{\n    margin-left: -15px;\n}  \n.submit[_ngcontent-%COMP%]{\n    width: 92px;\n    margin-left: -15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsYUFBYSxhQUFhLENBQUMsa0NBQWtDLENBQUMsZUFBZSxDQUFDO0FBQzlFLG1CQUFtQixtQ0FBbUMsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLENBQUM7QUFDakosYUFBYSx5QkFBeUIsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDO0FBQy9ELGNBQWMsd0JBQXdCLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztBQUMvRCx5QkFBeUIsYUFBYSxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBSWpGLGFBQWEsYUFBYSxDQUFDLHlCQUF5QixDQUFDO0FBQ3JELG1CQUFtQixrQ0FBa0MsQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQztBQUNsSixhQUFhLHlCQUF5QixDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUM7QUFDL0QsY0FBYyxvQ0FBb0MsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLFlBQVksRUFBRTtBQUMxRix5QkFBeUIsYUFBYSxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBR2pGO0lBQ0ksYUFBYTs7QUFFakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsZUFBZTtBQUNuQjtBQUNBO0dBQ0csZ0JBQWdCO0dBQ2hCLFVBQVU7R0FDVixlQUFlO0dBQ2YseUJBQXlCO0FBQzVCO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsaUJBQWlCOztBQUVyQjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCIiwiZmlsZSI6ImJhbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5jb250YWluZXIyIHtkaXNwbGF5OiBmbGV4O2JhY2tncm91bmQtY29sb3I6IHJnYig2OCwgODMsIDEwMik7bWFyZ2luOjIwcHggMHB4O30gIFxuLmNvbnRhaW5lcjIgPiBkaXYge2JhY2tncm91bmQtY29sb3I6ICByZ2IoNjgsIDgzLCAxMDIpO2NvbG9yOiB3aGl0ZTt3aWR0aDogYXV0bzttYXJnaW46IDBweDt0ZXh0LWFsaWduOiBjZW50ZXI7bGluZS1oZWlnaHQ6IDc1cHg7Zm9udC1zaXplOiAzMHB4O31cbi5pdGVtLWxlZnQyIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO3BhZGRpbmc6IDBweDtmbGV4OiAxMDAlO31cbi5pdGVtLXJpZ2h0MiB7YmFja2dyb3VuZC1jb2xvcjojMjkzNjgyO3BhZGRpbmc6IDBweDtmbGV4OiAxMDAlO31cbkBtZWRpYShtYXgtd2lkdGg6MjAwcHgpeyAuY29udGFpbmVyMiB7ZmxleC1kaXJlY3Rpb246IGNvbHVtbjt0ZXh0LWFsaWduOiBjZW50ZXI7fX1cbiAgXG5cblxuLmNvbnRhaW5lcjMge2Rpc3BsYXk6IGZsZXg7YmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTt9ICBcbi5jb250YWluZXIzID4gZGl2IHtiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjgsIDgzLCAxMDIpO2NvbG9yOiB3aGl0ZTt3aWR0aDogYXV0bztwYWRkaW5nLWxlZnQ6IDQwcHg7dGV4dC1hbGlnbjogbGVmdDtsaW5lLWhlaWdodDogNzVweDtjb2xvcjogYmxhY2s7fVxuLml0ZW0tbGVmdDMge2JhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7cGFkZGluZzogMHB4O2ZsZXg6IDEwMCU7fVxuLml0ZW0tcmlnaHQzIHtiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7cGFkZGluZzogMHB4O2ZsZXg6IDEwMCU7IGNvbG9yOiBibGFjazsgfVxuQG1lZGlhKG1heC13aWR0aDo4MDBweCl7IC5jb250YWluZXIzIHtmbGV4LWRpcmVjdGlvbjogY29sdW1uO3RleHQtYWxpZ246IGNlbnRlcjt9fVxuXG5cbi5pdGVtMTAwMXtcbiAgICBjb2xvcjojRkZDQTA4O1xuXG59XG4uaXRlbTEwMDJ7XG4gICAgY29sb3I6d2hpdGU7XG4gICAgZm9udC1zaXplOiA2NHB4O1xufVxuLml0ZW0xMDAze1xuICAgIGNvbG9yOndoaXRlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5pdGVtMTAwNHtcbiAgIGhlaWdodDogMi40Mzc1ZW07XG4gICB3aWR0aDogNzclO1xuICAgZm9udC1zaXplOiAxNnB4O1xuICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQ0EwODtcbn1cbi5pdGVtY291cnNlc2VyY2h7XG4gICAgbWFyZ2luLXRvcDogLTEycHg7XG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XG4gICAgXG59XG4uc3RhdGV7XG4gICAgbWFyZ2luLWxlZnQ6IC0xNXB4O1xufVxuLnN1Ym1pdHtcbiAgICB3aWR0aDogOTJweDtcbiAgICBtYXJnaW4tbGVmdDogLTE1cHg7XG59XG5cbiJdfQ== */"] });


/***/ }),

/***/ 5058:
/*!**************************************************!*\
  !*** ./src/app/card-deck/card-deck.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CardDeckComponent": () => (/* binding */ CardDeckComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class CardDeckComponent {
    constructor() { }
    ngOnInit() {
    }
}
CardDeckComponent.ɵfac = function CardDeckComponent_Factory(t) { return new (t || CardDeckComponent)(); };
CardDeckComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CardDeckComponent, selectors: [["app-card-deck"]], decls: 25, vars: 0, consts: [[1, "container2"], [1, "item-left2"], [1, "card"], ["src", "../../assets/image 59.png", "alt", "...", 1, "card-img-top"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "item-right2"], ["src", "../../assets/wepik-photo-mode-202286-13228 1.png", "alt", "...", 1, "card-img-top"], ["src", "../../assets/digital-service2 1.png", "alt", "...", 1, "card-img-top"]], template: function CardDeckComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4)(5, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Explore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Give learners a chance to discover the best career options in one location with training institutions and recognized universities. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7)(10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4)(13, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Connect with learners looking for the appropriate fit by bringing thousands of institutions and knowledge partners together on a single platform. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7)(18, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4)(21, "h2", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Learn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Engage in collaboration with reputable institutions to assist learners in learning and acquiring new skills to achieve various career goals. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } }, styles: [".wrapper[_ngcontent-%COMP%]{\n    position: relative;\n    max-width: 1300px;\n    padding: 40px 0px 30px 0px;\n    margin: auto;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    \n}\n.container2[_ngcontent-%COMP%] {display: flex;background-color: rgb(255, 255, 255);max-width: 1300px; margin: auto;}\n.container2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {background-color:  rgb(255, 255, 255);color: rgb(0, 0, 0);width: auto;margin: 10px;text-align: center;font-size: 30px;}\n.item-left2[_ngcontent-%COMP%] {background-color: #f1f1f1;padding: 10px;flex: 100%;}\n.item-right2[_ngcontent-%COMP%] {background-color:#293682;padding: 10px;flex: 100%;}\n@media(max-width:800px){ .container2[_ngcontent-%COMP%] {flex-direction: column;text-align: center;}}\n.card-text[_ngcontent-%COMP%]{\n    font-size: 14px;\n    line-height: 1.5;\n    letter-spacing: 0.00938em;\n   \n    font-family: Gilroy-Medium;\n}\n.card-title[_ngcontent-%COMP%]{\n    font-family: Gilroy-Medium;\n    \n    color: #FFCA08;\n    font-family: Gilroy-Medium;\n    font-weight: 700;\n    letter-spacing: 0.00938em;\n}\n.card[_ngcontent-%COMP%]{\n    height: 180px;\n    margin-top: 25px;\n    margin: 80px;\n}\n.card[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%]{\n    width: 100px;\n    height: 100px;\n    position: absolute;\n    margin: auto;\n    top: -50%;\n    left: 30%;\n    border-radius: 50px;\n    border: thin solid black;\n    padding-top: 10px;\n    background-color: rgb(68, 83, 102);\n}\n.item-left2[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n    background-color: rgb(68, 83, 102);\n    text-decoration: none;\n    color: #ffffff;\n}\n.item-right2[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:hover {\n    background-color: rgb(68, 83, 102);\n    text-decoration: none;\n    color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcmQtZGVjay5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCOztBQUVsQztBQUNBLGFBQWEsYUFBYSxDQUFDLG9DQUFvQyxDQUFDLGlCQUFpQixFQUFFLFlBQVksQ0FBQztBQUNoRyxtQkFBbUIscUNBQXFDLENBQUMsbUJBQW1CLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLENBQUM7QUFDekksYUFBYSx5QkFBeUIsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDO0FBQ2hFLGNBQWMsd0JBQXdCLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQztBQUNoRSx5QkFBeUIsYUFBYSxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO0FBRWpGO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtJQUNoQix5QkFBeUI7O0lBRXpCLDBCQUEwQjtBQUM5QjtBQUNBO0lBQ0ksMEJBQTBCO0lBQzFCLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsMEJBQTBCO0lBQzFCLGdCQUFnQjtJQUNoQix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaLFNBQVM7SUFDVCxTQUFTO0lBQ1QsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixpQkFBaUI7SUFDakIsa0NBQWtDO0FBQ3RDO0FBQ0E7SUFDSSxrQ0FBa0M7SUFDbEMscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGtDQUFrQztJQUNsQyxxQkFBcUI7SUFDckIsY0FBYztBQUNsQiIsImZpbGUiOiJjYXJkLWRlY2suY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXgtd2lkdGg6IDEzMDBweDtcbiAgICBwYWRkaW5nOiA0MHB4IDBweCAzMHB4IDBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBcbn1cbi5jb250YWluZXIyIHtkaXNwbGF5OiBmbGV4O2JhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTttYXgtd2lkdGg6IDEzMDBweDsgbWFyZ2luOiBhdXRvO30gIFxuLmNvbnRhaW5lcjIgPiBkaXYge2JhY2tncm91bmQtY29sb3I6ICByZ2IoMjU1LCAyNTUsIDI1NSk7Y29sb3I6IHJnYigwLCAwLCAwKTt3aWR0aDogYXV0bzttYXJnaW46IDEwcHg7dGV4dC1hbGlnbjogY2VudGVyO2ZvbnQtc2l6ZTogMzBweDt9XG4uaXRlbS1sZWZ0MiB7YmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtwYWRkaW5nOiAxMHB4O2ZsZXg6IDEwMCU7fVxuLml0ZW0tcmlnaHQyIHtiYWNrZ3JvdW5kLWNvbG9yOiMyOTM2ODI7cGFkZGluZzogMTBweDtmbGV4OiAxMDAlO31cbkBtZWRpYShtYXgtd2lkdGg6ODAwcHgpeyAuY29udGFpbmVyMiB7ZmxleC1kaXJlY3Rpb246IGNvbHVtbjt0ZXh0LWFsaWduOiBjZW50ZXI7fX1cbiAgXG4uY2FyZC10ZXh0e1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAwOTM4ZW07XG4gICBcbiAgICBmb250LWZhbWlseTogR2lscm95LU1lZGl1bTtcbn1cbi5jYXJkLXRpdGxle1xuICAgIGZvbnQtZmFtaWx5OiBHaWxyb3ktTWVkaXVtO1xuICAgIC8qIGNvbG9yOiByZ2IoNjgsIDgzLCAxMDIpOyAqL1xuICAgIGNvbG9yOiAjRkZDQTA4O1xuICAgIGZvbnQtZmFtaWx5OiBHaWxyb3ktTWVkaXVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMDA5MzhlbTtcbn1cbi5jYXJke1xuICAgIGhlaWdodDogMTgwcHg7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICBtYXJnaW46IDgwcHg7XG59XG4uY2FyZCA+aW1ne1xuICAgIHdpZHRoOiAxMDBweDtcbiAgICBoZWlnaHQ6IDEwMHB4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgdG9wOiAtNTAlO1xuICAgIGxlZnQ6IDMwJTtcbiAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xuICAgIGJvcmRlcjogdGhpbiBzb2xpZCBibGFjaztcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjgsIDgzLCAxMDIpO1xufVxuLml0ZW0tbGVmdDIgOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjgsIDgzLCAxMDIpO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn0gICBcbi5pdGVtLXJpZ2h0MiA6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2OCwgODMsIDEwMik7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4gIFxuXG5cbiJdfQ== */"] });


/***/ }),

/***/ 5405:
/*!************************************************!*\
  !*** ./src/app/carousel/carousel.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarouselComponent": () => (/* binding */ CarouselComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class CarouselComponent {
    constructor() {
        this.slides = new Array(3).fill({ id: -1, src: '', title: '', subtitle: '' });
    }
    ngOnInit() {
        this.slides[0] = {
            src: './assets/img/angular.jpg',
        };
        this.slides[1] = {
            src: './assets/img/react.jpg',
        };
        this.slides[2] = {
            src: './assets/img/vue.jpg',
        };
    }
}
CarouselComponent.ɵfac = function CarouselComponent_Factory(t) { return new (t || CarouselComponent)(); };
CarouselComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarouselComponent, selectors: [["app-carousel"]], decls: 14, vars: 0, consts: [["id", "myCarousel", "data-ride", "carousel", 1, "carousel", "slide"], [1, "carousel-indicators"], ["data-target", "#myCarousel", "data-slide-to", "0", 1, "active"], ["data-target", "#myCarousel", "data-slide-to", "1"], ["data-target", "#myCarousel", "data-slide-to", "2"], [1, "carousel-inner"], [1, "item", "active"], ["src", "../../assets/digital-service2 1.png", "alt", "Los Angeles", 2, "width", "500px", "height", "550px"], [1, "item"], ["src", "../../assets/image 59.png", "alt", "Chicago", 2, "width", "500px", "height", "550px"], ["src", "../../assets/wepik-photo-mode-202286-13228 1.png", "alt", "New york", 2, "width", "500px", "height", "550px"], ["data-slide", "prev", 1, "left"], ["data-slide", "next", 1, "right"]], template: function CarouselComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "li", 2)(3, "li", 3)(4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "a", 11)(13, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["img[_ngcontent-%COMP%]{\n    width:500px;\n    height: 550px;    \n}\n\n#myCarousel[_ngcontent-%COMP%]{\n    background-color: rgb(68, 83, 102);\n    box-shadow:  rgb(68, 83, 102);\n}\n\n#carousel-control[_ngcontent-%COMP%]{\n    background-color: rgb(68, 83, 102);\n}\n\n.carousel-indicators[_ngcontent-%COMP%]{\n    position: absolute;\n    left: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhcm91c2VsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtDQUFrQztJQUNsQyw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxrQ0FBa0M7QUFDdEM7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtBQUNkIiwiZmlsZSI6ImNhcm91c2VsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbWd7XG4gICAgd2lkdGg6NTAwcHg7XG4gICAgaGVpZ2h0OiA1NTBweDsgICAgXG59XG5cbiNteUNhcm91c2Vse1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2OCwgODMsIDEwMik7XG4gICAgYm94LXNoYWRvdzogIHJnYig2OCwgODMsIDEwMik7XG59XG5cbiNjYXJvdXNlbC1jb250cm9se1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig2OCwgODMsIDEwMik7XG59XG4uY2Fyb3VzZWwtaW5kaWNhdG9yc3tcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMTAwJTtcbn0iXX0= */"] });


/***/ }),

/***/ 778:
/*!************************************************************************!*\
  !*** ./src/app/ed-xplorecertificate/ed-xplorecertificate.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EdXplorecertificateComponent": () => (/* binding */ EdXplorecertificateComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class EdXplorecertificateComponent {
    constructor() { }
    ngOnInit() {
    }
}
EdXplorecertificateComponent.ɵfac = function EdXplorecertificateComponent_Factory(t) { return new (t || EdXplorecertificateComponent)(); };
EdXplorecertificateComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EdXplorecertificateComponent, selectors: [["app-ed-xplorecertificate"]], decls: 9, vars: 0, consts: [[1, "container2"], [1, "item-right2"], [1, "container-xxl"]], template: function EdXplorecertificateComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "EdXplore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Top Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Get unli Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt harum minus modi rem est optio repudiandae omnis maiores doloremque accusantium cumque culpa, molestiae beatae aliquam error voluptatibus ea? Quis, aliquid. mited access to 1,000+ courses in top categories, hands-on projects, and job-ready certificate programs to grow your career. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, styles: [".container2[_ngcontent-%COMP%] {display: flex;background-color: rgb(68, 83, 102);margin:20px 0px;}  \n.container2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {background-color:  rgb(68, 83, 102);color: white;width: auto;margin: 0px;text-align: center;line-height: 75px;font-size: 30px;}  \n.item-left2[_ngcontent-%COMP%] {background-color: #f1f1f1;padding: 0px;flex: 100%;}  \n.item-right2[_ngcontent-%COMP%] {background-color:#293682;padding: 0px;flex: 100%;}  \n@media(max-width:200px){ .container2[_ngcontent-%COMP%] {flex-direction: column;text-align: center;}}  \n.container3[_ngcontent-%COMP%] {display: flex;background-color: #f1f1f1;}  \n.container3[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {background-color: rgb(68, 83, 102);color: white;width: auto;padding-left: 40px;text-align: left;line-height: 75px;color: black;}  \n.item-left3[_ngcontent-%COMP%] {background-color: #f1f1f1;padding: 0px;flex: 100%;}  \n.item-right3[_ngcontent-%COMP%] {background-color: rgb(255, 255, 255);padding: 0px;flex: 100%; color: black; }  \n@media(max-width:800px){ .container3[_ngcontent-%COMP%] {flex-direction: column;text-align: center;}}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkLXhwbG9yZWNlcnRpZmljYXRlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFFQSxhQUFhLGFBQWEsQ0FBQyxrQ0FBa0MsQ0FBQyxlQUFlLENBQUM7QUFDOUUsbUJBQW1CLG1DQUFtQyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLGlCQUFpQixDQUFDLGVBQWUsQ0FBQztBQUNqSixhQUFhLHlCQUF5QixDQUFDLFlBQVksQ0FBQyxVQUFVLENBQUM7QUFDL0QsY0FBYyx3QkFBd0IsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDO0FBQy9ELHlCQUF5QixhQUFhLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFJakYsYUFBYSxhQUFhLENBQUMseUJBQXlCLENBQUM7QUFDckQsbUJBQW1CLGtDQUFrQyxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsa0JBQWtCLENBQUMsZ0JBQWdCLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDO0FBQ2xKLGFBQWEseUJBQXlCLENBQUMsWUFBWSxDQUFDLFVBQVUsQ0FBQztBQUMvRCxjQUFjLG9DQUFvQyxDQUFDLFlBQVksQ0FBQyxVQUFVLEVBQUUsWUFBWSxFQUFFO0FBQzFGLHlCQUF5QixhQUFhLHNCQUFzQixDQUFDLGtCQUFrQixDQUFDLENBQUMiLCJmaWxlIjoiZWQteHBsb3JlY2VydGlmaWNhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4uY29udGFpbmVyMiB7ZGlzcGxheTogZmxleDtiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNjgsIDgzLCAxMDIpO21hcmdpbjoyMHB4IDBweDt9ICBcbi5jb250YWluZXIyID4gZGl2IHtiYWNrZ3JvdW5kLWNvbG9yOiAgcmdiKDY4LCA4MywgMTAyKTtjb2xvcjogd2hpdGU7d2lkdGg6IGF1dG87bWFyZ2luOiAwcHg7dGV4dC1hbGlnbjogY2VudGVyO2xpbmUtaGVpZ2h0OiA3NXB4O2ZvbnQtc2l6ZTogMzBweDt9XG4uaXRlbS1sZWZ0MiB7YmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtwYWRkaW5nOiAwcHg7ZmxleDogMTAwJTt9XG4uaXRlbS1yaWdodDIge2JhY2tncm91bmQtY29sb3I6IzI5MzY4MjtwYWRkaW5nOiAwcHg7ZmxleDogMTAwJTt9XG5AbWVkaWEobWF4LXdpZHRoOjIwMHB4KXsgLmNvbnRhaW5lcjIge2ZsZXgtZGlyZWN0aW9uOiBjb2x1bW47dGV4dC1hbGlnbjogY2VudGVyO319XG4gIFxuXG5cbi5jb250YWluZXIzIHtkaXNwbGF5OiBmbGV4O2JhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7fSAgXG4uY29udGFpbmVyMyA+IGRpdiB7YmFja2dyb3VuZC1jb2xvcjogcmdiKDY4LCA4MywgMTAyKTtjb2xvcjogd2hpdGU7d2lkdGg6IGF1dG87cGFkZGluZy1sZWZ0OiA0MHB4O3RleHQtYWxpZ246IGxlZnQ7bGluZS1oZWlnaHQ6IDc1cHg7Y29sb3I6IGJsYWNrO31cbi5pdGVtLWxlZnQzIHtiYWNrZ3JvdW5kLWNvbG9yOiAjZjFmMWYxO3BhZGRpbmc6IDBweDtmbGV4OiAxMDAlO31cbi5pdGVtLXJpZ2h0MyB7YmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO3BhZGRpbmc6IDBweDtmbGV4OiAxMDAlOyBjb2xvcjogYmxhY2s7IH1cbkBtZWRpYShtYXgtd2lkdGg6ODAwcHgpeyAuY29udGFpbmVyMyB7ZmxleC1kaXJlY3Rpb246IGNvbHVtbjt0ZXh0LWFsaWduOiBjZW50ZXI7fX1cblxuXG4iXX0= */"] });


/***/ }),

/***/ 970:
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 3482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 40, vars: 0, consts: [["id", "myHeader", 1, "header"], [1, "wrapper"], ["src", "../assets/finallogo.b6ff2b025f202f1e1fbaed00e9f5708b.svg", "alt", "", 1, "logo", 2, "width", "20%"], ["type", "radio", "name", "slider", "id", "menu-btn"], ["type", "radio", "name", "slider", "id", "close-btn"], [1, "nav-links"], ["for", "close-btn", 1, "btn", "close-btn"], [1, "fas", "fa-times"], ["href", "#"], ["href", "#", 1, "desktop-item"], ["type", "checkbox", "id", "showDrop"], ["for", "showDrop", 1, "mobile-item"], [1, "drop-menu"], ["for", "menu-btn", 1, "btn", "menu-btn"], [1, "fas", "fa-bars"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "nav")(2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 2)(4, "input", 3)(5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 5)(7, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li")(10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li")(13, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li")(16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Find an Institute");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "ul", 12)(22, "li")(23, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Drop menu 1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "li")(26, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Drop menu 2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "li")(29, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Drop menu 3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li")(32, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Drop menu 4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li")(35, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Contact Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "label", 13)(38, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()();
    } }, styles: ["*[_ngcontent-%COMP%]{\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n  }\n\n  nav[_ngcontent-%COMP%]   .wrapper[_ngcontent-%COMP%]{\n    position: relative;\n    max-width: 1300px;\n    padding: 40px 0px 30px 0px;\n    height: 70px;\n    line-height: 70px;\n    margin: auto;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  .logo[_ngcontent-%COMP%]{\n  padding-left: 30px;\n}\n\n  .wrapper[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]{\n    display: inline-flex;\n  }\n\n  .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n    list-style: none;\n    \n  }\n\n  .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    color: #000000;\n    text-decoration: none;\n    font-size: 18px;\n    padding: 10px 45px;\n    border-radius: 5px;\n    transition: all 0.3s ease;\n    font-family: 'Manrope';\n  \n    \n  }\n\n  .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{\n    background: #f1e106;\n  }\n\n  .nav-links[_ngcontent-%COMP%]   .mobile-item[_ngcontent-%COMP%]{\n    display: none;\n  }\n\n  .nav-links[_ngcontent-%COMP%]   .drop-menu[_ngcontent-%COMP%]{\n    position: absolute;\n    \n    width: 180px;\n    line-height: 45px;\n    top: 85px;    \n    opacity: 0;\n    visibility: hidden;\n    box-shadow: 0 6px 10px rgba(0,0,0,0.15);\n  }\n\n  .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   .drop-menu[_ngcontent-%COMP%]{\n  \n    transition: all 0.3s ease;\n    top: 70px;\n    opacity: 1;\n    visibility: visible;\n    z-index: 1;\n    background-color: #ffffff;\n  }\n\n  .drop-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n    width: 100%;\n    display: block;\n    padding: 0 0 0 15px;\n    font-weight: 400;\n    border-radius: 0px;\n  }\n\n  .wrapper[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{\n    color: rgb(14, 58, 237);\n    font-size: 20px;\n    cursor: pointer;\n    display: none;\n    background-color: #f1e106;\n  \n    \n  }\n\n  .wrapper[_ngcontent-%COMP%]   .btn.close-btn[_ngcontent-%COMP%]{\n    position: absolute;\n    right: 30px;\n    top: 10px;\n    color: #e3b707;\n    background-color: #f1e106;\n  }\n\n  @media screen and (max-width: 970px) {\n    .wrapper[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{\n      display: block;\n    }\n    .wrapper[_ngcontent-%COMP%]   .nav-links[_ngcontent-%COMP%]{\n      position: fixed;\n      height: 100vh;\n      width: 100%;\n      max-width: 350px;\n      top: 0;\n      left: -100%;\n      background: #a7caed;\n      display: block;\n      padding: 50px 10px;\n      line-height: 50px;\n      overflow-y: auto;\n      box-shadow: 0px 15px 15px rgba(0,0,0,0.18);\n      transition: all 0.3s ease;\n      z-index: 1  ;\n    }\n    \n    [_ngcontent-%COMP%]::-webkit-scrollbar {\n      width: 10px;\n    }\n    [_ngcontent-%COMP%]::-webkit-scrollbar-track {\n      background: #242526;\n    }\n    [_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n      background: #3A3B3C;\n    }\n    #menu-btn[_ngcontent-%COMP%]:checked    ~ .nav-links[_ngcontent-%COMP%]{\n      left: 0%;\n      color: #000000;\n      \n    }\n  \n    .icon-cog[_ngcontent-%COMP%] {\n      color: black;\n    }\n    #menu-btn[_ngcontent-%COMP%]:checked    ~ .btn.menu-btn[_ngcontent-%COMP%]{\n      display: none;\n      \n    }\n    #close-btn[_ngcontent-%COMP%]:checked    ~ .btn.menu-btn[_ngcontent-%COMP%]{\n      display: block;\n      \n    }\n    .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n      margin: 15px 10px;\n    }\n    .nav-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n      padding: 0 20px;\n      display: block;\n      font-size: 20px;\n    }\n    .nav-links[_ngcontent-%COMP%]   .drop-menu[_ngcontent-%COMP%]{\n      position: static;\n      opacity: 1;\n      top: 65px;\n      visibility: visible;\n      padding-left: 20px;\n      width: 100%;\n      max-height: 0px;\n      overflow: hidden;\n      box-shadow: none;\n      transition: all 0.3s ease;\n    \n    }\n    #showDrop[_ngcontent-%COMP%]:checked    ~ .drop-menu[_ngcontent-%COMP%], #showMega[_ngcontent-%COMP%]:checked    ~ .mega-box[_ngcontent-%COMP%]{\n      max-height: 100%;\n      color: #000000;\n    }\n    .nav-links[_ngcontent-%COMP%]   .desktop-item[_ngcontent-%COMP%]{\n      display: none;\n    }\n    .nav-links[_ngcontent-%COMP%]   .mobile-item[_ngcontent-%COMP%]{\n      display: block;\n      color: #000000;\n      font-size: 20px;\n      font-weight: 500;\n      padding-left: 20px;\n      cursor: pointer;\n      border-radius: 5px;\n      transition: all 0.3s ease;\n    }\n    .nav-links[_ngcontent-%COMP%]   .mobile-item[_ngcontent-%COMP%]:hover{\n      background: #3A3B3C;\n    }\n    .drop-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n      margin: 0;\n    }\n    .drop-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\n      border-radius: 5px;\n      font-size: 18px;\n    }\n    .mega-box[_ngcontent-%COMP%]{\n      position: static;\n      top: 65px;\n      opacity: 1;\n      visibility: visible;\n      padding: 0 20px;\n      max-height: 0px;\n      overflow: hidden;\n      transition: all 0.3s ease;\n    }\n    .mega-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{\n      box-shadow: none;\n      flex-direction: column;\n      padding: 20px 20px 0 20px;\n    }\n    .mega-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]{\n      width: 100%;\n      margin-bottom: 15px;\n      border-top: 1px solid rgba(255,255,255,0.08);\n    }\n    .mega-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:nth-child(1), .mega-box[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]:nth-child(2){\n      border-top: 0px;\n    }\n    .content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .mega-links[_ngcontent-%COMP%]{\n      border-left: 0px;\n      padding-left: 15px;\n    }\n    .row[_ngcontent-%COMP%]   .mega-links[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\n      margin: 0;\n    }\n    .content[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   header[_ngcontent-%COMP%]{\n      font-size: 19px;\n    }\n  }\n\n  nav[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{\n    display: none;\n  }\n\n  .body-text[_ngcontent-%COMP%]{\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    width: 100%;\n    text-align: center;\n    padding: 0 30px;\n  }\n\n  .body-text[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\n    font-size: 45px;\n    font-weight: 600;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLFNBQVM7SUFDVCxVQUFVO0lBQ1Ysc0JBQXNCO0VBQ3hCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7RUFDaEM7O0VBRUY7RUFDRSxrQkFBa0I7QUFDcEI7O0VBQ0U7SUFDRSxvQkFBb0I7RUFDdEI7O0VBQ0E7SUFDRSxnQkFBZ0I7O0VBRWxCOztFQUNBO0lBQ0UsY0FBYztJQUNkLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIsc0JBQXNCOzs7RUFHeEI7O0VBQ0E7SUFDRSxtQkFBbUI7RUFDckI7O0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7O0VBQ0E7SUFDRSxrQkFBa0I7O0lBRWxCLFlBQVk7SUFDWixpQkFBaUI7SUFDakIsU0FBUztJQUNULFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsdUNBQXVDO0VBQ3pDOztFQUNBOztJQUVFLHlCQUF5QjtJQUN6QixTQUFTO0lBQ1QsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YseUJBQXlCO0VBQzNCOztFQUNBO0lBQ0UsV0FBVztJQUNYLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtFQUNwQjs7RUFDQTtJQUNFLHVCQUF1QjtJQUN2QixlQUFlO0lBQ2YsZUFBZTtJQUNmLGFBQWE7SUFDYix5QkFBeUI7OztFQUczQjs7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULGNBQWM7SUFDZCx5QkFBeUI7RUFDM0I7O0VBRUE7SUFDRTtNQUNFLGNBQWM7SUFDaEI7SUFDQTtNQUNFLGVBQWU7TUFDZixhQUFhO01BQ2IsV0FBVztNQUNYLGdCQUFnQjtNQUNoQixNQUFNO01BQ04sV0FBVztNQUNYLG1CQUFtQjtNQUNuQixjQUFjO01BQ2Qsa0JBQWtCO01BQ2xCLGlCQUFpQjtNQUNqQixnQkFBZ0I7TUFDaEIsMENBQTBDO01BQzFDLHlCQUF5QjtNQUN6QixZQUFZO0lBQ2Q7SUFDQSxzQkFBc0I7SUFDdEI7TUFDRSxXQUFXO0lBQ2I7SUFDQTtNQUNFLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UsbUJBQW1CO0lBQ3JCO0lBQ0E7TUFDRSxRQUFRO01BQ1IsY0FBYzs7SUFFaEI7O0lBRUE7TUFDRSxZQUFZO0lBQ2Q7SUFDQTtNQUNFLGFBQWE7O0lBRWY7SUFDQTtNQUNFLGNBQWM7O0lBRWhCO0lBQ0E7TUFDRSxpQkFBaUI7SUFDbkI7SUFDQTtNQUNFLGVBQWU7TUFDZixjQUFjO01BQ2QsZUFBZTtJQUNqQjtJQUNBO01BQ0UsZ0JBQWdCO01BQ2hCLFVBQVU7TUFDVixTQUFTO01BQ1QsbUJBQW1CO01BQ25CLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixnQkFBZ0I7TUFDaEIseUJBQXlCOztJQUUzQjtJQUNBOztNQUVFLGdCQUFnQjtNQUNoQixjQUFjO0lBQ2hCO0lBQ0E7TUFDRSxhQUFhO0lBQ2Y7SUFDQTtNQUNFLGNBQWM7TUFDZCxjQUFjO01BQ2QsZUFBZTtNQUNmLGdCQUFnQjtNQUNoQixrQkFBa0I7TUFDbEIsZUFBZTtNQUNmLGtCQUFrQjtNQUNsQix5QkFBeUI7SUFDM0I7SUFDQTtNQUNFLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UsU0FBUztJQUNYO0lBQ0E7TUFDRSxrQkFBa0I7TUFDbEIsZUFBZTtJQUNqQjtJQUNBO01BQ0UsZ0JBQWdCO01BQ2hCLFNBQVM7TUFDVCxVQUFVO01BQ1YsbUJBQW1CO01BQ25CLGVBQWU7TUFDZixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLHlCQUF5QjtJQUMzQjtJQUNBO01BQ0UsZ0JBQWdCO01BQ2hCLHNCQUFzQjtNQUN0Qix5QkFBeUI7SUFDM0I7SUFDQTtNQUNFLFdBQVc7TUFDWCxtQkFBbUI7TUFDbkIsNENBQTRDO0lBQzlDO0lBQ0E7O01BRUUsZUFBZTtJQUNqQjtJQUNBO01BQ0UsZ0JBQWdCO01BQ2hCLGtCQUFrQjtJQUNwQjtJQUNBO01BQ0UsU0FBUztJQUNYO0lBQ0E7TUFDRSxlQUFlO0lBQ2pCO0VBQ0Y7O0VBQ0E7SUFDRSxhQUFhO0VBQ2Y7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCOztFQUNBO0lBQ0UsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuKntcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG5cbiAgbmF2IC53cmFwcGVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXgtd2lkdGg6IDEzMDBweDtcbiAgICBwYWRkaW5nOiA0MHB4IDBweCAzMHB4IDBweDtcbiAgICBoZWlnaHQ6IDcwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDcwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cblxuLmxvZ297XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbn1cbiAgLndyYXBwZXIgLm5hdi1saW5rc3tcbiAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgfVxuICAubmF2LWxpbmtzIGxpe1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgXG4gIH1cbiAgLm5hdi1saW5rcyBsaSBhe1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgcGFkZGluZzogMTBweCA0NXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIGZvbnQtZmFtaWx5OiAnTWFucm9wZSc7XG4gIFxuICAgIFxuICB9XG4gIC5uYXYtbGlua3MgbGkgYTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kOiAjZjFlMTA2O1xuICB9XG4gIC5uYXYtbGlua3MgLm1vYmlsZS1pdGVte1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLm5hdi1saW5rcyAuZHJvcC1tZW51e1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBcbiAgICB3aWR0aDogMTgwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDQ1cHg7XG4gICAgdG9wOiA4NXB4OyAgICBcbiAgICBvcGFjaXR5OiAwO1xuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICBib3gtc2hhZG93OiAwIDZweCAxMHB4IHJnYmEoMCwwLDAsMC4xNSk7XG4gIH1cbiAgLm5hdi1saW5rcyBsaTpob3ZlciAuZHJvcC1tZW51e1xuICBcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIHRvcDogNzBweDtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgei1pbmRleDogMTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xuICB9XG4gIC5kcm9wLW1lbnUgbGkgYXtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nOiAwIDAgMCAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICB9XG4gIC53cmFwcGVyIC5idG57XG4gICAgY29sb3I6IHJnYigxNCwgNTgsIDIzNyk7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWUxMDY7XG4gIFxuICAgIFxuICB9XG4gIC53cmFwcGVyIC5idG4uY2xvc2UtYnRue1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMzBweDtcbiAgICB0b3A6IDEwcHg7XG4gICAgY29sb3I6ICNlM2I3MDc7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YxZTEwNjtcbiAgfVxuICBcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTcwcHgpIHtcbiAgICAud3JhcHBlciAuYnRue1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC53cmFwcGVyIC5uYXYtbGlua3N7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXgtd2lkdGg6IDM1MHB4O1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogLTEwMCU7XG4gICAgICBiYWNrZ3JvdW5kOiAjYTdjYWVkO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwYWRkaW5nOiA1MHB4IDEwcHg7XG4gICAgICBsaW5lLWhlaWdodDogNTBweDtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICBib3gtc2hhZG93OiAwcHggMTVweCAxNXB4IHJnYmEoMCwwLDAsMC4xOCk7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgICAgei1pbmRleDogMSAgO1xuICAgIH1cbiAgICAvKiBjdXN0b20gc2Nyb2xsIGJhciAqL1xuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgd2lkdGg6IDEwcHg7XG4gICAgfVxuICAgIDo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgICAgYmFja2dyb3VuZDogIzI0MjUyNjtcbiAgICB9XG4gICAgOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICBiYWNrZ3JvdW5kOiAjM0EzQjNDO1xuICAgIH1cbiAgICAjbWVudS1idG46Y2hlY2tlZCB+IC5uYXYtbGlua3N7XG4gICAgICBsZWZ0OiAwJTtcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgICAgXG4gICAgfVxuICBcbiAgICAuaWNvbi1jb2cge1xuICAgICAgY29sb3I6IGJsYWNrO1xuICAgIH1cbiAgICAjbWVudS1idG46Y2hlY2tlZCB+IC5idG4ubWVudS1idG57XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgXG4gICAgfVxuICAgICNjbG9zZS1idG46Y2hlY2tlZCB+IC5idG4ubWVudS1idG57XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIFxuICAgIH1cbiAgICAubmF2LWxpbmtzIGxpe1xuICAgICAgbWFyZ2luOiAxNXB4IDEwcHg7XG4gICAgfVxuICAgIC5uYXYtbGlua3MgbGkgYXtcbiAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgIH1cbiAgICAubmF2LWxpbmtzIC5kcm9wLW1lbnV7XG4gICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgICAgb3BhY2l0eTogMTtcbiAgICAgIHRvcDogNjVweDtcbiAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1heC1oZWlnaHQ6IDBweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICBcbiAgICB9XG4gICAgI3Nob3dEcm9wOmNoZWNrZWQgfiAuZHJvcC1tZW51LFxuICAgICNzaG93TWVnYTpjaGVja2VkIH4gLm1lZ2EtYm94e1xuICAgICAgbWF4LWhlaWdodDogMTAwJTtcbiAgICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIH1cbiAgICAubmF2LWxpbmtzIC5kZXNrdG9wLWl0ZW17XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgICAubmF2LWxpbmtzIC5tb2JpbGUtaXRlbXtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgICB9XG4gICAgLm5hdi1saW5rcyAubW9iaWxlLWl0ZW06aG92ZXJ7XG4gICAgICBiYWNrZ3JvdW5kOiAjM0EzQjNDO1xuICAgIH1cbiAgICAuZHJvcC1tZW51IGxpe1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAuZHJvcC1tZW51IGxpIGF7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgfVxuICAgIC5tZWdhLWJveHtcbiAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgICB0b3A6IDY1cHg7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbiAgICAgIHBhZGRpbmc6IDAgMjBweDtcbiAgICAgIG1heC1oZWlnaHQ6IDBweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICAgIH1cbiAgICAubWVnYS1ib3ggLmNvbnRlbnR7XG4gICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIHBhZGRpbmc6IDIwcHggMjBweCAwIDIwcHg7XG4gICAgfVxuICAgIC5tZWdhLWJveCAuY29udGVudCAucm93e1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC4wOCk7XG4gICAgfVxuICAgIC5tZWdhLWJveCAuY29udGVudCAucm93Om50aC1jaGlsZCgxKSxcbiAgICAubWVnYS1ib3ggLmNvbnRlbnQgLnJvdzpudGgtY2hpbGQoMil7XG4gICAgICBib3JkZXItdG9wOiAwcHg7XG4gICAgfVxuICAgIC5jb250ZW50IC5yb3cgLm1lZ2EtbGlua3N7XG4gICAgICBib3JkZXItbGVmdDogMHB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xuICAgIH1cbiAgICAucm93IC5tZWdhLWxpbmtzIGxpe1xuICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbiAgICAuY29udGVudCAucm93IGhlYWRlcntcbiAgICAgIGZvbnQtc2l6ZTogMTlweDtcbiAgICB9XG4gIH1cbiAgbmF2IGlucHV0e1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgXG4gIC5ib2R5LXRleHR7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAzMHB4O1xuICB9XG4gIC5ib2R5LXRleHQgZGl2e1xuICAgIGZvbnQtc2l6ZTogNDVweDtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICB9Il19 */"] });


/***/ }),

/***/ 1610:
/*!**********************************************!*\
  !*** ./src/app/pillers/pillers.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PillersComponent": () => (/* binding */ PillersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class PillersComponent {
    constructor() { }
    ngOnInit() {
    }
}
PillersComponent.ɵfac = function PillersComponent_Factory(t) { return new (t || PillersComponent)(); };
PillersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PillersComponent, selectors: [["app-pillers"]], decls: 9, vars: 0, consts: [[1, "wrapper"], [1, "section"]], template: function PillersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "EdXplore");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Three Pillars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1)(7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "At EdXplore, we want to enable students to to navigate, upskill and reach new heights. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } }, styles: [".wrapper[_ngcontent-%COMP%]{\n    position: relative;\n    max-width: 1300px;\n    padding: 0px 0px 30px 0px;\n  \n    line-height: 70px;\n    margin: auto;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    \n\n}\n\n.section[_ngcontent-%COMP%]{\n    align-items: center;\n    text-align: center;\n    margin-left: auto;\n    margin-right: auto;\n    line-height: 20px;\n  \n    \n    \n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBpbGxlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIseUJBQXlCOztJQUV6QixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLHNCQUFzQjs7QUFFMUI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsaUJBQWlCOzs7O0FBSXJCIiwiZmlsZSI6InBpbGxlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwcGVye1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBtYXgtd2lkdGg6IDEzMDBweDtcbiAgICBwYWRkaW5nOiAwcHggMHB4IDMwcHggMHB4O1xuICBcbiAgICBsaW5lLWhlaWdodDogNzBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAvKiBtYXJnaW4tdG9wOiAzMHB4OyAqL1xuXG59XG5cbi5zZWN0aW9ue1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgXG4gICAgXG4gICAgXG59ICJdfQ== */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(1211), __webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map