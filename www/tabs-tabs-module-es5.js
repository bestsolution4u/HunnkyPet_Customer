function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tabs-tabs-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTabsTabsPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-tabs #appTabs (ionTabsDidChange)=\"ionChange(appTabs)\">\n  <ion-tab-bar slot=\"bottom\">\n    <ion-tab-button tab=\"{{config.getCurrentHomePage()}}\">\n      <img *ngIf=\"showImg()\" src=\"assets/left-menu-icon/home.png\">\n      <ion-icon *ngIf=\"!showImg()\" name=\"home\"></ion-icon>\n      <ion-label>\n        <b>{{'Home'|translate}}</b>\n      </ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"search\">\n      <img *ngIf=\"showImg()\" src=\"assets/left-menu-icon/search.png\">\n      <ion-icon *ngIf=\"!showImg()\" name=\"search\"></ion-icon>\n      <ion-label>\n        <b>{{'Search'|translate}}</b>\n      </ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"{{config.getCurrentCategoriesPage()}}\">\n      <img *ngIf=\"showImg()\" style=\"width: 40%;\" src=\"assets/left-menu-icon/category.png\">\n      <ion-icon *ngIf=\"!showImg()\" name=\"apps\"></ion-icon>\n      <ion-label>\n        <b>{{'Categories'|translate}}</b>\n      </ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"cart\">\n      <img *ngIf=\"showImg()\" src=\"assets/left-menu-icon/bag.png\">\n      <ion-icon *ngIf=\"!showImg()\" name=\"basket\"></ion-icon>\n      <ion-badge mode=\"ios\" color=\"secondary\" [class.bag-fix]=\"showImg()\">{{shared.cartTotalItems()}}</ion-badge>\n      <ion-label>\n        <b>{{'My Cart'|translate}}</b>\n      </ion-label>\n    </ion-tab-button>\n    <ion-tab-button tab=\"settings\">\n      <img *ngIf=\"showImg()\" src=\"assets/left-menu-icon/user.png\">\n      <ion-icon *ngIf=\"!showImg()\" name=\"person\"></ion-icon>\n      <ion-label>\n        <b>{{'Account'|translate}}</b>\n      </ion-label>\n    </ion-tab-button>\n  </ion-tab-bar>\n\n</ion-tabs>";
    /***/
  },

  /***/
  "./src/app/tabs/tabs-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/tabs/tabs-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: TabsPageRoutingModule */

  /***/
  function srcAppTabsTabsRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageRoutingModule", function () {
      return TabsPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");
    /* harmony import */


    var _providers_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../providers/auth-guard/auth-guard.service */
    "./src/providers/auth-guard/auth-guard.service.ts");

    var productDetailPage = {
      path: 'product-detail/:id',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | product-detail-product-detail-module */
        [__webpack_require__.e("default~address-pages-billing-address-billing-address-module~address-pages-shipping-address-shipping~1cfa3015"), __webpack_require__.e("product-detail-product-detail-module")]).then(__webpack_require__.bind(null,
        /*! ../product-detail/product-detail.module */
        "./src/app/product-detail/product-detail.module.ts")).then(function (m) {
          return m.ProductDetailPageModule;
        });
      }
    };
    var productsPage = {
      path: 'products/:id/:name/:type',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | products-products-module */
        [__webpack_require__.e("default~address-pages-billing-address-billing-address-module~address-pages-shipping-address-shipping~1cfa3015"), __webpack_require__.e("products-products-module")]).then(__webpack_require__.bind(null,
        /*! ../products/products.module */
        "./src/app/products/products.module.ts")).then(function (m) {
          return m.ProductsPageModule;
        });
      }
    };
    var categories = {
      path: 'categories/:parent/:name',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | categorie-pages-categories-categories-module */
        [__webpack_require__.e("default~address-pages-billing-address-billing-address-module~address-pages-shipping-address-shipping~1cfa3015"), __webpack_require__.e("categorie-pages-categories-categories-module")]).then(__webpack_require__.bind(null,
        /*! ../categorie-pages/categories/categories.module */
        "./src/app/categorie-pages/categories/categories.module.ts")).then(function (m) {
          return m.CategoriesPageModule;
        });
      }
    };
    var categories2 = {
      path: 'categories2/:parent/:name',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | categorie-pages-categories2-categories2-module */
        [__webpack_require__.e("default~address-pages-billing-address-billing-address-module~address-pages-shipping-address-shipping~1cfa3015"), __webpack_require__.e("categorie-pages-categories2-categories2-module")]).then(__webpack_require__.bind(null,
        /*! ../categorie-pages/categories2/categories2.module */
        "./src/app/categorie-pages/categories2/categories2.module.ts")).then(function (m) {
          return m.Categories2PageModule;
        });
      }
    };
    var categories3 = {
      path: 'categories3/:parent/:name',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | categorie-pages-categories3-categories3-module */
        [__webpack_require__.e("default~address-pages-billing-address-billing-address-module~address-pages-shipping-address-shipping~1cfa3015"), __webpack_require__.e("categorie-pages-categories3-categories3-module")]).then(__webpack_require__.bind(null,
        /*! ../categorie-pages/categories3/categories3.module */
        "./src/app/categorie-pages/categories3/categories3.module.ts")).then(function (m) {
          return m.Categories3PageModule;
        });
      }
    };
    var categories4 = {
      path: 'categories4/:parent/:name',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | categorie-pages-categories4-categories4-module */
        [__webpack_require__.e("default~address-pages-billing-address-billing-address-module~address-pages-shipping-address-shipping~1cfa3015"), __webpack_require__.e("categorie-pages-categories4-categories4-module")]).then(__webpack_require__.bind(null,
        /*! ../categorie-pages/categories4/categories4.module */
        "./src/app/categorie-pages/categories4/categories4.module.ts")).then(function (m) {
          return m.Categories4PageModule;
        });
      }
    };
    var categories5 = {
      path: 'categories5/:parent/:name',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | categorie-pages-categories5-categories5-module */
        [__webpack_require__.e("default~address-pages-billing-address-billing-address-module~address-pages-shipping-address-shipping~1cfa3015"), __webpack_require__.e("categorie-pages-categories5-categories5-module")]).then(__webpack_require__.bind(null,
        /*! ../categorie-pages/categories5/categories5.module */
        "./src/app/categorie-pages/categories5/categories5.module.ts")).then(function (m) {
          return m.Categories5PageModule;
        });
      }
    };
    var categories6 = {
      path: 'categories6/:parent/:name',
      loadChildren: function loadChildren() {
        return Promise.all(
        /*! import() | categorie-pages-categories6-categories6-module */
        [__webpack_require__.e("default~address-pages-billing-address-billing-address-module~address-pages-shipping-address-shipping~1cfa3015"), __webpack_require__.e("categorie-pages-categories6-categories6-module")]).then(__webpack_require__.bind(null,
        /*! ../categorie-pages/categories6/categories6.module */
        "./src/app/categorie-pages/categories6/categories6.module.ts")).then(function (m) {
          return m.Categories6PageModule;
        });
      }
    };
    var routes = [{
      path: 'tabs',
      component: _tabs_page__WEBPACK_IMPORTED_MODULE_3__["TabsPage"],
      children: [{
        path: 'home',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | home-pages-home-home-module */
            [__webpack_require__.e("default~address-pages-billing-address-billing-address-module~address-pages-shipping-address-shipping~1cfa3015"), __webpack_require__.e("home-pages-home-home-module")]).then(__webpack_require__.bind(null,
            /*! ../home-pages/home/home.module */
            "./src/app/home-pages/home/home.module.ts")).then(function (m) {
              return m.HomePageModule;
            });
          }
        }, productDetailPage, productsPage]
      }, {
        path: 'home2',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | home-pages-home2-home2-module */
            [__webpack_require__.e("default~address-pages-billing-address-billing-address-module~address-pages-shipping-address-shipping~1cfa3015"), __webpack_require__.e("home-pages-home2-home2-module")]).then(__webpack_require__.bind(null,
            /*! ../home-pages/home2/home2.module */
            "./src/app/home-pages/home2/home2.module.ts")).then(function (m) {
              return m.Home2PageModule;
            });
          }
        }, productDetailPage, productsPage]
      }, {
        path: 'home3',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | home-pages-home3-home3-module */
            [__webpack_require__.e("default~address-pages-billing-address-billing-address-module~address-pages-shipping-address-shipping~1cfa3015"), __webpack_require__.e("home-pages-home3-home3-module")]).then(__webpack_require__.bind(null,
            /*! ../home-pages/home3/home3.module */
            "./src/app/home-pages/home3/home3.module.ts")).then(function (m) {
              return m.Home3PageModule;
            });
          }
        }, productDetailPage, productsPage]
      }, {
        path: 'home4',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | home-pages-home4-home4-module */
            [__webpack_require__.e("default~address-pages-billing-address-billing-address-module~address-pages-shipping-address-shipping~1cfa3015"), __webpack_require__.e("home-pages-home4-home4-module")]).then(__webpack_require__.bind(null,
            /*! ../home-pages/home4/home4.module */
            "./src/app/home-pages/home4/home4.module.ts")).then(function (m) {
              return m.Home4PageModule;
            });
          }
        }, productDetailPage, productsPage]
      }, {
        path: 'home5',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | home-pages-home5-home5-module */
            [__webpack_require__.e("default~address-pages-billing-address-billing-address-module~address-pages-shipping-address-shipping~1cfa3015"), __webpack_require__.e("home-pages-home5-home5-module")]).then(__webpack_require__.bind(null,
            /*! ../home-pages/home5/home5.module */
            "./src/app/home-pages/home5/home5.module.ts")).then(function (m) {
              return m.Home5PageModule;
            });
          }
        }, productDetailPage, productsPage, categories6]
      }, {
        path: 'home6',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | home-pages-home6-home6-module */
            [__webpack_require__.e("default~address-pages-billing-address-billing-address-module~address-pages-shipping-address-shipping~1cfa3015"), __webpack_require__.e("home-pages-home6-home6-module")]).then(__webpack_require__.bind(null,
            /*! ../home-pages/home6/home6.module */
            "./src/app/home-pages/home6/home6.module.ts")).then(function (m) {
              return m.Home6PageModule;
            });
          }
        }, productDetailPage, productsPage, categories, categories2, categories3, categories4, categories5, categories6]
      }, {
        path: 'home7',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | home-pages-home7-home7-module */
            [__webpack_require__.e("default~address-pages-billing-address-billing-address-module~address-pages-shipping-address-shipping~1cfa3015"), __webpack_require__.e("home-pages-home7-home7-module")]).then(__webpack_require__.bind(null,
            /*! ../home-pages/home7/home7.module */
            "./src/app/home-pages/home7/home7.module.ts")).then(function (m) {
              return m.Home7PageModule;
            });
          }
        }, productDetailPage, productsPage]
      }, {
        path: 'home8',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | home-pages-home8-home8-module */
            [__webpack_require__.e("default~address-pages-billing-address-billing-address-module~address-pages-shipping-address-shipping~1cfa3015"), __webpack_require__.e("home-pages-home8-home8-module")]).then(__webpack_require__.bind(null,
            /*! ../home-pages/home8/home8.module */
            "./src/app/home-pages/home8/home8.module.ts")).then(function (m) {
              return m.Home8PageModule;
            });
          }
        }, productDetailPage, productsPage]
      }, {
        path: 'home9',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | home-pages-home9-home9-module */
            [__webpack_require__.e("default~address-pages-billing-address-billing-address-module~address-pages-shipping-address-shipping~1cfa3015"), __webpack_require__.e("home-pages-home9-home9-module")]).then(__webpack_require__.bind(null,
            /*! ../home-pages/home9/home9.module */
            "./src/app/home-pages/home9/home9.module.ts")).then(function (m) {
              return m.Home9PageModule;
            });
          }
        }, productDetailPage, productsPage, categories, categories2, categories3, categories4, categories5, categories6]
      }, {
        path: 'home10',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | home-pages-home10-home10-module */
            [__webpack_require__.e("default~address-pages-billing-address-billing-address-module~address-pages-shipping-address-shipping~1cfa3015"), __webpack_require__.e("home-pages-home10-home10-module")]).then(__webpack_require__.bind(null,
            /*! ../home-pages/home10/home10.module */
            "./src/app/home-pages/home10/home10.module.ts")).then(function (m) {
              return m.Home10PageModule;
            });
          }
        }, productDetailPage, productsPage, categories, categories2, categories3, categories4, categories5, categories6]
      }, {
        path: 'categories',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | categorie-pages-categories-categories-module */
            [__webpack_require__.e("default~address-pages-billing-address-billing-address-module~address-pages-shipping-address-shipping~1cfa3015"), __webpack_require__.e("categorie-pages-categories-categories-module")]).then(__webpack_require__.bind(null,
            /*! ../categorie-pages/categories/categories.module */
            "./src/app/categorie-pages/categories/categories.module.ts")).then(function (m) {
              return m.CategoriesPageModule;
            });
          }
        }, categories, productDetailPage, productsPage]
      }, {
        path: 'categories2',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | categorie-pages-categories2-categories2-module */
            [__webpack_require__.e("default~address-pages-billing-address-billing-address-module~address-pages-shipping-address-shipping~1cfa3015"), __webpack_require__.e("categorie-pages-categories2-categories2-module")]).then(__webpack_require__.bind(null,
            /*! ../categorie-pages/categories2/categories2.module */
            "./src/app/categorie-pages/categories2/categories2.module.ts")).then(function (m) {
              return m.Categories2PageModule;
            });
          }
        }, categories2, productDetailPage, productsPage]
      }, {
        path: 'categories3',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | categorie-pages-categories3-categories3-module */
            [__webpack_require__.e("default~address-pages-billing-address-billing-address-module~address-pages-shipping-address-shipping~1cfa3015"), __webpack_require__.e("categorie-pages-categories3-categories3-module")]).then(__webpack_require__.bind(null,
            /*! ../categorie-pages/categories3/categories3.module */
            "./src/app/categorie-pages/categories3/categories3.module.ts")).then(function (m) {
              return m.Categories3PageModule;
            });
          }
        }, categories3, productDetailPage, productsPage]
      }, {
        path: 'categories4',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | categorie-pages-categories4-categories4-module */
            [__webpack_require__.e("default~address-pages-billing-address-billing-address-module~address-pages-shipping-address-shipping~1cfa3015"), __webpack_require__.e("categorie-pages-categories4-categories4-module")]).then(__webpack_require__.bind(null,
            /*! ../categorie-pages/categories4/categories4.module */
            "./src/app/categorie-pages/categories4/categories4.module.ts")).then(function (m) {
              return m.Categories4PageModule;
            });
          }
        }, categories4, productDetailPage, productsPage]
      }, {
        path: 'categories5',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | categorie-pages-categories5-categories5-module */
            [__webpack_require__.e("default~address-pages-billing-address-billing-address-module~address-pages-shipping-address-shipping~1cfa3015"), __webpack_require__.e("categorie-pages-categories5-categories5-module")]).then(__webpack_require__.bind(null,
            /*! ../categorie-pages/categories5/categories5.module */
            "./src/app/categorie-pages/categories5/categories5.module.ts")).then(function (m) {
              return m.Categories5PageModule;
            });
          }
        }, categories5, productDetailPage, productsPage]
      }, {
        path: 'categories6',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | categorie-pages-categories6-categories6-module */
            [__webpack_require__.e("default~address-pages-billing-address-billing-address-module~address-pages-shipping-address-shipping~1cfa3015"), __webpack_require__.e("categorie-pages-categories6-categories6-module")]).then(__webpack_require__.bind(null,
            /*! ../categorie-pages/categories6/categories6.module */
            "./src/app/categorie-pages/categories6/categories6.module.ts")).then(function (m) {
              return m.Categories6PageModule;
            });
          }
        }, categories6, productDetailPage, productsPage]
      }, {
        path: 'cart',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | cart-cart-module */
            [__webpack_require__.e("default~cart-cart-module~order-order-module"), __webpack_require__.e("cart-cart-module")]).then(__webpack_require__.bind(null,
            /*! ../cart/cart.module */
            "./src/app/cart/cart.module.ts")).then(function (m) {
              return m.CartPageModule;
            });
          }
        }, {
          path: 'order',
          canActivate: [_providers_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
          data: {
            hideGuestLogin: false
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | order-order-module */
            [__webpack_require__.e("default~cart-cart-module~order-order-module"), __webpack_require__.e("order-order-module")]).then(__webpack_require__.bind(null,
            /*! ../order/order.module */
            "./src/app/order/order.module.ts")).then(function (m) {
              return m.OrderPageModule;
            });
          }
        }, {
          path: 'shipping-method',
          canActivate: [_providers_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
          data: {
            hideGuestLogin: false
          },
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | shipping-method-shipping-method-module */
            "shipping-method-shipping-method-module").then(__webpack_require__.bind(null,
            /*! ../shipping-method/shipping-method.module */
            "./src/app/shipping-method/shipping-method.module.ts")).then(function (m) {
              return m.ShippingMethodPageModule;
            });
          }
        }, {
          path: 'thank-you',
          canActivate: [_providers_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
          data: {
            hideGuestLogin: false
          },
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | thank-you-thank-you-module */
            "thank-you-thank-you-module").then(__webpack_require__.bind(null,
            /*! ../thank-you/thank-you.module */
            "./src/app/thank-you/thank-you.module.ts")).then(function (m) {
              return m.ThankYouPageModule;
            });
          }
        }, {
          path: 'billing-address',
          canActivate: [_providers_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
          data: {
            hideGuestLogin: false
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | address-pages-billing-address-billing-address-module */
            [__webpack_require__.e("default~address-pages-billing-address-billing-address-module~address-pages-shipping-address-shipping~1cfa3015"), __webpack_require__.e("address-pages-billing-address-billing-address-module")]).then(__webpack_require__.bind(null,
            /*! ../address-pages/billing-address/billing-address.module */
            "./src/app/address-pages/billing-address/billing-address.module.ts")).then(function (m) {
              return m.BillingAddressPageModule;
            });
          }
        }, {
          path: 'shipping-address',
          canActivate: [_providers_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
          data: {
            hideGuestLogin: false
          },
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | address-pages-shipping-address-shipping-address-module */
            [__webpack_require__.e("default~address-pages-billing-address-billing-address-module~address-pages-shipping-address-shipping~1cfa3015"), __webpack_require__.e("address-pages-shipping-address-shipping-address-module")]).then(__webpack_require__.bind(null,
            /*! ../address-pages/shipping-address/shipping-address.module */
            "./src/app/address-pages/shipping-address/shipping-address.module.ts")).then(function (m) {
              return m.ShippingAddressPageModule;
            });
          }
        }, productDetailPage]
      }, {
        path: 'search',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | search-search-module */
            [__webpack_require__.e("default~address-pages-billing-address-billing-address-module~address-pages-shipping-address-shipping~1cfa3015"), __webpack_require__.e("search-search-module")]).then(__webpack_require__.bind(null,
            /*! ../search/search.module */
            "./src/app/search/search.module.ts")).then(function (m) {
              return m.SearchPageModule;
            });
          }
        }, productDetailPage, productsPage]
      }, {
        path: 'settings',
        children: [{
          path: '',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | settings-settings-module */
            "settings-settings-module").then(__webpack_require__.bind(null,
            /*! ../settings/settings.module */
            "./src/app/settings/settings.module.ts")).then(function (m) {
              return m.SettingsPageModule;
            });
          }
        }, {
          path: 'my-orders',
          canActivate: [_providers_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | my-orders-my-orders-module */
            "my-orders-my-orders-module").then(__webpack_require__.bind(null,
            /*! ../my-orders/my-orders.module */
            "./src/app/my-orders/my-orders.module.ts")).then(function (m) {
              return m.MyOrdersPageModule;
            });
          }
        }, {
          path: 'my-account',
          canActivate: [_providers_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | my-account-my-account-module */
            "my-account-my-account-module").then(__webpack_require__.bind(null,
            /*! ../my-account/my-account.module */
            "./src/app/my-account/my-account.module.ts")).then(function (m) {
              return m.MyAccountPageModule;
            });
          }
        }, {
          path: 'change-password',
          canActivate: [_providers_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | change-password-change-password-module */
            [__webpack_require__.e("default~address-pages-billing-address-billing-address-module~address-pages-shipping-address-shipping~1cfa3015"), __webpack_require__.e("change-password-change-password-module")]).then(__webpack_require__.bind(null,
            /*! ../change-password/change-password.module */
            "./src/app/change-password/change-password.module.ts")).then(function (m) {
              return m.ChangePasswordPageModule;
            });
          }
        }, {
          path: 'news',
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | news-news-module */
            [__webpack_require__.e("default~address-pages-billing-address-billing-address-module~address-pages-shipping-address-shipping~1cfa3015"), __webpack_require__.e("news-news-module")]).then(__webpack_require__.bind(null,
            /*! ../news/news.module */
            "./src/app/news/news.module.ts")).then(function (m) {
              return m.NewsPageModule;
            });
          }
        }, {
          path: 'news-detail',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | news-detail-news-detail-module */
            "news-detail-news-detail-module").then(__webpack_require__.bind(null,
            /*! ../news-detail/news-detail.module */
            "./src/app/news-detail/news-detail.module.ts")).then(function (m) {
              return m.NewsDetailPageModule;
            });
          }
        }, {
          path: 'news-list/:id/:name',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | news-list-news-list-module */
            "news-list-news-list-module").then(__webpack_require__.bind(null,
            /*! ../news-list/news-list.module */
            "./src/app/news-list/news-list.module.ts")).then(function (m) {
              return m.NewsListPageModule;
            });
          }
        }, {
          path: 'wish-list',
          canActivate: [_providers_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
          loadChildren: function loadChildren() {
            return Promise.all(
            /*! import() | wish-list-wish-list-module */
            [__webpack_require__.e("default~address-pages-billing-address-billing-address-module~address-pages-shipping-address-shipping~1cfa3015"), __webpack_require__.e("wish-list-wish-list-module")]).then(__webpack_require__.bind(null,
            /*! ../wish-list/wish-list.module */
            "./src/app/wish-list/wish-list.module.ts")).then(function (m) {
              return m.WishListPageModule;
            });
          }
        }, {
          path: 'addresses',
          canActivate: [_providers_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | address-pages-addresses-addresses-module */
            "address-pages-addresses-addresses-module").then(__webpack_require__.bind(null,
            /*! ../address-pages/addresses/addresses.module */
            "./src/app/address-pages/addresses/addresses.module.ts")).then(function (m) {
              return m.AddressesPageModule;
            });
          }
        }, {
          path: 'my-order-detail',
          canActivate: [_providers_auth_guard_auth_guard_service__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]],
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | my-order-detail-my-order-detail-module */
            "my-order-detail-my-order-detail-module").then(__webpack_require__.bind(null,
            /*! ../my-order-detail/my-order-detail.module */
            "./src/app/my-order-detail/my-order-detail.module.ts")).then(function (m) {
              return m.MyOrderDetailPageModule;
            });
          }
        }, {
          path: 'intro',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | intro-intro-module */
            "intro-intro-module").then(__webpack_require__.bind(null,
            /*! ../intro/intro.module */
            "./src/app/intro/intro.module.ts")).then(function (m) {
              return m.IntroPageModule;
            });
          }
        }, {
          path: 'contact-us',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | contact-us-contact-us-module */
            "contact-us-contact-us-module").then(__webpack_require__.bind(null,
            /*! ../contact-us/contact-us.module */
            "./src/app/contact-us/contact-us.module.ts")).then(function (m) {
              return m.ContactUsPageModule;
            });
          }
        }, {
          path: 'about-us',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() | about-us-about-us-module */
            "about-us-about-us-module").then(__webpack_require__.bind(null,
            /*! ../about-us/about-us.module */
            "./src/app/about-us/about-us.module.ts")).then(function (m) {
              return m.AboutUsPageModule;
            });
          }
        }, productDetailPage]
      }]
    }];

    var TabsPageRoutingModule = function TabsPageRoutingModule() {
      _classCallCheck(this, TabsPageRoutingModule);
    };

    TabsPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TabsPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.module.ts":
  /*!*************************************!*\
    !*** ./src/app/tabs/tabs.module.ts ***!
    \*************************************/

  /*! exports provided: TabsPageModule */

  /***/
  function srcAppTabsTabsModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPageModule", function () {
      return TabsPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./tabs-routing.module */
    "./src/app/tabs/tabs-routing.module.ts");
    /* harmony import */


    var _tabs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./tabs.page */
    "./src/app/tabs/tabs.page.ts");
    /* harmony import */


    var src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/pipes/pipes.module */
    "./src/pipes/pipes.module.ts");

    var TabsPageModule = function TabsPageModule() {
      _classCallCheck(this, TabsPageModule);
    };

    TabsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _tabs_routing_module__WEBPACK_IMPORTED_MODULE_5__["TabsPageRoutingModule"], src_pipes_pipes_module__WEBPACK_IMPORTED_MODULE_7__["PipesModule"]],
      declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_6__["TabsPage"]]
    })], TabsPageModule);
    /***/
  },

  /***/
  "./src/app/tabs/tabs.page.scss":
  /*!*************************************!*\
    !*** ./src/app/tabs/tabs.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppTabsTabsPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "ion-badge {\n  min-width: 17px;\n  min-height: 17px;\n  font-size: 11px;\n}\n\nion-badge {\n  background-color: var(--ion-color-primary);\n  color: var(--ion-color-primary-contrast);\n  border: 1px solid var(--ion-color-primary-contrast);\n}\n\nimg {\n  max-width: 50%;\n}\n\n.bag-fix {\n  top: 12%;\n  left: 55%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFicy9EOlxcUHJvamVjdHNcXElPTklDXFxjdXN0b21lci1hcHAvc3JjXFxhcHBcXHRhYnNcXHRhYnMucGFnZS5zY3NzIiwic3JjL2FwcC90YWJzL3RhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsMENBQUE7RUFDQSx3Q0FBQTtFQUNBLG1EQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQUFBO0FDRUY7O0FEQUE7RUFDRSxRQUFBO0VBQ0EsU0FBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvdGFicy90YWJzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1iYWRnZSB7XG4gIG1pbi13aWR0aDogMTdweDtcbiAgbWluLWhlaWdodDogMTdweDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuXG5pb24tYmFkZ2Uge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbn1cbmltZyB7XG4gIG1heC13aWR0aDogNTAlO1xufVxuLmJhZy1maXgge1xuICB0b3A6IDEyJTtcbiAgbGVmdDogNTUlO1xufVxuIiwiaW9uLWJhZGdlIHtcbiAgbWluLXdpZHRoOiAxN3B4O1xuICBtaW4taGVpZ2h0OiAxN3B4O1xuICBmb250LXNpemU6IDExcHg7XG59XG5cbmlvbi1iYWRnZSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xufVxuXG5pbWcge1xuICBtYXgtd2lkdGg6IDUwJTtcbn1cblxuLmJhZy1maXgge1xuICB0b3A6IDEyJTtcbiAgbGVmdDogNTUlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/tabs/tabs.page.ts":
  /*!***********************************!*\
    !*** ./src/app/tabs/tabs.page.ts ***!
    \***********************************/

  /*! exports provided: TabsPage */

  /***/
  function srcAppTabsTabsPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TabsPage", function () {
      return TabsPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/providers/shared-data/shared-data.service */
    "./src/providers/shared-data/shared-data.service.ts");
    /* harmony import */


    var src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/providers/config/config.service */
    "./src/providers/config/config.service.ts");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");

    var TabsPage = /*#__PURE__*/function () {
      function TabsPage(shared, config, navCtrl) {
        _classCallCheck(this, TabsPage);

        this.shared = shared;
        this.config = config;
        this.navCtrl = navCtrl;
        this.homePath = "./home-pages/home/home.module#HomePageModule";
      }

      _createClass(TabsPage, [{
        key: "showImg",
        value: function showImg() {
          if (this.config.defaultIcons == true) return false;else return true;
        }
      }, {
        key: "ionChange",
        value: function ionChange(appTabs) {
          this.config.currentRoute = "tabs/" + appTabs.getSelected();
          console.log(this.config.currentRoute);

          if (this.shared.customerData.customers_id == null && this.config.currentRoute == 'tabs/cart') {
            this.navCtrl.navigateForward("/tabs/cart");
          }
        }
      }]);

      return TabsPage;
    }();

    TabsPage.ctorParameters = function () {
      return [{
        type: src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"]
      }, {
        type: src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
      }];
    };

    TabsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tabs',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tabs.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tabs.page.scss */
      "./src/app/tabs/tabs.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_providers_shared_data_shared_data_service__WEBPACK_IMPORTED_MODULE_2__["SharedDataService"], src_providers_config_config_service__WEBPACK_IMPORTED_MODULE_3__["ConfigService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]])], TabsPage);
    /***/
  }
}]);
//# sourceMappingURL=tabs-tabs-module-es5.js.map