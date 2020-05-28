function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./src/$$_lazy_route_resource lazy recursive":
  /*!**********************************************************!*\
    !*** ./src/$$_lazy_route_resource lazy namespace object ***!
    \**********************************************************/

  /*! no static exports found */

  /***/
  function src$$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/about.component.ts":
  /*!************************************!*\
    !*** ./src/app/about.component.ts ***!
    \************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent = function AboutComponent() {
      _classCallCheck(this, AboutComponent);
    };

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 13,
      vars: 0,
      consts: [[1, "content-container"], [1, "content-title-group", "not-found"], [1, "title"], ["href", "https://github.com/MicrosoftDocs/mslearn-staticwebapp"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Product Wish List");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " This project was created to help represent a fundamental app written with Angular. The shopping theme is used throughout the app. ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Resources");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Code in GitHub ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          template: "\n    <div class=\"content-container\">\n      <div class=\"content-title-group not-found\">\n        <h2 class=\"title\">Product Wish List</h2>\n        <p>\n          This project was created to help represent a fundamental app written\n          with Angular. The shopping theme is used throughout the app.\n        </p>\n        <br />\n        <h2 class=\"title\">Resources</h2>\n        <ul>\n          <li>\n            <a href=\"https://github.com/MicrosoftDocs/mslearn-staticwebapp\">\n              Code in GitHub\n            </a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  "
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: Customer, AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Customer", function () {
      return Customer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_components_header_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./core/components/header-bar.component */
    "./src/app/core/components/header-bar.component.ts");
    /* harmony import */


    var _core_components_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./core/components/nav.component */
    "./src/app/core/components/nav.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var Customer = function Customer() {
      _classCallCheck(this, Customer);
    };

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.customers = [{
        id: 1,
        name: 'john'
      }];
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 6,
      vars: 0,
      consts: [[1, "section", "columns"], [1, "column", "is-2"], [1, "column"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-header-bar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-nav", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "main", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_core_components_header_bar_component__WEBPACK_IMPORTED_MODULE_1__["HeaderBarComponent"], _core_components_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./router */
    "./src/app/router.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _store_store_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./store/store.module */
    "./src/app/store/store.module.ts");
    /* harmony import */


    var _about_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./about.component */
    "./src/app/about.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _build_specific__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./build-specific */
    "./src/app/build-specific/index.ts");
    /* harmony import */


    var _core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./core */
    "./src/app/core/index.ts");
    /* harmony import */


    var _core_components_nav_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./core/components/nav.component */
    "./src/app/core/components/nav.component.ts");
    /* harmony import */


    var _core_components_header_bar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./core/components/header-bar.component */
    "./src/app/core/components/header-bar.component.ts");
    /* harmony import */


    var _core_components_header_bar_brand_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./core/components/header-bar-brand.component */
    "./src/app/core/components/header-bar-brand.component.ts");
    /* harmony import */


    var _core_components_not_found_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./core/components/not-found.component */
    "./src/app/core/components/not-found.component.ts");
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(_router__WEBPACK_IMPORTED_MODULE_3__["routes"]), _store_store_module__WEBPACK_IMPORTED_MODULE_5__["AppStoreModule"], _build_specific__WEBPACK_IMPORTED_MODULE_8__["externalModules"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _core_components_nav_component__WEBPACK_IMPORTED_MODULE_10__["NavComponent"], _core_components_header_bar_component__WEBPACK_IMPORTED_MODULE_11__["HeaderBarComponent"], _core_components_header_bar_brand_component__WEBPACK_IMPORTED_MODULE_12__["HeaderBarBrandComponent"], _core_components_not_found_component__WEBPACK_IMPORTED_MODULE_13__["NotFoundComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"], _store_store_module__WEBPACK_IMPORTED_MODULE_5__["AppStoreModule"], _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_14__["StoreDevtoolsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _about_component__WEBPACK_IMPORTED_MODULE_6__["AboutComponent"], _core__WEBPACK_IMPORTED_MODULE_9__["declarations"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forRoot(_router__WEBPACK_IMPORTED_MODULE_3__["routes"]), _store_store_module__WEBPACK_IMPORTED_MODULE_5__["AppStoreModule"], _build_specific__WEBPACK_IMPORTED_MODULE_8__["externalModules"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/build-specific/index.ts":
  /*!*****************************************!*\
    !*** ./src/app/build-specific/index.ts ***!
    \*****************************************/

  /*! exports provided: externalModules */

  /***/
  function srcAppBuildSpecificIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "externalModules", function () {
      return externalModules;
    });
    /* harmony import */


    var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @ngrx/store-devtools */
    "./node_modules/@ngrx/store-devtools/__ivy_ngcc__/fesm2015/store-devtools.js");
    /**
     * Put dev specific code here, and prod specific code in index.prod.ts
     * https://ngrx.io/guide/store-devtools/recipes/exclude
     */


    var externalModules = [_ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_0__["StoreDevtoolsModule"].instrument({
      maxAge: 25
    })];
    /***/
  },

  /***/
  "./src/app/core/components/header-bar-brand.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/core/components/header-bar-brand.component.ts ***!
    \***************************************************************/

  /*! exports provided: HeaderBarBrandComponent */

  /***/
  function srcAppCoreComponentsHeaderBarBrandComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderBarBrandComponent", function () {
      return HeaderBarBrandComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HeaderBarBrandComponent = function HeaderBarBrandComponent() {
      _classCallCheck(this, HeaderBarBrandComponent);
    };

    HeaderBarBrandComponent.ɵfac = function HeaderBarBrandComponent_Factory(t) {
      return new (t || HeaderBarBrandComponent)();
    };

    HeaderBarBrandComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderBarBrandComponent,
      selectors: [["app-header-bar-brand"]],
      decls: 10,
      vars: 0,
      consts: [[1, "navbar-brand"], ["href", "https://angular.io/", "target", "_blank", "rel", "noopener noreferrer", 1, "navbar-item"], ["aria-hidden", "true", 1, "fab", "js-logo", "fa-angular", "fa-2x"], ["router-link", "/", 1, "navbar-item", "nav-home"], [1, "brand-first"], [1, "brand-second"], [1, "brand-third"]],
      template: function HeaderBarBrandComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "MY");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "SHOPPING");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "LIST");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderBarBrandComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header-bar-brand',
          template: "\n    <div class=\"navbar-brand\">\n      <a\n        class=\"navbar-item\"\n        href=\"https://angular.io/\"\n        target=\"_blank\"\n        rel=\"noopener noreferrer\"\n      >\n        <i class=\"fab js-logo fa-angular fa-2x\" aria-hidden=\"true\"></i>\n      </a>\n      <a class=\"navbar-item nav-home\" router-link=\"/\">\n        <span class=\"brand-first\">MY</span>\n        <span class=\"brand-second\">SHOPPING</span>\n        <span class=\"brand-third\">LIST</span>\n      </a>\n    </div>\n  "
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/components/header-bar.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/core/components/header-bar.component.ts ***!
    \*********************************************************/

  /*! exports provided: HeaderBarComponent */

  /***/
  function srcAppCoreComponentsHeaderBarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderBarComponent", function () {
      return HeaderBarComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _header_bar_brand_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header-bar-brand.component */
    "./src/app/core/components/header-bar-brand.component.ts");

    var HeaderBarComponent = function HeaderBarComponent() {
      _classCallCheck(this, HeaderBarComponent);
    };

    HeaderBarComponent.ɵfac = function HeaderBarComponent_Factory(t) {
      return new (t || HeaderBarComponent)();
    };

    HeaderBarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderBarComponent,
      selectors: [["app-header-bar"]],
      decls: 3,
      vars: 0,
      consts: [["role", "navigation", "aria-label", "main navigation", 1, "navbar", "has-background-dark", "is-dark"]],
      template: function HeaderBarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header-bar-brand");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_header_bar_brand_component__WEBPACK_IMPORTED_MODULE_1__["HeaderBarBrandComponent"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderBarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header-bar',
          template: "\n    <header>\n      <nav\n        class=\"navbar has-background-dark is-dark\"\n        role=\"navigation\"\n        aria-label=\"main navigation\"\n      >\n        <app-header-bar-brand></app-header-bar-brand>\n      </nav>\n    </header>\n  "
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/components/index.ts":
  /*!******************************************!*\
    !*** ./src/app/core/components/index.ts ***!
    \******************************************/

  /*! exports provided: HeaderBarComponent, HeaderBarBrandComponent, NavComponent, NotFoundComponent, declarations */

  /***/
  function srcAppCoreComponentsIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "declarations", function () {
      return declarations;
    });
    /* harmony import */


    var _header_bar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./header-bar.component */
    "./src/app/core/components/header-bar.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HeaderBarComponent", function () {
      return _header_bar_component__WEBPACK_IMPORTED_MODULE_0__["HeaderBarComponent"];
    });
    /* harmony import */


    var _header_bar_brand_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./header-bar-brand.component */
    "./src/app/core/components/header-bar-brand.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HeaderBarBrandComponent", function () {
      return _header_bar_brand_component__WEBPACK_IMPORTED_MODULE_1__["HeaderBarBrandComponent"];
    });
    /* harmony import */


    var _nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./nav.component */
    "./src/app/core/components/nav.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
      return _nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"];
    });
    /* harmony import */


    var _not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./not-found.component */
    "./src/app/core/components/not-found.component.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return _not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"];
    });

    var declarations = [_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"], _header_bar_component__WEBPACK_IMPORTED_MODULE_0__["HeaderBarComponent"], _header_bar_brand_component__WEBPACK_IMPORTED_MODULE_1__["HeaderBarBrandComponent"], _not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]];
    /***/
  },

  /***/
  "./src/app/core/components/nav.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/core/components/nav.component.ts ***!
    \**************************************************/

  /*! exports provided: NavComponent */

  /***/
  function srcAppCoreComponentsNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
      return NavComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var NavComponent = function NavComponent() {
      _classCallCheck(this, NavComponent);
    };

    NavComponent.ɵfac = function NavComponent_Factory(t) {
      return new (t || NavComponent)();
    };

    NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavComponent,
      selectors: [["app-nav"]],
      decls: 10,
      vars: 0,
      consts: [[1, "menu"], [1, "menu-label"], [1, "menu-list"], ["routerLink", "/products", "routerLinkActive", "router-link-active"], ["routerLink", "/about", "routerLinkActive", "router-link-active"]],
      template: function NavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Menu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Products");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav',
          template: "\n    <nav class=\"menu\">\n      <p class=\"menu-label\">Menu</p>\n      <ul class=\"menu-list\">\n        <a routerLink=\"/products\" routerLinkActive=\"router-link-active\">\n          <span>Products</span>\n        </a>\n        <a routerLink=\"/about\" routerLinkActive=\"router-link-active\">\n          <span>About</span>\n        </a>\n      </ul>\n    </nav>\n  "
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/components/not-found.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/core/components/not-found.component.ts ***!
    \********************************************************/

  /*! exports provided: NotFoundComponent */

  /***/
  function srcAppCoreComponentsNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var NotFoundComponent = function NotFoundComponent() {
      _classCallCheck(this, NotFoundComponent);
    };

    NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) {
      return new (t || NotFoundComponent)();
    };

    NotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NotFoundComponent,
      selectors: [["app-not-found"]],
      decls: 6,
      vars: 0,
      consts: [[1, "content-container"], [1, "content-title-group", "not-found"], ["aria-hidden", "true", 1, "fas", "fa-exclamation-triangle"], [1, "title"]],
      template: function NotFoundComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " \xA0 ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "These aren't the bits you're looking for");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      encapsulation: 2
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-not-found',
          template: "\n    <div class=\"content-container\">\n      <div class=\"content-title-group not-found\">\n        <i class=\"fas fa-exclamation-triangle\" aria-hidden=\"true\"></i> &nbsp;\n        <span class=\"title\">These aren't the bits you're looking for</span>\n      </div>\n    </div>\n  "
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/index.ts":
  /*!*******************************!*\
    !*** ./src/app/core/index.ts ***!
    \*******************************/

  /*! exports provided: HeaderBarComponent, HeaderBarBrandComponent, NavComponent, NotFoundComponent, declarations, Product */

  /***/
  function srcAppCoreIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./components */
    "./src/app/core/components/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HeaderBarComponent", function () {
      return _components__WEBPACK_IMPORTED_MODULE_0__["HeaderBarComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "HeaderBarBrandComponent", function () {
      return _components__WEBPACK_IMPORTED_MODULE_0__["HeaderBarBrandComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
      return _components__WEBPACK_IMPORTED_MODULE_0__["NavComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return _components__WEBPACK_IMPORTED_MODULE_0__["NotFoundComponent"];
    });
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "declarations", function () {
      return _components__WEBPACK_IMPORTED_MODULE_0__["declarations"];
    });
    /* harmony import */


    var _model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./model */
    "./src/app/core/model/index.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Product", function () {
      return _model__WEBPACK_IMPORTED_MODULE_1__["Product"];
    });
    /***/

  },

  /***/
  "./src/app/core/model/index.ts":
  /*!*************************************!*\
    !*** ./src/app/core/model/index.ts ***!
    \*************************************/

  /*! exports provided: Product */

  /***/
  function srcAppCoreModelIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./product */
    "./src/app/core/model/product.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "Product", function () {
      return _product__WEBPACK_IMPORTED_MODULE_0__["Product"];
    });
    /***/

  },

  /***/
  "./src/app/core/model/product.ts":
  /*!***************************************!*\
    !*** ./src/app/core/model/product.ts ***!
    \***************************************/

  /*! exports provided: Product */

  /***/
  function srcAppCoreModelProductTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Product", function () {
      return Product;
    });

    var Product = function Product() {
      _classCallCheck(this, Product);
    };
    /***/

  },

  /***/
  "./src/app/router.ts":
  /*!***************************!*\
    !*** ./src/app/router.ts ***!
    \***************************/

  /*! exports provided: routes */

  /***/
  function srcAppRouterTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony import */


    var _about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./about.component */
    "./src/app/about.component.ts");
    /* harmony import */


    var _core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./core */
    "./src/app/core/index.ts");

    var routes = [{
      path: '',
      pathMatch: 'full',
      redirectTo: 'products'
    }, {
      path: 'products',
      loadChildren: function loadChildren() {
        return __webpack_require__.e(
        /*! import() | products-products-module */
        "products-products-module").then(__webpack_require__.bind(null,
        /*! ./products/products.module */
        "./src/app/products/products.module.ts")).then(function (m) {
          return m.ProductsModule;
        });
      }
    }, {
      path: 'about',
      component: _about_component__WEBPACK_IMPORTED_MODULE_0__["AboutComponent"]
    }, {
      path: '**',
      component: _core__WEBPACK_IMPORTED_MODULE_1__["NotFoundComponent"]
    }];
    /***/
  },

  /***/
  "./src/app/store/config.ts":
  /*!*********************************!*\
    !*** ./src/app/store/config.ts ***!
    \*********************************/

  /*! exports provided: defaultDataServiceConfig */

  /***/
  function srcAppStoreConfigTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "defaultDataServiceConfig", function () {
      return defaultDataServiceConfig;
    });
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../environments/environment */
    "./src/environments/environment.ts");

    var root = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].API || 'api';
    var defaultDataServiceConfig = {
      root: root,
      entityHttpResourceUrls: {
        Product: {
          // You must specify the root as part of the resource URL.
          entityResourceUrl: "".concat(root, "/products/"),
          collectionResourceUrl: "".concat(root, "/products/")
        }
      }
    };
    /***/
  },

  /***/
  "./src/app/store/entity-metadata.ts":
  /*!******************************************!*\
    !*** ./src/app/store/entity-metadata.ts ***!
    \******************************************/

  /*! exports provided: entityConfig */

  /***/
  function srcAppStoreEntityMetadataTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "entityConfig", function () {
      return entityConfig;
    });

    var entityMetadata = {
      Product: {}
    };
    var entityConfig = {
      entityMetadata: entityMetadata
    };
    /***/
  },

  /***/
  "./src/app/store/store.module.ts":
  /*!***************************************!*\
    !*** ./src/app/store/store.module.ts ***!
    \***************************************/

  /*! exports provided: AppStoreModule */

  /***/
  function srcAppStoreStoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppStoreModule", function () {
      return AppStoreModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ngrx/effects */
    "./node_modules/@ngrx/effects/__ivy_ngcc__/fesm2015/effects.js");
    /* harmony import */


    var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ngrx/store */
    "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/store.js");
    /* harmony import */


    var _ngrx_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ngrx/data */
    "./node_modules/@ngrx/data/__ivy_ngcc__/fesm2015/data.js");
    /* harmony import */


    var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./config */
    "./src/app/store/config.ts");
    /* harmony import */


    var _entity_metadata__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./entity-metadata */
    "./src/app/store/entity-metadata.ts");

    var AppStoreModule = function AppStoreModule() {
      _classCallCheck(this, AppStoreModule);
    };

    AppStoreModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppStoreModule
    });
    AppStoreModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppStoreModule_Factory(t) {
        return new (t || AppStoreModule)();
      },
      providers: [{
        provide: _ngrx_data__WEBPACK_IMPORTED_MODULE_3__["DefaultDataServiceConfig"],
        useValue: _config__WEBPACK_IMPORTED_MODULE_4__["defaultDataServiceConfig"]
      }],
      imports: [[_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forRoot({}), _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsModule"].forRoot([]), _ngrx_data__WEBPACK_IMPORTED_MODULE_3__["EntityDataModule"].forRoot(_entity_metadata__WEBPACK_IMPORTED_MODULE_5__["entityConfig"])]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppStoreModule, {
        imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreRootModule"], _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsRootModule"], _ngrx_data__WEBPACK_IMPORTED_MODULE_3__["EntityDataModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppStoreModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forRoot({}), _ngrx_effects__WEBPACK_IMPORTED_MODULE_1__["EffectsModule"].forRoot([]), _ngrx_data__WEBPACK_IMPORTED_MODULE_3__["EntityDataModule"].forRoot(_entity_metadata__WEBPACK_IMPORTED_MODULE_5__["entityConfig"])],
          providers: [{
            provide: _ngrx_data__WEBPACK_IMPORTED_MODULE_3__["DefaultDataServiceConfig"],
            useValue: _config__WEBPACK_IMPORTED_MODULE_4__["defaultDataServiceConfig"]
          }]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      API: 'api'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\rfarfan\my-static-web-app\angular-app\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map