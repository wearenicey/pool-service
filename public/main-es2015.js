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

/***/ "./src/app/_layout/home-layout/home-layout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/_layout/home-layout/home-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: HomeLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeLayoutComponent", function() { return HomeLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_navbar_dark_navbar_dark_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/navbar-dark/navbar-dark.component */ "./src/app/components/navbar-dark/navbar-dark.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");





class HomeLayoutComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HomeLayoutComponent.ɵfac = function HomeLayoutComponent_Factory(t) { return new (t || HomeLayoutComponent)(); };
HomeLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeLayoutComponent, selectors: [["app-home-layout"]], decls: 3, vars: 0, template: function HomeLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar-dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-footer");
    } }, directives: [_components_navbar_dark_navbar_dark_component__WEBPACK_IMPORTED_MODULE_1__["NavbarDarkComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19sYXlvdXQvaG9tZS1sYXlvdXQvaG9tZS1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-layout',
                templateUrl: './home-layout.component.html',
                styleUrls: ['./home-layout.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/_layout/main-layout/main-layout.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/_layout/main-layout/main-layout.component.ts ***!
  \**************************************************************/
/*! exports provided: MainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function() { return MainLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");




class MainLayoutComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
MainLayoutComponent.ɵfac = function MainLayoutComponent_Factory(t) { return new (t || MainLayoutComponent)(); };
MainLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainLayoutComponent, selectors: [["app-main-layout"]], decls: 2, vars: 0, template: function MainLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-footer");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_2__["FooterComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19sYXlvdXQvbWFpbi1sYXlvdXQvbWFpbi1sYXlvdXQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-layout',
                templateUrl: './main-layout.component.html',
                styleUrls: ['./main-layout.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/animations/fade.animation.ts":
/*!**********************************************!*\
  !*** ./src/app/animations/fade.animation.ts ***!
  \**********************************************/
/*! exports provided: fadeAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeAnimation", function() { return fadeAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeAnimation', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                top: 0,
                right: 0,
                width: '100%'
            })
        ])
    ])
]);


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
/* harmony import */ var _layout_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_layout/home-layout/home-layout.component */ "./src/app/_layout/home-layout/home-layout.component.ts");
/* harmony import */ var _layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_layout/main-layout/main-layout.component */ "./src/app/_layout/main-layout/main-layout.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/homepage/homepage.component */ "./src/app/pages/homepage/homepage.component.ts");
/* harmony import */ var _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/blog/blog.component */ "./src/app/pages/blog/blog.component.ts");
/* harmony import */ var _posts_page_blog_page_blog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./posts/page-blog/page-blog.component */ "./src/app/posts/page-blog/page-blog.component.ts");
/* harmony import */ var _pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/faq/faq.component */ "./src/app/pages/faq/faq.component.ts");
/* harmony import */ var _pages_izgradnja_bazena_izgradnja_bazena_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/izgradnja-bazena/izgradnja-bazena.component */ "./src/app/pages/izgradnja-bazena/izgradnja-bazena.component.ts");
/* harmony import */ var _pages_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/notfound/notfound.component */ "./src/app/pages/notfound/notfound.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_polumontazni_bazeni_polumontazni_bazeni_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/polumontazni-bazeni/polumontazni-bazeni.component */ "./src/app/pages/polumontazni-bazeni/polumontazni-bazeni.component.ts");
/* harmony import */ var _pages_dodatna_oprema_dodatna_oprema_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/dodatna-oprema/dodatna-oprema.component */ "./src/app/pages/dodatna-oprema/dodatna-oprema.component.ts");
/* harmony import */ var _pages_filtriranje_vode_filtriranje_vode_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/filtriranje-vode/filtriranje-vode.component */ "./src/app/pages/filtriranje-vode/filtriranje-vode.component.ts");
/* harmony import */ var _pages_betonski_bazeni_betonski_bazeni_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/betonski-bazeni/betonski-bazeni.component */ "./src/app/pages/betonski-bazeni/betonski-bazeni.component.ts");
/* harmony import */ var _pages_bazeni_folija_bazeni_folija_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/bazeni-folija/bazeni-folija.component */ "./src/app/pages/bazeni-folija/bazeni-folija.component.ts");
/* harmony import */ var _pages_cirkulacija_vode_cirkulacija_vode_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/cirkulacija-vode/cirkulacija-vode.component */ "./src/app/pages/cirkulacija-vode/cirkulacija-vode.component.ts");
/* harmony import */ var _pages_osvetljenje_osvetljenje_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/osvetljenje/osvetljenje.component */ "./src/app/pages/osvetljenje/osvetljenje.component.ts");
/* harmony import */ var _pages_stepenice_stepenice_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/stepenice/stepenice.component */ "./src/app/pages/stepenice/stepenice.component.ts");
/* harmony import */ var _pages_mozaik_mozaik_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/mozaik/mozaik.component */ "./src/app/pages/mozaik/mozaik.component.ts");
/* harmony import */ var _pages_sredstva_sredstva_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/sredstva/sredstva.component */ "./src/app/pages/sredstva/sredstva.component.ts");
/* harmony import */ var _pages_usisivaci_usisivaci_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/usisivaci/usisivaci.component */ "./src/app/pages/usisivaci/usisivaci.component.ts");
/* harmony import */ var _pages_body_jet_body_jet_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/body-jet/body-jet.component */ "./src/app/pages/body-jet/body-jet.component.ts");


























const routes = [
    {
        path: '',
        component: _layout_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_2__["HomeLayoutComponent"],
        children: [
            { path: '', component: _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"], pathMatch: 'full' },
        ]
    },
    {
        path: 'polumontazni-bazeni',
        component: _layout_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_2__["HomeLayoutComponent"],
        children: [
            { path: '', component: _pages_polumontazni_bazeni_polumontazni_bazeni_component__WEBPACK_IMPORTED_MODULE_12__["PolumontazniBazeniComponent"] },
        ]
    },
    {
        path: 'bazeni-sa-folijom',
        component: _layout_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_2__["HomeLayoutComponent"],
        children: [
            { path: '', component: _pages_bazeni_folija_bazeni_folija_component__WEBPACK_IMPORTED_MODULE_16__["BazeniFolijaComponent"] },
        ]
    },
    {
        path: 'betonski-bazeni',
        component: _layout_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_2__["HomeLayoutComponent"],
        children: [
            { path: '', component: _pages_betonski_bazeni_betonski_bazeni_component__WEBPACK_IMPORTED_MODULE_15__["BetonskiBazeniComponent"] },
        ]
    },
    {
        path: 'kontakt',
        component: _layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__["MainLayoutComponent"],
        children: [
            { path: '', component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] }
        ]
    },
    {
        path: 'odrzavanje',
        component: _layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__["MainLayoutComponent"],
        children: [
            { path: '', component: _pages_izgradnja_bazena_izgradnja_bazena_component__WEBPACK_IMPORTED_MODULE_9__["IzgradnjaBazenaComponent"] }
        ]
    },
    {
        path: 'o-nama',
        component: _layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__["MainLayoutComponent"],
        children: [
            { path: '', component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_11__["AboutComponent"] }
        ]
    },
    {
        path: 'ucestala-pitanja',
        component: _layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__["MainLayoutComponent"],
        children: [
            { path: '', component: _pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_8__["FaqComponent"] }
        ]
    },
    {
        path: 'blog',
        component: _layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__["MainLayoutComponent"],
        children: [
            { path: '', component: _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_6__["BlogComponent"] },
            { path: 'post-1', component: _posts_page_blog_page_blog_component__WEBPACK_IMPORTED_MODULE_7__["PageBlogComponent"] },
        ]
    },
    {
        path: 'dodatna-oprema',
        component: _layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_3__["MainLayoutComponent"],
        children: [
            { path: '', component: _pages_dodatna_oprema_dodatna_oprema_component__WEBPACK_IMPORTED_MODULE_13__["DodatnaOpremaComponent"] },
            { path: 'filtrianje-vode', component: _pages_filtriranje_vode_filtriranje_vode_component__WEBPACK_IMPORTED_MODULE_14__["FiltriranjeVodeComponent"] },
            { path: 'cirkulacija-vode', component: _pages_cirkulacija_vode_cirkulacija_vode_component__WEBPACK_IMPORTED_MODULE_17__["CirkulacijaVodeComponent"] },
            { path: 'osvetljenje', component: _pages_osvetljenje_osvetljenje_component__WEBPACK_IMPORTED_MODULE_18__["OsvetljenjeComponent"] },
            { path: 'stepenice', component: _pages_stepenice_stepenice_component__WEBPACK_IMPORTED_MODULE_19__["StepeniceComponent"] },
            { path: 'mozaik-folije', component: _pages_mozaik_mozaik_component__WEBPACK_IMPORTED_MODULE_20__["MozaikComponent"] },
            { path: 'sredstva-za-odrzavanje-bazena', component: _pages_sredstva_sredstva_component__WEBPACK_IMPORTED_MODULE_21__["SredstvaComponent"] },
            { path: 'usisivaci', component: _pages_usisivaci_usisivaci_component__WEBPACK_IMPORTED_MODULE_22__["UsisivaciComponent"] },
            { path: 'body-jet', component: _pages_body_jet_body_jet_component__WEBPACK_IMPORTED_MODULE_23__["BodyJetComponent"] }
        ]
    },
    { path: '404', component: _pages_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_10__["NotfoundComponent"] },
    { path: '**', redirectTo: '/404' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                scrollPositionRestoration: 'enabled',
                initialNavigation: 'enabled'
            })
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        scrollPositionRestoration: 'enabled',
                        initialNavigation: 'enabled'
                    })
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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
/* harmony import */ var _animations_fade_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations/fade.animation */ "./src/app/animations/fade.animation.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mail.service */ "./src/app/mail.service.ts");
/* harmony import */ var angular_google_tag_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-google-tag-manager */ "./node_modules/angular-google-tag-manager/__ivy_ngcc__/fesm2015/angular-google-tag-manager.js");







class AppComponent {
    constructor(MailService, router, gtmService) {
        this.MailService = MailService;
        this.router = router;
        this.gtmService = gtmService;
        this.title = 'angular-src';
    }
    getRouterOutletState(outlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    }
    ngOnInit() {
        this.formData = {};
        // push GTM data layer for every visited page
        this.router.events.forEach(item => {
            if (item instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                const gtmTag = {
                    event: 'page',
                    pageName: item.url
                };
                this.gtmService.pushTag(gtmTag);
            }
        });
    }
    sendMail(formData) {
        this.formData = formData;
        // post form data here
        alert(JSON.stringify(this.formData));
        this.MailService.sendEmail(JSON.stringify(this.formData.value));
        this.formData.reset();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mail_service__WEBPACK_IMPORTED_MODULE_3__["MailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_google_tag_manager__WEBPACK_IMPORTED_MODULE_4__["GoogleTagManagerService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 1, consts: [["o", "outlet"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet", null, 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", ctx.getRouterOutletState(_r0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: ["[_nghost-%COMP%]   main[_ngcontent-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXFByb2plY3RzXFxwb29sc2VydmljZVxccG9vbC1zZXJ2aWNlXFxhbmd1bGFyLXNyYy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxrQkFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIG1haW4ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxufVxyXG4iLCI6aG9zdCBtYWluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufSJdfQ== */"], data: { animation: [_animations_fade_animation__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                animations: [_animations_fade_animation__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]]
            }]
    }], function () { return [{ type: _mail_service__WEBPACK_IMPORTED_MODULE_3__["MailService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: angular_google_tag_manager__WEBPACK_IMPORTED_MODULE_4__["GoogleTagManagerService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _constants_format_title_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/format-title.pipe */ "./src/app/constants/format-title.pipe.ts");
/* harmony import */ var _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lazy-img-directive.directive */ "./src/app/lazy-img-directive.directive.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/__ivy_ngcc__/fesm2015/ngx-swiper-wrapper.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_form_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/form/form.component */ "./src/app/components/form/form.component.ts");
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
/* harmony import */ var _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/homepage/homepage.component */ "./src/app/pages/homepage/homepage.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/blog/blog.component */ "./src/app/pages/blog/blog.component.ts");
/* harmony import */ var _posts_page_blog_page_blog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./posts/page-blog/page-blog.component */ "./src/app/posts/page-blog/page-blog.component.ts");
/* harmony import */ var _pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/faq/faq.component */ "./src/app/pages/faq/faq.component.ts");
/* harmony import */ var _pages_izgradnja_bazena_izgradnja_bazena_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/izgradnja-bazena/izgradnja-bazena.component */ "./src/app/pages/izgradnja-bazena/izgradnja-bazena.component.ts");
/* harmony import */ var _pages_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/notfound/notfound.component */ "./src/app/pages/notfound/notfound.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_polumontazni_bazeni_polumontazni_bazeni_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/polumontazni-bazeni/polumontazni-bazeni.component */ "./src/app/pages/polumontazni-bazeni/polumontazni-bazeni.component.ts");
/* harmony import */ var _pages_dodatna_oprema_dodatna_oprema_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/dodatna-oprema/dodatna-oprema.component */ "./src/app/pages/dodatna-oprema/dodatna-oprema.component.ts");
/* harmony import */ var _pages_filtriranje_vode_filtriranje_vode_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/filtriranje-vode/filtriranje-vode.component */ "./src/app/pages/filtriranje-vode/filtriranje-vode.component.ts");
/* harmony import */ var _components_konsultacije_konsultacije_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/konsultacije/konsultacije.component */ "./src/app/components/konsultacije/konsultacije.component.ts");
/* harmony import */ var _pages_betonski_bazeni_betonski_bazeni_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/betonski-bazeni/betonski-bazeni.component */ "./src/app/pages/betonski-bazeni/betonski-bazeni.component.ts");
/* harmony import */ var _pages_bazeni_folija_bazeni_folija_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/bazeni-folija/bazeni-folija.component */ "./src/app/pages/bazeni-folija/bazeni-folija.component.ts");
/* harmony import */ var _pages_cirkulacija_vode_cirkulacija_vode_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/cirkulacija-vode/cirkulacija-vode.component */ "./src/app/pages/cirkulacija-vode/cirkulacija-vode.component.ts");
/* harmony import */ var _pages_osvetljenje_osvetljenje_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./pages/osvetljenje/osvetljenje.component */ "./src/app/pages/osvetljenje/osvetljenje.component.ts");
/* harmony import */ var _pages_stepenice_stepenice_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/stepenice/stepenice.component */ "./src/app/pages/stepenice/stepenice.component.ts");
/* harmony import */ var _pages_mozaik_mozaik_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/mozaik/mozaik.component */ "./src/app/pages/mozaik/mozaik.component.ts");
/* harmony import */ var _pages_sredstva_sredstva_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/sredstva/sredstva.component */ "./src/app/pages/sredstva/sredstva.component.ts");
/* harmony import */ var _pages_usisivaci_usisivaci_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/usisivaci/usisivaci.component */ "./src/app/pages/usisivaci/usisivaci.component.ts");
/* harmony import */ var _pages_body_jet_body_jet_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/body-jet/body-jet.component */ "./src/app/pages/body-jet/body-jet.component.ts");
/* harmony import */ var _components_navbar_dark_navbar_dark_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/navbar-dark/navbar-dark.component */ "./src/app/components/navbar-dark/navbar-dark.component.ts");
/* harmony import */ var _layout_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./_layout/home-layout/home-layout.component */ "./src/app/_layout/home-layout/home-layout.component.ts");
/* harmony import */ var _layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./_layout/main-layout/main-layout.component */ "./src/app/_layout/main-layout/main-layout.component.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
/* harmony import */ var _components_ponuda_ponuda_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./components/ponuda/ponuda.component */ "./src/app/components/ponuda/ponuda.component.ts");
/* harmony import */ var _components_tri_koraka_tri_koraka_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./components/tri-koraka/tri-koraka.component */ "./src/app/components/tri-koraka/tri-koraka.component.ts");















































const DEFAULT_SWIPER_CONFIG = {
    observer: true,
    direction: 'horizontal',
    threshold: 50,
    spaceBetween: 24,
    slidesPerView: 1,
};
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: 'googleTagManagerId', useValue: 'GTM-KLH779D' },
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_22__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_22__["PathLocationStrategy"] },
        { provide: ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_11__["SWIPER_CONFIG"], useValue: DEFAULT_SWIPER_CONFIG }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastContainerModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_10__["CdkStepperModule"],
            ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_11__["SwiperModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_40__["FontAwesomeModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
        _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_16__["ContactComponent"],
        _constants_format_title_pipe__WEBPACK_IMPORTED_MODULE_3__["FormatTitlePipe"],
        _components_form_form_component__WEBPACK_IMPORTED_MODULE_13__["FormComponent"],
        _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_15__["HomepageComponent"],
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
        _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_17__["BlogComponent"],
        _posts_page_blog_page_blog_component__WEBPACK_IMPORTED_MODULE_18__["PageBlogComponent"],
        _pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_19__["FaqComponent"],
        _pages_izgradnja_bazena_izgradnja_bazena_component__WEBPACK_IMPORTED_MODULE_20__["IzgradnjaBazenaComponent"],
        _pages_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_21__["NotfoundComponent"],
        _pages_about_about_component__WEBPACK_IMPORTED_MODULE_23__["AboutComponent"],
        _pages_polumontazni_bazeni_polumontazni_bazeni_component__WEBPACK_IMPORTED_MODULE_24__["PolumontazniBazeniComponent"],
        _pages_dodatna_oprema_dodatna_oprema_component__WEBPACK_IMPORTED_MODULE_25__["DodatnaOpremaComponent"],
        _pages_filtriranje_vode_filtriranje_vode_component__WEBPACK_IMPORTED_MODULE_26__["FiltriranjeVodeComponent"],
        _components_konsultacije_konsultacije_component__WEBPACK_IMPORTED_MODULE_27__["KonsultacijeComponent"],
        _pages_betonski_bazeni_betonski_bazeni_component__WEBPACK_IMPORTED_MODULE_28__["BetonskiBazeniComponent"],
        _pages_bazeni_folija_bazeni_folija_component__WEBPACK_IMPORTED_MODULE_29__["BazeniFolijaComponent"],
        _pages_cirkulacija_vode_cirkulacija_vode_component__WEBPACK_IMPORTED_MODULE_30__["CirkulacijaVodeComponent"],
        _pages_osvetljenje_osvetljenje_component__WEBPACK_IMPORTED_MODULE_31__["OsvetljenjeComponent"],
        _pages_stepenice_stepenice_component__WEBPACK_IMPORTED_MODULE_32__["StepeniceComponent"],
        _pages_mozaik_mozaik_component__WEBPACK_IMPORTED_MODULE_33__["MozaikComponent"],
        _pages_sredstva_sredstva_component__WEBPACK_IMPORTED_MODULE_34__["SredstvaComponent"],
        _pages_usisivaci_usisivaci_component__WEBPACK_IMPORTED_MODULE_35__["UsisivaciComponent"],
        _pages_body_jet_body_jet_component__WEBPACK_IMPORTED_MODULE_36__["BodyJetComponent"],
        _components_navbar_dark_navbar_dark_component__WEBPACK_IMPORTED_MODULE_37__["NavbarDarkComponent"],
        _layout_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_38__["HomeLayoutComponent"],
        _layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_39__["MainLayoutComponent"],
        _components_ponuda_ponuda_component__WEBPACK_IMPORTED_MODULE_41__["PonudaComponent"],
        _components_tri_koraka_tri_koraka_component__WEBPACK_IMPORTED_MODULE_42__["TriKorakaComponent"],
        _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_4__["LazyImgDirective"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastContainerModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_10__["CdkStepperModule"],
        ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_11__["SwiperModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_40__["FontAwesomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_12__["NavbarComponent"],
                    _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_16__["ContactComponent"],
                    _constants_format_title_pipe__WEBPACK_IMPORTED_MODULE_3__["FormatTitlePipe"],
                    _components_form_form_component__WEBPACK_IMPORTED_MODULE_13__["FormComponent"],
                    _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_15__["HomepageComponent"],
                    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"],
                    _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_17__["BlogComponent"],
                    _posts_page_blog_page_blog_component__WEBPACK_IMPORTED_MODULE_18__["PageBlogComponent"],
                    _pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_19__["FaqComponent"],
                    _pages_izgradnja_bazena_izgradnja_bazena_component__WEBPACK_IMPORTED_MODULE_20__["IzgradnjaBazenaComponent"],
                    _pages_notfound_notfound_component__WEBPACK_IMPORTED_MODULE_21__["NotfoundComponent"],
                    _pages_about_about_component__WEBPACK_IMPORTED_MODULE_23__["AboutComponent"],
                    _pages_polumontazni_bazeni_polumontazni_bazeni_component__WEBPACK_IMPORTED_MODULE_24__["PolumontazniBazeniComponent"],
                    _pages_dodatna_oprema_dodatna_oprema_component__WEBPACK_IMPORTED_MODULE_25__["DodatnaOpremaComponent"],
                    _pages_filtriranje_vode_filtriranje_vode_component__WEBPACK_IMPORTED_MODULE_26__["FiltriranjeVodeComponent"],
                    _components_konsultacije_konsultacije_component__WEBPACK_IMPORTED_MODULE_27__["KonsultacijeComponent"],
                    _pages_betonski_bazeni_betonski_bazeni_component__WEBPACK_IMPORTED_MODULE_28__["BetonskiBazeniComponent"],
                    _pages_bazeni_folija_bazeni_folija_component__WEBPACK_IMPORTED_MODULE_29__["BazeniFolijaComponent"],
                    _pages_cirkulacija_vode_cirkulacija_vode_component__WEBPACK_IMPORTED_MODULE_30__["CirkulacijaVodeComponent"],
                    _pages_osvetljenje_osvetljenje_component__WEBPACK_IMPORTED_MODULE_31__["OsvetljenjeComponent"],
                    _pages_stepenice_stepenice_component__WEBPACK_IMPORTED_MODULE_32__["StepeniceComponent"],
                    _pages_mozaik_mozaik_component__WEBPACK_IMPORTED_MODULE_33__["MozaikComponent"],
                    _pages_sredstva_sredstva_component__WEBPACK_IMPORTED_MODULE_34__["SredstvaComponent"],
                    _pages_usisivaci_usisivaci_component__WEBPACK_IMPORTED_MODULE_35__["UsisivaciComponent"],
                    _pages_body_jet_body_jet_component__WEBPACK_IMPORTED_MODULE_36__["BodyJetComponent"],
                    _components_navbar_dark_navbar_dark_component__WEBPACK_IMPORTED_MODULE_37__["NavbarDarkComponent"],
                    _layout_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_38__["HomeLayoutComponent"],
                    _layout_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_39__["MainLayoutComponent"],
                    _components_ponuda_ponuda_component__WEBPACK_IMPORTED_MODULE_41__["PonudaComponent"],
                    _components_tri_koraka_tri_koraka_component__WEBPACK_IMPORTED_MODULE_42__["TriKorakaComponent"],
                    _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_4__["LazyImgDirective"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrModule"].forRoot(),
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastContainerModule"],
                    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_10__["CdkStepperModule"],
                    ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_11__["SwiperModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_40__["FontAwesomeModule"],
                ],
                providers: [
                    { provide: 'googleTagManagerId', useValue: 'GTM-KLH779D' },
                    { provide: _angular_common__WEBPACK_IMPORTED_MODULE_22__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_22__["PathLocationStrategy"] },
                    { provide: ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_11__["SWIPER_CONFIG"], useValue: DEFAULT_SWIPER_CONFIG }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/"]; };
const _c1 = function () { return ["/kontakt"]; };
const _c2 = function () { return ["/polumontazni-bazeni"]; };
const _c3 = function () { return ["/betonski-bazeni"]; };
const _c4 = function () { return ["/bazeni-sa-folijom"]; };
const _c5 = function () { return ["/o-nama"]; };
const _c6 = function () { return ["/odrzavanje"]; };
const _c7 = function () { return ["/dodatna-oprema"]; };
const _c8 = function () { return ["/ucestala-pitanja"]; };
class FooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 65, vars: 20, consts: [[1, "footer", "page__footer"], [1, "pt-5", "footer"], [1, "container"], [1, "row", "pt-5", "pb-5", "mb-5"], [1, "col-lg-4", "col-xs-12"], [3, "routerLink"], [1, "text-white"], [1, "small", "pr-5", "text-white-50"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "col-lg-2", "col-xs-12", "links", "mt-5", "mt-md-0", "mb-5", "mb-md-0"], [1, "mt-lg-0", "mt-sm-3", "mb-2", "mb-md-3", 2, "color", "#8C97AC"], [1, "m-0", "p-0"], [1, "mb-2"], [1, "text-white", 3, "routerLink"], [1, "col-lg-2", "col-xs-12", "location", "mb-5", "mb-md-0"], [1, "mb-3", "p-0"], [1, "col-lg-4", "col-xs-12", "about"], [1, "mt-lg-0", "mt-sm-3", 2, "color", "#8C97AC"], [1, "small"], [1, "m-0", "p-0", "mb-2"], ["href", "tel:381216621200", 2, "color", "#FFD166"], ["href", "mailto:infopoolservice@gmail.com", 2, "color", "#FFD166"], [1, "row", "justify-content-between", "align-items-center", "copyright"], [1, "col"], ["href", "https://nicey.rs"], [1, "in", "float-right", 2, "list-style", "none"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Pool Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Poslovna politika na\u0161e kompanije je potpuna podr\u0161ka na\u0161im klijentima u svim njihovim zahtevima po\u010Dev\u0161i od: izgradnje bazena, odr\u017Eavanja, servisa, popravki, savetovanja i ostalog. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Besplatna konsultacija");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Bazeni");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Future pool bazeni");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Betonski bazeni");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Bazeni sa folijom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h6", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Pool Service");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "ul", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "O nama");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Odrzavanje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Dodatna oprema");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "U\u010Destala pitanja");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Kontakt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h6", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Kontakt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Pool Service se uspe\u0161no bavi prodajom bazena i bazenske opreme, odr\u017Eavanje postoje\u0107ih bazena, isporuka i monta\u017Eom sauna i ostale rekreacione opreme.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "li", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "021 / 6621 200");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "infopoolservice@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "small", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Pool Service 2021 \u00A9 Web solution by ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Nicey Consulting");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "ul", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](16, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](17, _c7));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](18, _c8));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](19, _c1));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".page__footer[_ngcontent-%COMP%] {\n  background-color: #17154B;\n  height: auto;\n  color: #fff;\n}\n.page__footer[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.page__footer[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.page__footer[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.page__footer[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.page__footer[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.page__footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  border-top: 1px solid #313D55;\n}\n.page__footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: #8C97AC;\n}\n.page__footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.page__footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n  letter-spacing: 5px;\n}\n.page__footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvRTpcXFByb2plY3RzXFxwb29sc2VydmljZVxccG9vbC1zZXJ2aWNlXFxhbmd1bGFyLXNyYy9zcmNcXGFwcFxcY29tcG9uZW50c1xcZm9vdGVyXFxmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNERjtBRElJO0VBQ0UsZ0JBQUE7QUNGTjtBRElNO0VBQ0UsZUFBQTtBQ0ZSO0FEUUk7RUFDRSxnQkFBQTtBQ05OO0FEUU07RUFDRSxlQUFBO0FDTlI7QURZSTtFQUNFLGdCQUFBO0FDVk47QURjRTtFQUVFLDZCQUFBO0FDYko7QURlSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQ2JOO0FEZ0JJO0VBQ0UsZ0JBQUE7QUNkTjtBRGdCTTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ2RSO0FEZ0JRO0VBQ0UsY0FBQTtBQ2RWIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9hc3NldHMvc2Nzcy9jb2xvcnNcIjtcclxuXHJcbi5wYWdlX19mb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnk7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG5cclxuICAubGlua3Mge1xyXG4gICAgdWwge1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubG9jYXRpb24ge1xyXG4gICAgdWwge1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWJvdXQge1xyXG4gICAgdWwge1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvcHlyaWdodCB7XHJcblxyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzMTNENTU7O1xyXG5cclxuICAgIHAge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBjb2xvcjogIzhDOTdBQztcclxuICAgIH1cclxuXHJcbiAgICB1bCB7XHJcbiAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcblxyXG4gICAgICBsaSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcblxyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIi5wYWdlX19mb290ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNTRCO1xuICBoZWlnaHQ6IGF1dG87XG4gIGNvbG9yOiAjZmZmO1xufVxuLnBhZ2VfX2Zvb3RlciAubGlua3MgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLnBhZ2VfX2Zvb3RlciAubGlua3MgdWwgYSB7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi5wYWdlX19mb290ZXIgLmxvY2F0aW9uIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5wYWdlX19mb290ZXIgLmxvY2F0aW9uIHVsIGEge1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ucGFnZV9fZm9vdGVyIC5hYm91dCB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ucGFnZV9fZm9vdGVyIC5jb3B5cmlnaHQge1xuICBib3JkZXItdG9wOiAxcHggc29saWQgIzMxM0Q1NTtcbn1cbi5wYWdlX19mb290ZXIgLmNvcHlyaWdodCBwIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgY29sb3I6ICM4Qzk3QUM7XG59XG4ucGFnZV9fZm9vdGVyIC5jb3B5cmlnaHQgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLnBhZ2VfX2Zvb3RlciAuY29weXJpZ2h0IHVsIGxpIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBsZXR0ZXItc3BhY2luZzogNXB4O1xufVxuLnBhZ2VfX2Zvb3RlciAuY29weXJpZ2h0IHVsIGxpIGkge1xuICBjb2xvcjogI2ZmZmZmZjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/form/form.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/form/form.component.ts ***!
  \***************************************************/
/*! exports provided: FormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormComponent", function() { return FormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _mail_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../mail.service */ "./src/app/mail.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lazy-img-directive.directive */ "./src/app/lazy-img-directive.directive.ts");









function FormComponent_div_5_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FormComponent_div_5_ng_container_9_Template_input_change_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const web_r4 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r5.onCheckboxChange($event); return web_r4.isChecked = !web_r4.isCheked; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const web_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](web_r4.usluga);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", web_r4.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", web_r4.id)("checked", web_r4.isChecked);
} }
function FormComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Korak 1 od 2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Za koju ste uslugu zaintresovani?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, FormComponent_div_5_ng_container_9_Template, 6, 4, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormComponent_div_5_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.nextStep(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Slede\u0107i korak ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.websiteList);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r1.form.controls.website.valid);
} }
function FormComponent_div_6_div_10_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Ime je obavezno ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormComponent_div_6_div_10_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Ime mora biti duze od 3 slova ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormComponent_div_6_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormComponent_div_6_div_10_p_1_Template, 2, 0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormComponent_div_6_div_10_p_2_Template, 2, 0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.name.errors.minlength);
} }
function FormComponent_div_6_div_14_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Unesite broj telefona. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormComponent_div_6_div_14_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Pogre\u0161an broj telefona. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormComponent_div_6_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormComponent_div_6_div_14_p_1_Template, 2, 0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormComponent_div_6_div_14_p_2_Template, 2, 0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.telefon.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r10.telefon.errors.email);
} }
function FormComponent_div_6_div_17_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Obavezana email adresa. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormComponent_div_6_div_17_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Pogresna email adresa. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormComponent_div_6_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormComponent_div_6_div_17_p_1_Template, 2, 0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, FormComponent_div_6_div_17_p_2_Template, 2, 0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r11.email.errors.email);
} }
function FormComponent_div_6_div_21_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Grad je obavezan. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormComponent_div_6_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormComponent_div_6_div_21_p_1_Template, 2, 0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r12.city.errors.required);
} }
function FormComponent_div_6_div_34_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Unesite tekst.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FormComponent_div_6_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormComponent_div_6_div_34_p_1_Template, 2, 0, "p", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r13.text.errors.required);
} }
function FormComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Korak 2 od 2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Va\u0161i podaci i poruka");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, FormComponent_div_6_div_10_Template, 3, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, FormComponent_div_6_div_14_Template, 3, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, FormComponent_div_6_div_17_Template, 3, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, FormComponent_div_6_div_21_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FormComponent_div_6_Template_select_change_23_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.selectChangeHandler($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Izaberite zemlju");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Srbija");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Bosna i Hercegovinva");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Crna Gora");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "textarea", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, FormComponent_div_6_div_34_Template, 2, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormComponent_div_6_Template_button_click_38_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r24.backStep(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Korak unazad");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Po\u0161alji");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.name.invalid && (ctx_r2.name.dirty || ctx_r2.name.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.telefon.invalid && (ctx_r2.telefon.dirty || ctx_r2.telefon.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.email.invalid && (ctx_r2.email.dirty || ctx_r2.email.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.city.invalid && (ctx_r2.city.dirty || ctx_r2.city.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.text.invalid && (ctx_r2.text.dirty || ctx_r2.text.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !ctx_r2.form.valid);
} }
class FormComponent {
    // tslint:disable-next-line:no-shadowed-variable
    constructor(MailService, formBuilder, toastr, router) {
        this.MailService = MailService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.router = router;
        this.selection = {};
        //   form: FormGroup;
        this.websiteList = [
            {
                usluga: 'Konsultacije',
                imageUrl: 'assets/img/kontakt/checkbox-izgradnja.jpg',
                id: 'Izgradnja',
                isChecked: false
            },
            {
                usluga: 'Projektovanje',
                imageUrl: 'assets/img/kontakt/checkbox-projektovanje.jpg',
                id: 'Projektovanje',
                isChecked: false
            },
            {
                usluga: 'Renoviranje',
                imageUrl: 'assets/img/kontakt/checkbox-renoviranje.jpg',
                id: 'Renoviranje',
                isChecked: false
            },
            {
                usluga: 'Odrzavanje',
                imageUrl: 'assets/img/kontakt/checkbox-odrzavanje.jpg',
                id: 'Odrzavanje',
                isChecked: false
            },
            {
                usluga: 'Dodatna Oprema',
                imageUrl: 'assets/img/kontakt/checkbox-dodatna-oprema.jpg',
                id: 'Dodatna Oprema',
                isChecked: false
            },
        ];
        this.variable = 0;
        this.multi = false;
        // @ViewChild(ToastContainerDirective, { static: true })
        // toastContainer: ToastContainerDirective;
        this.form = this.formBuilder.group({
            website: this.formBuilder.array([], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            name: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)
                ]
            ],
            email: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email,
                ]],
            select: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            telefon: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(9), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            text: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
    }
    nextStep() {
        if (this.variable < 2) {
            this.variable = this.variable + 1;
        }
        console.log(this.variable);
    }
    backStep() {
        if (this.variable > 0) {
            this.variable = this.variable - 1;
        }
        console.log(this.variable);
    }
    changeGender(e) {
        console.log(e.target.value);
    }
    onCheckboxChange(e) {
        const website = this.form.get('website');
        if (e.target.checked) {
            website.push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](e.target.value));
        }
        else {
            const index = website.controls.findIndex(x => x.value === e.target.value);
            website.removeAt(index);
        }
    }
    // event handler for the select element's change event
    selectChangeHandler(event) {
        // update the ui
        console.log(event.target.value);
    }
    get name() {
        return this.form.get('name');
    }
    get email() {
        return this.form.get('email');
    }
    get telefon() {
        return this.form.get('telefon');
    }
    get city() {
        return this.form.get('city');
    }
    get text() {
        return this.form.get('text');
    }
    sendMail() {
        console.log(this.form.value);
        this.subscription = this.MailService.sendEmail(this.form.value).subscribe(data => {
            const msg = data.message;
            this.toastr.success(msg);
            // console.log(data, "success");
            setTimeout(() => window.location.reload(), 2000);
        }, error => {
            console.error(error, 'error');
        });
        this.MailService.sendEmail(JSON.stringify(this.form.value));
        // this.router.navigate(['/contact'])
    }
    ngOnInit() {
    }
}
FormComponent.ɵfac = function FormComponent_Factory(t) { return new (t || FormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
FormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormComponent, selectors: [["app-form"]], decls: 7, vars: 4, consts: [[3, "ngSwitch"], [1, "shape"], ["id", "kontaktForma", 1, "card"], [1, "form", 3, "formGroup", "ngSubmit"], ["forma", "ngForm"], [4, "ngSwitchCase"], [1, "card-header", "bg-light"], [1, "form-heading"], [1, "h4"], [1, "card-body"], [1, "form-check", "d-flex", "flex-column"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "w-100", 3, "disabled", "click"], ["formArrayName", "website", 1, "inputGroup"], [1, "d-inline-flex", "pl-4", "m-0", "pt-1", "pb-2", "pb-md-0"], ["alt", "", "srcset", "", 1, "rounded-left", "float-left", "mr-2", "d-none", "d-md-inline-flex", 2, "width", "88px", "height", "43px", 3, "src"], ["type", "checkbox", 1, "float-right", "mt-3", 3, "value", "checked", "change"], [1, "form-group", "px-5"], ["for", "nameInp"], ["type", "text", "id", "nameInp", "formControlName", "name", "required", "", "placeholder", "Ime i Prezime", 1, "form-control", "border-info"], ["class", "alert alert-danger p-1", 4, "ngIf"], [1, "form-row", "px-5"], [1, "col-md-6", "mb-2"], ["type", "tel", "value", "", "id", "example-tel-input", "formControlName", "telefon", "placeholder", "Telefon", 1, "form-control", "mb-2", "mb-md-0"], ["type", "text", "id", "mailInp", "formControlName", "email", "required", "", "placeholder", "Email", 1, "form-control", "border-info"], [1, "form-row", "px-5", "pt-2"], ["type", "text", "formControlName", "city", "required", "", "placeholder", "Grad", 1, "form-control", "border-info", "mb-2", "mb-md-0"], ["formControlName", "select", "placeholder", "Izaberite zemlju", 1, "form-control", 3, "change"], ["value", "", "disabled", "", "selected", ""], ["value", "Srbija"], ["value", "Bosna i Hercegovina"], ["value", "Crna Gora"], ["rows", "3", "formControlName", "text", "placeholder", "Vasa poruka", 1, "form-control", "mt-2"], [1, "px-5", "py-5"], [1, "row"], [1, "col-12", "col-md"], [1, "btn", "btn-primary-light", "mr-md-2", "w-100", 2, "background-color", "white !important", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", "w-100", "mt-3", "mt-md-0", 3, "disabled"], [1, "alert", "alert-danger", "p-1"], ["class", "mb-0", 4, "ngIf"], [1, "mb-0"]], template: function FormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormComponent_Template_form_ngSubmit_3_listener() { return ctx.sendMail(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormComponent_div_5_Template, 12, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormComponent_div_6_Template, 43, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.variable);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "1");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_6__["LazyImgDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".shape[_ngcontent-%COMP%] {\n  background-image: url('shape.svg');\n  background-repeat: no-repeat;\n  background-position: right top;\n  position: absolute;\n  top: -4.5rem;\n  right: 4rem;\n  width: 100%;\n  height: 100%;\n  z-index: 0;\n  transform: scale(0.9);\n}\n\n.card[_ngcontent-%COMP%] {\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  box-sizing: border-box;\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.04), 0 16px 24px rgba(0, 0, 0, 0.04), 0 24px 32px rgba(0, 0, 0, 0.04);\n  border-radius: 10px;\n  z-index: 1;\n}\n\n.card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  border-radius: 10px 10px 0px 0px;\n  margin-bottom: 0;\n  padding: 2rem 2.5rem 1rem 2.5rem;\n}\n\n.card[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  padding: 2.5rem;\n}\n\n.card[_ngcontent-%COMP%]   .form-heading[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 16px;\n  letter-spacing: 0.1px;\n  text-transform: uppercase;\n  color: #175CFF;\n}\n\n.card[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:focus {\n  border-color: #28a745;\n  box-shadow: 0 0 0 0.2rem rgba(40, 167, 69, 0.25);\n}\n\n.card[_ngcontent-%COMP%]   .radio-button[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n\n.card[_ngcontent-%COMP%]   .radio-button[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.card[_ngcontent-%COMP%]   .radio-button[_ngcontent-%COMP%]   input[type=checkbox][id^=myCheckbox][_ngcontent-%COMP%] {\n  display: none;\n}\n\n.card[_ngcontent-%COMP%]   .radio-button[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  border: 1px solid #fff;\n  padding: 10px;\n  display: block;\n  position: relative;\n  margin: 10px;\n  cursor: pointer;\n}\n\n.card[_ngcontent-%COMP%]   .radio-button[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before {\n  background-color: white;\n  color: white;\n  content: \" \";\n  display: block;\n  border-radius: 50%;\n  position: absolute;\n  top: -5px;\n  left: -5px;\n  width: 25px;\n  height: 25px;\n  text-align: center;\n  line-height: 28px;\n  transition-duration: 0.4s;\n  transform: scale(0);\n}\n\n.card[_ngcontent-%COMP%]   .radio-button[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 100px;\n  width: 100px;\n  transition-duration: 0.2s;\n  transform-origin: 50% 50%;\n}\n\n.card[_ngcontent-%COMP%]   .radio-button[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  border-color: #ddd;\n}\n\n.card[_ngcontent-%COMP%]   .radio-button[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:before {\n  content: \"\";\n  padding: 0.25rem;\n  background-color: #2E79CA;\n  transform: scale(1.5);\n}\n\n.card[_ngcontent-%COMP%]   .radio-button[_ngcontent-%COMP%]   [_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  transform: scale(1);\n  \n  z-index: -1;\n}\n\n.card[_ngcontent-%COMP%]   .radio-button[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%] {\n  -webkit-appearance: none;\n}\n\n.card[_ngcontent-%COMP%]   .radio-button[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  border: 1.41405px solid #EBF4FA;\n  box-sizing: border-box;\n  border-radius: 8px;\n}\n\n.card[_ngcontent-%COMP%]   .radio-button[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]   .prepodne[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  bottom: 50%;\n}\n\n.card[_ngcontent-%COMP%]   .radio-button[_ngcontent-%COMP%]   .radio[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%] {\n  border: 2px solid #2E79CA;\n}\n\n.card[_ngcontent-%COMP%]   .radio-button[_ngcontent-%COMP%]   input[type=radio][_ngcontent-%COMP%]:checked    + .icon[_ngcontent-%COMP%] {\n  fill: red;\n}\n\n.form[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.form[_ngcontent-%COMP%]   .mycheckbox[_ngcontent-%COMP%] {\n  margin-top: 5px;\n  margin-left: 5px;\n}\n\n.form-check[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n.inputGroup[_ngcontent-%COMP%] {\n  background-color: #fff;\n  display: block;\n  position: relative;\n  margin-bottom: 1rem !important;\n  border-radius: 10px;\n  border: 2px solid #EBF4FA;\n}\n\n.inputGroup[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  padding: 12px 30px;\n  width: 100%;\n  display: block;\n  text-align: left;\n  color: #3C454C;\n  cursor: pointer;\n  position: relative;\n  z-index: 2;\n  transition: color 200ms ease-in;\n  overflow: hidden;\n}\n\n.inputGroup[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:before {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  content: \"\";\n  background-color: #5562eb;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%) scale3d(1, 1, 1);\n  transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);\n  opacity: 0;\n  z-index: -1;\n}\n\n.inputGroup[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]:after {\n  width: 32px;\n  height: 32px;\n  content: \"\";\n  border: 2px solid #D1D7DC;\n  background-color: #fff;\n  background-image: url(\"data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M5.414 11L4 12.414l5.414 5.414L20.828 6.414 19.414 5l-10 10z' fill='%23fff' fill-rule='nonzero'/%3E%3C/svg%3E \");\n  background-repeat: no-repeat;\n  background-position: 2px 3px;\n  border-radius: 50%;\n  z-index: 2;\n  position: absolute;\n  right: 30px;\n  top: 50%;\n  transform: translateY(-50%);\n  cursor: pointer;\n  transition: all 200ms ease-in;\n}\n\n.inputGroup[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.inputGroup[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%]:before {\n  transform: translate(-50%, -50%) scale3d(56, 56, 1);\n  opacity: 1;\n}\n\n.inputGroup[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%]:after {\n  background-color: #54E0C7;\n  border-color: #54E0C7;\n}\n\n.inputGroup[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n  order: 1;\n  z-index: 2;\n  position: absolute;\n  right: 20px;\n  top: 5px;\n  transform: translateY(-50%);\n  cursor: pointer;\n}\n\n.icon[_ngcontent-%COMP%] {\n  transform: scale(0.8);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtL0U6XFxQcm9qZWN0c1xccG9vbHNlcnZpY2VcXHBvb2wtc2VydmljZVxcYW5ndWxhci1zcmMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZvcm1cXGZvcm0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS9mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0NBQUE7RUFDQSw0QkFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0Esd0lBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUNDRjs7QURDRTtFQUNFLGdDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQ0NKOztBREVFO0VBQ0UsZUFBQTtBQ0FKOztBREdFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtBQ0ZKOztBREtFO0VBRUUscUJBQUE7RUFDQSxnREFBQTtBQ0pKOztBRFVJO0VBQ0UscUJBQUE7QUNSTjs7QURXSTtFQUNFLGNBQUE7QUNUTjs7QURZSTtFQUNFLGFBQUE7QUNWTjs7QURhSTtFQUNFLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDWE47O0FEY0k7RUFDRSx1QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNaTjs7QURlSTtFQUNFLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQ2JOOztBRGdCSTtFQUNFLGtCQUFBO0FDZE47O0FEaUJJO0VBQ0UsV0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtBQ2ZOOztBRGtCSTtFQUNFLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxXQUFBO0FDaEJOOztBRG9CTTtFQUNFLHdCQUFBO0FDbEJSOztBRHFCTTtFQUNFLCtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtBQ25CUjs7QURxQlE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDbkJWOztBRHVCTTtFQUNFLHlCQUFBO0FDckJSOztBRDBCSTtFQUNFLFNBQUE7QUN4Qk47O0FEaUNBO0VBQ0UsbUJBQUE7QUM5QkY7O0FEaUNFO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0FDL0JKOztBRG1DQTtFQUNFLGVBQUE7QUNoQ0Y7O0FEb0NBO0VBQ0Usc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNqQ0Y7O0FEbUNFO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0FDakNKOztBRG1DSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsaURBQUE7RUFDQSxrREFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDakNOOztBRG9DSTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0UEFBQTtFQUNBLDRCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0VBQ0EsMkJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUNsQ047O0FEc0NFO0VBQ0UsV0FBQTtBQ3BDSjs7QURzQ0k7RUFDRSxtREFBQTtFQUNBLFVBQUE7QUNwQ047O0FEdUNJO0VBQ0UseUJBQUE7RUFDQSxxQkFBQTtBQ3JDTjs7QUR5Q0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQ3ZDSjs7QUQ0Q0E7RUFDRSxxQkFBQTtBQ3pDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm9ybS9mb3JtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNoYXBlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoc3JjL2Fzc2V0cy9pbWcvc2hhcGUuc3ZnKTtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IHRvcDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtNC41cmVtO1xyXG4gIHJpZ2h0OiA0cmVtO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAwO1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMC45KTtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4wNCksIDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAwIDE2cHggMjRweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAwIDI0cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgei1pbmRleDogMTtcclxuXHJcbiAgLmNhcmQtaGVhZGVyIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIHBhZGRpbmc6IDJyZW0gMi41cmVtIDFyZW0gMi41cmVtO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAyLjVyZW07XHJcbiAgfVxyXG5cclxuICAuZm9ybS1oZWFkaW5nIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcblxyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXB4O1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGNvbG9yOiAjMTc1Q0ZGO1xyXG4gIH1cclxuXHJcbiAgbGFiZWw6Zm9jdXMge1xyXG5cclxuICAgIGJvcmRlci1jb2xvcjogIzI4YTc0NTtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwIDAuMnJlbSByZ2JhKDQwLCAxNjcsIDY5LCAwLjI1KTtcclxuICB9XHJcblxyXG5cclxuICAucmFkaW8tYnV0dG9uIHtcclxuXHJcbiAgICB1bCB7XHJcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICBsaSB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXVtpZF49XCJteUNoZWNrYm94XCJdIHtcclxuICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuXHJcbiAgICBsYWJlbCB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZmY7XHJcbiAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgIG1hcmdpbjogMTBweDtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGxhYmVsOmJlZm9yZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgIGNvbnRlbnQ6IFwiIFwiO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogLTVweDtcclxuICAgICAgbGVmdDogLTVweDtcclxuICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgIGhlaWdodDogMjVweDtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBsaW5lLWhlaWdodDogMjhweDtcclxuICAgICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC40cztcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIH1cclxuXHJcbiAgICBsYWJlbCBpbWcge1xyXG4gICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XHJcbiAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XHJcbiAgICB9XHJcblxyXG4gICAgOmNoZWNrZWQgKyBsYWJlbCB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogI2RkZDtcclxuICAgIH1cclxuXHJcbiAgICA6Y2hlY2tlZCArIGxhYmVsOmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIHBhZGRpbmc6IC4yNXJlbTtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzJFNzlDQTtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG4gICAgfVxyXG5cclxuICAgIDpjaGVja2VkICsgbGFiZWwgaW1nIHtcclxuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcclxuICAgICAgLyogYm94LXNoYWRvdzogMCAwIDVweCAjMzMzOyAqL1xyXG4gICAgICB6LWluZGV4OiAtMTtcclxuICAgIH1cclxuXHJcbiAgICAucmFkaW8ge1xyXG4gICAgICBpbnB1dFt0eXBlPXJhZGlvXSB7XHJcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsYWJlbCB7XHJcbiAgICAgICAgYm9yZGVyOiAxLjQxNDA1cHggc29saWQgI0VCRjRGQTtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuXHJcbiAgICAgICAgLnByZXBvZG5lIHtcclxuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgYm90dG9tOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgbGFiZWwge1xyXG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkICMyRTc5Q0E7XHJcbiAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaW5wdXRbdHlwZT1yYWRpb106Y2hlY2tlZCArIC5pY29uIHtcclxuICAgICAgZmlsbDogcmVkO1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcbi5mb3JtIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxuXHJcbiAgLm15Y2hlY2tib3gge1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDVweDtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWNoZWNrIHtcclxuICBwYWRkaW5nLWxlZnQ6IDA7XHJcbn1cclxuXHJcblxyXG4uaW5wdXRHcm91cCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbSAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgI0VCRjRGQTtcclxuXHJcbiAgbGFiZWwge1xyXG4gICAgcGFkZGluZzogMTJweCAzMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBjb2xvcjogIzNDNDU0QztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAyMDBtcyBlYXNlLWluO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAmOmJlZm9yZSB7XHJcbiAgICAgIHdpZHRoOiAxMHB4O1xyXG4gICAgICBoZWlnaHQ6IDEwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgY29udGVudDogJyc7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM1NTYyZWI7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogNTAlO1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUzZCgxLCAxLCAxKTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKTtcclxuICAgICAgb3BhY2l0eTogMDtcclxuICAgICAgei1pbmRleDogLTE7XHJcbiAgICB9XHJcblxyXG4gICAgJjphZnRlciB7XHJcbiAgICAgIHdpZHRoOiAzMnB4O1xyXG4gICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjRDFEN0RDO1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPSczMicgaGVpZ2h0PSczMicgdmlld0JveD0nMCAwIDMyIDMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNNS40MTQgMTFMNCAxMi40MTRsNS40MTQgNS40MTRMMjAuODI4IDYuNDE0IDE5LjQxNCA1bC0xMCAxMHonIGZpbGw9JyUyM2ZmZicgZmlsbC1ydWxlPSdub256ZXJvJy8lM0UlM0Mvc3ZnJTNFIFwiKTtcclxuICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMnB4IDNweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB6LWluZGV4OiAyO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHJpZ2h0OiAzMHB4O1xyXG4gICAgICB0b3A6IDUwJTtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG5cclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUzZCg1NiwgNTYsIDEpO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgfVxyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTRFMEM3O1xyXG4gICAgICBib3JkZXItY29sb3I6ICM1NEUwQzc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpbnB1dCB7XHJcbiAgICB3aWR0aDogMzJweDtcclxuICAgIGhlaWdodDogMzJweDtcclxuICAgIG9yZGVyOiAxO1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAvL3Zpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuXHJcbi5pY29uIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDAuOCk7XHJcbn1cclxuIiwiLnNoYXBlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKHNyYy9hc3NldHMvaW1nL3NoYXBlLnN2Zyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0IHRvcDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC00LjVyZW07XG4gIHJpZ2h0OiA0cmVtO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAwO1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuOSk7XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm94LXNoYWRvdzogMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAwIDRweCA4cHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgMCAxNnB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgMCAyNHB4IDMycHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgei1pbmRleDogMTtcbn1cbi5jYXJkIC5jYXJkLWhlYWRlciB7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwcHggMHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xuICBwYWRkaW5nOiAycmVtIDIuNXJlbSAxcmVtIDIuNXJlbTtcbn1cbi5jYXJkIC5jYXJkLWJvZHkge1xuICBwYWRkaW5nOiAyLjVyZW07XG59XG4uY2FyZCAuZm9ybS1oZWFkaW5nIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gIGxldHRlci1zcGFjaW5nOiAwLjFweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgY29sb3I6ICMxNzVDRkY7XG59XG4uY2FyZCBsYWJlbDpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogIzI4YTc0NTtcbiAgYm94LXNoYWRvdzogMCAwIDAgMC4ycmVtIHJnYmEoNDAsIDE2NywgNjksIDAuMjUpO1xufVxuLmNhcmQgLnJhZGlvLWJ1dHRvbiB1bCB7XG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcbn1cbi5jYXJkIC5yYWRpby1idXR0b24gbGkge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbi5jYXJkIC5yYWRpby1idXR0b24gaW5wdXRbdHlwZT1jaGVja2JveF1baWRePW15Q2hlY2tib3hdIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5jYXJkIC5yYWRpby1idXR0b24gbGFiZWwge1xuICBib3JkZXI6IDFweCBzb2xpZCAjZmZmO1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW46IDEwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5jYXJkIC5yYWRpby1idXR0b24gbGFiZWw6YmVmb3JlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgY29udGVudDogXCIgXCI7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtNXB4O1xuICBsZWZ0OiAtNXB4O1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjRzO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xufVxuLmNhcmQgLnJhZGlvLWJ1dHRvbiBsYWJlbCBpbWcge1xuICBoZWlnaHQ6IDEwMHB4O1xuICB3aWR0aDogMTAwcHg7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDUwJSA1MCU7XG59XG4uY2FyZCAucmFkaW8tYnV0dG9uIDpjaGVja2VkICsgbGFiZWwge1xuICBib3JkZXItY29sb3I6ICNkZGQ7XG59XG4uY2FyZCAucmFkaW8tYnV0dG9uIDpjaGVja2VkICsgbGFiZWw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcIjtcbiAgcGFkZGluZzogMC4yNXJlbTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJFNzlDQTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xufVxuLmNhcmQgLnJhZGlvLWJ1dHRvbiA6Y2hlY2tlZCArIGxhYmVsIGltZyB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gIC8qIGJveC1zaGFkb3c6IDAgMCA1cHggIzMzMzsgKi9cbiAgei1pbmRleDogLTE7XG59XG4uY2FyZCAucmFkaW8tYnV0dG9uIC5yYWRpbyBpbnB1dFt0eXBlPXJhZGlvXSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cbi5jYXJkIC5yYWRpby1idXR0b24gLnJhZGlvIGxhYmVsIHtcbiAgYm9yZGVyOiAxLjQxNDA1cHggc29saWQgI0VCRjRGQTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufVxuLmNhcmQgLnJhZGlvLWJ1dHRvbiAucmFkaW8gbGFiZWwgLnByZXBvZG5lIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgYm90dG9tOiA1MCU7XG59XG4uY2FyZCAucmFkaW8tYnV0dG9uIC5yYWRpbyBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgbGFiZWwge1xuICBib3JkZXI6IDJweCBzb2xpZCAjMkU3OUNBO1xufVxuLmNhcmQgLnJhZGlvLWJ1dHRvbiBpbnB1dFt0eXBlPXJhZGlvXTpjaGVja2VkICsgLmljb24ge1xuICBmaWxsOiByZWQ7XG59XG5cbi5mb3JtIHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5mb3JtIC5teWNoZWNrYm94IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tbGVmdDogNXB4O1xufVxuXG4uZm9ybS1jaGVjayB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLmlucHV0R3JvdXAge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxcmVtICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNFQkY0RkE7XG59XG4uaW5wdXRHcm91cCBsYWJlbCB7XG4gIHBhZGRpbmc6IDEycHggMzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogIzNDNDU0QztcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDI7XG4gIHRyYW5zaXRpb246IGNvbG9yIDIwMG1zIGVhc2UtaW47XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG4uaW5wdXRHcm91cCBsYWJlbDpiZWZvcmUge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGJhY2tncm91bmQtY29sb3I6ICM1NTYyZWI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogNTAlO1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUzZCgxLCAxLCAxKTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zIGN1YmljLWJlemllcigwLjQsIDAsIDAuMiwgMSk7XG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IC0xO1xufVxuLmlucHV0R3JvdXAgbGFiZWw6YWZ0ZXIge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBjb250ZW50OiBcIlwiO1xuICBib3JkZXI6IDJweCBzb2xpZCAjRDFEN0RDO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJkYXRhOmltYWdlL3N2Zyt4bWwsJTNDc3ZnIHdpZHRoPSczMicgaGVpZ2h0PSczMicgdmlld0JveD0nMCAwIDMyIDMyJyB4bWxucz0naHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnJTNFJTNDcGF0aCBkPSdNNS40MTQgMTFMNCAxMi40MTRsNS40MTQgNS40MTRMMjAuODI4IDYuNDE0IDE5LjQxNCA1bC0xMCAxMHonIGZpbGw9JyUyM2ZmZicgZmlsbC1ydWxlPSdub256ZXJvJy8lM0UlM0Mvc3ZnJTNFIFwiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMnB4IDNweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB6LWluZGV4OiAyO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAzMHB4O1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAyMDBtcyBlYXNlLWluO1xufVxuLmlucHV0R3JvdXAgaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uaW5wdXRHcm91cCBpbnB1dDpjaGVja2VkIH4gbGFiZWw6YmVmb3JlIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUzZCg1NiwgNTYsIDEpO1xuICBvcGFjaXR5OiAxO1xufVxuLmlucHV0R3JvdXAgaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmFmdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzU0RTBDNztcbiAgYm9yZGVyLWNvbG9yOiAjNTRFMEM3O1xufVxuLmlucHV0R3JvdXAgaW5wdXQge1xuICB3aWR0aDogMzJweDtcbiAgaGVpZ2h0OiAzMnB4O1xuICBvcmRlcjogMTtcbiAgei1pbmRleDogMjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMjBweDtcbiAgdG9wOiA1cHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uaWNvbiB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC44KTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-form',
                templateUrl: './form.component.html',
                styleUrls: ['./form.component.scss']
            }]
    }], function () { return [{ type: _mail_service__WEBPACK_IMPORTED_MODULE_2__["MailService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/konsultacije/konsultacije.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/konsultacije/konsultacije.component.ts ***!
  \*******************************************************************/
/*! exports provided: KonsultacijeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KonsultacijeComponent", function() { return KonsultacijeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



const _c0 = function () { return ["/kontakt"]; };
class KonsultacijeComponent {
    constructor() { }
    ngOnInit() {
    }
}
KonsultacijeComponent.ɵfac = function KonsultacijeComponent_Factory(t) { return new (t || KonsultacijeComponent)(); };
KonsultacijeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: KonsultacijeComponent, selectors: [["app-konsultacije"]], decls: 11, vars: 2, consts: [[1, "consultation", "py-64", "py-sm-64"], [1, "container"], [1, "row"], [1, "col-12", "col-md-6"], [1, "text-white"], [1, "btn", "btn-secondary", "border-0", "mt-4", "float-md-right", 3, "routerLink"]], template: function KonsultacijeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h3", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Besplatne konsultacije");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Na\u0161 stru\u010Dni tim je na raspolaganju za sva pitanja i nedoumice koje imate. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Kontaktiraj nas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".consultation[_ngcontent-%COMP%] {\n  max-height: 100%;\n  height: 100%;\n  background-image: url('pozadina.png');\n  background-position: center;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9rb25zdWx0YWNpamUvRTpcXFByb2plY3RzXFxwb29sc2VydmljZVxccG9vbC1zZXJ2aWNlXFxhbmd1bGFyLXNyYy9zcmNcXGFwcFxcY29tcG9uZW50c1xca29uc3VsdGFjaWplXFxrb25zdWx0YWNpamUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMva29uc3VsdGFjaWplL2tvbnN1bHRhY2lqZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVFLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLHFDQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9rb25zdWx0YWNpamUva29uc3VsdGFjaWplLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnN1bHRhdGlvbiB7XHJcbiAgLy9oZWlnaHQ6IDUwdnc7XHJcbiAgbWF4LWhlaWdodDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9rb25zdWx0YWNpamUvcG96YWRpbmEucG5nXCIpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbiIsIi5jb25zdWx0YXRpb24ge1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcva29uc3VsdGFjaWplL3BvemFkaW5hLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](KonsultacijeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-konsultacije',
                templateUrl: './konsultacije.component.html',
                styleUrls: ['./konsultacije.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/navbar-dark/navbar-dark.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/navbar-dark/navbar-dark.component.ts ***!
  \*****************************************************************/
/*! exports provided: NavbarDarkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarDarkComponent", function() { return NavbarDarkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lazy-img-directive.directive */ "./src/app/lazy-img-directive.directive.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");






const _c0 = function () { return ["/"]; };
const _c1 = function () { return ["/polumontazni-bazeni"]; };
const _c2 = function () { return ["/betonski-bazeni"]; };
const _c3 = function () { return ["/bazeni-sa-folijom"]; };
const _c4 = function () { return ["/odrzavanje"]; };
const _c5 = function () { return ["/dodatna-oprema"]; };
const _c6 = function () { return ["/kontakt"]; };
class NavbarDarkComponent {
    constructor() {
        this.faPhone = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPhone"];
        this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEnvelope"];
    }
    ngOnInit() {
    }
}
NavbarDarkComponent.ɵfac = function NavbarDarkComponent_Factory(t) { return new (t || NavbarDarkComponent)(); };
NavbarDarkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarDarkComponent, selectors: [["app-navbar-dark"]], decls: 35, vars: 16, consts: [[1, "navbar", "navbar-expand-xl", "navbar-dark", "bg-sm-light"], [1, "container"], [1, "navbar-header"], [1, "navbar-brand", 3, "routerLink"], ["src", "assets/img/logo-white.svg", "alt", "logo", "srcset", "", 1, "d-none", "d-lg-inline-flex"], ["src", "assets/img/logo-white.svg", "alt", "logo", "srcset", "", 1, "d-block", "d-lg-none"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbar6", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbar6", 1, "navbar-collapse", "collapse", "justify-content-stretch"], [1, "navbar-nav"], [1, "nav-item", "ml-md-3", "mr-2", "dropdown", "has-megamenu"], ["href", "", "id", "headers-1-dropdown", "data-toggle", "dropdown", 1, "nav-link", "dropdown-toggle", "text-center"], ["aria-labelledby", "headers-1-dropdown", 1, "dropdown-menu", "text-center", "text-md-left"], [1, "dropdown-item", "text-center", "text-md-left", 3, "routerLink"], [1, "nav-item", "mr-2"], [1, "nav-link", "text-center", 3, "routerLink"], [1, "nav-item"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "mr-md-2", "mt-4", "mt-md-0", "mb-2", "mb-md-0", "text-center", "text-md-right"], ["href", "tel:+381216621200", 1, "btn", "btn-primary-light"], [1, "mr-2", 3, "icon"], [1, "nav-item", "text-center", "text-md-right"], [1, "btn", "btn-primary-light", 3, "routerLink"]], template: function NavbarDarkComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "BAZENI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Future pool bazeni");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Betonski bazeni");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Bazeni sa folijom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "ODR\u017DAVANJE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "DODATNA OPREMA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "li", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "fa-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " 021/6621 200 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "fa-icon", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " PI\u0160ITE NAM ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faPhone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faEnvelope);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_3__["LazyImgDirective"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"]], styles: [".navbar[_ngcontent-%COMP%] {\n  padding-top: 0;\n  padding-bottom: 0;\n  height: 128px;\n  position: absolute;\n  width: 100%;\n  z-index: 1;\n}\n@media (max-width: 991.98px) {\n  .navbar[_ngcontent-%COMP%] {\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n    height: auto;\n    color: black;\n  }\n}\n@media (max-width: 991.98px) {\n  .navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    color: black;\n  }\n}\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 140px;\n}\n@media (max-width: 991.98px) {\n  .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    width: 96px;\n  }\n}\n.navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #ffffff;\n  font-weight: bold;\n}\n.navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: #FF8125;\n}\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n.dropdown-item[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n}\n@media (max-width: 991.98px) {\n  .navbar-collapse[_ngcontent-%COMP%] {\n    background-color: white;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n    border-radius: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXItZGFyay9FOlxcUHJvamVjdHNcXHBvb2xzZXJ2aWNlXFxwb29sLXNlcnZpY2VcXGFuZ3VsYXItc3JjL3NyY1xcYXBwXFxjb21wb25lbnRzXFxuYXZiYXItZGFya1xcbmF2YmFyLWRhcmsuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyLWRhcmsvbmF2YmFyLWRhcmsuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyLWRhcmsvRTpcXFByb2plY3RzXFxwb29sc2VydmljZVxccG9vbC1zZXJ2aWNlXFxhbmd1bGFyLXNyYy9ub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcbWl4aW5zXFxfYnJlYWtwb2ludHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FDSkY7QUNrRUk7RUZwRUo7SUFRSSxpQkFBQTtJQUNBLG9CQUFBO0lBQ0EsWUFBQTtJQUNBLFlBQUE7RUNGRjtBQUNGO0FDMERJO0VGcERGO0lBRUksWUFBQTtFQ0pKO0FBQ0Y7QURPRTtFQUNFLFlBQUE7QUNMSjtBQ2tESTtFRjlDRjtJQUdJLFdBQUE7RUNISjtBQUNGO0FETUU7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7QUNKSjtBRE1JO0VBQ0UsY0FBQTtBQ0pOO0FEUUU7RUFDRSxxQkFBQTtBQ05KO0FEVUE7RUFDRSxvQkFBQTtBQ1BGO0FDK0JJO0VGckJKO0lBRUksdUJBQUE7SUFDQSxpQkFBQTtJQUNBLG9CQUFBO0lBQ0EsbUJBQUE7RUNQRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXItZGFyay9uYXZiYXItZGFyay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zXCI7XHJcbkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Nzcy9jb2xvcnNcIjtcclxuXHJcbi5uYXZiYXIge1xyXG4gIHBhZGRpbmctdG9wOiAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gIGhlaWdodDogMTI4cHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKG1kKSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuXHJcblxyXG5cclxuICB1bCBsaSBhIHtcclxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihtZCkge1xyXG4gICAgICBjb2xvcjogYmxhY2s7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubmF2YmFyLWJyYW5kID4gaW1nIHtcclxuICAgIHdpZHRoOiAxNDBweDtcclxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihtZCkge1xyXG4gICAgICB3aWR0aDogOTZweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5uYXYtbGluayB7XHJcbiAgICBjb2xvcjogI2ZmZmZmZjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjb2xvcjogI0ZGODEyNTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5kcm9wZG93bi1pdGVtIHtcclxuICBwYWRkaW5nOiAxcmVtIDEuNXJlbTtcclxufVxyXG5cclxuLm5hdmJhci1jb2xsYXBzZSB7XHJcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKG1kKSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4iLCIubmF2YmFyIHtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwO1xuICBoZWlnaHQ6IDEyOHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiAxO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gIC5uYXZiYXIge1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBjb2xvcjogYmxhY2s7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAubmF2YmFyIHVsIGxpIGEge1xuICAgIGNvbG9yOiBibGFjaztcbiAgfVxufVxuLm5hdmJhciAubmF2YmFyLWJyYW5kID4gaW1nIHtcbiAgd2lkdGg6IDE0MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gIC5uYXZiYXIgLm5hdmJhci1icmFuZCA+IGltZyB7XG4gICAgd2lkdGg6IDk2cHg7XG4gIH1cbn1cbi5uYXZiYXIgLm5hdi1saW5rIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuLm5hdmJhciAubmF2LWxpbms6aG92ZXIge1xuICBjb2xvcjogI0ZGODEyNTtcbn1cbi5uYXZiYXIgdWwge1xuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XG59XG5cbi5kcm9wZG93bi1pdGVtIHtcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAubmF2YmFyLWNvbGxhcHNlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICB9XG59IiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarDarkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar-dark',
                templateUrl: './navbar-dark.component.html',
                styleUrls: ['./navbar-dark.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lazy-img-directive.directive */ "./src/app/lazy-img-directive.directive.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");






const _c0 = function () { return ["/"]; };
const _c1 = function () { return ["/polumontazni-bazeni"]; };
const _c2 = function () { return ["/betonski-bazeni"]; };
const _c3 = function () { return ["/bazeni-sa-folijom"]; };
const _c4 = function () { return ["/odrzavanje"]; };
const _c5 = function () { return ["/dodatna-oprema"]; };
const _c6 = function () { return ["/kontakt"]; };
class NavbarComponent {
    constructor() {
        this.faPhone = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPhone"];
        this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEnvelope"];
    }
    ngOnInit() {
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 34, vars: 16, consts: [[1, "navbar", "navbar-expand-xl", "navbar-light", "bg-transparent"], [1, "container"], [1, "navbar-header"], [1, "navbar-brand", 3, "routerLink"], ["src", "assets/img/logo.svg", "alt", "logo", "srcset", ""], ["type", "button", "data-toggle", "collapse", "data-target", "#navbar6", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbar6", 1, "navbar-collapse", "collapse", "justify-content-stretch"], [1, "navbar-nav"], [1, "nav-item", "ml-md-3", "mx-3", "dropdown", "has-megamenu"], ["href", "", "id", "headers-1-dropdown", "data-toggle", "dropdown", 1, "nav-link", "dropdown-toggle", "text-center"], ["aria-labelledby", "headers-1-dropdown", 1, "dropdown-menu", "text-center", "text-md-left"], [1, "dropdown-item", "text-center", "text-md-left", 3, "routerLink"], [1, "nav-item", "mr-2"], [1, "nav-link", "text-center", 3, "routerLink"], [1, "nav-item"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "mr-md-2", "mt-4", "mt-md-0", "mb-2", "mb-md-0", "text-center", "text-md-right"], ["href", "tel:+381216621200", 1, "btn", "btn-primary"], [1, "mr-2", 3, "icon"], [1, "nav-item", "text-center", "text-md-right"], [1, "btn", "btn-primary", 3, "routerLink"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "BAZENI");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Future pool bazeni");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Betonski bazeni");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Bazeni sa folijom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "ODR\u017DAVANJE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "li", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "DODATNA OPREMA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "ul", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "li", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "fa-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " 021/6621 200 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "fa-icon", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " PI\u0160ITE NAM ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faPhone);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faEnvelope);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_3__["LazyImgDirective"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"]], styles: [".navbar[_ngcontent-%COMP%] {\n  background-color: #fff;\n  position: relative;\n  padding-top: 1rem;\n  padding-bottom: 1rem;\n  height: auto;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 140px;\n}\n@media (max-width: 991.98px) {\n  .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    width: 96px;\n  }\n}\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n  width: 140px;\n}\n@media (max-width: 991.98px) {\n  .navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]    > img[_ngcontent-%COMP%] {\n    width: 96px;\n  }\n}\n.navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  color: #17154B;\n  font-weight: bold;\n}\n.navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]:hover {\n  color: #FF8125;\n}\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n.dropdown-item[_ngcontent-%COMP%] {\n  padding: 1rem 1.5rem;\n}\n@media (max-width: 991.98px) {\n  .navbar-collapse[_ngcontent-%COMP%] {\n    background-color: white;\n    padding-top: 1rem;\n    padding-bottom: 1rem;\n    border-radius: 12px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvRTpcXFByb2plY3RzXFxwb29sc2VydmljZVxccG9vbC1zZXJ2aWNlXFxhbmd1bGFyLXNyYy9zcmNcXGFwcFxcY29tcG9uZW50c1xcbmF2YmFyXFxuYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvRTpcXFByb2plY3RzXFxwb29sc2VydmljZVxccG9vbC1zZXJ2aWNlXFxhbmd1bGFyLXNyYy9ub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcbWl4aW5zXFxfYnJlYWtwb2ludHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQ0pGO0FETUU7RUFDRSxZQUFBO0FDSko7QUNnRUk7RUY3REY7SUFHSSxXQUFBO0VDRko7QUFDRjtBREtFO0VBQ0UsWUFBQTtBQ0hKO0FDd0RJO0VGdERGO0lBR0ksV0FBQTtFQ0RKO0FBQ0Y7QURJRTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtBQ0ZKO0FESUk7RUFDRSxjQUFBO0FDRk47QURNRTtFQUNFLHFCQUFBO0FDSko7QURRQTtFQUNFLG9CQUFBO0FDTEY7QUNxQ0k7RUY3Qko7SUFFSSx1QkFBQTtJQUNBLGlCQUFBO0lBQ0Esb0JBQUE7SUFDQSxtQkFBQTtFQ0xGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Z1bmN0aW9uc1wiO1xyXG5AaW1wb3J0IFwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlc1wiO1xyXG5AaW1wb3J0IFwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGluc1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29sb3JzXCI7XHJcblxyXG4ubmF2YmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcclxuICBoZWlnaHQ6IGF1dG87XHJcblxyXG4gIC5uYXZiYXItYnJhbmQgPiBpbWcge1xyXG4gICAgd2lkdGg6IDE0MHB4O1xyXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKG1kKSB7XHJcbiAgICAgIHdpZHRoOiA5NnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLm5hdmJhci1icmFuZCA+IGltZyB7XHJcbiAgICB3aWR0aDogMTQwcHg7XHJcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24obWQpIHtcclxuICAgICAgd2lkdGg6IDk2cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubmF2LWxpbmsge1xyXG4gICAgY29sb3I6ICMxNzE1NEI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgY29sb3I6ICNGRjgxMjU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICB1bCB7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgfVxyXG59XHJcblxyXG4uZHJvcGRvd24taXRlbSB7XHJcbiAgcGFkZGluZzogMXJlbSAxLjVyZW07XHJcbn1cclxuXHJcbi5uYXZiYXItY29sbGFwc2Uge1xyXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihtZCkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbiIsIi5uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmctdG9wOiAxcmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuLm5hdmJhciAubmF2YmFyLWJyYW5kID4gaW1nIHtcbiAgd2lkdGg6IDE0MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gIC5uYXZiYXIgLm5hdmJhci1icmFuZCA+IGltZyB7XG4gICAgd2lkdGg6IDk2cHg7XG4gIH1cbn1cbi5uYXZiYXIgLm5hdmJhci1icmFuZCA+IGltZyB7XG4gIHdpZHRoOiAxNDBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAubmF2YmFyIC5uYXZiYXItYnJhbmQgPiBpbWcge1xuICAgIHdpZHRoOiA5NnB4O1xuICB9XG59XG4ubmF2YmFyIC5uYXYtbGluayB7XG4gIGNvbG9yOiAjMTcxNTRCO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5uYXZiYXIgLm5hdi1saW5rOmhvdmVyIHtcbiAgY29sb3I6ICNGRjgxMjU7XG59XG4ubmF2YmFyIHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4uZHJvcGRvd24taXRlbSB7XG4gIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgLm5hdmJhci1jb2xsYXBzZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMTJweDtcbiAgfVxufSIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/ponuda/ponuda.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/ponuda/ponuda.component.ts ***!
  \*******************************************************/
/*! exports provided: PonudaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PonudaComponent", function() { return PonudaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lazy-img-directive.directive */ "./src/app/lazy-img-directive.directive.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function () { return ["/kontakt"]; };
class PonudaComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
PonudaComponent.ɵfac = function PonudaComponent_Factory(t) { return new (t || PonudaComponent)(); };
PonudaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PonudaComponent, selectors: [["app-ponuda"]], decls: 47, vars: 2, consts: [[1, "container", "my-128"], [1, "row", "align-items-center", "justify-content-center"], [1, "col-8", "text-center"], [1, "row", "justify-content-center", "mt-5"], [1, "col-md-3", "pb-3"], [1, "card", "h-100", "text-center"], [1, "card-body"], [1, "mb-3", "pt-3"], ["src", "assets/img/icons/projektovanje.svg", "alt", "Projektovanje bazena"], [1, "card-title", "font-weight-bold"], [1, "small", "l-spacing"], ["src", "assets/img/icons/izgradnja.svg", "alt", "Izgradnja bazena"], ["src", "assets/img/icons/odrzavanje.svg", "alt", "Odrzavanje bazena"], ["src", "assets/img/icons/oprema.svg", "alt", "Oprema za bazene"], [1, "btn", "btn-secondary", "border-0", 3, "routerLink"]], template: function PonudaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Na\u0161a ponuda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "POOL SERVICE se uspe\u0161no bavi prodajom bazena i bazenske opreme po sistemu klju\u010D u ruke, odr\u017Eavanje postoje\u0107ih bazena, isporuka i monta\u017Eom sauna i ostale rekreacione opreme. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Planiranje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Vama na raspolaganju, od ideje do realizacije.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Izgradnja");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Dugogodi\u0161nje iskustvo, ugradnja samo najkvalitetnije opreme.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Odr\u017Eavanje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Jedina firma sa najve\u0107im iskustvom odr\u017Eavanja bazena.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "h5", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Oprema");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Posedujemo rezervne delove za svu na\u0161u opremu.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Kontaktiraj nas za vi\u0161e informacija ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_1__["LazyImgDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcG9udWRhL3BvbnVkYS5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PonudaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-ponuda',
                templateUrl: './ponuda.component.html',
                styleUrls: ['./ponuda.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/tri-koraka/tri-koraka.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/tri-koraka/tri-koraka.component.ts ***!
  \***************************************************************/
/*! exports provided: TriKorakaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TriKorakaComponent", function() { return TriKorakaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lazy-img-directive.directive */ "./src/app/lazy-img-directive.directive.ts");



class TriKorakaComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
TriKorakaComponent.ɵfac = function TriKorakaComponent_Factory(t) { return new (t || TriKorakaComponent)(); };
TriKorakaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TriKorakaComponent, selectors: [["app-tri-koraka"]], decls: 39, vars: 0, consts: [[1, "container-fluid", "steps", "my-128"], [1, "row"], [1, "col-12"], [1, "text-center"], [1, "row", "justify-content-center", "d-none", "d-md-flex", "my-64", "pb-64"], ["id", "steps", 1, "col-12", "offset-md-1", "col-md-3", "align-self-start"], [1, "border", "mr-auto", "mr-md-0"], ["src", "assets/img/icons/phone.svg", "alt", "Kontaktirajte nas jo\u0161 danas i zatra\u017Eite besplatnu ponudu"], [1, "text-left", "pt-5", "mt-3", "h4", "font-weight-bold", 2, "width", "220px"], ["id", "steps2", 1, "col-12", "col-md-3", "align-self-center", "dole"], [1, "border", "mx-auto", "mx-md-0"], ["src", "assets/img/icons/ponuda.svg", "alt", "Sprove\u0161\u0107emo Vas kroz ponudu u detaljima"], [1, "col-12", "col-md-3", "align-self-end", "dole-2", "mb-5", "test"], [1, "border", "ml-auto", "ml-md-0"], ["src", "assets/img/icons/dvoriste.svg", "alt", "Uzivanje"], [1, "row", "justify-content-center", "d-block", "d-md-none", "my-64", "pt-4"], [1, "col-12", "col-md-3", "mb-5"], [1, "border", "mx-auto"], ["src", "assets/img/icons/phone.svg", "alt", "Ugovaranje"], [1, "text-center", "pt-4", "px-5", "h5", "font-weight-bold"], ["src", "assets/img/icons/ponuda.svg", "alt", "Izgradnja"]], template: function TriKorakaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "3 koraka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " do bazena iz snova");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Kontaktirajte nas i zatra\u017Eite ponudu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Izaberite model bazena koji ste oduvek \u017Eeleli");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Opustite se dok Pool Service uradi sve ostalo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Kontaktirajte nas jo\u0161 danas i zatra\u017Eite besplatnu ponudu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Sprove\u0161\u0107emo Vas kroz ponudu u detaljima");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Prepustite se i gledajte transformaciju Va\u0161eg dvori\u0161ta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_1__["LazyImgDirective"]], styles: [".steps[_ngcontent-%COMP%]   .background_working[_ngcontent-%COMP%] {\n  background-color: #E9F7FE;\n  height: 800px;\n}\n.steps[_ngcontent-%COMP%]   .background_working[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 48px;\n  line-height: 48px;\n  text-align: center;\n  letter-spacing: -1px;\n}\n.steps[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%] {\n  background: #2E79CA;\n  box-shadow: 0px 32px 54px rgba(37, 138, 255, 0.224553);\n  border-radius: 10px;\n  width: 128px;\n  height: 128px;\n}\n@media (max-width: 991.98px) {\n  .steps[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%] {\n    width: 96px;\n    height: 96px;\n  }\n}\n.steps[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 32px;\n}\n@media (max-width: 991.98px) {\n  .steps[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-top: 24px;\n    width: 48px;\n    height: auto;\n  }\n}\n@media (max-width: 767.98px) {\n  .steps[_ngcontent-%COMP%]   #steps[_ngcontent-%COMP%] {\n    margin-bottom: 5rem;\n  }\n}\n.steps[_ngcontent-%COMP%]   #steps[_ngcontent-%COMP%]:nth-last-child(-n+3):after {\n  content: url('strelica-gore.png');\n  display: block;\n  position: absolute;\n  left: 12vw;\n  top: 6vh;\n  z-index: -1;\n}\n@media (max-width: 767.98px) {\n  .steps[_ngcontent-%COMP%]   #steps[_ngcontent-%COMP%]:nth-last-child(-n+3):after {\n    display: none;\n  }\n}\n.steps[_ngcontent-%COMP%]   #steps2[_ngcontent-%COMP%] {\n  margin-bottom: 5rem;\n  margin-left: 2rem;\n}\n@media (max-width: 767.98px) {\n  .steps[_ngcontent-%COMP%]   #steps2[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n.steps[_ngcontent-%COMP%]   #steps2[_ngcontent-%COMP%]:nth-last-child(-n+3):after {\n  content: url('strelica-dole.png');\n  display: block;\n  position: absolute;\n  left: 12vw;\n  top: 4vh;\n  z-index: -1;\n}\n@media (max-width: 767.98px) {\n  .steps[_ngcontent-%COMP%]   #steps2[_ngcontent-%COMP%]:nth-last-child(-n+3):after {\n    display: none;\n  }\n}\n.steps[_ngcontent-%COMP%]   .dole-2[_ngcontent-%COMP%] {\n  margin-top: 16rem;\n  margin-left: 2rem;\n}\n@media (max-width: 767.98px) {\n  .steps[_ngcontent-%COMP%]   .dole-2[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90cmkta29yYWthL0U6XFxQcm9qZWN0c1xccG9vbHNlcnZpY2VcXHBvb2wtc2VydmljZVxcYW5ndWxhci1zcmMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHRyaS1rb3Jha2FcXHRyaS1rb3Jha2EuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdHJpLWtvcmFrYS90cmkta29yYWthLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RyaS1rb3Jha2EvRTpcXFByb2plY3RzXFxwb29sc2VydmljZVxccG9vbC1zZXJ2aWNlXFxhbmd1bGFyLXNyYy9ub2RlX21vZHVsZXNcXGJvb3RzdHJhcFxcc2Nzc1xcbWl4aW5zXFxfYnJlYWtwb2ludHMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNRTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBQ0xKO0FET0k7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0FDTE47QURVRTtFQUNFLG1CQUFBO0VBQ0Esc0RBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FDUko7QUN5REk7RUZ0REY7SUFRSSxXQUFBO0lBQ0EsWUFBQTtFQ1BKO0FBQ0Y7QURTSTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUNQTjtBQzZDSTtFRjFDQTtJQU9JLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLFlBQUE7RUNOTjtBQUNGO0FDc0NJO0VGM0JGO0lBR0ksbUJBQUE7RUNWSjtBQUNGO0FEWUk7RUFDRSxpQ0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtBQ1ZOO0FDeUJJO0VGckJBO0lBU0ksYUFBQTtFQ1ROO0FBQ0Y7QURjRTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUNaSjtBQ2dCSTtFRk5GO0lBS0ksY0FBQTtFQ1hKO0FBQ0Y7QURhSTtFQUNFLGlDQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDWE47QUNHSTtFRkVBO0lBU0ksYUFBQTtFQ1ZOO0FBQ0Y7QURlRTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QUNiSjtBQ05JO0VGaUJGO0lBS0ksU0FBQTtFQ1pKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RyaS1rb3Jha2EvdHJpLWtvcmFrYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zXCI7XHJcbkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Nzcy9jb2xvcnNcIjtcclxuXHJcbi5zdGVwcyB7XHJcbiAgLmJhY2tncm91bmRfd29ya2luZyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlGN0ZFO1xyXG4gICAgaGVpZ2h0OiA4MDBweDtcclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDQ4cHg7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLmJvcmRlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMkU3OUNBO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDMycHggNTRweCByZ2JhKDM3LCAxMzgsIDI1NSwgMC4yMjQ1NTMpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHdpZHRoOiAxMjhweDtcclxuICAgIGhlaWdodDogMTI4cHg7XHJcblxyXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKG1kKSB7XHJcbiAgICAgIHdpZHRoOiA5NnB4O1xyXG4gICAgICBoZWlnaHQ6IDk2cHg7XHJcbiAgICB9XHJcblxyXG4gICAgaW1nIHtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgICAgIG1hcmdpbi10b3A6IDMycHg7XHJcblxyXG4gICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24obWQpIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xyXG4gICAgICAgIHdpZHRoOiA0OHB4O1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gICNzdGVwcyB7XHJcblxyXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHNtKSB7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgJjpudGgtbGFzdC1jaGlsZCgtbiszKTphZnRlciB7XHJcbiAgICAgIGNvbnRlbnQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL3BvbHVtb250YXpuaS1iYXplbmkvc3RyZWxpY2EtZ29yZS5wbmcpO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICBsZWZ0OiAxMnZ3O1xyXG4gICAgICB0b3A6IDZ2aDtcclxuICAgICAgei1pbmRleDogLTE7XHJcblxyXG4gICAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oc20pIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgI3N0ZXBzMiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcblxyXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHNtKSB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAwO1xyXG4gICAgfVxyXG5cclxuICAgICY6bnRoLWxhc3QtY2hpbGQoLW4rMyk6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9wb2x1bW9udGF6bmktYmF6ZW5pL3N0cmVsaWNhLWRvbGUucG5nKTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMTJ2dztcclxuICAgICAgdG9wOiA0dmg7XHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG5cclxuICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHNtKSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC5kb2xlLTIge1xyXG4gICAgbWFyZ2luLXRvcDogMTZyZW07XHJcbiAgICBtYXJnaW4tbGVmdDogMnJlbTtcclxuXHJcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oc20pIHtcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCIuc3RlcHMgLmJhY2tncm91bmRfd29ya2luZyB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFOUY3RkU7XG4gIGhlaWdodDogODAwcHg7XG59XG4uc3RlcHMgLmJhY2tncm91bmRfd29ya2luZyBoMyB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG59XG4uc3RlcHMgLmJvcmRlciB7XG4gIGJhY2tncm91bmQ6ICMyRTc5Q0E7XG4gIGJveC1zaGFkb3c6IDBweCAzMnB4IDU0cHggcmdiYSgzNywgMTM4LCAyNTUsIDAuMjI0NTUzKTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgd2lkdGg6IDEyOHB4O1xuICBoZWlnaHQ6IDEyOHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gIC5zdGVwcyAuYm9yZGVyIHtcbiAgICB3aWR0aDogOTZweDtcbiAgICBoZWlnaHQ6IDk2cHg7XG4gIH1cbn1cbi5zdGVwcyAuYm9yZGVyIGltZyB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tdG9wOiAzMnB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gIC5zdGVwcyAuYm9yZGVyIGltZyB7XG4gICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICB3aWR0aDogNDhweDtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICAuc3RlcHMgI3N0ZXBzIHtcbiAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xuICB9XG59XG4uc3RlcHMgI3N0ZXBzOm50aC1sYXN0LWNoaWxkKC1uKzMpOmFmdGVyIHtcbiAgY29udGVudDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvcG9sdW1vbnRhem5pLWJhemVuaS9zdHJlbGljYS1nb3JlLnBuZyk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEydnc7XG4gIHRvcDogNnZoO1xuICB6LWluZGV4OiAtMTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICAuc3RlcHMgI3N0ZXBzOm50aC1sYXN0LWNoaWxkKC1uKzMpOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uc3RlcHMgI3N0ZXBzMiB7XG4gIG1hcmdpbi1ib3R0b206IDVyZW07XG4gIG1hcmdpbi1sZWZ0OiAycmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gIC5zdGVwcyAjc3RlcHMyIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgfVxufVxuLnN0ZXBzICNzdGVwczI6bnRoLWxhc3QtY2hpbGQoLW4rMyk6YWZ0ZXIge1xuICBjb250ZW50OiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9wb2x1bW9udGF6bmktYmF6ZW5pL3N0cmVsaWNhLWRvbGUucG5nKTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMTJ2dztcbiAgdG9wOiA0dmg7XG4gIHotaW5kZXg6IC0xO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gIC5zdGVwcyAjc3RlcHMyOm50aC1sYXN0LWNoaWxkKC1uKzMpOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4uc3RlcHMgLmRvbGUtMiB7XG4gIG1hcmdpbi10b3A6IDE2cmVtO1xuICBtYXJnaW4tbGVmdDogMnJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICAuc3RlcHMgLmRvbGUtMiB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59IiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TriKorakaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tri-koraka',
                templateUrl: './tri-koraka.component.html',
                styleUrls: ['./tri-koraka.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/constants/format-title.pipe.ts":
/*!************************************************!*\
  !*** ./src/app/constants/format-title.pipe.ts ***!
  \************************************************/
/*! exports provided: FormatTitlePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormatTitlePipe", function() { return FormatTitlePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FormatTitlePipe {
    transform(title) {
        const result = title.replace(/([A-Z])/g, ' $1');
        const finalResult = result.charAt(0)
            .toUpperCase() + result.slice(1);
        return finalResult;
    }
}
FormatTitlePipe.ɵfac = function FormatTitlePipe_Factory(t) { return new (t || FormatTitlePipe)(); };
FormatTitlePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "formatTitle", type: FormatTitlePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormatTitlePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'formatTitle'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/lazy-img-directive.directive.ts":
/*!*************************************************!*\
  !*** ./src/app/lazy-img-directive.directive.ts ***!
  \*************************************************/
/*! exports provided: LazyImgDirective, LazyImgDirectiveDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyImgDirective", function() { return LazyImgDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyImgDirectiveDirective", function() { return LazyImgDirectiveDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LazyImgDirective {
    constructor({ nativeElement }) {
        const supports = 'loading' in HTMLImageElement.prototype;
        if (supports) {
            nativeElement.setAttribute('loading', 'lazy');
        }
        else {
            // fallback to IntersectionObserver
        }
    }
}
LazyImgDirective.ɵfac = function LazyImgDirective_Factory(t) { return new (t || LazyImgDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
LazyImgDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: LazyImgDirective, selectors: [["img"]] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LazyImgDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{ selector: 'img' }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, null); })();
class LazyImgDirectiveDirective {
}


/***/ }),

/***/ "./src/app/mail.service.ts":
/*!*********************************!*\
  !*** ./src/app/mail.service.ts ***!
  \*********************************/
/*! exports provided: MailService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MailService", function() { return MailService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class MailService {
    constructor(https) {
        this.https = https;
    }
    sendEmail(data) {
        return this.https.post('https://poolservice.rs/contact', data);
    }
}
MailService.ɵfac = function MailService_Factory(t) { return new (t || MailService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
MailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MailService, factory: MailService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MailService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lazy-img-directive.directive */ "./src/app/lazy-img-directive.directive.ts");
/* harmony import */ var _components_ponuda_ponuda_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ponuda/ponuda.component */ "./src/app/components/ponuda/ponuda.component.ts");
/* harmony import */ var _components_konsultacije_konsultacije_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/konsultacije/konsultacije.component */ "./src/app/components/konsultacije/konsultacije.component.ts");







class AboutComponent {
    constructor(metaTagService, title) {
        this.metaTagService = metaTagService;
        this.title = title;
    }
    ngOnInit() {
        this.metaTagService.addTags([
            { name: 'keywords', content: 'oslovna politika naše kompanije je potpuna podrška našim klijentima u svim njihovim zahtevima počevši od: izgradnje bazena, održavanja, servisa, popravki, savetovanja i ostalog' },
            { name: 'robots', content: 'index, follow' },
            { name: 'author', content: 'Pool Service' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'date', content: '2021-02-01', scheme: 'YYYY-MM-DD' },
            { charset: 'UTF-8' }
        ]);
        this.title.setTitle("O nama");
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 72, vars: 0, consts: [[1, "container", "pt-128", "pb-64"], [1, "row", "justify-content-md-center"], [1, "col-12", "col-md-9", "text-center"], [1, "text-primary", "text-uppercase"], [1, "col-12", "col-md-8"], [1, "text-center"], [1, "bg-light", "mt-128"], [1, "container-fluid", "content"], [1, "mx-lg-5", "mx-sm-0"], [1, "container"], [1, "row", "align-items-center", "py-5"], ["id", "slika-up", 1, "col-12", "col-md-6"], ["src", "assets/img/o-nama/nasledje.jpg", "alt", "card-slika", 1, "img-fluid", "mb-4", "mb-sm-0"], [1, "col-12", "col-md-6"], [1, "test"], [1, "mb-4"], [1, "row", "list-item"], [1, "col-6", "mt-4", "d-block"], [1, "d-flex"], [1, "fas", "fa-check"], [1, "col-6", "mt-4"], [1, "mx-lg-5", "mx-md-0"], [1, "col-12", "col-md-6", "order-2", "order-md-1"], ["id", "slika-up", 1, "col-12", "col-md-6", "order-1", "order-md-2"], ["src", "assets/img/o-nama/buducnost.jpg", "alt", "card-slika", 1, "img-fluid", "mb-4", "mb-sm-0"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "O nama");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Porodi\u010Dna firma koja uspe\u0161no posluje ve\u0107 preko 25 godina");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Poslovna politika na\u0161e kompanije je potpuna podr\u0161ka na\u0161im klijentima u svim njihovim zahtevima po\u010Dev\u0161i od: izgradnje bazena, odr\u017Eavanja, servisa, popravki, savetovanja i ostalog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h2", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Nasle\u0111e");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "1990. godine hidro in\u017Eenjer Marko Korolija i njegova supruga Zita Korolija Hubsch osnivaju firmu KOROLEX koja se bavila razinim gra\u0111evinskim projektima");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Integritet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Iskustvo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Inovacije");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Posve\u0107enost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Kvalitet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Zadovoljni klijenti");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "section", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h2", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Budu\u0107nost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Vremenom se razvila ljubav prema bazenima, koje je ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " 1996. godine dovela do formiranja firme POOL SERVICE koja se bavi bazenima i bazenskom tehnikom.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "POOL SERVICE se stalno razvija i usavr\u0161ava. Pod ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " vo\u0111stvom dipl. ing. Filipa Korolije i mlade ekipe kompanija te\u017Ei da nastavi svoju dugogodi\u0161nju viziju i postojanje.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "app-ponuda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "app-konsultacije");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_3__["LazyImgDirective"], _components_ponuda_ponuda_component__WEBPACK_IMPORTED_MODULE_4__["PonudaComponent"], _components_konsultacije_konsultacije_component__WEBPACK_IMPORTED_MODULE_5__["KonsultacijeComponent"]], styles: [".padding-top-card_two[_ngcontent-%COMP%] {\n  padding-bottom: 172px;\n}\n.padding-top-card_two[_ngcontent-%COMP%]   .background_card[_ngcontent-%COMP%] {\n  background-color: #E9F7FE;\n  height: 35rem;\n}\n.padding-top-card_two[_ngcontent-%COMP%]   .tex-right[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 48px;\n  line-height: 60px;\n  padding-bottom: 80px;\n}\n.padding-top-card_two[_ngcontent-%COMP%]   .tex-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-size: 1.125rem;\n  line-height: 2rem;\n}\n.padding-top-card_one[_ngcontent-%COMP%] {\n  padding-bottom: 208px;\n}\n.padding-top-card_one[_ngcontent-%COMP%]   .background_card[_ngcontent-%COMP%] {\n  background-color: #E9F7FE;\n  height: 35rem;\n}\n.padding-top-card_one[_ngcontent-%COMP%]   .tex-right[_ngcontent-%COMP%]   .test[_ngcontent-%COMP%] {\n  margin-right: 16.666666%;\n}\n.padding-top-card_one[_ngcontent-%COMP%]   .tex-right[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 48px;\n  line-height: 60px;\n  padding-bottom: 80px;\n}\n.padding-top-card_one[_ngcontent-%COMP%]   .tex-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-size: 1.125rem;\n  line-height: 2rem;\n}\n.padding-top-card_one[_ngcontent-%COMP%]   .z-index_postion[_ngcontent-%COMP%] {\n  margin-top: 104px;\n}\n.padding-top__cards[_ngcontent-%COMP%] {\n  padding-bottom: 400px;\n}\n.padding-top__cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);\n  border-radius: 8px;\n  width: 16.56rem;\n  height: 15rem;\n}\n.padding-top__cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n.padding-top__cards[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.5rem;\n}\n.consultation[_ngcontent-%COMP%] {\n  position: relative;\n  text-align: left;\n  color: white;\n}\n.consultation[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.consultation[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-160%, -50%);\n}\n.consultation[_ngcontent-%COMP%]   .centered[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: bold;\n  font-size: 48px;\n  line-height: 58px;\n}\n.consultation[_ngcontent-%COMP%]   .centered-right[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 50%;\n  transform: translate(720px, -50%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWJvdXQvRTpcXFByb2plY3RzXFxwb29sc2VydmljZVxccG9vbC1zZXJ2aWNlXFxhbmd1bGFyLXNyYy9zcmNcXGFwcFxccGFnZXNcXGFib3V0XFxhYm91dC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxxQkFBQTtBQ0ZGO0FES0U7RUFDRSx5QkFBQTtFQUNBLGFBQUE7QUNISjtBRFFJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ05OO0FEVUk7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNSTjtBRGNBO0VBQ0UscUJBQUE7QUNYRjtBRGNFO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0FDWko7QURpQkk7RUFDRSx3QkFBQTtBQ2ZOO0FEa0JJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxvQkFBQTtBQ2hCTjtBRG1CSTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ2pCTjtBRHFCRTtFQUNFLGlCQUFBO0FDbkJKO0FEdUJBO0VBRUUscUJBQUE7QUNyQkY7QUR1QkU7RUFDRSwrR0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUNyQko7QUR3QkU7RUFDRSxxQkFBQTtBQ3RCSjtBRHlCRTtFQUNFLG1CQUFBO0VBRUEsbUJBQUE7QUN4Qko7QUQ4QkE7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQzNCRjtBRDZCRTtFQUNFLFdBQUE7QUMzQko7QUQrQkU7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsaUNBQUE7QUM3Qko7QUQrQkk7RUFDRSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUM3Qk47QURpQ0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsaUNBQUE7QUMvQkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Nzcy9jb2xvcnNcIjtcclxuXHJcblxyXG4ucGFkZGluZy10b3AtY2FyZF90d28ge1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNzJweDtcclxuXHJcblxyXG4gIC5iYWNrZ3JvdW5kX2NhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U5RjdGRTtcclxuICAgIGhlaWdodDogMzVyZW07XHJcbiAgfVxyXG5cclxuXHJcbiAgLnRleC1yaWdodCB7XHJcbiAgICBoMyB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnBhZGRpbmctdG9wLWNhcmRfb25lIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMjA4cHg7XHJcblxyXG5cclxuICAuYmFja2dyb3VuZF9jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFOUY3RkU7XHJcbiAgICBoZWlnaHQ6IDM1cmVtO1xyXG4gIH1cclxuXHJcbiAgLnRleC1yaWdodCB7XHJcblxyXG4gICAgLnRlc3Qge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE2LjY2NjY2NiU7XHJcbiAgICB9XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuei1pbmRleF9wb3N0aW9uIHtcclxuICAgIG1hcmdpbi10b3A6IDEwNHB4O1xyXG4gIH1cclxufVxyXG5cclxuLnBhZGRpbmctdG9wX19jYXJkcyB7XHJcblxyXG4gIHBhZGRpbmctYm90dG9tOiA0MDBweDtcclxuXHJcbiAgLmNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDE2cHggMjRweCByZ2JhKDAsIDAsIDAsIDAuMDYpLCAwcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAwcHggMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gICAgd2lkdGg6IDE2LjU2cmVtO1xyXG4gICAgaGVpZ2h0OiAxNXJlbTtcclxuICB9XHJcblxyXG4gIC5jYXJkOmhvdmVyIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4xKTtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcclxuXHJcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xyXG5cclxuICB9XHJcbn1cclxuXHJcblxyXG4uY29uc3VsdGF0aW9uIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBjb2xvcjogd2hpdGU7XHJcblxyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG5cclxuICAuY2VudGVyZWQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTYwJSwgLTUwJSk7XHJcblxyXG4gICAgaDQge1xyXG4gICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDU4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuY2VudGVyZWQtcmlnaHQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICByaWdodDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNzIwcHgsIC01MCUpO1xyXG5cclxuXHJcbiAgfVxyXG59XHJcbiIsIi5wYWRkaW5nLXRvcC1jYXJkX3R3byB7XG4gIHBhZGRpbmctYm90dG9tOiAxNzJweDtcbn1cbi5wYWRkaW5nLXRvcC1jYXJkX3R3byAuYmFja2dyb3VuZF9jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U5RjdGRTtcbiAgaGVpZ2h0OiAzNXJlbTtcbn1cbi5wYWRkaW5nLXRvcC1jYXJkX3R3byAudGV4LXJpZ2h0IGgzIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XG59XG4ucGFkZGluZy10b3AtY2FyZF90d28gLnRleC1yaWdodCBwIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG59XG5cbi5wYWRkaW5nLXRvcC1jYXJkX29uZSB7XG4gIHBhZGRpbmctYm90dG9tOiAyMDhweDtcbn1cbi5wYWRkaW5nLXRvcC1jYXJkX29uZSAuYmFja2dyb3VuZF9jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U5RjdGRTtcbiAgaGVpZ2h0OiAzNXJlbTtcbn1cbi5wYWRkaW5nLXRvcC1jYXJkX29uZSAudGV4LXJpZ2h0IC50ZXN0IHtcbiAgbWFyZ2luLXJpZ2h0OiAxNi42NjY2NjYlO1xufVxuLnBhZGRpbmctdG9wLWNhcmRfb25lIC50ZXgtcmlnaHQgaDMge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xuICBwYWRkaW5nLWJvdHRvbTogODBweDtcbn1cbi5wYWRkaW5nLXRvcC1jYXJkX29uZSAudGV4LXJpZ2h0IHAge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBsaW5lLWhlaWdodDogMnJlbTtcbn1cbi5wYWRkaW5nLXRvcC1jYXJkX29uZSAuei1pbmRleF9wb3N0aW9uIHtcbiAgbWFyZ2luLXRvcDogMTA0cHg7XG59XG5cbi5wYWRkaW5nLXRvcF9fY2FyZHMge1xuICBwYWRkaW5nLWJvdHRvbTogNDAwcHg7XG59XG4ucGFkZGluZy10b3BfX2NhcmRzIC5jYXJkIHtcbiAgYm94LXNoYWRvdzogMHB4IDE2cHggMjRweCByZ2JhKDAsIDAsIDAsIDAuMDYpLCAwcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAwcHggMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiAxNi41NnJlbTtcbiAgaGVpZ2h0OiAxNXJlbTtcbn1cbi5wYWRkaW5nLXRvcF9fY2FyZHMgLmNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSk7XG59XG4ucGFkZGluZy10b3BfX2NhcmRzIHAge1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBsaW5lLWhlaWdodDogMS41cmVtO1xufVxuXG4uY29uc3VsdGF0aW9uIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBjb2xvcjogd2hpdGU7XG59XG4uY29uc3VsdGF0aW9uIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNvbnN1bHRhdGlvbiAuY2VudGVyZWQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xNjAlLCAtNTAlKTtcbn1cbi5jb25zdWx0YXRpb24gLmNlbnRlcmVkIGg0IHtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGxpbmUtaGVpZ2h0OiA1OHB4O1xufVxuLmNvbnN1bHRhdGlvbiAuY2VudGVyZWQtcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICByaWdodDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg3MjBweCwgLTUwJSk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/bazeni-folija/bazeni-folija.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/pages/bazeni-folija/bazeni-folija.component.ts ***!
  \****************************************************************/
/*! exports provided: BazeniFolijaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BazeniFolijaComponent", function() { return BazeniFolijaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lazy-img-directive.directive */ "./src/app/lazy-img-directive.directive.ts");
/* harmony import */ var _components_konsultacije_konsultacije_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/konsultacije/konsultacije.component */ "./src/app/components/konsultacije/konsultacije.component.ts");






const _c0 = function () { return ["/kontakt"]; };
class BazeniFolijaComponent {
    constructor(metaTagService, title) {
        this.metaTagService = metaTagService;
        this.title = title;
        this.type = 'component';
        this.disabled = false;
        this.config = {
            a11y: true,
            direction: 'horizontal',
            spaceBetween: 24,
            keyboard: true,
            mousewheel: false,
            scrollbar: false,
            navigation: true,
            pagination: false,
            centeredSlides: true,
            loop: true,
            breakpoints: {
                576: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 2,
                }
            }
        };
        this.scrollbar = {
            el: '.swiper-scrollbar',
            hide: false,
            draggable: true
        };
        this.pagination = {
            el: '.swiper-pagination',
            clickable: true,
            hideOnClick: false
        };
    }
    ngOnInit() {
        this.metaTagService.addTags([
            { name: 'keywords', content: 'Vodonepropusna ojačana membrana specijalno dizajnirana za unutrašnje oblaganje bazena, debljine 1,5mm.' },
            { name: 'robots', content: 'index, follow' },
            { name: 'author', content: 'Pool Service' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'date', content: '2021-02-01', scheme: 'YYYY-MM-DD' },
            { charset: 'UTF-8' },
            { property: 'og:image', content: 'assets/img/bazeni-sa-folijom.jpg' },
            { property: 'twitter:image:src', content: 'assets/img/bazeni-sa-folijom.jpg' }
        ]);
        this.title.setTitle('Bazeni sa folijom 💦 Pool Service');
    }
}
BazeniFolijaComponent.ɵfac = function BazeniFolijaComponent_Factory(t) { return new (t || BazeniFolijaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
BazeniFolijaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BazeniFolijaComponent, selectors: [["app-bazeni-folija"]], decls: 144, vars: 10, consts: [["id", "hero", 1, "folija-cover-background"], [1, "container", "h-100"], [1, "row", "h-100", "align-items-center"], [1, "col-12", "text-center"], [1, "display-2", "font-weight-bold"], [1, "mb-5"], ["role", "button", 1, "btn", "btn-secondary", 3, "routerLink"], [1, "bg-light", "py-64"], ["id", "folija-content", 1, "container"], [1, "row"], [1, "col-12", "col-md-4", "mb-5", "mb-md-0", "text-center"], ["src", "assets/img/polumontazni-bazeni/future-01.svg", "alt", "slika2", "width", "64", 1, "img-fluid", "mb-4"], [1, "text-black-50"], ["src", "assets/img/polumontazni-bazeni/future-02.svg", "alt", "knjiga", "width", "64", 1, "img-fluid", "mb-4"], ["src", "assets/img/polumontazni-bazeni/future-03.svg", "alt", "slika2", "width", "64", 1, "img-fluid", "mb-4"], [1, "container", "my-128"], [1, "row", "align-items-center"], [1, "col-12", "col-md-5"], [1, "mb-3"], [1, "btn", "btn-secondary", 3, "routerLink"], [1, "col-12", "col-md-6", "offset-md-1"], ["src", "assets/img/bazeni-sa-folijom/renolit-bazen.png", "alt", "Renolit bazen sa folijom", 1, "img-fluid"], [1, "container-fluid", "steps", "my-128"], [1, "col-12"], [1, "text-center"], [1, "row", "justify-content-center", "d-none", "d-md-flex", "my-64", "pb-64"], ["id", "steps", 1, "col-12", "offset-md-1", "col-md-3", "align-self-start"], [1, "border", "mr-auto", "mr-md-0"], ["src", "assets/img/icons/phone.svg", "alt", "Kontaktirajte nas jo\u0161 danas i zatra\u017Eite besplatnu ponudu"], [1, "text-left", "pt-5", "mt-3", "h4", "font-weight-bold", 2, "width", "220px"], ["id", "steps2", 1, "col-12", "col-md-3", "align-self-center", "dole"], [1, "border", "mx-auto", "mx-md-0"], ["src", "assets/img/icons/ponuda.svg", "alt", "Sprove\u0161\u0107emo Vas kroz ponudu u detaljima"], [1, "col-12", "col-md-3", "align-self-end", "dole-2", "mb-5", "test"], [1, "border", "ml-auto", "ml-md-0"], ["src", "assets/img/icons/dvoriste.svg", "alt", "Uzivanje"], [1, "row", "justify-content-center", "d-block", "d-md-none", "my-64", "pt-4"], [1, "col-12", "col-md-3", "mb-5"], [1, "border", "mx-auto"], ["src", "assets/img/icons/phone.svg", "alt", "Ugovaranje"], [1, "text-center", "pt-4", "px-5", "h5", "font-weight-bold"], ["src", "assets/img/icons/ponuda.svg", "alt", "Izgradnja"], [1, "container", "pb-128"], [1, "col-12", "col-md-6"], [1, "text-primary", "text-uppercase"], [1, "col-12", "col-md-6", "pt-line"], [1, "bg-light", "mt-128"], [1, "container-fluid", "content"], [1, "mx-lg-5", "mx-sm-0"], [1, "container"], [1, "row", "align-items-center", "py-5"], ["id", "slika-up", 1, "col-12", "col-md-6"], ["src", "assets/img/bazeni-sa-folijom/renolit-alkorplan-origin-folija.jpg", "alt", "card-slika", 1, "img-fluid", "mb-4", "mb-sm-0"], [1, "test"], [1, "mb-4"], [1, "btn", "btn-secondary", "border-0", "mt-3", 3, "routerLink"], [1, "mt-128"], [1, "mx-lg-5", "mx-md-0"], [1, "col-12", "col-md-6", "order-2", "order-md-1"], [1, "col-12", "col-md-6", "order-1", "order-md-2"], ["src", "assets/img/bazeni-sa-folijom/renolit-alkorplan-prestige-folija.jpg", "alt", "card-slika", 1, "img-fluid", "mb-4", "mb-sm-0", "float-md-right"], ["src", "assets/img/bazeni-sa-folijom/renolit-alkorplan-relax-folija.jpg", "alt", "card-slika", 1, "img-fluid", "mb-4", "mb-sm-0"]], template: function BazeniFolijaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Bazeni sa folijom po \u017Eelji");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Za bilo koji oblik i dimenzije mogu\u0107e je oblaganje bazena folijom, postupkom varenja folije na licu mesta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Zatra\u017Eite ponudu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Raznovrsnoste");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Veliki izbor dimenzija i dezena");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Raznovrsnost dizajna");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Otpornost na razvoj bakterija i algi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Dugotrajnost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Fleksibilan, izdr\u017Eljiv i vododbojan");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Renolit Alkorplan PVC folija");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Vodonepropusna oja\u010Dana membrana specijalno dizajnirana za unutra\u0161nje oblaganje bazena, debljine 1,5mm. Fleksibilna je tako da prijanja uz povr\u0161ine gde se postavlja metodom zavarivanja na licu mesta toplim vazduhom. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Kontaktirajte nas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h2", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "3 koraka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " do bazena iz snova");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Kontaktirajte nas i zatra\u017Eite ponudu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Izaberite model bazena koji ste oduvek \u017Eeleli");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Opustite se dok Pool Service uradi sve ostalo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Kontaktirajte nas jo\u0161 danas i zatra\u017Eite besplatnu ponudu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "Sprove\u0161\u0107emo Vas kroz ponudu u detaljima");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Prepustite se i gledajte transformaciju Va\u0161eg dvori\u0161ta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Bazeni sa folijom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Visoko kvalitetni bazeni ra\u0111eni po EU standardima");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Alkorplan folija je kvalitetna i ispunjava Evropske norme EN 15836-2 i KSW i poseduje sve potrebne karakteristike kao \u0161to su \u2013 glatko\u0107a, postojanost boja, hemijska neutralnost u dodiru sa vodom, ima za\u0161titni sloj na UV zra\u010Denje i habanje.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Primena Renolit Alkorplan folije je univerzalna, mo\u017Ee se izvoditi na raznim podlogama, prilagodljiva je bilo kom obliku kao \u0161to su kru\u017Eni delovi, rimske stepenice i sli\u010Dno.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "section", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "h3", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "Renolit Alkorplan Origin folija");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "Ovaj moderan i ve\u010Dan dizajn koji podse\u0107a na granit, kreira savr\u0161ene refleksije kristalno \u010Distih voda.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "Zatra\u017Eite ponudu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "section", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "h3", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](115, "Renolit Alkorplan Prestige folija");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "Luksuzni, zavodljivi, jedinstveni bazeni u duboko plavim tonovima ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, " koji c\u0301e vas o\u010Darati na prvi pogled i pretvoriti va\u0161 dom u elegantnu palatu. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Neka Pool Service uradi sav posao za vas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Zatra\u017Eite ponudu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](125, "img", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "section", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](131, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "img", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h3", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "Renolit Alkorplan Relax folija");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "Senzualni, egzoti\u010Dni bazeni sa bojom zlatnog peska i sjajnim ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " tirkiznim odrazima koji c\u0301e Vas i Va\u0161e goste odvesti do udaljenih pla\u017Ea Kariba.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "button", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "Zatra\u017Eite ponudu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "app-konsultacije");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_3__["LazyImgDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _components_konsultacije_konsultacije_component__WEBPACK_IMPORTED_MODULE_4__["KonsultacijeComponent"]], styles: ["#hero[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  height: 55vw;\n}\n@media (min-width: 992px) and (max-width: 1199.98px) {\n  #hero[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    height: 67vw;\n  }\n}\n@media (max-width: 991.98px) {\n  #hero[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    height: 80vw;\n  }\n}\n.folija-cover-background[_ngcontent-%COMP%] {\n  height: 40vw;\n  max-height: 100%;\n  min-width: 300px;\n  background-image: url(\"https://poolservice.rs/assets/img/bazeni-sa-folijom/naslovna.jpg\");\n  background-position: center;\n  background-size: cover;\n}\n@media (max-width: 767.98px) {\n  .folija-cover-background[_ngcontent-%COMP%] {\n    height: 90vh !important;\n    background-position: 70% top;\n  }\n}\n@media (max-width: 991.98px) {\n  .folija-cover-background[_ngcontent-%COMP%] {\n    height: 80vh;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199.98px) {\n  .folija-cover-background[_ngcontent-%COMP%] {\n    height: 67vh;\n  }\n}\n@media (max-width: 991.98px) {\n  .folija-cover-background[_ngcontent-%COMP%]   .display-4[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n}\n@media (max-width: 767.98px) {\n  .folija-cover-background[_ngcontent-%COMP%]   .display-4[_ngcontent-%COMP%] {\n    font-size: 2rem;\n    line-height: 1.3;\n  }\n}\n.folija-cover-background[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.folija-cover-background[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n}\n#folija-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 30px;\n  letter-spacing: -0.750316px;\n}\n.folija-cover[_ngcontent-%COMP%] {\n  padding-top: 3.75rem;\n  padding-bottom: 3.75rem;\n}\n.cards__background[_ngcontent-%COMP%] {\n  background-color: #E9F7FE;\n}\n.cards__background[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n}\n.cards__background[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 30px;\n  letter-spacing: -0.750316px;\n}\n.padding-bottom__gallery[_ngcontent-%COMP%] {\n  padding-bottom: 128px;\n}\n.padding-bottom__gallery[_ngcontent-%COMP%]   .position__center[_ngcontent-%COMP%] {\n  margin-top: 88px;\n}\n.padding-top-card_one[_ngcontent-%COMP%] {\n  padding-bottom: 172px;\n}\n.padding-top-card_one[_ngcontent-%COMP%]   .background_card[_ngcontent-%COMP%] {\n  background-color: #E9F7FE;\n  height: 576px;\n}\n.padding-top-card_one[_ngcontent-%COMP%]   .tex-right[_ngcontent-%COMP%]   .test[_ngcontent-%COMP%] {\n  margin-right: 16.666666%;\n}\n.padding-top-card_one[_ngcontent-%COMP%]   .tex-right[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 48px;\n  line-height: 60px;\n}\n.padding-top-card_one[_ngcontent-%COMP%]   .tex-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-size: 18px;\n  line-height: 32px;\n}\n.padding-top-card_one[_ngcontent-%COMP%]   .z-index_postion[_ngcontent-%COMP%] {\n  margin-top: 104px;\n}\n.padding-top-card_one[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%] {\n  background: #EBF4FA;\n  border-color: #EBF4FA;\n}\n.padding-top-card_one[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 36px;\n}\n.padding-top-card_one[_ngcontent-%COMP%]   .bottom-right[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 96px;\n  right: 64px;\n}\n.padding-top-card_two[_ngcontent-%COMP%] {\n  padding-bottom: 172px;\n}\n.padding-top-card_two[_ngcontent-%COMP%]   .background_card[_ngcontent-%COMP%] {\n  background-color: #E9F7FE;\n  height: 576px;\n}\n.padding-top-card_two[_ngcontent-%COMP%]   .tex-left[_ngcontent-%COMP%]   .test[_ngcontent-%COMP%] {\n  margin-left: 16.666666%;\n}\n.padding-top-card_two[_ngcontent-%COMP%]   .tex-left[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 48px;\n  line-height: 60px;\n}\n.padding-top-card_two[_ngcontent-%COMP%]   .tex-left[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-size: 18px;\n  line-height: 32px;\n}\n.padding-top-card_two[_ngcontent-%COMP%]   .z-index_postion[_ngcontent-%COMP%] {\n  margin-top: 104px;\n}\n.padding-top-card_two[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%] {\n  background: #EBF4FA;\n  border-color: #EBF4FA;\n}\n.padding-top-card_two[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border-radius: 36px;\n}\n.padding-top-card_two[_ngcontent-%COMP%]   .bottom-left[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 96px;\n  left: 64px;\n}\n.steps[_ngcontent-%COMP%]   .background_working[_ngcontent-%COMP%] {\n  background-color: #E9F7FE;\n  height: 800px;\n}\n.steps[_ngcontent-%COMP%]   .background_working[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 48px;\n  line-height: 48px;\n  text-align: center;\n  letter-spacing: -1px;\n}\n.steps[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%] {\n  background: #2E79CA;\n  box-shadow: 0px 32px 54px rgba(37, 138, 255, 0.224553);\n  border-radius: 10px;\n  width: 128px;\n  height: 128px;\n}\n@media (max-width: 991.98px) {\n  .steps[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%] {\n    width: 96px;\n    height: 96px;\n  }\n}\n.steps[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 32px;\n}\n@media (max-width: 991.98px) {\n  .steps[_ngcontent-%COMP%]   .border[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-top: 24px;\n    width: 48px;\n    height: auto;\n  }\n}\n@media (max-width: 767.98px) {\n  .steps[_ngcontent-%COMP%]   #steps[_ngcontent-%COMP%] {\n    margin-bottom: 5rem;\n  }\n}\n.steps[_ngcontent-%COMP%]   #steps[_ngcontent-%COMP%]:nth-last-child(-n+3):after {\n  content: url('strelica-gore.png');\n  display: block;\n  position: absolute;\n  left: 12vw;\n  top: 6vh;\n  z-index: -1;\n}\n@media (max-width: 767.98px) {\n  .steps[_ngcontent-%COMP%]   #steps[_ngcontent-%COMP%]:nth-last-child(-n+3):after {\n    display: none;\n  }\n}\n.steps[_ngcontent-%COMP%]   #steps2[_ngcontent-%COMP%] {\n  margin-bottom: 5rem;\n  margin-left: 2rem;\n}\n@media (max-width: 767.98px) {\n  .steps[_ngcontent-%COMP%]   #steps2[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n.steps[_ngcontent-%COMP%]   #steps2[_ngcontent-%COMP%]:nth-last-child(-n+3):after {\n  content: url('strelica-dole.png');\n  display: block;\n  position: absolute;\n  left: 12vw;\n  top: 4vh;\n  z-index: -1;\n}\n@media (max-width: 767.98px) {\n  .steps[_ngcontent-%COMP%]   #steps2[_ngcontent-%COMP%]:nth-last-child(-n+3):after {\n    display: none;\n  }\n}\n.steps[_ngcontent-%COMP%]   .dole-2[_ngcontent-%COMP%] {\n  margin-top: 16rem;\n  margin-left: 2rem;\n}\n@media (max-width: 767.98px) {\n  .steps[_ngcontent-%COMP%]   .dole-2[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmF6ZW5pLWZvbGlqYS9FOlxcUHJvamVjdHNcXHBvb2xzZXJ2aWNlXFxwb29sLXNlcnZpY2VcXGFuZ3VsYXItc3JjL3NyY1xcYXBwXFxwYWdlc1xcYmF6ZW5pLWZvbGlqYVxcYmF6ZW5pLWZvbGlqYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYmF6ZW5pLWZvbGlqYS9iYXplbmktZm9saWphLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9iYXplbmktZm9saWphL0U6XFxQcm9qZWN0c1xccG9vbHNlcnZpY2VcXHBvb2wtc2VydmljZVxcYW5ndWxhci1zcmMvbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2JyZWFrcG9pbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxZQUFBO0FDSkY7QUM0R0k7RUZ6R0o7SUFHSSxZQUFBO0VDRkY7QUFDRjtBQ2tFSTtFRnBFSjtJQU1JLFlBQUE7RUNBRjtBQUNGO0FER0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlGQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQ0FGO0FDb0RJO0VGMURKO0lBU0ksdUJBQUE7SUFDQSw0QkFBQTtFQ0NGO0FBQ0Y7QUM4Q0k7RUYxREo7SUFjSSxZQUFBO0VDRUY7QUFDRjtBQzhFSTtFRi9GSjtJQWtCSSxZQUFBO0VDR0Y7QUFDRjtBQ29DSTtFRnJDRjtJQUVJLGVBQUE7RUNHSjtBQUNGO0FDK0JJO0VGckNGO0lBS0ksZUFBQTtJQUNBLGdCQUFBO0VDS0o7QUFDRjtBREZFO0VBQ0UsV0FBQTtBQ0lKO0FEREU7RUFDRSxXQUFBO0FDR0o7QURHRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7QUNBSjtBREtBO0VBQ0Usb0JBQUE7RUFDQSx1QkFBQTtBQ0ZGO0FETUE7RUFDRSx5QkFBQTtBQ0hGO0FES0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0hKO0FETUU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLDJCQUFBO0FDSko7QURTQTtFQUNFLHFCQUFBO0FDTkY7QURRRTtFQUNFLGdCQUFBO0FDTko7QURVQTtFQUNFLHFCQUFBO0FDUEY7QURTRTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBQ1BKO0FEWUk7RUFDRSx3QkFBQTtBQ1ZOO0FEYUk7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ1hOO0FEY0k7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ1pOO0FEZ0JFO0VBQ0UsaUJBQUE7QUNkSjtBRGtCRTtFQUNFLG1CQUFBO0VBQ0EscUJBQUE7QUNoQko7QURtQkU7RUFDRSxtQkFBQTtBQ2pCSjtBRG9CRTtFQUVFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNuQko7QUR3QkE7RUFDRSxxQkFBQTtBQ3JCRjtBRHdCRTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBQ3RCSjtBRDBCSTtFQUNFLHVCQUFBO0FDeEJOO0FENEJJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUMxQk47QUQ2Qkk7RUFDRSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQzNCTjtBRCtCRTtFQUNFLGlCQUFBO0FDN0JKO0FEaUNFO0VBQ0UsbUJBQUE7RUFDQSxxQkFBQTtBQy9CSjtBRGtDRTtFQUNFLG1CQUFBO0FDaENKO0FEbUNFO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtBQ2pDSjtBRHVDRTtFQUNFLHlCQUFBO0VBQ0EsYUFBQTtBQ3BDSjtBRHNDSTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNwQ047QUR5Q0U7RUFDRSxtQkFBQTtFQUNBLHNEQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQ3ZDSjtBQ3hHSTtFRjBJRjtJQVFJLFdBQUE7SUFDQSxZQUFBO0VDdENKO0FBQ0Y7QUR3Q0k7RUFDRSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDdENOO0FDcEhJO0VGc0pBO0lBT0ksZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtFQ3JDTjtBQUNGO0FDM0hJO0VGcUtGO0lBR0ksbUJBQUE7RUN6Q0o7QUFDRjtBRDJDSTtFQUNFLGlDQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDekNOO0FDeElJO0VGMktBO0lBU0ksYUFBQTtFQ3hDTjtBQUNGO0FENkNFO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQzNDSjtBQ2pKSTtFRjBMRjtJQUtJLGNBQUE7RUMxQ0o7QUFDRjtBRDRDSTtFQUNFLGlDQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFFBQUE7RUFDQSxXQUFBO0FDMUNOO0FDOUpJO0VGa01BO0lBU0ksYUFBQTtFQ3pDTjtBQUNGO0FEOENFO0VBQ0UsaUJBQUE7RUFDQSxpQkFBQTtBQzVDSjtBQ3ZLSTtFRmlORjtJQUtJLFNBQUE7RUMzQ0o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JhemVuaS1mb2xpamEvYmF6ZW5pLWZvbGlqYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zXCI7XHJcbkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Nzcy9jb2xvcnNcIjtcclxuXHJcbiNoZXJvIC5jb250YWluZXItZmx1aWQgLnJvdyB7XHJcbiAgaGVpZ2h0OiA1NXZ3O1xyXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtb25seShsZykge1xyXG4gICAgaGVpZ2h0OiA2N3Z3O1xyXG4gIH1cclxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24obWQpIHtcclxuICAgIGhlaWdodDogODB2dztcclxuICB9XHJcbn1cclxuXHJcbi5mb2xpamEtY292ZXItYmFja2dyb3VuZCB7XHJcbiAgaGVpZ2h0OiA0MHZ3O1xyXG4gIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgbWluLXdpZHRoOiAzMDBweDtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3Bvb2xzZXJ2aWNlLnJzL2Fzc2V0cy9pbWcvYmF6ZW5pLXNhLWZvbGlqb20vbmFzbG92bmEuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cclxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oc20pIHtcclxuICAgIGhlaWdodDogOTB2aCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNzAlIHRvcDtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihtZCkge1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1vbmx5KGxnKSB7XHJcbiAgICBoZWlnaHQ6IDY3dmg7XHJcbiAgfVxyXG5cclxuICAuZGlzcGxheS00IHtcclxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihtZCkge1xyXG4gICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICB9XHJcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oc20pIHtcclxuICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICBsaW5lLWhlaWdodDogMS4zO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxufVxyXG5cclxuI2ZvbGlqYS1jb250ZW50IHtcclxuXHJcbiAgaDMge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC43NTAzMTZweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4uZm9saWphLWNvdmVyIHtcclxuICBwYWRkaW5nLXRvcDogMy43NXJlbTtcclxuICBwYWRkaW5nLWJvdHRvbTogMy43NXJlbTtcclxufVxyXG5cclxuXHJcbi5jYXJkc19fYmFja2dyb3VuZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U5RjdGRTtcclxuXHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiA2NHB4O1xyXG4gICAgaGVpZ2h0OiA2NHB4O1xyXG4gIH1cclxuXHJcbiAgaDMge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMzBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAtMC43NTAzMTZweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4ucGFkZGluZy1ib3R0b21fX2dhbGxlcnkge1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMjhweDtcclxuXHJcbiAgLnBvc2l0aW9uX19jZW50ZXIge1xyXG4gICAgbWFyZ2luLXRvcDogODhweDtcclxuICB9XHJcbn1cclxuXHJcbi5wYWRkaW5nLXRvcC1jYXJkX29uZSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDE3MnB4O1xyXG5cclxuICAuYmFja2dyb3VuZF9jYXJkIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFOUY3RkU7XHJcbiAgICBoZWlnaHQ6IDU3NnB4O1xyXG4gIH1cclxuXHJcbiAgLnRleC1yaWdodCB7XHJcblxyXG4gICAgLnRlc3Qge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDE2LjY2NjY2NiU7XHJcbiAgICB9XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnotaW5kZXhfcG9zdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDRweDtcclxuICB9XHJcblxyXG5cclxuICAuYm9yZGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNFQkY0RkE7XHJcbiAgICBib3JkZXItY29sb3I6ICNFQkY0RkE7XHJcbiAgfVxyXG5cclxuICAuYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM2cHg7XHJcbiAgfVxyXG5cclxuICAuYm90dG9tLXJpZ2h0IHtcclxuXHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDk2cHg7XHJcbiAgICByaWdodDogNjRweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4ucGFkZGluZy10b3AtY2FyZF90d28ge1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNzJweDtcclxuXHJcblxyXG4gIC5iYWNrZ3JvdW5kX2NhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U5RjdGRTtcclxuICAgIGhlaWdodDogNTc2cHg7XHJcbiAgfVxyXG5cclxuICAudGV4LWxlZnQge1xyXG4gICAgLnRlc3Qge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2JTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaDMge1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIHAge1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnotaW5kZXhfcG9zdGlvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDRweDtcclxuICB9XHJcblxyXG5cclxuICAuYm9yZGVyIHtcclxuICAgIGJhY2tncm91bmQ6ICNFQkY0RkE7XHJcbiAgICBib3JkZXItY29sb3I6ICNFQkY0RkE7XHJcbiAgfVxyXG5cclxuICAuYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM2cHg7XHJcbiAgfVxyXG5cclxuICAuYm90dG9tLWxlZnQge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiA5NnB4O1xyXG4gICAgbGVmdDogNjRweDtcclxuICB9XHJcbn1cclxuXHJcblxyXG4uc3RlcHMge1xyXG4gIC5iYWNrZ3JvdW5kX3dvcmtpbmcge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U5RjdGRTtcclxuICAgIGhlaWdodDogODAwcHg7XHJcblxyXG4gICAgaDMge1xyXG4gICAgICBmb250LXNpemU6IDQ4cHg7XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiA0OHB4O1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAtMXB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC5ib3JkZXIge1xyXG4gICAgYmFja2dyb3VuZDogIzJFNzlDQTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAzMnB4IDU0cHggcmdiYSgzNywgMTM4LCAyNTUsIDAuMjI0NTUzKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICB3aWR0aDogMTI4cHg7XHJcbiAgICBoZWlnaHQ6IDEyOHB4O1xyXG5cclxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihtZCkge1xyXG4gICAgICB3aWR0aDogOTZweDtcclxuICAgICAgaGVpZ2h0OiA5NnB4O1xyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMnB4O1xyXG5cclxuICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKG1kKSB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcclxuICAgICAgICB3aWR0aDogNDhweDtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAjc3RlcHMge1xyXG5cclxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihzbSkge1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA1cmVtO1xyXG4gICAgfVxyXG5cclxuICAgICY6bnRoLWxhc3QtY2hpbGQoLW4rMyk6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiB1cmwoLi4vLi4vLi4vYXNzZXRzL2ltZy9wb2x1bW9udGF6bmktYmF6ZW5pL3N0cmVsaWNhLWdvcmUucG5nKTtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgbGVmdDogMTJ2dztcclxuICAgICAgdG9wOiA2dmg7XHJcbiAgICAgIHotaW5kZXg6IC0xO1xyXG5cclxuICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHNtKSB7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gICNzdGVwczIge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiAycmVtO1xyXG5cclxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihzbSkge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMDtcclxuICAgIH1cclxuXHJcbiAgICAmOm50aC1sYXN0LWNoaWxkKC1uKzMpOmFmdGVyIHtcclxuICAgICAgY29udGVudDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvcG9sdW1vbnRhem5pLWJhemVuaS9zdHJlbGljYS1kb2xlLnBuZyk7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIGxlZnQ6IDEydnc7XHJcbiAgICAgIHRvcDogNHZoO1xyXG4gICAgICB6LWluZGV4OiAtMTtcclxuXHJcbiAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihzbSkge1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICAuZG9sZS0yIHtcclxuICAgIG1hcmdpbi10b3A6IDE2cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDJyZW07XHJcblxyXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHNtKSB7XHJcbiAgICAgIG1hcmdpbjogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG4iLCIjaGVybyAuY29udGFpbmVyLWZsdWlkIC5yb3cge1xuICBoZWlnaHQ6IDU1dnc7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcbiAgI2hlcm8gLmNvbnRhaW5lci1mbHVpZCAucm93IHtcbiAgICBoZWlnaHQ6IDY3dnc7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAjaGVybyAuY29udGFpbmVyLWZsdWlkIC5yb3cge1xuICAgIGhlaWdodDogODB2dztcbiAgfVxufVxuXG4uZm9saWphLWNvdmVyLWJhY2tncm91bmQge1xuICBoZWlnaHQ6IDQwdnc7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMzAwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcImh0dHBzOi8vcG9vbHNlcnZpY2UucnMvYXNzZXRzL2ltZy9iYXplbmktc2EtZm9saWpvbS9uYXNsb3ZuYS5qcGdcIik7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICAuZm9saWphLWNvdmVyLWJhY2tncm91bmQge1xuICAgIGhlaWdodDogOTB2aCAhaW1wb3J0YW50O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDcwJSB0b3A7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAuZm9saWphLWNvdmVyLWJhY2tncm91bmQge1xuICAgIGhlaWdodDogODB2aDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XG4gIC5mb2xpamEtY292ZXItYmFja2dyb3VuZCB7XG4gICAgaGVpZ2h0OiA2N3ZoO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgLmZvbGlqYS1jb3Zlci1iYWNrZ3JvdW5kIC5kaXNwbGF5LTQge1xuICAgIGZvbnQtc2l6ZTogM3JlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gIC5mb2xpamEtY292ZXItYmFja2dyb3VuZCAuZGlzcGxheS00IHtcbiAgICBmb250LXNpemU6IDJyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgfVxufVxuLmZvbGlqYS1jb3Zlci1iYWNrZ3JvdW5kIGgxIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uZm9saWphLWNvdmVyLWJhY2tncm91bmQgcCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4jZm9saWphLWNvbnRlbnQgaDMge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjc1MDMxNnB4O1xufVxuXG4uZm9saWphLWNvdmVyIHtcbiAgcGFkZGluZy10b3A6IDMuNzVyZW07XG4gIHBhZGRpbmctYm90dG9tOiAzLjc1cmVtO1xufVxuXG4uY2FyZHNfX2JhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlGN0ZFO1xufVxuLmNhcmRzX19iYWNrZ3JvdW5kIGltZyB7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG59XG4uY2FyZHNfX2JhY2tncm91bmQgaDMge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjc1MDMxNnB4O1xufVxuXG4ucGFkZGluZy1ib3R0b21fX2dhbGxlcnkge1xuICBwYWRkaW5nLWJvdHRvbTogMTI4cHg7XG59XG4ucGFkZGluZy1ib3R0b21fX2dhbGxlcnkgLnBvc2l0aW9uX19jZW50ZXIge1xuICBtYXJnaW4tdG9wOiA4OHB4O1xufVxuXG4ucGFkZGluZy10b3AtY2FyZF9vbmUge1xuICBwYWRkaW5nLWJvdHRvbTogMTcycHg7XG59XG4ucGFkZGluZy10b3AtY2FyZF9vbmUgLmJhY2tncm91bmRfY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFOUY3RkU7XG4gIGhlaWdodDogNTc2cHg7XG59XG4ucGFkZGluZy10b3AtY2FyZF9vbmUgLnRleC1yaWdodCAudGVzdCB7XG4gIG1hcmdpbi1yaWdodDogMTYuNjY2NjY2JTtcbn1cbi5wYWRkaW5nLXRvcC1jYXJkX29uZSAudGV4LXJpZ2h0IGgzIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBsaW5lLWhlaWdodDogNjBweDtcbn1cbi5wYWRkaW5nLXRvcC1jYXJkX29uZSAudGV4LXJpZ2h0IHAge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMnB4O1xufVxuLnBhZGRpbmctdG9wLWNhcmRfb25lIC56LWluZGV4X3Bvc3Rpb24ge1xuICBtYXJnaW4tdG9wOiAxMDRweDtcbn1cbi5wYWRkaW5nLXRvcC1jYXJkX29uZSAuYm9yZGVyIHtcbiAgYmFja2dyb3VuZDogI0VCRjRGQTtcbiAgYm9yZGVyLWNvbG9yOiAjRUJGNEZBO1xufVxuLnBhZGRpbmctdG9wLWNhcmRfb25lIC5idG4ge1xuICBib3JkZXItcmFkaXVzOiAzNnB4O1xufVxuLnBhZGRpbmctdG9wLWNhcmRfb25lIC5ib3R0b20tcmlnaHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogOTZweDtcbiAgcmlnaHQ6IDY0cHg7XG59XG5cbi5wYWRkaW5nLXRvcC1jYXJkX3R3byB7XG4gIHBhZGRpbmctYm90dG9tOiAxNzJweDtcbn1cbi5wYWRkaW5nLXRvcC1jYXJkX3R3byAuYmFja2dyb3VuZF9jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U5RjdGRTtcbiAgaGVpZ2h0OiA1NzZweDtcbn1cbi5wYWRkaW5nLXRvcC1jYXJkX3R3byAudGV4LWxlZnQgLnRlc3Qge1xuICBtYXJnaW4tbGVmdDogMTYuNjY2NjY2JTtcbn1cbi5wYWRkaW5nLXRvcC1jYXJkX3R3byAudGV4LWxlZnQgaDMge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xufVxuLnBhZGRpbmctdG9wLWNhcmRfdHdvIC50ZXgtbGVmdCBwIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBsaW5lLWhlaWdodDogMzJweDtcbn1cbi5wYWRkaW5nLXRvcC1jYXJkX3R3byAuei1pbmRleF9wb3N0aW9uIHtcbiAgbWFyZ2luLXRvcDogMTA0cHg7XG59XG4ucGFkZGluZy10b3AtY2FyZF90d28gLmJvcmRlciB7XG4gIGJhY2tncm91bmQ6ICNFQkY0RkE7XG4gIGJvcmRlci1jb2xvcjogI0VCRjRGQTtcbn1cbi5wYWRkaW5nLXRvcC1jYXJkX3R3byAuYnRuIHtcbiAgYm9yZGVyLXJhZGl1czogMzZweDtcbn1cbi5wYWRkaW5nLXRvcC1jYXJkX3R3byAuYm90dG9tLWxlZnQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogOTZweDtcbiAgbGVmdDogNjRweDtcbn1cblxuLnN0ZXBzIC5iYWNrZ3JvdW5kX3dvcmtpbmcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlGN0ZFO1xuICBoZWlnaHQ6IDgwMHB4O1xufVxuLnN0ZXBzIC5iYWNrZ3JvdW5kX3dvcmtpbmcgaDMge1xuICBmb250LXNpemU6IDQ4cHg7XG4gIGxpbmUtaGVpZ2h0OiA0OHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xufVxuLnN0ZXBzIC5ib3JkZXIge1xuICBiYWNrZ3JvdW5kOiAjMkU3OUNBO1xuICBib3gtc2hhZG93OiAwcHggMzJweCA1NHB4IHJnYmEoMzcsIDEzOCwgMjU1LCAwLjIyNDU1Myk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIHdpZHRoOiAxMjhweDtcbiAgaGVpZ2h0OiAxMjhweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAuc3RlcHMgLmJvcmRlciB7XG4gICAgd2lkdGg6IDk2cHg7XG4gICAgaGVpZ2h0OiA5NnB4O1xuICB9XG59XG4uc3RlcHMgLmJvcmRlciBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgbWFyZ2luLXRvcDogMzJweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAuc3RlcHMgLmJvcmRlciBpbWcge1xuICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgd2lkdGg6IDQ4cHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgLnN0ZXBzICNzdGVwcyB7XG4gICAgbWFyZ2luLWJvdHRvbTogNXJlbTtcbiAgfVxufVxuLnN0ZXBzICNzdGVwczpudGgtbGFzdC1jaGlsZCgtbiszKTphZnRlciB7XG4gIGNvbnRlbnQ6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL3BvbHVtb250YXpuaS1iYXplbmkvc3RyZWxpY2EtZ29yZS5wbmcpO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAxMnZ3O1xuICB0b3A6IDZ2aDtcbiAgei1pbmRleDogLTE7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgLnN0ZXBzICNzdGVwczpudGgtbGFzdC1jaGlsZCgtbiszKTphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLnN0ZXBzICNzdGVwczIge1xuICBtYXJnaW4tYm90dG9tOiA1cmVtO1xuICBtYXJnaW4tbGVmdDogMnJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICAuc3RlcHMgI3N0ZXBzMiB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gIH1cbn1cbi5zdGVwcyAjc3RlcHMyOm50aC1sYXN0LWNoaWxkKC1uKzMpOmFmdGVyIHtcbiAgY29udGVudDogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvcG9sdW1vbnRhem5pLWJhemVuaS9zdHJlbGljYS1kb2xlLnBuZyk7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDEydnc7XG4gIHRvcDogNHZoO1xuICB6LWluZGV4OiAtMTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICAuc3RlcHMgI3N0ZXBzMjpudGgtbGFzdC1jaGlsZCgtbiszKTphZnRlciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLnN0ZXBzIC5kb2xlLTIge1xuICBtYXJnaW4tdG9wOiAxNnJlbTtcbiAgbWFyZ2luLWxlZnQ6IDJyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgLnN0ZXBzIC5kb2xlLTIge1xuICAgIG1hcmdpbjogMDtcbiAgfVxufSIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BazeniFolijaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bazeni-folija',
                templateUrl: './bazeni-folija.component.html',
                styleUrls: ['./bazeni-folija.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/betonski-bazeni/betonski-bazeni.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/betonski-bazeni/betonski-bazeni.component.ts ***!
  \********************************************************************/
/*! exports provided: BetonskiBazeniComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BetonskiBazeniComponent", function() { return BetonskiBazeniComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lazy-img-directive.directive */ "./src/app/lazy-img-directive.directive.ts");
/* harmony import */ var _components_tri_koraka_tri_koraka_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/tri-koraka/tri-koraka.component */ "./src/app/components/tri-koraka/tri-koraka.component.ts");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/__ivy_ngcc__/fesm2015/ngx-swiper-wrapper.js");
/* harmony import */ var _components_konsultacije_konsultacije_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/konsultacije/konsultacije.component */ "./src/app/components/konsultacije/konsultacije.component.ts");








const _c0 = function () { return ["/kontakt"]; };
class BetonskiBazeniComponent {
    constructor(metaTagService, title) {
        this.metaTagService = metaTagService;
        this.title = title;
        this.type = 'component';
        this.disabled = false;
        this.config = {
            a11y: true,
            direction: 'horizontal',
            spaceBetween: 24,
            keyboard: true,
            mousewheel: false,
            scrollbar: false,
            navigation: true,
            pagination: false,
            centeredSlides: true,
            loop: true,
            breakpoints: {
                576: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 2,
                }
            }
        };
        this.scrollbar = {
            el: '.swiper-scrollbar',
            hide: false,
            draggable: true
        };
        this.pagination = {
            el: '.swiper-pagination',
            clickable: true,
            hideOnClick: false
        };
    }
    ngOnInit() {
        this.metaTagService.addTags([
            { name: 'keywords', content: 'Armirano betonski bazeni mogu biti različitog oblika i dimenzija. Za njih važi da su najbolji.' },
            { name: 'robots', content: 'index, follow' },
            { name: 'author', content: 'Pool Service' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'date', content: '2021-02-01', scheme: 'YYYY-MM-DD' },
            { charset: 'UTF-8' },
            { property: 'og:image', content: 'assets/img/betonsk-bazeni.jpg' },
            { property: 'twitter:image:src', content: 'assets/img/betonsk-bazeni.jpg' }
        ]);
        this.title.setTitle('Betonski bazeni 💦 Pool Service');
    }
}
BetonskiBazeniComponent.ɵfac = function BetonskiBazeniComponent_Factory(t) { return new (t || BetonskiBazeniComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
BetonskiBazeniComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BetonskiBazeniComponent, selectors: [["app-betonski-bazeni"]], decls: 95, vars: 5, consts: [["id", "hero", 1, "betonski-cover-background"], [1, "container", "h-100"], [1, "row", "h-100", "align-items-center"], [1, "col-12", "text-center"], [1, "display-2", "font-weight-bold"], [1, "mb-5", "text-white", "font-weight-normal"], ["role", "button", 1, "btn", "btn-secondary", 3, "routerLink"], [1, "bg-light", "py-64"], ["id", "betonski-content", 1, "container"], [1, "row"], [1, "col-12", "col-md-4", "mb-5", "mb-md-0", "text-center"], ["src", "assets/img/betonski-bazeni/unikatno-resenje.svg", "alt", "Unikatno re\u0161enje", "width", "64", 1, "img-fluid", "mb-4", "mx-auto"], [1, "text-black-50"], ["src", "assets/img/betonski-bazeni/raznovrsnost%20dizajna.svg", "alt", "Raznovrsnost dizajna", "width", "64", 1, "img-fluid", "mb-4", "mx-auto"], ["src", "assets/img/betonski-bazeni/dugotrajnost.svg", "alt", "Dugotrajnost", "width", "64", 1, "img-fluid", "mb-4", "mx-auto"], [1, "container", "my-128"], [1, "row", "align-items-center"], [1, "col-12", "col-md-5"], [1, "mb-3"], [1, "mb-5"], [1, "btn", "btn-secondary", 3, "routerLink"], [1, "col-12", "col-md-6", "offset-md-1"], ["src", "assets/img/betonski-bazeni/najkvalitetniji-tip-bazena.png", "loading", "lazy", "alt", "kvadrati", 1, "img-fluid"], [1, "container", "pb-128"], [1, "text-primary", "text-uppercase"], [1, "col-12", "col-md-6", "offset-md-1", "pt-line"], [1, "container", "my-64"], [1, "row", "justify-content-center"], [1, "col-12", "col-md-6"], [1, "text-center"], ["id", "polumontazniGalerija", 1, "swiper-container", "mb-128", 3, "swiper"], [1, "swiper-wrapper"], [1, "swiper-slide"], ["src", "assets/img/betonski-bazeni/slika-1.jpg", "loading", "lazy", "alt", "", 1, "img-fluid"], ["src", "assets/img/betonski-bazeni/slika-2.jpg", "loading", "lazy", "alt", "", 1, "img-fluid"], ["src", "assets/img/betonski-bazeni/slika-3.jpg", "loading", "lazy", "alt", "", 1, "img-fluid"], ["src", "assets/img/betonski-bazeni/slika-4.jpg", "loading", "lazy", "alt", "", 1, "img-fluid"], ["src", "assets/img/betonski-bazeni/slika-5.jpg", "loading", "lazy", "alt", "", 1, "img-fluid"], ["src", "assets/img/betonski-bazeni/slika-7.jpg", "loading", "lazy", "alt", "", 1, "img-fluid"], ["src", "assets/img/betonski-bazeni/slika-8.jpg", "loading", "lazy", "alt", "", 1, "img-fluid"], ["src", "assets/img/betonski-bazeni/betonski-bazen-01.jpg", "loading", "lazy", "alt", "", 1, "img-fluid"], ["src", "assets/img/betonski-bazeni/betonski-bazen-02.jpg", "loading", "lazy", "alt", "", 1, "img-fluid"], ["src", "assets/img/betonski-bazeni/betonski-bazen-03.jpg", "loading", "lazy", "alt", "", 1, "img-fluid"], ["src", "assets/img/betonski-bazeni/betonski-bazen-04.jpg", "loading", "lazy", "alt", "", 1, "img-fluid"], ["src", "assets/img/betonski-bazeni/betonski-bazen-05.jpg", "loading", "lazy", "alt", "", 1, "img-fluid"], ["src", "assets/img/betonski-bazeni/betonski-bazen-06.jpg", "loading", "lazy", "alt", "", 1, "img-fluid"], ["src", "assets/img/betonski-bazeni/betonski-bazen-07.jpg", "loading", "lazy", "alt", "", 1, "img-fluid"], ["src", "assets/img/betonski-bazeni/betonski-bazen-08.jpg", "loading", "lazy", "alt", "", 1, "img-fluid"], [1, "swiper-button-prev"], [1, "swiper-button-next"]], template: function BetonskiBazeniComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Betonski bazeni");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Kvalitet i istrajnost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Zatra\u017Eite ponudu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Unikatno re\u0161enje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Oblik i dubina bazena po Va\u0161oj \u017Eelji");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Raznovrsnost dizajna");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Veliki izbor ukrasne podloge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Dugotrajnost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Besprekoran kvalitet i sigurna dugove\u010Dnost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Najkvalitetniji tip bazena");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Armirano betonski bazeni mogu biti razli\u010Ditog oblika i dimenzija. Za njih va\u017Ei da su najbolji, najistrajniji i najzahtevniji za izgradnju. Obi\u010Dno su oblo\u017Eeni kerami\u010Dkim plo\u010Dicama a u novije vreme staklenim mozaik plo\u010Dicama raznih dezena, bordura i slika.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Kontaktirajte nas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "app-tri-koraka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Betonski bazeni");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Dimenzije i izgled po \u017Eeljama klijenta");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Potrebno je uraditi projekat sa preciznim stati\u010Dkim prora\u010Dunima i gradjevinske radove. Konstrukcija bazena mora biti visoko armirana, betoniranje zidova i dna se radi bez prekida, beton obavezno mora da se vibrira i moraju se dodati aditivi za vodonepropusnost.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "U zidove bazena treba ugraditi potrebne elemente pre betoniranja, to jest prelive \u2013 skimer, prodore za betonski zid za mlaznice, slivnik i podvodni reflektor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h3", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, "Galerija na\u0161ih uspe\u0161no zavr\u0161enih betonskih bazena");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "img", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "img", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "img", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](77, "img", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "img", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "img", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "img", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "img", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](92, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "div", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "app-konsultacije");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.config);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_3__["LazyImgDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _components_tri_koraka_tri_koraka_component__WEBPACK_IMPORTED_MODULE_4__["TriKorakaComponent"], ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_5__["SwiperDirective"], _components_konsultacije_konsultacije_component__WEBPACK_IMPORTED_MODULE_6__["KonsultacijeComponent"]], styles: ["#hero[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  height: 55vw;\n}\n@media (min-width: 992px) and (max-width: 1199.98px) {\n  #hero[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    height: 67vw;\n  }\n}\n@media (max-width: 991.98px) {\n  #hero[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    height: 80vw;\n  }\n}\n.betonski-cover-background[_ngcontent-%COMP%] {\n  height: 40vw;\n  max-height: 100%;\n  min-width: 300px;\n  background-image: url(\"https://poolservice.rs/assets/img/betonski-bazeni/naslovna.jpg\");\n  background-position: center;\n  background-size: cover;\n}\n@media (max-width: 767.98px) {\n  .betonski-cover-background[_ngcontent-%COMP%] {\n    height: 90vh !important;\n    background-position: 70% top;\n  }\n}\n@media (max-width: 991.98px) {\n  .betonski-cover-background[_ngcontent-%COMP%] {\n    height: 80vh;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199.98px) {\n  .betonski-cover-background[_ngcontent-%COMP%] {\n    height: 67vh;\n  }\n}\n@media (max-width: 991.98px) {\n  .betonski-cover-background[_ngcontent-%COMP%]   .display-3[_ngcontent-%COMP%] {\n    font-size: 4rem;\n  }\n}\n@media (max-width: 767.98px) {\n  .betonski-cover-background[_ngcontent-%COMP%]   .display-3[_ngcontent-%COMP%] {\n    font-size: 3rem;\n    line-height: 1.3;\n  }\n}\n.betonski-cover-background[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.betonski-cover-background[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n}\n#betonski-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 30px;\n  letter-spacing: -0.750316px;\n}\n.cards__background[_ngcontent-%COMP%] {\n  background-color: #E9F7FE;\n}\n.cards__background[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 64px;\n  height: 64px;\n}\n.cards__background[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 30px;\n  letter-spacing: -0.750316px;\n}\n.magic__container[_ngcontent-%COMP%] {\n  padding-bottom: 96px;\n}\n.magic__container[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%] {\n  border-radius: 30px;\n  border: 2px solid #E5E5E5;\n  box-sizing: border-box;\n  color: #175CFF;\n  background-color: #ffff;\n}\n.magic__container[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:active:hover, .magic__container[_ngcontent-%COMP%]   .btn.btn-primary[_ngcontent-%COMP%]:hover {\n  color: #ffffff;\n  background-color: #2E79CA;\n}\n.magic__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 480px;\n}\n.padding-bottom_work[_ngcontent-%COMP%] {\n  padding-bottom: 160px;\n}\n.padding-bottom-who[_ngcontent-%COMP%] {\n  padding-bottom: 112px;\n}\n.padding-bottom-who[_ngcontent-%COMP%]   .up-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 2px;\n  text-transform: uppercase;\n  color: #175CFF;\n}\n.padding-bottom__gallery[_ngcontent-%COMP%] {\n  padding-bottom: 128px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmV0b25za2ktYmF6ZW5pL0U6XFxQcm9qZWN0c1xccG9vbHNlcnZpY2VcXHBvb2wtc2VydmljZVxcYW5ndWxhci1zcmMvc3JjXFxhcHBcXHBhZ2VzXFxiZXRvbnNraS1iYXplbmlcXGJldG9uc2tpLWJhemVuaS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYmV0b25za2ktYmF6ZW5pL2JldG9uc2tpLWJhemVuaS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYmV0b25za2ktYmF6ZW5pL0U6XFxQcm9qZWN0c1xccG9vbHNlcnZpY2VcXHBvb2wtc2VydmljZVxcYW5ndWxhci1zcmMvbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2JyZWFrcG9pbnRzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2JldG9uc2tpLWJhemVuaS9FOlxcUHJvamVjdHNcXHBvb2xzZXJ2aWNlXFxwb29sLXNlcnZpY2VcXGFuZ3VsYXItc3JjL3NyY1xcYXNzZXRzXFxzY3NzXFxfY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSxZQUFBO0FDTEY7QUM0R0k7RUZ4R0o7SUFHSSxZQUFBO0VDSEY7QUFDRjtBQ2tFSTtFRm5FSjtJQU1JLFlBQUE7RUNERjtBQUNGO0FESUE7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVGQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQ0RGO0FDb0RJO0VGekRKO0lBU0ksdUJBQUE7SUFDQSw0QkFBQTtFQ0FGO0FBQ0Y7QUM4Q0k7RUZ6REo7SUFjSSxZQUFBO0VDQ0Y7QUFDRjtBQzhFSTtFRjlGSjtJQWtCSSxZQUFBO0VDRUY7QUFDRjtBQ29DSTtFRnBDRjtJQUVJLGVBQUE7RUNFSjtBQUNGO0FDK0JJO0VGcENGO0lBS0ksZUFBQTtJQUNBLGdCQUFBO0VDSUo7QUFDRjtBRERFO0VBQ0UsV0FBQTtBQ0dKO0FEQUU7RUFDRSxXQUFBO0FDRUo7QURJRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7QUNESjtBRE1BO0VBQ0UseUJBQUE7QUNIRjtBREtFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNISjtBRE1FO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSwyQkFBQTtBQ0pKO0FEUUE7RUFDRSxvQkFBQTtBQ0xGO0FET0U7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7QUNMSjtBRFdFOztFQUVFLGNBQUE7RUFDQSx5QkdwR007QUYyRlY7QURjRTtFQUNFLGFBQUE7QUNaSjtBRGlCQTtFQUNFLHFCQUFBO0FDZEY7QURvQkE7RUFDRSxxQkFBQTtBQ2pCRjtBRG9CSTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEsbUJBQUE7RUFDQSx5QkFBQTtFQUVBLGNBQUE7QUNwQk47QUQwQkE7RUFDRSxxQkFBQTtBQ3ZCRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2JldG9uc2tpLWJhemVuaS9iZXRvbnNraS1iYXplbmkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Z1bmN0aW9uc1wiO1xyXG5AaW1wb3J0IFwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlc1wiO1xyXG5AaW1wb3J0IFwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGluc1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29sb3JzXCI7XHJcblxyXG5cclxuI2hlcm8gLmNvbnRhaW5lci1mbHVpZCAucm93IHtcclxuICBoZWlnaHQ6IDU1dnc7XHJcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1vbmx5KGxnKSB7XHJcbiAgICBoZWlnaHQ6IDY3dnc7XHJcbiAgfVxyXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihtZCkge1xyXG4gICAgaGVpZ2h0OiA4MHZ3O1xyXG4gIH1cclxufVxyXG5cclxuLmJldG9uc2tpLWNvdmVyLWJhY2tncm91bmQge1xyXG4gIGhlaWdodDogNDB2dztcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9wb29sc2VydmljZS5ycy9hc3NldHMvaW1nL2JldG9uc2tpLWJhemVuaS9uYXNsb3ZuYS5qcGdcIik7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblxyXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihzbSkge1xyXG4gICAgaGVpZ2h0OiA5MHZoICFpbXBvcnRhbnQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA3MCUgdG9wO1xyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKG1kKSB7XHJcbiAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgfVxyXG5cclxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LW9ubHkobGcpIHtcclxuICAgIGhlaWdodDogNjd2aDtcclxuICB9XHJcblxyXG4gIC5kaXNwbGF5LTMge1xyXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKG1kKSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogNHJlbTtcclxuICAgIH1cclxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihzbSkge1xyXG4gICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoMSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG59XHJcblxyXG4jYmV0b25za2ktY29udGVudCB7XHJcblxyXG4gIGgzIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNzUwMzE2cHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLmNhcmRzX19iYWNrZ3JvdW5kIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlGN0ZFO1xyXG5cclxuICBpbWcge1xyXG4gICAgd2lkdGg6IDY0cHg7XHJcbiAgICBoZWlnaHQ6IDY0cHg7XHJcbiAgfVxyXG5cclxuICBoMyB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAzMHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjc1MDMxNnB4O1xyXG4gIH1cclxufVxyXG5cclxuLm1hZ2ljX19jb250YWluZXIge1xyXG4gIHBhZGRpbmctYm90dG9tOiA5NnB4O1xyXG5cclxuICAuYnRuLXByaW1hcnkge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFNUU1RTU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgY29sb3I6ICMxNzVDRkY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZjtcclxuXHJcblxyXG4gIH1cclxuXHJcblxyXG4gIC5idG4uYnRuLXByaW1hcnk6YWN0aXZlOmhvdmVyLFxyXG4gIC5idG4uYnRuLXByaW1hcnk6aG92ZXIge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcclxuXHJcblxyXG4gIH1cclxuXHJcbiAgaW1nIHtcclxuICAgIGhlaWdodDogNDgwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnBhZGRpbmctYm90dG9tX3dvcmsge1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNjBweDtcclxuXHJcbn1cclxuXHJcblxyXG5cclxuLnBhZGRpbmctYm90dG9tLXdobyB7XHJcbiAgcGFkZGluZy1ib3R0b206IDExMnB4O1xyXG5cclxuICAudXAtdGV4dCB7XHJcbiAgICBwIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcblxyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICAgICAgY29sb3I6ICMxNzVDRkY7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLnBhZGRpbmctYm90dG9tX19nYWxsZXJ5IHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTI4cHg7XHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIiNoZXJvIC5jb250YWluZXItZmx1aWQgLnJvdyB7XG4gIGhlaWdodDogNTV2dztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xuICAjaGVybyAuY29udGFpbmVyLWZsdWlkIC5yb3cge1xuICAgIGhlaWdodDogNjd2dztcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gICNoZXJvIC5jb250YWluZXItZmx1aWQgLnJvdyB7XG4gICAgaGVpZ2h0OiA4MHZ3O1xuICB9XG59XG5cbi5iZXRvbnNraS1jb3Zlci1iYWNrZ3JvdW5kIHtcbiAgaGVpZ2h0OiA0MHZ3O1xuICBtYXgtaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDMwMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3Bvb2xzZXJ2aWNlLnJzL2Fzc2V0cy9pbWcvYmV0b25za2ktYmF6ZW5pL25hc2xvdm5hLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gIC5iZXRvbnNraS1jb3Zlci1iYWNrZ3JvdW5kIHtcbiAgICBoZWlnaHQ6IDkwdmggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA3MCUgdG9wO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgLmJldG9uc2tpLWNvdmVyLWJhY2tncm91bmQge1xuICAgIGhlaWdodDogODB2aDtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSBhbmQgKG1heC13aWR0aDogMTE5OS45OHB4KSB7XG4gIC5iZXRvbnNraS1jb3Zlci1iYWNrZ3JvdW5kIHtcbiAgICBoZWlnaHQ6IDY3dmg7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAuYmV0b25za2ktY292ZXItYmFja2dyb3VuZCAuZGlzcGxheS0zIHtcbiAgICBmb250LXNpemU6IDRyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xuICAuYmV0b25za2ktY292ZXItYmFja2dyb3VuZCAuZGlzcGxheS0zIHtcbiAgICBmb250LXNpemU6IDNyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuMztcbiAgfVxufVxuLmJldG9uc2tpLWNvdmVyLWJhY2tncm91bmQgaDEge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5iZXRvbnNraS1jb3Zlci1iYWNrZ3JvdW5kIHAge1xuICBjb2xvcjogI2ZmZjtcbn1cblxuI2JldG9uc2tpLWNvbnRlbnQgaDMge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjc1MDMxNnB4O1xufVxuXG4uY2FyZHNfX2JhY2tncm91bmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlGN0ZFO1xufVxuLmNhcmRzX19iYWNrZ3JvdW5kIGltZyB7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG59XG4uY2FyZHNfX2JhY2tncm91bmQgaDMge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjc1MDMxNnB4O1xufVxuXG4ubWFnaWNfX2NvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiA5NnB4O1xufVxuLm1hZ2ljX19jb250YWluZXIgLmJ0bi1wcmltYXJ5IHtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYm9yZGVyOiAycHggc29saWQgI0U1RTVFNTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgY29sb3I6ICMxNzVDRkY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmZmO1xufVxuLm1hZ2ljX19jb250YWluZXIgLmJ0bi5idG4tcHJpbWFyeTphY3RpdmU6aG92ZXIsXG4ubWFnaWNfX2NvbnRhaW5lciAuYnRuLmJ0bi1wcmltYXJ5OmhvdmVyIHtcbiAgY29sb3I6ICNmZmZmZmY7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyRTc5Q0E7XG59XG4ubWFnaWNfX2NvbnRhaW5lciBpbWcge1xuICBoZWlnaHQ6IDQ4MHB4O1xufVxuXG4ucGFkZGluZy1ib3R0b21fd29yayB7XG4gIHBhZGRpbmctYm90dG9tOiAxNjBweDtcbn1cblxuLnBhZGRpbmctYm90dG9tLXdobyB7XG4gIHBhZGRpbmctYm90dG9tOiAxMTJweDtcbn1cbi5wYWRkaW5nLWJvdHRvbS13aG8gLnVwLXRleHQgcCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogIzE3NUNGRjtcbn1cblxuLnBhZGRpbmctYm90dG9tX19nYWxsZXJ5IHtcbiAgcGFkZGluZy1ib3R0b206IDEyOHB4O1xufSIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIiwiJHByaW1hcnk6ICMyRTc5Q0E7XHJcbiRwcmltYXJ5LWRhcms6ICMyMjY1YWU7XHJcblxyXG4kc2Vjb25kYXJ5OiAjMTcxNTRCO1xyXG5cclxuJG9yYW5nZTogI0ZGODEyNTtcclxuJG9yYW5nZS1kYXJrOiAjZDY2YzFmO1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BetonskiBazeniComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-betonski-bazeni',
                templateUrl: './betonski-bazeni.component.html',
                styleUrls: ['./betonski-bazeni.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/blog/blog.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/blog/blog.component.ts ***!
  \**********************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lazy-img-directive.directive */ "./src/app/lazy-img-directive.directive.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_konsultacije_konsultacije_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/konsultacije/konsultacije.component */ "./src/app/components/konsultacije/konsultacije.component.ts");





const _c0 = function () { return ["post-1"]; };
class BlogComponent {
    constructor() { }
    ngOnInit() {
    }
}
BlogComponent.ɵfac = function BlogComponent_Factory(t) { return new (t || BlogComponent)(); };
BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BlogComponent, selectors: [["app-blog"]], decls: 92, vars: 2, consts: [[1, "container-fluid", "px-5"], [1, "jumbotron", "p-5", "p-md-5", "text-white", "blog-cover"], [1, "container", "h-100"], [1, "row", "h-100", "align-items-center"], [1, "col-6"], [1, "display-3"], [1, "container", "padding-y__blog"], [1, "row"], [1, "col-lg-4"], ["src", "assets/img/blog/Base.png", "alt", "Generic placeholder image", 1, "img-fluid"], [1, "mt-4", "mb-5"], [1, "smallText-blog_card"], [1, ""], [1, "link-blog_card", 3, "routerLink"], ["href", "#", 1, "link-blog_card"]], template: function BlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Blog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "All our physical products that we have branded and sold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "READ MORE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "All our physical products that we have branded and sold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "READ MORE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "All our physical products that we have branded and sold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "READ MORE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "All our physical products that we have branded and sold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "READ MORE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "All our physical products that we have branded and sold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "READ MORE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "All our physical products that we have branded and sold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "READ MORE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "All our physical products that we have branded and sold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71, "READ MORE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "All our physical products that we have branded and sold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "READ MORE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "h5", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "All our physical products that we have branded and sold");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "READ MORE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "app-konsultacije");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](91, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_1__["LazyImgDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _components_konsultacije_konsultacije_component__WEBPACK_IMPORTED_MODULE_3__["KonsultacijeComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], styles: [".blog-cover[_ngcontent-%COMP%] {\n  background-image: url('blog_slika.jpg');\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 400px;\n}\n\n.padding-top__menu[_ngcontent-%COMP%] {\n  padding-top: 128px;\n}\n\n.padding-y__blog[_ngcontent-%COMP%] {\n  padding-top: 64px;\n  padding-bottom: 128px;\n}\n\n.padding-top_menu[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #455154;\n  font-weight: bold;\n}\n\n.smallText-blog_card[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n  color: #57586E;\n  opacity: 0.3;\n}\n\n.mainText-blog_card[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 2rem;\n  line-height: 34px;\n}\n\n.link-blog_card[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 2px;\n}\n\n.consultation[_ngcontent-%COMP%] {\n  background: #5454D4;\n}\n\n.btn-secondary[_ngcontent-%COMP%] {\n  background-color: #FF8125;\n  font-weight: 600;\n  letter-spacing: 0.32px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmxvZy9FOlxcUHJvamVjdHNcXHBvb2xzZXJ2aWNlXFxwb29sLXNlcnZpY2VcXGFuZ3VsYXItc3JjL3NyY1xcYXBwXFxwYWdlc1xcYmxvZ1xcYmxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYmxvZy9ibG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsdUNBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0FDREY7O0FES0E7RUFDRSxrQkFBQTtBQ0ZGOztBREtBO0VBQ0UsaUJBQUE7RUFDQSxxQkFBQTtBQ0ZGOztBRE9JO0VBQ0UsY0FBQTtFQUNBLGlCQUFBO0FDSk47O0FEU0E7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDTkY7O0FEU0E7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ05GOztBRFNBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQ05GOztBRFVBO0VBQ0UsbUJBQUE7QUNQRjs7QURVQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQ1BGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYmxvZy9ibG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbG9yc1wiO1xyXG5cclxuLmJsb2ctY292ZXIge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvYmxvZy9ibG9nX3NsaWthLmpwZ1wiKTtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGhlaWdodDogNDAwcHg7XHJcbn1cclxuXHJcblxyXG4ucGFkZGluZy10b3BfX21lbnUge1xyXG4gIHBhZGRpbmctdG9wOiAxMjhweDtcclxufVxyXG5cclxuLnBhZGRpbmcteV9fYmxvZyB7XHJcbiAgcGFkZGluZy10b3A6IDY0cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEyOHB4O1xyXG59XHJcblxyXG4ucGFkZGluZy10b3BfbWVudSB7XHJcbiAgLm1lbnVfbGlzdCB7XHJcbiAgICBhIHtcclxuICAgICAgY29sb3I6ICM0NTUxNTQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLnNtYWxsVGV4dC1ibG9nX2NhcmQge1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gIGNvbG9yOiAjNTc1ODZFO1xyXG4gIG9wYWNpdHk6IDAuMztcclxufVxyXG5cclxuLm1haW5UZXh0LWJsb2dfY2FyZCB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG59XHJcblxyXG4ubGluay1ibG9nX2NhcmQge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBsaW5lLWhlaWdodDogMjBweDtcclxuICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG59XHJcblxyXG5cclxuLmNvbnN1bHRhdGlvbiB7XHJcbiAgYmFja2dyb3VuZDogIzU0NTRENDtcclxufVxyXG5cclxuLmJ0bi1zZWNvbmRhcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjgxMjU7XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBsZXR0ZXItc3BhY2luZzogMC4zMnB4O1xyXG59XHJcbiIsIi5ibG9nLWNvdmVyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9ibG9nL2Jsb2dfc2xpa2EuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGhlaWdodDogNDAwcHg7XG59XG5cbi5wYWRkaW5nLXRvcF9fbWVudSB7XG4gIHBhZGRpbmctdG9wOiAxMjhweDtcbn1cblxuLnBhZGRpbmcteV9fYmxvZyB7XG4gIHBhZGRpbmctdG9wOiA2NHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTI4cHg7XG59XG5cbi5wYWRkaW5nLXRvcF9tZW51IC5tZW51X2xpc3QgYSB7XG4gIGNvbG9yOiAjNDU1MTU0O1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLnNtYWxsVGV4dC1ibG9nX2NhcmQge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBjb2xvcjogIzU3NTg2RTtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG4ubWFpblRleHQtYmxvZ19jYXJkIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbiAgbGluZS1oZWlnaHQ6IDM0cHg7XG59XG5cbi5saW5rLWJsb2dfY2FyZCB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG4uY29uc3VsdGF0aW9uIHtcbiAgYmFja2dyb3VuZDogIzU0NTRENDtcbn1cblxuLmJ0bi1zZWNvbmRhcnkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY4MTI1O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsZXR0ZXItc3BhY2luZzogMC4zMnB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-blog',
                templateUrl: './blog.component.html',
                styleUrls: ['./blog.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/body-jet/body-jet.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/body-jet/body-jet.component.ts ***!
  \******************************************************/
/*! exports provided: BodyJetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BodyJetComponent", function() { return BodyJetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lazy-img-directive.directive */ "./src/app/lazy-img-directive.directive.ts");
/* harmony import */ var _components_konsultacije_konsultacije_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/konsultacije/konsultacije.component */ "./src/app/components/konsultacije/konsultacije.component.ts");






class BodyJetComponent {
    constructor(metaTagService, title) {
        this.metaTagService = metaTagService;
        this.title = title;
    }
    ngOnInit() {
        this.metaTagService.addTags([
            { name: 'keywords', content: 'Protiv strujni podvodni masažeri – body jet služe za ugodnu masažu u vodi ili kao uređaj za plivanje u mestu.' },
            { name: 'robots', content: 'index, follow' },
            { name: 'author', content: 'Pool Service' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'date', content: '2021-02-01', scheme: 'YYYY-MM-DD' },
            { charset: 'UTF-8' }
        ]);
        this.title.setTitle("Body jet");
    }
}
BodyJetComponent.ɵfac = function BodyJetComponent_Factory(t) { return new (t || BodyJetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
BodyJetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BodyJetComponent, selectors: [["app-body-jet"]], decls: 16, vars: 0, consts: [[1, "container", "py-128"], [1, "row"], [1, "col-12", "text-center"], [1, "pb-5"], ["src", "assets/img/body-jet/body-jet.jpg", "alt", "Body jet", 1, "img-fluid"], [1, "pt-5"]], template: function BodyJetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Body Jet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Protiv strujni podvodni masa\u017Eeri \u2013 body jet slu\u017Ee za ugodnu masa\u017Eu u vodi ili kao ure\u0111aj za plivanje u mestu. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Isporu\u010Duju se kapaciteta od 25 m3/h do 75 m3/h. Mogu biti ugra\u0111eni u zid bazena ili ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " naknadno montirani sa spoljne strane bazena. Uklju\u010Duju i ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " isklju\u010Duju se sa pneumatskim prekidacem iz bazena. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-konsultacije");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_3__["LazyImgDirective"], _components_konsultacije_konsultacije_component__WEBPACK_IMPORTED_MODULE_4__["KonsultacijeComponent"]], styles: [".naslov__pading-top[_ngcontent-%COMP%] {\n  padding-top: 64px;\n  padding-bottom: 80px;\n}\n\n.btn[_ngcontent-%COMP%] {\n  background-color: #ff8125;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYm9keS1qZXQvRTpcXFByb2plY3RzXFxwb29sc2VydmljZVxccG9vbC1zZXJ2aWNlXFxhbmd1bGFyLXNyYy9zcmNcXGFwcFxccGFnZXNcXGJvZHktamV0XFxib2R5LWpldC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYm9keS1qZXQvYm9keS1qZXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxpQkFBQTtFQUNBLG9CQUFBO0FDQUo7O0FETUE7RUFDSSx5QkFBQTtBQ0hKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYm9keS1qZXQvYm9keS1qZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmFzbG92X19wYWRpbmctdG9wIHtcclxuXHJcbiAgICBwYWRkaW5nLXRvcDogNjRweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA4MHB4O1xyXG4gICAgXHJcbiAgIFxyXG59XHJcblxyXG5cclxuLmJ0biB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4MTI1O1xyXG59IiwiLm5hc2xvdl9fcGFkaW5nLXRvcCB7XG4gIHBhZGRpbmctdG9wOiA2NHB4O1xuICBwYWRkaW5nLWJvdHRvbTogODBweDtcbn1cblxuLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjgxMjU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BodyJetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-body-jet',
                templateUrl: './body-jet.component.html',
                styleUrls: ['./body-jet.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/cirkulacija-vode/cirkulacija-vode.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/cirkulacija-vode/cirkulacija-vode.component.ts ***!
  \**********************************************************************/
/*! exports provided: CirkulacijaVodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CirkulacijaVodeComponent", function() { return CirkulacijaVodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lazy-img-directive.directive */ "./src/app/lazy-img-directive.directive.ts");
/* harmony import */ var _components_konsultacije_konsultacije_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/konsultacije/konsultacije.component */ "./src/app/components/konsultacije/konsultacije.component.ts");






class CirkulacijaVodeComponent {
    constructor(metaTagService, title) {
        this.metaTagService = metaTagService;
        this.title = title;
    }
    ngOnInit() {
        this.metaTagService.addTags([
            { name: 'keywords', content: 'Skimeri ili prelivi uzimaju vodu iz bazena sa gornje površine koja je inače i najprljavija koja zatim odlazi na filtraciju.' },
            { name: 'robots', content: 'index, follow' },
            { name: 'author', content: 'Pool Service' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'date', content: '2021-02-01', scheme: 'YYYY-MM-DD' },
            { charset: 'UTF-8' }
        ]);
        this.title.setTitle("Cirkulacija vode");
    }
}
CirkulacijaVodeComponent.ɵfac = function CirkulacijaVodeComponent_Factory(t) { return new (t || CirkulacijaVodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
CirkulacijaVodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CirkulacijaVodeComponent, selectors: [["app-cirkulacija-vode"]], decls: 83, vars: 0, consts: [[1, "container", "my-128"], [1, "row"], [1, "col-12", "col-md-6"], [1, "plava"], [1, "col-12", "col-md-6", "pt-5"], [1, "col-12"], ["src", "assets/img/filtrianje-bazena/astral-logo.jpg", "alt", "logo cap", 1, "img-fluid", "mb-4", "mb-md-0"], [1, "col-12", "col-md-3"], [1, "col-5", "col-md-12"], ["src", "assets/img/cirkulacija-vode/betonski.jpg", "alt", "Card image cap", 1, "img-fluid"], [1, "col-7", "col-md-12"], [1, "naslov", "pt-2"], [1, ""], ["src", "assets/img/cirkulacija-vode/pvc.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/img/cirkulacija-vode/04.jpg", "alt", "Slivnik za bazene sa lajnerom", 1, "img-fluid"], ["src", "assets/img/cirkulacija-vode/07.jpg", "alt", "Rezervni delovi za skimere", 1, "img-fluid"], ["src", "assets/img/cirkulacija-vode/05.jpg", "alt", "Mlaznica za bazen sa lajnerom", 1, "img-fluid"]], template: function CirkulacijaVodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "DODATNA OPREMA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Cirkulacija vode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Skimeri ili prelivi uzimaju vodu iz bazena sa gornje povr\u0161ine koja je ina\u010De i najprljavija koja zatim odlazi na filtraciju. Kod betonskih bazena se ugradjuju u oplatu pre betoniranja a kod lajnerskih se ugradjuju. Isporu\u010Duju se sa vakum plo\u010Dom koja sluzi da bi se priklju\u010Dilo crevo za podvodno usisavanje.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "SKIMER Betonski Bazen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "SKIMER Betonski Bazen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Skimer 15L \u0161iroki BB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Skimer 17.5L dekorativ.platna BB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Skimer 17.5L du\u017Ei vrat BB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Skimer 17.5L kvadrat.polop BB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "SKIMER Lajner Bazen");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Skimer 15L kvadr.poklopac LB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Skimer 15L \u0160IROK kvadr.poklopac LB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, " Skimer 17.5 L \u0161iroki ulazni otvor LB ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Skimer 17.5 L du\u017Ei vrat LB");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "Slivnik za bazene sa lajnerom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, " Slivnik MINI za lajner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Slivnik fi 200 za lajner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "Rezervni delovi za skimere");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Klapna za skimer 15L");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " Klapna za skimer 17,5 L");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Korpa skimera 15L ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, " Korpa skimera 17,5 L");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](73, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "Mlaznica za bazen sa lajnerom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Mlaznica zidna za lajner ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "app-konsultacije");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_3__["LazyImgDirective"], _components_konsultacije_konsultacije_component__WEBPACK_IMPORTED_MODULE_4__["KonsultacijeComponent"]], styles: [".naslov__pading-top[_ngcontent-%COMP%] {\n  padding-top: 64px;\n  padding-bottom: 80px;\n}\n.naslov__pading-top[_ngcontent-%COMP%]   .plava[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 2px;\n  color: #175CFF;\n}\n.naslov[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 25px;\n}\np[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 17px;\n  line-height: 25px;\n}\n.img[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n}\n.btn[_ngcontent-%COMP%] {\n  background-color: #ff8125;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY2lya3VsYWNpamEtdm9kZS9FOlxcUHJvamVjdHNcXHBvb2xzZXJ2aWNlXFxwb29sLXNlcnZpY2VcXGFuZ3VsYXItc3JjL3NyY1xcYXBwXFxwYWdlc1xcY2lya3VsYWNpamEtdm9kZVxcY2lya3VsYWNpamEtdm9kZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY2lya3VsYWNpamEtdm9kZS9jaXJrdWxhY2lqYS12b2RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBQ0NGO0FEQ0U7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0NKO0FESUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0RGO0FESUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDREY7QURJQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDREY7QURJQTtFQUNFLHlCQUFBO0FDREYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9jaXJrdWxhY2lqYS12b2RlL2Npcmt1bGFjaWphLXZvZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmFzbG92X19wYWRpbmctdG9wIHtcclxuICBwYWRkaW5nLXRvcDogNjRweDtcclxuICBwYWRkaW5nLWJvdHRvbTogODBweDtcclxuXHJcbiAgLnBsYXZhIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgY29sb3I6ICMxNzVDRkY7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuLm5hc2xvdiB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDE3cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbi5pbWcge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4uYnRuIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4MTI1O1xyXG59XHJcbiIsIi5uYXNsb3ZfX3BhZGluZy10b3Age1xuICBwYWRkaW5nLXRvcDogNjRweDtcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XG59XG4ubmFzbG92X19wYWRpbmctdG9wIC5wbGF2YSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjb2xvcjogIzE3NUNGRjtcbn1cblxuLm5hc2xvdiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxuXG5wIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxuXG4uaW1nIHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwMHB4O1xufVxuXG4uYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODEyNTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CirkulacijaVodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-cirkulacija-vode',
                templateUrl: './cirkulacija-vode.component.html',
                styleUrls: ['./cirkulacija-vode.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lazy-img-directive.directive */ "./src/app/lazy-img-directive.directive.ts");
/* harmony import */ var _components_form_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/form/form.component */ "./src/app/components/form/form.component.ts");






class ContactComponent {
    constructor(metaTagService, title) {
        this.metaTagService = metaTagService;
        this.title = title;
    }
    ngOnInit() {
        this.metaTagService.addTags([
            { name: 'keywords', content: 'Stupite u kontakt, voleli bismo razgovarati o tome kako vam možemo pomoći' },
            { name: 'robots', content: 'index, follow' },
            { name: 'author', content: 'Pool Service' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'date', content: '2021-02-01', scheme: 'YYYY-MM-DD' },
            { charset: 'UTF-8' }
        ]);
        this.title.setTitle("Kontakt");
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 86, vars: 0, consts: [[1, "container", "padding-top_contact"], [1, "row"], [1, "col-12", "col-md-6", "mb-5", "mb-md-0"], [1, "col"], [1, "mb-5"], ["id", "contact-info", 1, "row", "align-items-center"], [1, "col-2"], [1, "icon", "icon_time"], ["src", "assets/img/icons/time.svg", "alt", ""], [1, "col-10"], [1, "mb-2", "font-weight-bold"], [1, "col", "col-md-5"], [1, "col", "col-md-7"], ["id", "contact-adresa", 1, "row", "align-items-center"], ["src", "assets/img/icons/address.svg", "alt", ""], [1, "col-10", "d-none", "d-md-block"], [1, "mb-0"], ["href", "mailto:infopoolservice@gmail.com"], ["href", "tel:+381216621200"], [1, "col-9", "d-block", "d-md-none"], [1, "col-12"], [1, "mb-3"], ["href", "tel:0216621200"], [1, "mb-4"], [1, "col-12", "col-md-6"], [1, "padding-top_maps"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.452235349429!2d19.83411361577871!3d45.25886835514143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b10434ee9e573%3A0xdcbd057b3db72794!2sPool%20Service!5e0!3m2!1sen!2srs!4v1595442556936!5m2!1sen!2srs", "width", "100%", "height", "500", "frameborder", "0", "allowfullscreen", "", "aria-hidden", "false", "tabindex", "0", 2, "border", "0"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Stupite u kontakt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Voleli bismo razgovarati o tome kako vam mo\u017Eemo pomo\u0107i");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Radno vreme");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Pon - Pet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Subota");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Nedelja");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "09:00 - 15:00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Neradna");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Neradna");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Adresa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "h5", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Kontakt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Novi Sad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " \u017Ditni Trg 13");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "infopoolservice@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "021 / 662 1200");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Adresa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Novi Sad");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " \u017Ditni Trg 13");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "h5", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Kontakt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "infopoolservice@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "021 / 662 1200");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](81, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](83, "app-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "iframe", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_3__["LazyImgDirective"], _components_form_form_component__WEBPACK_IMPORTED_MODULE_4__["FormComponent"]], styles: [".padding-top_maps[_ngcontent-%COMP%], .padding-top_contact[_ngcontent-%COMP%], .padding-top_pictures[_ngcontent-%COMP%], .page__footer[_ngcontent-%COMP%] {\n  margin-top: 128px;\n}\n\n.icon[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  border-radius: 10px;\n}\n\n#contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0.25em;\n  font-size: 18px;\n}\n\n#contact-images[_ngcontent-%COMP%] {\n  margin-bottom: 10rem;\n}\n\n.working-time.row[_ngcontent-%COMP%], .contact-info.row[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n}\n\n.working-time[_ngcontent-%COMP%] {\n  margin-bottom: 64px;\n}\n\n.working-time[_ngcontent-%COMP%]   .col-sm-2[_ngcontent-%COMP%] {\n  padding-left: 0px;\n}\n\n.working-time[_ngcontent-%COMP%]   .col-sm-2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.working-time[_ngcontent-%COMP%]   .col-sm-10[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  font-size: 26px;\n  margin-bottom: 24px;\n}\n\n.labels[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 18px;\n}\n\n.contact-info[_ngcontent-%COMP%]   .col-sm-2[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n.contact-info[_ngcontent-%COMP%]   .labels[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 26px;\n  margin-bottom: 24px;\n}\n\n.padding-top_maps[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  height: 500px;\n  width: 100%;\n  margin-bottom: -7px;\n}\n\n@media (max-width: 991.98px) {\n  .padding-top_maps[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n    box-shadow: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC9FOlxcUHJvamVjdHNcXHBvb2xzZXJ2aWNlXFxwb29sLXNlcnZpY2VcXGFuZ3VsYXItc3JjL3NyY1xcYXBwXFxwYWdlc1xcY29udGFjdFxcY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9jb250YWN0L0U6XFxQcm9qZWN0c1xccG9vbHNlcnZpY2VcXHBvb2wtc2VydmljZVxcYW5ndWxhci1zcmMvbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2JyZWFrcG9pbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBT0E7RUFDRSxpQkFBQTtBQ05GOztBRGFBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNWRjs7QURjRTtFQUNFLHFCQUFBO0VBQ0EsZUFBQTtBQ1hKOztBRGVBO0VBQ0Usb0JBQUE7QUNaRjs7QURlQTs7RUFFRSx5QkFBQTtBQ1pGOztBRGNBO0VBQ0UsbUJBQUE7QUNYRjs7QURhQTtFQUNJLGlCQUFBO0FDVko7O0FEWUE7RUFDSSxZQUFBO0FDVEo7O0FEWUE7RUFDSSxlQUFBO0VBQ0EsbUJBQUE7QUNUSjs7QURZQTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FDVEY7O0FEYUE7RUFDRSxlQUFBO0FDVkY7O0FEaUJBO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FDZEY7O0FEb0JFO0VBQ0UsYUFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQ2pCSjs7QUNjSTtFRkFGO0lBTUksMkJBQUE7RUNoQko7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zXCI7XHJcbkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Nzcy9jb2xvcnNcIjtcclxuXHJcblxyXG4vLyBQQURJTkcgUEFHRVxyXG4ucGFkZGluZy10b3BfbWFwcywgLnBhZGRpbmctdG9wX2NvbnRhY3QsIC5wYWRkaW5nLXRvcF9waWN0dXJlcywgLnBhZ2VfX2Zvb3RlciB7XHJcbiAgbWFyZ2luLXRvcDogMTI4cHg7XHJcbn1cclxuXHJcbi8vIENBUkQge1xyXG4vLyB9XHJcblxyXG4vLyBXT1JLIFRJTUUgQU5EIFNUUkVFVFxyXG4uaWNvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4jY29udGFjdC1pbmZvIHtcclxuICBwIHtcclxuICAgIG1hcmdpbi1ib3R0b206IC4yNWVtO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxufVxyXG5cclxuI2NvbnRhY3QtaW1hZ2VzIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHJlbTtcclxufVxyXG5cclxuLndvcmtpbmctdGltZS5yb3csXHJcbi5jb250YWN0LWluZm8ucm93IHtcclxuICBtYXJnaW4tbGVmdDogMCAhaW1wb3J0YW50O1xyXG59XHJcbi53b3JraW5nLXRpbWUge1xyXG4gIG1hcmdpbi1ib3R0b206IDY0cHg7XHJcbn1cclxuLndvcmtpbmctdGltZSAuY29sLXNtLTIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuLndvcmtpbmctdGltZSAuY29sLXNtLTIgPiBkaXYge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG5cclxufVxyXG4ud29ya2luZy10aW1lIC5jb2wtc20tMTAgPiBkaXY6Zmlyc3QtY2hpbGQge1xyXG4gICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjRweDtcclxufVxyXG5cclxuLmxhYmVscyBzcGFuIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDE4cHg7XHJcbn1cclxuXHJcblxyXG4uY29udGFjdC1pbmZvIC5jb2wtc20tMiB7XHJcbiAgcGFkZGluZy1sZWZ0OiAwO1xyXG59XHJcbi8vIC5jb250YWN0LWluZm8gLmNvbC1sZy0yID4gZGl2IHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzLCA5MiwgMjU1LCAuMDUpO1xyXG4vLyAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuLy8gICBoZWlnaHQ6IDEwMCU7XHJcbi8vIH1cclxuLmNvbnRhY3QtaW5mbyAubGFiZWxzIGRpdiB7XHJcbiAgZm9udC1zaXplOiAyNnB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbn1cclxuXHJcblxyXG5cclxuLnBhZGRpbmctdG9wX21hcHMge1xyXG4gIGlmcmFtZSB7XHJcbiAgICBoZWlnaHQ6IDUwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAtN3B4O1xyXG5cclxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihtZCkge1xyXG4gICAgICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5cclxuIiwiLnBhZGRpbmctdG9wX21hcHMsIC5wYWRkaW5nLXRvcF9jb250YWN0LCAucGFkZGluZy10b3BfcGljdHVyZXMsIC5wYWdlX19mb290ZXIge1xuICBtYXJnaW4tdG9wOiAxMjhweDtcbn1cblxuLmljb24ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cblxuI2NvbnRhY3QtaW5mbyBwIHtcbiAgbWFyZ2luLWJvdHRvbTogMC4yNWVtO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbiNjb250YWN0LWltYWdlcyB7XG4gIG1hcmdpbi1ib3R0b206IDEwcmVtO1xufVxuXG4ud29ya2luZy10aW1lLnJvdyxcbi5jb250YWN0LWluZm8ucm93IHtcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcbn1cblxuLndvcmtpbmctdGltZSB7XG4gIG1hcmdpbi1ib3R0b206IDY0cHg7XG59XG5cbi53b3JraW5nLXRpbWUgLmNvbC1zbS0yIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbi53b3JraW5nLXRpbWUgLmNvbC1zbS0yID4gZGl2IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4ud29ya2luZy10aW1lIC5jb2wtc20tMTAgPiBkaXY6Zmlyc3QtY2hpbGQge1xuICBmb250LXNpemU6IDI2cHg7XG4gIG1hcmdpbi1ib3R0b206IDI0cHg7XG59XG5cbi5sYWJlbHMgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXNpemU6IDE4cHg7XG59XG5cbi5jb250YWN0LWluZm8gLmNvbC1zbS0yIHtcbiAgcGFkZGluZy1sZWZ0OiAwO1xufVxuXG4uY29udGFjdC1pbmZvIC5sYWJlbHMgZGl2IHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4ucGFkZGluZy10b3BfbWFwcyBpZnJhbWUge1xuICBoZWlnaHQ6IDUwMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogLTdweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xuICAucGFkZGluZy10b3BfbWFwcyBpZnJhbWUge1xuICAgIGJveC1zaGFkb3c6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxufSIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/dodatna-oprema/dodatna-oprema.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pages/dodatna-oprema/dodatna-oprema.component.ts ***!
  \******************************************************************/
/*! exports provided: DodatnaOpremaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DodatnaOpremaComponent", function() { return DodatnaOpremaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lazy-img-directive.directive */ "./src/app/lazy-img-directive.directive.ts");
/* harmony import */ var _components_konsultacije_konsultacije_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/konsultacije/konsultacije.component */ "./src/app/components/konsultacije/konsultacije.component.ts");







const _c0 = function () { return ["filtrianje-vode"]; };
const _c1 = function () { return ["cirkulacija-vode"]; };
const _c2 = function () { return ["sredstva-za-odrzavanje-bazena"]; };
const _c3 = function () { return ["mozaik-folije"]; };
const _c4 = function () { return ["osvetljenje"]; };
const _c5 = function () { return ["stepenice"]; };
const _c6 = function () { return ["usisivaci"]; };
const _c7 = function () { return ["body-jet"]; };
class DodatnaOpremaComponent {
    constructor(metaTagService, title) {
        this.metaTagService = metaTagService;
        this.title = title;
    }
    ngOnInit() {
        this.metaTagService.addTags([
            { name: 'keywords', content: 'Dodatna oprema za Vaše bazene' },
            { name: 'robots', content: 'index, follow' },
            { name: 'author', content: 'Pool Service' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'date', content: '2021-02-01', scheme: 'YYYY-MM-DD' },
            { charset: 'UTF-8' }
        ]);
        this.title.setTitle("Dodatna oprema");
    }
}
DodatnaOpremaComponent.ɵfac = function DodatnaOpremaComponent_Factory(t) { return new (t || DodatnaOpremaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
DodatnaOpremaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DodatnaOpremaComponent, selectors: [["app-dodatna-oprema"]], decls: 106, vars: 16, consts: [[1, "container", "mt-128", "mb-64"], [1, "row"], [1, "col-12", "text-center"], [1, "container", "oprema", "mb-128"], [1, "col-12", "col-md-6", "pb-5"], [1, "card", "p-2", "pl-md-4", "pr-md-4", "pt-md-5", "pb-md-5", "border-0", "bg-light"], [1, "row", "no-gutters", "my-auto", "align-items-center"], [1, "col-12", "col-md-6"], [1, "card-body"], [3, "routerLink"], ["src", "assets/img/dodatna-oprema/slika-1.png", "alt", "Pumpa bazena", 1, "img-fluid", "p-4", "p-md-0"], ["src", "assets/img/dodatna-oprema/slika-2.png", "alt", "Cirkulacija vode", 1, "img-fluid"], ["src", "assets/img/dodatna-oprema/sredstva.jpg", "alt", "Sredstva za odr\u017Eavanje vode", 1, "img-fluid", "p-4", "p-md-0"], ["src", "assets/img/dodatna-oprema/slika-4.png", "alt", "Dizajn podloge", 1, "img-fluid", "p-4", "p-md-0"], ["src", "assets/img/dodatna-oprema/slika-3.png", "alt", "Osvetljenje sijalice za bazene", 1, "img-fluid", "p-4", "p-md-0"], ["src", "assets/img/dodatna-oprema/01.png", "alt", "Stepenice", 1, "img-fluid", "p-4", "p-md-0"], [1, "card-title"], ["src", "assets/img/dodatna-oprema/usisivaci.jpg", "alt", "Usisiva\u010Di", 1, "img-fluid", "p-4", "p-md-0"], ["src", "assets/img/dodatna-oprema/body-jet.jpg", "alt", "Body Jet", 1, "img-fluid", "p-4", "p-md-0"]], template: function DodatnaOpremaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Dodatna Oprema");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Filtriranje vode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "pumpe i filteri");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Pogledajte ponudu >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Cirkulacija vode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "skimeri, mlaznice, slivnik, prelivne re\u0161etke");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Pogledajte ponudu >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Sredstva za odr\u017Eavanje vode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Pogledajte ponudu >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Dizajn podloge");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Mozaik i pvc folije");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Pogledajte ponudu >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Osvetljenje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Reflektori halogen i led");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, "Pogledajte ponudu >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](71, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Stepenice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "Pogledajte ponudu >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](82, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "h5", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Usisiva\u010Di");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Pogledajte ponudu >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "h5", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Body Jet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Pogledajte ponudu >");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](105, "app-konsultacije");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c7));
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_4__["LazyImgDirective"], _components_konsultacije_konsultacije_component__WEBPACK_IMPORTED_MODULE_5__["KonsultacijeComponent"]], styles: [".oprema[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  height: 304px;\n  box-shadow: 0 0 0 #000;\n}\n@media (max-width: 991.98px) {\n  .oprema[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n.oprema[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  letter-spacing: 0;\n}\n.oprema[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 24px;\n}\n.oprema[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 15px;\n  line-height: 20px;\n}\n.oprema[_ngcontent-%COMP%]   .background-color[_ngcontent-%COMP%] {\n  background-color: #E9F7FE;\n}\n#oprema__padding-bottom[_ngcontent-%COMP%] {\n  padding-bottom: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZG9kYXRuYS1vcHJlbWEvRTpcXFByb2plY3RzXFxwb29sc2VydmljZVxccG9vbC1zZXJ2aWNlXFxhbmd1bGFyLXNyYy9zcmNcXGFwcFxccGFnZXNcXGRvZGF0bmEtb3ByZW1hXFxkb2RhdG5hLW9wcmVtYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZG9kYXRuYS1vcHJlbWEvZG9kYXRuYS1vcHJlbWEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2RvZGF0bmEtb3ByZW1hL0U6XFxQcm9qZWN0c1xccG9vbHNlcnZpY2VcXHBvb2wtc2VydmljZVxcYW5ndWxhci1zcmMvbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2JyZWFrcG9pbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUU7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7QUNMSjtBQ3NFSTtFRm5FRjtJQUlJLFlBQUE7RUNISjtBQUNGO0FET0k7RUFDRSxpQkFBQTtBQ0xOO0FEU0U7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDUEo7QURVRTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNSSjtBRFlFO0VBQ0UseUJBQUE7QUNWSjtBRGVBO0VBQ0Usb0JBQUE7QUNaRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RvZGF0bmEtb3ByZW1hL2RvZGF0bmEtb3ByZW1hLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnNcIjtcclxuQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnNcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbG9yc1wiO1xyXG5cclxuLm9wcmVtYSB7XHJcbiAgLmNhcmQge1xyXG4gICAgaGVpZ2h0OiAzMDRweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAwICMwMDA7XHJcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24obWQpIHtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNhcmQtYm9keSB7XHJcbiAgICBhIHtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBoNSB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDIwcHg7XHJcbiAgfVxyXG5cclxuXHJcbiAgLmJhY2tncm91bmQtY29sb3Ige1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0U5RjdGRTtcclxuXHJcbiAgfVxyXG59XHJcblxyXG4jb3ByZW1hX19wYWRkaW5nLWJvdHRvbSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDY0cHg7XHJcbn1cclxuIiwiLm9wcmVtYSAuY2FyZCB7XG4gIGhlaWdodDogMzA0cHg7XG4gIGJveC1zaGFkb3c6IDAgMCAwICMwMDA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgLm9wcmVtYSAuY2FyZCB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICB9XG59XG4ub3ByZW1hIC5jYXJkLWJvZHkgYSB7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xufVxuLm9wcmVtYSBoNSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG59XG4ub3ByZW1hIHAge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG59XG4ub3ByZW1hIC5iYWNrZ3JvdW5kLWNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U5RjdGRTtcbn1cblxuI29wcmVtYV9fcGFkZGluZy1ib3R0b20ge1xuICBwYWRkaW5nLWJvdHRvbTogNjRweDtcbn0iLCIvLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuICE9IG51bGwgYW5kICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIGxhcmdlc3QgKGxhc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyBjYWxjdWxhdGVkIGFzIHRoZSBtaW5pbXVtIG9mIHRoZSBuZXh0IG9uZSBsZXNzIDAuMDJweFxuLy8gdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gLjAyLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DodatnaOpremaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dodatna-oprema',
                templateUrl: './dodatna-oprema.component.html',
                styleUrls: ['./dodatna-oprema.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/faq/faq.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/faq/faq.component.ts ***!
  \********************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lazy-img-directive.directive */ "./src/app/lazy-img-directive.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_ponuda_ponuda_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ponuda/ponuda.component */ "./src/app/components/ponuda/ponuda.component.ts");
/* harmony import */ var _components_konsultacije_konsultacije_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/konsultacije/konsultacije.component */ "./src/app/components/konsultacije/konsultacije.component.ts");








function FaqComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u0160ta su bazeni sa lajnerom? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " To su bazeni koji su oblo\u017Eeni PVC lajnerom koji dr\u017Ei vodonepropusnost. Dele se na Future pool polumonta\u017Ene bazene koji su odre\u0111enih dimenzija za brzu gradnju i bazene gde se lajner vari po \u017Eelji u razli\u010Ditim oblicima i dimenzijama. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Koje dubine mogu biti Future Pool bazeni? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Future Pool bazeni mogu biti dubine 1,5m i 1,2m. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u010Cime sve mogu betonski bazeni da se oblo\u017Ee? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Betonski bazeni su uglavnom oblo\u017Eeni kerami\u010Dkim plo\u010Dicama. U novije vreme je sve vi\u0161e zastupljeno oblaganje staklenim mozaik plo\u010Dicama raznih dezena, bordura i slika. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h5", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Koji su uslovi najpogodniji za izradu bazena? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Vremenska temperatura u rasponu od 20 do 25 stepeni. Tako\u0111e, bitno je da vreme nije ki\u0161ovito, da nema mraza, snega i jakih vetrova. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FaqComponent_div_40_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Koliko treba da mi je jaka pumpa?");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Ja\u010Dina pumpe se odre\u0111uje spram kubika\u017Ee vode i namene bazena (privatna ili javna upotreba). ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Koliko dugo treba da radi pumpa? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Preporu\u010Duje se minmalno vreme rada od 8 do 12 sati dnevno, a tokom letnjeg perioda i do 24 sata ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u0160ta mi je sve potrebno od hemije za bazen? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Naj\u010De\u0161\u0107e kori\u0161\u0107en tretman je dezinfecija hlorom. I to sa hlornim spororastopljivim tabletama i hlornim granulatom.Pored toga pH vrednost vode treba da bude izme\u0111u 7.2 i 7.4 \u0161to uz pomo\u0107 testera merimo i reguli\u0161emo sredstvima za smanjenje ili pove\u0107anje iste. Algicid je sredstvo protiv algi koje se dozira periodi\u010Dno. Sva sredstva se doziraju prema kubika\u017Ei vode ubazena. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function FaqComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Za\u0161to je pH vrednost va\u017Ena? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Da bi hlor odradio svoju puno dezinfeciju, neophodna je pH vrednost izme\u0111u 7.2 i 7.4. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Da li mogu hlornu tabletu da bacim u bazen? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Hlor je agresivan za bazena oblo\u017Eene lajnerom i moze lajner da izbeli ili nagrize. Hlor u tabletama se dr\u017Ei u plutaju\u0107im dozerima. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h5", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " \u0160ta je \"\u0160ok hlor\"? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " To je hlor koji ima trenuta\u010Dno dejstvo i slu\u017Ei za le\u010Denje vode. Hlorni granulat se pre doziranja rastvori u kanti sa vodom i najbolje ga je dozirati uve\u010De kada nema sunca i kupa\u010Da. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "h5", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Koje vrste dezinfekcije vode postoje? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Postoje razne vrste: klasi\u010Dnim Hlorom, te\u010Dnim Hlorom, Elektrolizom i Vodonikperoksidom. Uz te metode dezinfekcije potpoma\u017Ee i UV lampa. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h5", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Da li izosolarni pokriva\u010D \u0161titi bazen od prljav\u0161tine? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " Ne \u0161tite, njihova primarna funkcija je da zadr\u017Ei toplotu, spre\u010Di isparavanje vode i poma\u017Ee u zagrevanju vode. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h5", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Da li postoji usluga odr\u017Eavanja bazena na nedeljnom nivou? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Da. Pool Service jedini nudi uslugu odr\u017Eavanja bazena na nedeljnom nivou. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "h5", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, " \u0160ta sve odr\u017Eavanje bazena obuhvata? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Da. Pool Service jedini nudi uslugu odr\u017Eavanja bazena na nedeljnom nivou. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "h5", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " \u0160ta odr\u017Eavanje bazena ne uklju\u010Duje? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " \u010Ci\u0161\u0107enje pla\u017Ee, odnosno okoline bazena. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class FaqComponent {
    constructor(metaTagService, title) {
        this.metaTagService = metaTagService;
        this.title = title;
        this.viewMode = 'bazeni';
    }
    ngOnInit() {
        this.metaTagService.addTags([
            { name: 'keywords', content: 'Najčešća postavljana pitanja' },
            { name: 'robots', content: 'index, follow' },
            { name: 'author', content: 'Pool Service' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'date', content: '2021-02-01', scheme: 'YYYY-MM-DD' },
            { charset: 'UTF-8' }
        ]);
        this.title.setTitle("Ucestala pitanja");
    }
}
FaqComponent.ɵfac = function FaqComponent_Factory(t) { return new (t || FaqComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
FaqComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FaqComponent, selectors: [["app-faq"]], decls: 44, vars: 10, consts: [[1, "container", "mt-128", "mb-64"], [1, "row"], [1, "col-12", "text-center"], [1, "d-none", "d-md-block"], [1, "d-block", "d-md-none"], [2, "background-color", "#17154B"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-12", "py-64"], [1, "col-12", "col-md-3"], [3, "click"], [1, "card", "mt-2", "mt-md-0"], [1, "card-body", "text-center"], [1, "mt-2", "mb-3", "text-center", "d-none", "d-sm-inline-block"], ["src", "assets/img/FAQ/bazeni.svg", "alt", "kapljica-vode"], [1, "font-weight-bold"], ["src", "assets/img/FAQ/dodatna-oprema.svg", "alt", "dodatna oprema"], ["src", "assets/img/FAQ/odrzavanje.svg", "alt", "odrzavanje"], [1, "col-12"], [3, "ngSwitch"], ["class", "container inside-background_container", 4, "ngSwitchCase"], [1, "container", "inside-background_container"], ["id", "accordionExample", 1, "accordion"], [1, "card", "my-3"], ["id", "headingOne", "data-toggle", "collapse", "data-target", "#collapseOne", "aria-expanded", "true", "aria-controls", "collapseOne", 1, "card-header"], [1, "mb-0", "pt-3", "pb-3", "font-weight-bold"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-parent", "#accordionExample", 1, "collapse", "show"], [1, "card-body"], ["id", "headingTwo", "data-toggle", "collapse", "data-target", "#collapseTwo", "aria-expanded", "false", "aria-controls", "collapseTwo", 1, "card-header"], ["id", "collapseTwo", "aria-labelledby", "headingTwo", "data-parent", "#accordionExample", 1, "collapse"], ["id", "headingThree", "data-toggle", "collapse", "data-target", "#collapseThree", "aria-expanded", "false", "aria-controls", "collapseThree", 1, "card-header"], ["id", "collapseThree", "aria-labelledby", "headingThree", "data-parent", "#accordionExample", 1, "collapse"], [1, "card"], ["id", "headingFour", "data-toggle", "collapse", "data-target", "#collapseFour", "aria-expanded", "false", "aria-controls", "collapseFour", 1, "card-header"], ["id", "collapseFour", "aria-labelledby", "headingFour", "data-parent", "#accordionExample", 1, "collapse"], ["id", "headingThree", "data-toggle", "collapse", "data-target", "#collapseFour", "aria-expanded", "false", "aria-controls", "collapseFour", 1, "card-header"], [1, "mb-0", "pb-3", "pt-3", "font-weight-bold"], ["id", "headingFour", "data-toggle", "collapse", "data-target", "#collapseFive", "aria-expanded", "false", "aria-controls", "collapseFive", 1, "card-header"], ["id", "collapseFive", "aria-labelledby", "headingFive", "data-parent", "#accordionExample", 1, "collapse"], ["id", "headingFive", "data-toggle", "collapse", "data-target", "#collapseSix", "aria-expanded", "false", "aria-controls", "collapseSix", 1, "card-header"], ["id", "collapseSix", "aria-labelledby", "headingSix", "data-parent", "#accordionExample", 1, "collapse"], ["id", "headingSix", "data-toggle", "collapse", "data-target", "#collapseSeven", "aria-expanded", "false", "aria-controls", "collapseSeven", 1, "card-header"], ["id", "collapseSeven", "aria-labelledby", "headingSeven", "data-parent", "#accordionExample", 1, "collapse"], ["id", "headingSeven", "data-toggle", "collapse", "data-target", "#collapseEight", "aria-expanded", "false", "aria-controls", "collapseEight", 1, "card-header"], ["id", "collapseEight", "aria-labelledby", "headingEight", "data-parent", "#accordionExample", 1, "collapse"]], template: function FaqComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Naj\u010De\u0161\u0107a postavljana pitanja");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Naj\u010De\u0161\u0107a postavljana pitanja");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FaqComponent_Template_a_click_14_listener() { return ctx.viewMode = "bazeni"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Bazeni");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FaqComponent_Template_a_click_22_listener() { return ctx.viewMode = "dodatna"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Dodatna oprema");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FaqComponent_Template_a_click_30_listener() { return ctx.viewMode = "odrzavanje"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h5", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Odr\u017Eavanje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, FaqComponent_div_39_Template, 30, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, FaqComponent_div_40_Template, 23, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, FaqComponent_div_41_Template, 63, 0, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "app-ponuda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "app-konsultacije");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.viewMode == "bazeni");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.viewMode == "dodatna");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.viewMode == "odrzavanje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.viewMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "bazeni");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "dodatna");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "odrzavanje");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_3__["LazyImgDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchCase"], _components_ponuda_ponuda_component__WEBPACK_IMPORTED_MODULE_5__["PonudaComponent"], _components_konsultacije_konsultacije_component__WEBPACK_IMPORTED_MODULE_6__["KonsultacijeComponent"]], styles: ["body[_nghost-%COMP%], body   [_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n  width: 100%;\n}\n\n.header-padding-top__container[_ngcontent-%COMP%] {\n  padding-top: 128px;\n}\n\n.active[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: #e9f7fe;\n}\n\n.inside-background_container[_ngcontent-%COMP%] {\n  padding-bottom: 100px;\n}\n\n.inside-background_container[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  box-shadow: 0px 20px 40px rgba(3, 0, 77, 0.04);\n  border-radius: 8px;\n  color: #FFFFFF;\n  background-color: transparent !important;\n}\n\n.inside-background_container[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n}\n\n.inside-background_container[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.4) !important;\n}\n\n.inside-background_container[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  font-size: 20px;\n  line-height: 24px;\n  letter-spacing: 0.2px;\n}\n\n.inside-background_container[_ngcontent-%COMP%]   .accordion[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 32px;\n  height: 32px;\n}\n\n.cards-zIndex_container[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  background-color: #e9f7fe;\n}\n\n.cards-zIndex_container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  height: 192px;\n  background: #FFFFFF;\n  box-sizing: border-box;\n}\n\n@media (max-width: 767.98px) {\n  .cards-zIndex_container[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n    height: auto;\n  }\n}\n\n.padding-top__cards[_ngcontent-%COMP%] {\n  padding-top: 128px;\n  padding-bottom: 128px;\n}\n\n.padding-top__cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);\n  border-radius: 8px;\n  width: 16.56rem;\n  height: 15rem;\n}\n\n.padding-top__cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]:hover {\n  transform: scale(1.1);\n}\n\n.header__padding-top[_ngcontent-%COMP%] {\n  padding-top: 128px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmFxL0U6XFxQcm9qZWN0c1xccG9vbHNlcnZpY2VcXHBvb2wtc2VydmljZVxcYW5ndWxhci1zcmMvc3JjXFxhcHBcXHBhZ2VzXFxmYXFcXGZhcS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZmFxL2ZhcS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZmFxL0U6XFxQcm9qZWN0c1xccG9vbHNlcnZpY2VcXHBvb2wtc2VydmljZVxcYW5ndWxhci1zcmMvbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2JyZWFrcG9pbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUNKRjs7QURVQTtFQUNFLGtCQUFBO0FDUEY7O0FEV0U7RUFDRSx5QkFBQTtBQ1JKOztBRFlBO0VBQ0UscUJBQUE7QUNURjs7QURZSTtFQUNFLDhDQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esd0NBQUE7QUNWTjs7QURhUTtFQUNFLGNBQUE7QUNYVjs7QURlTTtFQUNFLCtDQUFBO0FDYlI7O0FEZVE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxxQkFBQTtBQ2RWOztBRGlCUTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDZlY7O0FEMEJJO0VBQ0UseUJBQUE7QUN2Qk47O0FEMkJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUN6Qko7O0FDMkJJO0VGTEY7SUFNSSxZQUFBO0VDeEJKO0FBQ0Y7O0FEK0JBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtBQzVCRjs7QUQ4QkU7RUFDRSwrR0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUM1Qko7O0FEK0JFO0VBQ0UscUJBQUE7QUM3Qko7O0FEaUNBO0VBQ0Usa0JBQUE7QUM5QkYiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9mYXEvZmFxLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnNcIjtcclxuQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnNcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbG9yc1wiO1xyXG5cclxuOmhvc3QtY29udGV4dChib2R5KSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5cclxufVxyXG5cclxuXHJcbi8vIEhFQURFUlxyXG4uaGVhZGVyLXBhZGRpbmctdG9wX19jb250YWluZXIge1xyXG4gIHBhZGRpbmctdG9wOiAxMjhweDtcclxufVxyXG5cclxuLmFjdGl2ZSB7XHJcbiAgLmNhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZjdmZTtcclxuICB9XHJcbn1cclxuXHJcbi5pbnNpZGUtYmFja2dyb3VuZF9jb250YWluZXIge1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcclxuXHJcbiAgLmFjY29yZGlvbiB7XHJcbiAgICAuY2FyZCB7XHJcbiAgICAgIGJveC1zaGFkb3c6IDBweCAyMHB4IDQwcHggcmdiYSgzLCAwLCA3NywgMC4wNCk7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDhweDtcclxuICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcblxyXG4gICAgICAuY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIC5idG4ge1xyXG4gICAgICAgICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAuY2FyZC1oZWFkZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KSAhaW1wb3J0YW50O1xyXG5cclxuICAgICAgICBoNSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuXHJcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgd2lkdGg6IDMycHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDMycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY2FyZHMtekluZGV4X2NvbnRhaW5lciB7XHJcblxyXG4gIC5hY3RpdmUge1xyXG5cclxuICAgIC5jYXJkIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZjdmZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5jYXJkIHtcclxuICAgIGhlaWdodDogMTkycHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHJcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oc20pIHtcclxuICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuXHJcbi8vIENBUkRTXHJcblxyXG4ucGFkZGluZy10b3BfX2NhcmRzIHtcclxuICBwYWRkaW5nLXRvcDogMTI4cHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEyOHB4O1xyXG5cclxuICAuY2FyZCB7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMTZweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC4wNiksIDBweCAycHggNnB4IHJnYmEoMCwgMCwgMCwgMC4wNCksIDBweCAwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICB3aWR0aDogMTYuNTZyZW07XHJcbiAgICBoZWlnaHQ6IDE1cmVtO1xyXG4gIH1cclxuXHJcbiAgLmNhcmQ6aG92ZXIge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xyXG4gIH1cclxufVxyXG5cclxuLmhlYWRlcl9fcGFkZGluZy10b3Age1xyXG4gIHBhZGRpbmctdG9wOiAxMjhweDtcclxufVxyXG5cclxuXHJcbiIsIjpob3N0LWNvbnRleHQoYm9keSkge1xuICBkaXNwbGF5OiBibG9jaztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmhlYWRlci1wYWRkaW5nLXRvcF9fY29udGFpbmVyIHtcbiAgcGFkZGluZy10b3A6IDEyOHB4O1xufVxuXG4uYWN0aXZlIC5jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZjdmZTtcbn1cblxuLmluc2lkZS1iYWNrZ3JvdW5kX2NvbnRhaW5lciB7XG4gIHBhZGRpbmctYm90dG9tOiAxMDBweDtcbn1cbi5pbnNpZGUtYmFja2dyb3VuZF9jb250YWluZXIgLmFjY29yZGlvbiAuY2FyZCB7XG4gIGJveC1zaGFkb3c6IDBweCAyMHB4IDQwcHggcmdiYSgzLCAwLCA3NywgMC4wNCk7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgY29sb3I6ICNGRkZGRkY7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG59XG4uaW5zaWRlLWJhY2tncm91bmRfY29udGFpbmVyIC5hY2NvcmRpb24gLmNhcmQgLmNhcmQtaGVhZGVyIC5idG4ge1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi5pbnNpZGUtYmFja2dyb3VuZF9jb250YWluZXIgLmFjY29yZGlvbiAuY2FyZCAuY2FyZC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNCkgIWltcG9ydGFudDtcbn1cbi5pbnNpZGUtYmFja2dyb3VuZF9jb250YWluZXIgLmFjY29yZGlvbiAuY2FyZCAuY2FyZC1oZWFkZXIgaDUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG59XG4uaW5zaWRlLWJhY2tncm91bmRfY29udGFpbmVyIC5hY2NvcmRpb24gLmNhcmQgLmNhcmQtaGVhZGVyIGltZyB7XG4gIHdpZHRoOiAzMnB4O1xuICBoZWlnaHQ6IDMycHg7XG59XG5cbi5jYXJkcy16SW5kZXhfY29udGFpbmVyIC5hY3RpdmUgLmNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlmN2ZlO1xufVxuLmNhcmRzLXpJbmRleF9jb250YWluZXIgLmNhcmQge1xuICBoZWlnaHQ6IDE5MnB4O1xuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gIC5jYXJkcy16SW5kZXhfY29udGFpbmVyIC5jYXJkIHtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbn1cblxuLnBhZGRpbmctdG9wX19jYXJkcyB7XG4gIHBhZGRpbmctdG9wOiAxMjhweDtcbiAgcGFkZGluZy1ib3R0b206IDEyOHB4O1xufVxuLnBhZGRpbmctdG9wX19jYXJkcyAuY2FyZCB7XG4gIGJveC1zaGFkb3c6IDBweCAxNnB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjA2KSwgMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgMHB4IDBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICB3aWR0aDogMTYuNTZyZW07XG4gIGhlaWdodDogMTVyZW07XG59XG4ucGFkZGluZy10b3BfX2NhcmRzIC5jYXJkOmhvdmVyIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xufVxuXG4uaGVhZGVyX19wYWRkaW5nLXRvcCB7XG4gIHBhZGRpbmctdG9wOiAxMjhweDtcbn0iLCIvLyBCcmVha3BvaW50IHZpZXdwb3J0IHNpemVzIGFuZCBtZWRpYSBxdWVyaWVzLlxuLy9cbi8vIEJyZWFrcG9pbnRzIGFyZSBkZWZpbmVkIGFzIGEgbWFwIG9mIChuYW1lOiBtaW5pbXVtIHdpZHRoKSwgb3JkZXIgZnJvbSBzbWFsbCB0byBsYXJnZTpcbi8vXG4vLyAgICAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpXG4vL1xuLy8gVGhlIG1hcCBkZWZpbmVkIGluIHRoZSBgJGdyaWQtYnJlYWtwb2ludHNgIGdsb2JhbCB2YXJpYWJsZSBpcyB1c2VkIGFzIHRoZSBgJGJyZWFrcG9pbnRzYCBhcmd1bWVudCBieSBkZWZhdWx0LlxuXG4vLyBOYW1lIG9mIHRoZSBuZXh0IGJyZWFrcG9pbnQsIG9yIG51bGwgZm9yIHRoZSBsYXN0IGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICRicmVha3BvaW50LW5hbWVzOiAoeHMgc20gbWQgbGcgeGwpKVxuLy8gICAgbWRcbkBmdW5jdGlvbiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMsICRicmVha3BvaW50LW5hbWVzOiBtYXAta2V5cygkYnJlYWtwb2ludHMpKSB7XG4gICRuOiBpbmRleCgkYnJlYWtwb2ludC1uYW1lcywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRuICE9IG51bGwgYW5kICRuIDwgbGVuZ3RoKCRicmVha3BvaW50LW5hbWVzKSwgbnRoKCRicmVha3BvaW50LW5hbWVzLCAkbiArIDEpLCBudWxsKTtcbn1cblxuLy8gTWluaW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgc21hbGxlc3QgKGZpcnN0KSBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWluKHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNTc2cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJG5hbWUpO1xuICBAcmV0dXJuIGlmKCRtaW4gIT0gMCwgJG1pbiwgbnVsbCk7XG59XG5cbi8vIE1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIGxhcmdlc3QgKGxhc3QpIGJyZWFrcG9pbnQuXG4vLyBUaGUgbWF4aW11bSB2YWx1ZSBpcyBjYWxjdWxhdGVkIGFzIHRoZSBtaW5pbXVtIG9mIHRoZSBuZXh0IG9uZSBsZXNzIDAuMDJweFxuLy8gdG8gd29yayBhcm91bmQgdGhlIGxpbWl0YXRpb25zIG9mIGBtaW4tYCBhbmQgYG1heC1gIHByZWZpeGVzIGFuZCB2aWV3cG9ydHMgd2l0aCBmcmFjdGlvbmFsIHdpZHRocy5cbi8vIFNlZSBodHRwczovL3d3dy53My5vcmcvVFIvbWVkaWFxdWVyaWVzLTQvI21xLW1pbi1tYXhcbi8vIFVzZXMgMC4wMnB4IHJhdGhlciB0aGFuIDAuMDFweCB0byB3b3JrIGFyb3VuZCBhIGN1cnJlbnQgcm91bmRpbmcgYnVnIGluIFNhZmFyaS5cbi8vIFNlZSBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTc4MjYxXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1tYXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA3NjcuOThweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRuZXh0OiBicmVha3BvaW50LW5leHQoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEByZXR1cm4gaWYoJG5leHQsIGJyZWFrcG9pbnQtbWluKCRuZXh0LCAkYnJlYWtwb2ludHMpIC0gLjAyLCBudWxsKTtcbn1cblxuLy8gUmV0dXJucyBhIGJsYW5rIHN0cmluZyBpZiBzbWFsbGVzdCBicmVha3BvaW50LCBvdGhlcndpc2UgcmV0dXJucyB0aGUgbmFtZSB3aXRoIGEgZGFzaCBpbiBmcm9udC5cbi8vIFVzZWZ1bCBmb3IgbWFraW5nIHJlc3BvbnNpdmUgdXRpbGl0aWVzLlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoeHMsICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIlwiICAoUmV0dXJucyBhIGJsYW5rIHN0cmluZylcbi8vICAgID4+IGJyZWFrcG9pbnQtaW5maXgoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBcIi1zbVwiXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1pbmZpeCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICBAcmV0dXJuIGlmKGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpID09IG51bGwsIFwiXCIsIFwiLSN7JG5hbWV9XCIpO1xufVxuXG4vLyBNZWRpYSBvZiBhdCBsZWFzdCB0aGUgbWluaW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIHdpZGVyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWluIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSBvZiBhdCBtb3N0IHRoZSBtYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgbGFyZ2VzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG4gIEBpZiAkbWF4IHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG4vLyBNZWRpYSB0aGF0IHNwYW5zIG11bHRpcGxlIGJyZWFrcG9pbnQgd2lkdGhzLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IGJldHdlZW4gdGhlIG1pbiBhbmQgbWF4IGJyZWFrcG9pbnRzXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRsb3dlciwgJHVwcGVyLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRsb3dlciwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJHVwcGVyLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRsb3dlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJHVwcGVyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuXG4vLyBNZWRpYSBiZXR3ZWVuIHRoZSBicmVha3BvaW50J3MgbWluaW11bSBhbmQgbWF4aW11bSB3aWR0aHMuXG4vLyBObyBtaW5pbXVtIGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludCwgYW5kIG5vIG1heGltdW0gZm9yIHRoZSBsYXJnZXN0IG9uZS5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBvbmx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50LCBub3Qgdmlld3BvcnRzIGFueSB3aWRlciBvciBuYXJyb3dlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LW9ubHkoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuXG4gIEBpZiAkbWluICE9IG51bGwgYW5kICRtYXggIT0gbnVsbCB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIGFuZCAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1heCA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-faq',
                templateUrl: './faq.component.html',
                styleUrls: ['./faq.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/filtriranje-vode/filtriranje-vode.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/filtriranje-vode/filtriranje-vode.component.ts ***!
  \**********************************************************************/
/*! exports provided: FiltriranjeVodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltriranjeVodeComponent", function() { return FiltriranjeVodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lazy-img-directive.directive */ "./src/app/lazy-img-directive.directive.ts");
/* harmony import */ var _components_konsultacije_konsultacije_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/konsultacije/konsultacije.component */ "./src/app/components/konsultacije/konsultacije.component.ts");






class FiltriranjeVodeComponent {
    constructor(metaTagService, title) {
        this.metaTagService = metaTagService;
        this.title = title;
    }
    ngOnInit() {
        this.metaTagService.addTags([
            { name: 'keywords', content: 'Peščani Filteri i Pumpe služe za filtriranje bazenske vode. Oni omogućavaju da voda bude čista i bistra.' },
            { name: 'robots', content: 'index, follow' },
            { name: 'author', content: 'Pool Service' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'date', content: '2021-02-01', scheme: 'YYYY-MM-DD' },
            { charset: 'UTF-8' }
        ]);
        this.title.setTitle("Filtriranje vode");
    }
}
FiltriranjeVodeComponent.ɵfac = function FiltriranjeVodeComponent_Factory(t) { return new (t || FiltriranjeVodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
FiltriranjeVodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FiltriranjeVodeComponent, selectors: [["app-filtriranje-vode"]], decls: 205, vars: 0, consts: [[1, "container", "my-128"], [1, "row"], [1, "col-12", "col-md-6"], [1, "plava"], [1, "col-12", "col-md-6", "pt-5"], [1, "container"], [1, "col-12"], [1, "text-left"], [1, "pb-0", "pb-5"], ["src", "assets/img/filtrianje-bazena/logo-1.png", "alt", "logo cap", 1, "img-fluid", "mb-4", "mb-md-0"], [1, "col-12", "col-md-3"], [1, "col-5", "col-md-12"], ["src", "assets/img/filtrianje-bazena/021.jpg", "alt", "Card image cap", 1, "img-fluid"], [1, "col-7", "col-md-12"], [1, "h5", "pt-2"], [1, ""], ["src", "assets/img/filtrianje-bazena/031.jpg", "alt", "Bettar Speack", 1, "img-fluid"], [1, "row", "my-64"], ["src", "assets/img/filtrianje-bazena/iml-logo.jpg", "alt", "logo cap", 1, "img-fluid", "mb-4", "mb-md-0"], ["src", "assets/img/filtrianje-bazena/041.jpg", "alt", "Ami Iml America", 1, "img-fluid"], ["src", "assets/img/filtrianje-bazena/051.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/img/filtrianje-bazena/astral-logo.jpg", "alt", "logo cap", 1, "img-fluid", "mb-4", "mb-md-0"], ["src", "assets/img/filtrianje-bazena/051.jpg", "alt", "Victoria Astral", 1, "img-fluid"], ["src", "assets/img/filtrianje-bazena/061.jpg", "alt", "Sena Astral", 1, "img-fluid"], [1, "pb-0", "pb-md-5"], ["src", "assets/img/filtrianje-bazena/astral-logo.jpg", "alt", "logo cap", 1, "img-fluid", "mb-4", "mb-md-2"], ["src", "assets/img/filtrianje-bazena/filter-1.jpg", "alt", "Filter Cantabric", 1, "img-fluid"], ["src", "assets/img/filtrianje-bazena/filter-3.jpg", "alt", "Filter Cantabric Model Side", 1, "img-fluid"], ["src", "assets/img/filtrianje-bazena/filter-8.jpg", "alt", "\u0160estostepeni upravlja\u010Dki ventil", 1, "img-fluid"], ["src", "assets/img/filtrianje-bazena/filter-2.jpg", "alt", "Filter Cantabric Model Top", 1, "img-fluid"], ["src", "assets/img/filtrianje-bazena/filter-4.jpg", "alt", "Filter Milenium Model Top", 1, "img-fluid"], ["src", "assets/img/filtrianje-bazena/pesak.jpg", "alt", "Filtracioni pesak", 1, "img-fluid"]], template: function FiltriranjeVodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "DODATNA OPREMA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Filtriranje vode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Pe\u0161\u010Dani Filteri i Pumpe slu\u017Ee za filtriranje bazenske vode. Oni omogu\u0107avaju da voda bude \u010Dista i bistra. Isporu\u010Duje se u kompletu koji \u010Dini: grubi filter sa pumpom, pe\u0161\u010Dani filter, \u0161estostepeni upravlja\u010Dki ventil, postolje i kvarcni pesak. Postoje kapaciteti od 5m3/h, 8m3/h, 12m3/h, 14m3/h i ve\u0107i. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "U ponudi imamo nekoliko poznatih prozivodjaca kao sto su SPek Pumpen, Astrapool, IML. Firma SPeck Pumpen iz Nemacke je renomirana i poznata po svojim visokokvalitetnim prozivodima a u svom asortimanu nudi velik izbor bazenskih pumpi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Pumpe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Magic-Speck");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Badu Magic 6 m3/h ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Badu Magic 8 m3/h ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Badu Magic 11 m3/h ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Bettar-Speack");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Badu Magic 8 m3/h ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Badu Magic 12 m3/h ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " Badu Magic 14m3/h ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Ami-Iml-America");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Ami 8 m3/h");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Ami 11 m3/h ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " Ami 14 m3/h ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](70, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Eur-Iml-Evropa");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, " Eur 17 m3/h ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](76, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, " Eur 24 m3/h ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, " Eur 28 m3/h ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, " Eur 32 m3/h ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](86, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](90, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](93, "Victoria-Astral");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](95, "Victoria Plus 0.61kW 11m3/h ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, " Victoria Plus 0.78kW 16 m3/h ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](99, " Victoria Plus 1.10kW 21,5 m3/h ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](103, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "Sena-Astral");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " Sena 7m3/h 230V");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h3", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "Filteri");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "img", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "FILTRACIONE POSUDE Astralpool firma iz \u0160panije");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "FILTER Cantabric \u2013 model Side");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " D-400 mm, 6m3/h ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](129, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130, " D-500 mm, 9m3/h ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](132, " D-600 mm, 14m3/h ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](133, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, " D-750 mm, 21m3/h ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](135, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](136, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "img", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, "FILTER Cantabric \u2013 model Side");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " D-380mm, 5,5m3/h ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " D-430mm, 7 m3/h ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](148, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "\u0160estostepeni upravlja\u010Dki ventil");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " 6-pozicioni ru\u010Dni ventil D50 1 1/2\u2033 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](158, " 6-pozicioni ru\u010Dni ventil D63 2\u2033 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](162, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](164, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](165, "FILTER Cantabric \u2013 model Top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](166, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](167, " D-400 mm, 6m3/h ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](168, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, " D-500 mm, 9m3/h ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](170, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](171, " D-600 mm, 14m3/h ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](172, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](173, " D-600 mm, 14m3/h");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](175, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](176, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](178, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](179, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](180, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](181, "FILTER Milenium \u2013 model Top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](183, " D-380mm, 5,5m3/h");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](185, " D-430mm, 7 m3/h");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](186, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](187, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](190, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](192, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](193, "Filtracioni pesak");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](194, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](195, " Filtracioni pesak 0,4-0,8 mm, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](196, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](197, " d\u017Eak 25 kg ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](198, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](199, " Filtracioni pesak 0,5-1,0mm, d\u017Eak 50kg ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](200, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](201, " Filtracioni pesak 1,0-2,0 mm, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](202, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](203, " d\u017Eak 50 kg");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](204, "app-konsultacije");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_3__["LazyImgDirective"], _components_konsultacije_konsultacije_component__WEBPACK_IMPORTED_MODULE_4__["KonsultacijeComponent"]], styles: [".naslov__pading-top[_ngcontent-%COMP%] {\n  padding-top: 64px;\n  padding-bottom: 104px;\n}\n.naslov__pading-top[_ngcontent-%COMP%]   .plava[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 2px;\n  color: #175CFF;\n}\n.cards__padding-bottom[_ngcontent-%COMP%] {\n  padding-bottom: 104px;\n}\n.cards__padding-bottom[_ngcontent-%COMP%]   .naslov[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 25px;\n}\n.cards__padding-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 17px;\n  line-height: 25px;\n}\n.cards__padding-bottom[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background-color: #ff8125;\n}\n.cards__padding-bottom_two[_ngcontent-%COMP%] {\n  padding-bottom: 104px;\n}\n.cards__padding-bottom_two[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n}\n.cards__padding-bottom_two[_ngcontent-%COMP%]   .naslov[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 25px;\n}\n.cards__padding-bottom_two[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 17px;\n  line-height: 25px;\n}\n.cards__padding-bottom_two[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background-color: #ff8125;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZmlsdHJpcmFuamUtdm9kZS9FOlxcUHJvamVjdHNcXHBvb2xzZXJ2aWNlXFxwb29sLXNlcnZpY2VcXGFuZ3VsYXItc3JjL3NyY1xcYXBwXFxwYWdlc1xcZmlsdHJpcmFuamUtdm9kZVxcZmlsdHJpcmFuamUtdm9kZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvZmlsdHJpcmFuamUtdm9kZS9maWx0cmlyYW5qZS12b2RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxxQkFBQTtBQ0NKO0FEQUk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0VSO0FERUE7RUFDSSxxQkFBQTtBQ0NKO0FEQUk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0VSO0FEQUk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRVI7QURBSTtFQUNJLHlCQUFBO0FDRVI7QURHQTtFQUNJLHFCQUFBO0FDQUo7QURDSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDQ1I7QURFSTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDQVI7QURFSTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNBUjtBREVJO0VBQ0kseUJBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZpbHRyaXJhbmplLXZvZGUvZmlsdHJpcmFuamUtdm9kZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXNsb3ZfX3BhZGluZy10b3Age1xyXG4gICAgcGFkZGluZy10b3A6IDY0cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTA0cHg7XHJcbiAgICAucGxhdmEge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG4gICAgICAgIGNvbG9yOiAjMTc1Q0ZGO1xyXG4gICAgfVxyXG59XHJcblxyXG4uY2FyZHNfX3BhZGRpbmctYm90dG9tIHtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxMDRweDtcclxuICAgIC5uYXNsb3Yge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIH1cclxuICAgIC5idG4ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjgxMjU7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4uY2FyZHNfX3BhZGRpbmctYm90dG9tX3R3byB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTA0cHg7XHJcbiAgICAuaW1ne1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXNsb3Yge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIH1cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuICAgIH1cclxuICAgIC5idG4ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjgxMjU7XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIi5uYXNsb3ZfX3BhZGluZy10b3Age1xuICBwYWRkaW5nLXRvcDogNjRweDtcbiAgcGFkZGluZy1ib3R0b206IDEwNHB4O1xufVxuLm5hc2xvdl9fcGFkaW5nLXRvcCAucGxhdmEge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMTdweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbiAgY29sb3I6ICMxNzVDRkY7XG59XG5cbi5jYXJkc19fcGFkZGluZy1ib3R0b20ge1xuICBwYWRkaW5nLWJvdHRvbTogMTA0cHg7XG59XG4uY2FyZHNfX3BhZGRpbmctYm90dG9tIC5uYXNsb3Yge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbn1cbi5jYXJkc19fcGFkZGluZy1ib3R0b20gcCB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbn1cbi5jYXJkc19fcGFkZGluZy1ib3R0b20gLmJ0biB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZjgxMjU7XG59XG5cbi5jYXJkc19fcGFkZGluZy1ib3R0b21fdHdvIHtcbiAgcGFkZGluZy1ib3R0b206IDEwNHB4O1xufVxuLmNhcmRzX19wYWRkaW5nLWJvdHRvbV90d28gLmltZyB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cbi5jYXJkc19fcGFkZGluZy1ib3R0b21fdHdvIC5uYXNsb3Yge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjVweDtcbn1cbi5jYXJkc19fcGFkZGluZy1ib3R0b21fdHdvIHAge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG4uY2FyZHNfX3BhZGRpbmctYm90dG9tX3R3byAuYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODEyNTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FiltriranjeVodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-filtriranje-vode',
                templateUrl: './filtriranje-vode.component.html',
                styleUrls: ['./filtriranje-vode.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/homepage/homepage.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/homepage/homepage.component.ts ***!
  \******************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/__ivy_ngcc__/fesm2015/ngx-swiper-wrapper.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lazy-img-directive.directive */ "./src/app/lazy-img-directive.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_tri_koraka_tri_koraka_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/tri-koraka/tri-koraka.component */ "./src/app/components/tri-koraka/tri-koraka.component.ts");
/* harmony import */ var _components_konsultacije_konsultacije_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/konsultacije/konsultacije.component */ "./src/app/components/konsultacije/konsultacije.component.ts");
/* harmony import */ var _components_ponuda_ponuda_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/ponuda/ponuda.component */ "./src/app/components/ponuda/ponuda.component.ts");










function HomepageComponent_div_84_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Kreiramo uspomene");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Iz ljubavi se javlja odanost. Porodica i prijatelji okupi\u0107e se u Va\u0161em dvori\u0161tu iz snova koji \u0107e ih zbli\u017Eiti uz neizostavnu zabavu, a ne zaboravljaju\u0107i sve anegdote koje \u0107e nastati u letima koje dolaze. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomepageComponent_div_85_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Zagarantovana podr\u0161ka");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Iskustvo nam obezbe\u0111uje kompetentnost u tehnikama izrade bazena i time pru\u017Eamo klijentima pouzdanu podr\u0161ku tokom svih etapa neophodnih da bi neometano u\u017Eivali na svom privatnom bazenu. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function HomepageComponent_div_86_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 84);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u017Divite \u017Eivot koji \u017Eelite");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Verujemo da uspeh mo\u017Ee da omogu\u0107i \u017Eivotni stil koji zami\u0161ljamo da nam pripada. I ako bih ste se zapitali koji je najbolji na\u010Din da se iskusi samoispunjenje i sre\u0107a, to bi naravno bio provod uz zabavne stvari. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return ["/kontakt"]; };
const _c1 = function () { return ["/polumontazni-bazeni"]; };
const _c2 = function () { return ["/betonski-bazeni"]; };
const _c3 = function () { return ["/bazeni-sa-folijom"]; };
class HomepageComponent {
    constructor(metaTagService, title) {
        this.metaTagService = metaTagService;
        this.title = title;
        this.viewMode = 'uspomene';
        this.type = 'component';
        this.disabled = false;
        this.config = {
            a11y: true,
            direction: 'horizontal',
            effect: 'fade',
            slidesPerView: 1,
            keyboard: true,
            mousewheel: false,
            scrollbar: false,
            navigation: true,
            pagination: false,
            spaceBetween: 0,
            autoplay: {
                delay: 5000,
                disableOnInteraction: true,
            },
        };
        this.testemonials = {
            a11y: true,
            direction: 'horizontal',
            slidesPerView: 1,
            keyboard: true,
            mousewheel: false,
            scrollbar: false,
            navigation: true,
            pagination: false,
            autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            }
        };
        this.partner = {
            a11y: true,
            direction: 'horizontal',
            slidesPerView: 5,
            keyboard: true,
            loop: true,
            mousewheel: false,
            scrollbar: false,
            navigation: false,
            pagination: false,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            breakpoints: {
                320: {
                    slidesPerView: 2,
                },
                768: {
                    slidesPerView: 5,
                }
            }
        };
        this.scrollbar = {
            el: '.swiper-scrollbar',
            hide: false,
            draggable: true
        };
        this.pagination = {
            el: '.swiper-pagination',
            clickable: true,
            hideOnClick: false
        };
    }
    ngOnInit() {
        this.metaTagService.addTags([
            { name: 'keywords', content: 'Stvaramo sećanja u godinama koje dolaze, u oazi Vašeg dvorišta!' },
            { name: 'robots', content: 'index, follow' },
            { name: 'author', content: 'Pool Service' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'date', content: '2021-02-01', scheme: 'YYYY-MM-DD' },
            { charset: 'UTF-8' },
            { property: 'og:image', content: 'assets/img/kreiramo-uspomene-og.jpg' },
            { property: 'twitter:image:src', content: 'assets/img/kreiramo-uspomene-og.jpg' }
        ]);
        this.title.setTitle('Sa nama dobijate više od bazena 💦 Pool Service');
    }
}
HomepageComponent.ɵfac = function HomepageComponent_Factory(t) { return new (t || HomepageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomepageComponent, selectors: [["app-homepage"]], decls: 193, vars: 27, consts: [[1, "swiper-container", "mb-128", 3, "swiper"], [1, "swiper-wrapper"], [1, "swiper-slide"], [1, "slider-1"], [1, "container", "h-100"], [1, "row", "justify-content-start", "align-items-center", "h-100"], [1, "col-12", "col-md-6"], [1, "text-left"], [1, "display-2"], [1, "mb-5"], ["role", "button", 1, "btn", "btn-lg", "btn-secondary", 3, "routerLink"], [1, "slider-2"], [1, "col-12", "col-md-8"], [1, "slider-3"], [1, "swiper-button-prev"], [1, "swiper-button-next"], [1, "bg-white", "py-64", "d-block", "d-md-none"], ["id", "future-content", 1, "container"], [1, "row"], [1, "col-12", "col-md-4", "mb-4", "mb-md-0"], ["src", "assets/img/icons/kreiramo-uspomene.svg", "alt", "slika2", "width", "64", 1, "img-fluid", "mb-4"], [1, "mb-3"], ["src", "assets/img/icons/podrska.svg", "alt", "knjiga", "width", "64", 1, "img-fluid", "mb-4"], ["src", "assets/img/icons/zivot.svg", "alt", "slika2", "width", "64", 1, "img-fluid", "mb-4"], ["id", "values", 1, "container", "d-none", "d-md-block"], [1, "row", "justify-content-between"], [1, "col", 2, "border-top-left-radius", "1rem"], [3, "click"], [1, "values-tab"], ["src", "assets/img/icons/kreiramo-uspomene.svg", "alt", "", 1, "d-none", "d-lg-inline-flex"], [1, "font-weight-normal", "mb-0"], [1, "col"], ["src", "assets/img/icons/podrska.svg", "alt", "", 1, "d-none", "d-lg-inline-flex"], [1, "col", 2, "border-top-right-radius", "1rem"], ["src", "assets/img/icons/zivot.svg", "alt", "", 1, "d-none", "d-lg-inline-flex"], [1, "container", "bg-white", "shadow-lg", "d-none", "d-md-block", 2, "border-bottom-left-radius", "1rem", "border-bottom-right-radius", "1rem", 3, "ngSwitch"], ["class", "row align-items-center", "style", "border-bottom-left-radius: 1rem", 4, "ngSwitchCase"], ["class", "row align-items-center", 4, "ngSwitchCase"], ["id", "bazeni", 1, "container", "my-128"], [1, "col-12", "col-md-6", "pl-md-0"], [1, "future-card", "shadow-lg"], [1, "future-card-image", 2, "background-image", "url(assets/img/future-pool-bazeni.jpg)"], [1, "article-meta"], [1, "row", "align-items-end"], ["id", "future-pool", 1, "col"], [1, "text-white"], [1, "mb-4"], ["role", "button", 1, "btn", "btn-secondary", "hover__btn", 3, "routerLink"], [1, "col-12", "col-md-6", "mt-4", "mt-md-0", "pr-md-0"], [1, "bazeni-card", "shadow-lg"], [1, "bazeni-card-image", 2, "background-image", "url(assets/img/betonsk-bazeni.jpg)"], [1, "row", "align-items-end", "justify-content-between"], ["id", "betonski-bazen", 1, "col"], [1, "bazeni-card-image", 2, "background-image", "url(assets/img/bazeni-sa-folijom.jpg)"], ["id", "bazeni-sa-folijom", 1, "col"], [1, "bg-light"], [1, "container-fluid", "padding-top-card_one"], [1, "container"], [1, "row", "align-items-center", "py-5"], [1, "col-12", "col-md-6", "order-2", "order-md-0"], [1, "btn", "btn-secondary", "border-0", "mt-5", 3, "routerLink"], ["id", "slika-up", 1, "col-12", "col-md-6", "order-1", "order-md-0", "mb-4", "mb-md-0"], ["src", "assets/img/izgradnja-bazena/slika-odrzavanje-01.jpg", "loading", "lazy", "alt", "card-slika", 1, "img-fluid"], [1, "swiper-container", "mb-128", "mt-64", 3, "swiper"], [1, "swiper-wrapper", "align-items-center"], ["src", "./assets/img/logos/fluidra.png", "loading", "lazy", "alt", "", 1, "img-fluid"], ["src", "./assets/img/logos/astral.png", "loading", "lazy", "alt", "", 1, "img-fluid"], ["src", "./assets/img/logos/zodiac.png", "loading", "lazy", "alt", "", 1, "img-fluid"], ["src", "./assets/img/logos/future-pool.png", "loading", "lazy", "alt", "", 1, "img-fluid"], ["src", "./assets/img/logos/praher.png", "loading", "lazy", "alt", "", 1, "img-fluid"], ["src", "./assets/img/logos/renolit.png", "loading", "lazy", "alt", "", 1, "img-fluid"], ["src", "./assets/img/logos/iml.png", "loading", "lazy", "alt", "", 1, "img-fluid"], [1, "row", "justify-content-center", "py-5"], [1, "col-10", "col-md-6", "text-center"], ["src", "./assets/img/milan.png", "loading", "lazy", "width", "90", "height", "90", "alt", "", 1, "rounded", "mb-4"], [1, "blockquote", "weight-500"], [1, "mb-0", "text-black-50"], [1, "weight-500"], ["src", "./assets/img/miodrag.png", "loading", "lazy", "width", "90", "height", "90", "alt", "", 1, "rounded", "mb-4"], ["src", "./assets/img/dejan.png", "loading", "lazy", "width", "90", "height", "90", "alt", "", 1, "rounded", "mb-4"], [1, "row", "align-items-center", 2, "border-bottom-left-radius", "1rem"], [1, "col-4", "px-0"], ["src", "assets/img/kreiramo-uspomene.jpg", "loading", "lazy", "alt", "Kreiramo uspomene u vasem dvoristu", 1, "img-fluid", 2, "border-bottom-left-radius", "1rem"], [1, "col-8", "px-5"], [1, "row", "align-items-center"], ["src", "assets/img/zagarantovana-podrska.jpg", "loading", "lazy", "alt", "Neometano uzivajte na svom privatno bazenu", 1, "img-fluid", 2, "border-bottom-left-radius", "1rem"], ["src", "assets/img/zivite-zivot-koji%20zelite.jpg", "loading", "lazy", "alt", "Zivite zivot koji zelite", 1, "img-fluid", 2, "border-bottom-left-radius", "1rem"]], template: function HomepageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Va\u0161e dvori\u0161te, Va\u0161 bazen, Va\u0161a pravila");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Sa nama dobijate vi\u0161e od bazena. Stvaramo se\u0107anja u godinama koje dolaze, u oazi Va\u0161eg dvori\u0161ta!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Besplatna konsultacija");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Prepustite se u\u017Eivanju!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Ako tra\u017Eite efikasnu i brzu uslugu odr\u017Eavanja bazena,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "na pravom ste mestu. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Besplatna konsultacija");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Ulaganje u kvalitet pru\u017Ea sigurnost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " Oprema renomiranih Evropskih partnera omogu\u0107ava dugogodi\u0161nju istrajnost i funkcionalnost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Besplatna konsultacija");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "section", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h2", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Kreiramo uspomene");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Iskustvo nam obezbe\u0111uje kompetentnost u tehnikama izrade bazena i time pru\u017Eamo klijentima pouzdanu podr\u0161ku tokom svih etapa neophodnih da bi neometano u\u017Eivali na svom privatnom bazenu.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h2", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Zagarantovana podr\u0161ka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Verujemo da uspeh mo\u017Ee da omogu\u0107i \u017Eivotni stil koji zami\u0161ljamo da nam pripada. I ako bih ste se zapitali koji je najbolji na\u010Din da se iskusi samoispunjenje i sre\u0107a, to bi naravno bio provod uz zabavne stvari.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h2", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\u017Divite \u017Eivot koji \u017Eelite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Iz ljubavi se javlja odanost. Porodica i prijatelji okupi\u0107e se u Va\u0161em dvori\u0161tu iz snova koje \u0107e ih zbli\u017Eiti uz neizostavnu zabavu, a ne zaboravljaju\u0107i sve anegdote koje \u0107e nastati u letima koje dolaze.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_a_click_66_listener() { return ctx.viewMode = "uspomene"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](68, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Kreiramo uspomene");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_a_click_72_listener() { return ctx.viewMode = "podrska"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](74, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Zagarantovana podr\u0161ka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "a", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomepageComponent_Template_a_click_78_listener() { return ctx.viewMode = "zivot"; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](80, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "\u017Divite \u017Eivot koji \u017Eelite");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](84, HomepageComponent_div_84_Template, 8, 0, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](85, HomepageComponent_div_85_Template, 8, 0, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](86, HomepageComponent_div_86_Template, 8, 0, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "article", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](94, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "h3", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Future pool bazeni");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "Savremeno i ekonomsko pristupa\u010Dno re\u0161enje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Saznaj vi\u0161e");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "article", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h3", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Betonski bazeni");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "Najkvalitetniji i najizdr\u017Eljiviji tip bazena, po Va\u0161oj meri.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Saznaj vi\u0161e");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "article", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](114, "div", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "h3", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](119, "Bazeni sa folijom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "p", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Postupak varenja folije po \u017Eelji na licu mesta.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "a", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, "Saznaj vi\u0161e");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](124, "app-tri-koraka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 58);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "h2", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](131, "U\u017Eivajte u letu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, "U vrelim letnjim danima ne \u017Eelite da brinete da li Vam filter radi ili ne. I sigurno ne \u017Eelite da razmi\u0161ljate o pH vrednosti vode, dok Vas klinci zovu da se igrate. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](135, "Neka Pool Service uradi sav posao za vas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](136, "button", 60);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](137, "Kontaktirajte nas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](139, "img", 62);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 63);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "div", 64);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](142, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](143, "img", 65);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](144, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](145, "img", 66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "img", 67);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](149, "img", 68);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](150, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](151, "img", 69);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](152, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](153, "img", 70);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](154, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](155, "img", 71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](156, "app-konsultacije");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "app-ponuda");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](160, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](162, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](164, "img", 74);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](165, "blockquote", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](166, "\u201CImao sam mnogo nedoumica u po\u010Detku, od cene do odr\u017Eavanja, ali stru\u010Dniji ljudi od mene su me ubedili da treba da pratim svoje snove. Hvala im na tome, jer sam te\u0161ko vreme za vreme korone imao gde da provedem :) \u0160ta re\u0107i, osim... preporuka!\u201D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "p", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](168, "span", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](169, "Goran,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " Privatnik");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](171, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](174, "img", 78);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "blockquote", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, "\u201CKada gledam klince kako u\u017Eivaju, ni\u0161ta mi vi\u0161e ne treba. \u201D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "p", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](178, "span", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](179, "Miodrag,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](180, " Preduzetnik");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](182, "div", 72);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "div", 73);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](184, "img", 79);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](185, "blockquote", 75);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](186, "\u201CDosta dugo sam razmi\u0161ljao i raspitivao se o bazenima. Odluka je pala na Pool Service. Nisam za\u017Ealio. U po\u010Detku sam mislio da \u0107u odr\u017Eavati sam, ali... za\u0161to kada ima ko to da radi :) Pozdrav za najbolju ekipu\u201D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "p", 76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](188, "span", 77);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](189, "Dejan,");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " Preduzetnik");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](191, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](192, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.config);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](20, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](21, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](22, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.viewMode == "uspomene");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.viewMode == "podrska");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("active", ctx.viewMode == "zivot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.viewMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "uspomene");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "podrska");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "zivot");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](23, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](24, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](25, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](26, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.partner);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.testemonials);
    } }, directives: [ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_2__["SwiperDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_4__["LazyImgDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgSwitchCase"], _components_tri_koraka_tri_koraka_component__WEBPACK_IMPORTED_MODULE_6__["TriKorakaComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _components_konsultacije_konsultacije_component__WEBPACK_IMPORTED_MODULE_7__["KonsultacijeComponent"], _components_ponuda_ponuda_component__WEBPACK_IMPORTED_MODULE_8__["PonudaComponent"]], styles: [".padding-top_container[_ngcontent-%COMP%] {\n  padding-top: 128px;\n}\n\n.swiper-container[_ngcontent-%COMP%] {\n  z-index: 0 !important;\n}\n\n.swiper-container[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  min-height: 720px;\n}\n\n.swiper-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-weight: bold;\n  letter-spacing: -1px;\n  line-height: 1.2;\n}\n\n@media (max-width: 991.98px) {\n  .swiper-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n}\n\n.swiper-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 21px;\n  color: #ffffffd4;\n}\n\n@media (max-width: 991.98px) {\n  .swiper-container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 18px;\n    font-weight: normal;\n  }\n}\n\n.swiper-container[_ngcontent-%COMP%]   .slider-1[_ngcontent-%COMP%] {\n  background-image: url('hero.jpg');\n  background-size: cover;\n  background-position: center;\n  min-height: 720px;\n  height: 100%;\n  width: 100%;\n}\n\n.swiper-container[_ngcontent-%COMP%]   .slider-2[_ngcontent-%COMP%] {\n  background-image: url('hero-2.jpg');\n  background-size: cover;\n  background-position: center;\n  min-height: 720px;\n  height: 100%;\n  width: 100%;\n}\n\n.swiper-container[_ngcontent-%COMP%]   .slider-3[_ngcontent-%COMP%] {\n  background-image: url('hero-4.jpg');\n  background-size: cover;\n  background-position: center;\n  min-height: 720px;\n  height: 100%;\n  width: 100%;\n}\n\n#hero[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media (max-width: 991.98px) {\n  .swiper-button-prev[_ngcontent-%COMP%], .swiper-button-next[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n\n.carousel-text[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  top: 240px;\n}\n\n.carousel-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.carousel-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #ffffff;\n}\n\n#values[_ngcontent-%COMP%] {\n  margin-top: -201px;\n}\n\n#values[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%] {\n  background-color: #fff;\n  margin: 0;\n}\n\n#values[_ngcontent-%COMP%]   .col.active[_ngcontent-%COMP%] {\n  background-color: #CCEAFF;\n}\n\n#values[_ngcontent-%COMP%]   .col.active[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n#values[_ngcontent-%COMP%]   .col.active[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n\n#values[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .values-tab[_ngcontent-%COMP%] {\n  padding: 1.5rem 0.5rem;\n  display: flex;\n  justify-content: center;\n  flex-direction: row;\n  cursor: pointer;\n}\n\n#values[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .values-tab[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%] {\n  opacity: 1 !important;\n}\n\n#values[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   .values-tab[_ngcontent-%COMP%]:hover   h5[_ngcontent-%COMP%] {\n  opacity: 1 !important;\n}\n\n#values[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 1rem;\n  opacity: 0.5;\n}\n\n#values[_ngcontent-%COMP%]   .col[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  margin: 0;\n  text-align: center;\n  font-family: \"Gilroy-regular\", sans-serif;\n  color: #17154B;\n  opacity: 0.5;\n}\n\n#values[_ngcontent-%COMP%]   .switch-container[_ngcontent-%COMP%] {\n  background-color: #fff;\n  width: 100%;\n}\n\n.future-card[_ngcontent-%COMP%] {\n  display: block;\n  border-radius: 15px;\n}\n\n.future-card[_ngcontent-%COMP%]   .future-card-image[_ngcontent-%COMP%] {\n  height: 624px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n  border-radius: 15px;\n  padding: 1rem;\n}\n\n@media (max-width: 991.98px) {\n  .future-card[_ngcontent-%COMP%]   .future-card-image[_ngcontent-%COMP%] {\n    height: 320px;\n  }\n}\n\n.future-card[_ngcontent-%COMP%]   .future-card-image[_ngcontent-%COMP%]:after {\n  content: \"\\a\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  left: 0;\n  background: linear-gradient(#060d1a00, #060d1a);\n  opacity: 1;\n  transition: all 1s;\n  -webkit-transition: all 1s;\n  border-radius: 15px;\n}\n\n@media (max-width: 991.98px) {\n  .future-card[_ngcontent-%COMP%]   .future-card-image[_ngcontent-%COMP%]:after {\n    height: 100%;\n    background: linear-gradient(#060d1a00, #060d1a);\n  }\n}\n\n.hover__btn[_ngcontent-%COMP%] {\n  transition: opacity 0.3s, transform 0.3s ease-in;\n  z-index: 2;\n  opacity: 0;\n}\n\n#future-pool[_ngcontent-%COMP%], #betonski-bazen[_ngcontent-%COMP%], #bazeni-sa-folijom[_ngcontent-%COMP%] {\n  transform: translateY(30%);\n  transition: opacity 0.3s, transform 0.3s ease-in;\n}\n\n.future-card[_ngcontent-%COMP%]:hover   .btn-secondary[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity 0.3s, transform 0.3s ease-out;\n}\n\n.future-card[_ngcontent-%COMP%]:hover   #future-pool[_ngcontent-%COMP%] {\n  transform: translateY(0);\n  transition: opacity 0.3s, transform 0.3s ease-out;\n}\n\n.bazeni-card[_ngcontent-%COMP%]:hover   .btn-secondary[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity 0.3s, transform 0.3s ease-out;\n}\n\n.bazeni-card[_ngcontent-%COMP%]:hover   #betonski-bazen[_ngcontent-%COMP%] {\n  transform: translateY(0);\n  transition: opacity 0.3s, transform 0.3s ease-out;\n}\n\n.bazeni-card[_ngcontent-%COMP%]:hover   .btn-secondary[_ngcontent-%COMP%] {\n  opacity: 1;\n  transition: opacity 0.3s, transform 0.3s ease-out;\n}\n\n.bazeni-card[_ngcontent-%COMP%]:hover   #bazeni-sa-folijom[_ngcontent-%COMP%] {\n  transform: translateY(0);\n  transition: opacity 0.3s, transform 0.3s ease-out;\n}\n\n.bazeni-card[_ngcontent-%COMP%] {\n  display: block;\n  border-radius: 15px;\n}\n\n.bazeni-card[_ngcontent-%COMP%]:nth-child(1) {\n  margin-bottom: 2rem;\n}\n\n.bazeni-card[_ngcontent-%COMP%]   .bazeni-card-image[_ngcontent-%COMP%] {\n  height: 296px;\n  width: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  position: relative;\n  border-radius: 15px;\n  padding: 1rem;\n}\n\n@media (max-width: 991.98px) {\n  .bazeni-card[_ngcontent-%COMP%]   .bazeni-card-image[_ngcontent-%COMP%] {\n    height: 320px;\n  }\n}\n\n.bazeni-card[_ngcontent-%COMP%]   .bazeni-card-image[_ngcontent-%COMP%]:after {\n  content: \"\\a\";\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  bottom: 0;\n  left: 0;\n  background: linear-gradient(#060d1a00, #060d1a);\n  opacity: 1;\n  transition: all 1s;\n  -webkit-transition: all 1s;\n  border-radius: 15px;\n}\n\n@media (max-width: 767.98px) {\n  .bazeni-card[_ngcontent-%COMP%]   .bazeni-card-image[_ngcontent-%COMP%]:after {\n    height: 100%;\n    background: linear-gradient(#060d1a00, #060d1a);\n  }\n}\n\n.article-meta[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  z-index: 2;\n  padding: 2rem 1.5rem;\n  vertical-align: bottom;\n  text-align: left;\n  font-family: \"Lato\", sans-serif;\n}\n\n.article-meta[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.article-meta[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n}\n\n.background_working[_ngcontent-%COMP%] {\n  background-color: #E9F7FE;\n  padding: 6rem 0 10rem 0;\n}\n\n.dole-2[_ngcontent-%COMP%] {\n  margin-top: 12rem;\n}\n\n.background_section[_ngcontent-%COMP%] {\n  background-color: #E9F7FE;\n}\n\n.padding-top-card_one[_ngcontent-%COMP%] {\n  padding-bottom: 24px;\n}\n\n.padding-top-card_one[_ngcontent-%COMP%]   .tex-right[_ngcontent-%COMP%]   .test[_ngcontent-%COMP%] {\n  margin-right: 16.666666%;\n}\n\n.padding-top-card_one[_ngcontent-%COMP%]   .tex-right[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 48px;\n  line-height: 60px;\n}\n\n.padding-top-card_one[_ngcontent-%COMP%]   .tex-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-size: 1.125rem;\n  line-height: 2rem;\n}\n\n.padding-top-card_one[_ngcontent-%COMP%]   .tex-right[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background-color: #FF8125;\n  font-weight: 600;\n  letter-spacing: 0.32px;\n}\n\n.padding-top-card_one[_ngcontent-%COMP%]   .z-index_postion[_ngcontent-%COMP%] {\n  margin-top: 104px;\n}\n\n#slika-up[_ngcontent-%COMP%] {\n  margin-top: -6rem;\n}\n\n.padding-top__cards[_ngcontent-%COMP%] {\n  padding-top: 128px;\n  padding-bottom: 128px;\n}\n\n.padding-top__cards[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  box-shadow: 0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04);\n  border-radius: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZXBhZ2UvRTpcXFByb2plY3RzXFxwb29sc2VydmljZVxccG9vbC1zZXJ2aWNlXFxhbmd1bGFyLXNyYy9zcmNcXGFwcFxccGFnZXNcXGhvbWVwYWdlXFxob21lcGFnZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaG9tZXBhZ2UvaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWVwYWdlL0U6XFxQcm9qZWN0c1xccG9vbHNlcnZpY2VcXHBvb2wtc2VydmljZVxcYW5ndWxhci1zcmMvbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2JyZWFrcG9pbnRzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWVwYWdlL0U6XFxQcm9qZWN0c1xccG9vbHNlcnZpY2VcXHBvb2wtc2VydmljZVxcYW5ndWxhci1zcmMvc3JjXFxhc3NldHNcXHNjc3NcXF9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFLQTtFQUNFLGtCQUFBO0FDSkY7O0FEUUE7RUFDRSxxQkFBQTtBQ0xGOztBRE9FO0VBQ0UsaUJBQUE7QUNMSjs7QURRRTtFQUNFLFdBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7QUNOSjs7QUMwREk7RUZ4REY7SUFPSSxpQkFBQTtFQ0xKO0FBQ0Y7O0FEUUU7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7QUNOSjs7QUNpREk7RUY3Q0Y7SUFLSSxlQUFBO0lBQ0EsbUJBQUE7RUNMSjtBQUNGOztBRFFFO0VBQ0UsaUNBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ05KOztBRFNFO0VBQ0UsbUNBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ1BKOztBRFVFO0VBQ0UsbUNBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ1JKOztBRGNFO0VBQ0UsV0FBQTtBQ1hKOztBQ2VJO0VGQUo7SUFFSSxhQUFBO0VDWkY7QUFDRjs7QURlQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDWkY7O0FEY0U7RUFDRSxXQUFBO0FDWko7O0FEZUU7RUFDRSxjQUFBO0FDYko7O0FEbUJBO0VBQ0Usa0JBQUE7QUNoQkY7O0FEa0JFO0VBQ0Usc0JBQUE7RUFDQSxTQUFBO0FDaEJKOztBRGtCSTtFQUNFLHlCQUFBO0FDaEJOOztBRGtCTTtFQUNFLFVBQUE7QUNoQlI7O0FEbUJNO0VBQ0UsVUFBQTtBQ2pCUjs7QURxQkk7RUFDRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ25CTjs7QURzQlE7RUFDRSxxQkFBQTtBQ3BCVjs7QUR1QlE7RUFDRSxxQkFBQTtBQ3JCVjs7QUQwQkk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7QUN4Qk47O0FEMkJJO0VBQ0UsU0FBQTtFQUNBLGtCQUFBO0VBQ0EseUNBQUE7RUFDQSxjRzNJTTtFSDRJTixZQUFBO0FDekJOOztBRDZCRTtFQUNFLHNCQUFBO0VBQ0EsV0FBQTtBQzNCSjs7QURrQ0E7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUMvQkY7O0FEaUNFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtBQy9CSjs7QUM5REk7RUZ1RkY7SUFTSSxhQUFBO0VDOUJKO0FBQ0Y7O0FEZ0NJO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLCtDQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtBQzlCTjs7QUNoRkk7RUZtR0E7SUFjSSxZQUFBO0lBQ0EsK0NBQUE7RUM3Qk47QUFDRjs7QURrQ0E7RUFDRSxnREFBQTtFQUNBLFVBQUE7RUFDQSxVQUFBO0FDL0JGOztBRGtDQTtFQUNFLDBCQUFBO0VBQ0EsZ0RBQUE7QUMvQkY7O0FEbUNFO0VBQ0UsVUFBQTtFQUNBLGlEQUFBO0FDaENKOztBRGtDRTtFQUNFLHdCQUFBO0VBQ0EsaURBQUE7QUNoQ0o7O0FEcUNFO0VBQ0UsVUFBQTtFQUNBLGlEQUFBO0FDbENKOztBRG9DRTtFQUNFLHdCQUFBO0VBQ0EsaURBQUE7QUNsQ0o7O0FEdUNFO0VBQ0UsVUFBQTtFQUNBLGlEQUFBO0FDcENKOztBRHNDRTtFQUNFLHdCQUFBO0VBQ0EsaURBQUE7QUNwQ0o7O0FEd0NBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0FDckNGOztBRHVDRTtFQUNFLG1CQUFBO0FDckNKOztBRHdDRTtFQUNFLGFBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FDdENKOztBQzdJSTtFRjRLRjtJQVVJLGFBQUE7RUNyQ0o7QUFDRjs7QUR1Q0k7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsK0NBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0FDckNOOztBQy9KSTtFRnlMQTtJQWNJLFlBQUE7SUFDQSwrQ0FBQTtFQ3BDTjtBQUNGOztBRHlDQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUN0Q0Y7O0FEd0NFO0VBQ0UsV0FBQTtBQ3RDSjs7QUR5Q0U7RUFDRSxXQUFBO0FDdkNKOztBRDJDQTtFQUNFLHlCQUFBO0VBQ0EsdUJBQUE7QUN4Q0Y7O0FEMkNBO0VBQ0UsaUJBQUE7QUN4Q0Y7O0FEMkNBO0VBQ0UseUJBQUE7QUN4Q0Y7O0FEMkNBO0VBQ0Usb0JBQUE7QUN4Q0Y7O0FENENJO0VBQ0Usd0JBQUE7QUMxQ047O0FENkNJO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUMzQ047O0FEOENJO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDNUNOOztBRCtDSTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQzdDTjs7QURpREU7RUFDRSxpQkFBQTtBQy9DSjs7QURtREE7RUFDRSxpQkFBQTtBQ2hERjs7QURvREE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0FDakRGOztBRG1ERTtFQUNFLCtHQUFBO0VBQ0Esa0JBQUE7QUNqREoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lcGFnZS9ob21lcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvZnVuY3Rpb25zXCI7XHJcbkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvdmFyaWFibGVzXCI7XHJcbkBpbXBvcnQgXCJub2RlX21vZHVsZXMvYm9vdHN0cmFwL3Njc3MvbWl4aW5zXCI7XHJcbkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Nzcy9jb2xvcnNcIjtcclxuXHJcbi5wYWRkaW5nLXRvcF9jb250YWluZXIge1xyXG4gIHBhZGRpbmctdG9wOiAxMjhweDtcclxufVxyXG5cclxuXHJcbi5zd2lwZXItY29udGFpbmVyIHtcclxuICB6LWluZGV4OiAwICFpbXBvcnRhbnQ7XHJcblxyXG4gIC5jb250YWluZXIgLnJvdyB7XHJcbiAgICBtaW4taGVpZ2h0OiA3MjBweDtcclxuICB9XHJcblxyXG4gIGgxIHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcblxyXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKG1kKSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMi41cmVtO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICBjb2xvcjogI2ZmZmZmZmQ0O1xyXG5cclxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihtZCkge1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuc2xpZGVyLTEge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9pbWcvaGVyby5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgbWluLWhlaWdodDogNzIwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5zbGlkZXItMiB7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2ltZy9oZXJvLTIuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICAgIG1pbi1oZWlnaHQ6IDcyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAuc2xpZGVyLTMge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwic3JjL2Fzc2V0cy9pbWcvaGVyby00LmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBtaW4taGVpZ2h0OiA3MjBweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLy8gQ2Fyb3VzZWxcclxuI2hlcm8ge1xyXG4gIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5zd2lwZXItYnV0dG9uLXByZXYsIC5zd2lwZXItYnV0dG9uLW5leHQge1xyXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihtZCkge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5jYXJvdXNlbC10ZXh0IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMHB4O1xyXG4gIHJpZ2h0OiAwcHg7XHJcbiAgdG9wOiAyNDBweDtcclxuXHJcbiAgaDEge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG5cclxuICBwIHtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8vIFZyZWRub3N0aVxyXG4jdmFsdWVzIHtcclxuICBtYXJnaW4tdG9wOiAtMjAxcHg7XHJcblxyXG4gIC5jb2wge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbjogMDtcclxuXHJcbiAgICAmLmFjdGl2ZSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDQ0VBRkY7XHJcblxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGg1IHtcclxuICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnZhbHVlcy10YWIge1xyXG4gICAgICBwYWRkaW5nOiAxLjVyZW0gLjVyZW07XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcblxyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBpbWcge1xyXG4gICAgICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaDUge1xyXG4gICAgICAgICAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGltZyB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMXJlbTtcclxuICAgICAgb3BhY2l0eTogLjU7XHJcbiAgICB9XHJcblxyXG4gICAgaDUge1xyXG4gICAgICBtYXJnaW46IDA7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1mYW1pbHk6ICdHaWxyb3ktcmVndWxhcicsIHNhbnMtc2VyaWY7XHJcbiAgICAgIGNvbG9yOiAkc2Vjb25kYXJ5O1xyXG4gICAgICBvcGFjaXR5OiAuNTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC5zd2l0Y2gtY29udGFpbmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcblxyXG4vLyBCYXplbmkgY2FyZHNcclxuXHJcbi5mdXR1cmUtY2FyZCB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuXHJcbiAgLmZ1dHVyZS1jYXJkLWltYWdlIHtcclxuICAgIGhlaWdodDogNjI0cHg7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAxcmVtO1xyXG5cclxuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihtZCkge1xyXG4gICAgICBoZWlnaHQ6IDMyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICY6YWZ0ZXIge1xyXG4gICAgICBjb250ZW50OiAnXFxBJztcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICBib3R0b206IDA7XHJcbiAgICAgIGxlZnQ6IDA7XHJcbiAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDYwZDFhMDAsICMwNjBkMWEpO1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMXM7XHJcbiAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDFzO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG5cclxuICAgICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKG1kKSB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDYwZDFhMDAsICMwNjBkMWEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaG92ZXJfX2J0biB7IC8vIGJ1dHRvbiBsYWJlbFxyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzLCB0cmFuc2Zvcm0gLjNzIGVhc2UtaW47XHJcbiAgei1pbmRleDogMjtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4jZnV0dXJlLXBvb2wsICNiZXRvbnNraS1iYXplbiwgI2JhemVuaS1zYS1mb2xpam9tIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMzAlKTtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcywgdHJhbnNmb3JtIC4zcyBlYXNlLWluO1xyXG59XHJcblxyXG4uZnV0dXJlLWNhcmQ6aG92ZXIge1xyXG4gIC5idG4tc2Vjb25kYXJ5IHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcywgdHJhbnNmb3JtIC4zcyBlYXNlLW91dDtcclxuICB9XHJcbiAgI2Z1dHVyZS1wb29sIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzLCB0cmFuc2Zvcm0gLjNzIGVhc2Utb3V0O1xyXG4gIH1cclxufVxyXG5cclxuLmJhemVuaS1jYXJkOmhvdmVyIHtcclxuICAuYnRuLXNlY29uZGFyeSB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3MsIHRyYW5zZm9ybSAuM3MgZWFzZS1vdXQ7XHJcbiAgfVxyXG4gICNiZXRvbnNraS1iYXplbiB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4zcywgdHJhbnNmb3JtIC4zcyBlYXNlLW91dDtcclxuICB9XHJcbn1cclxuXHJcbi5iYXplbmktY2FyZDpob3ZlciB7XHJcbiAgLmJ0bi1zZWNvbmRhcnkge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjNzLCB0cmFuc2Zvcm0gLjNzIGVhc2Utb3V0O1xyXG4gIH1cclxuICAjYmF6ZW5pLXNhLWZvbGlqb20ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAuM3MsIHRyYW5zZm9ybSAuM3MgZWFzZS1vdXQ7XHJcbiAgfVxyXG59XHJcblxyXG4uYmF6ZW5pLWNhcmQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcblxyXG4gICY6bnRoLWNoaWxkKDEpIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgfVxyXG5cclxuICAuYmF6ZW5pLWNhcmQtaW1hZ2Uge1xyXG4gICAgaGVpZ2h0OiAyOTZweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxuXHJcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24obWQpIHtcclxuICAgICAgaGVpZ2h0OiAzMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAmOmFmdGVyIHtcclxuICAgICAgY29udGVudDogJ1xcQSc7XHJcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgYm90dG9tOiAwO1xyXG4gICAgICBsZWZ0OiAwO1xyXG4gICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA2MGQxYTAwLCAjMDYwZDFhKTtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgdHJhbnNpdGlvbjogYWxsIDFzO1xyXG4gICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAxcztcclxuICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuXHJcbiAgICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihzbSkge1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoIzA2MGQxYTAwLCAjMDYwZDFhKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmFydGljbGUtbWV0YSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgcGFkZGluZzogMnJlbSAxLjVyZW07XHJcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGZvbnQtZmFtaWx5OiAnTGF0bycsIHNhbnMtc2VyaWY7XHJcblxyXG4gIGg0IHtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gIH1cclxuXHJcbiAgcCB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcbn1cclxuXHJcbi5iYWNrZ3JvdW5kX3dvcmtpbmcge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNFOUY3RkU7XHJcbiAgcGFkZGluZzogNnJlbSAwIDEwcmVtIDA7XHJcbn1cclxuXHJcbi5kb2xlLTIge1xyXG4gIG1hcmdpbi10b3A6IDEycmVtO1xyXG59XHJcblxyXG4uYmFja2dyb3VuZF9zZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlGN0ZFO1xyXG59XHJcblxyXG4ucGFkZGluZy10b3AtY2FyZF9vbmUge1xyXG4gIHBhZGRpbmctYm90dG9tOiAyNHB4O1xyXG5cclxuICAudGV4LXJpZ2h0IHtcclxuXHJcbiAgICAudGVzdCB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMTYuNjY2NjY2JTtcclxuICAgIH1cclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICAgICAgbGluZS1oZWlnaHQ6IDYwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgcCB7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgICAgIGxpbmUtaGVpZ2h0OiAycmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4tc2Vjb25kYXJ5IHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGODEyNTtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMzJweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC56LWluZGV4X3Bvc3Rpb24ge1xyXG4gICAgbWFyZ2luLXRvcDogMTA0cHg7XHJcbiAgfVxyXG59XHJcblxyXG4jc2xpa2EtdXAge1xyXG4gIG1hcmdpbi10b3A6IC02cmVtO1xyXG59XHJcblxyXG5cclxuLnBhZGRpbmctdG9wX19jYXJkcyB7XHJcbiAgcGFkZGluZy10b3A6IDEyOHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMjhweDtcclxuXHJcbiAgLmNhcmQge1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDE2cHggMjRweCByZ2JhKDAsIDAsIDAsIDAuMDYpLCAwcHggMnB4IDZweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAwcHggMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiIsIi5wYWRkaW5nLXRvcF9jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMTI4cHg7XG59XG5cbi5zd2lwZXItY29udGFpbmVyIHtcbiAgei1pbmRleDogMCAhaW1wb3J0YW50O1xufVxuLnN3aXBlci1jb250YWluZXIgLmNvbnRhaW5lciAucm93IHtcbiAgbWluLWhlaWdodDogNzIwcHg7XG59XG4uc3dpcGVyLWNvbnRhaW5lciBoMSB7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0xcHg7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgLnN3aXBlci1jb250YWluZXIgaDEge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG59XG4uc3dpcGVyLWNvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBjb2xvcjogI2ZmZmZmZmQ0O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gIC5zd2lwZXItY29udGFpbmVyIHAge1xuICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9XG59XG4uc3dpcGVyLWNvbnRhaW5lciAuc2xpZGVyLTEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2ltZy9oZXJvLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBtaW4taGVpZ2h0OiA3MjBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbn1cbi5zd2lwZXItY29udGFpbmVyIC5zbGlkZXItMiB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcInNyYy9hc3NldHMvaW1nL2hlcm8tMi5qcGdcIik7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgbWluLWhlaWdodDogNzIwcHg7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc3dpcGVyLWNvbnRhaW5lciAuc2xpZGVyLTMge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJzcmMvYXNzZXRzL2ltZy9oZXJvLTQuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIG1pbi1oZWlnaHQ6IDcyMHB4O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4jaGVybyBpbWcge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gIC5zd2lwZXItYnV0dG9uLXByZXYsIC5zd2lwZXItYnV0dG9uLW5leHQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cblxuLmNhcm91c2VsLXRleHQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDBweDtcbiAgcmlnaHQ6IDBweDtcbiAgdG9wOiAyNDBweDtcbn1cbi5jYXJvdXNlbC10ZXh0IGgxIHtcbiAgY29sb3I6ICNmZmY7XG59XG4uY2Fyb3VzZWwtdGV4dCBwIHtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbiN2YWx1ZXMge1xuICBtYXJnaW4tdG9wOiAtMjAxcHg7XG59XG4jdmFsdWVzIC5jb2wge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBtYXJnaW46IDA7XG59XG4jdmFsdWVzIC5jb2wuYWN0aXZlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0NDRUFGRjtcbn1cbiN2YWx1ZXMgLmNvbC5hY3RpdmUgaW1nIHtcbiAgb3BhY2l0eTogMTtcbn1cbiN2YWx1ZXMgLmNvbC5hY3RpdmUgaDUge1xuICBvcGFjaXR5OiAxO1xufVxuI3ZhbHVlcyAuY29sIC52YWx1ZXMtdGFiIHtcbiAgcGFkZGluZzogMS41cmVtIDAuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbiN2YWx1ZXMgLmNvbCAudmFsdWVzLXRhYjpob3ZlciBpbWcge1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59XG4jdmFsdWVzIC5jb2wgLnZhbHVlcy10YWI6aG92ZXIgaDUge1xuICBvcGFjaXR5OiAxICFpbXBvcnRhbnQ7XG59XG4jdmFsdWVzIC5jb2wgaW1nIHtcbiAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICBvcGFjaXR5OiAwLjU7XG59XG4jdmFsdWVzIC5jb2wgaDUge1xuICBtYXJnaW46IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1mYW1pbHk6IFwiR2lscm95LXJlZ3VsYXJcIiwgc2Fucy1zZXJpZjtcbiAgY29sb3I6ICMxNzE1NEI7XG4gIG9wYWNpdHk6IDAuNTtcbn1cbiN2YWx1ZXMgLnN3aXRjaC1jb250YWluZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmZ1dHVyZS1jYXJkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG4uZnV0dXJlLWNhcmQgLmZ1dHVyZS1jYXJkLWltYWdlIHtcbiAgaGVpZ2h0OiA2MjRweDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nOiAxcmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gIC5mdXR1cmUtY2FyZCAuZnV0dXJlLWNhcmQtaW1hZ2Uge1xuICAgIGhlaWdodDogMzIwcHg7XG4gIH1cbn1cbi5mdXR1cmUtY2FyZCAuZnV0dXJlLWNhcmQtaW1hZ2U6YWZ0ZXIge1xuICBjb250ZW50OiBcIlxcYVwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwNjBkMWEwMCwgIzA2MGQxYSk7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IGFsbCAxcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMXM7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgLmZ1dHVyZS1jYXJkIC5mdXR1cmUtY2FyZC1pbWFnZTphZnRlciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDYwZDFhMDAsICMwNjBkMWEpO1xuICB9XG59XG5cbi5ob3Zlcl9fYnRuIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzLCB0cmFuc2Zvcm0gMC4zcyBlYXNlLWluO1xuICB6LWluZGV4OiAyO1xuICBvcGFjaXR5OiAwO1xufVxuXG4jZnV0dXJlLXBvb2wsICNiZXRvbnNraS1iYXplbiwgI2JhemVuaS1zYS1mb2xpam9tIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDMwJSk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcywgdHJhbnNmb3JtIDAuM3MgZWFzZS1pbjtcbn1cblxuLmZ1dHVyZS1jYXJkOmhvdmVyIC5idG4tc2Vjb25kYXJ5IHtcbiAgb3BhY2l0eTogMTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzLCB0cmFuc2Zvcm0gMC4zcyBlYXNlLW91dDtcbn1cbi5mdXR1cmUtY2FyZDpob3ZlciAjZnV0dXJlLXBvb2wge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcywgdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQ7XG59XG5cbi5iYXplbmktY2FyZDpob3ZlciAuYnRuLXNlY29uZGFyeSB7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcywgdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQ7XG59XG4uYmF6ZW5pLWNhcmQ6aG92ZXIgI2JldG9uc2tpLWJhemVuIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MsIHRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0O1xufVxuXG4uYmF6ZW5pLWNhcmQ6aG92ZXIgLmJ0bi1zZWNvbmRhcnkge1xuICBvcGFjaXR5OiAxO1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3MsIHRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0O1xufVxuLmJhemVuaS1jYXJkOmhvdmVyICNiYXplbmktc2EtZm9saWpvbSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzLCB0cmFuc2Zvcm0gMC4zcyBlYXNlLW91dDtcbn1cblxuLmJhemVuaS1jYXJkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG4uYmF6ZW5pLWNhcmQ6bnRoLWNoaWxkKDEpIHtcbiAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cbi5iYXplbmktY2FyZCAuYmF6ZW5pLWNhcmQtaW1hZ2Uge1xuICBoZWlnaHQ6IDI5NnB4O1xuICB3aWR0aDogMTAwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nOiAxcmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gIC5iYXplbmktY2FyZCAuYmF6ZW5pLWNhcmQtaW1hZ2Uge1xuICAgIGhlaWdodDogMzIwcHg7XG4gIH1cbn1cbi5iYXplbmktY2FyZCAuYmF6ZW5pLWNhcmQtaW1hZ2U6YWZ0ZXIge1xuICBjb250ZW50OiBcIlxcYVwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KCMwNjBkMWEwMCwgIzA2MGQxYSk7XG4gIG9wYWNpdHk6IDE7XG4gIHRyYW5zaXRpb246IGFsbCAxcztcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMXM7XG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgLmJhemVuaS1jYXJkIC5iYXplbmktY2FyZC1pbWFnZTphZnRlciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgjMDYwZDFhMDAsICMwNjBkMWEpO1xuICB9XG59XG5cbi5hcnRpY2xlLW1ldGEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMjtcbiAgcGFkZGluZzogMnJlbSAxLjVyZW07XG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XG4gIHRleHQtYWxpZ246IGxlZnQ7XG4gIGZvbnQtZmFtaWx5OiBcIkxhdG9cIiwgc2Fucy1zZXJpZjtcbn1cbi5hcnRpY2xlLW1ldGEgaDQge1xuICBjb2xvcjogI2ZmZjtcbn1cbi5hcnRpY2xlLW1ldGEgcCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uYmFja2dyb3VuZF93b3JraW5nIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U5RjdGRTtcbiAgcGFkZGluZzogNnJlbSAwIDEwcmVtIDA7XG59XG5cbi5kb2xlLTIge1xuICBtYXJnaW4tdG9wOiAxMnJlbTtcbn1cblxuLmJhY2tncm91bmRfc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNFOUY3RkU7XG59XG5cbi5wYWRkaW5nLXRvcC1jYXJkX29uZSB7XG4gIHBhZGRpbmctYm90dG9tOiAyNHB4O1xufVxuLnBhZGRpbmctdG9wLWNhcmRfb25lIC50ZXgtcmlnaHQgLnRlc3Qge1xuICBtYXJnaW4tcmlnaHQ6IDE2LjY2NjY2NiU7XG59XG4ucGFkZGluZy10b3AtY2FyZF9vbmUgLnRleC1yaWdodCBoMyB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgbGluZS1oZWlnaHQ6IDYwcHg7XG59XG4ucGFkZGluZy10b3AtY2FyZF9vbmUgLnRleC1yaWdodCBwIHtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgbGluZS1oZWlnaHQ6IDJyZW07XG59XG4ucGFkZGluZy10b3AtY2FyZF9vbmUgLnRleC1yaWdodCAuYnRuLXNlY29uZGFyeSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRjgxMjU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxldHRlci1zcGFjaW5nOiAwLjMycHg7XG59XG4ucGFkZGluZy10b3AtY2FyZF9vbmUgLnotaW5kZXhfcG9zdGlvbiB7XG4gIG1hcmdpbi10b3A6IDEwNHB4O1xufVxuXG4jc2xpa2EtdXAge1xuICBtYXJnaW4tdG9wOiAtNnJlbTtcbn1cblxuLnBhZGRpbmctdG9wX19jYXJkcyB7XG4gIHBhZGRpbmctdG9wOiAxMjhweDtcbiAgcGFkZGluZy1ib3R0b206IDEyOHB4O1xufVxuLnBhZGRpbmctdG9wX19jYXJkcyAuY2FyZCB7XG4gIGJveC1zaGFkb3c6IDBweCAxNnB4IDI0cHggcmdiYSgwLCAwLCAwLCAwLjA2KSwgMHB4IDJweCA2cHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgMHB4IDBweCAxcHggcmdiYSgwLCAwLCAwLCAwLjA0KTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xufSIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIiwiJHByaW1hcnk6ICMyRTc5Q0E7XHJcbiRwcmltYXJ5LWRhcms6ICMyMjY1YWU7XHJcblxyXG4kc2Vjb25kYXJ5OiAjMTcxNTRCO1xyXG5cclxuJG9yYW5nZTogI0ZGODEyNTtcclxuJG9yYW5nZS1kYXJrOiAjZDY2YzFmO1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-homepage',
                templateUrl: './homepage.component.html',
                styleUrls: ['./homepage.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/izgradnja-bazena/izgradnja-bazena.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/izgradnja-bazena/izgradnja-bazena.component.ts ***!
  \**********************************************************************/
/*! exports provided: IzgradnjaBazenaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IzgradnjaBazenaComponent", function() { return IzgradnjaBazenaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! file-saver */ "./node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../lazy-img-directive.directive */ "./src/app/lazy-img-directive.directive.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_ponuda_ponuda_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ponuda/ponuda.component */ "./src/app/components/ponuda/ponuda.component.ts");








const _c0 = function () { return ["/kontakt"]; };
class IzgradnjaBazenaComponent {
    constructor(metaTagService, title) {
        this.metaTagService = metaTagService;
        this.title = title;
        this.type = 'component';
        this.disabled = false;
    }
    ngOnInit() {
        this.metaTagService.addTags([
            { name: 'keywords', content: 'Pool Service u ponudi nudi održavanje bazena na nedeljnom nivou. Na vama je samo da se prepustite i uživate.' },
            { name: 'robots', content: 'index, follow' },
            { name: 'author', content: 'Pool Service' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'date', content: '2021-02-01', scheme: 'YYYY-MM-DD' },
            { charset: 'UTF-8' }
        ]);
        this.title.setTitle("Odrzavanje");
    }
    downloadPdf() {
        const pdfUrl = '/assets/pdf/uputstvo.pdf';
        const pdfName = 'uputstvo.pdf';
        file_saver__WEBPACK_IMPORTED_MODULE_1__["saveAs"](pdfUrl, pdfName);
    }
}
IzgradnjaBazenaComponent.ɵfac = function IzgradnjaBazenaComponent_Factory(t) { return new (t || IzgradnjaBazenaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"])); };
IzgradnjaBazenaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IzgradnjaBazenaComponent, selectors: [["app-izgradnja-bazena"]], decls: 98, vars: 6, consts: [[1, "container", "pt-128"], [1, "row"], [1, "col-12", "text-center"], [1, "row", "justify-content-center"], [1, "col-12", "col-lg-7"], [1, "hero-img_padding"], ["src", "assets/img/izgradnja-bazena/odrzavanje-bazena.jpg", "alt", "Odr\u017Eavanje bazena", 1, "img-fluid", "w-100", "d-none", "d-md-block"], ["src", "assets/img/izgradnja-bazena/odrzavanje-bazena-manja.jpg", "alt", "Odr\u017Eavanje bazena", 1, "img-fluid", "w-100", "d-block", "d-md-none"], [1, "container"], [1, "col-md-6", "pr-5"], [1, "small", "text-primary", "text-uppercase", "font-weight-bold"], [1, "col-md-6"], [1, "pt-md-5"], [1, "row", "list-item"], [1, "col-6", "mt-4"], [1, "d-inline-flex"], [1, "fas", "fa-check"], [1, "bg-light", "mt-128"], [1, "container-fluid", "content"], [1, "mx-lg-5", "mx-sm-0"], [1, "row", "align-items-center", "py-5"], ["id", "slika-up", 1, "col-12", "col-md-6"], ["src", "assets/img/izgradnja-bazena/odrzavanje-bazena-zabava.jpg", "alt", "Vas bazen uvek spreman za zabavu", 1, "img-fluid", "mb-4", "mb-sm-0", 2, "border-radius", "5px"], [1, "col-12", "col-md-6"], [1, "test"], [1, "mb-4"], [1, "btn", "btn-secondary", "border-0", "mt-3", 3, "routerLink"], [1, "mt-128"], [1, "container-fluid", "content", "pb-64"], [1, "mx-lg-5", "mx-md-0"], [1, "col-12", "col-md-6", "order-2", "order-md-1"], [1, "col-12", "col-md-6", "order-1", "order-md-2"], ["src", "assets/img/izgradnja-bazena/slika-odrzavanje-01.jpg", "loading", "lazy", "alt", "card-slika", 1, "img-fluid", "mb-4", "mb-sm-0", 2, "border-radius", "5px"], [2, "background", "linear-gradient(91.15deg, #488AD1 0.3%, #2E79CA 99.61%)"], [1, "container", "content", "py-128"], [1, "row", "align-items-center", "justify-content-between"], [1, "text-white"], ["id", "lines", 1, "col-md-4"], [1, "btn", "btn-secondary", "border-0", 3, "click"], [1, "container-fluid", "my-128"], [1, "col-md-6", "text-center"], [1, "btn", "btn-secondary", "border-0", 3, "routerLink"]], template: function IzgradnjaBazenaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Odr\u017Eavanje bazena");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Pool Service u ponudi nudi odr\u017Eavanje bazena na nedeljnom nivou. Na vama je samo da se prepustite i u\u017Eivate. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "ODR\u017DAVANJE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "5 razloga da se prijavite na redovno odr\u017Eavanje bazena");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Pool Service je firma na koju se mo\u017Eete osloniti kada je u pitanju odr\u017Eavanje bazena u Novom Sadu i okolini.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Na\u0161e stru\u010Dno osoblje uvek te\u017Ei da ispuni i nadma\u0161i o\u010Dekivanja na\u0161ih klijenata.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "U\u0161tede\u0107ete vreme tako \u0161to \u0107e te odr\u017Eavanje prepustiti nama");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Redovno odr\u017Eavanje osigurava da va\u0161 bazen ostane u sjajnom stanju");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "U\u0161tede\u0107ete novac ukoliko ranije uo\u010Dimo probleme i spre\u010Dimo potrebu za velikim popravkama");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Va\u0161 bazen \u0107e imati hemikalije koje su mu potrebne, u pravom trenutku");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Usluga odr\u017Eavanja \u010Dini \u017Eivot lak\u0161im, veoma je lako privi\u0107i se na to");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "section", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](54, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h3", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Pouzdan partner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Sa proverom opreme, testiranjem vode i uslugom \u010Di\u0161\u0107enja bazena od strane Pool Service, mo\u017Eete biti sigurni da je va\u0161 bazen uvek spreman za zabavu.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Kontaktirajte nas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "section", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h3", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "U\u017Eivajte u letu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "U onim vru\u0107im letnjim danima ne \u017Eelite da brinete da li Vam filter radi ili ne. I sigurno ne \u017Eelite da razmi\u0161ljate o pH vrednosti vode, dok Vas klinci zovu da se igrate. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Neka Pool Service uradi sav posao za vas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "Kontaktirajte nas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](78, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "section", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "div", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h3", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "Kako Pool Service mo\u017Ee da vam pomogne?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "U slu\u010Daju da se odlu\u010Dite da sami odr\u017Eavate svoj bazen, ne brinite, Pool Service je mislio i na Vas. Napravili smo Vam sa\u017Eeto uputstvo o odr\u017Eavanju vode u bazenu.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function IzgradnjaBazenaComponent_Template_button_click_88_listener() { return ctx.downloadPdf(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Preuzmi uputstvo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "Ne dopustite da Va\u0161 bazen postane zapu\u0161ten. Nazovite Pool Service jo\u0161 danas.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "a", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Kontaktirajte nas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](97, "app-ponuda");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_4__["LazyImgDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _components_ponuda_ponuda_component__WEBPACK_IMPORTED_MODULE_6__["PonudaComponent"]], styles: ["h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h3[_ngcontent-%COMP%] {\n  margin-bottom: 2.5rem;\n}\n\n.line-element[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 8%;\n  z-index: 0;\n}\n\n.padding-top_header[_ngcontent-%COMP%] {\n  padding-top: 128px;\n}\n\n@media (max-width: 767.98px) {\n  .padding-top_header[_ngcontent-%COMP%] {\n    padding-top: 64px;\n  }\n}\n\n.padding-top_header[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  border: 2px solid #E5E5E5;\n  box-sizing: border-box;\n  border-radius: 30px;\n  color: #2E79CA;\n}\n\n.hero-img_padding[_ngcontent-%COMP%] {\n  padding-top: 72px;\n  padding-bottom: 96px;\n}\n\n@media (max-width: 767.98px) {\n  .hero-img_padding[_ngcontent-%COMP%] {\n    padding-top: 24px;\n    padding-bottom: 48px;\n  }\n}\n\n.padding-top-card_two[_ngcontent-%COMP%] {\n  padding-bottom: 172px;\n}\n\n.padding-top-card_two[_ngcontent-%COMP%]   .background_card[_ngcontent-%COMP%] {\n  background-color: #E9F7FE;\n  height: 576px;\n}\n\n.padding-top-card_two[_ngcontent-%COMP%]   .tex-right[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 48px;\n  line-height: 60px;\n}\n\n.padding-top-card_two[_ngcontent-%COMP%]   .tex-right[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: normal;\n  font-size: 1.125rem;\n  line-height: 2rem;\n}\n\n.padding-top-card_two[_ngcontent-%COMP%]   .tex-right[_ngcontent-%COMP%]   .btn-secondary[_ngcontent-%COMP%] {\n  background-color: #FF8125;\n  font-weight: 600;\n  letter-spacing: 0.32px;\n}\n\n.padding-top-card_two[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%] {\n  font-size: 16px;\n  line-height: 19px;\n}\n\n.padding-top-card_two[_ngcontent-%COMP%]   .list-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #36B37E;\n  padding-right: 20px;\n}\n\n.padding-top-card_two[_ngcontent-%COMP%]   .test[_ngcontent-%COMP%] {\n  margin-right: 16.666666%;\n}\n\n.uputstvo_padding[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n}\n\n.uputstvo_padding[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  line-height: 1.8125rem;\n  letter-spacing: 0.1px;\n  color: #FFFFFF;\n  opacity: 0.8;\n}\n\n.uputstvo_padding[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background: #FF8125;\n  border-radius: 36px;\n  color: #fff;\n  margin-right: 250px;\n  margin-top: 16px;\n}\n\n@media (max-width: 767.98px) {\n  .uputstvo_padding[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    margin-right: 20vw;\n    margin-left: auto;\n    text-align: center;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaXpncmFkbmphLWJhemVuYS9FOlxcUHJvamVjdHNcXHBvb2xzZXJ2aWNlXFxwb29sLXNlcnZpY2VcXGFuZ3VsYXItc3JjL3NyY1xcYXBwXFxwYWdlc1xcaXpncmFkbmphLWJhemVuYVxcaXpncmFkbmphLWJhemVuYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvaXpncmFkbmphLWJhemVuYS9pemdyYWRuamEtYmF6ZW5hLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9pemdyYWRuamEtYmF6ZW5hL0U6XFxQcm9qZWN0c1xccG9vbHNlcnZpY2VcXHBvb2wtc2VydmljZVxcYW5ndWxhci1zcmMvbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2JyZWFrcG9pbnRzLnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2l6Z3JhZG5qYS1iYXplbmEvRTpcXFByb2plY3RzXFxwb29sc2VydmljZVxccG9vbC1zZXJ2aWNlXFxhbmd1bGFyLXNyYy9zcmNcXGFzc2V0c1xcc2Nzc1xcX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtBO0VBQ0UscUJBQUE7QUNKRjs7QURPQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUNKRjs7QURRQTtFQUNFLGtCQUFBO0FDTEY7O0FDNkRJO0VGekRKO0lBSUksaUJBQUE7RUNKRjtBQUNGOztBRE1FO0VBQ0UseUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0czQk07QUZ1QlY7O0FEUUE7RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FDTEY7O0FDNkNJO0VGMUNKO0lBS0ksaUJBQUE7SUFDQSxvQkFBQTtFQ0pGO0FBQ0Y7O0FEU0E7RUFDRSxxQkFBQTtBQ05GOztBRFFFO0VBQ0UseUJBQUE7RUFDQSxhQUFBO0FDTko7O0FEV0k7RUFDRSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ1ROOztBRFlJO0VBQ0UsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDVk47O0FEYUk7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUNYTjs7QURnQkU7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUNkSjs7QURnQkk7RUFDRSxjQUFBO0VBQ0EsbUJBQUE7QUNkTjs7QURrQkU7RUFDRSx3QkFBQTtBQ2hCSjs7QURzQkU7RUFDRSxjQUFBO0FDbkJKOztBRHNCRTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDcEJKOztBRHVCRTtFQUNFLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQ3JCSjs7QUNiSTtFRjZCRjtJQU9JLGtCQUFBO0lBQ0EsaUJBQUE7SUFDQSxrQkFBQTtFQ25CSjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvaXpncmFkbmphLWJhemVuYS9pemdyYWRuamEtYmF6ZW5hLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9mdW5jdGlvbnNcIjtcclxuQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy92YXJpYWJsZXNcIjtcclxuQGltcG9ydCBcIm5vZGVfbW9kdWxlcy9ib290c3RyYXAvc2Nzcy9taXhpbnNcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbG9yc1wiO1xyXG5cclxuaDEsIGgyLCBoMyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xyXG59XHJcblxyXG4ubGluZS1lbGVtZW50IHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDglO1xyXG4gIHotaW5kZXg6IDA7XHJcbn1cclxuXHJcblxyXG4ucGFkZGluZy10b3BfaGVhZGVyIHtcclxuICBwYWRkaW5nLXRvcDogMTI4cHg7XHJcblxyXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihzbSkge1xyXG4gICAgcGFkZGluZy10b3A6IDY0cHg7XHJcbiAgfVxyXG5cclxuICAuYnRuIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNFNUU1RTU7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcclxuICAgIGNvbG9yOiAkcHJpbWFyeTtcclxuICB9XHJcbn1cclxuXHJcbi5oZXJvLWltZ19wYWRkaW5nIHtcclxuICBwYWRkaW5nLXRvcDogNzJweDtcclxuICBwYWRkaW5nLWJvdHRvbTogOTZweDtcclxuXHJcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHNtKSB7XHJcbiAgICBwYWRkaW5nLXRvcDogMjRweDtcclxuICAgIHBhZGRpbmctYm90dG9tOiA0OHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4ucGFkZGluZy10b3AtY2FyZF90d28ge1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNzJweDtcclxuXHJcbiAgLmJhY2tncm91bmRfY2FyZCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTlGN0ZFO1xyXG4gICAgaGVpZ2h0OiA1NzZweDtcclxuICB9XHJcblxyXG5cclxuICAudGV4LXJpZ2h0IHtcclxuICAgIGgzIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgICAgZm9udC1zaXplOiA0OHB4O1xyXG4gICAgICBsaW5lLWhlaWdodDogNjBweDtcclxuICAgIH1cclxuXHJcbiAgICBwIHtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmJ0bi1zZWNvbmRhcnkge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY4MTI1O1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBsZXR0ZXItc3BhY2luZzogMC4zMnB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIC5saXN0LWl0ZW0ge1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDE5cHg7XHJcblxyXG4gICAgaSB7XHJcbiAgICAgIGNvbG9yOiAjMzZCMzdFO1xyXG4gICAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLnRlc3Qge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNi42NjY2NjYlO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi51cHV0c3R2b19wYWRkaW5nIHtcclxuICBoNCB7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjgxMjVyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICB9XHJcblxyXG4gIC5idG4ge1xyXG4gICAgYmFja2dyb3VuZDogI0ZGODEyNTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDM2cHg7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIG1hcmdpbi1yaWdodDogMjUwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxNnB4O1xyXG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHNtKSB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMjB2dztcclxuICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuIiwiaDEsIGgyLCBoMyB7XG4gIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbn1cblxuLmxpbmUtZWxlbWVudCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDglO1xuICB6LWluZGV4OiAwO1xufVxuXG4ucGFkZGluZy10b3BfaGVhZGVyIHtcbiAgcGFkZGluZy10b3A6IDEyOHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gIC5wYWRkaW5nLXRvcF9oZWFkZXIge1xuICAgIHBhZGRpbmctdG9wOiA2NHB4O1xuICB9XG59XG4ucGFkZGluZy10b3BfaGVhZGVyIC5idG4ge1xuICBib3JkZXI6IDJweCBzb2xpZCAjRTVFNUU1O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICBjb2xvcjogIzJFNzlDQTtcbn1cblxuLmhlcm8taW1nX3BhZGRpbmcge1xuICBwYWRkaW5nLXRvcDogNzJweDtcbiAgcGFkZGluZy1ib3R0b206IDk2cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgLmhlcm8taW1nX3BhZGRpbmcge1xuICAgIHBhZGRpbmctdG9wOiAyNHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA0OHB4O1xuICB9XG59XG5cbi5wYWRkaW5nLXRvcC1jYXJkX3R3byB7XG4gIHBhZGRpbmctYm90dG9tOiAxNzJweDtcbn1cbi5wYWRkaW5nLXRvcC1jYXJkX3R3byAuYmFja2dyb3VuZF9jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0U5RjdGRTtcbiAgaGVpZ2h0OiA1NzZweDtcbn1cbi5wYWRkaW5nLXRvcC1jYXJkX3R3byAudGV4LXJpZ2h0IGgzIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBsaW5lLWhlaWdodDogNjBweDtcbn1cbi5wYWRkaW5nLXRvcC1jYXJkX3R3byAudGV4LXJpZ2h0IHAge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBsaW5lLWhlaWdodDogMnJlbTtcbn1cbi5wYWRkaW5nLXRvcC1jYXJkX3R3byAudGV4LXJpZ2h0IC5idG4tc2Vjb25kYXJ5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGODEyNTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMzJweDtcbn1cbi5wYWRkaW5nLXRvcC1jYXJkX3R3byAubGlzdC1pdGVtIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMTlweDtcbn1cbi5wYWRkaW5nLXRvcC1jYXJkX3R3byAubGlzdC1pdGVtIGkge1xuICBjb2xvcjogIzM2QjM3RTtcbiAgcGFkZGluZy1yaWdodDogMjBweDtcbn1cbi5wYWRkaW5nLXRvcC1jYXJkX3R3byAudGVzdCB7XG4gIG1hcmdpbi1yaWdodDogMTYuNjY2NjY2JTtcbn1cblxuLnVwdXRzdHZvX3BhZGRpbmcgaDQge1xuICBjb2xvcjogI0ZGRkZGRjtcbn1cbi51cHV0c3R2b19wYWRkaW5nIHAge1xuICBmb250LXNpemU6IDEuMTI1cmVtO1xuICBsaW5lLWhlaWdodDogMS44MTI1cmVtO1xuICBsZXR0ZXItc3BhY2luZzogMC4xcHg7XG4gIGNvbG9yOiAjRkZGRkZGO1xuICBvcGFjaXR5OiAwLjg7XG59XG4udXB1dHN0dm9fcGFkZGluZyAuYnRuIHtcbiAgYmFja2dyb3VuZDogI0ZGODEyNTtcbiAgYm9yZGVyLXJhZGl1czogMzZweDtcbiAgY29sb3I6ICNmZmY7XG4gIG1hcmdpbi1yaWdodDogMjUwcHg7XG4gIG1hcmdpbi10b3A6IDE2cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgLnVwdXRzdHZvX3BhZGRpbmcgLmJ0biB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyMHZ3O1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxufSIsIi8vIEJyZWFrcG9pbnQgdmlld3BvcnQgc2l6ZXMgYW5kIG1lZGlhIHF1ZXJpZXMuXG4vL1xuLy8gQnJlYWtwb2ludHMgYXJlIGRlZmluZWQgYXMgYSBtYXAgb2YgKG5hbWU6IG1pbmltdW0gd2lkdGgpLCBvcmRlciBmcm9tIHNtYWxsIHRvIGxhcmdlOlxuLy9cbi8vICAgICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweClcbi8vXG4vLyBUaGUgbWFwIGRlZmluZWQgaW4gdGhlIGAkZ3JpZC1icmVha3BvaW50c2AgZ2xvYmFsIHZhcmlhYmxlIGlzIHVzZWQgYXMgdGhlIGAkYnJlYWtwb2ludHNgIGFyZ3VtZW50IGJ5IGRlZmF1bHQuXG5cbi8vIE5hbWUgb2YgdGhlIG5leHQgYnJlYWtwb2ludCwgb3IgbnVsbCBmb3IgdGhlIGxhc3QgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20pXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgbWRcbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSwgJGJyZWFrcG9pbnQtbmFtZXM6ICh4cyBzbSBtZCBsZyB4bCkpXG4vLyAgICBtZFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cywgJGJyZWFrcG9pbnQtbmFtZXM6IG1hcC1rZXlzKCRicmVha3BvaW50cykpIHtcbiAgJG46IGluZGV4KCRicmVha3BvaW50LW5hbWVzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG4gIT0gbnVsbCBhbmQgJG4gPCBsZW5ndGgoJGJyZWFrcG9pbnQtbmFtZXMpLCBudGgoJGJyZWFrcG9pbnQtbmFtZXMsICRuICsgMSksIG51bGwpO1xufVxuXG4vLyBNaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBzbWFsbGVzdCAoZmlyc3QpIGJyZWFrcG9pbnQuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1taW4oc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICA1NzZweFxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAkbmFtZSk7XG4gIEByZXR1cm4gaWYoJG1pbiAhPSAwLCAkbWluLCBudWxsKTtcbn1cblxuLy8gTWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBOdWxsIGZvciB0aGUgbGFyZ2VzdCAobGFzdCkgYnJlYWtwb2ludC5cbi8vIFRoZSBtYXhpbXVtIHZhbHVlIGlzIGNhbGN1bGF0ZWQgYXMgdGhlIG1pbmltdW0gb2YgdGhlIG5leHQgb25lIGxlc3MgMC4wMnB4XG4vLyB0byB3b3JrIGFyb3VuZCB0aGUgbGltaXRhdGlvbnMgb2YgYG1pbi1gIGFuZCBgbWF4LWAgcHJlZml4ZXMgYW5kIHZpZXdwb3J0cyB3aXRoIGZyYWN0aW9uYWwgd2lkdGhzLlxuLy8gU2VlIGh0dHBzOi8vd3d3LnczLm9yZy9UUi9tZWRpYXF1ZXJpZXMtNC8jbXEtbWluLW1heFxuLy8gVXNlcyAwLjAycHggcmF0aGVyIHRoYW4gMC4wMXB4IHRvIHdvcmsgYXJvdW5kIGEgY3VycmVudCByb3VuZGluZyBidWcgaW4gU2FmYXJpLlxuLy8gU2VlIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xNzgyNjFcbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1heChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDc2Ny45OHB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG5leHQ6IGJyZWFrcG9pbnQtbmV4dCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQHJldHVybiBpZigkbmV4dCwgYnJlYWtwb2ludC1taW4oJG5leHQsICRicmVha3BvaW50cykgLSAuMDIsIG51bGwpO1xufVxuXG4vLyBSZXR1cm5zIGEgYmxhbmsgc3RyaW5nIGlmIHNtYWxsZXN0IGJyZWFrcG9pbnQsIG90aGVyd2lzZSByZXR1cm5zIHRoZSBuYW1lIHdpdGggYSBkYXNoIGluIGZyb250LlxuLy8gVXNlZnVsIGZvciBtYWtpbmcgcmVzcG9uc2l2ZSB1dGlsaXRpZXMuXG4vL1xuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeCh4cywgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiXCIgIChSZXR1cm5zIGEgYmxhbmsgc3RyaW5nKVxuLy8gICAgPj4gYnJlYWtwb2ludC1pbmZpeChzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIFwiLXNtXCJcbkBmdW5jdGlvbiBicmVha3BvaW50LWluZml4KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gIEByZXR1cm4gaWYoYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50cykgPT0gbnVsbCwgXCJcIiwgXCItI3skbmFtZX1cIik7XG59XG5cbi8vIE1lZGlhIG9mIGF0IGxlYXN0IHRoZSBtaW5pbXVtIGJyZWFrcG9pbnQgd2lkdGguIE5vIHF1ZXJ5IGZvciB0aGUgc21hbGxlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgd2lkZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtaW4ge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIG9mIGF0IG1vc3QgdGhlIG1heGltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBsYXJnZXN0IGJyZWFrcG9pbnQuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQgYW5kIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgQGlmICRtYXgge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbWF4KSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2Uge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbi8vIE1lZGlhIHRoYXQgc3BhbnMgbXVsdGlwbGUgYnJlYWtwb2ludCB3aWR0aHMuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgYmV0d2VlbiB0aGUgbWluIGFuZCBtYXggYnJlYWtwb2ludHNcbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGxvd2VyLCAkdXBwZXIsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogYnJlYWtwb2ludC1taW4oJGxvd2VyLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkdXBwZXIsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJGxvd2VyLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWluID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bigkdXBwZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG5cbi8vIE1lZGlhIGJldHdlZW4gdGhlIGJyZWFrcG9pbnQncyBtaW5pbXVtIGFuZCBtYXhpbXVtIHdpZHRocy5cbi8vIE5vIG1pbmltdW0gZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LCBhbmQgbm8gbWF4aW11bSBmb3IgdGhlIGxhcmdlc3Qgb25lLlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IG9ubHkgdG8gdGhlIGdpdmVuIGJyZWFrcG9pbnQsIG5vdCB2aWV3cG9ydHMgYW55IHdpZGVyIG9yIG5hcnJvd2VyLlxuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtb25seSgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKTtcbiAgJG1heDogYnJlYWtwb2ludC1tYXgoJG5hbWUsICRicmVha3BvaW50cyk7XG5cbiAgQGlmICRtaW4gIT0gbnVsbCBhbmQgJG1heCAhPSBudWxsIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogJG1pbikgYW5kIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSBpZiAkbWF4ID09IG51bGwge1xuICAgIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtdXAoJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHMpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfVxufVxuIiwiJHByaW1hcnk6ICMyRTc5Q0E7XHJcbiRwcmltYXJ5LWRhcms6ICMyMjY1YWU7XHJcblxyXG4kc2Vjb25kYXJ5OiAjMTcxNTRCO1xyXG5cclxuJG9yYW5nZTogI0ZGODEyNTtcclxuJG9yYW5nZS1kYXJrOiAjZDY2YzFmO1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IzgradnjaBazenaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-izgradnja-bazena',
                templateUrl: './izgradnja-bazena.component.html',
                styleUrls: ['./izgradnja-bazena.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Meta"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/mozaik/mozaik.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/mozaik/mozaik.component.ts ***!
  \**************************************************/
/*! exports provided: MozaikComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MozaikComponent", function() { return MozaikComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lazy-img-directive.directive */ "./src/app/lazy-img-directive.directive.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_konsultacije_konsultacije_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/konsultacije/konsultacije.component */ "./src/app/components/konsultacije/konsultacije.component.ts");







const _c0 = function () { return ["/contact"]; };
class MozaikComponent {
    constructor(metaTagService, title) {
        this.metaTagService = metaTagService;
        this.title = title;
    }
    ngOnInit() {
        this.metaTagService.addTags([
            { name: 'keywords', content: 'Mozaik pločice dimenzija 2 x 2 cm sa fugom od 2mm postavljene <br> na papir dim. 33 x 33 cm. U ponudi je veliki izbor mozaika. ' },
            { name: 'robots', content: 'index, follow' },
            { name: 'author', content: 'Pool Service' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'date', content: '2021-02-01', scheme: 'YYYY-MM-DD' },
            { charset: 'UTF-8' }
        ]);
        this.title.setTitle("Mozaik");
    }
}
MozaikComponent.ɵfac = function MozaikComponent_Factory(t) { return new (t || MozaikComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
MozaikComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MozaikComponent, selectors: [["app-mozaik"]], decls: 64, vars: 2, consts: [[1, "container", "naslov__pading-top"], [1, "row"], [1, "col-12", "text-center"], [1, "pb-5"], [1, "container", "cards__padding-bottom"], [1, "row", "justify-content-around"], [1, "col-12", "col-md-4"], ["src", "assets/img/mozaik/11.jpg", "alt", "Card image cap", 1, "card-img-top", "img"], [1, "naslov", "pt-2", "pl-3"], ["src", "assets/img/mozaik/21.jpg", "alt", "Card image cap", 1, "card-img-top", "img", "pr-5"], ["src", "assets/img/mozaik/31.jpg", "alt", "Card image cap", 1, "card-img-top", "img"], ["src", "assets/img/mozaik/31.jpg", "alt", "Card image cap", 1, "card-img-top", "img", "pr-5"], ["src", "assets/img/mozaik/5.jpg", "alt", "Card image cap", 1, "card-img-top", "img"], ["src", "assets/img/mozaik/6.jpg", "alt", "Card image cap", 1, "card-img-top", "img", "pr-5"], [1, "col-12", "mt-4", "text-left", "text-md-center"], [1, "btn", "btn-primary", "mt-5", "mx-auto", "btn-lg", "border-0", 3, "routerLink"], ["src", "assets/img/mozaik/alkorplan.jpg", "alt", "Akroplan", 1, "pt-5", "img-fluid", "d-block", "mx-auto"], ["href", "assets/img/mozaik/katalog.pdf", "download", "newfilename", 1, "btn", "btn-primary", "btn-lg", "mt-4", "border-0"]], template: function MozaikComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Stakleni mozaik");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Mozaik plo\u010Dice dimenzija 2 x 2 cm sa fugom od 2mm postavljene ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " na papir dim. 33 x 33 cm. U ponudi je veliki izbor mozaika ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " kao i ukrasnih dekoracija, bordura i slika. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "BAHAMI A33+A32+A31");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " BAHAMI BRILLIANT ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " A33+A32+A11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "BAHAMI ICE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " A33+A32");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " DARK BAHAMI ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " A33+A32+A36");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "GREEN LAGUNA ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " A33+A32+A47 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "CUNAMI ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " A33+A31+A11");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Kontaktirajte nas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Alkorplan PVC folije za bazene");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Alkorplan je veoma poznat brand za PVC folije firme Renolit jedne od najve\u0107ih proizvodja\u010Da u Evropi. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Alkorplan folije za bazene \u010Desto se koriste za javne bazene, u aqua parkovima kao i u privatnim bazenima. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Preuzmite katalog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "app-konsultacije");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_3__["LazyImgDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _components_konsultacije_konsultacije_component__WEBPACK_IMPORTED_MODULE_5__["KonsultacijeComponent"]], styles: [".naslov__pading-top[_ngcontent-%COMP%] {\n  padding-top: 64px;\n  padding-bottom: 80px;\n}\n.naslov__pading-top[_ngcontent-%COMP%]   .plava[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 2px;\n  color: #175CFF;\n  text-align: justify;\n}\n.cards__padding-bottom[_ngcontent-%COMP%] {\n  padding-bottom: 128px;\n}\n.cards__padding-bottom[_ngcontent-%COMP%]   .naslov[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 25px;\n}\n.cards__padding-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 17px;\n  line-height: 25px;\n  text-align: justify;\n}\n.cards__padding-bottom[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 300px;\n}\n.btn[_ngcontent-%COMP%] {\n  background-color: #ff8125;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbW96YWlrL0U6XFxQcm9qZWN0c1xccG9vbHNlcnZpY2VcXHBvb2wtc2VydmljZVxcYW5ndWxhci1zcmMvc3JjXFxhcHBcXHBhZ2VzXFxtb3phaWtcXG1vemFpay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvbW96YWlrL21vemFpay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0Esb0JBQUE7QUNDSjtBREFJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxtQkFBQTtFQUVBLGNBQUE7RUFDQSxtQkFBQTtBQ0FSO0FETUE7RUFDSSxxQkFBQTtBQ0hKO0FESUk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0ZSO0FESUk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNGUjtBREtJO0VBQ0ksYUFBQTtFQUNBLFlBQUE7QUNIUjtBRFNBO0VBQ0kseUJBQUE7QUNOSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21vemFpay9tb3phaWsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmFzbG92X19wYWRpbmctdG9wIHtcclxuICAgIHBhZGRpbmctdG9wOiA2NHB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDgwcHg7XHJcbiAgICAucGxhdmEge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTdweDtcclxuXHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcclxuXHJcbiAgICAgICAgY29sb3I6ICMxNzVDRkY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgXHJcbn1cclxuXHJcbi5jYXJkc19fcGFkZGluZy1ib3R0b20ge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEyOHB4O1xyXG4gICAgLm5hc2xvdiB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcbiAgICB9XHJcblxyXG4gICAgLmltZ3tcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgIH1cclxuXHJcbiAgXHJcblxyXG59XHJcbi5idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODEyNTtcclxufSIsIi5uYXNsb3ZfX3BhZGluZy10b3Age1xuICBwYWRkaW5nLXRvcDogNjRweDtcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XG59XG4ubmFzbG92X19wYWRpbmctdG9wIC5wbGF2YSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjb2xvcjogIzE3NUNGRjtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLmNhcmRzX19wYWRkaW5nLWJvdHRvbSB7XG4gIHBhZGRpbmctYm90dG9tOiAxMjhweDtcbn1cbi5jYXJkc19fcGFkZGluZy1ib3R0b20gLm5hc2xvdiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxuLmNhcmRzX19wYWRkaW5nLWJvdHRvbSBwIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuLmNhcmRzX19wYWRkaW5nLWJvdHRvbSAuaW1nIHtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgd2lkdGg6IDMwMHB4O1xufVxuXG4uYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODEyNTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MozaikComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mozaik',
                templateUrl: './mozaik.component.html',
                styleUrls: ['./mozaik.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/notfound/notfound.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/notfound/notfound.component.ts ***!
  \******************************************************/
/*! exports provided: NotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotfoundComponent", function() { return NotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class NotfoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotfoundComponent.ɵfac = function NotfoundComponent_Factory(t) { return new (t || NotfoundComponent)(); };
NotfoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotfoundComponent, selectors: [["app-notfound"]], decls: 2, vars: 0, template: function NotfoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "notfound works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdGZvdW5kL25vdGZvdW5kLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NotfoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-notfound',
                templateUrl: './notfound.component.html',
                styleUrls: ['./notfound.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/osvetljenje/osvetljenje.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/osvetljenje/osvetljenje.component.ts ***!
  \************************************************************/
/*! exports provided: OsvetljenjeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OsvetljenjeComponent", function() { return OsvetljenjeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lazy-img-directive.directive */ "./src/app/lazy-img-directive.directive.ts");
/* harmony import */ var _components_konsultacije_konsultacije_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/konsultacije/konsultacije.component */ "./src/app/components/konsultacije/konsultacije.component.ts");






class OsvetljenjeComponent {
    constructor(metaTagService, title) {
        this.metaTagService = metaTagService;
        this.title = title;
    }
    ngOnInit() {
        this.metaTagService.addTags([
            { name: 'keywords', content: 'Reflektori služe za podvodno osvetljavanje bazena. Snage su od 300 W a napona 12V.' },
            { name: 'robots', content: 'index, follow' },
            { name: 'author', content: 'Pool Service' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'date', content: '2021-02-01', scheme: 'YYYY-MM-DD' },
            { charset: 'UTF-8' }
        ]);
        this.title.setTitle("Osvetljenje");
    }
}
OsvetljenjeComponent.ɵfac = function OsvetljenjeComponent_Factory(t) { return new (t || OsvetljenjeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
OsvetljenjeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OsvetljenjeComponent, selectors: [["app-osvetljenje"]], decls: 68, vars: 0, consts: [[1, "container", "my-128"], [1, "row"], [1, "col-12", "col-md-6"], [1, "plava"], [1, "col-12", "col-md-6", "pt-5"], [1, "col-12"], ["src", "assets/img/filtrianje-bazena/astral-logo.png", "alt", "logo cap", 1, "img-fluid", "mb-4", "mb-md-0"], [1, "col-12", "col-md-3"], [1, "col-5", "col-md-12"], ["src", "assets/img/osvetljenje/03.jpg", "alt", "Osvetlenje", 1, "img-fluid"], [1, "col-7", "col-md-12"], [1, "naslov", "pt-2"], [1, ""], ["src", "assets/img/osvetljenje/01.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/img/osvetljenje/02.jpg", "alt", "Card image cap", 1, "img-fluid"], ["src", "assets/img/osvetljenje/05.jpg", "alt", "Card image cap", 1, "img-fluid"]], template: function OsvetljenjeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "DODATNA OPREMA");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Osvetljenje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Reflektori slu\u017Ee za podvodno osvetljavanje bazena. Snage su od 300 W a napona 12V. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Postoje reflektori za betonske bazene i za bazene sa lajnerom. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Za svaki je potrebno predvideti trafo.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Reflektori betonski");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Reflektor 300W 12V Beton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Reflektor 100W Beton");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Ulo\u017Eci");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Ulo\u017Eak halogeni 300W 12V ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " Ulo\u017Eak halogeni 300W 12V ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Led ulo\u017Eak promena boja ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Reflektori lajner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Reflektor 300W 12V Lajner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Dodatna oprema");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Bu\u017Eir za reflektor 1m sivi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Razvodna kutija ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Transformator 300VA, 12V ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Transformator 2x300VA, 12V ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "app-konsultacije");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_3__["LazyImgDirective"], _components_konsultacije_konsultacije_component__WEBPACK_IMPORTED_MODULE_4__["KonsultacijeComponent"]], styles: [".naslov__pading-top[_ngcontent-%COMP%] {\n  padding-top: 64px;\n  padding-bottom: 80px;\n}\n.naslov__pading-top[_ngcontent-%COMP%]   .plava[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 2px;\n  color: #175CFF;\n  text-align: justify;\n}\n.cards__padding-bottom[_ngcontent-%COMP%] {\n  padding-bottom: 128px;\n}\n.cards__padding-bottom[_ngcontent-%COMP%]   .naslov[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 25px;\n}\n.cards__padding-bottom[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 17px;\n  line-height: 25px;\n  text-align: justify;\n}\n.cards__padding-bottom[_ngcontent-%COMP%]   .img[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 200px;\n}\n.cards__padding-bottom[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background-color: #ff8125;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvb3N2ZXRsamVuamUvRTpcXFByb2plY3RzXFxwb29sc2VydmljZVxccG9vbC1zZXJ2aWNlXFxhbmd1bGFyLXNyYy9zcmNcXGFwcFxccGFnZXNcXG9zdmV0bGplbmplXFxvc3ZldGxqZW5qZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvb3N2ZXRsamVuamUvb3N2ZXRsamVuamUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0FDQ0o7QURBSTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBQ0EsbUJBQUE7QUNBUjtBRE1BO0VBQ0kscUJBQUE7QUNISjtBRElJO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNGUjtBRElJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0FDRlI7QURLSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDSFI7QURNSTtFQUNJLHlCQUFBO0FDSlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9vc3ZldGxqZW5qZS9vc3ZldGxqZW5qZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXNsb3ZfX3BhZGluZy10b3Age1xyXG4gICAgcGFkZGluZy10b3A6IDY0cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcclxuICAgIC5wbGF2YSB7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxN3B4O1xyXG5cclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xyXG5cclxuICAgICAgICBjb2xvcjogIzE3NUNGRjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICBcclxufVxyXG5cclxuLmNhcmRzX19wYWRkaW5nLWJvdHRvbSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTI4cHg7XHJcbiAgICAubmFzbG92IHtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICB9XHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXNpemU6IDE3cHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjoganVzdGlmeTtcclxuICAgIH1cclxuXHJcbiAgICAuaW1ne1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4ge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZjgxMjU7XHJcbiAgICB9XHJcblxyXG59IiwiLm5hc2xvdl9fcGFkaW5nLXRvcCB7XG4gIHBhZGRpbmctdG9wOiA2NHB4O1xuICBwYWRkaW5nLWJvdHRvbTogODBweDtcbn1cbi5uYXNsb3ZfX3BhZGluZy10b3AgLnBsYXZhIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG4gIGNvbG9yOiAjMTc1Q0ZGO1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uY2FyZHNfX3BhZGRpbmctYm90dG9tIHtcbiAgcGFkZGluZy1ib3R0b206IDEyOHB4O1xufVxuLmNhcmRzX19wYWRkaW5nLWJvdHRvbSAubmFzbG92IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG59XG4uY2FyZHNfX3BhZGRpbmctYm90dG9tIHAge1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtc2l6ZTogMTdweDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XG59XG4uY2FyZHNfX3BhZGRpbmctYm90dG9tIC5pbWcge1xuICB3aWR0aDogMjAwcHg7XG4gIGhlaWdodDogMjAwcHg7XG59XG4uY2FyZHNfX3BhZGRpbmctYm90dG9tIC5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY4MTI1O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OsvetljenjeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-osvetljenje',
                templateUrl: './osvetljenje.component.html',
                styleUrls: ['./osvetljenje.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/polumontazni-bazeni/polumontazni-bazeni.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/pages/polumontazni-bazeni/polumontazni-bazeni.component.ts ***!
  \****************************************************************************/
/*! exports provided: PolumontazniBazeniComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolumontazniBazeniComponent", function() { return PolumontazniBazeniComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lazy-img-directive.directive */ "./src/app/lazy-img-directive.directive.ts");
/* harmony import */ var _components_tri_koraka_tri_koraka_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/tri-koraka/tri-koraka.component */ "./src/app/components/tri-koraka/tri-koraka.component.ts");
/* harmony import */ var ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-swiper-wrapper */ "./node_modules/ngx-swiper-wrapper/__ivy_ngcc__/fesm2015/ngx-swiper-wrapper.js");
/* harmony import */ var _components_konsultacije_konsultacije_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/konsultacije/konsultacije.component */ "./src/app/components/konsultacije/konsultacije.component.ts");








const _c0 = function () { return ["/kontakt"]; };
class PolumontazniBazeniComponent {
    constructor(metaTagService, title) {
        this.metaTagService = metaTagService;
        this.title = title;
        this.type = 'component';
        this.disabled = false;
        this.config = {
            a11y: true,
            direction: 'horizontal',
            spaceBetween: 24,
            keyboard: true,
            mousewheel: false,
            scrollbar: false,
            navigation: true,
            pagination: false,
            centeredSlides: true,
            loop: true,
            breakpoints: {
                576: {
                    slidesPerView: 1,
                },
                768: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 2,
                }
            }
        };
        this.scrollbar = {
            el: '.swiper-scrollbar',
            hide: false,
            draggable: true
        };
        this.pagination = {
            el: '.swiper-pagination',
            clickable: true,
            hideOnClick: false
        };
    }
    ngOnInit() {
        this.metaTagService.addTags([
            { name: 'keywords', content: 'Iz programa firme Future Pool iz Nemačke nudimo polumontažne bazene sa PVC lajnerom za brzu gradnju.' },
            { name: 'robots', content: 'index, follow' },
            { name: 'author', content: 'Pool Service' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'date', content: '2021-02-01', scheme: 'YYYY-MM-DD' },
            { charset: 'UTF-8' },
            { property: 'og:image', content: 'assets/img/future-pool-bazeni.jpg' },
            { property: 'twitter:image:src', content: 'assets/img/future-pool-bazeni.jpg' }
        ]);
        this.title.setTitle('Future pool bazeni 💦 Pool Service');
    }
}
PolumontazniBazeniComponent.ɵfac = function PolumontazniBazeniComponent_Factory(t) { return new (t || PolumontazniBazeniComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
PolumontazniBazeniComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PolumontazniBazeniComponent, selectors: [["app-polumontazni-bazeni"]], decls: 114, vars: 7, consts: [["id", "hero", 1, "polumontazni-cover-background"], [1, "container", "h-100"], [1, "row", "h-100", "align-items-center"], [1, "col-12", "text-center"], [1, "display-2", "font-weight-bold"], [1, "mb-5"], ["role", "button", 1, "btn", "btn-secondary", 3, "routerLink"], [1, "bg-light", "py-64"], ["id", "future-content", 1, "container"], [1, "row"], [1, "col-12", "col-md-4", "mb-5", "mb-md-0", "text-center"], ["src", "assets/img/polumontazni-bazeni/future-01.svg", "alt", "slika2", "width", "64", 1, "img-fluid", "mb-4", "mx-auto"], [1, "text-black-50"], ["src", "assets/img/polumontazni-bazeni/future-02.svg", "alt", "knjiga", "width", "64", 1, "img-fluid", "mb-4", "mx-auto"], ["src", "assets/img/polumontazni-bazeni/future-03.svg", "alt", "slika2", "width", "64", 1, "img-fluid", "mb-4", "mx-auto"], [1, "container", "my-128"], [1, "row", "align-items-center"], [1, "col-12", "col-md-5"], [1, "mb-3"], [1, "btn", "btn-secondary", 3, "routerLink"], [1, "col-12", "col-md-6", "offset-md-1"], ["src", "assets/img/polumontazni-bazeni/najtrazeniji-tip-bazena-future-pool.png", "alt", "kvadrati", 1, "img-fluid"], [1, "container"], [1, "text-primary", "text-uppercase"], [1, "col-12", "col-md-6", "offset-md-1", "pt-line"], [1, "bg-light", "my-128"], [1, "container-fluid", "content"], [1, "mx-lg-5", "mx-sm-0"], [1, "row", "align-items-center", "py-5"], ["id", "slika-up", 1, "col-12", "col-md-5"], ["src", "assets/img/polumontazni-bazeni/bazeni-ovalnog-oblika-future-pool.jpg", "alt", "Bazeni ovalnog oblika Future Pool", 1, "img-fluid", "mb-4", "mb-sm-0"], [1, "test"], [1, "mb-4"], [1, "mt-5", "mb-3"], ["src", "assets/img/polumontazni-bazeni/lenjir.png", "alt", "lenjir", 1, "mr-1", "img-fluid"], [1, "centimetri"], [1, "measure"], [1, "bg-white", "rounded"], [1, "btn", "btn-secondary", "mt-5", 3, "routerLink"], [1, "container", "mb-64"], [1, "row", "justify-content-center"], [1, "col-12", "col-md-8"], [1, "text-center"], ["id", "polumontazniGalerija", 1, "swiper-container", "mb-128", 3, "swiper"], [1, "swiper-wrapper"], [1, "swiper-slide"], ["src", "assets/img/polumontazni-bazeni/future-pool/futur-pool1.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/img/polumontazni-bazeni/future-pool/futur-pool2.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/img/polumontazni-bazeni/future-pool/futur-pool3.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/img/polumontazni-bazeni/future-pool/futur-pool4.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/img/polumontazni-bazeni/future-pool/futur-pool5.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/img/polumontazni-bazeni/future-pool/futur-pool6.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/img/polumontazni-bazeni/future-pool/futur-pool7.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/img/polumontazni-bazeni/future-pool/futur-pool8.jpg", "alt", "", 1, "img-fluid"], ["src", "assets/img/polumontazni-bazeni/future-pool/futur-pool10.jpg", "alt", "", 1, "img-fluid"], [1, "swiper-button-prev"], [1, "swiper-button-next"]], template: function PolumontazniBazeniComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Polumonta\u017Eni bazeni sa lajnerom");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Nema\u010Dki Future Pool bazeni");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Zatra\u017Eite ponudu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "section", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Ekonomi\u010Dnost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Najisplativija investicija: brza ugradnja, ni\u017Ea cena, laka konstrukcija");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Jednostavno odr\u017Eavanje");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Otporni su na klizi\u0161ta i lo\u0161e terene, laka zamena");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Dugotrajnost");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Nema\u010Dki kvalitet garantuje izdr\u017Eljivost i kvalitet materijala");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "h3", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Najtra\u017Eeniji tip bazena");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Iz programa firme Future Pool iz Nema\u010Dke nudimo polumonta\u017Ene bazene sa PVC lajnerom za brzu gradnju, fabri\u010Dki proizvedene u tri razli\u010Dita oblika ovalni, kru\u017Eni i u obliku osmice. Ovi bazeni mogu biti dubine 1,5m i 1,2m. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Kontaktirajte nas");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "app-tri-koraka");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "Future pool");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Visoko kvalitetni bazeni ra\u0111eni po EU standardima");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Lajnerski Future Pool bazeni se ugradjuju u ve\u0107 pripremljenu gradjevinsku podlogu. Zid bazena je od visoko kvalitetnog \u010Deli\u010Dnog lima preko koga se postavlja PVC lajner \u2013 svetlo plave boje, koji dr\u017Ei vodonepropusnost i koji je otporan na UV zra\u010Denja.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Future Pool bazeni predstavljaju savremeno i ekonomski pristupa\u010Dno re\u0161enje sa osnovnom opremom i dodatnom opremom po \u017Eelji.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "section", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "img", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "h3", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Bazeni ovalnog oblika Future Pool");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "Bazeni ovalnog oblika mogu biti dubine 1,5m i 1,2m");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Dimenzije bazena ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "(cm)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](74, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](75, "632 x 360");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "737 x 360");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "800 x 400");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "916 x 460");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "span", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "1100 x 550");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "button", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Zatra\u017Eite ponudu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h3", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Galerija na\u0161ih uspe\u0161no zavr\u0161enih Future Pool bazena");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](92, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "img", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](96, "img", 47);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "img", 48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](100, "img", 49);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](102, "img", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](104, "img", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](106, "img", 52);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](108, "img", 53);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "div", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](110, "img", 54);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](111, "div", 55);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](112, "div", 56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](113, "app-konsultacije");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("swiper", ctx.config);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_3__["LazyImgDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _components_tri_koraka_tri_koraka_component__WEBPACK_IMPORTED_MODULE_4__["TriKorakaComponent"], ngx_swiper_wrapper__WEBPACK_IMPORTED_MODULE_5__["SwiperDirective"], _components_konsultacije_konsultacije_component__WEBPACK_IMPORTED_MODULE_6__["KonsultacijeComponent"]], styles: ["#hero[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  height: 55vw;\n}\n@media (min-width: 992px) and (max-width: 1199.98px) {\n  #hero[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    height: 67vw;\n  }\n}\n@media (max-width: 991.98px) {\n  #hero[_ngcontent-%COMP%]   .container-fluid[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n    height: 80vw;\n  }\n}\n.polumontazni-cover-background[_ngcontent-%COMP%] {\n  height: 40vw;\n  max-height: 100%;\n  min-width: 300px;\n  background-image: url(\"https://poolservice.rs/assets/img/polumontazni-bazeni/naslovna.jpg\");\n  background-position: center;\n  background-size: cover;\n}\n@media (max-width: 767.98px) {\n  .polumontazni-cover-background[_ngcontent-%COMP%] {\n    height: 90vh !important;\n    background-position: 70% top;\n  }\n}\n@media (max-width: 991.98px) {\n  .polumontazni-cover-background[_ngcontent-%COMP%] {\n    height: 80vh;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199.98px) {\n  .polumontazni-cover-background[_ngcontent-%COMP%] {\n    height: 67vh;\n  }\n}\n.polumontazni-cover-background[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.polumontazni-cover-background[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.home-cover[_ngcontent-%COMP%] {\n  padding-top: 3.75rem;\n  padding-bottom: 3.75rem;\n}\n#hero[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.carousel-text[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0px;\n  right: 0px;\n  top: 240px;\n}\n.carousel-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.carousel-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  color: #fff;\n}\n.pool-cover[_ngcontent-%COMP%] {\n  background-image: url('naslovna-1.png');\n  background-position: center;\n  background-size: cover;\n  background-repeat: no-repeat;\n  height: 800px;\n}\n.pool-cover[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 24px;\n  color: #fff;\n}\n.pool-cover[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 70px;\n  line-height: 70px;\n  letter-spacing: -1px;\n}\n.pool-cover[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n  background-color: #FF8125;\n}\n#future-content[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 24px;\n  line-height: 30px;\n  letter-spacing: -0.750316px;\n}\n.magic__container[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 480px;\n}\n.padding-bottom_work[_ngcontent-%COMP%] {\n  padding-bottom: 160px;\n}\n.measure[_ngcontent-%COMP%]    > span[_ngcontent-%COMP%] {\n  border-radius: 4px;\n  padding: 0.5rem 0.5rem;\n  margin-right: 0.5rem;\n  margin-top: 12px;\n}\n.padding-bottom__gallery[_ngcontent-%COMP%] {\n  padding-bottom: 128px;\n}\n.padding-bottom__gallery[_ngcontent-%COMP%]   .position__center[_ngcontent-%COMP%] {\n  margin-top: 88px;\n}\n@media (max-width: 767.98px) {\n  #polumontazniGalerija[_ngcontent-%COMP%] {\n    margin-bottom: 0 !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcG9sdW1vbnRhem5pLWJhemVuaS9FOlxcUHJvamVjdHNcXHBvb2xzZXJ2aWNlXFxwb29sLXNlcnZpY2VcXGFuZ3VsYXItc3JjL3NyY1xcYXBwXFxwYWdlc1xccG9sdW1vbnRhem5pLWJhemVuaVxccG9sdW1vbnRhem5pLWJhemVuaS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvcG9sdW1vbnRhem5pLWJhemVuaS9wb2x1bW9udGF6bmktYmF6ZW5pLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9wYWdlcy9wb2x1bW9udGF6bmktYmF6ZW5pL0U6XFxQcm9qZWN0c1xccG9vbHNlcnZpY2VcXHBvb2wtc2VydmljZVxcYW5ndWxhci1zcmMvbm9kZV9tb2R1bGVzXFxib290c3RyYXBcXHNjc3NcXG1peGluc1xcX2JyZWFrcG9pbnRzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0E7RUFDRSxZQUFBO0FDSkY7QUM0R0k7RUZ6R0o7SUFHSSxZQUFBO0VDRkY7QUFDRjtBQ2tFSTtFRnBFSjtJQU1JLFlBQUE7RUNBRjtBQUNGO0FER0E7RUFDRSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLDJGQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtBQ0FGO0FDb0RJO0VGMURKO0lBU0ksdUJBQUE7SUFDQSw0QkFBQTtFQ0NGO0FBQ0Y7QUM4Q0k7RUYxREo7SUFjSSxZQUFBO0VDRUY7QUFDRjtBQzhFSTtFRi9GSjtJQWtCSSxZQUFBO0VDR0Y7QUFDRjtBRERFO0VBQ0UsV0FBQTtBQ0dKO0FEQUU7RUFDRSxXQUFBO0FDRUo7QURFQTtFQUNFLG9CQUFBO0VBQ0EsdUJBQUE7QUNDRjtBREtFO0VBQ0UsV0FBQTtBQ0ZKO0FETUE7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQ0hGO0FES0U7RUFDRSxXQUFBO0FDSEo7QURNRTtFQUNFLFdBQUE7QUNKSjtBRFFBO0VBQ0UsdUNBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSxhQUFBO0FDTEY7QURRRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0FDTko7QURVRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEsb0JBQUE7QUNUSjtBRFlFO0VBQ0UseUJBQUE7QUNWSjtBRGdCRTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7QUNiSjtBRG1CRTtFQUNFLGFBQUE7QUNoQko7QURxQkE7RUFDRSxxQkFBQTtBQ2xCRjtBRHdCQTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FDckJGO0FEeUJBO0VBQ0UscUJBQUE7QUN0QkY7QUR3QkU7RUFDRSxnQkFBQTtBQ3RCSjtBQzFDSTtFRnFFSjtJQUVJLDJCQUFBO0VDeEJGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wb2x1bW9udGF6bmktYmF6ZW5pL3BvbHVtb250YXpuaS1iYXplbmkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL2Z1bmN0aW9uc1wiO1xyXG5AaW1wb3J0IFwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL3ZhcmlhYmxlc1wiO1xyXG5AaW1wb3J0IFwibm9kZV9tb2R1bGVzL2Jvb3RzdHJhcC9zY3NzL21peGluc1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29sb3JzXCI7XHJcblxyXG4jaGVybyAuY29udGFpbmVyLWZsdWlkIC5yb3cge1xyXG4gIGhlaWdodDogNTV2dztcclxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LW9ubHkobGcpIHtcclxuICAgIGhlaWdodDogNjd2dztcclxuICB9XHJcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKG1kKSB7XHJcbiAgICBoZWlnaHQ6IDgwdnc7XHJcbiAgfVxyXG59XHJcblxyXG4ucG9sdW1vbnRhem5pLWNvdmVyLWJhY2tncm91bmQge1xyXG4gIGhlaWdodDogNDB2dztcclxuICBtYXgtaGVpZ2h0OiAxMDAlO1xyXG4gIG1pbi13aWR0aDogMzAwcHg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9wb29sc2VydmljZS5ycy9hc3NldHMvaW1nL3BvbHVtb250YXpuaS1iYXplbmkvbmFzbG92bmEuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG5cclxuICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oc20pIHtcclxuICAgIGhlaWdodDogOTB2aCAhaW1wb3J0YW50O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogNzAlIHRvcDtcclxuICB9XHJcblxyXG4gIEBpbmNsdWRlIG1lZGlhLWJyZWFrcG9pbnQtZG93bihtZCkge1xyXG4gICAgaGVpZ2h0OiA4MHZoO1xyXG4gIH1cclxuXHJcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1vbmx5KGxnKSB7XHJcbiAgICBoZWlnaHQ6IDY3dmg7XHJcbiAgfVxyXG5cclxuICBoMSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG59XHJcblxyXG4uaG9tZS1jb3ZlciB7XHJcbiAgcGFkZGluZy10b3A6IDMuNzVyZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDMuNzVyZW07XHJcbn1cclxuXHJcblxyXG4vLyBDYXJvdXNlbFxyXG4jaGVybyB7XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLmNhcm91c2VsLXRleHQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwcHg7XHJcbiAgcmlnaHQ6IDBweDtcclxuICB0b3A6IDI0MHB4O1xyXG5cclxuICBoMSB7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICB9XHJcblxyXG4gIHAge1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgfVxyXG59XHJcblxyXG4ucG9vbC1jb3ZlciB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2ltZy9wb2x1bW9udGF6bmktYmF6ZW5pL25hc2xvdm5hLTEucG5nXCIpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgaGVpZ2h0OiA4MDBweDtcclxuXHJcblxyXG4gIHAge1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcblxyXG4gIH1cclxuXHJcbiAgaDEge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDcwcHg7XHJcbiAgICBsaW5lLWhlaWdodDogNzBweDtcclxuXHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTFweDtcclxuICB9XHJcblxyXG4gIC5idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGODEyNTtcclxuICB9XHJcbn1cclxuXHJcbiNmdXR1cmUtY29udGVudCB7XHJcblxyXG4gIGgzIHtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDMwcHg7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNzUwMzE2cHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubWFnaWNfX2NvbnRhaW5lciB7XHJcblxyXG4gIGltZyB7XHJcbiAgICBoZWlnaHQ6IDQ4MHB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi5wYWRkaW5nLWJvdHRvbV93b3JrIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTYwcHg7XHJcblxyXG59XHJcblxyXG5cclxuXHJcbi5tZWFzdXJlID4gc3BhbiB7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIHBhZGRpbmc6IC41cmVtIC41cmVtO1xyXG4gIG1hcmdpbi1yaWdodDogLjVyZW07XHJcbiAgbWFyZ2luLXRvcDogMTJweDtcclxufVxyXG5cclxuXHJcbi5wYWRkaW5nLWJvdHRvbV9fZ2FsbGVyeSB7XHJcbiAgcGFkZGluZy1ib3R0b206IDEyOHB4O1xyXG5cclxuICAucG9zaXRpb25fX2NlbnRlciB7XHJcbiAgICBtYXJnaW4tdG9wOiA4OHB4O1xyXG5cclxuICB9XHJcbn1cclxuXHJcbiNwb2x1bW9udGF6bmlHYWxlcmlqYSB7XHJcbiAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKHNtKSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsIiNoZXJvIC5jb250YWluZXItZmx1aWQgLnJvdyB7XG4gIGhlaWdodDogNTV2dztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xuICAjaGVybyAuY29udGFpbmVyLWZsdWlkIC5yb3cge1xuICAgIGhlaWdodDogNjd2dztcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XG4gICNoZXJvIC5jb250YWluZXItZmx1aWQgLnJvdyB7XG4gICAgaGVpZ2h0OiA4MHZ3O1xuICB9XG59XG5cbi5wb2x1bW9udGF6bmktY292ZXItYmFja2dyb3VuZCB7XG4gIGhlaWdodDogNDB2dztcbiAgbWF4LWhlaWdodDogMTAwJTtcbiAgbWluLXdpZHRoOiAzMDBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly9wb29sc2VydmljZS5ycy9hc3NldHMvaW1nL3BvbHVtb250YXpuaS1iYXplbmkvbmFzbG92bmEuanBnXCIpO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNzY3Ljk4cHgpIHtcbiAgLnBvbHVtb250YXpuaS1jb3Zlci1iYWNrZ3JvdW5kIHtcbiAgICBoZWlnaHQ6IDkwdmggIWltcG9ydGFudDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA3MCUgdG9wO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogOTkxLjk4cHgpIHtcbiAgLnBvbHVtb250YXpuaS1jb3Zlci1iYWNrZ3JvdW5kIHtcbiAgICBoZWlnaHQ6IDgwdmg7XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xuICAucG9sdW1vbnRhem5pLWNvdmVyLWJhY2tncm91bmQge1xuICAgIGhlaWdodDogNjd2aDtcbiAgfVxufVxuLnBvbHVtb250YXpuaS1jb3Zlci1iYWNrZ3JvdW5kIGgxIHtcbiAgY29sb3I6ICNmZmY7XG59XG4ucG9sdW1vbnRhem5pLWNvdmVyLWJhY2tncm91bmQgcCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4uaG9tZS1jb3ZlciB7XG4gIHBhZGRpbmctdG9wOiAzLjc1cmVtO1xuICBwYWRkaW5nLWJvdHRvbTogMy43NXJlbTtcbn1cblxuI2hlcm8gaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5jYXJvdXNlbC10ZXh0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwcHg7XG4gIHJpZ2h0OiAwcHg7XG4gIHRvcDogMjQwcHg7XG59XG4uY2Fyb3VzZWwtdGV4dCBoMSB7XG4gIGNvbG9yOiAjZmZmO1xufVxuLmNhcm91c2VsLXRleHQgcCB7XG4gIGNvbG9yOiAjZmZmO1xufVxuXG4ucG9vbC1jb3ZlciB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9pbWcvcG9sdW1vbnRhem5pLWJhemVuaS9uYXNsb3ZuYS0xLnBuZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBoZWlnaHQ6IDgwMHB4O1xufVxuLnBvb2wtY292ZXIgcCB7XG4gIGZvbnQtc2l6ZTogMjRweDtcbiAgY29sb3I6ICNmZmY7XG59XG4ucG9vbC1jb3ZlciBoMSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDcwcHg7XG4gIGxpbmUtaGVpZ2h0OiA3MHB4O1xuICBsZXR0ZXItc3BhY2luZzogLTFweDtcbn1cbi5wb29sLWNvdmVyIC5idG4ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY4MTI1O1xufVxuXG4jZnV0dXJlLWNvbnRlbnQgaDMge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBsaW5lLWhlaWdodDogMzBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjc1MDMxNnB4O1xufVxuXG4ubWFnaWNfX2NvbnRhaW5lciBpbWcge1xuICBoZWlnaHQ6IDQ4MHB4O1xufVxuXG4ucGFkZGluZy1ib3R0b21fd29yayB7XG4gIHBhZGRpbmctYm90dG9tOiAxNjBweDtcbn1cblxuLm1lYXN1cmUgPiBzcGFuIHtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtO1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgbWFyZ2luLXRvcDogMTJweDtcbn1cblxuLnBhZGRpbmctYm90dG9tX19nYWxsZXJ5IHtcbiAgcGFkZGluZy1ib3R0b206IDEyOHB4O1xufVxuLnBhZGRpbmctYm90dG9tX19nYWxsZXJ5IC5wb3NpdGlvbl9fY2VudGVyIHtcbiAgbWFyZ2luLXRvcDogODhweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XG4gICNwb2x1bW9udGF6bmlHYWxlcmlqYSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMCAhaW1wb3J0YW50O1xuICB9XG59IiwiLy8gQnJlYWtwb2ludCB2aWV3cG9ydCBzaXplcyBhbmQgbWVkaWEgcXVlcmllcy5cbi8vXG4vLyBCcmVha3BvaW50cyBhcmUgZGVmaW5lZCBhcyBhIG1hcCBvZiAobmFtZTogbWluaW11bSB3aWR0aCksIG9yZGVyIGZyb20gc21hbGwgdG8gbGFyZ2U6XG4vL1xuLy8gICAgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KVxuLy9cbi8vIFRoZSBtYXAgZGVmaW5lZCBpbiB0aGUgYCRncmlkLWJyZWFrcG9pbnRzYCBnbG9iYWwgdmFyaWFibGUgaXMgdXNlZCBhcyB0aGUgYCRicmVha3BvaW50c2AgYXJndW1lbnQgYnkgZGVmYXVsdC5cblxuLy8gTmFtZSBvZiB0aGUgbmV4dCBicmVha3BvaW50LCBvciBudWxsIGZvciB0aGUgbGFzdCBicmVha3BvaW50LlxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbmV4dChzbSlcbi8vICAgIG1kXG4vLyAgICA+PiBicmVha3BvaW50LW5leHQoc20sICh4czogMCwgc206IDU3NnB4LCBtZDogNzY4cHgsIGxnOiA5OTJweCwgeGw6IDEyMDBweCkpXG4vLyAgICBtZFxuLy8gICAgPj4gYnJlYWtwb2ludC1uZXh0KHNtLCAkYnJlYWtwb2ludC1uYW1lczogKHhzIHNtIG1kIGxnIHhsKSlcbi8vICAgIG1kXG5AZnVuY3Rpb24gYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzLCAkYnJlYWtwb2ludC1uYW1lczogbWFwLWtleXMoJGJyZWFrcG9pbnRzKSkge1xuICAkbjogaW5kZXgoJGJyZWFrcG9pbnQtbmFtZXMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbiAhPSBudWxsIGFuZCAkbiA8IGxlbmd0aCgkYnJlYWtwb2ludC1uYW1lcyksIG50aCgkYnJlYWtwb2ludC1uYW1lcywgJG4gKyAxKSwgbnVsbCk7XG59XG5cbi8vIE1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTnVsbCBmb3IgdGhlIHNtYWxsZXN0IChmaXJzdCkgYnJlYWtwb2ludC5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LW1pbihzbSwgKHhzOiAwLCBzbTogNTc2cHgsIG1kOiA3NjhweCwgbGc6IDk5MnB4LCB4bDogMTIwMHB4KSlcbi8vICAgIDU3NnB4XG5AZnVuY3Rpb24gYnJlYWtwb2ludC1taW4oJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgJG1pbjogbWFwLWdldCgkYnJlYWtwb2ludHMsICRuYW1lKTtcbiAgQHJldHVybiBpZigkbWluICE9IDAsICRtaW4sIG51bGwpO1xufVxuXG4vLyBNYXhpbXVtIGJyZWFrcG9pbnQgd2lkdGguIE51bGwgZm9yIHRoZSBsYXJnZXN0IChsYXN0KSBicmVha3BvaW50LlxuLy8gVGhlIG1heGltdW0gdmFsdWUgaXMgY2FsY3VsYXRlZCBhcyB0aGUgbWluaW11bSBvZiB0aGUgbmV4dCBvbmUgbGVzcyAwLjAycHhcbi8vIHRvIHdvcmsgYXJvdW5kIHRoZSBsaW1pdGF0aW9ucyBvZiBgbWluLWAgYW5kIGBtYXgtYCBwcmVmaXhlcyBhbmQgdmlld3BvcnRzIHdpdGggZnJhY3Rpb25hbCB3aWR0aHMuXG4vLyBTZWUgaHR0cHM6Ly93d3cudzMub3JnL1RSL21lZGlhcXVlcmllcy00LyNtcS1taW4tbWF4XG4vLyBVc2VzIDAuMDJweCByYXRoZXIgdGhhbiAwLjAxcHggdG8gd29yayBhcm91bmQgYSBjdXJyZW50IHJvdW5kaW5nIGJ1ZyBpbiBTYWZhcmkuXG4vLyBTZWUgaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTE3ODI2MVxuLy9cbi8vICAgID4+IGJyZWFrcG9pbnQtbWF4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgNzY3Ljk4cHhcbkBmdW5jdGlvbiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbmV4dDogYnJlYWtwb2ludC1uZXh0KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAcmV0dXJuIGlmKCRuZXh0LCBicmVha3BvaW50LW1pbigkbmV4dCwgJGJyZWFrcG9pbnRzKSAtIC4wMiwgbnVsbCk7XG59XG5cbi8vIFJldHVybnMgYSBibGFuayBzdHJpbmcgaWYgc21hbGxlc3QgYnJlYWtwb2ludCwgb3RoZXJ3aXNlIHJldHVybnMgdGhlIG5hbWUgd2l0aCBhIGRhc2ggaW4gZnJvbnQuXG4vLyBVc2VmdWwgZm9yIG1ha2luZyByZXNwb25zaXZlIHV0aWxpdGllcy5cbi8vXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHhzLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCJcIiAgKFJldHVybnMgYSBibGFuayBzdHJpbmcpXG4vLyAgICA+PiBicmVha3BvaW50LWluZml4KHNtLCAoeHM6IDAsIHNtOiA1NzZweCwgbWQ6IDc2OHB4LCBsZzogOTkycHgsIHhsOiAxMjAwcHgpKVxuLy8gICAgXCItc21cIlxuQGZ1bmN0aW9uIGJyZWFrcG9pbnQtaW5maXgoJG5hbWUsICRicmVha3BvaW50czogJGdyaWQtYnJlYWtwb2ludHMpIHtcbiAgQHJldHVybiBpZihicmVha3BvaW50LW1pbigkbmFtZSwgJGJyZWFrcG9pbnRzKSA9PSBudWxsLCBcIlwiLCBcIi0jeyRuYW1lfVwiKTtcbn1cblxuLy8gTWVkaWEgb2YgYXQgbGVhc3QgdGhlIG1pbmltdW0gYnJlYWtwb2ludCB3aWR0aC4gTm8gcXVlcnkgZm9yIHRoZSBzbWFsbGVzdCBicmVha3BvaW50LlxuLy8gTWFrZXMgdGhlIEBjb250ZW50IGFwcGx5IHRvIHRoZSBnaXZlbiBicmVha3BvaW50IGFuZCB3aWRlci5cbkBtaXhpbiBtZWRpYS1icmVha3BvaW50LXVwKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1pbiB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6ICRtaW4pIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgb2YgYXQgbW9zdCB0aGUgbWF4aW11bSBicmVha3BvaW50IHdpZHRoLiBObyBxdWVyeSBmb3IgdGhlIGxhcmdlc3QgYnJlYWtwb2ludC5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCBhbmQgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1kb3duKCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICBAaWYgJG1heCB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtYXgpIHtcbiAgICAgIEBjb250ZW50O1xuICAgIH1cbiAgfSBAZWxzZSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuLy8gTWVkaWEgdGhhdCBzcGFucyBtdWx0aXBsZSBicmVha3BvaW50IHdpZHRocy5cbi8vIE1ha2VzIHRoZSBAY29udGVudCBhcHBseSBiZXR3ZWVuIHRoZSBtaW4gYW5kIG1heCBicmVha3BvaW50c1xuQG1peGluIG1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkbG93ZXIsICR1cHBlciwgJGJyZWFrcG9pbnRzOiAkZ3JpZC1icmVha3BvaW50cykge1xuICAkbWluOiBicmVha3BvaW50LW1pbigkbG93ZXIsICRicmVha3BvaW50cyk7XG4gICRtYXg6IGJyZWFrcG9pbnQtbWF4KCR1cHBlciwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbG93ZXIsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtaW4gPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC1kb3duKCR1cHBlciwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH1cbn1cblxuLy8gTWVkaWEgYmV0d2VlbiB0aGUgYnJlYWtwb2ludCdzIG1pbmltdW0gYW5kIG1heGltdW0gd2lkdGhzLlxuLy8gTm8gbWluaW11bSBmb3IgdGhlIHNtYWxsZXN0IGJyZWFrcG9pbnQsIGFuZCBubyBtYXhpbXVtIGZvciB0aGUgbGFyZ2VzdCBvbmUuXG4vLyBNYWtlcyB0aGUgQGNvbnRlbnQgYXBwbHkgb25seSB0byB0aGUgZ2l2ZW4gYnJlYWtwb2ludCwgbm90IHZpZXdwb3J0cyBhbnkgd2lkZXIgb3IgbmFycm93ZXIuXG5AbWl4aW4gbWVkaWEtYnJlYWtwb2ludC1vbmx5KCRuYW1lLCAkYnJlYWtwb2ludHM6ICRncmlkLWJyZWFrcG9pbnRzKSB7XG4gICRtaW46IGJyZWFrcG9pbnQtbWluKCRuYW1lLCAkYnJlYWtwb2ludHMpO1xuICAkbWF4OiBicmVha3BvaW50LW1heCgkbmFtZSwgJGJyZWFrcG9pbnRzKTtcblxuICBAaWYgJG1pbiAhPSBudWxsIGFuZCAkbWF4ICE9IG51bGwge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiAkbWluKSBhbmQgKG1heC13aWR0aDogJG1heCkge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9IEBlbHNlIGlmICRtYXggPT0gbnVsbCB7XG4gICAgQGluY2x1ZGUgbWVkaWEtYnJlYWtwb2ludC11cCgkbmFtZSwgJGJyZWFrcG9pbnRzKSB7XG4gICAgICBAY29udGVudDtcbiAgICB9XG4gIH0gQGVsc2UgaWYgJG1pbiA9PSBudWxsIHtcbiAgICBAaW5jbHVkZSBtZWRpYS1icmVha3BvaW50LWRvd24oJG5hbWUsICRicmVha3BvaW50cykge1xuICAgICAgQGNvbnRlbnQ7XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PolumontazniBazeniComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-polumontazni-bazeni',
                templateUrl: './polumontazni-bazeni.component.html',
                styleUrls: ['./polumontazni-bazeni.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/sredstva/sredstva.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/sredstva/sredstva.component.ts ***!
  \******************************************************/
/*! exports provided: SredstvaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SredstvaComponent", function() { return SredstvaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lazy-img-directive.directive */ "./src/app/lazy-img-directive.directive.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_konsultacije_konsultacije_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/konsultacije/konsultacije.component */ "./src/app/components/konsultacije/konsultacije.component.ts");







const _c0 = function () { return ["/contact"]; };
class SredstvaComponent {
    constructor(metaTagService, title) {
        this.metaTagService = metaTagService;
        this.title = title;
    }
    ngOnInit() {
        this.metaTagService.addTags([
            { name: 'keywords', content: ' Pool Service u svojoj ponudi ima kompletan asortiman hemijskih proizvoda za zaštitu vode.' },
            { name: 'robots', content: 'index, follow' },
            { name: 'author', content: 'Pool Service' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'date', content: '2021-02-01', scheme: 'YYYY-MM-DD' },
            { charset: 'UTF-8' }
        ]);
        this.title.setTitle("Sredstva za odrzavanje vode");
    }
}
SredstvaComponent.ɵfac = function SredstvaComponent_Factory(t) { return new (t || SredstvaComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
SredstvaComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SredstvaComponent, selectors: [["app-sredstva"]], decls: 30, vars: 2, consts: [[1, "container", "naslov__pading-top"], [1, "row"], [1, "col-12", "text-left", "text-md-center"], [1, "pb-5"], ["src", "assets/img/sredstva-za-bazen/sredstva.jpg", "alt", "Sredstva za odrzavanje", 1, "img-fluid"], [1, "pt-5"], [1, "btn", "btn-primary", "btn-lg", "border-0", "mt-5", 3, "routerLink"]], template: function SredstvaComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Sredstva za odr\u017Eavanje vode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Pool Service u svojoj ponudi ima kompletan asortiman hemijskih proizvoda za za\u0161titu vode. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Jedan od najzna\u010Dajnih segmenata u odr\u017Eavanju bistre i zdrave vode. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u2013 Sredstvo za odr\u017Eavanje vode Maxi hlor, tablete od 200g, sporo topivi hlor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " - Sredstvo za \u0161okiranje vode hlorni Granulat, 1kg pakovanje, brzo topivi hlor.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " \u2013 Sredstvo za odr\u017Eavanje vode Algex sredstvo protiv stvaranja algi ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " \u2013 Sredstvo za odr\u017Eavanje vode pH minus, sni\u017Eava pH vrednost ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " \u2013 Test kit, meri koli\u010Dinu hlora i pH ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " \u2013 Sredstvo za odr\u017Eavanje vode Mini hlor, tablete od 20g, brzo topivi hlor ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " \u2013 Sredstvo za odr\u017Eavanje vode Flokulant, bistri vodu ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Kontaktirajte nas ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "app-konsultacije");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_3__["LazyImgDirective"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _components_konsultacije_konsultacije_component__WEBPACK_IMPORTED_MODULE_5__["KonsultacijeComponent"]], styles: [".naslov__pading-top[_ngcontent-%COMP%] {\n  padding-top: 64px;\n  padding-bottom: 80px;\n}\n.naslov__pading-top[_ngcontent-%COMP%]   .justify[_ngcontent-%COMP%] {\n  text-align: justify;\n  margin-left: 300px;\n}\n.btn[_ngcontent-%COMP%] {\n  background-color: #ff8125;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3JlZHN0dmEvRTpcXFByb2plY3RzXFxwb29sc2VydmljZVxccG9vbC1zZXJ2aWNlXFxhbmd1bGFyLXNyYy9zcmNcXGFwcFxccGFnZXNcXHNyZWRzdHZhXFxzcmVkc3R2YS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3JlZHN0dmEvc3JlZHN0dmEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFFSSxpQkFBQTtFQUNBLG9CQUFBO0FDQUo7QURDSTtFQUNJLG1CQUFBO0VBQ0Esa0JBQUE7QUNDUjtBRE1BO0VBQ0kseUJBQUE7QUNISiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3NyZWRzdHZhL3NyZWRzdHZhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hc2xvdl9fcGFkaW5nLXRvcCB7XHJcblxyXG4gICAgcGFkZGluZy10b3A6IDY0cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogODBweDtcclxuICAgIC5qdXN0aWZ5IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMDBweDtcclxuICAgIH1cclxuICAgIFxyXG4gICBcclxufVxyXG5cclxuXHJcbi5idG4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODEyNTtcclxufSIsIi5uYXNsb3ZfX3BhZGluZy10b3Age1xuICBwYWRkaW5nLXRvcDogNjRweDtcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XG59XG4ubmFzbG92X19wYWRpbmctdG9wIC5qdXN0aWZ5IHtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbiAgbWFyZ2luLWxlZnQ6IDMwMHB4O1xufVxuXG4uYnRuIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmODEyNTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SredstvaComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sredstva',
                templateUrl: './sredstva.component.html',
                styleUrls: ['./sredstva.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/stepenice/stepenice.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/stepenice/stepenice.component.ts ***!
  \********************************************************/
/*! exports provided: StepeniceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepeniceComponent", function() { return StepeniceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lazy-img-directive.directive */ "./src/app/lazy-img-directive.directive.ts");
/* harmony import */ var _components_konsultacije_konsultacije_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/konsultacije/konsultacije.component */ "./src/app/components/konsultacije/konsultacije.component.ts");






class StepeniceComponent {
    constructor(metaTagService, title) {
        this.metaTagService = metaTagService;
        this.title = title;
    }
    ngOnInit() {
        this.metaTagService.addTags([
            { name: 'keywords', content: 'Stepenice služe za lakši izlazak kupača iz bazena. Izradjene od nerdjajućeg čelika uglavnom sa dva do četiri gazišta.' },
            { name: 'robots', content: 'index, follow' },
            { name: 'author', content: 'Pool Service' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'date', content: '2021-02-01', scheme: 'YYYY-MM-DD' },
            { charset: 'UTF-8' }
        ]);
        this.title.setTitle("Stepenice");
    }
}
StepeniceComponent.ɵfac = function StepeniceComponent_Factory(t) { return new (t || StepeniceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
StepeniceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StepeniceComponent, selectors: [["app-stepenice"]], decls: 23, vars: 0, consts: [[1, "container", "pt-128"], [1, "row"], [1, "col-12", "text-center"], [1, "text-center"], [1, "container", "py-128"], [1, "row", "justify-content-center"], [1, "col-12", "col-md-4"], ["src", "assets/img/stepenice/1.jpg", "alt", "Stepenice", 1, "img-fluid", "w-100"], [1, "naslov", "pt-2", "text-center"], ["src", "assets/img/stepenice/2.jpg", "alt", "Stepenice", 1, "img-fluid", "w-100"]], template: function StepeniceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Stepenice");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Stepenice slu\u017Ee za lak\u0161i izlazak kupa\u010Da iz bazena. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Izradjene od nerdjaju\u0107eg \u010Delika uglavnom sa dva do \u010Detiri gazi\u0161ta. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Oblik mo\u017Ee biti uski ili \u0161iroki rukohvat. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Stepenice LUX");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Stepenice STANDARD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "app-konsultacije");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_3__["LazyImgDirective"], _components_konsultacije_konsultacije_component__WEBPACK_IMPORTED_MODULE_4__["KonsultacijeComponent"]], styles: [".plava[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 17px;\n  letter-spacing: 2px;\n  color: #175CFF;\n  text-align: justify;\n}\n\n.naslov[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 20px;\n  line-height: 25px;\n}\n\np[_ngcontent-%COMP%] {\n  font-style: normal;\n  font-weight: normal;\n  font-size: 17px;\n  line-height: 25px;\n  text-align: justify;\n}\n\n.img[_ngcontent-%COMP%] {\n  height: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc3RlcGVuaWNlL0U6XFxQcm9qZWN0c1xccG9vbHNlcnZpY2VcXHBvb2wtc2VydmljZVxcYW5ndWxhci1zcmMvc3JjXFxhcHBcXHBhZ2VzXFxzdGVwZW5pY2VcXHN0ZXBlbmljZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3RlcGVuaWNlL3N0ZXBlbmljZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBQ0EsbUJBQUE7QUNGRjs7QURNQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDSEY7O0FETUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNIRjs7QURNQTtFQUNFLGFBQUE7QUNIRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3N0ZXBlbmljZS9zdGVwZW5pY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLnBsYXZhIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgbGluZS1oZWlnaHQ6IDE3cHg7XHJcblxyXG4gIGxldHRlci1zcGFjaW5nOiAycHg7XHJcblxyXG4gIGNvbG9yOiAjMTc1Q0ZGO1xyXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XHJcblxyXG59XHJcblxyXG4ubmFzbG92IHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbnAge1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMTdweDtcclxuICBsaW5lLWhlaWdodDogMjVweDtcclxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG59XHJcblxyXG4uaW1nIHtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbiIsIi5wbGF2YSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGxpbmUtaGVpZ2h0OiAxN3B4O1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBjb2xvcjogIzE3NUNGRjtcbiAgdGV4dC1hbGlnbjoganVzdGlmeTtcbn1cblxuLm5hc2xvdiB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xufVxuXG5wIHtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXNpemU6IDE3cHg7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xufVxuXG4uaW1nIHtcbiAgaGVpZ2h0OiAyMDBweDtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StepeniceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stepenice',
                templateUrl: './stepenice.component.html',
                styleUrls: ['./stepenice.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/usisivaci/usisivaci.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/usisivaci/usisivaci.component.ts ***!
  \********************************************************/
/*! exports provided: UsisivaciComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsisivaciComponent", function() { return UsisivaciComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lazy-img-directive.directive */ "./src/app/lazy-img-directive.directive.ts");
/* harmony import */ var _components_konsultacije_konsultacije_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/konsultacije/konsultacije.component */ "./src/app/components/konsultacije/konsultacije.component.ts");






class UsisivaciComponent {
    constructor(metaTagService, title) {
        this.metaTagService = metaTagService;
        this.title = title;
    }
    ngOnInit() {
        this.metaTagService.addTags([
            { name: 'keywords', content: 'Služe za usisavanje taloga sa dna bez praznjenja bazena.' },
            { name: 'robots', content: 'index, follow' },
            { name: 'author', content: 'Pool Service' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { name: 'date', content: '2021-02-01', scheme: 'YYYY-MM-DD' },
            { charset: 'UTF-8' }
        ]);
        this.title.setTitle("Usisivaci");
    }
}
UsisivaciComponent.ɵfac = function UsisivaciComponent_Factory(t) { return new (t || UsisivaciComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"])); };
UsisivaciComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsisivaciComponent, selectors: [["app-usisivaci"]], decls: 11, vars: 0, consts: [[1, "container", "py-128"], [1, "row"], [1, "col-12", "text-center"], [1, "pb-5"], ["src", "assets/img/usisivaci/usisivaci.jpg", "alt", "Usisivaci", 1, "img-fluid"], [1, "pt-5"]], template: function UsisivaciComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Usisiva\u010Di");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Slu\u017Ee za usisavanje taloga sa dna bez praznjenja bazena. Veliki izbor ru\u010Dnih podvodnih usisiva\u010Da koji se isporu\u010Duju sa \u010Detkama, rebrastim crevom i teleskopskim \u0161tanglama. Rebrasta fleksibilna creva su pre\u010Dnika od 38mm i isporu\u010Duju se u potrebnoj du\u017Eini. Teleskopi su du\u017Eine od 2 do 7,5 metara. Priklju\u010Duju se na skimer i rade preko filtracionog postrojenja. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-konsultacije");
    } }, directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_2__["NavbarComponent"], _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_3__["LazyImgDirective"], _components_konsultacije_konsultacije_component__WEBPACK_IMPORTED_MODULE_4__["KonsultacijeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3VzaXNpdmFjaS91c2lzaXZhY2kuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsisivaciComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-usisivaci',
                templateUrl: './usisivaci.component.html',
                styleUrls: ['./usisivaci.component.scss']
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Meta"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"] }]; }, null); })();


/***/ }),

/***/ "./src/app/posts/page-blog/page-blog.component.ts":
/*!********************************************************!*\
  !*** ./src/app/posts/page-blog/page-blog.component.ts ***!
  \********************************************************/
/*! exports provided: PageBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageBlogComponent", function() { return PageBlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lazy-img-directive.directive */ "./src/app/lazy-img-directive.directive.ts");
/* harmony import */ var _components_konsultacije_konsultacije_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/konsultacije/konsultacije.component */ "./src/app/components/konsultacije/konsultacije.component.ts");




class PageBlogComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageBlogComponent.ɵfac = function PageBlogComponent_Factory(t) { return new (t || PageBlogComponent)(); };
PageBlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageBlogComponent, selectors: [["app-page-blog"]], decls: 116, vars: 0, consts: [[1, "container", "padding-top_container_text"], [1, "row"], [1, "col-sm-12"], [1, "post-by", "d-flex", "justify-content-center", "py-5"], [1, "ml-4"], [1, "mr-lg-4", 2, "color", "#5454D4"], [1, "container", "blog-content"], [1, "col-lg-9"], ["src", "assets/img/blog/blog-page-1/Image(1).png", "alt", "blog-slika", 1, "d-flex", "img-fluid"], [1, "mt-4"], [1, "row", "pt-5", "pb-5"], [1, "col-sm-1"], [1, "fas", "fa-quote-left", "mr-5", 2, "color", "#CDCCD9"], [1, "col-sm-9"], [2, "font-weight", "500", "font-size", "21px", "line-height", "34px"], [1, "col-lg-3"], [1, "card"], [1, "input-group"], ["type", "text", "placeholder", "\uD83D\uDD0DType to search", 1, "form-control"], [1, "card", "my-4"], [1, "card-body"], [1, "mt-4", 2, "font-weight", "bold", "font-size", "16px", "line-height", "26px"], ["href", "#", 2, "font-weight", "500", "font-size", "14px", "line-height", "26px"], [1, "card", "my-4", "card_category"]], template: function PageBlogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Enthusiastically develop an");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "expanded array of architectures");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Jan 14, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Technology ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u2022");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " David Jones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit consequatur illo non, corporis, similique dolorum id rem tempore facere dolor aliquid impedit earum dignissimos at architecto tempora et sint quibusdam!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus illum optio perspiciatis repellat. Facere distinctio quos dolorem commodi! Repellendus sequi praesentium quas ullam quia illo cumque nemo culpa autem optio.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam vel praesentium, nemo dolorem esse error magni deleniti sequi? Fuga corrupti fugit accusamus tempora nemo consequatur minima fugiat quam quos enim. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti quaerat temporibus voluptas minus earum voluptatem neque tempore, nihil alias nostrum aut similique quae cumque aliquam nobis veritatis dolorum ab? In.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet delectus voluptatum praesentium minus? Inventore eius debitis praesentium accusantium excepturi dignissimos quam a, assumenda ipsam perferendis rem consequatur iusto veniam vel.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "The goal should be more than money");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet delectus voluptatum praesentium minus?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi officiis totam autem exercitationem, ipsam eius aliquam magni sapiente quisquam minima quod odio eaque atque! Fugiat odit illo porro nostrum accusamus.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta possimus quos iure voluptates aliquam incidunt iste officiis itaque atque. Optio, velit maiores minus perferendis esse similique recusandae excepturi officiis cumque! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id quisquam quibusdam tempore aliquam repudiandae. Consectetur odit, aliquid nulla doloribus et ab eos, blanditiis molestiae necessitatibus quod deserunt minima dolor. Quisquam.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "Recent Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "How TO blow Trough Capital at An increbal rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Jan 14, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "How TO blow Trough Capital at An increbal rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "Jan 14, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "How TO blow Trough Capital at An increbal rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Jan 14, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "How TO blow Trough Capital at An increbal rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "Jan 14, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Popular Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "How TO blow Trough Capital at An increbal rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Jan 14, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76, "How TO blow Trough Capital at An increbal rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, "Jan 14, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, "How TO blow Trough Capital at An increbal rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Jan 14, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "How TO blow Trough Capital at An increbal rate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](86, "Jan 14, 2020");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, "Categoris");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Technology - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "20 Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "Technology - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, "20 Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, "Technology - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "20 Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "Technology - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "20 Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, "Technology - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](109, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](110, "20 Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Technology - ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "20 Posts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](115, "app-konsultacije");
    } }, directives: [_lazy_img_directive_directive__WEBPACK_IMPORTED_MODULE_1__["LazyImgDirective"], _components_konsultacije_konsultacije_component__WEBPACK_IMPORTED_MODULE_2__["KonsultacijeComponent"]], styles: [".padding-top_container_text[_ngcontent-%COMP%] {\n  padding-top: 68px;\n}\n\n.padding-top_container_text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 60px;\n  line-height: 70px;\n}\n\n.padding-top_container_text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.padding-top_container_text[_ngcontent-%COMP%]   .post-by[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.padding-top_container_text[_ngcontent-%COMP%]   .post-by[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  display: inline-block;\n  font-weight: 450;\n  font-size: 21px;\n  line-height: 39px;\n}\n\n.blog-content[_ngcontent-%COMP%] {\n  padding-bottom: 206px;\n}\n\n.blog-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 30px;\n}\n\n.blog-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  border: 1px solid #EAE9F2;\n  box-sizing: border-box;\n  border-radius: 10px;\n}\n\n.blog-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 38px;\n}\n\n.blog-content[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #2E79CA;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcGFnZS1ibG9nL0U6XFxQcm9qZWN0c1xccG9vbHNlcnZpY2VcXHBvb2wtc2VydmljZVxcYW5ndWxhci1zcmMvc3JjXFxhcHBcXHBvc3RzXFxwYWdlLWJsb2dcXHBhZ2UtYmxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcG9zdHMvcGFnZS1ibG9nL3BhZ2UtYmxvZy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcG9zdHMvcGFnZS1ibG9nL0U6XFxQcm9qZWN0c1xccG9vbHNlcnZpY2VcXHBvb2wtc2VydmljZVxcYW5ndWxhci1zcmMvc3JjXFxhc3NldHNcXHNjc3NcXF9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGlCQUFBO0FDREo7O0FES0k7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0ZSOztBREdRO0VBQ0ksY0FBQTtBQ0RaOztBREtJO0VBQ0ksbUJBQUE7QUNIUjs7QURPSTtFQUdJLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ1BSOztBRGFBO0VBQ0kscUJBQUE7QUNWSjs7QURhSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDWFI7O0FEY0k7RUFFSSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7QUNiUjs7QURpQlE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ2ZaOztBRGdCWTtFQUVJLGNFMUROO0FEMkNWIiwiZmlsZSI6InNyYy9hcHAvcG9zdHMvcGFnZS1ibG9nL3BhZ2UtYmxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi9hc3NldHMvc2Nzcy9jb2xvcnNcIjtcclxuXHJcbi5wYWRkaW5nLXRvcF9jb250YWluZXJfdGV4dCB7XHJcbiAgICBwYWRkaW5nLXRvcDogNjhweDtcclxufVxyXG5cclxuLnBhZGRpbmctdG9wX2NvbnRhaW5lcl90ZXh0IHtcclxuICAgIGgxIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogNzBweDtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5wb3N0LWJ5e1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIFxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQ1MDtcclxuICAgICAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDM5cHg7XHJcblxyXG4gICAgfVxyXG59XHJcbn1cclxuXHJcbi5ibG9nLWNvbnRlbnQge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDIwNnB4O1xyXG5cclxuXHJcbiAgICBwIHtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzBweFxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkIHtcclxuXHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0VBRTlGMjtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcblxyXG4gICAgICAgXHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzhweDtcclxuICAgICAgICAgICAgc3BhbiB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29sb3I6JHByaW1hcnk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuXHJcbiIsIi5wYWRkaW5nLXRvcF9jb250YWluZXJfdGV4dCB7XG4gIHBhZGRpbmctdG9wOiA2OHB4O1xufVxuXG4ucGFkZGluZy10b3BfY29udGFpbmVyX3RleHQgaDEge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogNjBweDtcbiAgbGluZS1oZWlnaHQ6IDcwcHg7XG59XG4ucGFkZGluZy10b3BfY29udGFpbmVyX3RleHQgaDEgc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnBhZGRpbmctdG9wX2NvbnRhaW5lcl90ZXh0IC5wb3N0LWJ5IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5wYWRkaW5nLXRvcF9jb250YWluZXJfdGV4dCAucG9zdC1ieSBwIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZvbnQtd2VpZ2h0OiA0NTA7XG4gIGZvbnQtc2l6ZTogMjFweDtcbiAgbGluZS1oZWlnaHQ6IDM5cHg7XG59XG5cbi5ibG9nLWNvbnRlbnQge1xuICBwYWRkaW5nLWJvdHRvbTogMjA2cHg7XG59XG4uYmxvZy1jb250ZW50IHAge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE4cHg7XG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xufVxuLmJsb2ctY29udGVudCAuY2FyZCB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNFQUU5RjI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG4uYmxvZy1jb250ZW50IC5jYXJkIHAge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMzhweDtcbn1cbi5ibG9nLWNvbnRlbnQgLmNhcmQgcCBzcGFuIHtcbiAgY29sb3I6ICMyRTc5Q0E7XG59IiwiJHByaW1hcnk6ICMyRTc5Q0E7XHJcbiRwcmltYXJ5LWRhcms6ICMyMjY1YWU7XHJcblxyXG4kc2Vjb25kYXJ5OiAjMTcxNTRCO1xyXG5cclxuJG9yYW5nZTogI0ZGODEyNTtcclxuJG9yYW5nZS1kYXJrOiAjZDY2YzFmO1xyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageBlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-blog',
                templateUrl: './page-blog.component.html',
                styleUrls: ['./page-blog.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
document.addEventListener('DOMContentLoaded', () => {
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));
});


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Projects\poolservice\pool-service\angular-src\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map