(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["features-examples-examples-module"],{

/***/ "./src/app/features/examples/components/confirm-dialog-example/confirm-dialog-example.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/features/examples/components/confirm-dialog-example/confirm-dialog-example.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: ConfirmDialogExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogExampleComponent", function() { return ConfirmDialogExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/confirm-dialog/confirm-dialog.component */ "./src/app/shared/components/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/*
  This will be deleted after execute ./cleanup.sh script.
*/





class ConfirmDialogExampleComponent {
    constructor(dialog) {
        this.dialog = dialog;
    }
    openConfirmDialog() {
        this.dialogRef = this.dialog.open(_shared_components_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmDialogComponent"], {
            width: '280px',
            data: {
                title: 'Confirm Dialog',
                message: 'Custom message here...',
            },
        });
        this.dialogRef.afterClosed().subscribe(result => this.dialogResult = result);
    }
    ngOnInit() {
        // this.dialogRef.afterClosed().subscribe(result => this.dialogResult = result)
    }
}
ConfirmDialogExampleComponent.ɵfac = function ConfirmDialogExampleComponent_Factory(t) { return new (t || ConfirmDialogExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"])); };
ConfirmDialogExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmDialogExampleComponent, selectors: [["app-confirm-dialog-example"]], decls: 7, vars: 2, consts: [["mat-stroked-button", "", 3, "color", "click"]], template: function ConfirmDialogExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "dialogResult: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmDialogExampleComponent_Template_button_click_5_listener() { return ctx.openConfirmDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Open Dialog\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.dialogResult);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "primary");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2V4YW1wbGVzL2NvbXBvbmVudHMvY29uZmlybS1kaWFsb2ctZXhhbXBsZS9jb25maXJtLWRpYWxvZy1leGFtcGxlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ConfirmDialogExampleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-confirm-dialog-example',
                templateUrl: './confirm-dialog-example.component.html',
                styleUrls: ['./confirm-dialog-example.component.scss'],
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/examples/components/error-handler-example/error-handler-example.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/features/examples/components/error-handler-example/error-handler-example.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: ErrorHandlerExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorHandlerExampleComponent", function() { return ErrorHandlerExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/*
  This will be deleted after execute ./cleanup.sh script.
*/




class ErrorHandlerExampleComponent {
    constructor(http) {
        this.http = http;
    }
    runClientSiteErr404() {
        this.http.get('http://localhost:4200/error').subscribe();
    }
    runServerSiteErr401() {
        this.http.get('http://getstatuscode.com/401').subscribe();
    }
}
ErrorHandlerExampleComponent.ɵfac = function ErrorHandlerExampleComponent_Factory(t) { return new (t || ErrorHandlerExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
ErrorHandlerExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorHandlerExampleComponent, selectors: [["app-error-handler-example"]], decls: 4, vars: 2, consts: [["mat-stroked-button", "", 1, "mr-3", 3, "color", "click"], ["mat-stroked-button", "", 3, "color", "click"]], template: function ErrorHandlerExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorHandlerExampleComponent_Template_button_click_0_listener() { return ctx.runClientSiteErr404(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Run ERROR: 404 Not Found\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ErrorHandlerExampleComponent_Template_button_click_2_listener() { return ctx.runServerSiteErr401(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Run ERROR: 401 Unauthorized\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "warn");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "warn");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2V4YW1wbGVzL2NvbXBvbmVudHMvZXJyb3ItaGFuZGxlci1leGFtcGxlL2Vycm9yLWhhbmRsZXItZXhhbXBsZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorHandlerExampleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error-handler-example',
                templateUrl: './error-handler-example.component.html',
                styleUrls: ['./error-handler-example.component.scss'],
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/examples/components/input-debounce/input-debounce.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/features/examples/components/input-debounce/input-debounce.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: InputDebounceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InputDebounceComponent", function() { return InputDebounceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _shared_directives_input_debounce_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/directives/input-debounce.directive */ "./src/app/shared/directives/input-debounce.directive.ts");





class InputDebounceComponent {
}
InputDebounceComponent.ɵfac = function InputDebounceComponent_Factory(t) { return new (t || InputDebounceComponent)(); };
InputDebounceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InputDebounceComponent, selectors: [["app-input-debounce"]], decls: 9, vars: 1, consts: [["matInput", "", "appInput", "", 3, "delayedInput"]], template: function InputDebounceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Text field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("delayedInput", function InputDebounceComponent_Template_input_delayedInput_4_listener($event) { return ctx.val = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " delayed emit: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.val);
    } }, directives: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_2__["MatInput"], _shared_directives_input_debounce_directive__WEBPACK_IMPORTED_MODULE_3__["InputDebounceDirective"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2V4YW1wbGVzL2NvbXBvbmVudHMvaW5wdXQtZGVib3VuY2UvaW5wdXQtZGVib3VuY2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](InputDebounceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-input-debounce',
                templateUrl: './input-debounce.component.html',
                styleUrls: ['./input-debounce.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/examples/components/loading-example/loading-example.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/features/examples/components/loading-example/loading-example.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: LoadingExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingExampleComponent", function() { return LoadingExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _shared_store_shared_selectors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/store/shared.selectors */ "./src/app/shared/store/shared.selectors.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");









function LoadingExampleComponent_mat_icon_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " hourglass_full ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "primary");
} }
class LoadingExampleComponent {
    constructor(store, http) {
        this.store = store;
        this.http = http;
        this.loading$ = store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["select"])(_shared_store_shared_selectors__WEBPACK_IMPORTED_MODULE_2__["selectLoading"]));
    }
    makeHttpRequest() {
        this.http.get('http://getstatuscode.com/401').subscribe();
    }
}
LoadingExampleComponent.ɵfac = function LoadingExampleComponent_Factory(t) { return new (t || LoadingExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
LoadingExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingExampleComponent, selectors: [["app-loading-example"]], decls: 12, vars: 4, consts: [[1, "loading-example__wrap"], [1, "loading-example__icon-wrap"], ["class", "loading-example__icon-animated", 3, "color", 4, "ngIf"], ["mat-stroked-button", "", 3, "color", "click"], [1, "loading-example__icon-animated", 3, "color"]], template: function LoadingExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Watch the icon:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "hourglass_empty");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LoadingExampleComponent_mat_icon_6_Template, 2, 1, "mat-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "after clicked the button.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoadingExampleComponent_Template_button_click_10_listener() { return ctx.makeHttpRequest(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Make HTTP Request\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 2, ctx.loading$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "primary");
    } }, directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIcon"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: [".loading-example__wrap[_ngcontent-%COMP%] {\n  margin-bottom: 16px;\n  line-height: 24px;\n}\n.loading-example__wrap[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n}\n.loading-example__icon-wrap[_ngcontent-%COMP%] {\n  height: 24px;\n  position: relative;\n}\n.loading-example__icon-animated[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n  top: 0;\n  -webkit-animation: opacity-animation 1s infinite;\n          animation: opacity-animation 1s infinite;\n}\n@-webkit-keyframes opacity-animation {\n  0%, 100% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n}\n@keyframes opacity-animation {\n  0%, 100% {\n    opacity: 0;\n  }\n  50% {\n    opacity: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvZXhhbXBsZXMvY29tcG9uZW50cy9sb2FkaW5nLWV4YW1wbGUvbG9hZGluZy1leGFtcGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQUNGO0FBQ0U7RUFDRSxxQkFBQTtFQUNBLHNCQUFBO0FBQ0o7QUFHQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQUFGO0FBR0E7RUFDRSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsZ0RBQUE7VUFBQSx3Q0FBQTtBQUFGO0FBSUE7RUFDRTtJQUVFLFVBQUE7RUFGRjtFQUtBO0lBQ0UsVUFBQTtFQUhGO0FBQ0Y7QUFMQTtFQUNFO0lBRUUsVUFBQTtFQUZGO0VBS0E7SUFDRSxVQUFBO0VBSEY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2V4YW1wbGVzL2NvbXBvbmVudHMvbG9hZGluZy1leGFtcGxlL2xvYWRpbmctZXhhbXBsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2FkaW5nLWV4YW1wbGVfX3dyYXAge1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjRweDtcblxuICA+ICoge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICB9XG59XG5cbi5sb2FkaW5nLWV4YW1wbGVfX2ljb24td3JhcCB7XG4gIGhlaWdodDogMjRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4ubG9hZGluZy1leGFtcGxlX19pY29uLWFuaW1hdGVkIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGFuaW1hdGlvbjogb3BhY2l0eS1hbmltYXRpb24gMXMgaW5maW5pdGU7XG59XG5cblxuQGtleWZyYW1lcyBvcGFjaXR5LWFuaW1hdGlvbiB7XG4gIDAlLFxuICAxMDAlIHtcbiAgICBvcGFjaXR5OiAwO1xuICB9XG5cbiAgNTAlIHtcbiAgICBvcGFjaXR5OiAxO1xuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingExampleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading-example',
                templateUrl: './loading-example.component.html',
                styleUrls: ['./loading-example.component.scss'],
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/examples/components/local-storage-example/local-storage-example.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/features/examples/components/local-storage-example/local-storage-example.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: LocalStorageExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageExampleComponent", function() { return LocalStorageExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_models_local_storage_key_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/models/local-storage-key.model */ "./src/app/shared/models/local-storage-key.model.ts");
/* harmony import */ var _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/services/local-storage.service */ "./src/app/shared/services/local-storage.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/*
  This will be deleted after execute ./cleanup.sh script.
*/





class LocalStorageExampleComponent {
    constructor(localStorageService) {
        this.localStorageService = localStorageService;
    }
    ngOnInit() {
        this.getExampleValue();
    }
    setExampleValue() {
        this.localStorageService.set(_shared_models_local_storage_key_model__WEBPACK_IMPORTED_MODULE_1__["LocalStorageKey"].EXAMPLE_KEY, this.getRandomIntInclusive(1000, 9999));
        this.getExampleValue();
    }
    getExampleValue() {
        this.exampleValue = this.localStorageService.get(_shared_models_local_storage_key_model__WEBPACK_IMPORTED_MODULE_1__["LocalStorageKey"].EXAMPLE_KEY);
    }
    delExampleValue() {
        this.localStorageService.del(_shared_models_local_storage_key_model__WEBPACK_IMPORTED_MODULE_1__["LocalStorageKey"].EXAMPLE_KEY);
        this.getExampleValue();
    }
    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
LocalStorageExampleComponent.ɵfac = function LocalStorageExampleComponent_Factory(t) { return new (t || LocalStorageExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"])); };
LocalStorageExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LocalStorageExampleComponent, selectors: [["app-local-storage-example"]], decls: 15, vars: 3, consts: [["mat-stroked-button", "", 1, "mr-3", 3, "color", "click"], ["mat-stroked-button", "", 3, "color", "click"]], template: function LocalStorageExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "exampleValue: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LocalStorageExampleComponent_Template_button_click_6_listener() { return ctx.setExampleValue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Set random exampleValue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LocalStorageExampleComponent_Template_button_click_8_listener() { return ctx.delExampleValue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Delete exampleValue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Press ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "F5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " and back here to check it!\n");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.exampleValue);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "warn");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2V4YW1wbGVzL2NvbXBvbmVudHMvbG9jYWwtc3RvcmFnZS1leGFtcGxlL2xvY2FsLXN0b3JhZ2UtZXhhbXBsZS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalStorageExampleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-local-storage-example',
                templateUrl: './local-storage-example.component.html',
                styleUrls: ['./local-storage-example.component.scss'],
            }]
    }], function () { return [{ type: _shared_services_local_storage_service__WEBPACK_IMPORTED_MODULE_2__["LocalStorageService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/examples/components/notification-example/notification-example.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/features/examples/components/notification-example/notification-example.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: NotificationExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotificationExampleComponent", function() { return NotificationExampleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_services_notification_bar_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/services/notification-bar.service */ "./src/app/shared/services/notification-bar.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/*
  This will be deleted after execute ./cleanup.sh script.
*/




class NotificationExampleComponent {
    constructor(notificationService) {
        this.notificationService = notificationService;
    }
    showSuccessNotification() {
        this.notificationService.showSuccess('Example success notification.', 3500);
    }
    showErrorNotification() {
        this.notificationService.showError('Example error notification.', 3500);
    }
    showInfoNotification() {
        this.notificationService.showInfo('Example info notification.', 3500);
    }
}
NotificationExampleComponent.ɵfac = function NotificationExampleComponent_Factory(t) { return new (t || NotificationExampleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_notification_bar_service__WEBPACK_IMPORTED_MODULE_1__["NotificationBarService"])); };
NotificationExampleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotificationExampleComponent, selectors: [["app-notification-example"]], decls: 6, vars: 2, consts: [["mat-stroked-button", "", 1, "mr-3", 3, "color", "click"], ["mat-stroked-button", "", 1, "mr-3", 3, "click"]], template: function NotificationExampleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationExampleComponent_Template_button_click_0_listener() { return ctx.showSuccessNotification(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Show success notification\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationExampleComponent_Template_button_click_2_listener() { return ctx.showErrorNotification(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Show error notification\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NotificationExampleComponent_Template_button_click_4_listener() { return ctx.showInfoNotification(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Show info notification\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "primary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("color", "warn");
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZlYXR1cmVzL2V4YW1wbGVzL2NvbXBvbmVudHMvbm90aWZpY2F0aW9uLWV4YW1wbGUvbm90aWZpY2F0aW9uLWV4YW1wbGUuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotificationExampleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notification-example',
                templateUrl: './notification-example.component.html',
                styleUrls: ['./notification-example.component.scss'],
            }]
    }], function () { return [{ type: _shared_services_notification_bar_service__WEBPACK_IMPORTED_MODULE_1__["NotificationBarService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/features/examples/examples-routing.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/features/examples/examples-routing.module.ts ***!
  \**************************************************************/
/*! exports provided: ExamplesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesRoutingModule", function() { return ExamplesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _examples_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./examples.component */ "./src/app/features/examples/examples.component.ts");





const routes = [
    {
        path: '',
        component: _examples_component__WEBPACK_IMPORTED_MODULE_2__["ExamplesComponent"],
    },
];
class ExamplesRoutingModule {
}
ExamplesRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ExamplesRoutingModule });
ExamplesRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ExamplesRoutingModule_Factory(t) { return new (t || ExamplesRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExamplesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExamplesRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/examples/examples.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/features/examples/examples.component.ts ***!
  \*********************************************************/
/*! exports provided: ExamplesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesComponent", function() { return ExamplesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/page-header/page-header.component */ "./src/app/shared/components/page-header/page-header.component.ts");
/* harmony import */ var _shared_components_page_header_back_page_header_back_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/components/page-header-back/page-header-back.component */ "./src/app/shared/components/page-header-back/page-header-back.component.ts");
/* harmony import */ var _shared_components_page_header_title_page_header_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/components/page-header-title/page-header-title.component */ "./src/app/shared/components/page-header-title/page-header-title.component.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _components_notification_example_notification_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/notification-example/notification-example.component */ "./src/app/features/examples/components/notification-example/notification-example.component.ts");
/* harmony import */ var _components_confirm_dialog_example_confirm_dialog_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/confirm-dialog-example/confirm-dialog-example.component */ "./src/app/features/examples/components/confirm-dialog-example/confirm-dialog-example.component.ts");
/* harmony import */ var _components_local_storage_example_local_storage_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/local-storage-example/local-storage-example.component */ "./src/app/features/examples/components/local-storage-example/local-storage-example.component.ts");
/* harmony import */ var _components_error_handler_example_error_handler_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/error-handler-example/error-handler-example.component */ "./src/app/features/examples/components/error-handler-example/error-handler-example.component.ts");
/* harmony import */ var _components_loading_example_loading_example_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/loading-example/loading-example.component */ "./src/app/features/examples/components/loading-example/loading-example.component.ts");
/* harmony import */ var _components_input_debounce_input_debounce_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/input-debounce/input-debounce.component */ "./src/app/features/examples/components/input-debounce/input-debounce.component.ts");












class ExamplesComponent {
}
ExamplesComponent.ɵfac = function ExamplesComponent_Factory(t) { return new (t || ExamplesComponent)(); };
ExamplesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ExamplesComponent, selectors: [["app-examples"]], decls: 76, vars: 1, consts: [["ariaLabel", "Back to homepage", 3, "link"], [1, "page-content"], [1, "flex-basis"]], template: function ExamplesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-page-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-page-header-back", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-page-header-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Features lists");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-accordion");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-panel-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " service ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "For displaying snack-bar notifications.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-notification-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-panel-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Confirm Dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " service ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "For displaying modal dialogs with confirm action.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "app-confirm-dialog-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-panel-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Local Storage");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " service ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-local-storage-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-panel-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Offline Indicator");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " event handling ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Disable your internet connection or go to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Network");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " - chrome developer tab, and set it to ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Offline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-panel-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "HTTP Error Handler");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " event handling ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "For running errors.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "app-error-handler-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "mat-panel-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " event handling ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "app-loading-example");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "mat-panel-title", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Input Debounce");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "mat-panel-description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " directive ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Write a text and see emitted value after 1 second delay.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "app-input-debounce");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("link", "/");
    } }, directives: [_shared_components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__["PageHeaderComponent"], _shared_components_page_header_back_page_header_back_component__WEBPACK_IMPORTED_MODULE_2__["PageHeaderBackComponent"], _shared_components_page_header_title_page_header_title_component__WEBPACK_IMPORTED_MODULE_3__["PageHeaderTitleComponent"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatAccordion"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelTitle"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelDescription"], _components_notification_example_notification_example_component__WEBPACK_IMPORTED_MODULE_5__["NotificationExampleComponent"], _components_confirm_dialog_example_confirm_dialog_example_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogExampleComponent"], _components_local_storage_example_local_storage_example_component__WEBPACK_IMPORTED_MODULE_7__["LocalStorageExampleComponent"], _components_error_handler_example_error_handler_example_component__WEBPACK_IMPORTED_MODULE_8__["ErrorHandlerExampleComponent"], _components_loading_example_loading_example_component__WEBPACK_IMPORTED_MODULE_9__["LoadingExampleComponent"], _components_input_debounce_input_debounce_component__WEBPACK_IMPORTED_MODULE_10__["InputDebounceComponent"]], styles: [".flex-basis[_ngcontent-%COMP%] {\n  flex-basis: 110px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVhdHVyZXMvZXhhbXBsZXMvZXhhbXBsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw0QkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvZmVhdHVyZXMvZXhhbXBsZXMvZXhhbXBsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleC1iYXNpcyB7XG4gIGZsZXgtYmFzaXM6IDExMHB4ICFpbXBvcnRhbnQ7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExamplesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-examples',
                templateUrl: './examples.component.html',
                styleUrls: ['./examples.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/features/examples/examples.module.ts":
/*!******************************************************!*\
  !*** ./src/app/features/examples/examples.module.ts ***!
  \******************************************************/
/*! exports provided: ExamplesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExamplesModule", function() { return ExamplesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _examples_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./examples-routing.module */ "./src/app/features/examples/examples-routing.module.ts");
/* harmony import */ var _examples_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./examples.component */ "./src/app/features/examples/examples.component.ts");
/* harmony import */ var _components_notification_example_notification_example_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/notification-example/notification-example.component */ "./src/app/features/examples/components/notification-example/notification-example.component.ts");
/* harmony import */ var _components_local_storage_example_local_storage_example_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/local-storage-example/local-storage-example.component */ "./src/app/features/examples/components/local-storage-example/local-storage-example.component.ts");
/* harmony import */ var _components_error_handler_example_error_handler_example_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/error-handler-example/error-handler-example.component */ "./src/app/features/examples/components/error-handler-example/error-handler-example.component.ts");
/* harmony import */ var _components_loading_example_loading_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/loading-example/loading-example.component */ "./src/app/features/examples/components/loading-example/loading-example.component.ts");
/* harmony import */ var _components_input_debounce_input_debounce_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/input-debounce/input-debounce.component */ "./src/app/features/examples/components/input-debounce/input-debounce.component.ts");
/* harmony import */ var _components_confirm_dialog_example_confirm_dialog_example_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/confirm-dialog-example/confirm-dialog-example.component */ "./src/app/features/examples/components/confirm-dialog-example/confirm-dialog-example.component.ts");
/*
  This will be deleted after execute ./cleanup.sh script.
*/












class ExamplesModule {
}
ExamplesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ExamplesModule });
ExamplesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ExamplesModule_Factory(t) { return new (t || ExamplesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _examples_routing_module__WEBPACK_IMPORTED_MODULE_3__["ExamplesRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ExamplesModule, { declarations: [_examples_component__WEBPACK_IMPORTED_MODULE_4__["ExamplesComponent"],
        _components_notification_example_notification_example_component__WEBPACK_IMPORTED_MODULE_5__["NotificationExampleComponent"],
        _components_local_storage_example_local_storage_example_component__WEBPACK_IMPORTED_MODULE_6__["LocalStorageExampleComponent"],
        _components_error_handler_example_error_handler_example_component__WEBPACK_IMPORTED_MODULE_7__["ErrorHandlerExampleComponent"],
        _components_loading_example_loading_example_component__WEBPACK_IMPORTED_MODULE_8__["LoadingExampleComponent"],
        _components_input_debounce_input_debounce_component__WEBPACK_IMPORTED_MODULE_9__["InputDebounceComponent"],
        _components_confirm_dialog_example_confirm_dialog_example_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmDialogExampleComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _examples_routing_module__WEBPACK_IMPORTED_MODULE_3__["ExamplesRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ExamplesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _examples_component__WEBPACK_IMPORTED_MODULE_4__["ExamplesComponent"],
                    _components_notification_example_notification_example_component__WEBPACK_IMPORTED_MODULE_5__["NotificationExampleComponent"],
                    _components_local_storage_example_local_storage_example_component__WEBPACK_IMPORTED_MODULE_6__["LocalStorageExampleComponent"],
                    _components_error_handler_example_error_handler_example_component__WEBPACK_IMPORTED_MODULE_7__["ErrorHandlerExampleComponent"],
                    _components_loading_example_loading_example_component__WEBPACK_IMPORTED_MODULE_8__["LoadingExampleComponent"],
                    _components_input_debounce_input_debounce_component__WEBPACK_IMPORTED_MODULE_9__["InputDebounceComponent"],
                    _components_confirm_dialog_example_confirm_dialog_example_component__WEBPACK_IMPORTED_MODULE_10__["ConfirmDialogExampleComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _examples_routing_module__WEBPACK_IMPORTED_MODULE_3__["ExamplesRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/shared/models/local-storage-key.model.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/models/local-storage-key.model.ts ***!
  \**********************************************************/
/*! exports provided: LocalStorageKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageKey", function() { return LocalStorageKey; });
var LocalStorageKey;
(function (LocalStorageKey) {
    LocalStorageKey["EXAMPLE_KEY"] = "EXAMPLE_KEY";
})(LocalStorageKey || (LocalStorageKey = {}));


/***/ }),

/***/ "./src/app/shared/services/local-storage.service.ts":
/*!**********************************************************!*\
  !*** ./src/app/shared/services/local-storage.service.ts ***!
  \**********************************************************/
/*! exports provided: LocalStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LocalStorageService {
    // IMPORTANT: do not store sensitive data in local storage,
    // to store data like JWT token use cookies instead!
    set(key, data) {
        localStorage.setItem(key, JSON.stringify(data));
    }
    get(key) {
        return JSON.parse(localStorage.getItem(key));
    }
    del(key) {
        localStorage.removeItem(key);
    }
}
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(); };
LocalStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=features-examples-examples-module-es2015.js.map