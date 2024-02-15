(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/shared/store/shared.selectors.ts":
/*!**************************************************!*\
  !*** ./src/app/shared/store/shared.selectors.ts ***!
  \**************************************************/
/*! exports provided: selectSharedState, selectIsOnline, selectLoading */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectSharedState", function() { return selectSharedState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectIsOnline", function() { return selectIsOnline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "selectLoading", function() { return selectLoading; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");

const selectSharedState = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createFeatureSelector"])('shared');
const selectIsOnline = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSharedState, (state) => state.isOnline);
const selectLoading = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(selectSharedState, (state) => state.loading);


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map