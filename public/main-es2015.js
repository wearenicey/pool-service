(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {

  /***/ "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/
  /*! no static exports found */
  /***/ (function (module, exports) {

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
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

    /***/
  }),

  /***/ "./src/app/animations/fade.animation.ts":
  /*!**********************************************!*\
    !*** ./src/app/animations/fade.animation.ts ***!
    \**********************************************/
  /*! exports provided: fadeAnimation */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "fadeAnimation", function () {
      return fadeAnimation;
    });
    /* harmony import */
    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");

    const fadeAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeAnimation', [
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({position: 'relative'}),
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


    /***/
  }),

  /***/ "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/
  /*! exports provided: AppRoutingModule */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
    /* harmony import */
    var _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/homepage/homepage.component */ "./src/app/pages/homepage/homepage.component.ts");
    /* harmony import */
    var _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/blog/blog.component */ "./src/app/pages/blog/blog.component.ts");
    /* harmony import */
    var _pages_page_blog_page_blog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/page-blog/page-blog.component */ "./src/app/pages/page-blog/page-blog.component.ts");
    /* harmony import */
    var _pages_post_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/post/post.component */ "./src/app/pages/post/post.component.ts");


    const routes = [
      {
        path: '',
        component: _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_3__["HomepageComponent"],
        data: {}
      },
      {path: 'contact', component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"]},
      {
        path: 'blog',
        children: [
          {path: '', component: _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_4__["BlogComponent"]},
          {
            path: 'post-1',
            component: _pages_page_blog_page_blog_component__WEBPACK_IMPORTED_MODULE_5__["PageBlogComponent"]
          },
          {path: 'post-2', component: _pages_post_post_component__WEBPACK_IMPORTED_MODULE_6__["PostComponent"]}
        ]
      },
    ];

    class AppRoutingModule {
    }

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({type: AppRoutingModule});
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });
    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();


    /***/
  }),

  /***/ "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/
  /*! exports provided: AppComponent */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _animations_fade_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations/fade.animation */ "./src/app/animations/fade.animation.ts");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _mail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./mail.service */ "./src/app/mail.service.ts");
    /* harmony import */
    var angular_google_tag_manager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-google-tag-manager */ "./node_modules/angular-google-tag-manager/__ivy_ngcc__/fesm2015/angular-google-tag-manager.js");
    /* harmony import */
    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */
    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");


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
        // console.log(JSON.stringify(this.formData));
        // this.subscription = this.MailService.sendEmail(JSON.stringify(this.formData)).
        //   subscribe(data => {
        //     let msg = data['message']
        //     // console.log(data, "success");
        //     // this.toastr.success(msg);
        //   }, error => {
        //     console.error(error, "error");
        //   });
        // setTimeout(() => this.formData.reset(),
        //   5000);
      }
    }

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mail_service__WEBPACK_IMPORTED_MODULE_3__["MailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_google_tag_manager__WEBPACK_IMPORTED_MODULE_4__["GoogleTagManagerService"]));
    };
    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 1,
      consts: [["o", "outlet"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-navbar");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "main");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet", null, 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-footer");
        }
        if (rf & 2) {
          const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimation", ctx.getRouterOutletState(_r0));
        }
      },
      directives: [_components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"]],
      styles: ["[_nghost-%COMP%]   main[_ngcontent-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxnYmFiYVxcRG9jdW1lbnRzXFxEZXZcXHBvb2wtc2VydmljZVxcYW5ndWxhci1zcmMvc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0Usa0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBtYWluIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbn1cclxuIiwiOmhvc3QgbWFpbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn0iXX0= */"],
      data: {animation: [_animations_fade_animation__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]]}
    });
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss'],
          animations: [_animations_fade_animation__WEBPACK_IMPORTED_MODULE_1__["fadeAnimation"]]
        }]
      }], function () {
        return [{type: _mail_service__WEBPACK_IMPORTED_MODULE_3__["MailService"]}, {type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]}, {type: angular_google_tag_manager__WEBPACK_IMPORTED_MODULE_4__["GoogleTagManagerService"]}];
      }, null);
    })();


    /***/
  }),

  /***/ "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/
  /*! exports provided: AppModule */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */
    var _constants_format_title_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/format-title.pipe */ "./src/app/constants/format-title.pipe.ts");
    /* harmony import */
    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
    /* harmony import */
    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */
    var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/stepper.js");
    /* harmony import */
    var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
    /* harmony import */
    var _components_form_form_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/form/form.component */ "./src/app/components/form/form.component.ts");
    /* harmony import */
    var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
    /* harmony import */
    var _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/homepage/homepage.component */ "./src/app/pages/homepage/homepage.component.ts");
    /* harmony import */
    var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
    /* harmony import */
    var _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/blog/blog.component */ "./src/app/pages/blog/blog.component.ts");
    /* harmony import */
    var _pages_page_blog_page_blog_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/page-blog/page-blog.component */ "./src/app/pages/page-blog/page-blog.component.ts");
    /* harmony import */
    var _pages_post_post_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/post/post.component */ "./src/app/pages/post/post.component.ts");


    class AppModule {
    }

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      }, providers: [
        {provide: 'googleTagManagerId', useValue: 'GTM-KLH779D'}
      ], imports: [[
        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
        ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot({positionClass: 'inline'}),
        ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastContainerModule"],
        _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_9__["CdkStepperModule"]
      ]]
    });
    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
          _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
          _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"],
          _constants_format_title_pipe__WEBPACK_IMPORTED_MODULE_3__["FormatTitlePipe"],
          _components_form_form_component__WEBPACK_IMPORTED_MODULE_11__["FormComponent"],
          _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_13__["HomepageComponent"],
          _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
          _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__["BlogComponent"],
          _pages_page_blog_page_blog_component__WEBPACK_IMPORTED_MODULE_16__["PageBlogComponent"],
          _pages_post_post_component__WEBPACK_IMPORTED_MODULE_17__["PostComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
          _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
          _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
          _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
          _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
          _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastContainerModule"],
          _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_9__["CdkStepperModule"]]
      });
    })();
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_10__["NavbarComponent"],
            _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"],
            _constants_format_title_pipe__WEBPACK_IMPORTED_MODULE_3__["FormatTitlePipe"],
            _components_form_form_component__WEBPACK_IMPORTED_MODULE_11__["FormComponent"],
            _pages_homepage_homepage_component__WEBPACK_IMPORTED_MODULE_13__["HomepageComponent"],
            _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
            _pages_blog_blog_component__WEBPACK_IMPORTED_MODULE_15__["BlogComponent"],
            _pages_page_blog_page_blog_component__WEBPACK_IMPORTED_MODULE_16__["PageBlogComponent"],
            _pages_post_post_component__WEBPACK_IMPORTED_MODULE_17__["PostComponent"]
          ],
          imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot({positionClass: 'inline'}),
            ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastContainerModule"],
            _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_9__["CdkStepperModule"]
          ],
          providers: [
            {provide: 'googleTagManagerId', useValue: 'GTM-KLH779D'}
          ],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        }]
      }], null, null);
    })();


    /***/
  }),

  /***/ "./src/app/components/footer/footer.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/footer/footer.component.ts ***!
    \*******************************************************/
  /*! exports provided: FooterComponent */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


    class FooterComponent {
      constructor() {
      }

      ngOnInit() {
      }
    }

    FooterComponent.ɵfac = function FooterComponent_Factory(t) {
      return new (t || FooterComponent)();
    };
    FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FooterComponent,
      selectors: [["app-footer"]],
      decls: 64,
      vars: 0,
      consts: [[1, "footer", "page__footer"], [1, "pt-5", "footer"], [1, "container"], [1, "row", "pt-5", "pb-5", "mb-5"], [1, "col-lg-4", "col-xs-12", "f"], [1, "pr-5", "text-white-50"], [1, "btn", "btn-primary", "rounded", "p-3"], [1, "col-lg-2", "col-xs-12", "links"], [1, "mt-lg-0", "mt-sm-3", "mb-3", 2, "color", "#8C97AC"], [1, "m-0", "p-0"], [1, "mb-2"], [1, "col-lg-2", "col-xs-12", "location"], [1, "mb-3", "p-0"], [1, "col-lg-4", "col-xs-12", "about"], [1, "m-0", "p-0", "mb-2"], ["href", "", 2, "color", "#FFD166"], [1, "row"], [1, "col", "copyright"], [1, "text-white"], [1, "in", "float-right", 2, "list-style", "none"], [1, "fab", "fa-facebook-f", 2, "color", "#fff"], [1, "fab", "fa-twitter", 2, "color", "#fff"], [1, "fab", "fa-google", 2, "color", "#fff"]],
      template: function FooterComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "footer", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Pool Service");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Your ultimate email solution to grow business and engaging with future customers and clients. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Besplatna konsultacija");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h6", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Bazeni");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "ul", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "For Talents");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "For Companies");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "a");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Facebook Groups");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "FAQ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "h6", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "O nama");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "ul", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "a");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Meat the Team");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Our Story");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "a");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Career");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h6", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Kontakt");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium sint maxime placeat, obcaecati aliquid .");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "ul", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "li", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "021 / 6678 000");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "info@finity.com");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "small", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "\u00A9 Nicey 2020 All Rights Reserved");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "ul", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "i", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "i", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "li");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "i", 22);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".page__footer[_ngcontent-%COMP%] {\n  background-color: #17154B;\n  height: auto;\n  color: #fff;\n}\n.page__footer[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.page__footer[_ngcontent-%COMP%]   .links[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.page__footer[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.page__footer[_ngcontent-%COMP%]   .location[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n.page__footer[_ngcontent-%COMP%]   .about[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n}\n.page__footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%] {\n  border-top: 1px solid #313D55;\n}\n.page__footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  color: #8C97AC;\n}\n.page__footer[_ngcontent-%COMP%]   .copyright[_ngcontent-%COMP%]   .in[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline;\n  letter-spacing: 5px;\n}\n.page__footer[_ngcontent-%COMP%]   #circle_yellow[_ngcontent-%COMP%] {\n  width: 128px;\n  height: 127px;\n  background-color: #FFD166;\n  border-radius: 0 100% 0 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvQzpcXFVzZXJzXFxnYmFiYVxcRG9jdW1lbnRzXFxEZXZcXHBvb2wtc2VydmljZVxcYW5ndWxhci1zcmMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGZvb3RlclxcZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9DOlxcVXNlcnNcXGdiYWJhXFxEb2N1bWVudHNcXERldlxccG9vbC1zZXJ2aWNlXFxhbmd1bGFyLXNyYy9zcmNcXGFzc2V0c1xcc2Nzc1xcX2NvbG9ycy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx5QkNGVTtFREdWLFlBQUE7RUFDQSxXQUFBO0FFREY7QUZJSTtFQUNFLGdCQUFBO0FFRk47QUZJTTtFQUNFLGVBQUE7QUVGUjtBRlFJO0VBQ0UsZ0JBQUE7QUVOTjtBRlFNO0VBQ0UsZUFBQTtBRU5SO0FGWUk7RUFDRSxnQkFBQTtBRVZOO0FGY0U7RUFFRSw2QkFBQTtBRWJKO0FGZUk7RUFDRSxnQkFBQTtFQUNBLGNBQUE7QUViTjtBRmlCTTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBRWZSO0FGb0JFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FFbEJKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInNyYy9hc3NldHMvc2Nzcy9jb2xvcnNcIjtcclxuXHJcbi5wYWdlX19mb290ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnk7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG5cclxuICAubGlua3Mge1xyXG4gICAgdWwge1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAubG9jYXRpb24ge1xyXG4gICAgdWwge1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAuYWJvdXQge1xyXG4gICAgdWwge1xyXG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmNvcHlyaWdodCB7XHJcblxyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzMTNENTU7O1xyXG5cclxuICAgIHAge1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBjb2xvcjogIzhDOTdBQztcclxuICAgIH1cclxuXHJcbiAgICAuaW4ge1xyXG4gICAgICBsaSB7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gICNjaXJjbGVfeWVsbG93IHtcclxuICAgIHdpZHRoOiAxMjhweDtcclxuICAgIGhlaWdodDogMTI3cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZEMTY2OztcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgMTAwJSAwIDA7XHJcbiAgfVxyXG59XHJcbiIsIiRwcmltYXJ5OiAjMTc1Q0ZGO1xyXG4kc2Vjb25kYXJ5OiAjMTcxNTRCO1xyXG4iLCIucGFnZV9fZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE3MTU0QjtcbiAgaGVpZ2h0OiBhdXRvO1xuICBjb2xvcjogI2ZmZjtcbn1cbi5wYWdlX19mb290ZXIgLmxpbmtzIHVsIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbi5wYWdlX19mb290ZXIgLmxpbmtzIHVsIGEge1xuICBmb250LXNpemU6IDE2cHg7XG59XG4ucGFnZV9fZm9vdGVyIC5sb2NhdGlvbiB1bCB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG4ucGFnZV9fZm9vdGVyIC5sb2NhdGlvbiB1bCBhIHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLnBhZ2VfX2Zvb3RlciAuYWJvdXQgdWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLnBhZ2VfX2Zvb3RlciAuY29weXJpZ2h0IHtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICMzMTNENTU7XG59XG4ucGFnZV9fZm9vdGVyIC5jb3B5cmlnaHQgcCB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIGNvbG9yOiAjOEM5N0FDO1xufVxuLnBhZ2VfX2Zvb3RlciAuY29weXJpZ2h0IC5pbiBsaSB7XG4gIGRpc3BsYXk6IGlubGluZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDVweDtcbn1cbi5wYWdlX19mb290ZXIgI2NpcmNsZV95ZWxsb3cge1xuICB3aWR0aDogMTI4cHg7XG4gIGhlaWdodDogMTI3cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkQxNjY7XG4gIGJvcmRlci1yYWRpdXM6IDAgMTAwJSAwIDA7XG59Il19 */"]
    });
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-footer',
          templateUrl: './footer.component.html',
          styleUrls: ['./footer.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();


    /***/
  }),

  /***/ "./src/app/components/form/form.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/form/form.component.ts ***!
    \***************************************************/
  /*! exports provided: FormComponent */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FormComponent", function () {
      return FormComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */
    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */
    var _mail_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mail.service */ "./src/app/mail.service.ts");
    /* harmony import */
    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");


    function FormComponent_div_4_ng_container_7_Template(rf, ctx) {
      if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FormComponent_div_4_ng_container_7_Template_input_change_4_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);
          const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
          return ctx_r6.onCheckboxChange($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }
      if (rf & 2) {
        const web_r5 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", web_r5.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", web_r5.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", web_r5.usluga, " ");
      }
    }

    function FormComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Korak 1 od 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, FormComponent_div_4_ng_container_7_Template, 6, 3, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormComponent_div_4_Template_button_click_10_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);
          const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
          return ctx_r8.nextStep();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Sledeci korak ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.websiteList);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
      }
    }

    function FormComponent_div_5_div_21_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Please select either value");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function FormComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Korak 2 od 3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Vreme:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FormComponent_div_5_Template_input_change_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
          const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
          return ctx_r11.changeGender($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Prepodne");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FormComponent_div_5_Template_input_change_14_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
          const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
          return ctx_r13.changeGender($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Poslepodne");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function FormComponent_div_5_Template_input_change_18_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
          const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
          return ctx_r14.changeGender($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Predvece");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, FormComponent_div_5_div_21_Template, 3, 0, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormComponent_div_5_Template_button_click_22_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);
          const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
          return ctx_r15.nextStep();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Sledeci korak ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
      if (rf & 2) {
        const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.f.errors == null ? null : ctx_r2.f.errors.required);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r0.valid);
      }
    }

    function FormComponent_div_6_Template(rf, ctx) {
      if (rf & 1) {
        const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "STEP3 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormComponent_div_6_Template_button_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17);
          const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
          return ctx_r16.submitForm();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Siguiente");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    class FormComponent {
      // activeStepIndex: number;
      // currentFormContent: Array<any>;
      // formData: any;
      // formFields: Array<Array<string>>;
      // masterFormFields: Array<string>;
      // stepItems: Array<any>;
      // masterForm: Array<FormGroup>;
      // public subscription: Subscription;
      constructor(MailService, formBuilder, toastr) {
        this.MailService = MailService;
        this.formBuilder = formBuilder;
        this.toastr = toastr;
        this.selection = {};
        // form: FormGroup;
        this.websiteList = [
          {
            usluga: 'Izgradnja',
            imageUrl: 'https://www.southwestjournal.com/wp-content/uploads/2019/09/46-pool.jpg',
            id: 'Izgradnja',
            value: 'Izgradnja'
          },
          {
            usluga: 'Projektovanje',
            imageUrl: 'https://www.southwestjournal.com/wp-content/uploads/2019/09/46-pool.jpg',
            id: 'Projektovanje'
          },
          {
            usluga: 'Renoviranje',
            imageUrl: 'https://www.southwestjournal.com/wp-content/uploads/2019/09/46-pool.jpg',
            id: 'Renoviranje'
          },
          {
            usluga: 'Odrzavanje',
            imageUrl: 'https://www.volimsvojdom.rs/wf-proizvodiPics/89179/bazen-za-decu-steel-pool-bestway-300x201x66cm-56404-1.jpg',
            id: 'Odrzavanje'
          },
          {
            usluga: 'Dodatna Oprema',
            imageUrl: 'https://www.southwestjournal.com/wp-content/uploads/2019/09/46-pool.jpg',
            id: 'Dodatna Oprema'
          },
        ];
        this.variable = 0;
        this.multi = false;
        this.formSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.form = this.formBuilder.group({
          website: this.formBuilder.array([], [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
          gender: ['poslepodne', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]]
        });
        const control = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('inital value', {validators: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required});
      }

      get f() {
        return this.form.get('gender');
      }

      nextStep() {
        if (this.variable < 3) {
          this.variable = this.variable + 1;
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
        } else {
          const index = website.controls.findIndex(x => x.value === e.target.value);
          website.removeAt(index);
        }
      }

      submitForm() {
        console.log('kita');
        console.log('Inputi', this.form.value);
      }

      // TODO: add interfaces and enums wherever appropriate
      // this.formContent = LISTA_KORAKA;
      // this.formData = {};
      // this.activeStepIndex = 0;
      // this.masterForm = [];
      // this.currentFormContent = [];
      // this.formFields = [];
      // this.stepItems = this.formContent;
      // this.stepItems.forEach((data, i) => {
      //   this.currentFormContent.push(this.stepItems[i]['data']); // holds name, validators, placeholder of all steps
      //   this.formFields.push(Object.keys(this.currentFormContent[i])); // holds string values for each field of all steps
      //   this.masterForm.push(this.buildForm(this.currentFormContent[i])); // holds all form groups
      //   });
      // }
      // build separate FormGroups for each form
      // buildForm(currentFormContent: any): FormGroup {
      //   const formDetails = Object.keys(currentFormContent).reduce(
      //     (obj, key) => {
      //       obj[key] = ['', this.getValidators(currentFormContent[key])];
      //       return obj;
      //     },
      //     {}
      //   );
      //   return this._formBuilder.group(formDetails);
      // }
      // // get validator(s) for each field, if any
      // getValidators(formField: any): Validators {
      //   const fieldValidators = Object.keys(formField.validations).map(validator => {
      //     if (validator === 'required') {
      //       return Validators[validator];
      //     } else {
      //       return Validators[validator](formField.validations[validator]);
      //     }
      //   });
      //   return fieldValidators;
      // }
      // getValidationMessage(formIndex: number, formFieldName: string): string {
      //   const formErrors = this.masterForm[formIndex].get(formFieldName).errors;
      //   const errorMessages = this.currentFormContent[formIndex][formFieldName]
      //     .errors;
      //   const validationError = errorMessages[Object.keys(formErrors)[0]];
      //   return validationError;
      // }
      // goToStep(step: string): void {
      //   this.activeStepIndex =
      //     step === 'prev' ? this.activeStepIndex - 1 : this.activeStepIndex + 1;
      //   this.setFormPreview();
      // }
      // setFormPreview(): void {
      //   this.formData = this.masterForm.reduce(
      //     (masterForm, currentForm) => ({ ...masterForm, ...currentForm.value }),
      //     {}
      //   );
      //   this.masterFormFields = Object.keys(this.formData);
      // }
      // onFormSubmit(): void {
      //   // emit aggregate form data to parent component, where we POST
      //   this.formSubmit.emit(this.formData);
      //   console.log(JSON.stringify(this.formData));
      //   this.MailService.sendEmail(this.formData);
      //   this.formData.reset();
      // }
      // trackByFn(index: number): number {
      //   return index;
      // }
      // eventCheck(event) {
      //   console.log(event.target.checked)
      // }
      // infoForm = this.fb.group({
      //   name: ['', [
      //     Validators.required,
      //     Validators.minLength(3)
      //   ]
      //   ],
      //   email: ['', [
      //     Validators.required,
      //     Validators.email
      //   ]
      //   ],
      //   subject: ['', [
      //     Validators.required,
      //     Validators.minLength(5)
      //   ]
      //   ],
      //   message: ['', [
      //     Validators.required,
      //     Validators.minLength(20)
      //   ]
      //   ],
      //   checkbox: ['', [
      //     Validators.required,
      //   ]
      //   ],
      // });
      // get name() { return this.infoForm.get('name'); }
      // get email() { return this.infoForm.get('email'); }
      // get subject() { return this.infoForm.get('subject'); }
      // get message() { return this.infoForm.get('message'); }
      // get checkbox() { return this.infoForm.get('checkbox').value }
      // sendMail() {
      //   // this.formSubmit.emit(this.formData);
      //   // this.subscription = this.MailService.sendEmail(this.formData.value).
      //   //   subscribe(data => {
      //   //     let msg = data['message']
      //   //     // console.log(data, "success");
      //   //     this.toastr.success(msg);
      //   //   }, error => {
      //   //     console.error(error, "error");
      //   //   });
      //   // setTimeout(() => this.formData.reset(),
      //   //   5000);
      //   this.MailService.sendEmail(JSON.stringify(this.formData.value));
      //   this.formData.reset();
      // }
      ngOnDestroy() {
      }
    }

    FormComponent.ɵfac = function FormComponent_Factory(t) {
      return new (t || FormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_mail_service__WEBPACK_IMPORTED_MODULE_3__["MailService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]));
    };
    FormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FormComponent,
      selectors: [["app-form"]],
      viewQuery: function FormComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastContainerDirective"], true);
        }
        if (rf & 2) {
          var _t;
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.toastContainer = _t.first);
        }
      },
      inputs: {formContent: "formContent"},
      outputs: {formSubmit: "formSubmit"},
      decls: 7,
      vars: 5,
      consts: [[3, "ngSwitch"], [1, "card"], [3, "formGroup", "ngSubmit"], ["forma", "ngForm"], [4, "ngSwitchCase"], [1, "card-header"], [1, "form-heading"], [1, "card-body"], [1, "form", "d-flex", "flex-column"], [4, "ngFor", "ngForOf"], [1, "test"], ["type", "submit", 1, "btn", "btn-primary", "btn-block", "rounded", 3, "disabled", "click"], [1, "d-flex", "flex-row", "align-items-center"], ["alt", "", "srcset", "", 1, "rounded-left", "float-left", 2, "width", "88px", "height", "43px", 3, "src"], ["formArrayName", "website", 1, "float-right"], ["type", "checkbox", 3, "value", "change"], [1, "form-group"], ["id", "prepodne", "type", "radio", "value", "prepodne", "name", "gender", "formControlName", "gender", 3, "change"], ["for", "prepodne"], ["id", "poslepodne", "type", "radio", "value", "poslepodne", "name", "gender", "formControlName", "gender", 3, "change"], ["for", "poslepodne"], ["id", "predvece", "type", "radio", "value", "predvece", "name", "gender", "formControlName", "gender", 3, "change"], ["for", "predvece"], ["class", "invalid-feedback", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", 3, "disabled", "click"], [1, "invalid-feedback"], [1, "btn", "btn-primary", 3, "click"]],
      template: function FormComponent_Template(rf, ctx) {
        if (rf & 1) {
          const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 2, 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function FormComponent_Template_form_ngSubmit_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18);
            const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
            return _r0.form.valid && ctx.submitForm();
          });
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, FormComponent_div_4_Template, 12, 2, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, FormComponent_div_5_Template, 24, 2, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FormComponent_div_6_Template, 4, 0, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx.variable);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "0");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "2");
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitch"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RadioControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: [".card[_ngcontent-%COMP%] {\n  border: 1px solid rgba(0, 0, 0, 0.04);\n  box-sizing: border-box;\n  box-shadow: 0 0 1px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.04), 0 16px 24px rgba(0, 0, 0, 0.04), 0 24px 32px rgba(0, 0, 0, 0.04);\n  border-radius: 10px;\n}\n\n.form[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb3JtL0M6XFxVc2Vyc1xcZ2JhYmFcXERvY3VtZW50c1xcRGV2XFxwb29sLXNlcnZpY2VcXGFuZ3VsYXItc3JjL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmb3JtXFxmb3JtLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvcm0vZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFDQUFBO0VBQ0Esc0JBQUE7RUFDQSx3SUFBQTtFQUNBLG1CQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb3JtL2Zvcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjA0KTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjA0KSwgMCA0cHggOHB4IHJnYmEoMCwgMCwgMCwgMC4wNCksIDAgMTZweCAyNHB4IHJnYmEoMCwgMCwgMCwgMC4wNCksIDAgMjRweCAzMnB4IHJnYmEoMCwgMCwgMCwgMC4wNCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuIiwiLmNhcmQge1xuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4wNCksIDAgNHB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAwIDE2cHggMjRweCByZ2JhKDAsIDAsIDAsIDAuMDQpLCAwIDI0cHggMzJweCByZ2JhKDAsIDAsIDAsIDAuMDQpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4uZm9ybSB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-form',
          templateUrl: './form.component.html',
          styleUrls: ['./form.component.scss']
        }]
      }], function () {
        return [{type: _mail_service__WEBPACK_IMPORTED_MODULE_3__["MailService"]}, {type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]}, {type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]}];
      }, {
        toastContainer: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastContainerDirective"], {static: true}]
        }], formContent: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], formSubmit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();


    /***/
  }),

  /***/ "./src/app/components/navbar/navbar.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/navbar/navbar.component.ts ***!
    \*******************************************************/
  /*! exports provided: NavbarComponent */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */
    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");


    const _c0 = function () {
      return ["/"];
    };
    const _c1 = function () {
      return ["/contact"];
    };

    class NavbarComponent {
      constructor() {
      }

      ngOnInit() {
      }
    }

    NavbarComponent.ɵfac = function NavbarComponent_Factory(t) {
      return new (t || NavbarComponent)();
    };
    NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavbarComponent,
      selectors: [["app-navbar"]],
      decls: 32,
      vars: 12,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-light", "bg-light", "px-5"], [1, "navbar-brand", 3, "routerLink"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "mx-auto"], [1, "nav-item", "mr-4"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"], [1, "nav-item"], [1, "d-flex", "flex-column", "mr-5"], ["href", "tel:+381214329654"], [1, "form-inline", "my-2", "my-lg-0"], [1, "btn", "btn-primary", "rounded", "p-3"]],
      template: function NavbarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Pool Service");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "span", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "ul", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "BAZENI");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "OPREMA");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "ODR\u017DAVANJE");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "O NAMA");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "li", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "KONTAKT");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Pozovite nas");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " 021/ 4320 654");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "form", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Besplatna konsultacija");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"]],
      styles: [".navbar[_ngcontent-%COMP%] {\n  height: 128px;\n  font-family: \"Gilroy-regular\", sans-serif;\n}\n.navbar[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-bold\", sans-serif;\n  font-size: 26px;\n}\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style-type: none;\n}\n.navbar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: \"Gilroy-bold\", sans-serif;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvQzpcXFVzZXJzXFxnYmFiYVxcRG9jdW1lbnRzXFxEZXZcXHBvb2wtc2VydmljZVxcYW5ndWxhci1zcmMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG5hdmJhclxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxhQUFBO0VBQ0EseUNBQUE7QUNERjtBREdFO0VBQ0Usc0NBQUE7RUFDQSxlQUFBO0FDREo7QURJRTtFQUNFLHFCQUFBO0FDRko7QURLTTtFQUNFLHNDQUFBO0VBQ0EsaUJBQUE7QUNIUiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiBAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29sb3JzXCI7XHJcblxyXG4ubmF2YmFyIHtcclxuICBoZWlnaHQ6IDEyOHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnR2lscm95LXJlZ3VsYXInLCBzYW5zLXNlcmlmO1xyXG5cclxuICBoNCB7XHJcbiAgICBmb250LWZhbWlseTogJ0dpbHJveS1ib2xkJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICB9XHJcblxyXG4gIHVsIHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuXHJcbiAgICBsaSB7XHJcbiAgICAgIGEge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnR2lscm95LWJvbGQnLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4iLCIubmF2YmFyIHtcbiAgaGVpZ2h0OiAxMjhweDtcbiAgZm9udC1mYW1pbHk6IFwiR2lscm95LXJlZ3VsYXJcIiwgc2Fucy1zZXJpZjtcbn1cbi5uYXZiYXIgaDQge1xuICBmb250LWZhbWlseTogXCJHaWxyb3ktYm9sZFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDI2cHg7XG59XG4ubmF2YmFyIHVsIHtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuLm5hdmJhciB1bCBsaSBhIHtcbiAgZm9udC1mYW1pbHk6IFwiR2lscm95LWJvbGRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"]
    });
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-navbar',
          templateUrl: './navbar.component.html',
          styleUrls: ['./navbar.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();


    /***/
  }),

  /***/ "./src/app/constants/format-title.pipe.ts":
  /*!************************************************!*\
    !*** ./src/app/constants/format-title.pipe.ts ***!
    \************************************************/
  /*! exports provided: FormatTitlePipe */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "FormatTitlePipe", function () {
      return FormatTitlePipe;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


    class FormatTitlePipe {
      transform(title) {
        const result = title.replace(/([A-Z])/g, ' $1');
        const finalResult = result.charAt(0)
            .toUpperCase() + result.slice(1);
        return finalResult;
      }
    }

    FormatTitlePipe.ɵfac = function FormatTitlePipe_Factory(t) {
      return new (t || FormatTitlePipe)();
    };
    FormatTitlePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
      name: "formatTitle",
      type: FormatTitlePipe,
      pure: true
    });
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormatTitlePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
          name: 'formatTitle'
        }]
      }], null, null);
    })();


    /***/
  }),

  /***/ "./src/app/mail.service.ts":
  /*!*********************************!*\
    !*** ./src/app/mail.service.ts ***!
    \*********************************/
  /*! exports provided: MailService */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "MailService", function () {
      return MailService;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");


    class MailService {
      constructor(http) {
        this.http = http;
      }

      // sendEmail(data: any): Observable<any> {
      //   return this.http.post<any>('http://localhost:5000/contact', data)
      // }
      sendEmail(data) {
        console.log(data);
        this.http.post('http://localhost:5000/contact', data).subscribe((data) => {
        });
      }
    }

    MailService.ɵfac = function MailService_Factory(t) {
      return new (t || MailService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };
    MailService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: MailService,
      factory: MailService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MailService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]}];
      }, null);
    })();


    /***/
  }),

  /***/ "./src/app/pages/blog/blog.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/blog/blog.component.ts ***!
    \**********************************************/
  /*! exports provided: BlogComponent */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "BlogComponent", function () {
      return BlogComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");


    const _c0 = function () {
      return ["post-1"];
    };

    class BlogComponent {
      constructor() {
      }

      ngOnInit() {
      }
    }

    BlogComponent.ɵfac = function BlogComponent_Factory(t) {
      return new (t || BlogComponent)();
    };
    BlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BlogComponent,
      selectors: [["app-blog"]],
      decls: 131,
      vars: 2,
      consts: [[1, "container-fluid"], [1, "row"], [1, "col-12", "d-flex", "justify-content-center"], [1, "float-left", 2, "position", "absolute", "top", "50%", "left", "25%", "transform", "translate(-100%, -50%)", "font-size", "96px", "color", "#fff", "font", "bold"], ["src", "../../../assets/img/blog/room-5LRUg3IwNpI-unsplash.png", "alt", "blog-pocetna-slika"], [1, "container", "padding-top_menu"], [1, "col-sm-12"], [1, "menu_list"], [1, ""], [1, "ml-5"], [1, "container", "padding-top_blog_card"], [1, "col-lg-4"], ["src", "../../../assets/img/blog/Base.png", "alt", "Generic placeholder image", 1, "img-blog_card"], [1, "smallText-blog_card"], [1, "mainText-blog_card"], [1, "link-blog_card", 3, "routerLink"], ["href", "#", 1, "link-blog_card"], [1, "container-fluid", "consultation_container", "py-4"], [1, "container"], [1, "float-left", "mt-5", "p-xl-3", 2, "color", "#fff"], [1, "float-right", "mt-5", "p-xl-4"], [1, "btn", "rounded", "p-3", 2, "background", "#FF8125", "color", "#fff"]],
      template: function BlogComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Blog");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Sve");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Programming & Tech");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Graphic Design");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Digital Marketing");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "SaaS Tools");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Website Builder");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Analystics");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Writing");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "All our physical products that we have branded and sold");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "a", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "READ MORE");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](39, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "All our physical products that we have branded and sold");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, "READ MORE");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "p", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "All our physical products that we have branded and sold");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "READ MORE");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, "All our physical products that we have branded and sold");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, "READ MORE");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](69, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "p", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "p", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "All our physical products that we have branded and sold");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](77, "READ MORE");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](79, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "p", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "p", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, "All our physical products that we have branded and sold");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "READ MORE");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](89, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "p", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "p", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "All our physical products that we have branded and sold");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](97, "READ MORE");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](98, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "p", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, "Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "p", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, "All our physical products that we have branded and sold");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](107, "READ MORE");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "p", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, "Products");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "p", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "All our physical products that we have branded and sold");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "a", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](117, "READ MORE");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "div", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](124, "Besplatne konsultacije");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " bricks-and-clicks innovation. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "div", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "button", 21);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](129, "Klikni ovde");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](130, "router-outlet");
        }
        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: [".padding-top_menu[_ngcontent-%COMP%], .padding-top_blog_card[_ngcontent-%COMP%] {\n  padding-top: 95px;\n}\n\n.padding-top_menu[_ngcontent-%COMP%]   .menu_list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #455154;\n  font-weight: bold;\n}\n\n.padding-top_blog_card[_ngcontent-%COMP%] {\n  padding-bottom: 287px;\n}\n\n.padding-top_blog_card[_ngcontent-%COMP%]   .smallText-blog_card[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 20px;\n  color: #57586E;\n  opacity: 0.3;\n}\n\n.padding-top_blog_card[_ngcontent-%COMP%]   .mainText-blog_card[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 24px;\n  line-height: 34px;\n}\n\n.padding-top_blog_card[_ngcontent-%COMP%]   .link-blog_card[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 2px;\n}\n\n.consultation_container[_ngcontent-%COMP%] {\n  background: #5454D4;\n  height: 281px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYmxvZy9DOlxcVXNlcnNcXGdiYWJhXFxEb2N1bWVudHNcXERldlxccG9vbC1zZXJ2aWNlXFxhbmd1bGFyLXNyYy9zcmNcXGFwcFxccGFnZXNcXGJsb2dcXGJsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2Jsb2cvYmxvZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNJLGlCQUFBO0FDRko7O0FET1E7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUNKUjs7QURhQTtFQUNJLHFCQUFBO0FDVko7O0FEWUk7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFFQSxZQUFBO0FDWEo7O0FEY0k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ1pSOztBRGdCSTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUNkSjs7QURxQkE7RUFFSSxtQkFBQTtFQUdBLGFBQUE7QUNyQkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ibG9nL2Jsb2cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vYXNzZXRzL3Njc3MvY29sb3JzXCI7XHJcblxyXG5cclxuLnBhZGRpbmctdG9wX21lbnUsIC5wYWRkaW5nLXRvcF9ibG9nX2NhcmQge1xyXG4gICAgcGFkZGluZy10b3A6IDk1cHg7XHJcbn1cclxuXHJcbi5wYWRkaW5nLXRvcF9tZW51e1xyXG4gICAgLm1lbnVfbGlzdCB7XHJcbiAgICAgICAgYXtcclxuICAgICAgICBjb2xvcjogIzQ1NTE1NDtcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDsgXHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG5cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5wYWRkaW5nLXRvcF9ibG9nX2NhcmQge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDI4N3B4O1xyXG5cclxuICAgIC5zbWFsbFRleHQtYmxvZ19jYXJke1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xyXG4gICAgY29sb3I6ICM1NzU4NkU7XHJcblxyXG4gICAgb3BhY2l0eTogMC4zO1xyXG59XHJcblxyXG4gICAgLm1haW5UZXh0LWJsb2dfY2FyZHtcclxuICAgICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzRweDtcclxuXHJcblxyXG4gICAgfVxyXG4gICAgLmxpbmstYmxvZ19jYXJke1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBsaW5lLWhlaWdodDogMjBweDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcbn1cclxuICAgIFxyXG5cclxuXHJcbn1cclxuXHJcbi5jb25zdWx0YXRpb25fY29udGFpbmVyIHtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZDogICM1NDU0RDQ7XHJcblxyXG4gICAgXHJcbiAgICBoZWlnaHQ6IDI4MXB4O1xyXG59IiwiLnBhZGRpbmctdG9wX21lbnUsIC5wYWRkaW5nLXRvcF9ibG9nX2NhcmQge1xuICBwYWRkaW5nLXRvcDogOTVweDtcbn1cblxuLnBhZGRpbmctdG9wX21lbnUgLm1lbnVfbGlzdCBhIHtcbiAgY29sb3I6ICM0NTUxNTQ7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4ucGFkZGluZy10b3BfYmxvZ19jYXJkIHtcbiAgcGFkZGluZy1ib3R0b206IDI4N3B4O1xufVxuLnBhZGRpbmctdG9wX2Jsb2dfY2FyZCAuc21hbGxUZXh0LWJsb2dfY2FyZCB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIGNvbG9yOiAjNTc1ODZFO1xuICBvcGFjaXR5OiAwLjM7XG59XG4ucGFkZGluZy10b3BfYmxvZ19jYXJkIC5tYWluVGV4dC1ibG9nX2NhcmQge1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDI0cHg7XG4gIGxpbmUtaGVpZ2h0OiAzNHB4O1xufVxuLnBhZGRpbmctdG9wX2Jsb2dfY2FyZCAubGluay1ibG9nX2NhcmQge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cblxuLmNvbnN1bHRhdGlvbl9jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjNTQ1NEQ0O1xuICBoZWlnaHQ6IDI4MXB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-blog',
          templateUrl: './blog.component.html',
          styleUrls: ['./blog.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();


    /***/
  }),

  /***/ "./src/app/pages/contact/contact.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/pages/contact/contact.component.ts ***!
    \****************************************************/
  /*! exports provided: ContactComponent */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _components_form_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/form/form.component */ "./src/app/components/form/form.component.ts");


    class ContactComponent {
      constructor() {
      }

      ngOnInit() {
      }
    }

    ContactComponent.ɵfac = function ContactComponent_Factory(t) {
      return new (t || ContactComponent)();
    };
    ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactComponent,
      selectors: [["app-contact"]],
      decls: 67,
      vars: 0,
      consts: [[1, "container", "padding-top_contact"], [1, "row"], [1, "col-6"], [1, "mb-5"], ["id", "contact-info", 1, "row", "align-items-center"], [1, "col-2", "pl-0"], [1, "icon", "icon_time"], ["src", "assets/img/icons/time.svg", "alt", ""], [1, "col"], [1, "mb-3"], [1, "mb-4"], [1, "icon", "icon_map"], ["src", "assets/img/icons/address.svg", "alt", ""], [1, "container", "padding-top_maps"], ["src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2808.452235349429!2d19.83411361577871!3d45.25886835514143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475b10434ee9e573%3A0xdcbd057b3db72794!2sPool%20Service!5e0!3m2!1sen!2srs!4v1595442556936!5m2!1sen!2srs", "width", "100%", "height", "450", "frameborder", "0", "allowfullscreen", "", "aria-hidden", "false", "tabindex", "0", 2, "border", "0"], ["id", "contact-images", 1, "container"], [1, "col-7"], [1, "mr-3"], ["src", "../../../assets/img/kontakt/slika-1.png", "alt", "slika-1", 1, "img-fluid"], [1, "col-5"], ["src", "../../../assets/img/kontakt/slika-2.jpg", "alt", "slika-2", 1, "borderShadow", "img-fluid", 2, "-webkit-box-shadow", "40px 40px 0px 0px rgba(23,21,75,1)", "-moz-box-shadow", "40px 40px 0px 0px rgba(23,21,75,1)", "box-shadow", "40px 40px 0px 0px rgba(23,21,75,1)"]],
      template: function ContactComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Stupite u kontakt ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Voleli bismo razgovarati o tome kako vam mo\u017Eemo pomo\u0107i");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h5", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Radno vreme");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Pon - Pet");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Subota");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Nedelja");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "08:00 - 16:00");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "08:00 - 14:00");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Neradna");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "div", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h5", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Radno vreme");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Pon - Pet");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Subota");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Nedelja");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h5", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Radno vreme");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "08:00 - 16:00");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "08:00 - 14:00");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Neradna");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "app-form");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "iframe", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "div", 15);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "div", 16);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 17);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "img", 18);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 19);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "img", 20);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_components_form_form_component__WEBPACK_IMPORTED_MODULE_1__["FormComponent"]],
      styles: [".padding-top_maps[_ngcontent-%COMP%], .padding-top_contact[_ngcontent-%COMP%], .padding-top_pictures[_ngcontent-%COMP%], .page__footer[_ngcontent-%COMP%] {\n  margin-top: 128px;\n}\n\n.icon[_ngcontent-%COMP%] {\n  background-color: #F6F8FF;\n  height: 152px;\n  border-radius: 10px;\n}\n\n#contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0.25em;\n  font-size: 18px;\n}\n\n#contact-images[_ngcontent-%COMP%] {\n  margin-bottom: 10rem;\n}\n\n.working-time.row[_ngcontent-%COMP%], .contact-info.row[_ngcontent-%COMP%] {\n  margin-left: 0 !important;\n}\n\n.working-time[_ngcontent-%COMP%] {\n  margin-bottom: 64px;\n}\n\n.working-time[_ngcontent-%COMP%]   .col-sm-2[_ngcontent-%COMP%] {\n  padding-left: 0px;\n}\n\n.working-time[_ngcontent-%COMP%]   .col-sm-2[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  height: 100%;\n}\n\n.working-time[_ngcontent-%COMP%]   .col-sm-10[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:first-child {\n  font-size: 26px;\n  margin-bottom: 24px;\n}\n\n.labels[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 18px;\n}\n\n.contact-info[_ngcontent-%COMP%]   .col-sm-2[_ngcontent-%COMP%] {\n  padding-left: 0;\n}\n\n.contact-info[_ngcontent-%COMP%]   .labels[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  font-size: 26px;\n  margin-bottom: 24px;\n}\n\n.padding-top_maps[_ngcontent-%COMP%]   iframe[_ngcontent-%COMP%] {\n  height: 430px;\n  width: 100%;\n  box-shadow: 40px 40px 0px 0px #17154b;\n  margin-bottom: 161px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udGFjdC9DOlxcVXNlcnNcXGdiYWJhXFxEb2N1bWVudHNcXERldlxccG9vbC1zZXJ2aWNlXFxhbmd1bGFyLXNyYy9zcmNcXGFwcFxccGFnZXNcXGNvbnRhY3RcXGNvbnRhY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJQTtFQUNFLGlCQUFBO0FDSEY7O0FEVUE7RUFDRSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ1BGOztBRFdFO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0FDUko7O0FEWUE7RUFDRSxvQkFBQTtBQ1RGOztBRFlBOztFQUVFLHlCQUFBO0FDVEY7O0FEV0E7RUFDRSxtQkFBQTtBQ1JGOztBRFVBO0VBQ0ksaUJBQUE7QUNQSjs7QURTQTtFQUNJLFlBQUE7QUNOSjs7QURTQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQ05KOztBRFNBO0VBQ0UsY0FBQTtFQUNBLGVBQUE7QUNORjs7QURVQTtFQUNFLGVBQUE7QUNQRjs7QURjQTtFQUNFLGVBQUE7RUFDQSxtQkFBQTtBQ1hGOztBRGlCRTtFQUNBLGFBQUE7RUFDRSxXQUFBO0VBR0EscUNBQUE7RUFDQSxvQkFBQTtBQ2RKIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbG9yc1wiO1xyXG5cclxuXHJcbi8vIFBBRElORyBQQUdFXHJcbi5wYWRkaW5nLXRvcF9tYXBzLCAucGFkZGluZy10b3BfY29udGFjdCwgLnBhZGRpbmctdG9wX3BpY3R1cmVzLCAucGFnZV9fZm9vdGVyIHtcclxuICBtYXJnaW4tdG9wOiAxMjhweDtcclxufVxyXG5cclxuLy8gQ0FSRCB7XHJcbi8vIH1cclxuXHJcbi8vIFdPUksgVElNRSBBTkQgU1RSRUVUXHJcbi5pY29uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGOEZGO1xyXG4gIGhlaWdodDogMTUycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuI2NvbnRhY3QtaW5mbyB7XHJcbiAgcCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuMjVlbTtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuXHJcbiNjb250YWN0LWltYWdlcyB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTByZW07XHJcbn1cclxuXHJcbi53b3JraW5nLXRpbWUucm93LFxyXG4uY29udGFjdC1pbmZvLnJvdyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDAgIWltcG9ydGFudDtcclxufVxyXG4ud29ya2luZy10aW1lIHtcclxuICBtYXJnaW4tYm90dG9tOiA2NHB4O1xyXG59XHJcbi53b3JraW5nLXRpbWUgLmNvbC1zbS0yIHtcclxuICAgIHBhZGRpbmctbGVmdDogMHB4O1xyXG59XHJcbi53b3JraW5nLXRpbWUgLmNvbC1zbS0yID4gZGl2IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuXHJcbn1cclxuLndvcmtpbmctdGltZSAuY29sLXNtLTEwID4gZGl2OmZpcnN0LWNoaWxkIHtcclxuICAgIGZvbnQtc2l6ZTogMjZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XHJcbn1cclxuXHJcbi5sYWJlbHMgc3BhbiB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG5cclxuLmNvbnRhY3QtaW5mbyAuY29sLXNtLTIge1xyXG4gIHBhZGRpbmctbGVmdDogMDtcclxufVxyXG4vLyAuY29udGFjdC1pbmZvIC5jb2wtbGctMiA+IGRpdiB7XHJcbi8vICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMywgOTIsIDI1NSwgLjA1KTtcclxuLy8gICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbi8vICAgaGVpZ2h0OiAxMDAlO1xyXG4vLyB9XHJcbi5jb250YWN0LWluZm8gLmxhYmVscyBkaXYge1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xyXG59XHJcblxyXG5cclxuXHJcbi5wYWRkaW5nLXRvcF9tYXBzIHtcclxuICBpZnJhbWUge1xyXG4gIGhlaWdodDogNDMwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogNDBweCA0MHB4IDBweCAwcHggcmdiYSgyMywyMSw3NSwxKTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogNDBweCA0MHB4IDBweCAwcHggcmdiYSgyMywyMSw3NSwxKTtcclxuICAgIGJveC1zaGFkb3c6IDQwcHggNDBweCAwcHggMHB4IHJnYmEoMjMsMjEsNzUsMSk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxNjFweDtcclxuICB9XHJcblxyXG5cclxufVxyXG5cclxuXHJcblxyXG4iLCIucGFkZGluZy10b3BfbWFwcywgLnBhZGRpbmctdG9wX2NvbnRhY3QsIC5wYWRkaW5nLXRvcF9waWN0dXJlcywgLnBhZ2VfX2Zvb3RlciB7XG4gIG1hcmdpbi10b3A6IDEyOHB4O1xufVxuXG4uaWNvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNkY4RkY7XG4gIGhlaWdodDogMTUycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG59XG5cbiNjb250YWN0LWluZm8gcCB7XG4gIG1hcmdpbi1ib3R0b206IDAuMjVlbTtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4jY29udGFjdC1pbWFnZXMge1xuICBtYXJnaW4tYm90dG9tOiAxMHJlbTtcbn1cblxuLndvcmtpbmctdGltZS5yb3csXG4uY29udGFjdC1pbmZvLnJvdyB7XG4gIG1hcmdpbi1sZWZ0OiAwICFpbXBvcnRhbnQ7XG59XG5cbi53b3JraW5nLXRpbWUge1xuICBtYXJnaW4tYm90dG9tOiA2NHB4O1xufVxuXG4ud29ya2luZy10aW1lIC5jb2wtc20tMiB7XG4gIHBhZGRpbmctbGVmdDogMHB4O1xufVxuXG4ud29ya2luZy10aW1lIC5jb2wtc20tMiA+IGRpdiB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLndvcmtpbmctdGltZSAuY29sLXNtLTEwID4gZGl2OmZpcnN0LWNoaWxkIHtcbiAgZm9udC1zaXplOiAyNnB4O1xuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xufVxuXG4ubGFiZWxzIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uY29udGFjdC1pbmZvIC5jb2wtc20tMiB7XG4gIHBhZGRpbmctbGVmdDogMDtcbn1cblxuLmNvbnRhY3QtaW5mbyAubGFiZWxzIGRpdiB7XG4gIGZvbnQtc2l6ZTogMjZweDtcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcbn1cblxuLnBhZGRpbmctdG9wX21hcHMgaWZyYW1lIHtcbiAgaGVpZ2h0OiA0MzBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogNDBweCA0MHB4IDBweCAwcHggIzE3MTU0YjtcbiAgLW1vei1ib3gtc2hhZG93OiA0MHB4IDQwcHggMHB4IDBweCAjMTcxNTRiO1xuICBib3gtc2hhZG93OiA0MHB4IDQwcHggMHB4IDBweCAjMTcxNTRiO1xuICBtYXJnaW4tYm90dG9tOiAxNjFweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contact',
          templateUrl: './contact.component.html',
          styleUrls: ['./contact.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();


    /***/
  }),

  /***/ "./src/app/pages/homepage/homepage.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/pages/homepage/homepage.component.ts ***!
    \******************************************************/
  /*! exports provided: HomepageComponent */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "HomepageComponent", function () {
      return HomepageComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


    class HomepageComponent {
      constructor() {
      }

      ngOnInit() {
      }
    }

    HomepageComponent.ɵfac = function HomepageComponent_Factory(t) {
      return new (t || HomepageComponent)();
    };
    HomepageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomepageComponent,
      selectors: [["app-homepage"]],
      decls: 150,
      vars: 0,
      consts: [[1, "container", "padding-top_container"], [1, "row"], [1, "col-12"], [1, "mb-2", "text-center"], [1, "mb-5", "text-center"], [1, "card-columns"], [1, "card", "mb-4"], [1, "card-body"], [1, ""], ["aria-hidden", "true", 1, "fa", "fa-quote-right", "fa-2x", "text-muted", "pull-right", "mt-3", "mb-3"], [1, "m-0", "text-muted"], [1, "blockquote-footer", "small", "p-1"], [1, "small"], [1, "font-weight-bold"], [1, "container"]],
      template: function HomepageComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "What people say");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Masonry testimonial cards grid");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "blockquote", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis dolor, in sagittis nisi. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "footer", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "John Doe ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "cite", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "COMPANY NAME");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "blockquote", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Etiam sed iaculis libero, at euismod massain venenatis ligula. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "footer", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "John Doe ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "cite", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "COMPANY NAME");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "blockquote", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis dolor, in sagittis nisi. Etiam sed iaculis libero, at euismod massain venenatis ligula. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "footer", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "John Doe ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "cite", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "COMPANY NAME");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "blockquote", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](45, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis dolor, in sagittis nisi. Etiam sed iaculis libero, at euismod massain venenatis ligula. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "footer", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "John Doe ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "cite", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "COMPANY NAME");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "blockquote", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Etiam sed iaculis libero, at euismod massain venenatis ligula. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "footer", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "John Doe ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "cite", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "COMPANY NAME");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "blockquote", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](67, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis dolor, in sagittis nisi. Etiam sed iaculis libero, at euismod massain venenatis ligula. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "footer", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "John Doe ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "cite", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "COMPANY NAME");
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "div", 14);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "h2", 3);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](79, "What people say");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](80, "p", 4);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](81, "Masonry testimonial cards grid");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](82, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "div", 5);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](85, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "blockquote", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](87, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, " Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis dolor, in sagittis nisi. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "footer", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92, "John Doe ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](93, "cite", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](94, "COMPANY NAME");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](96, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "blockquote", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](98, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](99, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](100, " Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Etiam sed iaculis libero, at euismod massain venenatis ligula. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "footer", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](102, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](103, "John Doe ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](104, "cite", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](105, "COMPANY NAME");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](106, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](108, "blockquote", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](111, " Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis dolor, in sagittis nisi. Etiam sed iaculis libero, at euismod massain venenatis ligula. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](112, "footer", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, "John Doe ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "cite", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116, "COMPANY NAME");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "blockquote", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](120, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis dolor, in sagittis nisi. Etiam sed iaculis libero, at euismod massain venenatis ligula. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](123, "footer", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](125, "John Doe ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](126, "cite", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](127, "COMPANY NAME");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](128, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](130, "blockquote", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](132, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](133, " Etiam sed iaculis libero, at euismod massain venenatis ligula. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](134, "footer", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, "John Doe ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](137, "cite", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](138, "COMPANY NAME");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "div", 6);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](140, "div", 7);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "blockquote", 8);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](142, "i", 9);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "p", 10);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, " Quisque mauris augue, molestie tincidunt condimentum vitae, gravida a libero. Aenean sit amet felis dolor, in sagittis nisi. Etiam sed iaculis libero, at euismod massain venenatis ligula. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "footer", 11);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](146, "span", 12);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](147, "John Doe ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "cite", 13);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](149, "COMPANY NAME");
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
        }
      },
      styles: [".padding-top_container[_ngcontent-%COMP%] {\n  padding-top: 128px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZXBhZ2UvQzpcXFVzZXJzXFxnYmFiYVxcRG9jdW1lbnRzXFxEZXZcXHBvb2wtc2VydmljZVxcYW5ndWxhci1zcmMvc3JjXFxhcHBcXHBhZ2VzXFxob21lcGFnZVxcaG9tZXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBhZGRpbmctdG9wX2NvbnRhaW5lciB7XHJcbiAgcGFkZGluZy10b3A6IDEyOHB4O1xyXG59XHJcbiIsIi5wYWRkaW5nLXRvcF9jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogMTI4cHg7XG59Il19 */"]
    });
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomepageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-homepage',
          templateUrl: './homepage.component.html',
          styleUrls: ['./homepage.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();


    /***/
  }),

  /***/ "./src/app/pages/page-blog/page-blog.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/pages/page-blog/page-blog.component.ts ***!
    \********************************************************/
  /*! exports provided: PageBlogComponent */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PageBlogComponent", function () {
      return PageBlogComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


    class PageBlogComponent {
      constructor() {
      }

      ngOnInit() {
      }
    }

    PageBlogComponent.ɵfac = function PageBlogComponent_Factory(t) {
      return new (t || PageBlogComponent)();
    };
    PageBlogComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PageBlogComponent,
      selectors: [["app-page-blog"]],
      decls: 127,
      vars: 0,
      consts: [[1, "container", "padding-top_container_text"], [1, "row"], [1, "col-sm-12"], [1, "post-by", "d-flex", "justify-content-center", "py-5"], [1, "ml-4"], [1, "mr-lg-4", 2, "color", "#5454D4"], [1, "container", "blog-content"], [1, "col-lg-9"], ["src", "../../../assets/img/blog/blog-page-1/Image(1).png", "alt", "blog-slika"], [1, "mt-4"], [1, "row", "pt-5", "pb-5"], [1, "col-sm-1"], [1, "fas", "fa-quote-left", "mr-5", 2, "color", "#CDCCD9"], [1, "col-sm-9"], [2, "font-weight", "500", "font-size", "21px", "line-height", "34px"], [1, "col-lg-3"], [1, "card"], [1, "input-group"], ["type", "text", "placeholder", "\uD83D\uDD0DType to search", 1, "form-control"], [1, "card", "my-4"], [1, "card-body"], [1, "mt-4", 2, "font-weight", "bold", "font-size", "16px", "line-height", "26px"], ["href", "#", 2, "font-weight", "500", "font-size", "14px", "line-height", "26px"], [1, "card", "my-4", "card_category"], [1, "container-fluid", "consultation_container", "py-4"], [1, "container"], [1, "float-left", "mt-5", "p-xl-3", 2, "color", "#fff"], [1, "float-right", "mt-5", "p-xl-4"], [1, "btn", "rounded", "p-3", 2, "background", "#FF8125", "color", "#fff"]],
      template: function PageBlogComponent_Template(rf, ctx) {
        if (rf & 1) {
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
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "div", 24);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](116, "div", 1);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](117, "div", 2);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](118, "div", 25);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "div", 26);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](120, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](121, "Besplatne konsultacije");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](122, "h4");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](123, " bricks-and-clicks innovation. ");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 27);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "button", 28);
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, "Klikni ovde");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: [".padding-top_container_text[_ngcontent-%COMP%] {\n  padding-top: 68px;\n}\n\n.padding-top_container_text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 60px;\n  line-height: 70px;\n}\n\n.padding-top_container_text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n\n.padding-top_container_text[_ngcontent-%COMP%]   .post-by[_ngcontent-%COMP%] {\n  align-items: center;\n}\n\n.padding-top_container_text[_ngcontent-%COMP%]   .post-by[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  display: inline-block;\n  font-weight: 450;\n  font-size: 21px;\n  line-height: 39px;\n}\n\n.blog-content[_ngcontent-%COMP%] {\n  padding-bottom: 206px;\n}\n\n.blog-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 18px;\n  line-height: 30px;\n}\n\n.blog-content[_ngcontent-%COMP%]   .card_category[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: bold;\n  font-size: 16px;\n  line-height: 38px;\n}\n\n.blog-content[_ngcontent-%COMP%]   .card_category[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #175CFF;\n}\n\n.consultation_container[_ngcontent-%COMP%] {\n  background: #5454D4;\n  height: 281px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcGFnZS1ibG9nL0M6XFxVc2Vyc1xcZ2JhYmFcXERvY3VtZW50c1xcRGV2XFxwb29sLXNlcnZpY2VcXGFuZ3VsYXItc3JjL3NyY1xcYXBwXFxwYWdlc1xccGFnZS1ibG9nXFxwYWdlLWJsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BhZ2UtYmxvZy9wYWdlLWJsb2cuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3BhZ2UtYmxvZy9DOlxcVXNlcnNcXGdiYWJhXFxEb2N1bWVudHNcXERldlxccG9vbC1zZXJ2aWNlXFxhbmd1bGFyLXNyYy9zcmNcXGFzc2V0c1xcc2Nzc1xcX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksaUJBQUE7QUNESjs7QURLSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDRlI7O0FER1E7RUFDSSxjQUFBO0FDRFo7O0FES0k7RUFDSSxtQkFBQTtBQ0hSOztBRE9JO0VBR0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FDUFI7O0FEYUE7RUFDSSxxQkFBQTtBQ1ZKOztBRGFJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUNYUjs7QUR3QlE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ3RCWjs7QUR1Qlk7RUFFSSxjRTVETjtBRHNDVjs7QUQ2QkE7RUFFSSxtQkFBQTtFQUdBLGFBQUE7QUM3QkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9wYWdlLWJsb2cvcGFnZS1ibG9nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL2Fzc2V0cy9zY3NzL2NvbG9yc1wiO1xyXG5cclxuLnBhZGRpbmctdG9wX2NvbnRhaW5lcl90ZXh0IHtcclxuICAgIHBhZGRpbmctdG9wOiA2OHB4O1xyXG59XHJcblxyXG4ucGFkZGluZy10b3BfY29udGFpbmVyX3RleHQge1xyXG4gICAgaDEge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICAgICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgIHNwYW4ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLnBvc3QtYnl7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAgICAgXHJcblxyXG4gICAgcCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBmb250LXdlaWdodDogNDUwO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjFweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzlweDtcclxuXHJcbiAgICB9XHJcbn1cclxufVxyXG5cclxuLmJsb2ctY29udGVudCB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjA2cHg7XHJcblxyXG5cclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMHB4XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmRfY2F0ZWdvcnkge1xyXG5cclxuICAgICAgICAvLyAuaW5wdXQtZ3JvdXAge1xyXG4gICAgICAgIC8vICAgICBpbnB1dFt0eXBlPVwidGV4dFwiXSB7XHJcbiAgICAgICAgLy8gICAgICAgICBmb250LWZhbWlseTonZm9udGF3ZXNvbWUtZnJlZS01JyA7IC8vIGZvciB0aGUgb3BlbiBhY2Nlc3MgdmVyc2lvblxyXG4gICAgICAgIC8vICAgICAgICAgZm9udC1zaXplOiAxLjMzMzMzMzMzMzMzMzMzMzNlbTtcclxuICAgICAgICAvLyAgICAgICAgIGZvbnQtd2VpZ2h0OiA5MDA7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzhweDtcclxuICAgICAgICAgICAgc3BhbiB7XHJcblxyXG4gICAgICAgICAgICAgICAgY29sb3I6JHByaW1hcnk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4uY29uc3VsdGF0aW9uX2NvbnRhaW5lciB7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQ6ICAjNTQ1NEQ0O1xyXG5cclxuICAgIFxyXG4gICAgaGVpZ2h0OiAyODFweDtcclxufVxyXG5cclxuIiwiLnBhZGRpbmctdG9wX2NvbnRhaW5lcl90ZXh0IHtcbiAgcGFkZGluZy10b3A6IDY4cHg7XG59XG5cbi5wYWRkaW5nLXRvcF9jb250YWluZXJfdGV4dCBoMSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiA2MHB4O1xuICBsaW5lLWhlaWdodDogNzBweDtcbn1cbi5wYWRkaW5nLXRvcF9jb250YWluZXJfdGV4dCBoMSBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG4ucGFkZGluZy10b3BfY29udGFpbmVyX3RleHQgLnBvc3QtYnkge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnBhZGRpbmctdG9wX2NvbnRhaW5lcl90ZXh0IC5wb3N0LWJ5IHAge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgZm9udC13ZWlnaHQ6IDQ1MDtcbiAgZm9udC1zaXplOiAyMXB4O1xuICBsaW5lLWhlaWdodDogMzlweDtcbn1cblxuLmJsb2ctY29udGVudCB7XG4gIHBhZGRpbmctYm90dG9tOiAyMDZweDtcbn1cbi5ibG9nLWNvbnRlbnQgcCB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XG59XG4uYmxvZy1jb250ZW50IC5jYXJkX2NhdGVnb3J5IHAge1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMzhweDtcbn1cbi5ibG9nLWNvbnRlbnQgLmNhcmRfY2F0ZWdvcnkgcCBzcGFuIHtcbiAgY29sb3I6ICMxNzVDRkY7XG59XG5cbi5jb25zdWx0YXRpb25fY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogIzU0NTRENDtcbiAgaGVpZ2h0OiAyODFweDtcbn0iLCIkcHJpbWFyeTogIzE3NUNGRjtcclxuJHNlY29uZGFyeTogIzE3MTU0QjtcclxuIl19 */"]
    });
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageBlogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-page-blog',
          templateUrl: './page-blog.component.html',
          styleUrls: ['./page-blog.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();


    /***/
  }),

  /***/ "./src/app/pages/post/post.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/pages/post/post.component.ts ***!
    \**********************************************/
  /*! exports provided: PostComponent */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "PostComponent", function () {
      return PostComponent;
    });
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


    class PostComponent {
      constructor() {
      }

      ngOnInit() {
      }
    }

    PostComponent.ɵfac = function PostComponent_Factory(t) {
      return new (t || PostComponent)();
    };
    PostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PostComponent,
      selectors: [["app-post"]],
      decls: 2,
      vars: 0,
      template: function PostComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "post works!");
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Bvc3QvcG9zdC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/
    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-post',
          templateUrl: './post.component.html',
          styleUrls: ['./post.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();


    /***/
  }),

  /***/ "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/
  /*! exports provided: environment */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */
    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
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


    /***/
  }),

  /***/ "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/
  /*! no exports provided */
  /***/ (function (module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */
    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */
    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
    /* harmony import */
    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
    /* harmony import */
    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");


    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }
    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
        .catch(err => console.error(err));


    /***/
  }),

  /***/ 0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/
  /*! no static exports found */
  /***/ (function (module, exports, __webpack_require__) {

    module.exports = __webpack_require__(/*! C:\Users\gbaba\Documents\Dev\pool-service\angular-src\src\main.ts */"./src/main.ts");


    /***/
  })

}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
