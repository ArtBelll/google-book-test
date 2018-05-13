webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/api-interceptor.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return APIInterceptor; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_token_service__ = __webpack_require__("./src/app/services/token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var APIInterceptor = /** @class */ (function () {
    function APIInterceptor(tokenService, router) {
        this.tokenService = tokenService;
        this.router = router;
        this.BASE_URL = 'https://www.googleapis.com/books/v1';
    }
    APIInterceptor.prototype.intercept = function (req, next) {
        var _this = this;
        var request = req.clone({
            url: this.BASE_URL + "/" + req.url,
            setHeaders: {
                'Authorization': "Bearer " + this.tokenService.getToken()
            }
        });
        return next.handle(request)
            .do(function (event) {
        }, function (err) {
            if (err['error']['error']['code'] === 401) {
                _this.router.navigate(['/login']);
            }
        });
    };
    APIInterceptor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_token_service__["a" /* TokenService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], APIInterceptor);
    return APIInterceptor;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_save_token_save_token_component__ = __webpack_require__("./src/app/components/save-token/save-token.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_account_account_component__ = __webpack_require__("./src/app/components/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__guards_token_guard__ = __webpack_require__("./src/app/guards/token.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_account_welcom_welcom_component__ = __webpack_require__("./src/app/components/account/welcom/welcom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__modules_shelf_components_shelves_page_shelves_page_component__ = __webpack_require__("./src/app/modules/shelf/components/shelves-page/shelves-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__modules_shelf_components_shelf_view_shelf_view_component__ = __webpack_require__("./src/app/modules/shelf/components/shelf-view/shelf-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__modules_book_components_book_view_book_view_component__ = __webpack_require__("./src/app/modules/book/components/book-view/book-view.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        redirectTo: 'account',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__["a" /* LoginComponent */]
    },
    {
        path: 'save-token',
        component: __WEBPACK_IMPORTED_MODULE_3__components_save_token_save_token_component__["a" /* SaveTokenComponent */]
    },
    {
        path: 'account',
        canActivate: [__WEBPACK_IMPORTED_MODULE_5__guards_token_guard__["a" /* TokenGuard */]],
        component: __WEBPACK_IMPORTED_MODULE_4__components_account_account_component__["a" /* AccountComponent */],
        children: [
            {
                path: '',
                component: __WEBPACK_IMPORTED_MODULE_6__components_account_welcom_welcom_component__["a" /* WelcomComponent */]
            },
            {
                path: 'shelves',
                component: __WEBPACK_IMPORTED_MODULE_7__modules_shelf_components_shelves_page_shelves_page_component__["a" /* ShelvesPageComponent */]
            },
            {
                path: 'shelf/:id',
                component: __WEBPACK_IMPORTED_MODULE_8__modules_shelf_components_shelf_view_shelf_view_component__["a" /* ShelfViewComponent */]
            },
            {
                path: 'shelf/:shelfId/book/:bookId',
                component: __WEBPACK_IMPORTED_MODULE_9__modules_book_components_book_view_book_view_component__["a" /* BookViewComponent */]
            }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_app_root_app_root_component__ = __webpack_require__("./src/app/components/app-root/app-root.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_save_token_save_token_component__ = __webpack_require__("./src/app/components/save-token/save-token.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_cookie__ = __webpack_require__("./node_modules/ngx-cookie/bundles/ngx-cookie.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ngx_cookie__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_token_service__ = __webpack_require__("./src/app/services/token.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_account_account_component__ = __webpack_require__("./src/app/components/account/account.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guards_token_guard__ = __webpack_require__("./src/app/guards/token.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__api_interceptor__ = __webpack_require__("./src/app/api-interceptor.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__modules_shelf_shelf_module__ = __webpack_require__("./src/app/modules/shelf/shelf.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_account_welcom_welcom_component__ = __webpack_require__("./src/app/components/account/welcom/welcom.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__modules_book_book_module__ = __webpack_require__("./src/app/modules/book/book.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_account_navbar_navbar_component__ = __webpack_require__("./src/app/components/account/navbar/navbar.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_13__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_2__components_app_root_app_root_component__["a" /* AppRootComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_save_token_save_token_component__["a" /* SaveTokenComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_account_account_component__["a" /* AccountComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_account_welcom_welcom_component__["a" /* WelcomComponent */],
                __WEBPACK_IMPORTED_MODULE_16__components_account_navbar_navbar_component__["a" /* NavbarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_cookie__["CookieModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_3__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_12__modules_shelf_shelf_module__["a" /* ShelfModule */],
                __WEBPACK_IMPORTED_MODULE_15__modules_book_book_module__["a" /* BookModule */]
            ],
            providers: [
                {
                    provide: __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["a" /* HTTP_INTERCEPTORS */],
                    useClass: __WEBPACK_IMPORTED_MODULE_11__api_interceptor__["a" /* APIInterceptor */],
                    multi: true
                },
                __WEBPACK_IMPORTED_MODULE_10__guards_token_guard__["a" /* TokenGuard */],
                __WEBPACK_IMPORTED_MODULE_4__services_login_service__["a" /* LoginService */],
                __WEBPACK_IMPORTED_MODULE_8__services_token_service__["a" /* TokenService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__components_app_root_app_root_component__["a" /* AppRootComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/account/account.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/account/account.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/components/account/account.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AccountComponent = /** @class */ (function () {
    function AccountComponent() {
    }
    AccountComponent.prototype.ngOnInit = function () {
    };
    AccountComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-account',
            template: __webpack_require__("./src/app/components/account/account.component.html"),
            styles: [__webpack_require__("./src/app/components/account/account.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AccountComponent);
    return AccountComponent;
}());



/***/ }),

/***/ "./src/app/components/account/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ".nav-wrapper {\n  margin-bottom: 30px;\n}\n\na {\n  font-size: 22px;\n  color: #d0d0d0;\n}\n\na.active {\n  color: #000000;\n  pointer-events: none;\n}\n"

/***/ }),

/***/ "./src/app/components/account/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"nav-wrapper bg-dark\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"nav\">\n        <a routerLink=\"/account\" [routerLinkActiveOptions]=\"{exact: true}\"\n           routerLinkActive=\"active\" class=\"nav-item nav-link\">Home</a>\n        <a routerLink=\"/account/shelves\" routerLinkActive=\"active\" class=\"nav-item nav-link\">Shelves</a>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/account/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/account/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/account/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/account/welcom/welcom.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/account/welcom/welcom.component.html":
/***/ (function(module, exports) {

module.exports = "<app-shelves-group></app-shelves-group>\n<app-book-group [groupName]=\"'Recommended books'\"></app-book-group>\n"

/***/ }),

/***/ "./src/app/components/account/welcom/welcom.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomComponent = /** @class */ (function () {
    function WelcomComponent() {
    }
    WelcomComponent.prototype.ngOnInit = function () {
    };
    WelcomComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-welcom',
            template: __webpack_require__("./src/app/components/account/welcom/welcom.component.html"),
            styles: [__webpack_require__("./src/app/components/account/welcom/welcom.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomComponent);
    return WelcomComponent;
}());



/***/ }),

/***/ "./src/app/components/app-root/app-root.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/app-root/app-root.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/components/app-root/app-root.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRootComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppRootComponent = /** @class */ (function () {
    function AppRootComponent() {
    }
    AppRootComponent.prototype.ngOnInit = function () {
    };
    AppRootComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/components/app-root/app-root.component.html"),
            styles: [__webpack_require__("./src/app/components/app-root/app-root.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppRootComponent);
    return AppRootComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<a [href]=\"loginUrl\">Login</a>\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_login_service__ = __webpack_require__("./src/app/services/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(loginService) {
        this.loginService = loginService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginUrl = this.loginService.getAuthUrl();
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_login_service__["a" /* LoginService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/save-token/save-token.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/save-token/save-token.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  save-token works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/save-token/save-token.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SaveTokenComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_token_service__ = __webpack_require__("./src/app/services/token.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SaveTokenComponent = /** @class */ (function () {
    function SaveTokenComponent(route, tokenService, router) {
        this.route = route;
        this.tokenService = tokenService;
        this.router = router;
    }
    SaveTokenComponent.prototype.ngOnInit = function () {
        var fragments = {};
        this.route.fragment.subscribe(function (params) {
            params.replace(/([^=&]+)=([^&]*)/g, function (m, key, value) { return fragments[key] = value; });
        });
        if (fragments.hasOwnProperty('error')) {
            this.router.navigate(['/login']);
        }
        else {
            this.tokenService.saveToken(fragments['access_token']);
            this.router.navigate(['/account']);
        }
    };
    SaveTokenComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-save-token',
            template: __webpack_require__("./src/app/components/save-token/save-token.component.html"),
            styles: [__webpack_require__("./src/app/components/save-token/save-token.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_token_service__["a" /* TokenService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], SaveTokenComponent);
    return SaveTokenComponent;
}());



/***/ }),

/***/ "./src/app/filter-manager.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterManager; });
var FilterManager = /** @class */ (function () {
    function FilterManager(controls, predicates, originItems) {
        this.formControls = controls;
        this.predicates = predicates;
        this.originItems = originItems;
    }
    FilterManager.prototype.changeFilterSub = function (next) {
        var _this = this;
        this.formControls.forEach(function (control) { return control.valueChanges
            .subscribe(function (value) { return next(_this.originItems.filter(_this.combinePredicates())); }); });
    };
    FilterManager.prototype.combinePredicates = function () {
        var _this = this;
        return function (item) { return _this.predicates.every(function (predicate) { return predicate(item); }); };
    };
    return FilterManager;
}());



/***/ }),

/***/ "./src/app/guards/token.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_token_service__ = __webpack_require__("./src/app/services/token.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TokenGuard = /** @class */ (function () {
    function TokenGuard(tokenService, router) {
        this.tokenService = tokenService;
        this.router = router;
    }
    TokenGuard.prototype.canActivate = function (next, state) {
        if (this.tokenService.getToken()) {
            return true;
        }
        else {
            this.router.navigate(['/login']);
            return false;
        }
    };
    TokenGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_token_service__["a" /* TokenService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], TokenGuard);
    return TokenGuard;
}());



/***/ }),

/***/ "./src/app/modules/book/book.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_book_preview_book_preview_component__ = __webpack_require__("./src/app/modules/book/components/book-preview/book-preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_book_group_book_group_component__ = __webpack_require__("./src/app/modules/book/components/book-group/book-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_async_limit_pipe__ = __webpack_require__("./src/app/pipes/async-limit-pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_book_service__ = __webpack_require__("./src/app/modules/book/services/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_books_table_books_table_component__ = __webpack_require__("./src/app/modules/book/components/books-table/books-table.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__ = __webpack_require__("./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_book_view_book_view_component__ = __webpack_require__("./src/app/modules/book/components/book-view/book-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_book_additional_info_book_additional_info_component__ = __webpack_require__("./src/app/modules/book/components/book-additional-info/book-additional-info.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__shared_shared_module__ = __webpack_require__("./src/app/modules/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var BookModule = /** @class */ (function () {
    function BookModule() {
    }
    BookModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__pipes_async_limit_pipe__["a" /* AsyncLimitModule */],
                __WEBPACK_IMPORTED_MODULE_7_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_12__shared_shared_module__["a" /* SharedModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__components_book_preview_book_preview_component__["a" /* BookPreviewComponent */],
                __WEBPACK_IMPORTED_MODULE_3__components_book_group_book_group_component__["a" /* BookGroupComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_books_table_books_table_component__["a" /* BooksTableComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_book_view_book_view_component__["a" /* BookViewComponent */],
                __WEBPACK_IMPORTED_MODULE_11__components_book_additional_info_book_additional_info_component__["a" /* BookAdditionalInfoComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__services_book_service__["a" /* BookService */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__components_book_group_book_group_component__["a" /* BookGroupComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_books_table_books_table_component__["a" /* BooksTableComponent */]
            ]
        })
    ], BookModule);
    return BookModule;
}());



/***/ }),

/***/ "./src/app/modules/book/components/book-additional-info/book-additional-info.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/book/components/book-additional-info/book-additional-info.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <p [innerHTML]=\"book.volumeInfo.description\"></p>\n</div>\n<div>\n  <b>Publisher: </b><span>{{book.volumeInfo.publisher}}</span>\n</div>\n<div>\n  <b>Published date: </b><span>{{book.volumeInfo.publishedDate | date:'short'}}</span>\n</div>\n<div>\n  <b>Average rating: </b><span>{{book.volumeInfo.averageRating}}</span>\n  <b> Ratings count: </b><span>{{book.volumeInfo.ratingsCount}}</span>\n</div>\n<div>\n  <b>maturityRating: </b><span>{{book.volumeInfo.maturityRating}}</span>\n</div>\n<div *ngIf=\"book.accessInfo.webReaderLink\">\n  <b><a [href]='book.saleInfo.buyLink || book.accessInfo.webReaderLink'>Google Play</a></b>\n  <br>\n  <b><a [href]='book.accessInfo.webReaderLink'>Reader</a></b>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/book/components/book-additional-info/book-additional-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookAdditionalInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domain_book__ = __webpack_require__("./src/app/modules/book/domain/book.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookAdditionalInfoComponent = /** @class */ (function () {
    function BookAdditionalInfoComponent() {
    }
    BookAdditionalInfoComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__domain_book__["a" /* Book */])
    ], BookAdditionalInfoComponent.prototype, "book", void 0);
    BookAdditionalInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-book-additional-info',
            template: __webpack_require__("./src/app/modules/book/components/book-additional-info/book-additional-info.component.html"),
            styles: [__webpack_require__("./src/app/modules/book/components/book-additional-info/book-additional-info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BookAdditionalInfoComponent);
    return BookAdditionalInfoComponent;
}());



/***/ }),

/***/ "./src/app/modules/book/components/book-group/book-group.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/book/components/book-group/book-group.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>{{groupName}}</h2>\n<div class=\"card-deck\">\n  <div class=\"card\" *ngFor=\"let book of books | asyncLimitTo:5 | async\">\n    <app-book-preview [book]=\"book\"></app-book-preview>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/book/components/book-group/book-group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookGroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_book_service__ = __webpack_require__("./src/app/modules/book/services/book.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookGroupComponent = /** @class */ (function () {
    function BookGroupComponent(bookService) {
        this.bookService = bookService;
    }
    BookGroupComponent.prototype.ngOnInit = function () {
        this.books = this.bookService.getRecommendedBooks();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], BookGroupComponent.prototype, "groupName", void 0);
    BookGroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-book-group',
            template: __webpack_require__("./src/app/modules/book/components/book-group/book-group.component.html"),
            styles: [__webpack_require__("./src/app/modules/book/components/book-group/book-group.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_book_service__["a" /* BookService */]])
    ], BookGroupComponent);
    return BookGroupComponent;
}());



/***/ }),

/***/ "./src/app/modules/book/components/book-preview/book-preview.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/book/components/book-preview/book-preview.component.html":
/***/ (function(module, exports) {

module.exports = "<img class=\"card-img-top\" [src]=\"book.volumeInfo.imageLinks.thumbnail\" alt=\"Card image cap\">\n<div class=\"card-body\">\n  <h5 class=\"card-title\">{{book.volumeInfo.title}}</h5>\n  <p class=\"card-text\">{{book.volumeInfo.authors}}</p>\n  <div *ngIf=\"shelfId\" class=\"mb-4\">\n    <app-book-additional-info [book]=\"book\"></app-book-additional-info>\n  </div>\n  <div *ngIf=\"shelfId\">\n    <a [routerLink]=\"['/account/shelf', shelfId, 'book',book.id]\" class=\"btn btn-info\">View</a>\n    <button class=\"btn btn-primary disabled\">Edit</button>\n    <button class=\"btn btn-danger disabled\">Delete</button>\n  </div>\n  <a *ngIf=\"!shelfId\" [href]=\"book.volumeInfo.previewLink || book.volumeInfo.infoLink\" class=\"btn btn-primary\">Go info</a>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/book/components/book-preview/book-preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookPreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domain_book__ = __webpack_require__("./src/app/modules/book/domain/book.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookPreviewComponent = /** @class */ (function () {
    function BookPreviewComponent() {
    }
    BookPreviewComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__domain_book__["a" /* Book */])
    ], BookPreviewComponent.prototype, "book", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], BookPreviewComponent.prototype, "shelfId", void 0);
    BookPreviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-book-preview',
            template: __webpack_require__("./src/app/modules/book/components/book-preview/book-preview.component.html"),
            styles: [__webpack_require__("./src/app/modules/book/components/book-preview/book-preview.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BookPreviewComponent);
    return BookPreviewComponent;
}());



/***/ }),

/***/ "./src/app/modules/book/components/book-view/book-view.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/book/components/book-view/book-view.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>{{book?.volumeInfo.title}}</h2>\n<img class=\"mb-4\" *ngIf=\"book\" [src]=\"book.volumeInfo.imageLinks.small || book.volumeInfo.imageLinks.thumbnail\">\n<div class=\"mb-4\">\n  <app-book-additional-info *ngIf=\"book\" [book]=\"book\"></app-book-additional-info>\n</div>\n<h2>Shelf</h2>\n<app-shelf-info *ngIf=\"shelf\" [shelf]=\"shelf\"></app-shelf-info>\n<app-book-group [groupName]=\"'Recommended books'\"></app-book-group>\n"

/***/ }),

/***/ "./src/app/modules/book/components/book-view/book-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_book_service__ = __webpack_require__("./src/app/modules/book/services/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shelf_services_shelf_service__ = __webpack_require__("./src/app/modules/shelf/services/shelf.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BookViewComponent = /** @class */ (function () {
    function BookViewComponent(route, shelfService, bookService) {
        this.route = route;
        this.shelfService = shelfService;
        this.bookService = bookService;
    }
    BookViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var shelfId = params['shelfId'];
            var bookId = params['bookId'];
            _this.bookService.getBook(bookId)
                .subscribe(function (book) {
                _this.book = book;
            });
            _this.shelfService.getShelves(shelfId)
                .subscribe(function (shelf) { return _this.shelf = shelf; });
        });
    };
    BookViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-book-view',
            template: __webpack_require__("./src/app/modules/book/components/book-view/book-view.component.html"),
            styles: [__webpack_require__("./src/app/modules/book/components/book-view/book-view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__shelf_services_shelf_service__["a" /* ShelfService */],
            __WEBPACK_IMPORTED_MODULE_2__services_book_service__["a" /* BookService */]])
    ], BookViewComponent);
    return BookViewComponent;
}());



/***/ }),

/***/ "./src/app/modules/book/components/books-table/books-table.component.css":
/***/ (function(module, exports) {

module.exports = ".w-auto {\n  width: auto;\n}\n\n.table-hover tbody tr {\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/modules/book/components/books-table/books-table.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Filters</h3>\n<div class=\"row\">\n  <div class=\"col-6 col-md-3\">\n    <div class=\"form-group\">\n      <label for=\"title\">Title</label>\n      <input [formControl]=\"searchTitle\" class=\"form-control\" id=\"title\">\n    </div>\n  </div>\n  <div class=\"col-6 col-md-3\">\n    <div class=\"form-group\">\n      <label for=\"rating\">Average rating</label>\n      <input [formControl]=\"ratingMoreThenEqual\" class=\"form-control\" id=\"rating\" placeholder=\"More than equal\">\n    </div>\n  </div>\n  <div class=\"col-6 col-md-3\">\n    <div class=\"form-group\">\n      <label for=\"author\">Author</label>\n      <input [formControl]=\"searchAuthor\" class=\"form-control\" id=\"author\">\n    </div>\n  </div>\n  <div class=\"col-6 col-md-3\">\n    <div class=\"form-group\">\n      <label for=\"isEbook\">Ebook</label>\n      <input type=\"checkbox\" [formControl]=\"isEbook\" class=\"form-control w-auto\" id=\"isEbook\">\n    </div>\n  </div>\n</div>\n<div class=\"row flex-column-reverse flex-sm-row\">\n  <div *ngIf=\"selectedBook\" class=\"col-12 col-sm-6 justify-content-center\"\n       [ngClass]=\"{'d-none': !isPreviewOpen, 'd-flex': isPreviewOpen}\">\n    <div class=\"card\">\n      <app-book-preview [book]=\"selectedBook\" [shelfId]=\"shelfId\"></app-book-preview>\n    </div>\n  </div>\n  <div [ngClass]=\"{'col-sm-6': isPreviewOpen}\" class=\"col-12\">\n    <table class=\"table text-center table-hover\">\n      <thead>\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">Title</th>\n        <th scope=\"col\" class=\"d-none\" [ngClass]=\"{'d-md-table-cell': !isPreviewOpen}\">Publisher</th>\n        <th scope=\"col\">Average rating</th>\n        <th scope=\"col\" class=\"d-none\" [ngClass]=\"{'d-md-table-cell': !isPreviewOpen}\">Ratings count</th>\n        <th scope=\"col\" class=\"d-none\" [ngClass]=\"{'d-sm-table-cell': !isPreviewOpen}\">Authors</th>\n        <th scope=\"col\" class=\"d-none\" [ngClass]=\"{'d-sm-table-cell': !isPreviewOpen}\">Page count</th>\n        <th scope=\"col\">Ebook</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let book of books | paginate: {itemsPerPage: itemsPerPage, currentPage: currentPage};\n      let i = index;\" (click)=\"openPreview(book)\">\n        <th>{{itemsPerPage * (currentPage - 1) + i + 1}}</th>\n        <td>{{book.volumeInfo.title}}</td>\n        <td class=\"d-none\" [ngClass]=\"{'d-md-table-cell': !isPreviewOpen}\">{{book.volumeInfo.publisher}}</td>\n        <td>{{book.volumeInfo.averageRating}}</td>\n        <td class=\"d-none\" [ngClass]=\"{'d-md-table-cell': !isPreviewOpen}\">{{book.volumeInfo.ratingsCount}}</td>\n        <td class=\"d-none\" [ngClass]=\"{'d-sm-table-cell': !isPreviewOpen}\">{{book.volumeInfo.authors}}</td>\n        <td class=\"d-none\" [ngClass]=\"{'d-sm-table-cell': !isPreviewOpen}\">{{book.volumeInfo.pageCount}}</td>\n        <td>{{book.saleInfo.isEbook}}</td>\n      </tr>\n      </tbody>\n    </table>\n    <pagination-controls (pageChange)=\"currentPage = $event\"></pagination-controls>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/book/components/books-table/books-table.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksTableComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_book_service__ = __webpack_require__("./src/app/modules/book/services/book.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filter_manager__ = __webpack_require__("./src/app/filter-manager.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var BooksTableComponent = /** @class */ (function () {
    function BooksTableComponent(bookService) {
        this.bookService = bookService;
        this.isPreviewOpen = false;
        this.currentPage = 1;
        this.itemsPerPage = 5;
        this.searchTitle = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.ratingMoreThenEqual = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]();
        this.searchAuthor = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.isEbook = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]();
    }
    BooksTableComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookService.getBooksByShelf(this.shelfId)
            .subscribe(function (books) {
            _this.books = books;
            _this.setUpFilterManager();
        });
    };
    BooksTableComponent.prototype.openPreview = function (book) {
        this.isPreviewOpen = true;
        this.selectedBook = book;
    };
    BooksTableComponent.prototype.setUpFilterManager = function () {
        var _this = this;
        var controls = [this.searchTitle, this.ratingMoreThenEqual, this.searchAuthor, this.isEbook];
        var predicates = [
            function (book) { return book.volumeInfo.title.toLowerCase().includes(_this.searchTitle.value.toLowerCase()); },
            function (book) { return _this.ratingMoreThenEqual.value ? book.volumeInfo.averageRating >= _this.ratingMoreThenEqual.value : true; },
            function (book) { return (book.volumeInfo.authors || ['']).reduce(function (a1, a2) { return a1 + a2; })
                .toLowerCase().includes(_this.searchAuthor.value.toLowerCase()); },
            function (book) { return _this.isEbook.value ? book.saleInfo.isEbook === _this.isEbook.value : true; }
        ];
        var filterManager = new __WEBPACK_IMPORTED_MODULE_3__filter_manager__["a" /* FilterManager */](controls, predicates, this.books);
        filterManager.changeFilterSub(function (books) {
            _this.books = books;
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Number)
    ], BooksTableComponent.prototype, "shelfId", void 0);
    BooksTableComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-books-table',
            template: __webpack_require__("./src/app/modules/book/components/books-table/books-table.component.html"),
            styles: [__webpack_require__("./src/app/modules/book/components/books-table/books-table.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_book_service__["a" /* BookService */]])
    ], BooksTableComponent);
    return BooksTableComponent;
}());



/***/ }),

/***/ "./src/app/modules/book/domain/book.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
var Book = /** @class */ (function () {
    function Book() {
    }
    return Book;
}());



/***/ }),

/***/ "./src/app/modules/book/services/book.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BookService = /** @class */ (function () {
    function BookService(httpClient) {
        this.httpClient = httpClient;
    }
    BookService.prototype.getRecommendedBooks = function () {
        return this.httpClient.get('volumes/recommended')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* map */])(function (response) { return response.items; }));
    };
    BookService.prototype.getBooksByShelfAndMax = function (shelfId, maxResults) {
        return this.httpClient.get("mylibrary/bookshelves/" + shelfId + "/volumes", {
            params: {
                maxResults: maxResults.toString()
            }
        })
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* map */])(function (response) { return response.items; }));
    };
    BookService.prototype.getBooksByShelf = function (shelfId) {
        return this.httpClient.get("mylibrary/bookshelves/" + shelfId + "/volumes")
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* map */])(function (response) { return response.items; }));
    };
    BookService.prototype.getBook = function (bookId) {
        return this.httpClient.get("volumes/" + bookId);
    };
    BookService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], BookService);
    return BookService;
}());



/***/ }),

/***/ "./src/app/modules/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shelf_components_shelf_info_shelf_info_component__ = __webpack_require__("./src/app/modules/shelf/components/shelf-info/shelf-info.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__shelf_components_shelf_info_shelf_info_component__["a" /* ShelfInfoComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__shelf_components_shelf_info_shelf_info_component__["a" /* ShelfInfoComponent */]
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/modules/shelf/components/shelf-adder/shelf-adder.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/shelf/components/shelf-adder/shelf-adder.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\">\n  <label for=\"title\">Title</label>\n  <input [(ngModel)]=\"newShelf.title\" class=\"form-control\" id=\"title\" aria-describedby=\"emailHelp\"\n         placeholder=\"Enter title\">\n</div>\n"

/***/ }),

/***/ "./src/app/modules/shelf/components/shelf-adder/shelf-adder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShelfAdderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domian_shelf__ = __webpack_require__("./src/app/modules/shelf/domian/shelf.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShelfAdderComponent = /** @class */ (function () {
    function ShelfAdderComponent() {
        var _this = this;
        this.newShelf = new __WEBPACK_IMPORTED_MODULE_1__domian_shelf__["a" /* Shelf */]();
        this.actionButtons = [
            {
                text: 'Add',
                onAction: function () {
                    _this.newShelf.volumeCount = 0;
                    _this.newShelf.created = new Date();
                    _this.newShelf.updated = new Date();
                    _this.newShelf.volumesLastUpdated = new Date();
                    _this.shelves.push(_this.newShelf);
                    return true;
                }
            },
            { text: 'Close' }
        ];
    }
    ShelfAdderComponent.prototype.ngOnInit = function () {
    };
    ShelfAdderComponent.prototype.dialogInit = function (reference, options) {
        this.shelves = options.data;
    };
    ShelfAdderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-shelf-adder',
            template: __webpack_require__("./src/app/modules/shelf/components/shelf-adder/shelf-adder.component.html"),
            styles: [__webpack_require__("./src/app/modules/shelf/components/shelf-adder/shelf-adder.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShelfAdderComponent);
    return ShelfAdderComponent;
}());



/***/ }),

/***/ "./src/app/modules/shelf/components/shelf-info/shelf-info.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/shelf/components/shelf-info/shelf-info.component.html":
/***/ (function(module, exports) {

module.exports = "<h5 class=\"card-title\">{{shelf.title}}</h5>\n<div class=\"card-text mb-3\">\n  <div>\n    <b>Volume count: </b><span>{{shelf.volumeCount}}</span>\n  </div>\n  <div>\n    <b>Created: </b><span>{{shelf.created | date:'short'}}</span>\n  </div>\n  <div>\n    <b>Updated: </b><span>{{shelf.updated | date:'short'}}</span>\n  </div>\n  <div>\n    <b>Volumes last updated: </b><span>{{shelf.volumesLastUpdated | date:'short'}}</span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/shelf/components/shelf-info/shelf-info.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShelfInfoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domian_shelf__ = __webpack_require__("./src/app/modules/shelf/domian/shelf.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShelfInfoComponent = /** @class */ (function () {
    function ShelfInfoComponent() {
    }
    ShelfInfoComponent.prototype.ngOnInit = function () {
        console.log('test');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__domian_shelf__["a" /* Shelf */])
    ], ShelfInfoComponent.prototype, "shelf", void 0);
    ShelfInfoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-shelf-info',
            template: __webpack_require__("./src/app/modules/shelf/components/shelf-info/shelf-info.component.html"),
            styles: [__webpack_require__("./src/app/modules/shelf/components/shelf-info/shelf-info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ShelfInfoComponent);
    return ShelfInfoComponent;
}());



/***/ }),

/***/ "./src/app/modules/shelf/components/shelf-minimal/shelf-minimal.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/shelf/components/shelf-minimal/shelf-minimal.component.html":
/***/ (function(module, exports) {

module.exports = "<div (click)=\"openShelf(shelf.id)\" class=\"item\">\n  {{shelf.title}}\n  <span class=\"badge badge-primary badge-pill\">{{shelf.volumeCount}}</span>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/shelf/components/shelf-minimal/shelf-minimal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShelfMinimalComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domian_shelf__ = __webpack_require__("./src/app/modules/shelf/domian/shelf.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShelfMinimalComponent = /** @class */ (function () {
    function ShelfMinimalComponent(router) {
        this.router = router;
    }
    ShelfMinimalComponent.prototype.ngOnInit = function () {
    };
    ShelfMinimalComponent.prototype.openShelf = function (id) {
        this.router.navigate(['account/shelf', id]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__domian_shelf__["a" /* Shelf */])
    ], ShelfMinimalComponent.prototype, "shelf", void 0);
    ShelfMinimalComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-shelf-minimal',
            template: __webpack_require__("./src/app/modules/shelf/components/shelf-minimal/shelf-minimal.component.html"),
            styles: [__webpack_require__("./src/app/modules/shelf/components/shelf-minimal/shelf-minimal.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ShelfMinimalComponent);
    return ShelfMinimalComponent;
}());



/***/ }),

/***/ "./src/app/modules/shelf/components/shelf-preview/shelf-preview.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/shelf/components/shelf-preview/shelf-preview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\">\n  <img class=\"card-img-top\" *ngIf=\"bookImage\" [src]=\"bookImage\">\n  <div class=\"card-body\">\n    <p *ngIf=\"!shelf.id\" class=\"text-danger\">Fictitious shelf</p>\n    <app-shelf-info *ngIf=\"shelf\" [shelf]=\"shelf\"></app-shelf-info>\n    <a [routerLink]=\"['/account/shelf', shelf.id]\" class=\"btn btn-info\"\n       [ngClass]=\"{'disabled': !shelf.id}\">View</a>\n    <button class=\"btn btn-primary disabled\">Edit</button>\n    <button class=\"btn btn-danger disabled\">Delete</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/modules/shelf/components/shelf-preview/shelf-preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShelfPreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__domian_shelf__ = __webpack_require__("./src/app/modules/shelf/domian/shelf.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__book_services_book_service__ = __webpack_require__("./src/app/modules/book/services/book.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShelfPreviewComponent = /** @class */ (function () {
    function ShelfPreviewComponent(bookService) {
        this.bookService = bookService;
    }
    ShelfPreviewComponent.prototype.ngOnChanges = function () {
        var _this = this;
        if (this.shelf.id) {
            this.bookService.getBooksByShelfAndMax(this.shelf.id, 1)
                .subscribe(function (book) {
                _this.bookImage = book ? book[0].volumeInfo.imageLinks.thumbnail : null;
            });
        }
        else {
            this.bookImage = null;
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__domian_shelf__["a" /* Shelf */])
    ], ShelfPreviewComponent.prototype, "shelf", void 0);
    ShelfPreviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-shelf-preview',
            template: __webpack_require__("./src/app/modules/shelf/components/shelf-preview/shelf-preview.component.html"),
            styles: [__webpack_require__("./src/app/modules/shelf/components/shelf-preview/shelf-preview.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__book_services_book_service__["a" /* BookService */]])
    ], ShelfPreviewComponent);
    return ShelfPreviewComponent;
}());



/***/ }),

/***/ "./src/app/modules/shelf/components/shelf-view/shelf-view.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/modules/shelf/components/shelf-view/shelf-view.component.html":
/***/ (function(module, exports) {

module.exports = "<app-shelf-info *ngIf=\"shelf\" [shelf]=\"shelf\"></app-shelf-info>\n<app-books-table *ngIf=\"shelf\" [shelfId]=\"shelf?.id\"></app-books-table>\n"

/***/ }),

/***/ "./src/app/modules/shelf/components/shelf-view/shelf-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShelfViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shelf_service__ = __webpack_require__("./src/app/modules/shelf/services/shelf.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShelfViewComponent = /** @class */ (function () {
    function ShelfViewComponent(route, shelfService) {
        this.route = route;
        this.shelfService = shelfService;
    }
    ShelfViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            var id = params['id'];
            _this.shelfService.getShelves(id)
                .subscribe(function (shelf) {
                _this.shelf = shelf;
            });
        });
    };
    ShelfViewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-shelf-view',
            template: __webpack_require__("./src/app/modules/shelf/components/shelf-view/shelf-view.component.html"),
            styles: [__webpack_require__("./src/app/modules/shelf/components/shelf-view/shelf-view.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__services_shelf_service__["a" /* ShelfService */]])
    ], ShelfViewComponent);
    return ShelfViewComponent;
}());



/***/ }),

/***/ "./src/app/modules/shelf/components/shelves-group/shelves-group.component.css":
/***/ (function(module, exports) {

module.exports = ".list-group-item-action:hover {\n  background: #999;\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/modules/shelf/components/shelves-group/shelves-group.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Shelves</h2>\n<ul class=\"list-group list-group-flush\">\n  <a *ngFor=\"let shelf of shelves | asyncLimitTo:5 | async\" class=\"list-group-item list-group-item-action\">\n    <app-shelf-minimal [shelf]=\"shelf\" ></app-shelf-minimal>\n  </a>\n</ul>\n"

/***/ }),

/***/ "./src/app/modules/shelf/components/shelves-group/shelves-group.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShelvesGroupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shelf_service__ = __webpack_require__("./src/app/modules/shelf/services/shelf.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ShelvesGroupComponent = /** @class */ (function () {
    function ShelvesGroupComponent(shelfService) {
        this.shelfService = shelfService;
    }
    ShelvesGroupComponent.prototype.ngOnInit = function () {
        this.shelves = this.shelfService.getAllShelves();
    };
    ShelvesGroupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-shelves-group',
            template: __webpack_require__("./src/app/modules/shelf/components/shelves-group/shelves-group.component.html"),
            styles: [__webpack_require__("./src/app/modules/shelf/components/shelves-group/shelves-group.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_shelf_service__["a" /* ShelfService */]])
    ], ShelvesGroupComponent);
    return ShelvesGroupComponent;
}());



/***/ }),

/***/ "./src/app/modules/shelf/components/shelves-page/shelves-page.component.css":
/***/ (function(module, exports) {

module.exports = ".table-hover tbody tr {\n  cursor: pointer;\n}\n"

/***/ }),

/***/ "./src/app/modules/shelf/components/shelves-page/shelves-page.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>List of shelves</h2>\n<h3>Filters</h3>\n<div class=\"row\">\n  <div class=\"col-6 col-md-3\">\n    <div class=\"form-group\">\n      <label for=\"title\">Title</label>\n      <input [formControl]=\"searchTitle\" class=\"form-control\" id=\"title\">\n    </div>\n  </div>\n  <div class=\"col-6 col-md-3\">\n    <div class=\"form-group\">\n      <label for=\"count\">Volume count</label>\n      <input [formControl]=\"countMoreThanEqual\" class=\"form-control\" id=\"count\" placeholder=\"More than equal\">\n    </div>\n  </div>\n</div>\n<div class=\"row flex-column-reverse flex-sm-row\">\n  <div *ngIf=\"selectedShelf\" class=\"col-12 col-sm-6 justify-content-center\"\n       [ngClass]=\"{'d-none': !isPreviewOpen, 'd-flex': isPreviewOpen}\">\n    <app-shelf-preview [shelf]=\"selectedShelf\"></app-shelf-preview>\n  </div>\n  <div [ngClass]=\"{'col-sm-6': isPreviewOpen}\" class=\"col-12\">\n    <table class=\"table text-center table-hover\">\n      <thead>\n      <tr>\n        <th scope=\"col\">#</th>\n        <th scope=\"col\">Title</th>\n        <th scope=\"col\">Volume count</th>\n        <th scope=\"col\" class=\"d-none\" [ngClass]=\"{'d-sm-table-cell': !isPreviewOpen}\">\n          Updated\n        </th>\n        <th scope=\"col\" class=\"d-none\" [ngClass]=\"{'d-md-table-cell': !isPreviewOpen}\">\n          Created\n        </th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr *ngFor=\"let shelf of shelves | paginate: {itemsPerPage: itemsPerPage, currentPage: currentPage}; let i = index\"\n      (click)=\"openPreview(shelf)\">\n        <th>{{itemsPerPage * (currentPage - 1) + i + 1}}</th>\n        <td>{{shelf.title}}</td>\n        <td>{{shelf.volumeCount}}</td>\n        <td class=\"d-none\" [ngClass]=\"{'d-sm-table-cell': !isPreviewOpen}\">\n          {{shelf.updated | date:'short'}}\n        </td>\n        <td class=\"d-none\" [ngClass]=\"{'d-md-table-cell': !isPreviewOpen}\">\n          {{shelf.created | date:'short'}}\n        </td>\n      </tr>\n      </tbody>\n    </table>\n    <pagination-controls (pageChange)=\"currentPage = $event\"></pagination-controls>\n  </div>\n</div>\n<button (click)=\"openDialog()\" class=\"btn btn-primary my-3\">Add shelf</button>\n"

/***/ }),

/***/ "./src/app/modules/shelf/components/shelves-page/shelves-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShelvesPageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_shelf_service__ = __webpack_require__("./src/app/modules/shelf/services/shelf.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filter_manager__ = __webpack_require__("./src/app/filter-manager.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_modal_dialog__ = __webpack_require__("./node_modules/ngx-modal-dialog/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shelf_adder_shelf_adder_component__ = __webpack_require__("./src/app/modules/shelf/components/shelf-adder/shelf-adder.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShelvesPageComponent = /** @class */ (function () {
    function ShelvesPageComponent(shelfService, modalService, viewRef) {
        this.shelfService = shelfService;
        this.modalService = modalService;
        this.viewRef = viewRef;
        this.itemsPerPage = 5;
        this.currentPage = 1;
        this.searchTitle = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('');
        this.countMoreThanEqual = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]();
        this.isPreviewOpen = false;
    }
    ShelvesPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.shelfService.getAllShelves()
            .subscribe(function (shelves) {
            _this.shelves = shelves;
            _this.setUpFilterManager();
        });
    };
    ShelvesPageComponent.prototype.openPreview = function (shelf) {
        this.isPreviewOpen = true;
        this.selectedShelf = shelf;
    };
    ShelvesPageComponent.prototype.setUpFilterManager = function () {
        var _this = this;
        var controls = [this.searchTitle, this.countMoreThanEqual];
        var predicates = [
            function (shelf) { return shelf.volumeCount >= _this.countMoreThanEqual.value; },
            function (shelf) { return shelf.title.toLowerCase().includes(_this.searchTitle.value.toLowerCase()); }
        ];
        var filterManager = new __WEBPACK_IMPORTED_MODULE_3__filter_manager__["a" /* FilterManager */](controls, predicates, this.shelves);
        filterManager.changeFilterSub(function (shelves) {
            _this.shelves = shelves;
        });
    };
    ShelvesPageComponent.prototype.openDialog = function () {
        this.modalService.openDialog(this.viewRef, {
            title: 'Add modal',
            childComponent: __WEBPACK_IMPORTED_MODULE_5__shelf_adder_shelf_adder_component__["a" /* ShelfAdderComponent */],
            data: this.shelves
        });
    };
    ShelvesPageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-shelves-page',
            template: __webpack_require__("./src/app/modules/shelf/components/shelves-page/shelves-page.component.html"),
            styles: [__webpack_require__("./src/app/modules/shelf/components/shelves-page/shelves-page.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_shelf_service__["a" /* ShelfService */],
            __WEBPACK_IMPORTED_MODULE_4_ngx_modal_dialog__["b" /* ModalDialogService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], ShelvesPageComponent);
    return ShelvesPageComponent;
}());



/***/ }),

/***/ "./src/app/modules/shelf/domian/shelf.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Shelf; });
var Shelf = /** @class */ (function () {
    function Shelf() {
    }
    return Shelf;
}());



/***/ }),

/***/ "./src/app/modules/shelf/services/shelf.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShelfService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ShelfService = /** @class */ (function () {
    function ShelfService(httpClient) {
        this.httpClient = httpClient;
    }
    ShelfService.prototype.getAllShelves = function () {
        return this.httpClient.get('mylibrary/bookshelves')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_operators__["b" /* map */])(function (response) { return response.items; }));
    };
    ShelfService.prototype.getShelves = function (id) {
        return this.httpClient.get("mylibrary/bookshelves/" + id);
    };
    ShelfService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], ShelfService);
    return ShelfService;
}());



/***/ }),

/***/ "./src/app/modules/shelf/shelf.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShelfModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_shelf_service__ = __webpack_require__("./src/app/modules/shelf/services/shelf.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_shelves_group_shelves_group_component__ = __webpack_require__("./src/app/modules/shelf/components/shelves-group/shelves-group.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pipes_async_limit_pipe__ = __webpack_require__("./src/app/pipes/async-limit-pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_shelves_page_shelves_page_component__ = __webpack_require__("./src/app/modules/shelf/components/shelves-page/shelves-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_ngx_pagination__ = __webpack_require__("./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_shelf_preview_shelf_preview_component__ = __webpack_require__("./src/app/modules/shelf/components/shelf-preview/shelf-preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_shelf_view_shelf_view_component__ = __webpack_require__("./src/app/modules/shelf/components/shelf-view/shelf-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__book_book_module__ = __webpack_require__("./src/app/modules/book/book.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_shelf_minimal_shelf_minimal_component__ = __webpack_require__("./src/app/modules/shelf/components/shelf-minimal/shelf-minimal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__shared_shared_module__ = __webpack_require__("./src/app/modules/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ngx_modal_dialog__ = __webpack_require__("./node_modules/ngx-modal-dialog/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_shelf_adder_shelf_adder_component__ = __webpack_require__("./src/app/modules/shelf/components/shelf-adder/shelf-adder.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var ShelfModule = /** @class */ (function () {
    function ShelfModule() {
    }
    ShelfModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_4__pipes_async_limit_pipe__["a" /* AsyncLimitModule */],
                __WEBPACK_IMPORTED_MODULE_6_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_11__book_book_module__["a" /* BookModule */],
                __WEBPACK_IMPORTED_MODULE_13__shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_14_ngx_modal_dialog__["a" /* ModalDialogModule */].forRoot()
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__components_shelves_group_shelves_group_component__["a" /* ShelvesGroupComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_shelf_minimal_shelf_minimal_component__["a" /* ShelfMinimalComponent */],
                __WEBPACK_IMPORTED_MODULE_5__components_shelves_page_shelves_page_component__["a" /* ShelvesPageComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_shelf_preview_shelf_preview_component__["a" /* ShelfPreviewComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_shelf_view_shelf_view_component__["a" /* ShelfViewComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_shelf_adder_shelf_adder_component__["a" /* ShelfAdderComponent */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__services_shelf_service__["a" /* ShelfService */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__components_shelves_group_shelves_group_component__["a" /* ShelvesGroupComponent */]
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_15__components_shelf_adder_shelf_adder_component__["a" /* ShelfAdderComponent */]]
        })
    ], ShelfModule);
    return ShelfModule;
}());



/***/ }),

/***/ "./src/app/pipes/async-limit-pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export AsyncLimitPipe */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AsyncLimitModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_operators__ = __webpack_require__("./node_modules/rxjs/_esm5/operators.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AsyncLimitPipe = /** @class */ (function () {
    function AsyncLimitPipe() {
    }
    AsyncLimitPipe.prototype.transform = function (value, size) {
        return value.pipe(Object(__WEBPACK_IMPORTED_MODULE_1_rxjs_operators__["b" /* map */])(function (shelves) { return shelves.slice(0, size); }));
    };
    AsyncLimitPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({ name: 'asyncLimitTo' })
    ], AsyncLimitPipe);
    return AsyncLimitPipe;
}());

var AsyncLimitModule = /** @class */ (function () {
    function AsyncLimitModule() {
    }
    AsyncLimitModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [AsyncLimitPipe],
            exports: [AsyncLimitPipe]
        })
    ], AsyncLimitModule);
    return AsyncLimitModule;
}());



/***/ }),

/***/ "./src/app/services/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginService = /** @class */ (function () {
    function LoginService() {
        this.url = 'https://accounts.google.com/o/oauth2/v2/auth';
        this.client_id = '101136761905-kfc45eum300aueiqeakcq45qjnr5m95i.apps.googleusercontent.com';
        this.response_type = 'token';
        this.scope = 'https://www.googleapis.com/auth/books';
        this.redirect_uri = __WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].url + "/save-token";
    }
    LoginService.prototype.getAuthUrl = function () {
        return (this.url + "\n                    ?client_id=" + this.client_id + "\n                    &response_type=" + this.response_type + "\n                    &scope=" + this.scope + "\n                    &redirect_uri=" + this.redirect_uri)
            .replace(/ /g, '');
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/services/token.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TokenService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie__ = __webpack_require__("./node_modules/ngx-cookie/bundles/ngx-cookie.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ngx_cookie___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_ngx_cookie__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TokenService = /** @class */ (function () {
    function TokenService(cookieService) {
        this.cookieService = cookieService;
        this.TOKEN = 'token';
    }
    TokenService.prototype.saveToken = function (token) {
        this.cookieService.put(this.TOKEN, token);
    };
    TokenService.prototype.getToken = function () {
        return this.cookieService.get(this.TOKEN);
    };
    TokenService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ngx_cookie__["CookieService"]])
    ], TokenService);
    return TokenService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true,
    url: 'https://artbelll.github.io/google-book-test'
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map