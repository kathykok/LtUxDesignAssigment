(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_components_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/components/home/home.component */ "./src/app/core/components/home/home.component.ts");
/* harmony import */ var _core_components_notification_page_notification_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/components/notification-page/notification-page.component */ "./src/app/core/components/notification-page/notification-page.component.ts");






const routes = [
    {
        path: '',
        component: _core_components_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
        pathMatch: 'full',
    },
    {
        path: 'posts',
        loadChildren: () => __webpack_require__.e(/*! import() | features-posts-posts-module */ "features-posts-posts-module").then(__webpack_require__.bind(null, /*! ./features/posts/posts.module */ "./src/app/features/posts/posts.module.ts")).then(m => m.PostsModule),
    },
    {
        path: 'todos',
        loadChildren: () => __webpack_require__.e(/*! import() | features-todos-todos-module */ "features-todos-todos-module").then(__webpack_require__.bind(null, /*! ./features/todos/todos.module */ "./src/app/features/todos/todos.module.ts")).then(m => m.TodosModule),
    },
    {
        path: 'users',
        loadChildren: () => Promise.all(/*! import() | features-users-users-module */[__webpack_require__.e("common"), __webpack_require__.e("features-users-users-module")]).then(__webpack_require__.bind(null, /*! ./features/users/users.module */ "./src/app/features/users/users.module.ts")).then(m => m.UsersModule),
    },
    {
        path: 'examples',
        loadChildren: () => Promise.all(/*! import() | features-examples-examples-module */[__webpack_require__.e("common"), __webpack_require__.e("features-examples-examples-module")]).then(__webpack_require__.bind(null, /*! ./features/examples/examples.module */ "./src/app/features/examples/examples.module.ts")).then(m => m.ExamplesModule),
    },
    {
        path: '**',
        component: _core_components_notification_page_notification_page_component__WEBPACK_IMPORTED_MODULE_3__["NotificationPageComponent"],
        data: {
            type: 'error',
            title: 'Page not found',
            heading: '404',
            description: 'This is not the page you are looking for.',
        },
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"],
            })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"],
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _shared_store_shared_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./shared/store/shared.actions */ "./src/app/shared/store/shared.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _shared_services_router_history_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/services/router-history.service */ "./src/app/shared/services/router-history.service.ts");
/* harmony import */ var _core_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/components/progress/progress.component */ "./src/app/core/components/progress/progress.component.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./core/components/header/header.component */ "./src/app/core/components/header/header.component.ts");
/* harmony import */ var _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./core/components/footer/footer.component */ "./src/app/core/components/footer/footer.component.ts");















class AppComponent {
    constructor(store, router, routerHistory) {
        this.store = store;
        this.router = router;
        this.routerHistory = routerHistory;
        this.store.dispatch(Object(_shared_store_shared_actions__WEBPACK_IMPORTED_MODULE_3__["checkIsOnline"])());
    }
    ngOnInit() {
        this.router.events.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(evt => evt instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"])).subscribe((evt) => this.routerHistory.push(evt.url));
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_router_history_service__WEBPACK_IMPORTED_MODULE_5__["RouterHistoryService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 35, vars: 4, consts: [[1, "app-wrapper"], ["mode", "side", 1, "app-sidebar"], ["sidenav", ""], ["routerLink", "/"], ["mat-list-item", "", "routerLink", "/posts"], ["mat-list-item", "", "routerLink", "/users"], ["mat-list-item", "", "routerLink", "/todos"], ["mat-list-item", "", "routerLink", "/examples"], [1, "app-content"], [3, "sidenavIconClick"], [1, "app-content__main"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-progress");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-sidenav-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-sidenav", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-list-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Home");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " My Lentune ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Bookings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Administration ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Settings");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Profile");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Preferences");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "mat-sidenav-content", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "app-header", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sidenavIconClick", function AppComponent_Template_app_header_sidenavIconClick_31_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "main", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-elevation-z0", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-elevation-z0", true);
    } }, directives: [_core_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_6__["ProgressComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenav"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListItem"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionPanelHeader"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_7__["MatSidenavContent"], _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"]], styles: [".app-wrapper[_ngcontent-%COMP%] {\n  min-height: 100vh;\n}\n\n.app-sidebar[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.app-content[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\n.app-content__main[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLXdyYXBwZXIge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLmFwcC1zaWRlYmFyIHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uYXBwLWNvbnRlbnQge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmFwcC1jb250ZW50X19tYWluIHtcbiAgZmxleC1ncm93OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _shared_services_router_history_service__WEBPACK_IMPORTED_MODULE_5__["RouterHistoryService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/components/home/home.component */ "./src/app/core/components/home/home.component.ts");
/* harmony import */ var _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./core/components/header/header.component */ "./src/app/core/components/header/header.component.ts");
/* harmony import */ var _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./core/components/footer/footer.component */ "./src/app/core/components/footer/footer.component.ts");
/* harmony import */ var _core_components_notification_page_notification_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./core/components/notification-page/notification-page.component */ "./src/app/core/components/notification-page/notification-page.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");













class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            // angular
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            // material design
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            // core & shared
            _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
            // app routing
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _core_components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
        _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
        _core_components_notification_page_notification_page_component__WEBPACK_IMPORTED_MODULE_10__["NotificationPageComponent"]], imports: [
        // angular
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        // material design
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        // core & shared
        _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
        // app routing
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _core_components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _core_components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                    _core_components_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                    _core_components_notification_page_notification_page_component__WEBPACK_IMPORTED_MODULE_10__["NotificationPageComponent"],
                ],
                imports: [
                    // angular
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    // material design
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    // core & shared
                    _core_core_module__WEBPACK_IMPORTED_MODULE_4__["CoreModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"],
                    // app routing
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/app-store/app-store.effects.ts":
/*!*****************************************************!*\
  !*** ./src/app/core/app-store/app-store.effects.ts ***!
  \*****************************************************/
/*! exports provided: appEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appEffects", function() { return appEffects; });
/* harmony import */ var _features_posts_store_posts_effects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../features/posts/store/posts.effects */ "./src/app/features/posts/store/posts.effects.ts");
/* harmony import */ var _shared_store_shared_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/store/shared.effects */ "./src/app/shared/store/shared.effects.ts");
/* harmony import */ var _features_todos_store_todos_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../features/todos/store/todos.effects */ "./src/app/features/todos/store/todos.effects.ts");
/* harmony import */ var _features_users_store_users_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../features/users/store/users.effects */ "./src/app/features/users/store/users.effects.ts");




const appEffects = [
    _shared_store_shared_effects__WEBPACK_IMPORTED_MODULE_1__["SharedEffects"],
    _features_posts_store_posts_effects__WEBPACK_IMPORTED_MODULE_0__["PostsEffects"],
    _features_todos_store_todos_effects__WEBPACK_IMPORTED_MODULE_2__["TodosEffects"],
    _features_users_store_users_effects__WEBPACK_IMPORTED_MODULE_3__["UsersEffects"],
];


/***/ }),

/***/ "./src/app/core/app-store/app-store.reducers.ts":
/*!******************************************************!*\
  !*** ./src/app/core/app-store/app-store.reducers.ts ***!
  \******************************************************/
/*! exports provided: appReducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducers", function() { return appReducers; });
/* harmony import */ var _features_posts_store_posts_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../features/posts/store/posts.reducer */ "./src/app/features/posts/store/posts.reducer.ts");
/* harmony import */ var _shared_store_shared_reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/store/shared.reducer */ "./src/app/shared/store/shared.reducer.ts");
/* harmony import */ var _features_todos_store_todos_reducer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../features/todos/store/todos.reducer */ "./src/app/features/todos/store/todos.reducer.ts");
/* harmony import */ var _features_users_store_users_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../features/users/store/users.reducer */ "./src/app/features/users/store/users.reducer.ts");




const appReducers = {
    shared: _shared_store_shared_reducer__WEBPACK_IMPORTED_MODULE_1__["sharedReducer"],
    posts: _features_posts_store_posts_reducer__WEBPACK_IMPORTED_MODULE_0__["postsReducer"],
    todos: _features_todos_store_todos_reducer__WEBPACK_IMPORTED_MODULE_2__["todosReducer"],
    users: _features_users_store_users_reducer__WEBPACK_IMPORTED_MODULE_3__["usersReducer"],
};


/***/ }),

/***/ "./src/app/core/components/footer/footer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/footer/footer.component.ts ***!
  \************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 3, vars: 0, consts: [[1, "footer"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "2020 \u00A9 Angular Starter App licensed under MIT for better web");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".footer[_ngcontent-%COMP%] {\n  padding: 20px 40px;\n  background-color: rgba(0, 0, 0, 0.05);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHFDQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXIge1xuICBwYWRkaW5nOiAyMHB4IDQwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgLjA1KTtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/components/header/header.component.ts":
/*!************************************************************!*\
  !*** ./src/app/core/components/header/header.component.ts ***!
  \************************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");






class HeaderComponent {
    constructor() {
        this.sidenavIconClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], outputs: { sidenavIconClick: "sidenavIconClick" }, decls: 14, vars: 1, consts: [["color", "primary", 1, "app-toolbar"], ["mat-icon-button", "", "aria-label", "Toggle app menu", 1, "app-toolbar__btn-menu", 3, "click"], ["src", "assets/logo-white.svg", "alt", "", 1, "app-toolbar__logo"], [1, "app-toolbar__right"], ["mat-icon-button", "", "aria-label", "Toggle user menu", 3, "matMenuTriggerFor"], ["menu", "matMenu"], ["mat-menu-item", ""]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HeaderComponent_Template_button_click_1_listener() { return ctx.sidenavIconClick.emit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Lentune Wedding Hire ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-menu", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Sign out");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matMenuTriggerFor", _r0);
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuTrigger"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["_MatMenu"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuItem"]], styles: [".app-toolbar[_ngcontent-%COMP%] {\n  font-weight: normal;\n}\n\n.app-toolbar__btn-menu[_ngcontent-%COMP%] {\n  margin-right: 12px;\n}\n\n.app-toolbar__logo[_ngcontent-%COMP%] {\n  width: 28px;\n  height: 28px;\n}\n\n.app-toolbar__right[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFFQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXBwLXRvb2xiYXIge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufVxuXG4uYXBwLXRvb2xiYXJfX2J0bi1tZW51IHtcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xufVxuXG4uYXBwLXRvb2xiYXJfX2xvZ28ge1xuICB3aWR0aDogMjhweDtcbiAgaGVpZ2h0OiAyOHB4O1xufVxuXG4uYXBwLXRvb2xiYXJfX3JpZ2h0IHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss'],
            }]
    }], null, { sidenavIconClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/core/components/home/home.component.ts":
/*!********************************************************!*\
  !*** ./src/app/core/components/home/home.component.ts ***!
  \********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomeComponent {
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 25, vars: 0, consts: [[1, "hero"], [1, "section"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Welcome to Wedding Essentials Hire");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Your one-stop shop for all your wedding needs.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "About Us");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "We specialize in providing high-quality wedding hire services to make your special day unforgettable. From elegant decorations to essential equipment, we have everything you need.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Our Services");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Explore our wide range of wedding hire services designed to cater to every aspect of your wedding day.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Testimonials");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Don't just take our word for it. Read what our satisfied clients have to say about our services.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Contact Us: info@weddingessentialshire.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Follow us on Social Media");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".home-highlight[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n  text-align: center;\n}\n\n.home-display[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.home-modules[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.home-modules__header[_ngcontent-%COMP%] {\n  margin-bottom: 30px;\n}\n\n.home-card[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.home-card__header-image[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.home-card__header-icon[_ngcontent-%COMP%] {\n  font-size: 32px;\n  height: 32px;\n  width: 32px;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  background-color: #fff;\n  border-bottom: 1px solid #ccc;\n  padding: 10px;\n  text-align: center;\n}\n\n.navbar[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  margin: 0 15px;\n  text-decoration: none;\n  color: #333;\n}\n\n.hero[_ngcontent-%COMP%] {\n  background-image: url(\"https://kathykok.github.io/LtUxDesignAssigment/assets/BannerImg.png\");\n  background-size: cover;\n  color: #fff;\n  padding: 100px 0;\n  text-align: center;\n}\n\n.section[_ngcontent-%COMP%] {\n  padding: 50px 10%;\n}\n\nfooter[_ngcontent-%COMP%] {\n  background-color: #333;\n  color: #fff;\n  text-align: center;\n  padding: 20px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFLQTtFQUNFLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUZGOztBQUtBO0VBQ0UsZUFic0I7RUFjdEIsWUFkc0I7RUFldEIsV0Fmc0I7QUFheEI7O0FBUUE7RUFDRSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBTEY7O0FBUUE7RUFDRSxjQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FBTEY7O0FBUUE7RUFDRSw0RkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUFMRjs7QUFRQTtFQUNFLGlCQUFBO0FBTEY7O0FBUUE7RUFDRSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUFMRiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaG9tZS1oaWdobGlnaHQge1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5ob21lLWRpc3BsYXkge1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uaG9tZS1tb2R1bGVzIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLmhvbWUtbW9kdWxlc19faGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuXG4kaG9tZS1oZWFkZXItaWNvbi1zaXplOiAzMnB4O1xuXG4uaG9tZS1jYXJkIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLmhvbWUtY2FyZF9faGVhZGVyLWltYWdlIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5ob21lLWNhcmRfX2hlYWRlci1pY29uIHtcbiAgZm9udC1zaXplOiAkaG9tZS1oZWFkZXItaWNvbi1zaXplO1xuICBoZWlnaHQ6ICRob21lLWhlYWRlci1pY29uLXNpemU7XG4gIHdpZHRoOiAkaG9tZS1oZWFkZXItaWNvbi1zaXplO1xufVxuXG5cbi5ob21lLWRvY3Mge31cblxuLm5hdmJhciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjY2NjO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uYXZiYXIgYSB7XG4gIG1hcmdpbjogMCAxNXB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiAjMzMzO1xufVxuXG4uaGVybyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnaHR0cHM6Ly9rYXRoeWtvay5naXRodWIuaW8vTHRVeERlc2lnbkFzc2lnbWVudC9hc3NldHMvQmFubmVySW1nLnBuZycpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBjb2xvcjogI2ZmZjtcbiAgcGFkZGluZzogMTAwcHggMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc2VjdGlvbiB7XG4gIHBhZGRpbmc6IDUwcHggMTAlO1xufVxuXG5mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzO1xuICBjb2xvcjogI2ZmZjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4IDA7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/components/notification-page/notification-page.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/core/components/notification-page/notification-page.component.ts ***!
  \**********************************************************************************/
/*! exports provided: NotificationPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationPageComponent", function() { return NotificationPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/page-header/page-header.component */ "./src/app/shared/components/page-header/page-header.component.ts");
/* harmony import */ var _shared_components_page_header_back_page_header_back_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/page-header-back/page-header-back.component */ "./src/app/shared/components/page-header-back/page-header-back.component.ts");
/* harmony import */ var _shared_components_page_header_title_page_header_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/page-header-title/page-header-title.component */ "./src/app/shared/components/page-header-title/page-header-title.component.ts");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








class NotificationPageComponent {
    constructor(activatedRoute) {
        this.activatedRoute = activatedRoute;
    }
    ngOnInit() {
        this.activatedRoute.data.subscribe((data) => {
            this.data = data;
            switch (data.type) {
                case 'error':
                    this.textCssClass = 'text-danger';
                    break;
                case 'success':
                    this.textCssClass = 'text-success';
                    break;
                case 'info':
                    this.textCssClass = 'text-primary';
                    break;
            }
            if (!data.icon) {
                switch (data.type) {
                    case 'error':
                        data.icon = 'clear';
                        break;
                    case 'success':
                        data.icon = 'done';
                        break;
                    case 'info':
                        data.icon = 'info';
                        break;
                }
            }
        });
    }
}
NotificationPageComponent.ɵfac = function NotificationPageComponent_Factory(t) { return new (t || NotificationPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
NotificationPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationPageComponent, selectors: [["app-notification-page"]], decls: 11, vars: 6, consts: [["ariaLabel", "Back to homepage", 3, "link"], [1, "page-content", "notification-page__content"], [1, "notification-page__icon", 3, "ngClass"], [1, "mat-display-2", "notification-page__heading"]], template: function NotificationPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-page-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-page-header-back", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-page-header-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("link", "/");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.textCssClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.icon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.heading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.description);
    } }, directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_2__["PageHeaderComponent"], _shared_components_page_header_back_page_header_back_component__WEBPACK_IMPORTED_MODULE_3__["PageHeaderBackComponent"], _shared_components_page_header_title_page_header_title_component__WEBPACK_IMPORTED_MODULE_4__["PageHeaderTitleComponent"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_5__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: ["[_nghost-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n  flex-direction: column;\n}\n\n.notification-page__content[_ngcontent-%COMP%] {\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n\n.notification-page__icon[_ngcontent-%COMP%] {\n  font-size: 120px;\n  height: 120px;\n  width: 120px;\n}\n\n.notification-page__heading[_ngcontent-%COMP%] {\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9jb21wb25lbnRzL25vdGlmaWNhdGlvbi1wYWdlL25vdGlmaWNhdGlvbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb3JlL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uLXBhZ2Uvbm90aWZpY2F0aW9uLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGZsZXgtZ3JvdzogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm5vdGlmaWNhdGlvbi1wYWdlX19jb250ZW50IHtcbiAgZmxleC1ncm93OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm5vdGlmaWNhdGlvbi1wYWdlX19pY29uIHtcbiAgZm9udC1zaXplOiAxMjBweDtcbiAgaGVpZ2h0OiAxMjBweDtcbiAgd2lkdGg6IDEyMHB4O1xufVxuXG4ubm90aWZpY2F0aW9uLXBhZ2VfX2hlYWRpbmcge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notification-page',
                templateUrl: './notification-page.component.html',
                styleUrls: ['./notification-page.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/components/progress/progress.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/core/components/progress/progress.component.ts ***!
  \****************************************************************/
/*! exports provided: ProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressComponent", function() { return ProgressComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_store_shared_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/store/shared.actions */ "./src/app/shared/store/shared.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-progressbar */ "./node_modules/ngx-progressbar/__ivy_ngcc__/fesm2015/ngx-progressbar.js");





class ProgressComponent {
    constructor(store, ngProgress) {
        this.store = store;
        this.ngProgress = ngProgress;
    }
    ngOnInit() {
        this.progressRef = this.ngProgress.ref();
        this.progressRef.started.subscribe(() => this.store.dispatch(Object(_shared_store_shared_actions__WEBPACK_IMPORTED_MODULE_1__["loadingOn"])()));
        this.progressRef.completed.subscribe(() => this.store.dispatch(Object(_shared_store_shared_actions__WEBPACK_IMPORTED_MODULE_1__["loadingOff"])()));
    }
    ngOnDestroy() {
        this.progressRef.destroy();
    }
}
ProgressComponent.ɵfac = function ProgressComponent_Factory(t) { return new (t || ProgressComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_progressbar__WEBPACK_IMPORTED_MODULE_3__["NgProgress"])); };
ProgressComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProgressComponent, selectors: [["app-progress"]], decls: 1, vars: 0, template: function ProgressComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ng-progress");
    } }, directives: [ngx_progressbar__WEBPACK_IMPORTED_MODULE_3__["NgProgressComponent"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProgressComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-progress',
                templateUrl: './progress.component.html',
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: ngx_progressbar__WEBPACK_IMPORTED_MODULE_3__["NgProgress"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/ngrx-store-devtools.js");
/* harmony import */ var _app_store_app_store_reducers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-store/app-store.reducers */ "./src/app/core/app-store/app-store.reducers.ts");
/* harmony import */ var _app_store_app_store_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-store/app-store.effects */ "./src/app/core/app-store/app-store.effects.ts");
/* harmony import */ var _services_error_handler_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/error-handler.service */ "./src/app/core/services/error-handler.service.ts");
/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./interceptors */ "./src/app/core/interceptors/index.ts");
/* harmony import */ var _components_progress_progress_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/progress/progress.component */ "./src/app/core/components/progress/progress.component.ts");
/* harmony import */ var ngx_progressbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-progressbar */ "./node_modules/ngx-progressbar/__ivy_ngcc__/fesm2015/ngx-progressbar.js");
/* harmony import */ var ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-progressbar/http */ "./node_modules/ngx-progressbar/__ivy_ngcc__/fesm2015/ngx-progressbar-http.js");



















class CoreModule {
}
CoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CoreModule });
CoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CoreModule_Factory(t) { return new (t || CoreModule)(); }, providers: [
        ..._interceptors__WEBPACK_IMPORTED_MODULE_10__["httpInterceptorProviders"],
        { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], useClass: _services_error_handler_service__WEBPACK_IMPORTED_MODULE_9__["ErrorHandlerService"] },
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            //  ngrx
            _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot(_app_store_app_store_reducers__WEBPACK_IMPORTED_MODULE_7__["appReducers"]),
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forRoot(_app_store_app_store_effects__WEBPACK_IMPORTED_MODULE_8__["appEffects"]),
            _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production }),
            // ngProgess
            ngx_progressbar__WEBPACK_IMPORTED_MODULE_12__["NgProgressModule"].withConfig({ spinner: false }),
            ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_13__["NgProgressHttpModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CoreModule, { declarations: [_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_11__["ProgressComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsRootModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"], ngx_progressbar__WEBPACK_IMPORTED_MODULE_12__["NgProgressModule"], ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_13__["NgProgressHttpModule"]], exports: [_components_progress_progress_component__WEBPACK_IMPORTED_MODULE_11__["ProgressComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _components_progress_progress_component__WEBPACK_IMPORTED_MODULE_11__["ProgressComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    //  ngrx
                    _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["StoreModule"].forRoot(_app_store_app_store_reducers__WEBPACK_IMPORTED_MODULE_7__["appReducers"]),
                    _ngrx_effects__WEBPACK_IMPORTED_MODULE_5__["EffectsModule"].forRoot(_app_store_app_store_effects__WEBPACK_IMPORTED_MODULE_8__["appEffects"]),
                    _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_6__["StoreDevtoolsModule"].instrument({ maxAge: 25, logOnly: _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production }),
                    // ngProgess
                    ngx_progressbar__WEBPACK_IMPORTED_MODULE_12__["NgProgressModule"].withConfig({ spinner: false }),
                    ngx_progressbar_http__WEBPACK_IMPORTED_MODULE_13__["NgProgressHttpModule"],
                ],
                providers: [
                    ..._interceptors__WEBPACK_IMPORTED_MODULE_10__["httpInterceptorProviders"],
                    { provide: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], useClass: _services_error_handler_service__WEBPACK_IMPORTED_MODULE_9__["ErrorHandlerService"] },
                ],
                exports: [
                    _components_progress_progress_component__WEBPACK_IMPORTED_MODULE_11__["ProgressComponent"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/interceptors/action.interceptor.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/interceptors/action.interceptor.ts ***!
  \*********************************************************/
/*! exports provided: ActionInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionInterceptor", function() { return ActionInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class ActionInterceptor {
    constructor(router) {
        this.router = router;
    }
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                const responseStatusCode = event.status;
                this.statusCodeHandler(responseStatusCode);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                const errorStatusCode = error.status;
                this.statusCodeHandler(errorStatusCode);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
    statusCodeHandler(code) {
        switch (code) {
            case 401:
                this.router.navigate(['/login']);
                break;
        }
    }
}
ActionInterceptor.ɵfac = function ActionInterceptor_Factory(t) { return new (t || ActionInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
ActionInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ActionInterceptor, factory: ActionInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ActionInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/interceptors/index.ts":
/*!********************************************!*\
  !*** ./src/app/core/interceptors/index.ts ***!
  \********************************************/
/*! exports provided: httpInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function() { return httpInterceptorProviders; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _message_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./message.interceptor */ "./src/app/core/interceptors/message.interceptor.ts");
/* harmony import */ var _action_interceptor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./action.interceptor */ "./src/app/core/interceptors/action.interceptor.ts");



const httpInterceptorProviders = [
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _message_interceptor__WEBPACK_IMPORTED_MODULE_1__["MessageInterceptor"], multi: true },
    { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"], useClass: _action_interceptor__WEBPACK_IMPORTED_MODULE_2__["ActionInterceptor"], multi: true },
];


/***/ }),

/***/ "./src/app/core/interceptors/message.interceptor.ts":
/*!**********************************************************!*\
  !*** ./src/app/core/interceptors/message.interceptor.ts ***!
  \**********************************************************/
/*! exports provided: MessageInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageInterceptor", function() { return MessageInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _services_error_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/error.service */ "./src/app/core/services/error.service.ts");
/* harmony import */ var _shared_services_notification_bar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/notification-bar.service */ "./src/app/shared/services/notification-bar.service.ts");







class MessageInterceptor {
    constructor(errorService, notificationService) {
        this.errorService = errorService;
        this.notificationService = notificationService;
    }
    intercept(req, next) {
        return next.handle(req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((event) => {
            if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpResponse"]) {
                const responseData = event.body;
                if (responseData && responseData.message && !event.url.includes('/err-logs')) {
                    this.notificationService.showSuccess(responseData.message);
                }
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => {
            if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
                const errorMsg = this.errorService.getServerMessage(error);
                this.notificationService.showError(errorMsg);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        }));
    }
}
MessageInterceptor.ɵfac = function MessageInterceptor_Factory(t) { return new (t || MessageInterceptor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_notification_bar_service__WEBPACK_IMPORTED_MODULE_5__["NotificationBarService"])); };
MessageInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MessageInterceptor, factory: MessageInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessageInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_error_service__WEBPACK_IMPORTED_MODULE_4__["ErrorService"] }, { type: _shared_services_notification_bar_service__WEBPACK_IMPORTED_MODULE_5__["NotificationBarService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/error-handler.service.ts":
/*!********************************************************!*\
  !*** ./src/app/core/services/error-handler.service.ts ***!
  \********************************************************/
/*! exports provided: ErrorHandlerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerService", function() { return ErrorHandlerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _logger_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger.service */ "./src/app/core/services/logger.service.ts");




class ErrorHandlerService extends _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"] {
    constructor(loggerService) {
        super();
        this.loggerService = loggerService;
    }
    handleError(error) {
        if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
            this.loggerService.logError(error);
        }
        super.handleError(error);
    }
}
ErrorHandlerService.ɵfac = function ErrorHandlerService_Factory(t) { return new (t || ErrorHandlerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"])); };
ErrorHandlerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorHandlerService, factory: ErrorHandlerService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorHandlerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _logger_service__WEBPACK_IMPORTED_MODULE_2__["LoggerService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/services/error.service.ts":
/*!************************************************!*\
  !*** ./src/app/core/services/error.service.ts ***!
  \************************************************/
/*! exports provided: ErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorService", function() { return ErrorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ErrorService {
    getClientMessage(error) {
        return error.message || error.toString();
    }
    getServerMessage(error) {
        return (error.error && error.error.message) || error.statusText;
    }
}
ErrorService.ɵfac = function ErrorService_Factory(t) { return new (t || ErrorService)(); };
ErrorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ErrorService, factory: ErrorService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/core/services/logger.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/logger.service.ts ***!
  \*************************************************/
/*! exports provided: LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");





class LoggerService {
    constructor(http) {
        this.http = http;
    }
    logError(error) {
        const errMessage = this.createErrMessage(error);
        this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl}/err-logs`, errMessage).subscribe();
    }
    createErrMessage(error) {
        const date = new Date().toISOString();
        if (error instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpErrorResponse"]) {
            return {
                date,
                type: 'HTTP ERR',
                message: error.message,
                status: error.status,
            };
        }
        else if (error instanceof TypeError) {
            return {
                date,
                type: 'TYPE ERR',
                message: error.message,
            };
        }
        else if (error instanceof Error) {
            return {
                date,
                type: 'GENERAL ERR',
                message: error.message,
            };
        }
        else {
            return {
                date,
                type: 'UNKNOWN ERR',
                message: error.message,
            };
        }
    }
}
LoggerService.ɵfac = function LoggerService_Factory(t) { return new (t || LoggerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
LoggerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LoggerService, factory: LoggerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoggerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/posts/services/posts-api.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/features/posts/services/posts-api.service.ts ***!
  \**************************************************************/
/*! exports provided: PostsApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsApiService", function() { return PostsApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const POSTS_API_ENDPOINT = '/posts';
class PostsApiService {
    constructor(http) {
        this.http = http;
    }
    createItem(post) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl}${POSTS_API_ENDPOINT}`, post);
    }
    readItems() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl}${POSTS_API_ENDPOINT}`);
    }
    readItem(id) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl}${POSTS_API_ENDPOINT}/${id}`);
    }
    updateItem(id, changes) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl}${POSTS_API_ENDPOINT}/${id}`, changes);
    }
    deleteItem(id) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl}${POSTS_API_ENDPOINT}/${id}`);
    }
}
PostsApiService.ɵfac = function PostsApiService_Factory(t) { return new (t || PostsApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PostsApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostsApiService, factory: PostsApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/posts/store/posts.actions.ts":
/*!*******************************************************!*\
  !*** ./src/app/features/posts/store/posts.actions.ts ***!
  \*******************************************************/
/*! exports provided: createPostsItem, createPostsItemSuccess, createPostsItemFail, readPosts, readPostsSuccess, readPostsFail, readPostsItem, readPostsItemSuccess, readPostsItemFail, updatePostsItem, updatePostsItemSuccess, updatePostsItemFail, deletePostsItem, deletePostsItemSuccess, deletePostsItemFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPostsItem", function() { return createPostsItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPostsItemSuccess", function() { return createPostsItemSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPostsItemFail", function() { return createPostsItemFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readPosts", function() { return readPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readPostsSuccess", function() { return readPostsSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readPostsFail", function() { return readPostsFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readPostsItem", function() { return readPostsItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readPostsItemSuccess", function() { return readPostsItemSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readPostsItemFail", function() { return readPostsItemFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePostsItem", function() { return updatePostsItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePostsItemSuccess", function() { return updatePostsItemSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePostsItemFail", function() { return updatePostsItemFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePostsItem", function() { return deletePostsItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePostsItemSuccess", function() { return deletePostsItemSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePostsItemFail", function() { return deletePostsItemFail; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

// CRUD
// Create Post
const createPostsItem = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Posts] Create Post', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const createPostsItemSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Posts] Create Create Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const createPostsItemFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Posts] Create Create Fail');
// Read Posts
const readPosts = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Posts] Read Posts');
const readPostsSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Posts] Read Posts Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const readPostsFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Posts] Read Posts Fail');
// Read Post
const readPostsItem = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Posts] Read Post', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const readPostsItemSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Posts] Read Post Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const readPostsItemFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Posts] Read Post Fail');
// Update Post
const updatePostsItem = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Posts] Update Post', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updatePostsItemSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Posts] Update Post Success');
const updatePostsItemFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Posts] Update Post Fail');
// Delete Post
const deletePostsItem = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Posts] Delete Post', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deletePostsItemSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Posts] Delete Post Success');
const deletePostsItemFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Posts] Delete Post Fail');


/***/ }),

/***/ "./src/app/features/posts/store/posts.effects.ts":
/*!*******************************************************!*\
  !*** ./src/app/features/posts/store/posts.effects.ts ***!
  \*******************************************************/
/*! exports provided: PostsEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsEffects", function() { return PostsEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var _posts_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts.actions */ "./src/app/features/posts/store/posts.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_posts_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/posts-api.service */ "./src/app/features/posts/services/posts-api.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");









class PostsEffects {
    constructor(postsService, actions$, router) {
        this.postsService = postsService;
        this.actions$ = actions$;
        this.router = router;
        // CRUD
        this.createPost$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_posts_actions__WEBPACK_IMPORTED_MODULE_2__["createPostsItem"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(({ post }) => this.postsService.createItem(post).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => ({
            type: _posts_actions__WEBPACK_IMPORTED_MODULE_2__["createPostsItemSuccess"].type,
            post: response,
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({
            type: _posts_actions__WEBPACK_IMPORTED_MODULE_2__["createPostsItemFail"].type,
        }))))));
        this.readPosts$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_posts_actions__WEBPACK_IMPORTED_MODULE_2__["readPosts"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(() => this.postsService.readItems().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => ({
            type: _posts_actions__WEBPACK_IMPORTED_MODULE_2__["readPostsSuccess"].type,
            posts: response,
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({
            type: _posts_actions__WEBPACK_IMPORTED_MODULE_2__["readPostsFail"].type,
        }))))));
        this.readPost$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_posts_actions__WEBPACK_IMPORTED_MODULE_2__["readPostsItem"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(({ id }) => this.postsService.readItem(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => ({
            type: _posts_actions__WEBPACK_IMPORTED_MODULE_2__["readPostsItemSuccess"].type,
            post: response,
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({
            type: _posts_actions__WEBPACK_IMPORTED_MODULE_2__["readPostsItemFail"].type,
        }))))));
        this.updatePost$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_posts_actions__WEBPACK_IMPORTED_MODULE_2__["updatePostsItem"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])((({ updatePost }) => this.postsService.updateItem(updatePost.id, updatePost.changes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => ({
            type: _posts_actions__WEBPACK_IMPORTED_MODULE_2__["updatePostsItemSuccess"].type,
            post: response,
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({
            type: _posts_actions__WEBPACK_IMPORTED_MODULE_2__["updatePostsItemFail"].type,
        })))))));
        this.deletePost$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_posts_actions__WEBPACK_IMPORTED_MODULE_2__["deletePostsItem"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(({ id }) => this.postsService.deleteItem(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => ({
            type: _posts_actions__WEBPACK_IMPORTED_MODULE_2__["deletePostsItemSuccess"].type,
            post: response,
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({
            type: _posts_actions__WEBPACK_IMPORTED_MODULE_2__["deletePostsItemFail"].type,
        }))))));
        this.navigate$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_posts_actions__WEBPACK_IMPORTED_MODULE_2__["createPostsItemSuccess"].type, _posts_actions__WEBPACK_IMPORTED_MODULE_2__["updatePostsItemSuccess"].type, _posts_actions__WEBPACK_IMPORTED_MODULE_2__["deletePostsItemSuccess"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(({ user }) => this.router.navigate(['/', 'posts']))), { dispatch: false });
    }
}
PostsEffects.ɵfac = function PostsEffects_Factory(t) { return new (t || PostsEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_posts_api_service__WEBPACK_IMPORTED_MODULE_5__["PostsApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"])); };
PostsEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PostsEffects, factory: PostsEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostsEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _services_posts_api_service__WEBPACK_IMPORTED_MODULE_5__["PostsApiService"] }, { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/posts/store/posts.reducer.ts":
/*!*******************************************************!*\
  !*** ./src/app/features/posts/store/posts.reducer.ts ***!
  \*******************************************************/
/*! exports provided: postsReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postsReducer", function() { return postsReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _posts_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./posts.state */ "./src/app/features/posts/store/posts.state.ts");
/* harmony import */ var _posts_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts.actions */ "./src/app/features/posts/store/posts.actions.ts");



const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(_posts_state__WEBPACK_IMPORTED_MODULE_1__["initialPostsState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_posts_actions__WEBPACK_IMPORTED_MODULE_2__["createPostsItemSuccess"], (state, { post }) => _posts_state__WEBPACK_IMPORTED_MODULE_1__["postsAdapter"].addOne(post, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_posts_actions__WEBPACK_IMPORTED_MODULE_2__["readPostsSuccess"], (state, { posts }) => _posts_state__WEBPACK_IMPORTED_MODULE_1__["postsAdapter"].setAll(posts, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_posts_actions__WEBPACK_IMPORTED_MODULE_2__["readPostsItemSuccess"], (state, { post }) => _posts_state__WEBPACK_IMPORTED_MODULE_1__["postsAdapter"].upsertOne(post, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_posts_actions__WEBPACK_IMPORTED_MODULE_2__["updatePostsItem"], (state, { updatePost }) => _posts_state__WEBPACK_IMPORTED_MODULE_1__["postsAdapter"].updateOne(updatePost, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_posts_actions__WEBPACK_IMPORTED_MODULE_2__["deletePostsItem"], (state, { id }) => _posts_state__WEBPACK_IMPORTED_MODULE_1__["postsAdapter"].removeOne(id, state)));
function postsReducer(state, action) {
    return reducer(state, action);
}


/***/ }),

/***/ "./src/app/features/posts/store/posts.state.ts":
/*!*****************************************************!*\
  !*** ./src/app/features/posts/store/posts.state.ts ***!
  \*****************************************************/
/*! exports provided: postsAdapter, initialPostsState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "postsAdapter", function() { return postsAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialPostsState", function() { return initialPostsState; });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/__ivy_ngcc__/fesm2015/ngrx-entity.js");

const postsAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])({
    selectId: (item) => item.id,
    sortComparer: false,
});
const initialPostsState = postsAdapter.getInitialState({});


/***/ }),

/***/ "./src/app/features/todos/services/todos-api.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/features/todos/services/todos-api.service.ts ***!
  \**************************************************************/
/*! exports provided: TodosApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosApiService", function() { return TodosApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const TODOS_API_ENDPOINT = '/todos';
class TodosApiService {
    constructor(http) {
        this.http = http;
    }
    createItem(todo) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl}${TODOS_API_ENDPOINT}`, todo);
    }
    readItems() {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl}${TODOS_API_ENDPOINT}`);
    }
    updateItem(id, changes) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl}${TODOS_API_ENDPOINT}/${id}`, changes);
    }
    deleteItem(id) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].baseUrl}${TODOS_API_ENDPOINT}/${id}`);
    }
}
TodosApiService.ɵfac = function TodosApiService_Factory(t) { return new (t || TodosApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
TodosApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TodosApiService, factory: TodosApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodosApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/todos/store/todos.actions.ts":
/*!*******************************************************!*\
  !*** ./src/app/features/todos/store/todos.actions.ts ***!
  \*******************************************************/
/*! exports provided: createTodosItem, createTodosItemSuccess, createTodosItemFail, readTodos, readTodosSuccess, readTodosFail, updateTodosItem, updateTodosItemSuccess, updateTodosItemFail, deleteTodosItem, deleteTodosItemSuccess, deleteTodosItemFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTodosItem", function() { return createTodosItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTodosItemSuccess", function() { return createTodosItemSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTodosItemFail", function() { return createTodosItemFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readTodos", function() { return readTodos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readTodosSuccess", function() { return readTodosSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readTodosFail", function() { return readTodosFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTodosItem", function() { return updateTodosItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTodosItemSuccess", function() { return updateTodosItemSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateTodosItemFail", function() { return updateTodosItemFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTodosItem", function() { return deleteTodosItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTodosItemSuccess", function() { return deleteTodosItemSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTodosItemFail", function() { return deleteTodosItemFail; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

const createTodosItem = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Todos/API] Add Item', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const createTodosItemSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Todos/API] Add Item Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const createTodosItemFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Todos/API] Add Item FAIL');
const readTodos = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Todos/API] Fetch All');
const readTodosSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Todos/API] Fetch All Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const readTodosFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Todos/API] Fetch All FAIL');
const updateTodosItem = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Todos/API] Update Item', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const updateTodosItemSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Todos/API] Update Item Success');
const updateTodosItemFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Todos/API] Update Item FAIL');
const deleteTodosItem = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Todos/API] Delete Item', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const deleteTodosItemSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Todos/API] Delete Item Success');
const deleteTodosItemFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Todos/API] Delete Item FAIL');


/***/ }),

/***/ "./src/app/features/todos/store/todos.effects.ts":
/*!*******************************************************!*\
  !*** ./src/app/features/todos/store/todos.effects.ts ***!
  \*******************************************************/
/*! exports provided: TodosEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodosEffects", function() { return TodosEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var _todos_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todos.actions */ "./src/app/features/todos/store/todos.actions.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _services_todos_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/todos-api.service */ "./src/app/features/todos/services/todos-api.service.ts");








class TodosEffects {
    constructor(actions, todosService) {
        this.actions = actions;
        this.todosService = todosService;
        this.createTodosItem$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_todos_actions__WEBPACK_IMPORTED_MODULE_2__["createTodosItem"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(({ todo }) => this.todosService.createItem(todo).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => ({
            type: _todos_actions__WEBPACK_IMPORTED_MODULE_2__["createTodosItemSuccess"].type,
            todo: response,
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ type: _todos_actions__WEBPACK_IMPORTED_MODULE_2__["createTodosItemFail"].type }))))));
        this.readTodosItems$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_todos_actions__WEBPACK_IMPORTED_MODULE_2__["readTodos"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(() => this.todosService.readItems().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => ({
            type: _todos_actions__WEBPACK_IMPORTED_MODULE_2__["readTodosSuccess"].type,
            todos: response,
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ type: _todos_actions__WEBPACK_IMPORTED_MODULE_2__["readTodosFail"].type }))))));
        this.updateTodosItem$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_todos_actions__WEBPACK_IMPORTED_MODULE_2__["updateTodosItem"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(({ updateTodo }) => this.todosService.updateItem(updateTodo.id, updateTodo.changes).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => ({ type: _todos_actions__WEBPACK_IMPORTED_MODULE_2__["updateTodosItemSuccess"].type })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ type: _todos_actions__WEBPACK_IMPORTED_MODULE_2__["updateTodosItemFail"].type }))))));
        this.deleteTodosItem$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_todos_actions__WEBPACK_IMPORTED_MODULE_2__["deleteTodosItem"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mergeMap"])(({ todoId }) => this.todosService.deleteItem(todoId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => ({ type: _todos_actions__WEBPACK_IMPORTED_MODULE_2__["deleteTodosItemSuccess"].type })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["of"])({ type: _todos_actions__WEBPACK_IMPORTED_MODULE_2__["deleteTodosItemFail"].type }))))));
    }
}
TodosEffects.ɵfac = function TodosEffects_Factory(t) { return new (t || TodosEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_todos_api_service__WEBPACK_IMPORTED_MODULE_5__["TodosApiService"])); };
TodosEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TodosEffects, factory: TodosEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TodosEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _services_todos_api_service__WEBPACK_IMPORTED_MODULE_5__["TodosApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/todos/store/todos.reducer.ts":
/*!*******************************************************!*\
  !*** ./src/app/features/todos/store/todos.reducer.ts ***!
  \*******************************************************/
/*! exports provided: todosReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todosReducer", function() { return todosReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _todos_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todos.state */ "./src/app/features/todos/store/todos.state.ts");
/* harmony import */ var _todos_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todos.actions */ "./src/app/features/todos/store/todos.actions.ts");



const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(_todos_state__WEBPACK_IMPORTED_MODULE_1__["initialTodosState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_todos_actions__WEBPACK_IMPORTED_MODULE_2__["createTodosItemSuccess"], (state, { todo }) => _todos_state__WEBPACK_IMPORTED_MODULE_1__["todosAdapter"].addOne(todo, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_todos_actions__WEBPACK_IMPORTED_MODULE_2__["readTodosSuccess"], (state, { todos }) => _todos_state__WEBPACK_IMPORTED_MODULE_1__["todosAdapter"].setAll(todos, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_todos_actions__WEBPACK_IMPORTED_MODULE_2__["updateTodosItem"], (state, { updateTodo }) => _todos_state__WEBPACK_IMPORTED_MODULE_1__["todosAdapter"].updateOne(updateTodo, state)), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_todos_actions__WEBPACK_IMPORTED_MODULE_2__["deleteTodosItem"], (state, { todoId }) => _todos_state__WEBPACK_IMPORTED_MODULE_1__["todosAdapter"].removeOne(todoId, state)));
function todosReducer(state, action) {
    return reducer(state, action);
}


/***/ }),

/***/ "./src/app/features/todos/store/todos.state.ts":
/*!*****************************************************!*\
  !*** ./src/app/features/todos/store/todos.state.ts ***!
  \*****************************************************/
/*! exports provided: todosAdapter, initialTodosState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todosAdapter", function() { return todosAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialTodosState", function() { return initialTodosState; });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/__ivy_ngcc__/fesm2015/ngrx-entity.js");

const todosAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])({
    selectId: (item) => item.id,
    sortComparer: false,
});
const initialTodosState = todosAdapter.getInitialState({});


/***/ }),

/***/ "./src/app/features/users/services/users-api.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/features/users/services/users-api.service.ts ***!
  \**************************************************************/
/*! exports provided: UsersApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersApiService", function() { return UsersApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




const USERS_API_ENDPOINT = '/users';
class UsersApiService {
    constructor(http) {
        this.http = http;
    }
    readItems(collectionParams) {
        var _a, _b;
        let params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        if ((collectionParams === null || collectionParams === void 0 ? void 0 : collectionParams.filter) !== '') {
            params = params.set('filter', collectionParams === null || collectionParams === void 0 ? void 0 : collectionParams.filter);
        }
        params = params.set('sortDirection', collectionParams === null || collectionParams === void 0 ? void 0 : collectionParams.sortDirection);
        params = params.set('sortField', collectionParams === null || collectionParams === void 0 ? void 0 : collectionParams.sortField);
        params = params.set('pageIndex', (_a = collectionParams === null || collectionParams === void 0 ? void 0 : collectionParams.pageIndex) === null || _a === void 0 ? void 0 : _a.toString());
        params = params.set('pageSize', (_b = collectionParams === null || collectionParams === void 0 ? void 0 : collectionParams.pageSize) === null || _b === void 0 ? void 0 : _b.toString());
        return this.http.get(`${document.baseURI}/assets${USERS_API_ENDPOINT}`, { params });
    }
}
UsersApiService.ɵfac = function UsersApiService_Factory(t) { return new (t || UsersApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
UsersApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersApiService, factory: UsersApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/users/store/users.actions.ts":
/*!*******************************************************!*\
  !*** ./src/app/features/users/store/users.actions.ts ***!
  \*******************************************************/
/*! exports provided: readUsers, readUsersSuccess, readUsersFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readUsers", function() { return readUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readUsersSuccess", function() { return readUsersSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "readUsersFail", function() { return readUsersFail; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

const readUsers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Users/API] Fetch All Users', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const readUsersSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Users/API] Fetch All Users Success', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const readUsersFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Users/API] Fetch All Users Fail');


/***/ }),

/***/ "./src/app/features/users/store/users.effects.ts":
/*!*******************************************************!*\
  !*** ./src/app/features/users/store/users.effects.ts ***!
  \*******************************************************/
/*! exports provided: UsersEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersEffects", function() { return UsersEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _users_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users.actions */ "./src/app/features/users/store/users.actions.ts");
/* harmony import */ var _services_users_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/users-api.service */ "./src/app/features/users/services/users-api.service.ts");








class UsersEffects {
    constructor(actions, usersApiService) {
        this.actions = actions;
        this.usersApiService = usersApiService;
        this.readUsersItems$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_users_actions__WEBPACK_IMPORTED_MODULE_4__["readUsers"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(({ collectionParams }) => this.usersApiService.readItems(collectionParams).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((response) => ({
            type: _users_actions__WEBPACK_IMPORTED_MODULE_4__["readUsersSuccess"].type,
            users: response,
            totalCount: response.length,
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(() => Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])({ type: _users_actions__WEBPACK_IMPORTED_MODULE_4__["readUsersFail"].type }))))));
    }
}
UsersEffects.ɵfac = function UsersEffects_Factory(t) { return new (t || UsersEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_users_api_service__WEBPACK_IMPORTED_MODULE_5__["UsersApiService"])); };
UsersEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UsersEffects, factory: UsersEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _services_users_api_service__WEBPACK_IMPORTED_MODULE_5__["UsersApiService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/users/store/users.reducer.ts":
/*!*******************************************************!*\
  !*** ./src/app/features/users/store/users.reducer.ts ***!
  \*******************************************************/
/*! exports provided: usersReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersReducer", function() { return usersReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _users_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./users.state */ "./src/app/features/users/store/users.state.ts");
/* harmony import */ var _users_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.actions */ "./src/app/features/users/store/users.actions.ts");



const reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(_users_state__WEBPACK_IMPORTED_MODULE_1__["initialUsersState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_users_actions__WEBPACK_IMPORTED_MODULE_2__["readUsersSuccess"], (state, { users, totalCount }) => {
    return _users_state__WEBPACK_IMPORTED_MODULE_1__["usersAdapter"].setAll(users, Object.assign(Object.assign({}, state), { totalCount }));
}));
function usersReducer(state, action) {
    return reducer(state, action);
}


/***/ }),

/***/ "./src/app/features/users/store/users.state.ts":
/*!*****************************************************!*\
  !*** ./src/app/features/users/store/users.state.ts ***!
  \*****************************************************/
/*! exports provided: usersAdapter, initialUsersState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usersAdapter", function() { return usersAdapter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialUsersState", function() { return initialUsersState; });
/* harmony import */ var _ngrx_entity__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/entity */ "./node_modules/@ngrx/entity/__ivy_ngcc__/fesm2015/ngrx-entity.js");

const usersAdapter = Object(_ngrx_entity__WEBPACK_IMPORTED_MODULE_0__["createEntityAdapter"])({
    selectId: (item) => item.id,
    sortComparer: false,
});
const initialUsersState = usersAdapter.getInitialState({
    totalCount: 0,
});


/***/ }),

/***/ "./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts ***!
  \******************************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");





class ConfirmDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
}
ConfirmDialogComponent.ɵfac = function ConfirmDialogComponent_Factory(t) { return new (t || ConfirmDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
ConfirmDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmDialogComponent, selectors: [["app-confirm-dialog"]], decls: 10, vars: 7, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", "", 1, "confirm-dialog__actions"], ["mat-flat-button", "", 3, "mat-dialog-close"], ["mat-flat-button", "", 3, "mat-dialog-close", "color"]], template: function ConfirmDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title || "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.message);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.btnCancel || "Cancel", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true)("color", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.btnOk || "OK", " ");
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"]], styles: [".confirm-dialog__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.dialog-header-bottom-border[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e0e0e0;\n  margin-left: -20px;\n  margin-right: -20px;\n  margin-bottom: 15px;\n}\n\nbutton[_ngcontent-%COMP%] {\n  margin-left: 15px;\n}\n\n.fill[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsT0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29uZmlybS1kaWFsb2cvY29uZmlybS1kaWFsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29uZmlybS1kaWFsb2dfX2FjdGlvbnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4uZGlhbG9nLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5kaWFsb2ctaGVhZGVyLWJvdHRvbS1ib3JkZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2UwZTBlMDtcbiAgbWFyZ2luLWxlZnQ6IC0yMHB4O1xuICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG5idXR0b24ge1xuICBtYXJnaW4tbGVmdDogMTVweDtcbn1cblxuLmZpbGwge1xuICBmbGV4OiAxO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-confirm-dialog',
                templateUrl: './confirm-dialog.component.html',
                styleUrls: ['./confirm-dialog.component.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/new-booking-dialog/new-booking-dialog.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/new-booking-dialog/new-booking-dialog.component.ts ***!
  \**************************************************************************************/
/*! exports provided: NewBookingDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewBookingDialogComponent", function() { return NewBookingDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/collections.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");















function NewBookingDialogComponent_th_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewBookingDialogComponent_td_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", element_r30.Code, " ");
} }
function NewBookingDialogComponent_th_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewBookingDialogComponent_td_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r31.Description, " ");
} }
function NewBookingDialogComponent_th_33_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Branch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewBookingDialogComponent_td_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", element_r32.Branch, " ");
} }
function NewBookingDialogComponent_th_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Quantity");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewBookingDialogComponent_td_37_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r33 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", element_r33.Quantity, " ");
} }
function NewBookingDialogComponent_th_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "StartDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewBookingDialogComponent_td_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", element_r34.StartDate, " ");
} }
function NewBookingDialogComponent_th_42_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "EndDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewBookingDialogComponent_td_43_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", element_r35.EndDate, " ");
} }
function NewBookingDialogComponent_th_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewBookingDialogComponent_td_46_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewBookingDialogComponent_td_46_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r38); const element_r36 = ctx.$implicit; const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r37.onDelete(element_r36); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-icon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewBookingDialogComponent_tr_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 42);
} }
function NewBookingDialogComponent_tr_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 43);
} }
function NewBookingDialogComponent_th_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "th", 44);
} }
function NewBookingDialogComponent_td_73_Template(rf, ctx) { if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-checkbox", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewBookingDialogComponent_td_73_Template_mat_checkbox_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); return $event.stopPropagation(); })("change", function NewBookingDialogComponent_td_73_Template_mat_checkbox_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r42); const row_r40 = ctx.$implicit; const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return $event ? ctx_r43.selection.toggle(row_r40) : null; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r40 = ctx.$implicit;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx_r17.selection.isSelected(row_r40));
} }
function NewBookingDialogComponent_th_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewBookingDialogComponent_td_76_Template(rf, ctx) { if (rf & 1) {
    const _r46 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewBookingDialogComponent_td_76_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r46); const element_r44 = ctx.$implicit; const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r45.selection.toggle(element_r44); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", element_r44.Code, " ");
} }
function NewBookingDialogComponent_th_78_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewBookingDialogComponent_td_79_Template(rf, ctx) { if (rf & 1) {
    const _r49 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewBookingDialogComponent_td_79_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r49); const element_r47 = ctx.$implicit; const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r48.selection.toggle(element_r47); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r47.Description, " ");
} }
function NewBookingDialogComponent_th_81_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Branch");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewBookingDialogComponent_td_82_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewBookingDialogComponent_td_82_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r52); const element_r50 = ctx.$implicit; const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r51.selection.toggle(element_r50); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r50 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", element_r50.Branch, " ");
} }
function NewBookingDialogComponent_th_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Available");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NewBookingDialogComponent_td_85_Template(rf, ctx) { if (rf & 1) {
    const _r55 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewBookingDialogComponent_td_85_Template_td_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r55); const element_r53 = ctx.$implicit; const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r54.selection.toggle(element_r53); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const element_r53 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", element_r53.Available, " ");
} }
function NewBookingDialogComponent_tr_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 42);
} }
function NewBookingDialogComponent_tr_87_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 43);
} }
function NewBookingDialogComponent_div_121_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", "assets/WeddingHireItems" + ctx_r28.getImageNumber(ctx_r28.selectedItem.Code) + ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function NewBookingDialogComponent_div_122_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class BookingLine {
}
class HireableItem {
}
class NewBookingDialogComponent {
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.displayedColumns = [];
        this.displayedSearchColumns = [];
        this.allHireableItems = [
            { Code: '001', Description: 'Dining table', Branch: 'Avonhead', Available: 58 },
            { Code: '002', Description: 'Dining chair', Branch: 'Avonhead', Available: 448 },
            { Code: '003', Description: 'Cutlery sets', Branch: 'Sydenham', Available: 514 },
            { Code: '004', Description: 'Placemats', Branch: 'Sydenham', Available: 475 },
            { Code: '005', Description: 'Lectern', Branch: 'Sydenham', Available: 0 },
            { Code: '006', Description: '14m Red carpet', Branch: 'Avonhead', Available: 3 },
            { Code: '007', Description: '2m White Ribbons', Branch: 'Avonhead', Available: 1022 },
            { Code: '008', Description: '2m Pale Pink Ribbons', Branch: 'Avonhead', Available: 922 },
            { Code: '009', Description: 'Dinner plates', Branch: 'Sydenham', Available: 740 },
            { Code: '010', Description: 'Side plates', Branch: 'Avonhead', Available: 871 },
            { Code: '011', Description: 'Deck chairs', Branch: 'Avonhead', Available: 58 },
            { Code: '012', Description: '45sqm Marqee', Branch: 'Avonhead', Available: 2 },
            { Code: '013', Description: '90sqm Marqee', Branch: 'Sydenham', Available: 1 },
            { Code: '014', Description: 'Blue glass vase', Branch: 'Sydenham', Available: 32 },
            { Code: '015', Description: 'Yellow glass vase', Branch: 'Sydenham', Available: 0 },
            { Code: '016', Description: '10m White carpet', Branch: 'Avonhead', Available: 2 },
            { Code: '017', Description: 'Speaker sound system', Branch: 'Avonhead', Available: 2 },
            { Code: '018', Description: 'Speaker sound system', Branch: 'Sydenham', Available: 1 },
            { Code: '019', Description: 'White napkin', Branch: 'Sydenham', Available: 212 },
            { Code: '020', Description: 'Blue napkin', Branch: 'Avonhead', Available: 142 },
        ];
        this.keywords = '';
        this.selectedItem = {
            Code: '',
            Description: '',
            Branch: '',
            Available: 0,
        };
    }
    getImageNumber(code) {
        return parseInt(code) % 3 + 1;
    }
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSourceForSearchTable.data.length;
        return numSelected == numRows;
    }
    onBookClicked() {
        let existingItems = this.dataSourceForTable.data;
        let newItem = {
            Code: this.selectedItem.Code,
            Description: this.selectedItem.Description,
            Branch: this.selectedItem.Branch,
            Quantity: parseInt(this.quantity),
            StartDate: new Date(this.bookingStart),
            EndDate: new Date(this.bookingEnd),
        };
        this.dataSourceForTable = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([...existingItems, newItem]);
    }
    toggleAllRows() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSourceForSearchTable.data.forEach(row => this.selection.select(row));
    }
    ngOnInit() {
        this.dataSourceForTable = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"]([]);
        this.dataSourceForSearchTable = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](this.allHireableItems);
        this.setDisplayedColumns();
        const initialSelection = [];
        const allowMultiSelect = false;
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["SelectionModel"](allowMultiSelect, initialSelection);
        this.selection.changed.subscribe({
            next: this.setHireableItem.bind(this),
            error: this.handleError.bind(this)
        });
    }
    setHireableItem(event) {
        if (event.added.length === 1) {
            let itemAdded = event.added[0];
            this.selectedItem = Object.assign({}, itemAdded);
        }
        else {
            this.selectedItem = null;
        }
    }
    handleError(error) {
    }
    setDisplayedColumns() {
        this.displayedColumns = ['Code', 'Description', 'Branch', 'Quantity', 'StartDate', 'EndDate', 'Actions'];
        this.displayedSearchColumns = ['select', 'Code', 'Description', 'Branch', 'Available'];
    }
    onSearchClicked() {
        let items = this.allHireableItems.filter(x => x.Description.toLocaleLowerCase().includes(this.keywords.toLocaleLowerCase()));
        this.dataSourceForSearchTable = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](items);
    }
    onDelete(element) {
        let newItems = this.dataSourceForTable.data.filter(x => x !== element);
        this.dataSourceForTable = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](newItems);
    }
}
NewBookingDialogComponent.ɵfac = function NewBookingDialogComponent_Factory(t) { return new (t || NewBookingDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])); };
NewBookingDialogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewBookingDialogComponent, selectors: [["app-new-booking-dialog"]], decls: 123, vars: 25, consts: [[1, "dialog-header"], ["mat-dialog-title", ""], [1, "fill"], ["mat-stroked-button", "", 3, "mat-dialog-close", "color"], ["mat-stroked-button", "", 3, "mat-dialog-close"], [1, "dialog-header-bottom-border"], ["mat-dialog-content", ""], [1, "flex-container"], ["appearance", "outline", "floatLabel", "always"], ["matInput", ""], ["matInput", "", "rows", "4"], [1, "booking-line-table-container"], ["mat-table", "", "matSort", "", "matSortDisableClear", "", 1, "w-100", 3, "dataSource"], ["matColumnDef", "Code"], ["mat-header-cell", "", "mat-sort-header", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Description"], ["matColumnDef", "Branch"], ["matColumnDef", "Quantity"], ["matColumnDef", "StartDate"], ["matColumnDef", "EndDate"], ["matColumnDef", "Actions"], ["mat-header-row", "", 4, "matHeaderRowDef", "matHeaderRowDefSticky"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "search-box-header"], [1, "search-box"], [1, "flex-container", 2, "margin-top", "15px"], ["matInput", "", 3, "ngModel", "ngModelChange"], [1, "fill", 2, "margin-right", "15px"], ["mat-stroked-button", "", "color", "primary", 1, "full-width", 3, "click"], [1, "search-table-container"], ["matColumnDef", "select"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["matColumnDef", "Available"], ["mat-stroked-button", "", "color", "primary", 1, "full-width"], ["mat-stroked-button", "", "color", "accent", 1, "full-width", 3, "click"], ["matInput", "", 3, "readonly", "value"], [4, "ngIf"], ["mat-header-cell", "", "mat-sort-header", ""], ["mat-cell", ""], ["mat-icon-button", "", 3, "click"], ["mat-header-row", ""], ["mat-row", ""], ["mat-header-cell", ""], [3, "checked", "click", "change"], ["mat-cell", "", 3, "click"], [2, "height", "200px", 3, "src"], ["src", "https://calendar.google.com/calendar/embed?src=g158je1dkc4hk36uvafj8aerc0%40group.calendar.google.com&ctz=Pacific%2FAuckland", "width", "800", "height", "600", "frameborder", "0", "scrolling", "no", 2, "border", "0"]], template: function NewBookingDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Contact Person");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Delivery address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Booking notes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "textarea", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](26, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, NewBookingDialogComponent_th_27_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, NewBookingDialogComponent_td_28_Template, 2, 1, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](29, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, NewBookingDialogComponent_th_30_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, NewBookingDialogComponent_td_31_Template, 2, 1, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](32, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](33, NewBookingDialogComponent_th_33_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, NewBookingDialogComponent_td_34_Template, 2, 1, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](35, 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, NewBookingDialogComponent_th_36_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](37, NewBookingDialogComponent_td_37_Template, 2, 1, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](38, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, NewBookingDialogComponent_th_39_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, NewBookingDialogComponent_td_40_Template, 2, 1, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](41, 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](42, NewBookingDialogComponent_th_42_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](43, NewBookingDialogComponent_td_43_Template, 2, 1, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](44, 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, NewBookingDialogComponent_th_45_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, NewBookingDialogComponent_td_46_Template, 4, 0, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, NewBookingDialogComponent_tr_47_Template, 1, 0, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](48, NewBookingDialogComponent_tr_48_Template, 1, 0, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h4", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Search items for hire");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Keywords");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewBookingDialogComponent_Template_input_ngModelChange_56_listener($event) { return ctx.keywords = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Availability start date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Availability end date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewBookingDialogComponent_Template_button_click_67_listener() { return ctx.onSearchClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "table", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](71, 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](72, NewBookingDialogComponent_th_72_Template, 1, 0, "th", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](73, NewBookingDialogComponent_td_73_Template, 2, 1, "td", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](74, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](75, NewBookingDialogComponent_th_75_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](76, NewBookingDialogComponent_td_76_Template, 2, 1, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](77, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](78, NewBookingDialogComponent_th_78_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](79, NewBookingDialogComponent_td_79_Template, 2, 1, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](80, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](81, NewBookingDialogComponent_th_81_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](82, NewBookingDialogComponent_td_82_Template, 2, 1, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](83, 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, NewBookingDialogComponent_th_84_Template, 2, 0, "th", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, NewBookingDialogComponent_td_85_Template, 2, 1, "td", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, NewBookingDialogComponent_tr_86_Template, 1, 0, "tr", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](87, NewBookingDialogComponent_tr_87_Template, 1, 0, "tr", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "button", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Email us to enquire about special orders");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Branch");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewBookingDialogComponent_Template_input_ngModelChange_95_listener($event) { return ctx.selectedItem.Branch = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Booking start");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewBookingDialogComponent_Template_input_ngModelChange_99_listener($event) { return ctx.bookingStart = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Booking end");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewBookingDialogComponent_Template_input_ngModelChange_103_listener($event) { return ctx.bookingEnd = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Quantity");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NewBookingDialogComponent_Template_input_ngModelChange_108_listener($event) { return ctx.quantity = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NewBookingDialogComponent_Template_button_click_110_listener() { return ctx.onBookClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, "Book");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](116, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "mat-form-field", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "input", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](121, NewBookingDialogComponent_div_121_Template, 2, 1, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](122, NewBookingDialogComponent_div_122_Template, 2, 0, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data.title || "Confirm");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", true)("color", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.btnOk || "Save", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mat-dialog-close", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.btnCancel || "Cancel", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSourceForTable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.keywords);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.dataSourceForSearchTable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedSearchColumns)("matHeaderRowDefSticky", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedSearchColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.selectedItem.Branch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bookingStart);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.bookingEnd);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true)("value", ctx.selectedItem == null ? null : ctx.selectedItem.Code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("readonly", true)("value", ctx.selectedItem == null ? null : ctx.selectedItem.Description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedItem.Code);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.selectedItem.Code);
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogClose"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_5__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSort"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_sort__WEBPACK_IMPORTED_MODULE_7__["MatSortHeader"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__["MatIcon"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_11__["MatCheckbox"]], styles: [".confirm-dialog__actions[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n\n.dialog-header[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.dialog-header-bottom-border[_ngcontent-%COMP%] {\n  border-bottom: 1px solid #e0e0e0;\n  margin-left: -20px;\n  margin-right: -20px;\n  margin-bottom: 15px;\n}\n\ntable[_ngcontent-%COMP%] {\n  margin-top: 15px;\n}\n\n.full-width[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\nbutton[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-left: 15px;\n}\n\n.fill[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.flex-container[_ngcontent-%COMP%] {\n  display: flex;\n}\n\nmat-form-field[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-right: 15px;\n}\n\n.booking-line-table-container[_ngcontent-%COMP%] {\n  min-height: 200px;\n}\n\n.mat-dialog-content[_ngcontent-%COMP%] {\n  max-height: none;\n}\n\n.search-table-container[_ngcontent-%COMP%] {\n  min-height: 400px;\n}\n\n.search-box[_ngcontent-%COMP%] {\n  background-color: #a5ceff40;\n  padding: 20px;\n}\n\n.search-box-header[_ngcontent-%COMP%] {\n  margin-bottom: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbmV3LWJvb2tpbmctZGlhbG9nL25ldy1ib29raW5nLWRpYWxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSx5QkFBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsZ0NBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxXQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsT0FBQTtBQUNGOztBQUVBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsT0FBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxpQkFBQTtBQUNGOztBQUVBO0VBQ0UsZ0JBQUE7QUFDRjs7QUFFQTtFQUNFLGlCQUFBO0FBQ0Y7O0FBRUE7RUFDRSwyQkFBQTtFQUNBLGFBQUE7QUFDRjs7QUFFQTtFQUNFLGtCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9uZXctYm9va2luZy1kaWFsb2cvbmV3LWJvb2tpbmctZGlhbG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbmZpcm0tZGlhbG9nX19hY3Rpb25zIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmRpYWxvZy1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4uZGlhbG9nLWhlYWRlci1ib3R0b20tYm9yZGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlMGUwZTA7XG4gIG1hcmdpbi1sZWZ0OiAtMjBweDtcbiAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbn1cblxudGFibGUge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xufVxuXG4uZnVsbC13aWR0aCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5idXR0b246bm90KDpmaXJzdC1vZi10eXBlKSB7XG4gIG1hcmdpbi1sZWZ0OiAxNXB4O1xufVxuXG4uZmlsbCB7XG4gIGZsZXg6IDE7XG59XG5cbi5mbGV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgZmxleDogMTtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG4uYm9va2luZy1saW5lLXRhYmxlLWNvbnRhaW5lciB7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xufVxuXG4ubWF0LWRpYWxvZy1jb250ZW50IHtcbiAgbWF4LWhlaWdodDogbm9uZTtcbn1cblxuLnNlYXJjaC10YWJsZS1jb250YWluZXIge1xuICBtaW4taGVpZ2h0OiA0MDBweDtcbn1cblxuLnNlYXJjaC1ib3gge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTVjZWZmNDA7XG4gIHBhZGRpbmc6IDIwcHg7XG59XG5cbi5zZWFyY2gtYm94LWhlYWRlciB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewBookingDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-booking-dialog',
                templateUrl: './new-booking-dialog.component.html',
                styleUrls: ['./new-booking-dialog.component.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/notification-bar/notification-bar.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/notification-bar/notification-bar.component.ts ***!
  \**********************************************************************************/
/*! exports provided: NotificationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationBarComponent", function() { return NotificationBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");






class NotificationBarComponent {
    constructor(data, snackBar) {
        this.data = data;
        this.snackBar = snackBar;
    }
}
NotificationBarComponent.ɵfac = function NotificationBarComponent_Factory(t) { return new (t || NotificationBarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MAT_SNACK_BAR_DATA"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"])); };
NotificationBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationBarComponent, selectors: [["app-notification"]], decls: 7, vars: 1, consts: [[1, "notification"], [1, "notification__text"], [1, "notification__action"], ["mat-icon-button", "", 1, "notification__action-button", 3, "click"], [1, "notification__action-icon"]], template: function NotificationBarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationBarComponent_Template_button_click_4_listener() { return ctx.snackBar.dismiss(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.text, " ");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIcon"]], styles: [".notification[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.notification__text[_ngcontent-%COMP%] {\n  flex-grow: 1;\n}\n\n.notification__action[_ngcontent-%COMP%] {\n  margin: -2px -4px -2px 8px;\n}\n\n.notification__action-button[_ngcontent-%COMP%] {\n  height: 24px;\n  width: 24px;\n  line-height: 1;\n}\n\n.notification__action-icon[_ngcontent-%COMP%] {\n  font-size: 16px;\n  opacity: 0.65;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uLWJhci9ub3RpZmljYXRpb24tYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQUNGOztBQUVBO0VBQ0UsWUFBQTtBQUNGOztBQUVBO0VBQ0UsMEJBQUE7QUFDRjs7QUFFQTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL25vdGlmaWNhdGlvbi1iYXIvbm90aWZpY2F0aW9uLWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ub3RpZmljYXRpb24ge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG4ubm90aWZpY2F0aW9uX190ZXh0IHtcbiAgZmxleC1ncm93OiAxO1xufVxuXG4ubm90aWZpY2F0aW9uX19hY3Rpb24ge1xuICBtYXJnaW46IC0ycHggLTRweCAtMnB4IDhweDtcbn1cblxuLm5vdGlmaWNhdGlvbl9fYWN0aW9uLWJ1dHRvbiB7XG4gIGhlaWdodDogMjRweDtcbiAgd2lkdGg6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxO1xufVxuXG4ubm90aWZpY2F0aW9uX19hY3Rpb24taWNvbiB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgb3BhY2l0eTogLjY1O1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notification',
                templateUrl: './notification-bar.component.html',
                styleUrls: ['./notification-bar.component.scss'],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MAT_SNACK_BAR_DATA"]]
            }] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/page-header-back/page-header-back.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/shared/components/page-header-back/page-header-back.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PageHeaderBackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderBackComponent", function() { return PageHeaderBackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_router_history_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/router-history.service */ "./src/app/shared/services/router-history.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");






class PageHeaderBackComponent {
    constructor(router, routerHistory) {
        this.router = router;
        this.routerHistory = routerHistory;
    }
    onBackClick() {
        this.router.navigateByUrl(this.routerHistory.getLatestFrom(this.link) || this.link);
    }
}
PageHeaderBackComponent.ɵfac = function PageHeaderBackComponent_Factory(t) { return new (t || PageHeaderBackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_router_history_service__WEBPACK_IMPORTED_MODULE_2__["RouterHistoryService"])); };
PageHeaderBackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageHeaderBackComponent, selectors: [["app-page-header-back"]], inputs: { link: "link", ariaLabel: "ariaLabel" }, decls: 3, vars: 1, consts: [["mat-icon-button", "", "color", "primary", 3, "click"]], template: function PageHeaderBackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PageHeaderBackComponent_Template_button_click_0_listener() { return ctx.onBackClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "arrow_back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-label", ctx.ariaLabel);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BhZ2UtaGVhZGVyLWJhY2svcGFnZS1oZWFkZXItYmFjay5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageHeaderBackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-header-back',
                templateUrl: './page-header-back.component.html',
                styleUrls: ['./page-header-back.component.scss'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_router_history_service__WEBPACK_IMPORTED_MODULE_2__["RouterHistoryService"] }]; }, { link: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/page-header-title/page-header-title.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/shared/components/page-header-title/page-header-title.component.ts ***!
  \************************************************************************************/
/*! exports provided: PageHeaderTitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderTitleComponent", function() { return PageHeaderTitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["*"];
class PageHeaderTitleComponent {
}
PageHeaderTitleComponent.ɵfac = function PageHeaderTitleComponent_Factory(t) { return new (t || PageHeaderTitleComponent)(); };
PageHeaderTitleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageHeaderTitleComponent, selectors: [["app-page-header-title"]], inputs: { addons: "addons" }, ngContentSelectors: _c0, decls: 5, vars: 1, consts: [[1, "page-header-title"], [1, "mat-headline", "page-header__heading", "page-header-title__heading"], [1, "page-header__addons"]], template: function PageHeaderTitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.addons);
    } }, styles: [".page-header-title__heading[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin-bottom: 0;\n  margin-right: 6px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGFnZS1oZWFkZXItdGl0bGUvcGFnZS1oZWFkZXItdGl0bGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3BhZ2UtaGVhZGVyLXRpdGxlL3BhZ2UtaGVhZGVyLXRpdGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZ2UtaGVhZGVyLXRpdGxlX19oZWFkaW5nIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBtYXJnaW4tcmlnaHQ6IDZweDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageHeaderTitleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-header-title',
                templateUrl: './page-header-title.component.html',
                styleUrls: ['./page-header-title.component.scss'],
            }]
    }], null, { addons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/components/page-header/page-header.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/page-header/page-header.component.ts ***!
  \************************************************************************/
/*! exports provided: PageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageHeaderComponent", function() { return PageHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


const _c0 = ["*"];
class PageHeaderComponent {
}
PageHeaderComponent.ɵfac = function PageHeaderComponent_Factory(t) { return new (t || PageHeaderComponent)(); };
PageHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageHeaderComponent, selectors: [["app-page-header"]], ngContentSelectors: _c0, decls: 2, vars: 0, consts: [[1, "mat-toolbar-single-row", "page-header"]], template: function PageHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".page-header[_ngcontent-%COMP%] {\n  white-space: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGFnZS1oZWFkZXIvcGFnZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvcGFnZS1oZWFkZXIvcGFnZS1oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1oZWFkZXIge1xuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-header',
                templateUrl: './page-header.component.html',
                styleUrls: ['./page-header.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/directives/back-button.directive.ts":
/*!************************************************************!*\
  !*** ./src/app/shared/directives/back-button.directive.ts ***!
  \************************************************************/
/*! exports provided: BackButtonDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackButtonDirective", function() { return BackButtonDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



class BackButtonDirective {
    constructor(location) {
        this.location = location;
    }
    onClick() {
        this.location.back();
    }
}
BackButtonDirective.ɵfac = function BackButtonDirective_Factory(t) { return new (t || BackButtonDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"])); };
BackButtonDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BackButtonDirective, selectors: [["", "appBackButton", ""]], hostBindings: function BackButtonDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BackButtonDirective_click_HostBindingHandler() { return ctx.onClick(); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackButtonDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appBackButton]',
            }]
    }], function () { return [{ type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }]; }, { onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }] }); })();


/***/ }),

/***/ "./src/app/shared/directives/input-debounce.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/shared/directives/input-debounce.directive.ts ***!
  \***************************************************************/
/*! exports provided: InputDebounceDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputDebounceDirective", function() { return InputDebounceDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");




class InputDebounceDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.delayedInput = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.elementRef.nativeElement, 'input')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => this.elementRef.nativeElement.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(800))
            .subscribe((input) => this.delayedInput.next(input));
    }
}
InputDebounceDirective.ɵfac = function InputDebounceDirective_Factory(t) { return new (t || InputDebounceDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
InputDebounceDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: InputDebounceDirective, selectors: [["", "appInput", ""]], outputs: { delayedInput: "delayedInput" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputDebounceDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appInput]',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { delayedInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/shared/interceptors/index.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/interceptors/index.ts ***!
  \**********************************************/
/*! exports provided: sharedInterceptorProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sharedInterceptorProviders", function() { return sharedInterceptorProviders; });
const sharedInterceptorProviders = [];


/***/ }),

/***/ "./src/app/shared/material.module.ts":
/*!*******************************************!*\
  !*** ./src/app/shared/material.module.ts ***!
  \*******************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/toolbar.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/datepicker.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/menu.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sort.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/paginator.js");




















class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatRippleModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { exports: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
        _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
        _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"],
        _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatRippleModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_8__["MatCheckboxModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_9__["MatFormFieldModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_11__["MatMenuModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_12__["MatCardModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_16__["MatTableModule"],
                    _angular_material_sort__WEBPACK_IMPORTED_MODULE_17__["MatSortModule"],
                    _angular_material_paginator__WEBPACK_IMPORTED_MODULE_18__["MatPaginatorModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_15__["MatRippleModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/models/snackbar.model.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/models/snackbar.model.ts ***!
  \*************************************************/
/*! exports provided: defaultSnackBarConfig, successSnackBarConfig, errorSnackBarConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSnackBarConfig", function() { return defaultSnackBarConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "successSnackBarConfig", function() { return successSnackBarConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "errorSnackBarConfig", function() { return errorSnackBarConfig; });
const defaultSnackBarConfig = {
    duration: 2000,
    panelClass: ['app-snack-bar'],
};
const successSnackBarConfig = {
    duration: 2000,
    announcementMessage: 'Success.',
    panelClass: ['app-snack-bar', 'app-snack-bar_success'],
    verticalPosition: 'top',
};
const errorSnackBarConfig = {
    duration: 10000,
    announcementMessage: 'An unknown error occurred.',
    panelClass: ['app-snack-bar', 'app-snack-bar_error'],
    verticalPosition: 'top',
};


/***/ }),

/***/ "./src/app/shared/services/notification-bar.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/notification-bar.service.ts ***!
  \*************************************************************/
/*! exports provided: NotificationBarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationBarService", function() { return NotificationBarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_notification_bar_notification_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/notification-bar/notification-bar.component */ "./src/app/shared/components/notification-bar/notification-bar.component.ts");
/* harmony import */ var _models_snackbar_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/snackbar.model */ "./src/app/shared/models/snackbar.model.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");





class NotificationBarService {
    constructor(snackBar, zone) {
        this.snackBar = snackBar;
        this.zone = zone;
    }
    showInfo(message, duration) {
        return this.show(_models_snackbar_model__WEBPACK_IMPORTED_MODULE_2__["defaultSnackBarConfig"], message, duration);
    }
    showSuccess(message, duration) {
        return this.show(_models_snackbar_model__WEBPACK_IMPORTED_MODULE_2__["successSnackBarConfig"], message, duration);
    }
    showError(message, duration) {
        return this.show(_models_snackbar_model__WEBPACK_IMPORTED_MODULE_2__["errorSnackBarConfig"], message, duration);
    }
    show(defaultConfig, message, duration) {
        const snackBarConfig = duration ? Object.assign(Object.assign({}, defaultConfig), { duration }) : defaultConfig;
        let ref;
        if (message) {
            this.zone.run(() => ref = this.snackBar.openFromComponent(_components_notification_bar_notification_bar_component__WEBPACK_IMPORTED_MODULE_1__["NotificationBarComponent"], Object.assign(Object.assign({}, snackBarConfig), { data: { text: message } })));
        }
        return ref;
    }
    dismiss(snackBarRef) {
        return snackBarRef.dismiss();
    }
}
NotificationBarService.ɵfac = function NotificationBarService_Factory(t) { return new (t || NotificationBarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"])); };
NotificationBarService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NotificationBarService, factory: NotificationBarService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationBarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/services/router-history.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/services/router-history.service.ts ***!
  \***********************************************************/
/*! exports provided: RouterHistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterHistoryService", function() { return RouterHistoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class RouterHistoryService {
    constructor() {
        this.urls = [];
    }
    push(url) {
        this.urls.unshift(url);
    }
    getLatestFrom(patternUrl) {
        return this.urls.find(url => url.indexOf(patternUrl) === 0);
    }
}
RouterHistoryService.ɵfac = function RouterHistoryService_Factory(t) { return new (t || RouterHistoryService)(); };
RouterHistoryService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RouterHistoryService, factory: RouterHistoryService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RouterHistoryService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/services/unsaved-changes.guard.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/unsaved-changes.guard.ts ***!
  \**********************************************************/
/*! exports provided: UnsavedChangesGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UnsavedChangesGuard", function() { return UnsavedChangesGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/confirm-dialog/confirm-dialog.component */ "./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");





class UnsavedChangesGuard {
    constructor(dialog) {
        this.dialog = dialog;
    }
    canDeactivate(component) {
        if (component.canDeactivate()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
        }
        const dialogRef = this.dialog.open(_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_2__["ConfirmDialogComponent"], {
            data: {
                title: 'Confirm Navigation',
                message: 'You have unsaved changes. Are you sure you want to leave this page?',
                btnCancel: 'Stay on this Page',
                btnOk: 'Leave this Page',
            },
        });
        return dialogRef.afterClosed();
    }
}
UnsavedChangesGuard.ɵfac = function UnsavedChangesGuard_Factory(t) { return new (t || UnsavedChangesGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"])); };
UnsavedChangesGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UnsavedChangesGuard, factory: UnsavedChangesGuard.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UnsavedChangesGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./material.module */ "./src/app/shared/material.module.ts");
/* harmony import */ var _interceptors__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./interceptors */ "./src/app/shared/interceptors/index.ts");
/* harmony import */ var _directives_back_button_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./directives/back-button.directive */ "./src/app/shared/directives/back-button.directive.ts");
/* harmony import */ var _directives_input_debounce_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/input-debounce.directive */ "./src/app/shared/directives/input-debounce.directive.ts");
/* harmony import */ var _services_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/unsaved-changes.guard */ "./src/app/shared/services/unsaved-changes.guard.ts");
/* harmony import */ var _components_notification_bar_notification_bar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/notification-bar/notification-bar.component */ "./src/app/shared/components/notification-bar/notification-bar.component.ts");
/* harmony import */ var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/page-header/page-header.component */ "./src/app/shared/components/page-header/page-header.component.ts");
/* harmony import */ var _components_page_header_back_page_header_back_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/page-header-back/page-header-back.component */ "./src/app/shared/components/page-header-back/page-header-back.component.ts");
/* harmony import */ var _components_page_header_title_page_header_title_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/page-header-title/page-header-title.component */ "./src/app/shared/components/page-header-title/page-header-title.component.ts");
/* harmony import */ var _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/confirm-dialog/confirm-dialog.component */ "./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _components_new_booking_dialog_new_booking_dialog_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/new-booking-dialog/new-booking-dialog.component */ "./src/app/shared/components/new-booking-dialog/new-booking-dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");















class SharedModule {
}
SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SharedModule_Factory(t) { return new (t || SharedModule)(); }, providers: [
        ..._interceptors__WEBPACK_IMPORTED_MODULE_3__["sharedInterceptorProviders"],
        _services_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_6__["UnsavedChangesGuard"],
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
        ], _material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { declarations: [_directives_back_button_directive__WEBPACK_IMPORTED_MODULE_4__["BackButtonDirective"],
        _directives_input_debounce_directive__WEBPACK_IMPORTED_MODULE_5__["InputDebounceDirective"],
        _components_notification_bar_notification_bar_component__WEBPACK_IMPORTED_MODULE_7__["NotificationBarComponent"],
        _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialogComponent"],
        _components_new_booking_dialog_new_booking_dialog_component__WEBPACK_IMPORTED_MODULE_12__["NewBookingDialogComponent"],
        _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_8__["PageHeaderComponent"],
        _components_page_header_back_page_header_back_component__WEBPACK_IMPORTED_MODULE_9__["PageHeaderBackComponent"],
        _components_page_header_title_page_header_title_component__WEBPACK_IMPORTED_MODULE_10__["PageHeaderTitleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"]], exports: [_material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
        _directives_back_button_directive__WEBPACK_IMPORTED_MODULE_4__["BackButtonDirective"],
        _directives_input_debounce_directive__WEBPACK_IMPORTED_MODULE_5__["InputDebounceDirective"],
        _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_8__["PageHeaderComponent"],
        _components_page_header_back_page_header_back_component__WEBPACK_IMPORTED_MODULE_9__["PageHeaderBackComponent"],
        _components_page_header_title_page_header_title_component__WEBPACK_IMPORTED_MODULE_10__["PageHeaderTitleComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
                ],
                declarations: [
                    _directives_back_button_directive__WEBPACK_IMPORTED_MODULE_4__["BackButtonDirective"],
                    _directives_input_debounce_directive__WEBPACK_IMPORTED_MODULE_5__["InputDebounceDirective"],
                    _components_notification_bar_notification_bar_component__WEBPACK_IMPORTED_MODULE_7__["NotificationBarComponent"],
                    _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialogComponent"],
                    _components_new_booking_dialog_new_booking_dialog_component__WEBPACK_IMPORTED_MODULE_12__["NewBookingDialogComponent"],
                    _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_8__["PageHeaderComponent"],
                    _components_page_header_back_page_header_back_component__WEBPACK_IMPORTED_MODULE_9__["PageHeaderBackComponent"],
                    _components_page_header_title_page_header_title_component__WEBPACK_IMPORTED_MODULE_10__["PageHeaderTitleComponent"],
                ],
                entryComponents: [
                    _components_notification_bar_notification_bar_component__WEBPACK_IMPORTED_MODULE_7__["NotificationBarComponent"],
                    _components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_11__["ConfirmDialogComponent"],
                ],
                providers: [
                    ..._interceptors__WEBPACK_IMPORTED_MODULE_3__["sharedInterceptorProviders"],
                    _services_unsaved_changes_guard__WEBPACK_IMPORTED_MODULE_6__["UnsavedChangesGuard"],
                ],
                exports: [
                    _material_module__WEBPACK_IMPORTED_MODULE_2__["MaterialModule"],
                    _directives_back_button_directive__WEBPACK_IMPORTED_MODULE_4__["BackButtonDirective"],
                    _directives_input_debounce_directive__WEBPACK_IMPORTED_MODULE_5__["InputDebounceDirective"],
                    _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_8__["PageHeaderComponent"],
                    _components_page_header_back_page_header_back_component__WEBPACK_IMPORTED_MODULE_9__["PageHeaderBackComponent"],
                    _components_page_header_title_page_header_title_component__WEBPACK_IMPORTED_MODULE_10__["PageHeaderTitleComponent"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/store/shared.actions.ts":
/*!************************************************!*\
  !*** ./src/app/shared/store/shared.actions.ts ***!
  \************************************************/
/*! exports provided: checkIsOnline, setIsOnline, loadingOn, loadingOff */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIsOnline", function() { return checkIsOnline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setIsOnline", function() { return setIsOnline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadingOn", function() { return loadingOn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadingOff", function() { return loadingOff; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

const checkIsOnline = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Shared/isOnline] Check Is Online');
const setIsOnline = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Shared/isOnline] Set Is Online', Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
const loadingOn = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Shared/Loading] API Loading...');
const loadingOff = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])('[Shared/Loading] API Loaded');


/***/ }),

/***/ "./src/app/shared/store/shared.effects.ts":
/*!************************************************!*\
  !*** ./src/app/shared/store/shared.effects.ts ***!
  \************************************************/
/*! exports provided: SharedEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedEffects", function() { return SharedEffects; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/ngrx-effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _shared_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared.actions */ "./src/app/shared/store/shared.actions.ts");
/* harmony import */ var _services_notification_bar_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/notification-bar.service */ "./src/app/shared/services/notification-bar.service.ts");








class SharedEffects {
    constructor(actions$, notificationService) {
        this.actions$ = actions$;
        this.notificationService = notificationService;
        this.ref = null;
        this.checkIsOnline$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["ofType"])(_shared_actions__WEBPACK_IMPORTED_MODULE_4__["checkIsOnline"].type), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(navigator.onLine), Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'online').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(true)), Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'offline').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(false)));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(isOnline => {
            this.showHideNotification(isOnline);
            return {
                isOnline,
                type: _shared_actions__WEBPACK_IMPORTED_MODULE_4__["setIsOnline"].type,
            };
        })));
    }
    showHideNotification(isOnline) {
        if (!isOnline) {
            this.ref = this.notificationService.showError('You are currently offline.', 999999);
        }
        else if (this.ref) {
            this.notificationService.dismiss(this.ref);
        }
    }
}
SharedEffects.ɵfac = function SharedEffects_Factory(t) { return new (t || SharedEffects)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_notification_bar_service__WEBPACK_IMPORTED_MODULE_5__["NotificationBarService"])); };
SharedEffects.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SharedEffects, factory: SharedEffects.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedEffects, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["Actions"] }, { type: _services_notification_bar_service__WEBPACK_IMPORTED_MODULE_5__["NotificationBarService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/store/shared.reducer.ts":
/*!************************************************!*\
  !*** ./src/app/shared/store/shared.reducer.ts ***!
  \************************************************/
/*! exports provided: sharedReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sharedReducer", function() { return sharedReducer; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _shared_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./shared.state */ "./src/app/shared/store/shared.state.ts");
/* harmony import */ var _shared_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared.actions */ "./src/app/shared/store/shared.actions.ts");



const sharedReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createReducer"])(_shared_state__WEBPACK_IMPORTED_MODULE_1__["initialSharedState"], Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_shared_actions__WEBPACK_IMPORTED_MODULE_2__["checkIsOnline"], (state) => (Object.assign(Object.assign({}, state), { isOnline: false }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_shared_actions__WEBPACK_IMPORTED_MODULE_2__["setIsOnline"], (state, { isOnline }) => (Object.assign(Object.assign({}, state), { isOnline }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_shared_actions__WEBPACK_IMPORTED_MODULE_2__["loadingOn"], (state) => (Object.assign(Object.assign({}, state), { loading: true }))), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["on"])(_shared_actions__WEBPACK_IMPORTED_MODULE_2__["loadingOff"], (state) => (Object.assign(Object.assign({}, state), { loading: false }))));


/***/ }),

/***/ "./src/app/shared/store/shared.state.ts":
/*!**********************************************!*\
  !*** ./src/app/shared/store/shared.state.ts ***!
  \**********************************************/
/*! exports provided: initialSharedState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialSharedState", function() { return initialSharedState; });
const initialSharedState = {
    isOnline: false,
    loading: false,
};


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
// Default environment file
const environment = {
    production: false,
    baseUrl: 'http://localhost:3000/api',
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\KathyKok\development\LtUxDesignAssigment\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map