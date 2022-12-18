(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+1Yp":
/*!***********************************!*\
  !*** ./src/app/load.directive.ts ***!
  \***********************************/
/*! exports provided: LoadedDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadedDirective", function() { return LoadedDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LoadedDirective {
    constructor(elRef) {
        this.elRef = elRef;
        this.loaded = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        if (this.elRef.nativeElement.complete) {
            this.loaded.emit();
        }
    }
    onLoad() {
        this.loaded.emit();
    }
}
LoadedDirective.ɵfac = function LoadedDirective_Factory(t) { return new (t || LoadedDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
LoadedDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: LoadedDirective, selectors: [["img", "loaded", ""]], hostBindings: function LoadedDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function LoadedDirective_load_HostBindingHandler() { return ctx.onLoad(); });
    } }, outputs: { loaded: "loaded" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadedDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: 'img[loaded]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { loaded: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onLoad: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['load']
        }] }); })();


/***/ }),

/***/ "+BEL":
/*!*********************************************!*\
  !*** ./src/app/vip-page/vip-page.module.ts ***!
  \*********************************************/
/*! exports provided: VipPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VipPageModule", function() { return VipPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _vip_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vip-page.component */ "T0oW");
/* harmony import */ var _vip_box_vip_box_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vip-box/vip-box.module */ "mKF4");





class VipPageModule {
}
VipPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VipPageModule });
VipPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VipPageModule_Factory(t) { return new (t || VipPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _vip_box_vip_box_module__WEBPACK_IMPORTED_MODULE_3__["VipBoxModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VipPageModule, { declarations: [_vip_page_component__WEBPACK_IMPORTED_MODULE_2__["VipPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _vip_box_vip_box_module__WEBPACK_IMPORTED_MODULE_3__["VipBoxModule"]], exports: [_vip_page_component__WEBPACK_IMPORTED_MODULE_2__["VipPageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VipPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_vip_page_component__WEBPACK_IMPORTED_MODULE_2__["VipPageComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _vip_box_vip_box_module__WEBPACK_IMPORTED_MODULE_3__["VipBoxModule"]
                ],
                exports: [
                    _vip_page_component__WEBPACK_IMPORTED_MODULE_2__["VipPageComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\skelly-boys\src\main.ts */"zUnb");


/***/ }),

/***/ "19Dk":
/*!*******************************************************!*\
  !*** ./src/app/landing-page/timer/timer.component.ts ***!
  \*******************************************************/
/*! exports provided: TimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerComponent", function() { return TimerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/project.service */ "QvXa");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _floor_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./floor.pipe */ "i6XI");





function TimerComponent_p_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "In");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TimerComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "floor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "days");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "floor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "hours");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "floor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "mins");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "floor");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "secs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 6, ctx_r1.startTime) * 1000 - ctx_r1.currentTime) / 86400000), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 8, (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 10, ctx_r1.startTime) * 1000 - ctx_r1.currentTime) % 86400000 / 3600000), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](15, 12, (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 14, ctx_r1.startTime) * 1000 - ctx_r1.currentTime) % 86400000 % 3600000 / 60000), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](21, 16, (_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 18, ctx_r1.startTime) * 1000 - ctx_r1.currentTime) % 86400000 % 3600000 % 60000 / 1000), " ");
} }
class TimerComponent {
    constructor(projectService) {
        this.projectService = projectService;
        this.startTime = this.projectService.startTime;
    }
    ngOnInit() {
    }
}
TimerComponent.ɵfac = function TimerComponent_Factory(t) { return new (t || TimerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"])); };
TimerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TimerComponent, selectors: [["app-timer"]], inputs: { currentTime: "currentTime" }, decls: 4, vars: 6, consts: [[4, "ngIf"], ["class", "countdown", 4, "ngIf"], [1, "countdown"], [1, "days"], [1, "hours"], [1, "minutes"], [1, "seconds"]], template: function TimerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, TimerComponent_p_0_Template, 2, 0, "p", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TimerComponent_span_2_Template, 25, 20, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.startTime) * 1000 - ctx.currentTime > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 4, ctx.startTime) * 1000 - ctx.currentTime > 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], _floor_pipe__WEBPACK_IMPORTED_MODULE_3__["FloorPipe"]], styles: ["[_nghost-%COMP%] {\n  min-width: 100%;\n  justify-self: center;\n  display: grid;\n  justify-content: stretch;\n  justify-items: stretch;\n  align-content: start;\n  align-items: start;\n  text-align: center;\n}\n[_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n  text-align: center;\n  margin: 0px;\n  font-size: 3.5rem;\n  color: #FF00CC;\n  font-family: \"HeatWave\";\n  min-width: 100%;\n}\n[_nghost-%COMP%]   span.countdown[_ngcontent-%COMP%] {\n  text-align: center;\n  min-width: 100%;\n  font-size: 7.5rem;\n  font-family: \"Trump Gothic Pro\";\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 0.25fr;\n}\n[_nghost-%COMP%]   span.countdown[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-variant-caps: all-small-caps;\n  font-size: 2.5rem;\n}\n[_nghost-%COMP%]   span.countdown[_ngcontent-%COMP%]   span.days[_ngcontent-%COMP%] {\n  justify-self: start;\n}\n[_nghost-%COMP%]   span.countdown[_ngcontent-%COMP%]   span.hours[_ngcontent-%COMP%] {\n  justify-self: center;\n}\n[_nghost-%COMP%]   span.countdown[_ngcontent-%COMP%]   span.minutes[_ngcontent-%COMP%] {\n  justify-self: center;\n}\n[_nghost-%COMP%]   span.countdown[_ngcontent-%COMP%]   span.seconds[_ngcontent-%COMP%] {\n  justify-self: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0aW1lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxvQkFBQTtFQVVBLGFBQUE7RUFDQSx3QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBUko7QUFOSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQVFSO0FBQ0k7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUFDUjtBQUFRO0VBQ0kseUJBQUE7RUFDQSxpQ0FBQTtFQUNBLGlCQUFBO0FBRVo7QUFBUTtFQUNJLG1CQUFBO0FBRVo7QUFBUTtFQUNJLG9CQUFBO0FBRVo7QUFBUTtFQUNJLG9CQUFBO0FBRVo7QUFBUTtFQUNJLGlCQUFBO0FBRVoiLCJmaWxlIjoidGltZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBtaW4td2lkdGg6MTAwJTsgIFxyXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICBwIHtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICBtYXJnaW46MHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTozLjVyZW07XHJcbiAgICAgICAgY29sb3I6I0ZGMDBDQztcclxuICAgICAgICBmb250LWZhbWlseTogJ0hlYXRXYXZlJztcclxuICAgICAgICBtaW4td2lkdGg6MTAwJTtcclxuXHJcbiAgICB9XHJcbiAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBzdHJldGNoO1xyXG4gICAgYWxpZ24tY29udGVudDogc3RhcnQ7XHJcbiAgICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBzcGFuLmNvdW50ZG93biB7ICAgXHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgICAgICBtaW4td2lkdGg6MTAwJTsgIFxyXG4gICAgICAgIGZvbnQtc2l6ZTo3LjVyZW07XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdUcnVtcCBHb3RoaWMgUHJvJztcclxuICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgZ3JpZC1hdXRvLWZsb3c6IGNvbHVtbjtcclxuICAgICAgICBncmlkLWF1dG8tY29sdW1uczogMC4yNWZyO1xyXG4gICAgICAgIHNtYWxsIHtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgZm9udC12YXJpYW50LWNhcHM6IGFsbC1zbWFsbC1jYXBzO1xyXG4gICAgICAgICAgICBmb250LXNpemU6Mi41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuLmRheXMge1xyXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IHN0YXJ0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuLmhvdXJzIHtcclxuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNwYW4ubWludXRlcyB7XHJcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuLnNlY29uZHMge1xyXG4gICAgICAgICAgICBqdXN0aWZ5LXNlbGY6IGVuZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-timer',
                templateUrl: './timer.component.html',
                styleUrls: ['./timer.component.scss'],
            }]
    }], function () { return [{ type: src_app_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"] }]; }, { currentTime: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "2P5o":
/*!******************************************************!*\
  !*** ./src/app/footer-page/footer-page.component.ts ***!
  \******************************************************/
/*! exports provided: FooterPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterPageComponent", function() { return FooterPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _socials_socials_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../socials/socials.component */ "XmVa");
/* harmony import */ var _stamp_logo_stamp_logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stamp-logo/stamp-logo.component */ "N9GV");
/* harmony import */ var _copyright_copyright_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./copyright/copyright.component */ "Bw1B");





class FooterPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterPageComponent.ɵfac = function FooterPageComponent_Factory(t) { return new (t || FooterPageComponent)(); };
FooterPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterPageComponent, selectors: [["app-footer-page"]], decls: 3, vars: 2, consts: [[3, "threeOnly", "small"]], template: function FooterPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-socials", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-stamp-logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-copyright");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("threeOnly", false)("small", true);
    } }, directives: [_socials_socials_component__WEBPACK_IMPORTED_MODULE_1__["SocialsComponent"], _stamp_logo_stamp_logo_component__WEBPACK_IMPORTED_MODULE_2__["StampLogoComponent"], _copyright_copyright_component__WEBPACK_IMPORTED_MODULE_3__["CopyrightComponent"]], styles: ["[_nghost-%COMP%] {\n  max-width: 100%;\n  max-height: 50vh;\n  display: grid;\n  justify-content: center;\n  justify-items: center;\n  grid-auto-rows: 1fr;\n  grid-auto-columns: 1fr;\n  align-self: end;\n  padding-bottom: 20px;\n}\n[_nghost-%COMP%]   app-socials[_ngcontent-%COMP%] {\n  max-height: 200px;\n}\n[_nghost-%COMP%]   app-stamp-logo[_ngcontent-%COMP%] {\n  max-height: 200px;\n}\n[_nghost-%COMP%]   app-copyright[_ngcontent-%COMP%] {\n  max-height: 200px;\n  align-self: end;\n  align-items: end;\n  align-content: end;\n  display: grid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZvb3Rlci1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBQ0o7QUFBSTtFQUNJLGlCQUFBO0FBRVI7QUFBSTtFQUNJLGlCQUFBO0FBRVI7QUFBSTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0FBRVIiLCJmaWxlIjoiZm9vdGVyLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBtYXgtd2lkdGg6MTAwJTtcclxuICAgIG1heC1oZWlnaHQ6NTB2aDtcclxuICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcclxuICAgIGdyaWQtYXV0by1jb2x1bW5zOiAxZnI7XHJcbiAgICBhbGlnbi1zZWxmOiBlbmQ7XHJcbiAgICBwYWRkaW5nLWJvdHRvbToyMHB4O1xyXG4gICAgYXBwLXNvY2lhbHMge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6MjAwcHg7XHJcbiAgICB9XHJcbiAgICBhcHAtc3RhbXAtbG9nbyB7XHJcbiAgICAgICAgbWF4LWhlaWdodDoyMDBweDtcclxuICAgIH1cclxuICAgIGFwcC1jb3B5cmlnaHQge1xyXG4gICAgICAgIG1heC1oZWlnaHQ6MjAwcHg7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogZW5kO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBlbmQ7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogZW5kO1xyXG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuXHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer-page',
                templateUrl: './footer-page.component.html',
                styleUrls: ['./footer-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "3iI9":
/*!***************************************************************************!*\
  !*** ./src/app/landing-page/skelly-necklace/skelly-necklace.component.ts ***!
  \***************************************************************************/
/*! exports provided: SkellyNecklaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkellyNecklaceComponent", function() { return SkellyNecklaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["imgEle"];
class SkellyNecklaceComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.classes = '';
    }
    ngOnInit() {
    }
    show() {
        setTimeout(() => {
            this.classes = 'show';
        }, 1000);
    }
}
SkellyNecklaceComponent.ɵfac = function SkellyNecklaceComponent_Factory(t) { return new (t || SkellyNecklaceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
SkellyNecklaceComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkellyNecklaceComponent, selectors: [["app-skelly-necklace"]], viewQuery: function SkellyNecklaceComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.imgEle = _t.first);
    } }, decls: 1, vars: 2, consts: [["src", "../../../assets/images/skully_necklace.png", 3, "load", "loaded"]], template: function SkellyNecklaceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function SkellyNecklaceComponent_Template_img_load_0_listener() { return ctx.show(); })("loaded", function SkellyNecklaceComponent_Template_img_loaded_0_listener() { return ctx.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classes);
    } }, styles: ["[_nghost-%COMP%] {\n  display: grid;\n  justify-content: start;\n  align-content: start;\n  pointer-events: none !important;\n}\n[_nghost-%COMP%]   *[_ngcontent-%COMP%] {\n  pointer-events: none !important;\n}\n[_nghost-%COMP%]   img[_ngcontent-%COMP%] {\n  transition: 0.4s;\n  transform: translate(153px, -429px);\n  animation: hue 2s infinite;\n  opacity: 0;\n}\n@keyframes hue {\n  25% {\n    filter: brightness(1.4) hue-rotate(0deg);\n  }\n  50% {\n    filter: brightness(1) hue-rotate(360deg);\n  }\n  75% {\n    filter: brightness(0.5) hue-rotate(-480deg);\n  }\n}\n[_nghost-%COMP%]   img.show[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxza2VsbHktbmVja2xhY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUNBLCtCQUFBO0FBQ0o7QUFBSTtFQUNJLCtCQUFBO0FBRVI7QUFBSTtFQUNJLGdCQUFBO0VBQ0EsbUNBQUE7RUFDQSwwQkFBQTtFQVlBLFVBQUE7QUFUUjtBQUZRO0VBQ0k7SUFDSSx3Q0FBQTtFQUlkO0VBRlU7SUFDSSx3Q0FBQTtFQUlkO0VBRlU7SUFDSSwyQ0FBQTtFQUlkO0FBQ0Y7QUFEUTtFQUNJLFVBQUE7QUFHWiIsImZpbGUiOiJza2VsbHktbmVja2xhY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgKiB7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgICB0cmFuc2l0aW9uOjAuNHM7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTUzcHgsLTQyOXB4KTtcclxuICAgICAgICBhbmltYXRpb246IGh1ZSAycyBpbmZpbml0ZTtcclxuICAgICAgICBAa2V5ZnJhbWVzIGh1ZSB7XHJcbiAgICAgICAgICAgIDI1JSB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXI6YnJpZ2h0bmVzcygxLjQpIGh1ZS1yb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgNTAlIHtcclxuICAgICAgICAgICAgICAgIGZpbHRlcjpicmlnaHRuZXNzKDEpIGh1ZS1yb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA3NSUge1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyOmJyaWdodG5lc3MoMC41KSBodWUtcm90YXRlKC00ODBkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG9wYWNpdHk6MDtcclxuICAgICAgICAmLnNob3cge1xyXG4gICAgICAgICAgICBvcGFjaXR5OjE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkellyNecklaceComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skelly-necklace',
                templateUrl: './skelly-necklace.component.html',
                styleUrls: ['./skelly-necklace.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { imgEle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['imgEle']
        }] }); })();


/***/ }),

/***/ "8LlM":
/*!*******************************************************************!*\
  !*** ./src/app/landing-page/mint-button/mint-button.component.ts ***!
  \*******************************************************************/
/*! exports provided: MintButtonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MintButtonComponent", function() { return MintButtonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/project.service */ "QvXa");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function MintButtonComponent_p_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r0.mintMessage));
} }
class MintButtonComponent {
    constructor(projectService) {
        this.projectService = projectService;
        this.mintCost = this.projectService.mintCost;
        this.mintCurrency = this.projectService.mintCurrency;
        this.mintAmount = 1;
        this.mintMessage = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
    }
    ngOnInit() {
    }
    incrementUp() {
        if (this.mintAmount >= 20) {
            this.mintMessage.next('You may only mint 20 Skully Boys.');
            setTimeout(() => {
                this.mintMessage.next('');
            }, 2500);
            return;
        }
        this.mintAmount++;
    }
    incrementDown() {
        if (this.mintAmount <= 1) {
            this.mintMessage.next('You may not mint less than 0 Skully Boys.');
            setTimeout(() => {
                this.mintMessage.next('');
            }, 2500);
            return;
        }
        this.mintAmount--;
    }
}
MintButtonComponent.ɵfac = function MintButtonComponent_Factory(t) { return new (t || MintButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"])); };
MintButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MintButtonComponent, selectors: [["app-mint-button"]], decls: 21, vars: 9, consts: [[1, "mock-button"], [1, "mint"], [1, "arrows"], ["width", "20", "height", "15", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "1437 746 20 15", 3, "click"], [0, "xlink", "href", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAAAXNSR0IArs4c6QAAAUNJREFUOE+l078rRXEYx/H3k+7Jj0EZpIxGRTknRQaDwaSuSTYGLv/AHQwkkzIYbu4iAzYpTCYpWc6X7h1kZ5NiEOXoPjp1Trnu+XX5LufU9/O8+gzPV8hwFFMAaRHsUlpc0gJKtRu8C0AgNy4MPiXNZADdNZDVAFkXnPA/0k0EldsRqB0DPcH0M5AXnKu4lrGgUu0Ab98H6of1DNpnhf63KDQBdBdByjFNlgVnJzOomD7gHPC/UecBZFKw739fNjRU7ix4L4PMJW+AHoC3IIx+/MxFgO4MyB7QmrJSnyDzgn0YCyqVXvg6BYbS9jO4r0BtShh+DPN1DZWbDdCVjFgQk03BLjaAihkDToCu5kBegWnB8V+T/5xAMZ0gR6ATTWJhy0vI5YWBF1Gu28BaArb+hoVTWgSrJIrZBgqA9T8QD9j9Bj/OT02+3zPTAAAAAElFTkSuQmCC", "width", "20", "height", "15", "x", "1437", "y", "746"], ["width", "20", "height", "15", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "1437 765 20 15", 3, "click"], [0, "xlink", "href", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAAAXNSR0IArs4c6QAAAUJJREFUOE+l078vQ1EYxvHv0/oRMRn8AY2BwSB62wRTNyw0YSUdxGbCxCIRBolBTMREJE1ENOkqMTZ6h1oMJiYTYZBUpUeue/1qb91W3/Wc93OeN+ccGfKLwDLQTdOljAxGYE8Bh0BbE+YOhDblAIZ0GCJ7oNQ/wWtgVFh3H6CLXvaCskBPg2gRTErEjp2+L9BF7Tkwu0BrA+gRkBJWyQcsdEIpDYzXCd5CaEIMFj73/0rojT4COq3z1peEtfXz8CrQRfNrwGpAynN4nRbDD3WAV11QzIKGaqCPUE6K+EXlum9Cb/Qx0AnQUY1qXURX/A77AzQhsLeBhYrGHJQnRfy+IdBNmYtAOAP0e80vYGZEzEnuWzUTfj/4/CywD7SADuB5XiTemgBv2uHpDBgAJUTU+WY1KzCh94OSYPqEtRH04N8BGGFQdDFMtJ0AAAAASUVORK5CYII=", "width", "20", "height", "15", "x", "1437", "y", "765"], [1, "amount"], [1, "for"], ["class", "mint-message", 4, "ngIf"], [1, "mint-message"]], template: function MintButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "MINT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "svg", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MintButtonComponent_Template__svg_svg_click_4_listener() { return ctx.incrementUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "image", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "svg", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MintButtonComponent_Template__svg_svg_click_6_listener() { return ctx.incrementDown(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "image", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h3", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "FOR");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, MintButtonComponent_p_19_Template, 3, 3, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.mintAmount);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 4, ctx.mintCost * ctx.mintAmount, "1.0-0"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.mintCurrency);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 7, ctx.mintMessage) !== "");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DecimalPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-template-areas: \". mock-button\" \". mint-message\";\n  grid-template-rows: -webkit-max-content -webkit-max-content;\n  grid-template-rows: max-content max-content;\n  grid-template-columns: 0.25fr 1fr 0.25fr;\n  min-width: -webkit-max-content;\n  min-width: max-content;\n  max-width: -webkit-max-content;\n  max-width: max-content;\n  max-height: 100%;\n  min-height: 100%;\n  justify-content: center;\n  justify-items: center;\n  justify-self: center;\n}\n[_nghost-%COMP%]   span.mock-button[_ngcontent-%COMP%] {\n  min-width: -webkit-max-content;\n  min-width: max-content;\n  max-width: -webkit-max-content;\n  max-width: max-content;\n  max-height: 100%;\n  min-height: 100%;\n  grid-area: mock-button;\n  justify-self: stretch;\n  border: 4px solid #FF00CC;\n  border-radius: 20px;\n  display: grid;\n  grid-template-areas: \". . . . . . .\" \". mint . arrows . amount .\" \". for for for for for .\" \". . . . . . .\";\n  grid-template-columns: 20px 0.5fr 15px 0.25fr 15px 0.5fr 20px;\n  grid-template-rows: 10px -webkit-max-content -webkit-max-content 20px;\n  grid-template-rows: 10px max-content max-content 20px;\n  row-gap: 5px;\n  column-gap: 20px;\n  justify-content: stretch;\n  justify-items: stretch;\n}\n[_nghost-%COMP%]   span.mock-button[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  line-height: 4rem;\n}\n[_nghost-%COMP%]   span.mock-button[_ngcontent-%COMP%]   h3.mint[_ngcontent-%COMP%] {\n  grid-area: mint;\n  justify-self: start;\n}\n[_nghost-%COMP%]   span.mock-button[_ngcontent-%COMP%]   h3.amount[_ngcontent-%COMP%] {\n  grid-area: amount;\n  align-self: center;\n  justify-self: end;\n  min-width: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  min-height: 100%;\n}\n[_nghost-%COMP%]   span.mock-button[_ngcontent-%COMP%]   span.arrows[_ngcontent-%COMP%] {\n  grid-area: arrows;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-auto-rows: -webkit-max-content;\n  grid-auto-rows: max-content;\n  row-gap: 10px;\n  align-self: center;\n}\n[_nghost-%COMP%]   span.mock-button[_ngcontent-%COMP%]   span.arrows[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: 0.3s;\n  height: 1.25rem;\n  width: 1.25rem;\n}\n[_nghost-%COMP%]   span.mock-button[_ngcontent-%COMP%]   span.arrows[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover {\n  filter: brightness(0.1) drop-shadow(0px 0px 10px #FF00CC);\n}\n[_nghost-%COMP%]   span.mock-button[_ngcontent-%COMP%]   h3.for[_ngcontent-%COMP%] {\n  grid-area: for;\n  font-size: 3.4rem;\n  line-height: 1rem;\n}\n[_nghost-%COMP%]   span.mock-button[_ngcontent-%COMP%]   h3.for[_ngcontent-%COMP%]   small[_ngcontent-%COMP%] {\n  display: grid;\n  grid-auto-flow: column;\n  grid-template-columns: 0.33fr 1fr 0.33fr;\n  column-gap: 40px;\n}\n@media (max-width: 540px) {\n  [_nghost-%COMP%]   span.mock-button[_ngcontent-%COMP%] {\n    transform: scale(0.9);\n  }\n  [_nghost-%COMP%]   span.mock-button[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n    font-size: 8rem;\n    line-height: 8rem;\n  }\n  [_nghost-%COMP%]   span.mock-button[_ngcontent-%COMP%]   span.arrows[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    height: 2.5rem;\n    width: 2.5rem;\n  }\n  [_nghost-%COMP%]   span.mock-button[_ngcontent-%COMP%]   span.arrows[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%]:hover {\n    filter: brightness(0.1) drop-shadow(0px 0px 10px #FF00CC);\n  }\n  [_nghost-%COMP%]   span.mock-button[_ngcontent-%COMP%]   h3.for[_ngcontent-%COMP%] {\n    font-size: 6.8rem;\n    line-height: 1rem;\n  }\n}\n@media (max-width: 410px) {\n  [_nghost-%COMP%]   span.mock-button[_ngcontent-%COMP%] {\n    transform: scale(0.8);\n  }\n}\n@media (max-width: 350px) {\n  [_nghost-%COMP%]   span.mock-button[_ngcontent-%COMP%] {\n    transform: scale(0.7);\n  }\n}\n[_nghost-%COMP%]   p.mint-message[_ngcontent-%COMP%] {\n  transform: translateY(100%);\n  grid-area: mint-message;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxtaW50LWJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxxREFDQTtFQUVBLDJEQUFBO0VBQUEsMkNBQUE7RUFDQSx3Q0FBQTtFQUNBLDhCQUFBO0VBQUEsc0JBQUE7RUFDQSw4QkFBQTtFQUFBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQURKO0FBRUk7RUFDSSw4QkFBQTtFQUFBLHNCQUFBO0VBQ0EsOEJBQUE7RUFBQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSwyR0FDQTtFQUlBLDZEQUFBO0VBQ0EscUVBQUE7RUFBQSxxREFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7QUFKUjtBQUtRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0FBSFo7QUFLUTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQUhaO0FBS1E7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFIWjtBQUtRO0VBQ0ksaUJBQUE7RUFDQSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQ0FBQTtFQUFBLDJCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBSFo7QUFJWTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBRmhCO0FBR2dCO0VBQ0kseURBQUE7QUFEcEI7QUFLUTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0FBSFo7QUFJWTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHdDQUFBO0VBQ0EsZ0JBQUE7QUFGaEI7QUFLUTtFQWxFSjtJQW1FUSxxQkFBQTtFQUZWO0VBR1U7SUFDSSxlQUFBO0lBQ0EsaUJBQUE7RUFEZDtFQVFjO0lBQ0ksY0FBQTtJQUNBLGFBQUE7RUFObEI7RUFPa0I7SUFDSSx5REFBQTtFQUx0QjtFQVNVO0lBQ0ksaUJBQUE7SUFDQSxpQkFBQTtFQVBkO0FBQ0Y7QUFTUTtFQTFGSjtJQTJGUSxxQkFBQTtFQU5WO0FBQ0Y7QUFPUTtFQTdGSjtJQThGUSxxQkFBQTtFQUpWO0FBQ0Y7QUFNSTtFQUNJLDJCQUFBO0VBQ0EsdUJBQUE7QUFKUiIsImZpbGUiOiJtaW50LWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAnLiBtb2NrLWJ1dHRvbidcclxuICAgICcuIG1pbnQtbWVzc2FnZSc7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IG1heC1jb250ZW50O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjI1ZnIgMWZyIDAuMjVmcjtcclxuICAgIG1pbi13aWR0aDptYXgtY29udGVudDtcclxuICAgIG1heC13aWR0aDptYXgtY29udGVudDtcclxuICAgIG1heC1oZWlnaHQ6MTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6MTAwJTtcclxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOmNlbnRlcjtcclxuICAgIGp1c3RpZnktc2VsZjpjZW50ZXI7XHJcbiAgICBzcGFuLm1vY2stYnV0dG9uIHtcclxuICAgICAgICBtaW4td2lkdGg6bWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgbWF4LXdpZHRoOm1heC1jb250ZW50O1xyXG4gICAgICAgIG1heC1oZWlnaHQ6MTAwJTtcclxuICAgICAgICBtaW4taGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgZ3JpZC1hcmVhOm1vY2stYnV0dG9uO1xyXG4gICAgICAgIGp1c3RpZnktc2VsZjogc3RyZXRjaDtcclxuICAgICAgICBib3JkZXI6NHB4IHNvbGlkICNGRjAwQ0M7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czoyMHB4O1xyXG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAgICcuIC4gLiAuIC4gLiAuJ1xyXG4gICAgICAgICcuIG1pbnQgLiBhcnJvd3MgLiBhbW91bnQgLidcclxuICAgICAgICAnLiBmb3IgZm9yIGZvciBmb3IgZm9yIC4nXHJcbiAgICAgICAgJy4gLiAuIC4gLiAuIC4nO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjBweCAwLjVmciAxNXB4IDAuMjVmciAxNXB4IDAuNWZyIDIwcHg7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxMHB4IG1heC1jb250ZW50IG1heC1jb250ZW50IDIwcHg7XHJcbiAgICAgICAgcm93LWdhcDo1cHg7XHJcbiAgICAgICAgY29sdW1uLWdhcDoyMHB4O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDpzdHJldGNoO1xyXG4gICAgICAgIGp1c3RpZnktaXRlbXM6c3RyZXRjaDtcclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTo0cmVtO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDo0cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMy5taW50IHtcclxuICAgICAgICAgICAgZ3JpZC1hcmVhOm1pbnQ7XHJcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7IFxyXG4gICAgICAgIH1cclxuICAgICAgICBoMy5hbW91bnQge1xyXG4gICAgICAgICAgICBncmlkLWFyZWE6YW1vdW50O1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogZW5kO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6MTAwJTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOjEwMCU7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6MTAwJTtcclxuICAgICAgICAgICAgbWluLWhlaWdodDoxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFuLmFycm93cyB7XHJcbiAgICAgICAgICAgIGdyaWQtYXJlYTphcnJvd3M7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgICAgIGdyaWQtYXV0by1yb3dzOiBtYXgtY29udGVudDtcclxuICAgICAgICAgICAgcm93LWdhcDoxMHB4O1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOjAuM3M7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6MS4yNXJlbTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOjEuMjVyZW07XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6YnJpZ2h0bmVzcygwLjEpIGRyb3Atc2hhZG93KDBweCAwcHggMTBweCAjRkYwMENDKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBoMy5mb3Ige1xyXG4gICAgICAgICAgICBncmlkLWFyZWE6Zm9yO1xyXG4gICAgICAgICAgICBmb250LXNpemU6My40cmVtO1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDoxcmVtO1xyXG4gICAgICAgICAgICBzbWFsbCB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgICAgICAgICBncmlkLWF1dG8tZmxvdzogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjMzZnIgMWZyIDAuMzNmcjtcclxuICAgICAgICAgICAgICAgIGNvbHVtbi1nYXA6NDBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDo1NDBweCkge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMC45KTtcclxuICAgICAgICAgICAgaDMge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjhyZW07XHJcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDo4cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGgzLm1pbnQge1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGgzLmFtb3VudCB7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3Bhbi5hcnJvd3Mge1xyXG4gICAgICAgICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6Mi41cmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOjIuNXJlbTtcclxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmlsdGVyOmJyaWdodG5lc3MoMC4xKSBkcm9wLXNoYWRvdygwcHggMHB4IDEwcHggI0ZGMDBDQyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGgzLmZvciB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6Ni44cmVtO1xyXG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6MXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDo0MTBweCkge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMC44KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6MzUwcHgpIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDAuNyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcC5taW50LW1lc3NhZ2Uge1xyXG4gICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKDEwMCUpO1xyXG4gICAgICAgIGdyaWQtYXJlYTptaW50LW1lc3NhZ2U7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MintButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-mint-button',
                templateUrl: './mint-button.component.html',
                styleUrls: ['./mint-button.component.scss']
            }]
    }], function () { return [{ type: src_app_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"] }]; }, null); })();


/***/ }),

/***/ "8j34":
/*!********************************************************!*\
  !*** ./src/app/loading-page/loading-page.component.ts ***!
  \********************************************************/
/*! exports provided: LoadingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingPageComponent", function() { return LoadingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _stamp_logo_stamp_logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../stamp-logo/stamp-logo.component */ "N9GV");




class LoadingPageComponent {
    constructor(snapshot) {
        this.snapshot = snapshot;
    }
    ngOnInit() {
    }
}
LoadingPageComponent.ɵfac = function LoadingPageComponent_Factory(t) { return new (t || LoadingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
LoadingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingPageComponent, selectors: [["app-loading-page"]], decls: 3, vars: 0, template: function LoadingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-stamp-logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_stamp_logo_stamp_logo_component__WEBPACK_IMPORTED_MODULE_2__["StampLogoComponent"]], styles: ["[_nghost-%COMP%] {\n  grid-area: content;\n  z-index: 99999999999;\n  position: fixed;\n  min-width: 100%;\n  min-height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 0.25fr -webkit-max-content -webkit-max-content 0.25fr;\n  grid-template-rows: 0.25fr max-content max-content 0.25fr;\n  grid-template-areas: \".\" \"stamp-logo\" \"loading\" \".\";\n  row-gap: 5vh;\n  background: #000;\n  justify-content: center;\n  align-items: center;\n  justify-items: center;\n  align-content: center;\n}\n@media (max-width: 600px) {\n  [_nghost-%COMP%] {\n    row-gap: 15vh;\n  }\n}\n[_nghost-%COMP%]   h5[_ngcontent-%COMP%] {\n  grid-area: loading;\n  font-size: 2.5rem;\n  color: #FFF;\n  filter: drop-shadow(0px 0px 0px rgba(0, 0, 0, 0));\n}\n[_nghost-%COMP%]   app-stamp-logo[_ngcontent-%COMP%] {\n  grid-area: stamp-logo;\n}\n[_nghost-%COMP%]   app-stamp-logo[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #FF00CC;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxvYWRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EseUVBQUE7RUFBQSx5REFBQTtFQUNBLG1EQUNBO0VBSUEsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7QUFISjtBQUlJO0VBdEJKO0lBdUJRLGFBQUE7RUFETjtBQUNGO0FBWUk7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlEQUFBO0FBVlI7QUFhSTtFQUVJLHFCQUFBO0FBWlI7QUFhUTtFQUNJLGFBQUE7QUFYWiIsImZpbGUiOiJsb2FkaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBncmlkLWFyZWE6Y29udGVudDtcclxuICAgIHotaW5kZXg6OTk5OTk5OTk5OTk7XHJcbiAgICBwb3NpdGlvbjpmaXhlZDtcclxuICAgIG1pbi13aWR0aDoxMDAlO1xyXG4gICAgbWluLWhlaWdodDoxMDAlO1xyXG4gICAgbWF4LXdpZHRoOjEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OjEwMCU7XHJcbiAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4yNWZyIG1heC1jb250ZW50IG1heC1jb250ZW50IDAuMjVmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAnLidcclxuICAgICdzdGFtcC1sb2dvJ1xyXG4gICAgJ2xvYWRpbmcnXHJcbiAgICAnLic7XHJcbiAgICByb3ctZ2FwOjV2aDtcclxuICAgIGJhY2tncm91bmQ6IzAwMDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOjYwMHB4KSB7XHJcbiAgICAgICAgcm93LWdhcDoxNXZoO1xyXG4gICAgfVxyXG4gICAgLy8gJjphZnRlciB7XHJcbiAgICAvLyAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAvLyAgICAgY29udGVudDonJztcclxuICAgIC8vICAgICB0b3A6MHB4O1xyXG4gICAgLy8gICAgIGxlZnQ6MHB4O1xyXG4gICAgLy8gICAgIHJpZ2h0OjBweDtcclxuICAgIC8vICAgICBib3R0b206MHB4O1xyXG4gICAgLy8gICAgIGJhY2tncm91bmQ6I0ZGMDBDQztcclxuICAgIC8vICAgICBtaXgtYmxlbmQtbW9kZTogY29sb3I7XHJcbiAgICAvLyB9XHJcbiAgICBoNSB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOiBsb2FkaW5nO1xyXG4gICAgICAgIGZvbnQtc2l6ZToyLjVyZW07XHJcbiAgICAgICAgY29sb3I6I0ZGRjtcclxuICAgICAgICBmaWx0ZXI6ZHJvcC1zaGFkb3coMHB4IDBweCAwcHggcmdiYSgwLDAsMCwwKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwLXN0YW1wLWxvZ28ge1xyXG4gICAgICAgIC8vIHRyYW5zZm9ybTpzY2FsZSgyKTtcclxuICAgICAgICBncmlkLWFyZWE6c3RhbXAtbG9nbztcclxuICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICBmaWxsOiNGRjAwQ0M7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading-page',
                templateUrl: './loading-page.component.html',
                styleUrls: ['./loading-page.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "8z7C":
/*!******************************************************!*\
  !*** ./src/app/faq-page/faq-item/faq-item.module.ts ***!
  \******************************************************/
/*! exports provided: FaqItemModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqItemModule", function() { return FaqItemModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _faq_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faq-item.component */ "ZmE3");




class FaqItemModule {
}
FaqItemModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FaqItemModule });
FaqItemModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FaqItemModule_Factory(t) { return new (t || FaqItemModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FaqItemModule, { declarations: [_faq_item_component__WEBPACK_IMPORTED_MODULE_2__["FaqItemComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_faq_item_component__WEBPACK_IMPORTED_MODULE_2__["FaqItemComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqItemModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_faq_item_component__WEBPACK_IMPORTED_MODULE_2__["FaqItemComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _faq_item_component__WEBPACK_IMPORTED_MODULE_2__["FaqItemComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "9vpk":
/*!*****************************************************!*\
  !*** ./src/app/roadmap-page/roadmap-page.module.ts ***!
  \*****************************************************/
/*! exports provided: RoadmapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoadmapPageModule", function() { return RoadmapPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _roadmap_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roadmap-page.component */ "nq3A");
/* harmony import */ var _roadmap_box_roadmap_box_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./roadmap-box/roadmap-box.module */ "oLee");





class RoadmapPageModule {
}
RoadmapPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RoadmapPageModule });
RoadmapPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RoadmapPageModule_Factory(t) { return new (t || RoadmapPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _roadmap_box_roadmap_box_module__WEBPACK_IMPORTED_MODULE_3__["RoadmapBoxModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RoadmapPageModule, { declarations: [_roadmap_page_component__WEBPACK_IMPORTED_MODULE_2__["RoadmapPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _roadmap_box_roadmap_box_module__WEBPACK_IMPORTED_MODULE_3__["RoadmapBoxModule"]], exports: [_roadmap_page_component__WEBPACK_IMPORTED_MODULE_2__["RoadmapPageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoadmapPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_roadmap_page_component__WEBPACK_IMPORTED_MODULE_2__["RoadmapPageComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _roadmap_box_roadmap_box_module__WEBPACK_IMPORTED_MODULE_3__["RoadmapBoxModule"]
                ],
                exports: [
                    _roadmap_page_component__WEBPACK_IMPORTED_MODULE_2__["RoadmapPageComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "AytR":
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

/***/ "Bn2U":
/*!**************************************************!*\
  !*** ./src/app/landing-page/logo/logo.module.ts ***!
  \**************************************************/
/*! exports provided: LogoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoModule", function() { return LogoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logo.component */ "sAqT");




class LogoModule {
}
LogoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LogoModule });
LogoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LogoModule_Factory(t) { return new (t || LogoModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LogoModule, { declarations: [_logo_component__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_logo_component__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_logo_component__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _logo_component__WEBPACK_IMPORTED_MODULE_2__["LogoComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Bw1B":
/*!**************************************************************!*\
  !*** ./src/app/footer-page/copyright/copyright.component.ts ***!
  \**************************************************************/
/*! exports provided: CopyrightComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyrightComponent", function() { return CopyrightComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CopyrightComponent {
    constructor() { }
    ngOnInit() {
    }
}
CopyrightComponent.ɵfac = function CopyrightComponent_Factory(t) { return new (t || CopyrightComponent)(); };
CopyrightComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CopyrightComponent, selectors: [["app-copyright"]], decls: 4, vars: 0, template: function CopyrightComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00A92021 - All rights reserved ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\nBuilt by Oasis Cover Band#9047 & Designed By @Jaleye");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n@media (max-width: 820px) {\n  [_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n  }\n}\n@media (max-width: 540px) {\n  [_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n@media (max-width: 660px) {\n  [_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n    white-space: pre-line;\n  }\n}\n@media (max-width: 410px) {\n  [_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 2.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxjb3B5cmlnaHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxlQUFBO0FBQVI7QUFDUTtFQUZKO0lBR1Esa0JBQUE7RUFFVjtBQUNGO0FBRFE7RUFMSjtJQU1RLGVBQUE7RUFJVjtBQUNGO0FBSFE7RUFSSjtJQVNRLHFCQUFBO0VBTVY7QUFDRjtBQUxRO0VBWEo7SUFZUSxpQkFBQTtFQVFWO0FBQ0YiLCJmaWxlIjoiY29weXJpZ2h0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOjFyZW07XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6ODIwcHgpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOjEuMjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjU0MHB4KSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToycmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDo2NjBweCkge1xyXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjQxMHB4KSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToyLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CopyrightComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-copyright',
                templateUrl: './copyright.component.html',
                styleUrls: ['./copyright.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "E1gL":
/*!***************************************************!*\
  !*** ./src/app/footer-page/footer-page.module.ts ***!
  \***************************************************/
/*! exports provided: FooterPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterPageModule", function() { return FooterPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _footer_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer-page.component */ "2P5o");
/* harmony import */ var _socials_socials_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../socials/socials.module */ "lmfK");
/* harmony import */ var _stamp_logo_stamp_logo_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../stamp-logo/stamp-logo.module */ "qAV5");
/* harmony import */ var _copyright_copyright_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./copyright/copyright.module */ "p/L9");







class FooterPageModule {
}
FooterPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FooterPageModule });
FooterPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FooterPageModule_Factory(t) { return new (t || FooterPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _socials_socials_module__WEBPACK_IMPORTED_MODULE_3__["SocialsModule"],
            _stamp_logo_stamp_logo_module__WEBPACK_IMPORTED_MODULE_4__["StampLogoModule"],
            _copyright_copyright_module__WEBPACK_IMPORTED_MODULE_5__["CopyrightModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FooterPageModule, { declarations: [_footer_page_component__WEBPACK_IMPORTED_MODULE_2__["FooterPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _socials_socials_module__WEBPACK_IMPORTED_MODULE_3__["SocialsModule"],
        _stamp_logo_stamp_logo_module__WEBPACK_IMPORTED_MODULE_4__["StampLogoModule"],
        _copyright_copyright_module__WEBPACK_IMPORTED_MODULE_5__["CopyrightModule"]], exports: [_footer_page_component__WEBPACK_IMPORTED_MODULE_2__["FooterPageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_footer_page_component__WEBPACK_IMPORTED_MODULE_2__["FooterPageComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _socials_socials_module__WEBPACK_IMPORTED_MODULE_3__["SocialsModule"],
                    _stamp_logo_stamp_logo_module__WEBPACK_IMPORTED_MODULE_4__["StampLogoModule"],
                    _copyright_copyright_module__WEBPACK_IMPORTED_MODULE_5__["CopyrightModule"]
                ],
                exports: [
                    _footer_page_component__WEBPACK_IMPORTED_MODULE_2__["FooterPageComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "G+5o":
/*!*****************************************************************!*\
  !*** ./src/app/landing-page/skelly-boy/skelly-boy.component.ts ***!
  \*****************************************************************/
/*! exports provided: SkellyBoyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkellyBoyComponent", function() { return SkellyBoyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const _c0 = ["imgEle"];
class SkellyBoyComponent {
    constructor(renderer) {
        this.renderer = renderer;
        this.classes = '';
    }
    ngOnInit() {
    }
    show() {
        setTimeout(() => {
            this.classes = 'show';
        }, 1000);
    }
}
SkellyBoyComponent.ɵfac = function SkellyBoyComponent_Factory(t) { return new (t || SkellyBoyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"])); };
SkellyBoyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SkellyBoyComponent, selectors: [["app-skelly-boy"]], viewQuery: function SkellyBoyComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.imgEle = _t.first);
    } }, decls: 1, vars: 2, consts: [["src", "../../../assets/images/skully_landing.png", 3, "load", "loaded"]], template: function SkellyBoyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function SkellyBoyComponent_Template_img_load_0_listener() { return ctx.show(); })("loaded", function SkellyBoyComponent_Template_img_loaded_0_listener() { return ctx.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.classes);
    } }, styles: ["[_nghost-%COMP%] {\n  display: grid;\n  justify-content: start;\n  align-content: start;\n  pointer-events: none !important;\n}\n[_nghost-%COMP%]   *[_ngcontent-%COMP%] {\n  pointer-events: none !important;\n}\n[_nghost-%COMP%]   img[_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: 0.4s;\n}\n[_nghost-%COMP%]   img.show[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxza2VsbHktYm95LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSwrQkFBQTtBQUNKO0FBQUk7RUFDSSwrQkFBQTtBQUVSO0FBQUk7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUFFUjtBQURRO0VBQ0ksVUFBQTtBQUdaIiwiZmlsZSI6InNrZWxseS1ib3kuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcclxuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgKiB7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgICBvcGFjaXR5OjA7XHJcbiAgICAgICAgdHJhbnNpdGlvbjowLjRzO1xyXG4gICAgICAgICYuc2hvdyB7XHJcbiAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkellyBoyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-skelly-boy',
                templateUrl: './skelly-boy.component.html',
                styleUrls: ['./skelly-boy.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }]; }, { imgEle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['imgEle']
        }] }); })();


/***/ }),

/***/ "HioS":
/*!****************************************************!*\
  !*** ./src/app/about-page/about-page.component.ts ***!
  \****************************************************/
/*! exports provided: AboutPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageComponent", function() { return AboutPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _socials_socials_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../socials/socials.component */ "XmVa");



class AboutPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutPageComponent.ɵfac = function AboutPageComponent_Factory(t) { return new (t || AboutPageComponent)(); };
AboutPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutPageComponent, selectors: [["app-about-page"]], decls: 34, vars: 1, consts: [[1, "shine"], [1, "big-space"], [3, "threeOnly"]], template: function AboutPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "the most private and crazy club");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " of the blockchain.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " A club that made a splash in the early 80s until the early 2000s in Los Cryptos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " On an evening a little too watered, the club was struck by a terrible curse. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " The 5,555 people present suddenly turned into skeletons condemned to immortality in the crypto sphere. And today ... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Here they are back, more unique than ever. The most trendy and private club of the block chain is back! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Here, all excesses are allowed because immortality reigns. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " The Bones Club was, is and will be the private and trending club on the Solana blockchain. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Join the club to relax with like-minded Skully Boys and projects in the metaverse. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Participate in secret meetings about the future of the world or make contacts that may change your life. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Membership in the Bones Club will give you access to exclusive benefits in the real world and in the Metaverse. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Bones Club Forever!\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "app-socials", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("threeOnly", true);
    } }, directives: [_socials_socials_component__WEBPACK_IMPORTED_MODULE_1__["SocialsComponent"]], styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-auto-rows: -webkit-max-content;\n  grid-auto-rows: max-content;\n  justify-content: center;\n  justify-items: center;\n  row-gap: 2rem;\n}\n[_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n@media (max-width: 820px) {\n  [_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n@media (max-width: 410px) {\n  [_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFib3V0LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQ0FBQTtFQUFBLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUFDSjtBQUFJO0VBQ0ksZUFBQTtBQUVSO0FBRFE7RUFGSjtJQUdRLGlCQUFBO0VBSVY7QUFDRjtBQUhRO0VBTEo7SUFNUSxlQUFBO0VBTVY7QUFDRiIsImZpbGUiOiJhYm91dC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgZGlzcGxheTpncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBncmlkLWF1dG8tcm93czogbWF4LWNvbnRlbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIHJvdy1nYXA6MnJlbTtcclxuICAgIHAge1xyXG4gICAgICAgIGZvbnQtc2l6ZToxcmVtO1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MjBweCkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6MS41cmVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDEwcHgpIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOjJyZW07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about-page',
                templateUrl: './about-page.component.html',
                styleUrls: ['./about-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "J1Ni":
/*!*******************************!*\
  !*** ./src/app/animations.ts ***!
  \*******************************/
/*! exports provided: routerAnimations, fadeAnimations, fadeUpAnimations, fadeDownAnimations */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routerAnimations", function() { return routerAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeAnimations", function() { return fadeAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeUpAnimations", function() { return fadeUpAnimations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fadeDownAnimations", function() { return fadeDownAnimations; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");

const routerAnimations = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routerAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(-100vh)' }),
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'translateY(100vh)' })),
        ], { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1, transform: 'translateY(0vh)' })),
        ], { optional: true })
    ])
]);
const fadeAnimations = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 0, opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.25s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 300, opacity: 1 }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 300, opacity: 1 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.25s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 0, opacity: 0 }))
    ])
]);
const fadeUpAnimations = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeUpAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 0, transform: 'translateY(50vh)', opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 300, transform: 'translateY(0vh)', opacity: 1 }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 300, transform: 'translateY(0vh)', opacity: 1 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.25s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 0, transform: 'translateY(50vh)', opacity: 0 }))
    ])
]);
const fadeDownAnimations = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('fadeDownAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':enter', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 0, transform: 'translateY(-50vh)', opacity: 0 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s ease-out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 300, transform: 'translateY(0vh)', opacity: 1 }))
    ]),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])(':leave', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 300, transform: 'translateY(0vh)', opacity: 1 }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.25s ease-in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ height: 0, transform: 'translateY(-50vh)', opacity: 0 }))
    ])
]);


/***/ }),

/***/ "N9GV":
/*!****************************************************!*\
  !*** ./src/app/stamp-logo/stamp-logo.component.ts ***!
  \****************************************************/
/*! exports provided: StampLogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StampLogoComponent", function() { return StampLogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class StampLogoComponent {
    constructor() { }
    ngOnInit() {
    }
}
StampLogoComponent.ɵfac = function StampLogoComponent_Factory(t) { return new (t || StampLogoComponent)(); };
StampLogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StampLogoComponent, selectors: [["app-stamp-logo"]], decls: 1, vars: 0, consts: [["src", "../../assets/logos/stamp_logo.svg"]], template: function StampLogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } }, styles: ["[_nghost-%COMP%] {\n  min-width: 10rem;\n  max-width: 31rem;\n  max-height: 10rem;\n  min-height: 10rem;\n  display: grid;\n  grid-template-areas: \"stamp\";\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n  justify-self: center;\n  align-self: center;\n  justify-content: center;\n  align-content: center;\n  justify-items: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   img[_ngcontent-%COMP%] {\n  cursor: pointer;\n  pointer-events: all;\n  min-width: 10rem;\n  max-width: 10rem;\n  max-height: 10rem;\n  min-height: 10rem;\n  grid-area: stamp;\n  animation: spin 64s infinite;\n  animation-timing-function: linear;\n  transition: 1s ease-out;\n}\n@keyframes spin {\n  50% {\n    transform: rotate(360deg);\n  }\n}\n[_nghost-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  filter: drop-shadow(0px 0px 10px #FF00CC);\n}\n@media (max-width: 820px) {\n  [_nghost-%COMP%]   img[_ngcontent-%COMP%] {\n    min-width: 20rem;\n    max-width: 20rem;\n    max-height: 20rem;\n    min-height: 20rem;\n  }\n}\n@media (max-width: 410px) {\n  [_nghost-%COMP%]   img[_ngcontent-%COMP%] {\n    min-width: 30rem;\n    max-width: 30rem;\n    max-height: 30rem;\n    min-height: 30rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHN0YW1wLWxvZ28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSw0QkFDQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFBSjtBQUNJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0EsaUNBQUE7RUFDQSx1QkFBQTtBQUNSO0FBQVE7RUFDSTtJQUNJLHlCQUFBO0VBRWQ7QUFDRjtBQUFRO0VBQ0kseUNBQUE7QUFFWjtBQUFRO0VBbkJKO0lBb0JRLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VBR1Y7QUFDRjtBQUZRO0VBekJKO0lBMEJRLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGlCQUFBO0VBS1Y7QUFDRiIsImZpbGUiOiJzdGFtcC1sb2dvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgbWluLXdpZHRoOjEwcmVtO1xyXG4gICAgbWF4LXdpZHRoOjMxcmVtO1xyXG4gICAgbWF4LWhlaWdodDoxMHJlbTtcclxuICAgIG1pbi1oZWlnaHQ6MTByZW07XHJcbiAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgJ3N0YW1wJztcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGltZyB7XHJcbiAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICAgICAgICBtaW4td2lkdGg6MTByZW07XHJcbiAgICAgICAgbWF4LXdpZHRoOjEwcmVtO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6MTByZW07XHJcbiAgICAgICAgbWluLWhlaWdodDoxMHJlbTtcclxuICAgICAgICBncmlkLWFyZWE6c3RhbXA7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBzcGluIDY0cyBpbmZpbml0ZTtcclxuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjoxcyBlYXNlLW91dDtcclxuICAgICAgICBAa2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgICAgICAgICA1MCUge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOnJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBmaWx0ZXI6ZHJvcC1zaGFkb3coMHB4IDBweCAxMHB4ICNGRjAwQ0MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogODIwcHgpIHtcclxuICAgICAgICAgICAgbWluLXdpZHRoOjIwcmVtO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6MjByZW07XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6MjByZW07XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6MjByZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MTBweCkge1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6MzByZW07XHJcbiAgICAgICAgICAgIG1heC13aWR0aDozMHJlbTtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDozMHJlbTtcclxuICAgICAgICAgICAgbWluLWhlaWdodDozMHJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StampLogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-stamp-logo',
                templateUrl: './stamp-logo.component.html',
                styleUrls: ['./stamp-logo.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "NRVD":
/*!*************************************************!*\
  !*** ./src/app/background/background.module.ts ***!
  \*************************************************/
/*! exports provided: BackgroundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundModule", function() { return BackgroundModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _background_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background.component */ "ybZN");




class BackgroundModule {
}
BackgroundModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: BackgroundModule });
BackgroundModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function BackgroundModule_Factory(t) { return new (t || BackgroundModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BackgroundModule, { declarations: [_background_component__WEBPACK_IMPORTED_MODULE_2__["BackgroundComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_background_component__WEBPACK_IMPORTED_MODULE_2__["BackgroundComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackgroundModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_background_component__WEBPACK_IMPORTED_MODULE_2__["BackgroundComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _background_component__WEBPACK_IMPORTED_MODULE_2__["BackgroundComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Q9mS":
/*!***********************************!*\
  !*** ./src/app/play.directive.ts ***!
  \***********************************/
/*! exports provided: PlayingDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayingDirective", function() { return PlayingDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PlayingDirective {
    constructor(elRef) {
        this.elRef = elRef;
        this.check = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        // tslint:disable-next-line:max-line-length
        if (this.elRef.nativeElement.currentTime > 0 &&
            !this.elRef.nativeElement.paused &&
            !this.elRef.nativeElement.ended &&
            this.elRef.nativeElement.readyState > 2) {
            this.check.emit();
        }
    }
    onLoad() {
        this.check.emit();
    }
}
PlayingDirective.ɵfac = function PlayingDirective_Factory(t) { return new (t || PlayingDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
PlayingDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: PlayingDirective, selectors: [["video", "check", ""]], hostBindings: function PlayingDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("check", function PlayingDirective_check_HostBindingHandler() { return ctx.onLoad(); });
    } }, outputs: { check: "check" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayingDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                // tslint:disable-next-line:directive-selector
                selector: 'video[check]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { check: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onLoad: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['check']
        }] }); })();


/***/ }),

/***/ "QvXa":
/*!************************************!*\
  !*** ./src/app/project.service.ts ***!
  \************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class ProjectService {
    constructor() {
        this.mintCost = 2;
        this.mintCurrency = 'SOL';
        this.vips = [
            '../../assets/vips/01.png',
            '../../assets/vips/02.png',
            '../../assets/vips/03.png',
            '../../assets/vips/04.png',
            '../../assets/vips/05.png',
            '../../assets/vips/06.png',
            '../../assets/vips/07.png',
        ];
        this.faqs = [
            {
                question: 'The Bones Club, what is it?',
                answer: `The Bones Club was, is and will be the private and trending club on the Solana blockchain.

      Join the club to relax with like-minded Skully Boys and projects in the metaverse.

      Participate in secret meetings about the future of the world, win NFTs or make contacts that may change your life.

      Membership in the Bones Club will give you access to exclusive benefits in the real world and in the Metaverse.

      Visits to the Club are free, but benefits will only be given to owners of the Skully Boys collection.
      Bones Club Forever!`
            },
            {
                question: `What are Skully Boys?`,
                answer: `SkullyBoys are a collection of 5555 unique NFT avatars chilling on the Solana blockchain. 

      Owning a Skully Boys grants you exclusive access to the Skully Boys Bones Club. 

      Each Skully Boys is algorithmically generated by randomly combining together numerous professionally designed properties across 9 categories.`
            },
            {
                question: `How can I become a member of the Skully Boys Bones Club?`,
                answer: `The only way to join the Skully Boys Bones Club is to own a Skully Boy.
      
      The 5555 Skully Boys NFT collection will be for sale on our website on the release date. `
            },
            {
                question: `How can I buy a Skully Boy?`,
                answer: `The launch date of the collection will be announced in few days.

      Skully Boys will be online at www.skullyboys.io.

      When the market will be sold out you will have to go to DigitalEyes or Solanart.

      Skully Boys will be blind minted for 2 SOL`
            },
            {
                question: `How is the value of a Skully Boy estimated?`,
                answer: `At the launching, all Skully Boys have the same price.
      
      After the launch there is a high chance that the prices explode by the rarity of the traits.`
            },
            {
                question: `How can i get the @Skully Boys role on the discord?`,
                answer: `You need to have a Skully Boy in your wallet, and create a support ticket in the Skully Boys discord.`
            },
        ];
        this.roadmapBoxes = [
            [`The Launch`, `Skully Boys will make their appearance at the launch of the website`],
            [`Awakening of the Skullys`, `5555 Skullys will be revealed ready to be minted on the Solana blockchain.`],
            [`VIP Club Incoming`, `Creation of the “VIP Skully Boys Bones Club”.`],
            [`The Audit`, `Listing on a Tools to check the items value.`],
            [`Skully Goodies`, `Launch of the Skully’Goodies available for the Skully Community.`],
            [`Skully Art Gallery`, `The Skully Boys will appear in an Art Gallery.`],
            [`Charity Skull`, `Creation of a Charity and The VIP Skully Bones Boys Club will decide where the donation will goes.`],
            [`Deadly Curses`, `The Curse hit another club, stay tuned to find out more.`],
            [`It's a Mystery, Gang!`, `Mystery Guest Collab for the promotion of Skully Community, it’s going to be huge!`],
            [`Skully Gang`, `New Project: New Skully XXXXX Project Announced, Gaming project loading..`],
            [`Skully Gang II`, `New Skully XXXXX Drop! New Features rise from the grave..`],
            [`Skully Gang III`, `Second Exhibition : Be ready for the mint, not for the small player, well-informed audience.`],
            [`Mystery`, `Mysterious Collection revealed, where the curse casts its spell ?`],
            [`The Vision`, `This is just the beginning of the Skully Epic, do not blink or you will miss something!`],
        ];
        this.startTime = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](1632268800); // Monday, September 20, 2021 7:41:00 PM GMT
        this.videoEle = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](undefined); // to play on iOS
    }
}
ProjectService.ɵfac = function ProjectService_Factory(t) { return new (t || ProjectService)(); };
ProjectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProjectService, factory: ProjectService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Shpw":
/*!*****************************************************!*\
  !*** ./src/app/landing-page/landing-page.module.ts ***!
  \*****************************************************/
/*! exports provided: LandingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function() { return LandingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _landing_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing-page.component */ "mSt+");
/* harmony import */ var _skelly_boy_skelly_boy_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skelly-boy/skelly-boy.module */ "hpTF");
/* harmony import */ var _logo_logo_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./logo/logo.module */ "Bn2U");
/* harmony import */ var _mint_button_mint_button_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./mint-button/mint-button.module */ "duEA");
/* harmony import */ var _skelly_necklace_skelly_necklace_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./skelly-necklace/skelly-necklace.module */ "l1DG");
/* harmony import */ var _timer_timer_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./timer/timer.module */ "V2Ub");









class LandingPageModule {
}
LandingPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LandingPageModule });
LandingPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LandingPageModule_Factory(t) { return new (t || LandingPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _skelly_boy_skelly_boy_module__WEBPACK_IMPORTED_MODULE_3__["SkellyBoyModule"],
            _logo_logo_module__WEBPACK_IMPORTED_MODULE_4__["LogoModule"],
            _mint_button_mint_button_module__WEBPACK_IMPORTED_MODULE_5__["MintButtonModule"],
            _skelly_necklace_skelly_necklace_module__WEBPACK_IMPORTED_MODULE_6__["SkellyNecklaceModule"],
            _timer_timer_module__WEBPACK_IMPORTED_MODULE_7__["TimerModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LandingPageModule, { declarations: [_landing_page_component__WEBPACK_IMPORTED_MODULE_2__["LandingPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _skelly_boy_skelly_boy_module__WEBPACK_IMPORTED_MODULE_3__["SkellyBoyModule"],
        _logo_logo_module__WEBPACK_IMPORTED_MODULE_4__["LogoModule"],
        _mint_button_mint_button_module__WEBPACK_IMPORTED_MODULE_5__["MintButtonModule"],
        _skelly_necklace_skelly_necklace_module__WEBPACK_IMPORTED_MODULE_6__["SkellyNecklaceModule"],
        _timer_timer_module__WEBPACK_IMPORTED_MODULE_7__["TimerModule"]], exports: [_landing_page_component__WEBPACK_IMPORTED_MODULE_2__["LandingPageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_landing_page_component__WEBPACK_IMPORTED_MODULE_2__["LandingPageComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _skelly_boy_skelly_boy_module__WEBPACK_IMPORTED_MODULE_3__["SkellyBoyModule"],
                    _logo_logo_module__WEBPACK_IMPORTED_MODULE_4__["LogoModule"],
                    _mint_button_mint_button_module__WEBPACK_IMPORTED_MODULE_5__["MintButtonModule"],
                    _skelly_necklace_skelly_necklace_module__WEBPACK_IMPORTED_MODULE_6__["SkellyNecklaceModule"],
                    _timer_timer_module__WEBPACK_IMPORTED_MODULE_7__["TimerModule"]
                ],
                exports: [
                    _landing_page_component__WEBPACK_IMPORTED_MODULE_2__["LandingPageComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./animations */ "J1Ni");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.service */ "QvXa");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./nav/nav.component */ "izVM");
/* harmony import */ var _background_background_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./background/background.component */ "ybZN");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "mSt+");
/* harmony import */ var _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./about-page/about-page.component */ "HioS");
/* harmony import */ var _vip_page_vip_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vip-page/vip-page.component */ "T0oW");
/* harmony import */ var _roadmap_page_roadmap_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./roadmap-page/roadmap-page.component */ "nq3A");
/* harmony import */ var _faq_page_faq_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./faq-page/faq-page.component */ "t2Pu");
/* harmony import */ var _footer_page_footer_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer-page/footer-page.component */ "2P5o");
/* harmony import */ var _loading_page_loading_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./loading-page/loading-page.component */ "8j34");















function AppComponent_app_nav_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeDownAnimations", undefined);
} }
function AppComponent_app_background_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-background");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimations", undefined);
} }
function AppComponent_section_2_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_section_2_Template_section_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.playVideo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-landing-page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-about-page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-vip-page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-roadmap-page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Skully Boys");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-faq-page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-footer-page");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeUpAnimations", undefined);
} }
function AppComponent_app_loading_page_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-loading-page");
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@fadeAnimations", undefined);
} }
class AppComponent {
    constructor(projectService) {
        this.projectService = projectService;
        this.title = 'skelly-boys';
        this.afterViewInit = false;
        this.videoEle = this.projectService.videoEle;
    }
    ngAfterContentInit() {
        setTimeout(() => {
            this.afterViewInit = true;
        }, 3000);
    }
    playVideo() {
        this.videoEle.getValue().nativeElement.play();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 7, vars: 5, consts: [[4, "ngIf"], ["class", "content", 3, "click", 4, "ngIf"], ["outlet", "outlet"], [1, "content", 3, "click"], [1, "spacer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_app_nav_0_Template, 1, 1, "app-nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_app_background_1_Template, 1, 1, "app-background", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AppComponent_section_2_Template, 11, 1, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "main");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet", null, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AppComponent_app_loading_page_6_Template, 1, 1, "app-loading-page", 0);
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.afterViewInit === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.afterViewInit === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.afterViewInit === true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routerAnimations", _r3.isActivated ? _r3.activatedRoute : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.afterViewInit === false);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_5__["NavComponent"], _background_background_component__WEBPACK_IMPORTED_MODULE_6__["BackgroundComponent"], _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_7__["LandingPageComponent"], _about_page_about_page_component__WEBPACK_IMPORTED_MODULE_8__["AboutPageComponent"], _vip_page_vip_page_component__WEBPACK_IMPORTED_MODULE_9__["VipPageComponent"], _roadmap_page_roadmap_page_component__WEBPACK_IMPORTED_MODULE_10__["RoadmapPageComponent"], _faq_page_faq_page_component__WEBPACK_IMPORTED_MODULE_11__["FaqPageComponent"], _footer_page_footer_page_component__WEBPACK_IMPORTED_MODULE_12__["FooterPageComponent"], _loading_page_loading_page_component__WEBPACK_IMPORTED_MODULE_13__["LoadingPageComponent"]], styles: ["[_nghost-%COMP%] {\n  min-height: 100vh;\n  min-width: 100vw;\n  max-width: 100vw;\n  grid-area: app-root;\n  display: grid;\n  grid-template-areas: \"content\";\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n  background: #000;\n}\n[_nghost-%COMP%]   app-background[_ngcontent-%COMP%] {\n  z-index: 1;\n  grid-area: content;\n}\n[_nghost-%COMP%]   section.content[_ngcontent-%COMP%] {\n  z-index: 2;\n  grid-area: content;\n  display: grid;\n  grid-template-areas: \". space .\" \". landing .\" \". about .\" \". vip .\" \". roadmap .\" \". space2 .\" \". faq .\" \". footer .\";\n  grid-template-columns: 15vw 70vw 15vw;\n  grid-template-rows: repeat minmax(0vh, 150vh);\n  min-height: 100vh;\n  min-width: 100vw;\n  max-width: 100vw;\n  padding: 0px;\n  margin: 0px;\n  row-gap: 10vh;\n  pointer-events: all;\n}\n[_nghost-%COMP%]   section.content[_ngcontent-%COMP%]   div.spacer[_ngcontent-%COMP%] {\n  min-height: 0vh;\n  max-height: 0vh;\n  grid-area: space;\n}\n[_nghost-%COMP%]   section.content[_ngcontent-%COMP%]   div.spacer[_ngcontent-%COMP%]:nth-of-type(2) {\n  grid-area: space2;\n  min-height: 38vh;\n  max-height: 38vh;\n  background-image: url(\"data:image/svg+xml,<svg id='patternId' width='500%' height='500%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='50' height='50' patternTransform='scale(5) rotate(0)'><rect x='0' y='0' width='100%' height='100%' fill='hsla(0, 0%, 100%, 0)'/><path d='M17.813 11.25l2.695.742q1.21.469 1.601 1.172.47.664.391 1.914l-.469 2.774-.742 2.695q-.469 1.172-1.172 1.601-.625.43-1.914.391l-2.773-.469-2.696-.742q-1.171-.469-1.601-1.172-.43-.664-.39-1.953l.468-2.734.781-2.696q.43-1.21 1.133-1.601.664-.469 1.953-.39l2.735.468M10.938 0h11.367l.195 1.367q.117 1.29-.273 1.953-.391.703-1.563 1.211l-2.695.86-2.735.507q-1.289.118-1.953-.273-.703-.39-1.21-1.563l-.821-2.695L10.937 0m16.758 0h11.172l.078 2.148q-.039 1.29-.547 1.875-.468.664-1.718 1.016l-2.735.469-2.812.195q-1.29-.039-1.914-.547-.625-.469-.977-1.719L27.734.664 27.695 0m16.367 0H50v6.055L47.578 5l-2.422-1.406q-1.054-.742-1.289-1.485-.273-.78.117-1.992L44.062 0M50 11.094v11.133l-2.227.078q-1.289-.078-1.875-.586-.625-.469-.976-1.719-.195-.742-.43-2.773-.195-2.032-.156-2.813.078-1.25.586-1.875.469-.625 1.719-.937l2.773-.47.586-.038m0 16.601v11.25l-1.758.196q-1.25.039-1.914-.391-.664-.43-1.094-1.64l-.703-2.735-.351-2.773q-.04-1.25.39-1.914.43-.665 1.64-1.133l2.735-.664L50 27.695m0 16.29V50h-5.938q.235-.742 1.055-2.46l1.367-2.423q.743-1.054 1.524-1.25l1.953.078.039.04M38.867 50H27.695l-.117-2.148q.04-1.25.547-1.875.469-.664 1.719-.977l2.773-.508 2.813-.195q1.25.039 1.875.547t.976 1.718l.508 2.774.078.664m-16.562 0H10.938l-.235-1.367q-.117-1.25.313-1.953.351-.703 1.523-1.211l2.695-.82 2.735-.547q1.289-.118 1.953.312.703.39 1.21 1.523l.86 2.696.313 1.367M6.094 50H0v-6.016q.742.196 2.54 1.094 1.835.938 2.46 1.367 1.016.743 1.25 1.524.273.742-.117 1.953l-.04.078M0 38.945v-11.25l1.719-.195q1.25-.04 1.914.43.664.43 1.094 1.64l.703 2.696.351 2.812q.078 1.25-.39 1.914-.43.664-1.641 1.094l-2.695.703L0 38.945m0-16.718V11.094l2.227-.078q1.25.039 1.875.546.625.47.937 1.72l.469 2.773.156 2.812q-.078 1.25-.586 1.875t-1.719.938l-2.773.468-.586.079M0 6.055V0h6.133L5.039 2.5 3.633 4.96Q2.89 5.978 2.109 6.21L.156 6.095 0 6.054m22.07 26.212l.43 2.773q.078 1.29-.39 1.914-.43.703-1.641 1.133l-2.696.742-2.773.39q-1.29.079-1.953-.39-.664-.43-1.094-1.601-.273-.743-.742-2.735l-.39-2.773q-.079-1.29.39-1.953.43-.664 1.601-1.094l2.735-.742 2.773-.39q1.25-.08 1.914.39.703.43 1.133 1.601l.703 2.735m12.305-21.094l2.695.703q1.211.43 1.64 1.133.47.625.43 1.914l-.39 2.773-.703 2.735q-.43 1.21-1.094 1.64-.664.47-1.953.39l-2.773-.35-2.735-.704q-1.21-.43-1.601-1.133-.508-.625-.43-1.914l.39-2.773.704-2.734q.43-1.211 1.093-1.641.665-.469 1.915-.39l2.812.35m2.89 18.204l1.876 2.11q.742 1.015.742 1.796 0 .82-.742 1.836l-1.875 2.11-2.11 1.875q-1.015.742-1.836.742-.78 0-1.797-.742l-2.109-1.875-1.875-2.11q-.742-1.015-.742-1.836 0-.781.742-1.797l1.875-2.109 2.11-1.875q1.015-.742 1.796-.742.82 0 1.836.742l2.11 1.875'  stroke-width='1' stroke='none' fill='hsla(312, 100%, 50%, 1)'/></pattern></defs><rect width='1000%' height='1000%' transform='translate(-200, -30)' fill='url(%23a)'/></svg>\");\n  animation: scroll 8s infinite;\n  animation-timing-function: linear;\n  background-size: 100% 90%;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   section.content[_ngcontent-%COMP%]   div.spacer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  animation: scrollText 16s infinite;\n  transform: translateY(200%);\n}\n@keyframes scrollText {\n  50% {\n    transform: translateY(-100%);\n  }\n  75% {\n    color: #FF00CC;\n  }\n}\n@keyframes scroll {\n  50% {\n    filter: drop-shadow(0px 0px 10px #FF00CC);\n  }\n  100% {\n    background-position: 100% -1000%;\n  }\n}\n[_nghost-%COMP%]   section.content[_ngcontent-%COMP%]   app-landing-page[_ngcontent-%COMP%] {\n  grid-area: landing;\n}\n[_nghost-%COMP%]   section.content[_ngcontent-%COMP%]   app-about-page[_ngcontent-%COMP%] {\n  grid-area: about;\n}\n[_nghost-%COMP%]   section.content[_ngcontent-%COMP%]   app-vip-page[_ngcontent-%COMP%] {\n  grid-area: vip;\n}\n[_nghost-%COMP%]   section.content[_ngcontent-%COMP%]   app-roadmap-page[_ngcontent-%COMP%] {\n  grid-area: roadmap;\n}\n[_nghost-%COMP%]   section.content[_ngcontent-%COMP%]   app-faq-page[_ngcontent-%COMP%] {\n  grid-area: faq;\n}\n[_nghost-%COMP%]   section.content[_ngcontent-%COMP%]   app-footer-page[_ngcontent-%COMP%] {\n  grid-area: footer;\n}\n[_nghost-%COMP%]   main[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  min-width: 100vw;\n  max-width: 100vw;\n  display: grid;\n  grid-template-areas: \"content\";\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n  grid-area: content;\n}\n[_nghost-%COMP%]   router-outlet[_ngcontent-%COMP%] {\n  grid-area: content;\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZ0JBQUE7QUFDSjtBQUFJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0FBRVI7QUFBSTtFQUNJLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzSEFDQTtFQVFBLHFDQUFBO0VBQ0EsNkNBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFzREEsbUJBQUE7QUEzRFI7QUFNUTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFKWjtBQUtZO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNmhHQUFBO0VBQ0EsNkJBQUE7RUFDQSxpQ0FBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFIaEI7QUFLWTtFQUNJLGtDQUFBO0VBQ0EsMkJBQUE7QUFIaEI7QUFJZ0I7RUFDSTtJQUNJLDRCQUFBO0VBRnRCO0VBSWtCO0lBQ0ksY0FBQTtFQUZ0QjtBQUNGO0FBS1k7RUFDSTtJQUNJLHlDQUFBO0VBSGxCO0VBS2M7SUFDSSxnQ0FBQTtFQUhsQjtBQUNGO0FBTVE7RUFDSSxrQkFBQTtBQUpaO0FBTVE7RUFDSSxnQkFBQTtBQUpaO0FBTVE7RUFDSSxjQUFBO0FBSlo7QUFNUTtFQUNJLGtCQUFBO0FBSlo7QUFNUTtFQUNJLGNBQUE7QUFKWjtBQU1RO0VBQ0ksaUJBQUE7QUFKWjtBQVFJO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0FBTlI7QUFRSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtBQU5SIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgbWluLXdpZHRoOiAxMDB2dztcclxuICAgIG1heC13aWR0aDoxMDB2dztcclxuICAgIGdyaWQtYXJlYTphcHAtcm9vdDtcclxuICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdjb250ZW50JztcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgICBiYWNrZ3JvdW5kOiMwMDA7XHJcbiAgICBhcHAtYmFja2dyb3VuZCB7XHJcbiAgICAgICAgei1pbmRleDoxO1xyXG4gICAgICAgIGdyaWQtYXJlYTpjb250ZW50O1xyXG4gICAgfVxyXG4gICAgc2VjdGlvbi5jb250ZW50IHtcclxuICAgICAgICB6LWluZGV4OjI7XHJcbiAgICAgICAgZ3JpZC1hcmVhOmNvbnRlbnQ7XHJcbiAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgICAgJy4gc3BhY2UgLidcclxuICAgICAgICAnLiBsYW5kaW5nIC4nXHJcbiAgICAgICAgJy4gYWJvdXQgLidcclxuICAgICAgICAnLiB2aXAgLidcclxuICAgICAgICAnLiByb2FkbWFwIC4nXHJcbiAgICAgICAgJy4gc3BhY2UyIC4nXHJcbiAgICAgICAgJy4gZmFxIC4nXHJcbiAgICAgICAgJy4gZm9vdGVyIC4nO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMTV2dyA3MHZ3IDE1dnc7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQgbWlubWF4KDB2aCwgMTUwdmgpO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIG1pbi13aWR0aDogMTAwdnc7XHJcbiAgICAgICAgbWF4LXdpZHRoOjEwMHZ3O1xyXG4gICAgICAgIHBhZGRpbmc6MHB4O1xyXG4gICAgICAgIG1hcmdpbjowcHg7XHJcbiAgICAgICAgcm93LWdhcDoxMHZoO1xyXG4gICAgICAgIGRpdi5zcGFjZXIge1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OjB2aDtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDowdmg7XHJcbiAgICAgICAgICAgIGdyaWQtYXJlYTpzcGFjZTtcclxuICAgICAgICAgICAgJjpudGgtb2YtdHlwZSgyKSB7XHJcbiAgICAgICAgICAgICAgICBncmlkLWFyZWE6c3BhY2UyO1xyXG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDozOHZoO1xyXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDozOHZoO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiZGF0YTppbWFnZS9zdmcreG1sLDxzdmcgaWQ9J3BhdHRlcm5JZCcgd2lkdGg9JzUwMCUnIGhlaWdodD0nNTAwJScgeG1sbnM9J2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJz48ZGVmcz48cGF0dGVybiBpZD0nYScgcGF0dGVyblVuaXRzPSd1c2VyU3BhY2VPblVzZScgd2lkdGg9JzUwJyBoZWlnaHQ9JzUwJyBwYXR0ZXJuVHJhbnNmb3JtPSdzY2FsZSg1KSByb3RhdGUoMCknPjxyZWN0IHg9JzAnIHk9JzAnIHdpZHRoPScxMDAlJyBoZWlnaHQ9JzEwMCUnIGZpbGw9J2hzbGEoMCwgMCUsIDEwMCUsIDApJy8+PHBhdGggZD0nTTE3LjgxMyAxMS4yNWwyLjY5NS43NDJxMS4yMS40NjkgMS42MDEgMS4xNzIuNDcuNjY0LjM5MSAxLjkxNGwtLjQ2OSAyLjc3NC0uNzQyIDIuNjk1cS0uNDY5IDEuMTcyLTEuMTcyIDEuNjAxLS42MjUuNDMtMS45MTQuMzkxbC0yLjc3My0uNDY5LTIuNjk2LS43NDJxLTEuMTcxLS40NjktMS42MDEtMS4xNzItLjQzLS42NjQtLjM5LTEuOTUzbC40NjgtMi43MzQuNzgxLTIuNjk2cS40My0xLjIxIDEuMTMzLTEuNjAxLjY2NC0uNDY5IDEuOTUzLS4zOWwyLjczNS40NjhNMTAuOTM4IDBoMTEuMzY3bC4xOTUgMS4zNjdxLjExNyAxLjI5LS4yNzMgMS45NTMtLjM5MS43MDMtMS41NjMgMS4yMTFsLTIuNjk1Ljg2LTIuNzM1LjUwN3EtMS4yODkuMTE4LTEuOTUzLS4yNzMtLjcwMy0uMzktMS4yMS0xLjU2M2wtLjgyMS0yLjY5NUwxMC45MzcgMG0xNi43NTggMGgxMS4xNzJsLjA3OCAyLjE0OHEtLjAzOSAxLjI5LS41NDcgMS44NzUtLjQ2OC42NjQtMS43MTggMS4wMTZsLTIuNzM1LjQ2OS0yLjgxMi4xOTVxLTEuMjktLjAzOS0xLjkxNC0uNTQ3LS42MjUtLjQ2OS0uOTc3LTEuNzE5TDI3LjczNC42NjQgMjcuNjk1IDBtMTYuMzY3IDBINTB2Ni4wNTVMNDcuNTc4IDVsLTIuNDIyLTEuNDA2cS0xLjA1NC0uNzQyLTEuMjg5LTEuNDg1LS4yNzMtLjc4LjExNy0xLjk5Mkw0NC4wNjIgME01MCAxMS4wOTR2MTEuMTMzbC0yLjIyNy4wNzhxLTEuMjg5LS4wNzgtMS44NzUtLjU4Ni0uNjI1LS40NjktLjk3Ni0xLjcxOS0uMTk1LS43NDItLjQzLTIuNzczLS4xOTUtMi4wMzItLjE1Ni0yLjgxMy4wNzgtMS4yNS41ODYtMS44NzUuNDY5LS42MjUgMS43MTktLjkzN2wyLjc3My0uNDcuNTg2LS4wMzhtMCAxNi42MDF2MTEuMjVsLTEuNzU4LjE5NnEtMS4yNS4wMzktMS45MTQtLjM5MS0uNjY0LS40My0xLjA5NC0xLjY0bC0uNzAzLTIuNzM1LS4zNTEtMi43NzNxLS4wNC0xLjI1LjM5LTEuOTE0LjQzLS42NjUgMS42NC0xLjEzM2wyLjczNS0uNjY0TDUwIDI3LjY5NW0wIDE2LjI5VjUwaC01LjkzOHEuMjM1LS43NDIgMS4wNTUtMi40NmwxLjM2Ny0yLjQyM3EuNzQzLTEuMDU0IDEuNTI0LTEuMjVsMS45NTMuMDc4LjAzOS4wNE0zOC44NjcgNTBIMjcuNjk1bC0uMTE3LTIuMTQ4cS4wNC0xLjI1LjU0Ny0xLjg3NS40NjktLjY2NCAxLjcxOS0uOTc3bDIuNzczLS41MDggMi44MTMtLjE5NXExLjI1LjAzOSAxLjg3NS41NDd0Ljk3NiAxLjcxOGwuNTA4IDIuNzc0LjA3OC42NjRtLTE2LjU2MiAwSDEwLjkzOGwtLjIzNS0xLjM2N3EtLjExNy0xLjI1LjMxMy0xLjk1My4zNTEtLjcwMyAxLjUyMy0xLjIxMWwyLjY5NS0uODIgMi43MzUtLjU0N3ExLjI4OS0uMTE4IDEuOTUzLjMxMi43MDMuMzkgMS4yMSAxLjUyM2wuODYgMi42OTYuMzEzIDEuMzY3TTYuMDk0IDUwSDB2LTYuMDE2cS43NDIuMTk2IDIuNTQgMS4wOTQgMS44MzUuOTM4IDIuNDYgMS4zNjcgMS4wMTYuNzQzIDEuMjUgMS41MjQuMjczLjc0Mi0uMTE3IDEuOTUzbC0uMDQuMDc4TTAgMzguOTQ1di0xMS4yNWwxLjcxOS0uMTk1cTEuMjUtLjA0IDEuOTE0LjQzLjY2NC40MyAxLjA5NCAxLjY0bC43MDMgMi42OTYuMzUxIDIuODEycS4wNzggMS4yNS0uMzkgMS45MTQtLjQzLjY2NC0xLjY0MSAxLjA5NGwtMi42OTUuNzAzTDAgMzguOTQ1bTAtMTYuNzE4VjExLjA5NGwyLjIyNy0uMDc4cTEuMjUuMDM5IDEuODc1LjU0Ni42MjUuNDcuOTM3IDEuNzJsLjQ2OSAyLjc3My4xNTYgMi44MTJxLS4wNzggMS4yNS0uNTg2IDEuODc1dC0xLjcxOS45MzhsLTIuNzczLjQ2OC0uNTg2LjA3OU0wIDYuMDU1VjBoNi4xMzNMNS4wMzkgMi41IDMuNjMzIDQuOTZRMi44OSA1Ljk3OCAyLjEwOSA2LjIxTC4xNTYgNi4wOTUgMCA2LjA1NG0yMi4wNyAyNi4yMTJsLjQzIDIuNzczcS4wNzggMS4yOS0uMzkgMS45MTQtLjQzLjcwMy0xLjY0MSAxLjEzM2wtMi42OTYuNzQyLTIuNzczLjM5cS0xLjI5LjA3OS0xLjk1My0uMzktLjY2NC0uNDMtMS4wOTQtMS42MDEtLjI3My0uNzQzLS43NDItMi43MzVsLS4zOS0yLjc3M3EtLjA3OS0xLjI5LjM5LTEuOTUzLjQzLS42NjQgMS42MDEtMS4wOTRsMi43MzUtLjc0MiAyLjc3My0uMzlxMS4yNS0uMDggMS45MTQuMzkuNzAzLjQzIDEuMTMzIDEuNjAxbC43MDMgMi43MzVtMTIuMzA1LTIxLjA5NGwyLjY5NS43MDNxMS4yMTEuNDMgMS42NCAxLjEzMy40Ny42MjUuNDMgMS45MTRsLS4zOSAyLjc3My0uNzAzIDIuNzM1cS0uNDMgMS4yMS0xLjA5NCAxLjY0LS42NjQuNDctMS45NTMuMzlsLTIuNzczLS4zNS0yLjczNS0uNzA0cS0xLjIxLS40My0xLjYwMS0xLjEzMy0uNTA4LS42MjUtLjQzLTEuOTE0bC4zOS0yLjc3My43MDQtMi43MzRxLjQzLTEuMjExIDEuMDkzLTEuNjQxLjY2NS0uNDY5IDEuOTE1LS4zOWwyLjgxMi4zNW0yLjg5IDE4LjIwNGwxLjg3NiAyLjExcS43NDIgMS4wMTUuNzQyIDEuNzk2IDAgLjgyLS43NDIgMS44MzZsLTEuODc1IDIuMTEtMi4xMSAxLjg3NXEtMS4wMTUuNzQyLTEuODM2Ljc0Mi0uNzggMC0xLjc5Ny0uNzQybC0yLjEwOS0xLjg3NS0xLjg3NS0yLjExcS0uNzQyLTEuMDE1LS43NDItMS44MzYgMC0uNzgxLjc0Mi0xLjc5N2wxLjg3NS0yLjEwOSAyLjExLTEuODc1cTEuMDE1LS43NDIgMS43OTYtLjc0Mi44MiAwIDEuODM2Ljc0MmwyLjExIDEuODc1JyAgc3Ryb2tlLXdpZHRoPScxJyBzdHJva2U9J25vbmUnIGZpbGw9J2hzbGEoMzEyLCAxMDAlLCA1MCUsIDEpJy8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0nMTAwMCUnIGhlaWdodD0nMTAwMCUnIHRyYW5zZm9ybT0ndHJhbnNsYXRlKC0yMDAsIC0zMCknIGZpbGw9J3VybCglMjNhKScvPjwvc3ZnPlwiKTtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogc2Nyb2xsIDhzIGluZmluaXRlO1xyXG4gICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOjEwMCUgOTAlO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGgyIHtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogc2Nyb2xsVGV4dCAxNnMgaW5maW5pdGU7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMjAwJSk7XHJcbiAgICAgICAgICAgICAgICBAa2V5ZnJhbWVzIHNjcm9sbFRleHQge1xyXG4gICAgICAgICAgICAgICAgICAgIDUwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIDc1JSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiNGRjAwQ0M7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEBrZXlmcmFtZXMgc2Nyb2xsIHtcclxuICAgICAgICAgICAgICAgIDUwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOmRyb3Atc2hhZG93KDBweCAwcHggMTBweCAjRkYwMENDKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246MTAwJSAtMTAwMCU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYXBwLWxhbmRpbmctcGFnZSB7XHJcbiAgICAgICAgICAgIGdyaWQtYXJlYTpsYW5kaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhcHAtYWJvdXQtcGFnZSB7XHJcbiAgICAgICAgICAgIGdyaWQtYXJlYTphYm91dDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXBwLXZpcC1wYWdlIHtcclxuICAgICAgICAgICAgZ3JpZC1hcmVhOnZpcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXBwLXJvYWRtYXAtcGFnZSB7XHJcbiAgICAgICAgICAgIGdyaWQtYXJlYTpyb2FkbWFwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhcHAtZmFxLXBhZ2Uge1xyXG4gICAgICAgICAgICBncmlkLWFyZWE6ZmFxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhcHAtZm9vdGVyLXBhZ2Uge1xyXG4gICAgICAgICAgICBncmlkLWFyZWE6Zm9vdGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gICAgfVxyXG4gICAgbWFpbiB7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgbWluLXdpZHRoOiAxMDB2dztcclxuICAgICAgICBtYXgtd2lkdGg6MTAwdnc7XHJcbiAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6ICdjb250ZW50JztcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuICAgICAgICBncmlkLWFyZWE6Y29udGVudDtcclxuICAgIH1cclxuICAgIHJvdXRlci1vdXRsZXQge1xyXG4gICAgICAgIGdyaWQtYXJlYTpjb250ZW50O1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIH1cclxufSJdfQ== */"], data: { animation: [_animations__WEBPACK_IMPORTED_MODULE_1__["fadeUpAnimations"], _animations__WEBPACK_IMPORTED_MODULE_1__["fadeDownAnimations"], _animations__WEBPACK_IMPORTED_MODULE_1__["fadeAnimations"], _animations__WEBPACK_IMPORTED_MODULE_1__["routerAnimations"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                animations: [_animations__WEBPACK_IMPORTED_MODULE_1__["fadeUpAnimations"], _animations__WEBPACK_IMPORTED_MODULE_1__["fadeDownAnimations"], _animations__WEBPACK_IMPORTED_MODULE_1__["fadeAnimations"], _animations__WEBPACK_IMPORTED_MODULE_1__["routerAnimations"]]
            }]
    }], function () { return [{ type: _project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"] }]; }, null); })();


/***/ }),

/***/ "T0oW":
/*!************************************************!*\
  !*** ./src/app/vip-page/vip-page.component.ts ***!
  \************************************************/
/*! exports provided: VipPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VipPageComponent", function() { return VipPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project.service */ "QvXa");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _vip_box_vip_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vip-box/vip-box.component */ "UEY2");





function VipPageComponent_app_vip_box_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-vip-box", 5);
} if (rf & 2) {
    const vip_r1 = ctx.$implicit;
    const index_r2 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", vip_r1)("index", index_r2);
} }
class VipPageComponent {
    constructor(projectService) {
        this.projectService = projectService;
        this.vips = this.projectService.vips;
    }
    ngOnInit() {
    }
}
VipPageComponent.ɵfac = function VipPageComponent_Factory(t) { return new (t || VipPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"])); };
VipPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VipPageComponent, selectors: [["app-vip-page"]], decls: 25, vars: 1, consts: [[1, "heading"], [1, "shifty"], [1, "big-space"], [1, "vip-boxes"], [3, "image", "index", 4, "ngFor", "ngForOf"], [3, "image", "index"]], template: function VipPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "super stars");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Bones Club");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "the Bones Club where the crazy nights made all Los CRYPTOS dance! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Like all clubs, they had their drug-addicted celebrities as well as their artists, gangsters and politicians. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " All wealthier than each other, they were part of the high class of Los Cryptos. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " They were THE VIPs, the big tables, the bottle shows and the most beautiful women... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " But tell you one thing, their money has not spared them. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " THEY ARE CONDEMNED TO LIVE IN LUXURY FOR ETERNITY! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, VipPageComponent_app_vip_box_24_Template, 1, 2, "app-vip-box", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.vips);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _vip_box_vip_box_component__WEBPACK_IMPORTED_MODULE_3__["VipBoxComponent"]], styles: ["[_nghost-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-auto-rows: -webkit-max-content;\n  grid-auto-rows: max-content;\n  justify-content: center;\n  justify-items: center;\n  row-gap: 2rem;\n}\n[_nghost-%COMP%]   *[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n}\n[_nghost-%COMP%]   span.heading[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-areas: \"h4\" \"h2\";\n  grid-template-columns: 1fr;\n  grid-template-rows: -webkit-max-content -webkit-max-content;\n  grid-template-rows: max-content max-content;\n  transform: translateY(25%);\n}\n[_nghost-%COMP%]   span.heading[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  grid-area: h4;\n  z-index: 2;\n  font-size: 10rem;\n}\n[_nghost-%COMP%]   span.heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  grid-area: h2;\n  z-index: 1;\n  transform: translateY(-70%);\n}\n[_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n@media (max-width: 820px) {\n  [_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n@media (max-width: 410px) {\n  [_nghost-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n[_nghost-%COMP%]   div.vip-boxes[_ngcontent-%COMP%] {\n  justify-self: start;\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 15vw;\n  column-gap: 2.5vw;\n  transform: translateX(12.5%);\n  animation: sliding 32s infinite;\n}\n@media (max-width: 800px) {\n  [_nghost-%COMP%]   div.vip-boxes[_ngcontent-%COMP%] {\n    grid-auto-columns: 10vw;\n    column-gap: 7.5vw;\n  }\n}\n@keyframes sliding {\n  50% {\n    transform: translateX(-12.5%);\n  }\n}\n[_nghost-%COMP%]   div.vip-boxes[_ngcontent-%COMP%]:hover {\n  animation-play-state: paused;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHZpcC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBS0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsbUNBQUE7RUFBQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0FBSEo7QUFOSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQVFSO0FBQUk7RUFDSSxhQUFBO0VBQ0EsOEJBQ0E7RUFFQSwwQkFBQTtFQUNBLDJEQUFBO0VBQUEsMkNBQUE7RUFXQSwwQkFBQTtBQVZSO0FBQVE7RUFDSSxhQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBRVo7QUFBUTtFQUNJLGFBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7QUFFWjtBQUVJO0VBQ0ksZUFBQTtBQUFSO0FBQ1E7RUFGSjtJQUdRLGlCQUFBO0VBRVY7QUFDRjtBQURRO0VBTEo7SUFNUSxlQUFBO0VBSVY7QUFDRjtBQUZJO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBS0EsNEJBQUE7RUFFQSwrQkFBQTtBQURSO0FBTFE7RUFOSjtJQU9RLHVCQUFBO0lBQ0EsaUJBQUE7RUFRVjtBQUNGO0FBSlE7RUFDSTtJQUNJLDZCQUFBO0VBTWQ7QUFDRjtBQUpRO0VBQ0ksNEJBQUE7QUFNWiIsImZpbGUiOiJ2aXAtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIG1heC13aWR0aDoxMDAlO1xyXG4gICAgbWF4LWhlaWdodDoxMDAlO1xyXG4gICAgKiB7XHJcbiAgICAgICAgbWF4LXdpZHRoOjEwMCU7XHJcbiAgICAgICAgbWF4LWhlaWdodDoxMDAlO1xyXG4gICAgfVxyXG4gICAgZGlzcGxheTpncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBncmlkLWF1dG8tcm93czogbWF4LWNvbnRlbnQ7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIHJvdy1nYXA6MnJlbTtcclxuICAgIHNwYW4uaGVhZGluZyB7XHJcbiAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAgICAgJ2g0J1xyXG4gICAgICAgICdoMic7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCBtYXgtY29udGVudDtcclxuICAgICAgICBoNCB7XHJcbiAgICAgICAgICAgIGdyaWQtYXJlYTpoNDtcclxuICAgICAgICAgICAgei1pbmRleDoyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6MTByZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgICAgZ3JpZC1hcmVhOmgyO1xyXG4gICAgICAgICAgICB6LWluZGV4OjE7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKC03MCUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgyNSUpO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgZm9udC1zaXplOjFyZW07XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDgyMHB4KSB7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZToxLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0MTBweCkge1xyXG4gICAgICAgICAgICBmb250LXNpemU6MnJlbTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkaXYudmlwLWJveGVzIHtcclxuICAgICAgICBqdXN0aWZ5LXNlbGY6c3RhcnQ7XHJcbiAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XHJcbiAgICAgICAgZ3JpZC1hdXRvLWNvbHVtbnM6IDE1dnc7XHJcbiAgICAgICAgY29sdW1uLWdhcDoyLjV2dztcclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDo4MDBweCkge1xyXG4gICAgICAgICAgICBncmlkLWF1dG8tY29sdW1uczogMTB2dztcclxuICAgICAgICAgICAgY29sdW1uLWdhcDo3LjV2dztcclxuICAgICAgICB9XHJcbiAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTIuNSUpO1xyXG5cclxuICAgICAgICBhbmltYXRpb246IHNsaWRpbmcgMzJzIGluZmluaXRlO1xyXG4gICAgICAgIEBrZXlmcmFtZXMgc2xpZGluZyB7XHJcbiAgICAgICAgICAgIDUwJSB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgtMTIuNSUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBhbmltYXRpb24tcGxheS1zdGF0ZTogcGF1c2VkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VipPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vip-page',
                templateUrl: './vip-page.component.html',
                styleUrls: ['./vip-page.component.scss']
            }]
    }], function () { return [{ type: _project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"] }]; }, null); })();


/***/ }),

/***/ "UEY2":
/*!*******************************************************!*\
  !*** ./src/app/vip-page/vip-box/vip-box.component.ts ***!
  \*******************************************************/
/*! exports provided: VipBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VipBoxComponent", function() { return VipBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class VipBoxComponent {
    constructor(router) {
        this.router = router;
        this.image = '../../../assets/images/mock_vip.svg';
        this.index = 0;
        this.large = false;
    }
    ngOnInit() {
    }
    open() {
        this.router.navigateByUrl('view-vip/' + Number(this.index), { skipLocationChange: true });
    }
}
VipBoxComponent.ɵfac = function VipBoxComponent_Factory(t) { return new (t || VipBoxComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
VipBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: VipBoxComponent, selectors: [["app-vip-box"]], hostVars: 2, hostBindings: function VipBoxComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("large", ctx.large);
    } }, inputs: { image: "image", index: "index", large: "large" }, decls: 2, vars: 1, consts: [[1, "inner", 3, "click"], [3, "src"]], template: function VipBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function VipBoxComponent_Template_section_click_0_listener() { return ctx.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["[_nghost-%COMP%] {\n  min-height: 50vh;\n  min-width: 100%;\n  display: grid;\n  grid-template-columns: 0.15fr 1fr 0.15fr;\n  grid-template-rows: 0.05fr 1fr 0.2fr;\n  grid-template-areas: \". . .\" \". inner .\" \". . .\";\n  justify-content: center;\n  justify-items: center;\n  align-items: start;\n  cursor: pointer;\n  transition: 0.2s;\n  pointer-events: visibleFill;\n}\n[_nghost-%COMP%]:hover {\n  z-index: 9999;\n}\n[_nghost-%COMP%]   section.inner[_ngcontent-%COMP%] {\n  pointer-events: visibleFill;\n  transition: 0.2s;\n  grid-area: inner;\n  display: grid;\n  grid-template-areas: \"image\";\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n}\n[_nghost-%COMP%]   section.inner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  pointer-events: visibleFill;\n  transition: 0.2s;\n  grid-area: image;\n  z-index: 100;\n  max-width: 15vw;\n}\n[_nghost-%COMP%]   section.inner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  filter: brightness(1.5);\n}\n.large[_nghost-%COMP%]   section.inner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-height: 60vh;\n  max-width: unset;\n}\n@media (max-width: 1000px) {\n  [_nghost-%COMP%]   section.inner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    max-width: 30vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx2aXAtYm94LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHdDQUFBO0VBQ0Esb0NBQUE7RUFDQSxnREFDQTtFQUdBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDJCQUFBO0FBRko7QUFHSTtFQUNJLGFBQUE7QUFEUjtBQUdJO0VBQ0ksMkJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUNBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtBQUZSO0FBR1E7RUFDSSwyQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQURaO0FBRVk7RUFDSSx1QkFBQTtBQUFoQjtBQU1ZO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtBQUpoQjtBQVFJO0VBRVE7SUFDSSxlQUFBO0VBUGQ7QUFDRiIsImZpbGUiOiJ2aXAtYm94LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgbWluLWhlaWdodDo1MHZoO1xyXG4gICAgbWluLXdpZHRoOjEwMCU7XHJcbiAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMTVmciAxZnIgMC4xNWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAwLjA1ZnIgMWZyIDAuMmZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICcuIC4gLidcclxuICAgICcuIGlubmVyIC4nXHJcbiAgICAnLiAuIC4nO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczpzdGFydDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246MC4ycztcclxuICAgIHBvaW50ZXItZXZlbnRzOiB2aXNpYmxlRmlsbDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIHotaW5kZXg6OTk5OTtcclxuICAgIH1cclxuICAgIHNlY3Rpb24uaW5uZXIge1xyXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiB2aXNpYmxlRmlsbDtcclxuICAgICAgICB0cmFuc2l0aW9uOjAuMnM7XHJcbiAgICAgICAgZ3JpZC1hcmVhOmlubmVyO1xyXG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAgICdpbWFnZSc7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IHZpc2libGVGaWxsO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOjAuMnM7XHJcbiAgICAgICAgICAgIGdyaWQtYXJlYTogaW1hZ2U7XHJcbiAgICAgICAgICAgIHotaW5kZXg6MTAwO1xyXG4gICAgICAgICAgICBtYXgtd2lkdGg6MTV2dztcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBmaWx0ZXI6YnJpZ2h0bmVzcygxLjUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJi5sYXJnZSB7XHJcbiAgICAgICAgc2VjdGlvbi5pbm5lciB7XHJcbiAgICAgICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OjYwdmg7XHJcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6dW5zZXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDoxMDAwcHgpIHtcclxuICAgICAgICBzZWN0aW9uLmlubmVyIHtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIG1heC13aWR0aDozMHZ3O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VipBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-vip-box',
                templateUrl: './vip-box.component.html',
                styleUrls: ['./vip-box.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { image: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], large: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.large']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "V2Ub":
/*!****************************************************!*\
  !*** ./src/app/landing-page/timer/timer.module.ts ***!
  \****************************************************/
/*! exports provided: TimerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerModule", function() { return TimerModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _timer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timer.component */ "19Dk");
/* harmony import */ var _floor_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./floor.pipe */ "i6XI");





class TimerModule {
}
TimerModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TimerModule });
TimerModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function TimerModule_Factory(t) { return new (t || TimerModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TimerModule, { declarations: [_timer_component__WEBPACK_IMPORTED_MODULE_2__["TimerComponent"], _floor_pipe__WEBPACK_IMPORTED_MODULE_3__["FloorPipe"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_timer_component__WEBPACK_IMPORTED_MODULE_2__["TimerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TimerModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_timer_component__WEBPACK_IMPORTED_MODULE_2__["TimerComponent"], _floor_pipe__WEBPACK_IMPORTED_MODULE_3__["FloorPipe"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _timer_component__WEBPACK_IMPORTED_MODULE_2__["TimerComponent"]
                ],
            }]
    }], null, null); })();


/***/ }),

/***/ "XmVa":
/*!**********************************************!*\
  !*** ./src/app/socials/socials.component.ts ***!
  \**********************************************/
/*! exports provided: SocialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialsComponent", function() { return SocialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");



function SocialsComponent_a_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r0.socialLinks.medium, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class SocialsComponent {
    constructor() {
        this.invert = false;
        this.small = false;
        this.threeOnly = false;
        this.socialLinks = {
            discord: 'https://discord.gg/N28uSH94MA',
            twitter: 'https://twitter.com/SkullyBoysBC',
            instagram: 'https://www.instagram.com/theskullyboys/',
            medium: 'https://google.com'
        };
    }
    ngOnInit() {
    }
}
SocialsComponent.ɵfac = function SocialsComponent_Factory(t) { return new (t || SocialsComponent)(); };
SocialsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SocialsComponent, selectors: [["app-socials"]], hostVars: 6, hostBindings: function SocialsComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("invert", ctx.invert)("small", ctx.small)("three-only", ctx.threeOnly);
    } }, inputs: { invert: "invert", small: "small", threeOnly: "threeOnly" }, decls: 20, vars: 4, consts: [["target", "_blank", 3, "href"], [1, "discord"], ["xmlns", "http://www.w3.org/2000/svg", "enable-background", "new 0 0 20 20", "height", "48px", "viewBox", "0 0 20 20", "width", "48px", "fill", "#FFFFFF"], ["fill", "none", "height", "20", "width", "20", "x", "0", "y", "0"], ["d", "M16.37,4.16C15.19,3.62,13.94,3.23,12.63,3c-0.02,0-0.05,0.01-0.06,0.03c-0.16,0.29-0.34,0.66-0.47,0.96 c-1.41-0.21-2.82-0.21-4.2,0c-0.13-0.3-0.31-0.67-0.47-0.96C7.42,3.01,7.39,3,7.37,3C6.06,3.23,4.8,3.62,3.63,4.16 c-0.01,0-0.02,0.01-0.02,0.02c-2.38,3.56-3.03,7.03-2.71,10.45c0,0.02,0.01,0.03,0.02,0.04C2.49,15.83,4.01,16.53,5.5,17 c0.02,0.01,0.05,0,0.06-0.02c0.35-0.48,0.67-0.99,0.94-1.53c0.02-0.03,0-0.07-0.03-0.08c-0.5-0.19-0.98-0.42-1.43-0.68 C5,14.67,5,14.61,5.03,14.59c0.1-0.07,0.19-0.15,0.28-0.22c0.02-0.01,0.04-0.02,0.06-0.01c3.01,1.37,6.26,1.37,9.23,0 c0.02-0.01,0.04-0.01,0.06,0.01c0.09,0.08,0.19,0.15,0.29,0.22c0.03,0.02,0.03,0.08-0.01,0.1c-0.46,0.27-0.93,0.49-1.43,0.68 c-0.03,0.01-0.05,0.05-0.03,0.08c0.28,0.53,0.59,1.04,0.94,1.53C14.44,17,14.46,17,14.49,17c1.5-0.46,3.02-1.16,4.59-2.32 c0.01-0.01,0.02-0.03,0.02-0.04c0.38-3.96-0.64-7.4-2.72-10.45C16.38,4.17,16.38,4.16,16.37,4.16z M6.95,12.55 c-0.9,0-1.65-0.83-1.65-1.85s0.73-1.85,1.65-1.85c0.93,0,1.67,0.84,1.65,1.85C8.6,11.72,7.87,12.55,6.95,12.55z M13.06,12.55 c-0.9,0-1.65-0.83-1.65-1.85s0.73-1.85,1.65-1.85c0.93,0,1.67,0.84,1.65,1.85C14.71,11.72,13.98,12.55,13.06,12.55z"], ["target", "_blank", 3, "href", 4, "ngIf"], [1, "instagram"], ["xmlns", "http://www.w3.org/2000/svg", "height", "48px", "viewBox", "0 0 24 24", "width", "48px", "fill", "#FFFFFF"], ["d", "M0 0h24v24H0V0z", "fill", "none"], ["d", "M14.12 4l1.83 2H20v12H4V6h4.05l1.83-2h4.24M15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2zm-3 7c1.65 0 3 1.35 3 3s-1.35 3-3 3-3-1.35-3-3 1.35-3 3-3m0-2c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5z"], [1, "twitter"], ["fill", "none", "height", "20", "width", "20"], ["d", "M9.26,9.56c0.23-0.32,0.65-0.45,1.01-0.3c0.14,0.06,0.26,0.15,0.35,0.26c0.18,0.22,0.2,0.47,0.17,0.68 c-0.04,0.27-0.2,0.5-0.43,0.63c0,0-3.89,2.36-4.06,2.15C6.14,12.78,9.26,9.56,9.26,9.56z M18,8.2c0,2-0.8,2.4-1.2,2.4 c-0.19,0-0.35-0.08-0.5-0.21c-0.38,2.65-1.89,4.25-4.26,4.79c0.08,0.35,0.39,0.62,0.76,0.62l0,0h0.46c0.18,0,0.33,0.12,0.38,0.29 c0.14,0.42,0.53,0.82,0.82,1.06c0.2,0.17,0.19,0.47-0.02,0.62c-0.27,0.19-0.72,0.39-1.43,0.43c-0.14,0.01-0.28-0.06-0.36-0.18 c-0.11-0.17-0.26-0.45-0.26-0.82c0-0.24,0.03-0.45,0.08-0.64c-0.62-0.13-1.11-0.62-1.24-1.25c-0.39,0.05-0.8,0.08-1.23,0.08 c-0.71,0-1.36-0.07-1.96-0.2C8.02,15.26,8,15.33,8,15.4c0,0.44,0.36,0.8,0.8,0.8l0,0h0.46c0.18,0,0.33,0.12,0.38,0.29 c0.14,0.42,0.53,0.82,0.82,1.06c0.2,0.17,0.19,0.47-0.02,0.62c-0.27,0.19-0.72,0.39-1.43,0.43c-0.14,0.01-0.28-0.06-0.36-0.18 C8.54,18.25,8.4,17.97,8.4,17.6c0-0.24,0.03-0.45,0.08-0.64c-0.73-0.15-1.28-0.8-1.28-1.57c0-0.15,0.03-0.29,0.06-0.42 c-1.97-0.69-3.22-2.22-3.57-4.59c-0.15,0.13-0.31,0.21-0.5,0.21C2.8,10.6,2,10.2,2,8.2c0-1.81,1.36-3.6,2.4-3.6 c0.34,0,0.39,0.39,0.4,0.68c1.02-1.43,2.61-2.41,4.44-2.63C9.4,1.88,10.1,1.4,10.8,1.4v0.8c0,0,0.26-0.4,0.8-0.4 c0.54,0,0.8,0.4,0.8,0.4c-0.39,0-0.68,0.28-0.76,0.62c1.46,0.39,2.71,1.27,3.57,2.46c0.01-0.29,0.06-0.68,0.4-0.68 C16.64,4.6,18,6.39,18,8.2z M4.4,9c0,0.65,0.08,1.23,0.2,1.77c0.15-0.55,0.37-1.07,0.67-1.54C5.1,8.85,5,8.44,5,8 c0-1.66,1.34-3,3-3c0.77,0,1.47,0.3,2,0.78C10.53,5.3,11.23,5,12,5c1.66,0,3,1.34,3,3c0,0.44-0.1,0.85-0.27,1.23 c0.3,0.47,0.53,0.99,0.67,1.55c0.12-0.54,0.2-1.12,0.2-1.78c0-3.09-2.51-5.6-5.6-5.6C6.91,3.4,4.4,5.91,4.4,9z M14.78,12.44 c0-0.08,0.02-0.15,0.02-0.24c0-0.8-0.21-1.56-0.56-2.22C13.69,10.6,12.9,11,12,11c-0.22,0-0.43-0.02-0.63-0.07 c0.11-0.19,0.18-0.4,0.21-0.62c0.01-0.05,0.01-0.1,0.01-0.16c0.13,0.03,0.27,0.04,0.4,0.04c1.21,0,2.2-0.99,2.2-2.2 S13.21,5.8,12,5.8c-0.53,0-1.05,0.2-1.46,0.57L10,6.86L9.46,6.37C9.05,6,8.53,5.8,8,5.8C6.79,5.8,5.8,6.79,5.8,8 c0,1.07,0.77,1.97,1.79,2.16l-0.61,0.66c-0.48-0.17-0.89-0.47-1.22-0.84C5.41,10.65,5.2,11.4,5.2,12.2c0,0.07,0.01,0.12,0.01,0.19 C6.1,13.85,7.71,14.6,10,14.6C12.3,14.6,13.9,13.87,14.78,12.44z M13.2,8c0,0.77-0.54,1.4-1.2,1.4S10.8,8.77,10.8,8 s0.54-1.4,1.2-1.4S13.2,7.23,13.2,8z M12.6,7.3c0-0.17-0.13-0.3-0.3-0.3C12.13,7,12,7.13,12,7.3s0.13,0.3,0.3,0.3 C12.47,7.6,12.6,7.47,12.6,7.3z M9.2,8c0,0.77-0.54,1.4-1.2,1.4S6.8,8.77,6.8,8S7.34,6.6,8,6.6S9.2,7.23,9.2,8z M8.6,7.3 C8.6,7.13,8.47,7,8.3,7C8.13,7,8,7.13,8,7.3s0.13,0.3,0.3,0.3C8.47,7.6,8.6,7.47,8.6,7.3z"], [1, "medium"], ["height", "48px", "width", "48px", "viewBox", "0 0 24 24", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "serif", "http://www.serif.com/", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", 2, "fill", "#FFF", "fill-rule", "evenodd", "clip-rule", "evenodd", "stroke-linejoin", "round", "stroke-miterlimit", "1.41421"], ["d", "M18.602,6.448l-3.698,0l-2.631,6.621l-2.99,-6.621l-3.951,0l0,0.329l1.392,1.701l-0.019,6.57l-1.376,1.878l0.003,0.311l3.886,0l0.01,-0.286l-1.628,-1.903l0.043,-5.317l3.433,7.506l0.414,0l3.049,-7.684l0,6.25l-1.25,1.182l0,0.252l5.313,0l0,-0.302l-1.218,-1.155l-0.017,-7.946l1.235,-1.055l0,-0.331Z"]], template: function SocialsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "rect", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, SocialsComponent_a_8_Template, 5, 1, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "svg", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "rect", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "path", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.socialLinks.discord, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.threeOnly);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.socialLinks.instagram, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.socialLinks.twitter, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: ["[_nghost-%COMP%] {\n  min-height: 100%;\n  min-width: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 100px;\n  grid-auto-rows: -webkit-max-content;\n  grid-auto-rows: max-content;\n  column-gap: 10px;\n  justify-self: center;\n  justify-content: center;\n  justify-items: center;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  min-height: 2.5rem;\n  min-width: 2r 0.5em;\n  max-height: 2.5rem;\n  max-width: 2.5rem;\n  border-radius: 100px;\n  background: #FF00CC;\n  display: grid;\n  grid-template-rows: 1fr;\n  grid-template-columns: 1fr;\n  justify-content: center;\n  align-content: center;\n  justify-items: center;\n  align-items: center;\n  transition: 0.2s;\n  border: 0px solid rgba(0, 0, 0, 0);\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  transition: 0.2s;\n  max-height: 2rem;\n  min-height: 2rem;\n}\n@media (max-width: 820px) {\n  [_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n    min-height: 5rem;\n    min-width: 5rem;\n    max-height: 5rem;\n    max-width: 5rem;\n  }\n  [_nghost-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    max-height: 4rem;\n    min-height: 4rem;\n  }\n}\n@media (max-width: 410px) {\n  [_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n    min-height: 10rem;\n    min-width: 10rem;\n    max-height: 10rem;\n    max-width: 10rem;\n  }\n  [_nghost-%COMP%]   a[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n    max-height: 7.5rem;\n    min-height: 7.5rem;\n  }\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #FFF;\n  transform: scale(2);\n  border: 2px solid #FF00CC;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #FF00CC;\n}\n[_nghost-%COMP%]   a[_ngcontent-%COMP%]:hover   i.medium[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  fill: #FF00CC;\n}\n.invert[_nghost-%COMP%]   a[_ngcontent-%COMP%] {\n  background: #FFF;\n}\n.invert[_nghost-%COMP%]   a[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #FF00CC;\n}\n.invert[_nghost-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background: #FF00CC;\n  border: 2px solid #FFF;\n}\n.invert[_nghost-%COMP%]   a[_ngcontent-%COMP%]:hover   i[_ngcontent-%COMP%]   svg[_ngcontent-%COMP%] {\n  fill: #FFF;\n}\n.small[_nghost-%COMP%] {\n  column-gap: 5px;\n  grid-auto-columns: 75px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHNvY2lhbHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFFQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtFQUNBLG1DQUFBO0VBQUEsMkJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtBQUFKO0FBRUk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQ0FBQTtBQUFSO0FBQ1E7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUFDWjtBQUNRO0VBckJKO0lBc0JRLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtFQUVWO0VBRFU7SUFDSSxnQkFBQTtJQUNBLGdCQUFBO0VBR2Q7QUFDRjtBQURRO0VBL0JKO0lBZ0NRLGlCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQkFBQTtJQUNBLGdCQUFBO0VBSVY7RUFIVTtJQUNJLGtCQUFBO0lBQ0Esa0JBQUE7RUFLZDtBQUNGO0FBRFE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFHWjtBQURnQjtFQUNJLGFBQUE7QUFHcEI7QUFBb0I7RUFDSSxhQUFBO0FBRXhCO0FBS1E7RUFDSSxnQkFBQTtBQUhaO0FBS2dCO0VBQ0ksYUFBQTtBQUhwQjtBQU1ZO0VBQ0ksbUJBQUE7RUFDQSxzQkFBQTtBQUpoQjtBQU1vQjtFQUNJLFVBQUE7QUFKeEI7QUFVSTtFQUNJLGVBQUE7RUFDQSx1QkFBQTtBQVJSIiwiZmlsZSI6InNvY2lhbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBtaW4taGVpZ2h0OjEwMCU7XHJcbiAgICBtaW4td2lkdGg6MTAwJTtcclxuICAgIG1heC13aWR0aDoxMDAlO1xyXG4gICAgbWF4LWhlaWdodDoxMDAlO1xyXG5cclxuICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XHJcbiAgICBncmlkLWF1dG8tY29sdW1uczogMTAwcHg7XHJcbiAgICBncmlkLWF1dG8tcm93czogbWF4LWNvbnRlbnQ7XHJcbiAgICBjb2x1bW4tZ2FwOjEwcHg7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG5cclxuICAgIGEge1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6Mi41cmVtO1xyXG4gICAgICAgIG1pbi13aWR0aDoyci41ZW07XHJcbiAgICAgICAgbWF4LWhlaWdodDoyLjVyZW07XHJcbiAgICAgICAgbWF4LXdpZHRoOjIuNXJlbTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjEwMHB4O1xyXG4gICAgICAgIGJhY2tncm91bmQ6I0ZGMDBDQztcclxuICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246MC4ycztcclxuICAgICAgICBib3JkZXI6MHB4IHNvbGlkIHJnYmEoMCwwLDAsMCk7XHJcbiAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjowLjJzO1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OjJyZW07XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6MnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDgyMHB4KSB7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6NXJlbTtcclxuICAgICAgICAgICAgbWluLXdpZHRoOjVyZW07XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6NXJlbTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOjVyZW07XHJcbiAgICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OjRyZW07XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OjRyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQxMHB4KSB7XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6MTByZW07XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDoxMHJlbTtcclxuICAgICAgICAgICAgbWF4LWhlaWdodDoxMHJlbTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOjEwcmVtO1xyXG4gICAgICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDo3LjVyZW07XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OjcuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpIHtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6I0ZGRjtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDIpO1xyXG4gICAgICAgICAgICBib3JkZXI6MnB4IHNvbGlkICNGRjAwQ0M7XHJcbiAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgc3ZnIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWxsOiNGRjAwQ0M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLm1lZGl1bSB7XHJcbiAgICAgICAgICAgICAgICAgICAgKiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6I0ZGMDBDQztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmLmludmVydCB7XHJcbiAgICAgICAgYSB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6I0ZGRjtcclxuICAgICAgICAgICAgaSB7XHJcbiAgICAgICAgICAgICAgICBzdmcge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGw6I0ZGMDBDQztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6I0ZGMDBDQztcclxuICAgICAgICAgICAgICAgIGJvcmRlcjoycHggc29saWQgI0ZGRjtcclxuICAgICAgICAgICAgICAgIGkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN2ZyB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw6I0ZGRjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAmLnNtYWxsIHtcclxuICAgICAgICBjb2x1bW4tZ2FwOjVweDtcclxuICAgICAgICBncmlkLWF1dG8tY29sdW1uczo3NXB4O1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-socials',
                templateUrl: './socials.component.html',
                styleUrls: ['./socials.component.scss']
            }]
    }], function () { return []; }, { invert: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.invert']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], small: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.small']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], threeOnly: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['class.three-only']
        }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _landing_page_landing_page_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing-page/landing-page.module */ "Shpw");
/* harmony import */ var _about_page_about_page_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-page/about-page.module */ "mp2p");
/* harmony import */ var _vip_page_vip_page_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vip-page/vip-page.module */ "+BEL");
/* harmony import */ var _faq_page_faq_page_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./faq-page/faq-page.module */ "enKt");
/* harmony import */ var _footer_page_footer_page_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer-page/footer-page.module */ "E1gL");
/* harmony import */ var _roadmap_page_roadmap_page_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./roadmap-page/roadmap-page.module */ "9vpk");
/* harmony import */ var _background_background_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./background/background.module */ "NRVD");
/* harmony import */ var _nav_nav_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./nav/nav.module */ "uvhv");
/* harmony import */ var _load_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./load.directive */ "+1Yp");
/* harmony import */ var _loading_page_loading_page_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./loading-page/loading-page.module */ "rYMx");
/* harmony import */ var _play_directive__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./play.directive */ "Q9mS");

















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _landing_page_landing_page_module__WEBPACK_IMPORTED_MODULE_5__["LandingPageModule"],
            _about_page_about_page_module__WEBPACK_IMPORTED_MODULE_6__["AboutPageModule"],
            _vip_page_vip_page_module__WEBPACK_IMPORTED_MODULE_7__["VipPageModule"],
            _roadmap_page_roadmap_page_module__WEBPACK_IMPORTED_MODULE_10__["RoadmapPageModule"],
            _faq_page_faq_page_module__WEBPACK_IMPORTED_MODULE_8__["FaqPageModule"],
            _footer_page_footer_page_module__WEBPACK_IMPORTED_MODULE_9__["FooterPageModule"],
            _background_background_module__WEBPACK_IMPORTED_MODULE_11__["BackgroundModule"],
            _nav_nav_module__WEBPACK_IMPORTED_MODULE_12__["NavModule"],
            _loading_page_loading_page_module__WEBPACK_IMPORTED_MODULE_14__["LoadingPageModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _load_directive__WEBPACK_IMPORTED_MODULE_13__["LoadedDirective"],
        _play_directive__WEBPACK_IMPORTED_MODULE_15__["PlayingDirective"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _landing_page_landing_page_module__WEBPACK_IMPORTED_MODULE_5__["LandingPageModule"],
        _about_page_about_page_module__WEBPACK_IMPORTED_MODULE_6__["AboutPageModule"],
        _vip_page_vip_page_module__WEBPACK_IMPORTED_MODULE_7__["VipPageModule"],
        _roadmap_page_roadmap_page_module__WEBPACK_IMPORTED_MODULE_10__["RoadmapPageModule"],
        _faq_page_faq_page_module__WEBPACK_IMPORTED_MODULE_8__["FaqPageModule"],
        _footer_page_footer_page_module__WEBPACK_IMPORTED_MODULE_9__["FooterPageModule"],
        _background_background_module__WEBPACK_IMPORTED_MODULE_11__["BackgroundModule"],
        _nav_nav_module__WEBPACK_IMPORTED_MODULE_12__["NavModule"],
        _loading_page_loading_page_module__WEBPACK_IMPORTED_MODULE_14__["LoadingPageModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _load_directive__WEBPACK_IMPORTED_MODULE_13__["LoadedDirective"],
                    _play_directive__WEBPACK_IMPORTED_MODULE_15__["PlayingDirective"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _landing_page_landing_page_module__WEBPACK_IMPORTED_MODULE_5__["LandingPageModule"],
                    _about_page_about_page_module__WEBPACK_IMPORTED_MODULE_6__["AboutPageModule"],
                    _vip_page_vip_page_module__WEBPACK_IMPORTED_MODULE_7__["VipPageModule"],
                    _roadmap_page_roadmap_page_module__WEBPACK_IMPORTED_MODULE_10__["RoadmapPageModule"],
                    _faq_page_faq_page_module__WEBPACK_IMPORTED_MODULE_8__["FaqPageModule"],
                    _footer_page_footer_page_module__WEBPACK_IMPORTED_MODULE_9__["FooterPageModule"],
                    _background_background_module__WEBPACK_IMPORTED_MODULE_11__["BackgroundModule"],
                    _nav_nav_module__WEBPACK_IMPORTED_MODULE_12__["NavModule"],
                    _loading_page_loading_page_module__WEBPACK_IMPORTED_MODULE_14__["LoadingPageModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZL7e":
/*!**********************************************************!*\
  !*** ./src/app/view-vip-page/view-vip-page.component.ts ***!
  \**********************************************************/
/*! exports provided: ViewVipPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewVipPageComponent", function() { return ViewVipPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project.service */ "QvXa");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _vip_page_vip_box_vip_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vip-page/vip-box/vip-box.component */ "UEY2");





class ViewVipPageComponent {
    constructor(projectService, snapshot, router) {
        this.projectService = projectService;
        this.snapshot = snapshot;
        this.router = router;
        this.vips = this.projectService.vips;
    }
    ngOnInit() {
        this.snapshot.params.subscribe(result => {
            this.index = result.id;
        });
    }
    close() {
        this.router.navigateByUrl('', { skipLocationChange: true });
    }
}
ViewVipPageComponent.ɵfac = function ViewVipPageComponent_Factory(t) { return new (t || ViewVipPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
ViewVipPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ViewVipPageComponent, selectors: [["app-view-vip-page"]], decls: 3, vars: 2, consts: [[3, "click"], [3, "image", "large"]], template: function ViewVipPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h5", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewVipPageComponent_Template_h5_click_0_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "X");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-vip-box", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("image", ctx.vips[ctx.index])("large", true);
    } }, directives: [_vip_page_vip_box_vip_box_component__WEBPACK_IMPORTED_MODULE_3__["VipBoxComponent"]], styles: ["[_nghost-%COMP%] {\n  grid-area: content;\n  z-index: 99999999999;\n  position: fixed;\n  min-width: 100%;\n  min-height: 100%;\n  max-width: 100%;\n  max-height: 100%;\n  display: grid;\n  grid-template-columns: 2rem 1fr 2rem;\n  grid-template-rows: 4rem 5vh 4rem 1fr 4rem;\n  grid-template-areas: \". . .\" \". close .\" \". . .\" \". vip .\" \". . .\";\n  background: #FF00CC44;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n  transition: 0.2s;\n}\n[_nghost-%COMP%]   h5[_ngcontent-%COMP%] {\n  pointer-events: all;\n  grid-area: close;\n  justify-self: end;\n  color: #FFF;\n  font-size: 5rem;\n  cursor: pointer;\n  transition: 0.5s;\n}\n[_nghost-%COMP%]   h5[_ngcontent-%COMP%]:hover {\n  transform: scale(1.5);\n}\n[_nghost-%COMP%]   app-vip-box[_ngcontent-%COMP%] {\n  grid-area: vip;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHZpZXctdmlwLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxvQ0FBQTtFQUNBLDBDQUFBO0VBQ0Esa0VBQ0E7RUFLQSxxQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7RUFDQSxnQkFBQTtBQUpKO0FBS0k7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUhSO0FBSVE7RUFDSSxxQkFBQTtBQUZaO0FBTUk7RUFDSSxjQUFBO0FBSlIiLCJmaWxlIjoidmlldy12aXAtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGdyaWQtYXJlYTpjb250ZW50O1xyXG4gICAgei1pbmRleDo5OTk5OTk5OTk5OTtcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgbWluLXdpZHRoOjEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6MTAwJTtcclxuICAgIG1heC1oZWlnaHQ6MTAwJTtcclxuICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMnJlbSAxZnIgMnJlbTtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNHJlbSA1dmggNHJlbSAxZnIgNHJlbTtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAnLiAuIC4nXHJcbiAgICAnLiBjbG9zZSAuJ1xyXG4gICAgJy4gLiAuJ1xyXG4gICAgJy4gdmlwIC4nXHJcbiAgICAnLiAuIC4nO1xyXG4gICAgYmFja2dyb3VuZDojRkYwMENDNDQ7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMTBweCk7XHJcbiAgICB0cmFuc2l0aW9uOjAuMnM7XHJcbiAgICBoNSB7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICAgICAgICBncmlkLWFyZWE6IGNsb3NlO1xyXG4gICAgICAgIGp1c3RpZnktc2VsZjplbmQ7XHJcbiAgICAgICAgY29sb3I6I0ZGRjtcclxuICAgICAgICBmb250LXNpemU6NXJlbTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgdHJhbnNpdGlvbjowLjVzO1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMS41KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXBwLXZpcC1ib3gge1xyXG4gICAgICAgIGdyaWQtYXJlYTp2aXA7XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewVipPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-view-vip-page',
                templateUrl: './view-vip-page.component.html',
                styleUrls: ['./view-vip-page.component.scss']
            }]
    }], function () { return [{ type: _project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "ZmE3":
/*!*********************************************************!*\
  !*** ./src/app/faq-page/faq-item/faq-item.component.ts ***!
  \*********************************************************/
/*! exports provided: FaqItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqItemComponent", function() { return FaqItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FaqItemComponent {
    constructor() { }
    ngOnInit() {
    }
}
FaqItemComponent.ɵfac = function FaqItemComponent_Factory(t) { return new (t || FaqItemComponent)(); };
FaqItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FaqItemComponent, selectors: [["app-faq-item"]], inputs: { question: "question", answer: "answer" }, decls: 6, vars: 2, consts: [[1, "inner"], [1, "question"], [1, "hidden", "answer"], [1, "big-space", "answer"]], template: function FaqItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.question);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.answer, " ");
    } }, styles: ["[_nghost-%COMP%] {\n  max-width: 100%;\n  max-height: -webkit-max-content;\n  max-height: max-content;\n  min-width: 100%;\n  display: grid;\n  grid-template-columns: 0.05fr 1fr 0.15fr;\n  grid-template-rows: 20px 1fr 20px;\n  grid-template-areas: \". . .\" \". inner .\" \". . .\";\n  justify-content: center;\n  justify-items: center;\n  align-items: center;\n  border-bottom: 2px solid #FF00CC;\n  cursor: pointer;\n  transition: 0.2s;\n}\n[_nghost-%COMP%]   section.inner[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  min-width: 100%;\n  min-height: 100%;\n  grid-area: inner;\n  display: grid;\n  grid-template-areas: \"question\" \"answer\";\n  grid-template-columns: 1fr;\n  grid-template-rows: -webkit-max-content -webkit-max-content;\n  grid-template-rows: max-content max-content;\n}\n[_nghost-%COMP%]   section.inner[_ngcontent-%COMP%]   p.question[_ngcontent-%COMP%] {\n  grid-area: question;\n  justify-self: start;\n  text-align: start;\n  font-size: 2rem;\n}\n[_nghost-%COMP%]   section.inner[_ngcontent-%COMP%]   span.answer[_ngcontent-%COMP%] {\n  grid-area: answer;\n  transition: 0.5s;\n}\n[_nghost-%COMP%]   section.inner[_ngcontent-%COMP%]   span.answer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  white-space: pre-wrap;\n}\n[_nghost-%COMP%]   section.inner[_ngcontent-%COMP%]   span.answer.hidden[_ngcontent-%COMP%] {\n  font-size: 0px;\n  opacity: 0;\n  height: -webkit-max-content;\n  height: max-content;\n  min-height: 0px;\n  max-height: 0vh;\n}\n[_nghost-%COMP%]   section.inner[_ngcontent-%COMP%]   span.answer.hidden[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  padding-top: 20px;\n  transition: 0.5s;\n  font-size: 0px;\n}\n[_nghost-%COMP%]:hover {\n  background: rgba(255, 0, 204, 0.5);\n}\n[_nghost-%COMP%]:hover   section.inner[_ngcontent-%COMP%]   span.answer[_ngcontent-%COMP%] {\n  opacity: 1;\n  font-size: 1rem;\n  min-height: 100px;\n  max-height: 50vh;\n}\n[_nghost-%COMP%]:hover   section.inner[_ngcontent-%COMP%]   span.answer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n@media (max-width: 820px) {\n  [_nghost-%COMP%]:hover   section.inner[_ngcontent-%COMP%]   span.answer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n@media (max-width: 410px) {\n  [_nghost-%COMP%]:hover   section.inner[_ngcontent-%COMP%]   span.answer[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxmYXEtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSwrQkFBQTtFQUFBLHVCQUFBO0VBQ0EsZUFBQTtFQUVBLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0RBQ0E7RUFHQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUhKO0FBSUk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSx3Q0FDQTtFQUVBLDBCQUFBO0VBQ0EsMkRBQUE7RUFBQSwyQ0FBQTtBQUpSO0FBTVE7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBSlo7QUFNUTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFKWjtBQUtZO0VBQ0kscUJBQUE7QUFIaEI7QUFLWTtFQUNJLGNBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFBQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBSGhCO0FBSWdCO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUFGcEI7QUFPSTtFQUNJLGtDQUFBO0FBTFI7QUFPWTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtBQUxoQjtBQU1nQjtFQUNJLGVBQUE7QUFKcEI7QUFLb0I7RUFGSjtJQUdRLGVBQUE7RUFGdEI7QUFDRjtBQUdvQjtFQUxKO0lBTVEsZUFBQTtFQUF0QjtBQUNGIiwiZmlsZSI6ImZhcS1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgbWF4LXdpZHRoOjEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0Om1heC1jb250ZW50O1xyXG4gICAgbWluLXdpZHRoOjEwMCU7XHJcbiAgICAvLyBtaW4taGVpZ2h0OjEwMCU7XHJcbiAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuMDVmciAxZnIgMC4xNWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMHB4IDFmciAyMHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICcuIC4gLidcclxuICAgICcuIGlubmVyIC4nXHJcbiAgICAnLiAuIC4nO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICBib3JkZXItYm90dG9tOjJweCBzb2xpZCAjRkYwMENDO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOjAuMnM7XHJcbiAgICBzZWN0aW9uLmlubmVyIHtcclxuICAgICAgICBtYXgtd2lkdGg6MTAwJTtcclxuICAgICAgICBtYXgtaGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgbWluLXdpZHRoOjEwMCU7XHJcbiAgICAgICAgbWluLWhlaWdodDoxMDAlO1xyXG4gICAgICAgIGdyaWQtYXJlYTppbm5lcjtcclxuICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgICAncXVlc3Rpb24nXHJcbiAgICAgICAgJ2Fuc3dlcic7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCBtYXgtY29udGVudDtcclxuICAgICAgICBcclxuICAgICAgICBwLnF1ZXN0aW9uIHtcclxuICAgICAgICAgICAgZ3JpZC1hcmVhOiBxdWVzdGlvbjtcclxuICAgICAgICAgICAganVzdGlmeS1zZWxmOnN0YXJ0O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOnN0YXJ0O1xyXG4gICAgICAgICAgICBmb250LXNpemU6MnJlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3Bhbi5hbnN3ZXIge1xyXG4gICAgICAgICAgICBncmlkLWFyZWE6YW5zd2VyO1xyXG4gICAgICAgICAgICB0cmFuc2l0aW9uOjAuNXM7XHJcbiAgICAgICAgICAgIHAge1xyXG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IHByZS13cmFwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuaGlkZGVuIHtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTowcHg7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OjA7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6bWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OjBweDtcclxuICAgICAgICAgICAgICAgIG1heC1oZWlnaHQ6MHZoO1xyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy10b3A6MjBweDtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOjAuNXM7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjBweDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQ6cmdiKDI1NSwgMCwgMjA0LCAwLjUpO1xyXG4gICAgICAgIHNlY3Rpb24uaW5uZXIge1xyXG4gICAgICAgICAgICBzcGFuLmFuc3dlciB7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjFyZW07XHJcbiAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OjEwMHB4O1xyXG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDo1MHZoO1xyXG4gICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjFyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDgyMHB4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZToycmVtO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDEwcHgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOjNyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-faq-item',
                templateUrl: './faq-item.component.html',
                styleUrls: ['./faq-item.component.scss']
            }]
    }], function () { return []; }, { question: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], answer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "duEA":
/*!****************************************************************!*\
  !*** ./src/app/landing-page/mint-button/mint-button.module.ts ***!
  \****************************************************************/
/*! exports provided: MintButtonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MintButtonModule", function() { return MintButtonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _mint_button_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mint-button.component */ "8LlM");




class MintButtonModule {
}
MintButtonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MintButtonModule });
MintButtonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MintButtonModule_Factory(t) { return new (t || MintButtonModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MintButtonModule, { declarations: [_mint_button_component__WEBPACK_IMPORTED_MODULE_2__["MintButtonComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_mint_button_component__WEBPACK_IMPORTED_MODULE_2__["MintButtonComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MintButtonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_mint_button_component__WEBPACK_IMPORTED_MODULE_2__["MintButtonComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _mint_button_component__WEBPACK_IMPORTED_MODULE_2__["MintButtonComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "enKt":
/*!*********************************************!*\
  !*** ./src/app/faq-page/faq-page.module.ts ***!
  \*********************************************/
/*! exports provided: FaqPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageModule", function() { return FaqPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _faq_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./faq-page.component */ "t2Pu");
/* harmony import */ var _faq_item_faq_item_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faq-item/faq-item.module */ "8z7C");





class FaqPageModule {
}
FaqPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: FaqPageModule });
FaqPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function FaqPageModule_Factory(t) { return new (t || FaqPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _faq_item_faq_item_module__WEBPACK_IMPORTED_MODULE_3__["FaqItemModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](FaqPageModule, { declarations: [_faq_page_component__WEBPACK_IMPORTED_MODULE_2__["FaqPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _faq_item_faq_item_module__WEBPACK_IMPORTED_MODULE_3__["FaqItemModule"]], exports: [_faq_page_component__WEBPACK_IMPORTED_MODULE_2__["FaqPageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_faq_page_component__WEBPACK_IMPORTED_MODULE_2__["FaqPageComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _faq_item_faq_item_module__WEBPACK_IMPORTED_MODULE_3__["FaqItemModule"]
                ],
                exports: [
                    _faq_page_component__WEBPACK_IMPORTED_MODULE_2__["FaqPageComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "hpTF":
/*!**************************************************************!*\
  !*** ./src/app/landing-page/skelly-boy/skelly-boy.module.ts ***!
  \**************************************************************/
/*! exports provided: SkellyBoyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkellyBoyModule", function() { return SkellyBoyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _skelly_boy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skelly-boy.component */ "G+5o");




class SkellyBoyModule {
}
SkellyBoyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SkellyBoyModule });
SkellyBoyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SkellyBoyModule_Factory(t) { return new (t || SkellyBoyModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SkellyBoyModule, { declarations: [_skelly_boy_component__WEBPACK_IMPORTED_MODULE_2__["SkellyBoyComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_skelly_boy_component__WEBPACK_IMPORTED_MODULE_2__["SkellyBoyComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkellyBoyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_skelly_boy_component__WEBPACK_IMPORTED_MODULE_2__["SkellyBoyComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _skelly_boy_component__WEBPACK_IMPORTED_MODULE_2__["SkellyBoyComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "i6XI":
/*!**************************************************!*\
  !*** ./src/app/landing-page/timer/floor.pipe.ts ***!
  \**************************************************/
/*! exports provided: FloorPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FloorPipe", function() { return FloorPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FloorPipe {
    transform(value) {
        return Math.floor(value);
    }
}
FloorPipe.ɵfac = function FloorPipe_Factory(t) { return new (t || FloorPipe)(); };
FloorPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "floor", type: FloorPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FloorPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'floor'
            }]
    }], null, null); })();


/***/ }),

/***/ "izVM":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _corner_logo_corner_logo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../corner-logo/corner-logo.component */ "wd5C");
/* harmony import */ var _socials_socials_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../socials/socials.component */ "XmVa");




class NavComponent {
    constructor(renderer, elementRef) {
        this.renderer = renderer;
        this.elementRef = elementRef;
    }
    onMouseWheel(event) {
        this.checkStyle(event.pageY);
    }
    ngOnInit() {
    }
    checkStyle(screenY) {
        if (screenY > 1000) {
            this.renderer.addClass(this.elementRef.nativeElement, 'showing');
        }
        else {
            this.renderer.removeClass(this.elementRef.nativeElement, 'showing');
        }
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], hostBindings: function NavComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousewheel", function NavComponent_mousewheel_HostBindingHandler($event) { return ctx.onMouseWheel($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 6, vars: 3, consts: [[3, "invert", "small", "threeOnly"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-corner-logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-socials", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Connect");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Wallet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("invert", true)("small", true)("threeOnly", true);
    } }, directives: [_corner_logo_corner_logo_component__WEBPACK_IMPORTED_MODULE_1__["CornerLogoComponent"], _socials_socials_component__WEBPACK_IMPORTED_MODULE_2__["SocialsComponent"]], styles: ["[_nghost-%COMP%] {\n  min-width: 100vw;\n  max-width: 100vw;\n  min-height: 10vh;\n  height: 10vh;\n  max-height: 10vh;\n  grid-area: nav;\n  display: grid;\n  grid-template-areas: \". . . .\" \"corner-logo socials connect-wallet .\";\n  grid-template-columns: 1fr -webkit-max-content -webkit-max-content 40px;\n  grid-template-columns: 1fr max-content max-content 40px;\n  grid-template-rows: 20px -webkit-max-content;\n  grid-template-rows: 20px max-content;\n  align-items: center;\n  column-gap: 1.1rem;\n  align-content: center;\n  transition: 0.4s ease-out;\n  background: #FF00CC00;\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  z-index: 9999999999;\n}\n[_nghost-%COMP%]   app-corner-logo[_ngcontent-%COMP%] {\n  grid-area: corner-logo;\n  justify-self: start;\n  align-self: center;\n  transform: translate(4rem, 0rem);\n  transition: 0.5s;\n}\n[_nghost-%COMP%]   app-socials[_ngcontent-%COMP%] {\n  grid-area: socials;\n  align-self: center;\n  align-items: center;\n  align-content: center;\n  transition: 0.5s;\n}\n[_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n  align-self: center;\n  grid-area: connect-wallet;\n  font-weight: 100;\n  font-size: 2rem;\n  min-height: 20px;\n  min-width: 20px;\n  cursor: pointer;\n  transition: 0.5s;\n  line-height: 2rem;\n}\n[_nghost-%COMP%]   h3[_ngcontent-%COMP%]:hover {\n  color: #FFF;\n}\n.showing[_nghost-%COMP%] {\n  background: #FF00CC99;\n  -webkit-backdrop-filter: blur(10px);\n          backdrop-filter: blur(10px);\n}\n.showing[_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n  color: #FFF;\n}\n.showing[_nghost-%COMP%]   h3[_ngcontent-%COMP%]:hover {\n  color: #FFF;\n  transform: scale(1) translate(0, -10px);\n}\n.showing[_nghost-%COMP%]   h3[_ngcontent-%COMP%], .showing[_nghost-%COMP%]   app-socials[_ngcontent-%COMP%] {\n  transform: scale(0.75) translate(0, -20px);\n}\n.showing[_nghost-%COMP%]   app-corner-logo[_ngcontent-%COMP%] {\n  transform: translate(4rem, -10px) scale(0.75);\n}\n@media (max-height: 400px) {\n  [_nghost-%COMP%] {\n    height: 15vh;\n    max-height: 15vh;\n  }\n}\n@media (max-height: 250px) {\n  [_nghost-%COMP%] {\n    height: 20vh;\n    max-height: 20vh;\n  }\n}\n@media (max-width: 820px) {\n  [_nghost-%COMP%] {\n    grid-template-columns: 1fr -webkit-max-content 1fr 10px;\n    grid-template-columns: 1fr max-content 1fr 10px;\n  }\n}\n@media (max-width: 460px) {\n  [_nghost-%COMP%] {\n    grid-template-columns: 10px -webkit-max-content 1fr 10px;\n    grid-template-columns: 10px max-content 1fr 10px;\n  }\n  [_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n    justify-self: start;\n    transform: scale(1) translate(-100%, 0px);\n  }\n  [_nghost-%COMP%]   app-socials[_ngcontent-%COMP%] {\n    transform: scale(0.6) translate(-10%, 0px);\n  }\n  .showing[_nghost-%COMP%]   app-socials[_ngcontent-%COMP%] {\n    transform: scale(0.5) translate(-10%, -20px);\n  }\n  .showing[_nghost-%COMP%]   h3[_ngcontent-%COMP%] {\n    transform: scale(1) translate(-100%, -10px);\n  }\n  .showing[_nghost-%COMP%]   h3[_ngcontent-%COMP%]:hover {\n    transform: scale(1) translate(-100%, -10px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG5hdi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EscUVBQ0E7RUFFQSx1RUFBQTtFQUFBLHVEQUFBO0VBQ0EsNENBQUE7RUFBQSxvQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUE2QkEsZUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsbUJBQUE7QUE3Qko7QUFGSTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0JBQUE7QUFJUjtBQUZJO0VBQ0ksa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUlSO0FBRkk7RUFDSSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBSUEsaUJBQUE7QUFDUjtBQUpRO0VBQ0ksV0FBQTtBQU1aO0FBRUk7RUFFSSxxQkFBQTtFQUNBLG1DQUFBO1VBQUEsMkJBQUE7QUFEUjtBQUVRO0VBQ0ksV0FBQTtBQUFaO0FBQ1k7RUFDSSxXQUFBO0VBQ0EsdUNBQUE7QUFDaEI7QUFFUTtFQUNJLDBDQUFBO0FBQVo7QUFFUTtFQUNJLDZDQUFBO0FBQVo7QUFHSTtFQXBFSjtJQXFFUSxZQUFBO0lBQ0EsZ0JBQUE7RUFBTjtBQUNGO0FBQ0k7RUF4RUo7SUF5RVEsWUFBQTtJQUNBLGdCQUFBO0VBRU47QUFDRjtBQURJO0VBNUVKO0lBNkVRLHVEQUFBO0lBQUEsK0NBQUE7RUFJTjtBQUNGO0FBSEk7RUEvRUo7SUFnRlEsd0RBQUE7SUFBQSxnREFBQTtFQU1OO0VBTE07SUFDSSxtQkFBQTtJQUNBLHlDQUFBO0VBT1Y7RUFMTTtJQUNJLDBDQUFBO0VBT1Y7RUFKVTtJQUNJLDRDQUFBO0VBTWQ7RUFKVTtJQUNJLDJDQUFBO0VBTWQ7RUFMYztJQUNJLDJDQUFBO0VBT2xCO0FBQ0YiLCJmaWxlIjoibmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgbWluLXdpZHRoOjEwMHZ3O1xyXG4gICAgbWF4LXdpZHRoOjEwMHZ3O1xyXG4gICAgbWluLWhlaWdodDoxMHZoO1xyXG4gICAgaGVpZ2h0OjEwdmg7XHJcbiAgICBtYXgtaGVpZ2h0OjEwdmg7XHJcbiAgICBncmlkLWFyZWE6bmF2O1xyXG4gICAgZGlzcGxheTpncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICcuIC4gLiAuJ1xyXG4gICAgJ2Nvcm5lci1sb2dvIHNvY2lhbHMgY29ubmVjdC13YWxsZXQgLic7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciBtYXgtY29udGVudCBtYXgtY29udGVudCA0MHB4O1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAyMHB4IG1heC1jb250ZW50O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGNvbHVtbi1nYXA6MS4xcmVtO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgdHJhbnNpdGlvbjowLjRzIGVhc2Utb3V0O1xyXG4gICAgYmFja2dyb3VuZDojRkYwMENDMDA7XHJcbiAgICBhcHAtY29ybmVyLWxvZ28ge1xyXG4gICAgICAgIGdyaWQtYXJlYTpjb3JuZXItbG9nbztcclxuICAgICAgICBqdXN0aWZ5LXNlbGY6c3RhcnQ7XHJcbiAgICAgICAgYWxpZ24tc2VsZjpjZW50ZXI7XHJcbiAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZSg0cmVtLCAwcmVtKTtcclxuICAgICAgICB0cmFuc2l0aW9uOjAuNXM7XHJcbiAgICB9XHJcbiAgICBhcHAtc29jaWFscyB7XHJcbiAgICAgICAgZ3JpZC1hcmVhOnNvY2lhbHM7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246MC41cztcclxuICAgIH1cclxuICAgIGgzIHtcclxuICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgZ3JpZC1hcmVhOmNvbm5lY3Qtd2FsbGV0O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OjEwMDtcclxuICAgICAgICBmb250LXNpemU6MnJlbTtcclxuICAgICAgICBtaW4taGVpZ2h0OjIwcHg7XHJcbiAgICAgICAgbWluLXdpZHRoOjIwcHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246MC41cztcclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgY29sb3I6I0ZGRjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6MnJlbTtcclxuICAgIH1cclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgdG9wOjBweDtcclxuICAgIGxlZnQ6MHB4O1xyXG4gICAgei1pbmRleDo5OTk5OTk5OTk5O1xyXG4gICAgJi5zaG93aW5nIHtcclxuICAgICAgICAvLyBncmlkLXRlbXBsYXRlLXJvd3M6IDBweCBtYXgtY29udGVudDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkYwMENDOTk7XHJcbiAgICAgICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDEwcHgpO1xyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAgY29sb3I6I0ZGRjtcclxuICAgICAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjojRkZGO1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDEpIHRyYW5zbGF0ZSgwLCAtMTBweCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaDMsIGFwcC1zb2NpYWxzIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDAuNzUpIHRyYW5zbGF0ZSgwLCAtMjBweCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGFwcC1jb3JuZXItbG9nbyB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoNHJlbSwgLTEwcHgpIHNjYWxlKDAuNzUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LWhlaWdodDo0MDBweCkge1xyXG4gICAgICAgIGhlaWdodDoxNXZoO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6MTV2aDtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LWhlaWdodDoyNTBweCkge1xyXG4gICAgICAgIGhlaWdodDoyMHZoO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6MjB2aDtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MjBweCkge1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIG1heC1jb250ZW50IDFmciAxMHB4O1xyXG4gICAgfVxyXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ2MHB4KSB7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxMHB4IG1heC1jb250ZW50IDFmciAxMHB4O1xyXG4gICAgICAgIGgzIHtcclxuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBzdGFydDtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDEpIHRyYW5zbGF0ZSgtMTAwJSwgMHB4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYXBwLXNvY2lhbHMge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMC42KSB0cmFuc2xhdGUoLTEwJSwgMHB4KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5zaG93aW5nIHtcclxuICAgICAgICAgICAgYXBwLXNvY2lhbHMge1xyXG4gICAgICAgICAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDAuNSkgdHJhbnNsYXRlKC0xMCUsIC0yMHB4KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBoMyB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMSkgdHJhbnNsYXRlKC0xMDAlLCAtMTBweCk7XHJcbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMSkgdHJhbnNsYXRlKC0xMDAlLCAtMTBweCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBAbWVkaWEgKG1heC13aWR0aDogMzYwcHgpIHtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { onMouseWheel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:mousewheel', ['$event']]
        }] }); })();


/***/ }),

/***/ "l1DG":
/*!************************************************************************!*\
  !*** ./src/app/landing-page/skelly-necklace/skelly-necklace.module.ts ***!
  \************************************************************************/
/*! exports provided: SkellyNecklaceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkellyNecklaceModule", function() { return SkellyNecklaceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _skelly_necklace_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./skelly-necklace.component */ "3iI9");




class SkellyNecklaceModule {
}
SkellyNecklaceModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SkellyNecklaceModule });
SkellyNecklaceModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SkellyNecklaceModule_Factory(t) { return new (t || SkellyNecklaceModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SkellyNecklaceModule, { declarations: [_skelly_necklace_component__WEBPACK_IMPORTED_MODULE_2__["SkellyNecklaceComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_skelly_necklace_component__WEBPACK_IMPORTED_MODULE_2__["SkellyNecklaceComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SkellyNecklaceModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_skelly_necklace_component__WEBPACK_IMPORTED_MODULE_2__["SkellyNecklaceComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _skelly_necklace_component__WEBPACK_IMPORTED_MODULE_2__["SkellyNecklaceComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "lmfK":
/*!*******************************************!*\
  !*** ./src/app/socials/socials.module.ts ***!
  \*******************************************/
/*! exports provided: SocialsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialsModule", function() { return SocialsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _socials_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socials.component */ "XmVa");




class SocialsModule {
}
SocialsModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SocialsModule });
SocialsModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function SocialsModule_Factory(t) { return new (t || SocialsModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SocialsModule, { declarations: [_socials_component__WEBPACK_IMPORTED_MODULE_2__["SocialsComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_socials_component__WEBPACK_IMPORTED_MODULE_2__["SocialsComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialsModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_socials_component__WEBPACK_IMPORTED_MODULE_2__["SocialsComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _socials_component__WEBPACK_IMPORTED_MODULE_2__["SocialsComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "mKF4":
/*!****************************************************!*\
  !*** ./src/app/vip-page/vip-box/vip-box.module.ts ***!
  \****************************************************/
/*! exports provided: VipBoxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VipBoxModule", function() { return VipBoxModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _vip_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vip-box.component */ "UEY2");




class VipBoxModule {
}
VipBoxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: VipBoxModule });
VipBoxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function VipBoxModule_Factory(t) { return new (t || VipBoxModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](VipBoxModule, { declarations: [_vip_box_component__WEBPACK_IMPORTED_MODULE_2__["VipBoxComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_vip_box_component__WEBPACK_IMPORTED_MODULE_2__["VipBoxComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VipBoxModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_vip_box_component__WEBPACK_IMPORTED_MODULE_2__["VipBoxComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _vip_box_component__WEBPACK_IMPORTED_MODULE_2__["VipBoxComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "mSt+":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project.service */ "QvXa");
/* harmony import */ var _skelly_boy_skelly_boy_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./skelly-boy/skelly-boy.component */ "G+5o");
/* harmony import */ var _skelly_necklace_skelly_necklace_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./skelly-necklace/skelly-necklace.component */ "3iI9");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./logo/logo.component */ "sAqT");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _timer_timer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./timer/timer.component */ "19Dk");
/* harmony import */ var _mint_button_mint_button_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mint-button/mint-button.component */ "8LlM");










function LandingPageComponent_app_timer_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-timer", 5);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentTime", ctx_r0.currentTime);
} }
function LandingPageComponent_app_mint_button_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-mint-button");
} }
class LandingPageComponent {
    constructor(projectService) {
        this.projectService = projectService;
        this.keywords = [
            `Immortality`,
            `Eternity`,
            `Luxury`,
            `Pleasure`,
            `The impossible`,
            `Madness`,
            `The wealth`
        ];
        this.keyword = this.keywords[0];
        this.keywordIndex = 0;
        this.classes = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.startTime = this.projectService.startTime;
        this.currentTime = 0;
    }
    ngOnInit() {
        setInterval(() => {
            this.currentTime = new Date().getTime();
        }, 500);
    }
    ngAfterViewInit() {
        setInterval(() => {
            this.classes.next('hide');
            setTimeout(() => {
                if (this.keywordIndex === (this.keywords.length - 1)) {
                    this.keywordIndex = 0;
                }
                else {
                    this.keywordIndex++;
                }
                this.keyword = this.keywords[this.keywordIndex];
                this.classes.next('');
            }, 500);
        }, 3000);
    }
}
LandingPageComponent.ɵfac = function LandingPageComponent_Factory(t) { return new (t || LandingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"])); };
LandingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingPageComponent, selectors: [["app-landing-page"]], decls: 17, vars: 11, consts: [[1, "background"], [1, "welcome"], [1, "tag-line"], [3, "currentTime", 4, "ngIf"], [4, "ngIf"], [3, "currentTime"]], template: function LandingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-skelly-boy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-skelly-necklace");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-logo");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Let's taste");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](10, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " with them");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, LandingPageComponent_app_timer_13_Template, 1, 1, "app-timer", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, LandingPageComponent_app_mint_button_15_Template, 1, 0, "app-mint-button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](10, 5, ctx.classes));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.keyword);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 7, ctx.startTime) * 1000 - ctx.currentTime > 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 9, ctx.startTime) * 1000 - ctx.currentTime <= 0);
    } }, directives: [_skelly_boy_skelly_boy_component__WEBPACK_IMPORTED_MODULE_3__["SkellyBoyComponent"], _skelly_necklace_skelly_necklace_component__WEBPACK_IMPORTED_MODULE_4__["SkellyNecklaceComponent"], _logo_logo_component__WEBPACK_IMPORTED_MODULE_5__["LogoComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _timer_timer_component__WEBPACK_IMPORTED_MODULE_7__["TimerComponent"], _mint_button_mint_button_component__WEBPACK_IMPORTED_MODULE_8__["MintButtonComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-auto-rows: 1fr;\n  grid-template-areas: \"content\";\n}\n[_nghost-%COMP%]   section.background[_ngcontent-%COMP%] {\n  grid-area: content;\n  justify-self: start;\n  z-index: 1;\n  min-height: 100vh;\n  min-width: 70vw;\n  max-width: 70vw;\n  pointer-events: none !important;\n}\n@media (max-width: 540px) {\n  [_nghost-%COMP%]   section.background[_ngcontent-%COMP%] {\n    transform: translateX(-50%);\n  }\n}\n@media (max-width: 410px) {\n  [_nghost-%COMP%]   section.background[_ngcontent-%COMP%] {\n    transform: translateX(-75%);\n  }\n}\n[_nghost-%COMP%]   section.background[_ngcontent-%COMP%]   *[_ngcontent-%COMP%] {\n  pointer-events: none !important;\n}\n[_nghost-%COMP%]   section.welcome[_ngcontent-%COMP%] {\n  min-height: 100vh;\n  min-width: 70vw;\n  max-width: 70vw;\n  grid-area: content;\n  justify-self: end;\n  z-index: 2;\n  display: grid;\n  grid-auto-rows: -webkit-max-content;\n  grid-auto-rows: max-content;\n  justify-items: end;\n  justify-content: end;\n}\n[_nghost-%COMP%]   section.welcome[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  color: #FFF;\n  filter: none;\n  text-transform: uppercase;\n  font-size: 2rem;\n  font-weight: 100;\n}\n[_nghost-%COMP%]   section.welcome[_ngcontent-%COMP%]   span.tag-line[_ngcontent-%COMP%] {\n  justify-self: center;\n}\n@media (max-width: 540px) {\n  [_nghost-%COMP%]   section.welcome[_ngcontent-%COMP%] {\n    justify-self: center;\n    justify-items: center;\n    justify-content: center;\n  }\n  [_nghost-%COMP%]   section.welcome[_ngcontent-%COMP%]   span.tag-line[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n    font-size: 4rem;\n  }\n}\n[_nghost-%COMP%]   section.welcome[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  transition: 0.5s;\n}\n[_nghost-%COMP%]   section.welcome[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]   span.hide[_ngcontent-%COMP%] {\n  opacity: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGxhbmRpbmctcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQ0E7QUFBSjtBQUNJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBT0EsK0JBQUE7QUFMUjtBQURRO0VBUEo7SUFRUSwyQkFBQTtFQUlWO0FBQ0Y7QUFIUTtFQVZKO0lBV1EsMkJBQUE7RUFNVjtBQUNGO0FBSlE7RUFDSSwrQkFBQTtBQU1aO0FBSEk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUVBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUNBQUE7RUFBQSwyQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFJUjtBQUhRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUtaO0FBSFE7RUFDSSxvQkFBQTtBQUtaO0FBQVE7RUF6Qko7SUEwQlEsb0JBQUE7SUFDQSxxQkFBQTtJQUNBLHVCQUFBO0VBR1Y7RUFEYztJQUNJLGVBQUE7RUFHbEI7QUFDRjtBQUNZO0VBQ0ksZ0JBQUE7QUFDaEI7QUFBZ0I7RUFDSSxxQkFBQTtBQUVwQiIsImZpbGUiOiJsYW5kaW5nLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBtYXgtd2lkdGg6MTAwJTtcclxuICAgIG1heC1oZWlnaHQ6MTAwJTtcclxuICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ3JpZC1hdXRvLXJvd3M6IDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAnY29udGVudCc7XHJcbiAgICBzZWN0aW9uLmJhY2tncm91bmQge1xyXG4gICAgICAgIGdyaWQtYXJlYTpjb250ZW50O1xyXG4gICAgICAgIGp1c3RpZnktc2VsZjpzdGFydDtcclxuICAgICAgICB6LWluZGV4OjE7XHJcbiAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgbWluLXdpZHRoOiA3MHZ3O1xyXG4gICAgICAgIG1heC13aWR0aDo3MHZ3O1xyXG4gICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOjU0MHB4KSB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDo0MTBweCkge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWCgtNzUlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgICAgICoge1xyXG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2VjdGlvbi53ZWxjb21lIHtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICBtaW4td2lkdGg6IDcwdnc7XHJcbiAgICAgICAgbWF4LXdpZHRoOjcwdnc7XHJcbiAgICAgICAgZ3JpZC1hcmVhOmNvbnRlbnQ7XHJcbiAgICAgICAganVzdGlmeS1zZWxmOmVuZDtcclxuICAgICAgICAvLyBhbGlnbi1zZWxmOmNlbnRlcjtcclxuICAgICAgICB6LWluZGV4OjI7XHJcbiAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgIGdyaWQtYXV0by1yb3dzOiBtYXgtY29udGVudDtcclxuICAgICAgICBqdXN0aWZ5LWl0ZW1zOiBlbmQ7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBlbmQ7XHJcbiAgICAgICAgaDUge1xyXG4gICAgICAgICAgICBjb2xvcjojRkZGO1xyXG4gICAgICAgICAgICBmaWx0ZXI6bm9uZTtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgZm9udC1zaXplOjJyZW07XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjEwMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3Bhbi50YWctbGluZSB7XHJcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhcHAtbWludC1idXR0b24ge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6NTQwcHgpIHtcclxuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHNwYW4udGFnLWxpbmUge1xyXG4gICAgICAgICAgICAgICAgaDUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTo0cmVtO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg1IHtcclxuICAgICAgICAgICAgc3BhbiB7XHJcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOjAuNXM7XHJcbiAgICAgICAgICAgICAgICAmLmhpZGUge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MCFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing-page',
                templateUrl: './landing-page.component.html',
                styleUrls: ['./landing-page.component.scss']
            }]
    }], function () { return [{ type: _project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"] }]; }, null); })();


/***/ }),

/***/ "mp2p":
/*!*************************************************!*\
  !*** ./src/app/about-page/about-page.module.ts ***!
  \*************************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _about_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about-page.component */ "HioS");
/* harmony import */ var _socials_socials_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../socials/socials.module */ "lmfK");





class AboutPageModule {
}
AboutPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AboutPageModule });
AboutPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AboutPageModule_Factory(t) { return new (t || AboutPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _socials_socials_module__WEBPACK_IMPORTED_MODULE_3__["SocialsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AboutPageModule, { declarations: [_about_page_component__WEBPACK_IMPORTED_MODULE_2__["AboutPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _socials_socials_module__WEBPACK_IMPORTED_MODULE_3__["SocialsModule"]], exports: [_about_page_component__WEBPACK_IMPORTED_MODULE_2__["AboutPageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_about_page_component__WEBPACK_IMPORTED_MODULE_2__["AboutPageComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _socials_socials_module__WEBPACK_IMPORTED_MODULE_3__["SocialsModule"]
                ],
                exports: [
                    _about_page_component__WEBPACK_IMPORTED_MODULE_2__["AboutPageComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "nq3A":
/*!********************************************************!*\
  !*** ./src/app/roadmap-page/roadmap-page.component.ts ***!
  \********************************************************/
/*! exports provided: RoadmapPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoadmapPageComponent", function() { return RoadmapPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project.service */ "QvXa");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _roadmap_box_roadmap_box_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./roadmap-box/roadmap-box.component */ "whMc");





const _c0 = ["roadmapScroller"];
function RoadmapPageComponent_app_roadmap_box_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-roadmap-box", 7);
} if (rf & 2) {
    const roadmapBox_r3 = ctx.$implicit;
    const index_r4 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("index", index_r4 + 1)("text", roadmapBox_r3);
} }
const _c1 = function (a0) { return { "selectedIndex": a0 }; };
function RoadmapPageComponent_i_9_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RoadmapPageComponent_i_9_Template_i_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const index_r6 = ctx.index; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.scrollToElement(index_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r6 = ctx.index;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r2.selectedIndex === index_r6));
} }
class RoadmapPageComponent {
    constructor(renderer, projectService) {
        this.renderer = renderer;
        this.projectService = projectService;
        this.roadmapBoxes = this.projectService.roadmapBoxes;
        this.currentPosition = 0;
        this.hoveringOver = false;
        this.selectedIndex = 0;
    }
    ngOnInit() {
    }
    scrollToElement(index) {
        this.selectedIndex = index;
        const element = this.roadmapScroller.nativeElement;
        if (index !== 0) {
            this.renderer.setStyle(element, 'transform', `translateX(${150 - (index * 27.5)}vw)`);
        }
        else {
            this.renderer.setStyle(element, 'transform', `translateX(${150}vw)`);
        }
    }
    toggleOver() {
        this.hoveringOver = !this.hoveringOver;
    }
}
RoadmapPageComponent.ɵfac = function RoadmapPageComponent_Factory(t) { return new (t || RoadmapPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"])); };
RoadmapPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoadmapPageComponent, selectors: [["app-roadmap-page"]], viewQuery: function RoadmapPageComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.roadmapScroller = _t.first);
    } }, decls: 10, vars: 2, consts: [[1, "heading"], [1, "shine"], [1, "roadmap-boxes", 3, "mouseover"], ["roadmapScroller", ""], [3, "index", "text", 4, "ngFor", "ngForOf"], [1, "pagination-dots"], ["class", "dot", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [3, "index", "text"], [1, "dot", 3, "ngClass", "click"]], template: function RoadmapPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "SKULLY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "roadmap");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseover", function RoadmapPageComponent_Template_div_mouseover_5_listener() { return ctx.toggleOver(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, RoadmapPageComponent_app_roadmap_box_7_Template, 1, 2, "app-roadmap-box", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, RoadmapPageComponent_i_9_Template, 1, 3, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.roadmapBoxes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.roadmapBoxes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _roadmap_box_roadmap_box_component__WEBPACK_IMPORTED_MODULE_3__["RoadmapBoxComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: ["[_nghost-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-auto-rows: -webkit-max-content;\n  grid-auto-rows: max-content;\n  justify-content: center;\n  justify-items: center;\n  row-gap: 2rem;\n}\n[_nghost-%COMP%]   span.heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  transform: translateY(-25%);\n}\n[_nghost-%COMP%]   div.roadmap-boxes[_ngcontent-%COMP%] {\n  justify-self: start;\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 25vw;\n  column-gap: 2.5vw;\n  transition: 0.2s ease-out;\n  transform: translateX(150vw);\n}\n[_nghost-%COMP%]   span.pagination-dots[_ngcontent-%COMP%] {\n  justify-self: center;\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: -webkit-max-content;\n  grid-auto-columns: max-content;\n  column-gap: 2.5vw;\n  justify-items: center;\n  justify-content: center;\n}\n[_nghost-%COMP%]   span.pagination-dots[_ngcontent-%COMP%]   i.dot[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: 0.2s ease-out;\n  background: #FFF;\n  border: 2px solid #FFF;\n  max-height: 1rem;\n  max-width: 1rem;\n  min-height: 1rem;\n  min-width: 1rem;\n  border-radius: 100px;\n}\n[_nghost-%COMP%]   span.pagination-dots[_ngcontent-%COMP%]   i.dot[_ngcontent-%COMP%]:hover {\n  background: #FF00CC;\n  border-color: #FF00CC;\n}\n[_nghost-%COMP%]   span.pagination-dots[_ngcontent-%COMP%]   i.dot.selectedIndex[_ngcontent-%COMP%] {\n  background: #FFFFFF11;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHJvYWRtYXAtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSwwQkFBQTtFQUNBLG1DQUFBO0VBQUEsMkJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQUNKO0FBQ1E7RUFDSSwyQkFBQTtBQUNaO0FBRUk7RUFDSSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0FBQVI7QUFFSTtFQUNJLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7RUFBQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtBQUFSO0FBQ1E7RUFDSSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFDWjtBQUFZO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtBQUVoQjtBQUFZO0VBQ0kscUJBQUE7QUFFaEIiLCJmaWxlIjoicm9hZG1hcC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgbWF4LXdpZHRoOjEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OjEwMCU7XHJcbiAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdyaWQtYXV0by1yb3dzOiBtYXgtY29udGVudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgcm93LWdhcDoycmVtO1xyXG4gICAgc3Bhbi5oZWFkaW5nIHtcclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKC0yNSUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRpdi5yb2FkbWFwLWJveGVzIHtcclxuICAgICAgICBqdXN0aWZ5LXNlbGY6c3RhcnQ7XHJcbiAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XHJcbiAgICAgICAgZ3JpZC1hdXRvLWNvbHVtbnM6IDI1dnc7XHJcbiAgICAgICAgY29sdW1uLWdhcDoyLjV2dztcclxuICAgICAgICB0cmFuc2l0aW9uOjAuMnMgZWFzZS1vdXQ7XHJcbiAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZVgoMTUwdncpO1xyXG4gICAgfVxyXG4gICAgc3Bhbi5wYWdpbmF0aW9uLWRvdHMge1xyXG4gICAgICAgIGp1c3RpZnktc2VsZjpjZW50ZXI7XHJcbiAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgIGdyaWQtYXV0by1mbG93OiBjb2x1bW47XHJcbiAgICAgICAgZ3JpZC1hdXRvLWNvbHVtbnM6IG1heC1jb250ZW50O1xyXG4gICAgICAgIGNvbHVtbi1nYXA6Mi41dnc7XHJcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGkuZG90IHtcclxuICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246MC4ycyBlYXNlLW91dDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDojRkZGO1xyXG4gICAgICAgICAgICBib3JkZXI6MnB4IHNvbGlkICNGRkY7XHJcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6MXJlbTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOjFyZW07XHJcbiAgICAgICAgICAgIG1pbi1oZWlnaHQ6MXJlbTtcclxuICAgICAgICAgICAgbWluLXdpZHRoOjFyZW07XHJcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6MTAwcHg7XHJcbiAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDojRkYwMENDO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiAjRkYwMENDO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuc2VsZWN0ZWRJbmRleCB7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiNGRkZGRkYxMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoadmapPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-roadmap-page',
                templateUrl: './roadmap-page.component.html',
                styleUrls: ['./roadmap-page.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"] }]; }, { roadmapScroller: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['roadmapScroller']
        }] }); })();


/***/ }),

/***/ "oLee":
/*!****************************************************************!*\
  !*** ./src/app/roadmap-page/roadmap-box/roadmap-box.module.ts ***!
  \****************************************************************/
/*! exports provided: RoadmapBoxModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoadmapBoxModule", function() { return RoadmapBoxModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _roadmap_box_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roadmap-box.component */ "whMc");




class RoadmapBoxModule {
}
RoadmapBoxModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: RoadmapBoxModule });
RoadmapBoxModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function RoadmapBoxModule_Factory(t) { return new (t || RoadmapBoxModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](RoadmapBoxModule, { declarations: [_roadmap_box_component__WEBPACK_IMPORTED_MODULE_2__["RoadmapBoxComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_roadmap_box_component__WEBPACK_IMPORTED_MODULE_2__["RoadmapBoxComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoadmapBoxModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_roadmap_box_component__WEBPACK_IMPORTED_MODULE_2__["RoadmapBoxComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _roadmap_box_component__WEBPACK_IMPORTED_MODULE_2__["RoadmapBoxComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "p/L9":
/*!***********************************************************!*\
  !*** ./src/app/footer-page/copyright/copyright.module.ts ***!
  \***********************************************************/
/*! exports provided: CopyrightModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyrightModule", function() { return CopyrightModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _copyright_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./copyright.component */ "Bw1B");




class CopyrightModule {
}
CopyrightModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CopyrightModule });
CopyrightModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CopyrightModule_Factory(t) { return new (t || CopyrightModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CopyrightModule, { declarations: [_copyright_component__WEBPACK_IMPORTED_MODULE_2__["CopyrightComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_copyright_component__WEBPACK_IMPORTED_MODULE_2__["CopyrightComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CopyrightModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_copyright_component__WEBPACK_IMPORTED_MODULE_2__["CopyrightComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _copyright_component__WEBPACK_IMPORTED_MODULE_2__["CopyrightComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "qAV5":
/*!*************************************************!*\
  !*** ./src/app/stamp-logo/stamp-logo.module.ts ***!
  \*************************************************/
/*! exports provided: StampLogoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StampLogoModule", function() { return StampLogoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _stamp_logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stamp-logo.component */ "N9GV");




class StampLogoModule {
}
StampLogoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: StampLogoModule });
StampLogoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function StampLogoModule_Factory(t) { return new (t || StampLogoModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](StampLogoModule, { declarations: [_stamp_logo_component__WEBPACK_IMPORTED_MODULE_2__["StampLogoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_stamp_logo_component__WEBPACK_IMPORTED_MODULE_2__["StampLogoComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StampLogoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_stamp_logo_component__WEBPACK_IMPORTED_MODULE_2__["StampLogoComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _stamp_logo_component__WEBPACK_IMPORTED_MODULE_2__["StampLogoComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "rYMx":
/*!*****************************************************!*\
  !*** ./src/app/loading-page/loading-page.module.ts ***!
  \*****************************************************/
/*! exports provided: LoadingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingPageModule", function() { return LoadingPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loading_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./loading-page.component */ "8j34");
/* harmony import */ var _stamp_logo_stamp_logo_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../stamp-logo/stamp-logo.module */ "qAV5");





class LoadingPageModule {
}
LoadingPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LoadingPageModule });
LoadingPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LoadingPageModule_Factory(t) { return new (t || LoadingPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _stamp_logo_stamp_logo_module__WEBPACK_IMPORTED_MODULE_3__["StampLogoModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LoadingPageModule, { declarations: [_loading_page_component__WEBPACK_IMPORTED_MODULE_2__["LoadingPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _stamp_logo_stamp_logo_module__WEBPACK_IMPORTED_MODULE_3__["StampLogoModule"]], exports: [_loading_page_component__WEBPACK_IMPORTED_MODULE_2__["LoadingPageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_loading_page_component__WEBPACK_IMPORTED_MODULE_2__["LoadingPageComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _stamp_logo_stamp_logo_module__WEBPACK_IMPORTED_MODULE_3__["StampLogoModule"]
                ],
                exports: [
                    _loading_page_component__WEBPACK_IMPORTED_MODULE_2__["LoadingPageComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "sAqT":
/*!*****************************************************!*\
  !*** ./src/app/landing-page/logo/logo.component.ts ***!
  \*****************************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class LogoComponent {
    constructor() { }
    ngOnInit() {
    }
}
LogoComponent.ɵfac = function LogoComponent_Factory(t) { return new (t || LogoComponent)(); };
LogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoComponent, selectors: [["app-logo"]], decls: 18, vars: 0, consts: [["height", "45rem", "width", "45rem", "version", "1.1", "id", "Calque_1", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "x", "0px", "y", "0px", "viewBox", "0 0 595.28 263.2", 0, "xml", "space", "preserve", 2, "enable-background", "new 0 0 595.28 263.2"], ["d", "M225.18,139.07c-9.41,0-18.62-5.05-27.64-15.17h-0.2c-0.39,0.65-1.27,0.97-2.65,0.97c-1.7,0-2.91-1.29-3.63-3.87\n\t\tc0-1.18,0.88-1.83,2.65-1.94c0.85,0,1.73,0.05,2.65,0.16v-0.89c0.26-2.42,1.27-3.63,3.04-3.63h0.78c1.76,0,2.91,1.05,3.43,3.15\n\t\tv0.81c0,0.59-0.59,1.37-1.76,2.34c7.25,9.03,14.41,13.55,21.47,13.55h1.67c5.16,0,9.47-2.39,12.94-7.18\n\t\tc0.85-1.45,1.27-2.85,1.27-4.19v-1.29c0-4.95-4.41-9.3-13.23-13.07c-0.2-0.11-0.46-0.16-0.78-0.16c0,0.75-0.95,1.26-2.84,1.53\n\t\tc-1.96,0-3.33-1.34-4.12-4.03c0.46-1.24,2.02-1.86,4.71-1.86l-0.2-2.18c0.33-1.88,1.27-2.82,2.84-2.82h0.59\n\t\tc2.61,0.38,3.92,1.45,3.92,3.23v0.48c0,0.75-0.43,1.48-1.27,2.18c10.59,4.46,15.88,10.3,15.88,17.5v0.65\n\t\tc0,6.35-4.15,11.27-12.45,14.76C229.29,138.74,226.94,139.07,225.18,139.07z M216.26,105.99h-0.39c-2.22,0-3.66-1.29-4.31-3.87\n\t\tc0-0.81,0.49-1.64,1.47-2.5v-0.16c-7.25-3.82-12.29-9.14-15.1-15.97c-0.65-1.88-0.98-3.84-0.98-5.89c0-7.53,4.8-12.58,14.41-15.17\n\t\tc1.96-0.48,3.86-0.73,5.69-0.73h1.67c9.08,0,17.12,5.08,24.11,15.25c0.26,0.38,0.39,0.65,0.39,0.81c0.98-0.43,1.73-0.65,2.25-0.65\n\t\tc1.76,0,2.91,1.1,3.43,3.31c0,1.88-0.82,2.82-2.45,2.82l-3.04-0.65c-0.78,2.58-1.99,3.87-3.63,3.87c-2.35,0-3.69-1.29-4.02-3.87\n\t\tc0-1.4,0.85-2.39,2.55-2.98v-0.32c-5.88-8.82-12.71-13.23-20.49-13.23c-5.36,0-9.8,2.02-13.33,6.05c-0.98,1.67-1.54,3.44-1.67,5.32\n\t\tc0,5.97,4.67,12.37,14.02,19.2c0.78-0.86,1.6-1.29,2.45-1.29h0.39c2.09,0,3.43,1.21,4.02,3.63c0,1.18-0.95,1.86-2.84,2.02h-1.76\n\t\tv2.34C218.71,105.11,217.76,105.99,216.26,105.99z", 2, "fill", "#FF00CC"], ["d", "M262.03,141.89c-1.18,0-2.19-1.08-3.04-3.23c-1.31,1.34-2.32,2.02-3.04,2.02c-1.5-0.54-2.25-1.53-2.25-2.98v-0.65\n\t\tc0-2.26,0.88-3.39,2.65-3.39h0.78c0.46-7.58,0.75-14.6,0.88-21.05c-0.78,0-1.34,0.73-1.67,2.18c-0.72,0.81-1.47,1.21-2.25,1.21\n\t\th-0.78c-1.11-0.05-1.67-0.51-1.67-1.37c0.33-0.54,0.49-1.16,0.49-1.86c-1.5-0.32-2.25-0.86-2.25-1.61c0-1.02,1.01-1.69,3.04-2.02\n\t\tc0.85,0,1.53,0.43,2.06,1.29l3.04-1.29c0-15.38-2.58-28.85-7.74-40.41h-0.2c-0.59,0.54-1.34,0.81-2.25,0.81\n\t\tc-1.7,0-2.71-1.34-3.04-4.03c0.52-2.31,1.54-3.47,3.04-3.47c0.72,0,1.34,0.16,1.86,0.48c0-2.04,1.01-3.25,3.04-3.63\n\t\tc1.83,0,2.91,1.16,3.23,3.47c-0.13,1.34-0.75,2.64-1.86,3.87v0.16c5.16,12.53,7.74,25.6,7.74,39.2c0.06,0.91,0.2,1.37,0.39,1.37\n\t\tc7.78-3.98,12.91-8.76,15.39-14.36c-1.05-0.43-1.57-0.99-1.57-1.69v-0.48c0.39-1.34,1.14-2.02,2.25-2.02c0.91,0,1.8,0.56,2.65,1.69\n\t\tc0.72-0.11,1.24-0.16,1.57-0.16c0.98,0,1.6,0.67,1.86,2.02c-0.33,1.56-1.08,2.34-2.25,2.34l-1.18-0.24\n\t\tc-2.29,5.38-7.78,10.51-16.47,15.41c0.46,0,1.27,0.16,2.45,0.48c0-0.75,0.65-1.24,1.96-1.45c1.24,0.22,1.86,1,1.86,2.34\n\t\tc-0.2,1.08-0.82,1.61-1.86,1.61c3.92,9.73,9.34,16.24,16.27,19.52c0.85-0.65,1.54-0.97,2.06-0.97c1.76,0.22,2.65,0.83,2.65,1.86\n\t\tc0,0.97-0.75,1.59-2.25,1.86v0.65c0,0.86-0.33,1.43-0.98,1.69h-1.67c-1.37-0.16-2.06-0.67-2.06-1.53l0.2-1.37\n\t\tc-6.73-2.96-12.19-9.2-16.37-18.71c-0.52-1.67-1.41-2.5-2.65-2.5c-0.72-0.38-1.08-1.32-1.08-2.82c-0.59,0.22-0.92,0.46-0.98,0.73\n\t\tc0,8.07-0.2,16.19-0.59,24.36c1.57,0,2.58,1,3.04,2.98v0.32C264.48,140.28,263.66,141.41,262.03,141.89z", 2, "fill", "#FF00CC"], ["d", "M307.91,137.29c-7.19,0-12.38-4.6-15.59-13.79c-0.98-3.66-1.47-7.29-1.47-10.89c0-4.68,0.75-10.3,2.25-16.86\n\t\tc-1.76,0-2.65-0.73-2.65-2.18c0.39-1.77,1.21-2.66,2.45-2.66c0.78,0,1.73,0.56,2.84,1.69c1.24-0.91,2.32-1.37,3.23-1.37\n\t\tc1.5,0.38,2.25,1.05,2.25,2.02v0.81c-0.46,1.45-1.34,2.18-2.65,2.18h-1.27c-1.9,6.18-2.84,11.86-2.84,17.02\n\t\tc0,9.57,3.14,15.92,9.41,19.04c1.37,0.7,2.78,1.05,4.22,1.05h0.78c5.36,0,9.38-3.47,12.06-10.41c0.52-2.47,0.78-4.62,0.78-6.45\n\t\tc0-4.84-1.27-10.19-3.82-16.05c-2.22,0-3.33-0.67-3.33-2.02v-0.32c0.26-1.67,1.01-2.5,2.25-2.5c0.65,0,1.54,0.43,2.65,1.29h0.2\n\t\tc0.91-1.18,1.86-1.77,2.84-1.77h0.39c1.37,0,2.19,0.78,2.45,2.34c0,1.77-1.08,2.66-3.23,2.66c2.16,5.38,3.23,10.65,3.23,15.81\n\t\tc-0.33,10.54-4.44,17.4-12.35,20.57C311.56,137.02,309.87,137.29,307.91,137.29z", 2, "fill", "#FF00CC"], ["d", "M334.47,138.74h-0.59c-1.18-0.05-2.09-1.13-2.74-3.23c-1.24,1.13-2.22,1.69-2.94,1.69l-0.69-0.08\n\t\tc-0.98-0.7-1.47-1.67-1.47-2.9c0-2.04,0.78-3.33,2.35-3.87l1.37,0.08c1.37-8.82,2.38-16.4,3.04-22.75\n\t\tc0.46-4.89,0.69-9.52,0.69-13.87c0-11.08-1.47-20.6-4.41-28.56l-0.2-0.08c-0.59,0.48-1.27,0.73-2.06,0.73\n\t\tc-1.57,0-2.48-1.13-2.74-3.39l0.1-1.29c0.65-1.88,1.63-2.82,2.94-2.82c0.39,0,1.05,0.11,1.96,0.32c0.59-1.61,1.44-2.69,2.55-3.23\n\t\tl1.18,0.08c1.57,0.11,2.42,1.34,2.55,3.71c-0.13,1.08-0.88,2.37-2.25,3.87c3,8.55,4.51,18.63,4.51,30.25\n\t\tc0,5.76-0.39,11.8-1.18,18.15c-0.59,6.67-1.44,13.55-2.55,20.65c1.57,0.11,2.48,1.1,2.74,2.98l-0.1,1.05\n\t\tC336.46,137.32,335.78,138.15,334.47,138.74z", 2, "fill", "#FF00CC"], ["d", "M347.99,138.74h-0.59c-1.18-0.05-2.09-1.13-2.74-3.23c-1.24,1.13-2.22,1.69-2.94,1.69l-0.69-0.08\n\t\tc-0.98-0.7-1.47-1.67-1.47-2.9c0-2.04,0.78-3.33,2.35-3.87l1.37,0.08c1.37-8.82,2.38-16.4,3.04-22.75\n\t\tc0.46-4.89,0.69-9.52,0.69-13.87c0-11.08-1.47-20.6-4.41-28.56l-0.2-0.08c-0.59,0.48-1.27,0.73-2.06,0.73\n\t\tc-1.57,0-2.48-1.13-2.74-3.39l0.1-1.29c0.65-1.88,1.63-2.82,2.94-2.82c0.39,0,1.05,0.11,1.96,0.32c0.59-1.61,1.44-2.69,2.55-3.23\n\t\tl1.18,0.08c1.57,0.11,2.42,1.34,2.55,3.71c-0.13,1.08-0.88,2.37-2.25,3.87c3,8.55,4.51,18.63,4.51,30.25\n\t\tc0,5.76-0.39,11.8-1.18,18.15c-0.59,6.67-1.44,13.55-2.55,20.65c1.57,0.11,2.48,1.1,2.74,2.98l-0.1,1.05\n\t\tC349.99,137.32,349.3,138.15,347.99,138.74z", 2, "fill", "#FF00CC"], ["d", "M375.73,171.25c-6.21,0-12.09-4.68-17.64-14.04c-0.46,0.21-0.85,0.32-1.18,0.32h-0.88c-1.05-0.65-1.57-1.32-1.57-2.02\n\t\tv-0.48c0.06-0.92,0.59-1.37,1.57-1.37c0.85,0.21,1.4,0.32,1.67,0.32c0.39-1.56,1.14-2.34,2.25-2.34h0.59\n\t\tc1.11,0,1.93,0.73,2.45,2.18c-0.13,0.54-0.62,1.16-1.47,1.86c5.62,8.01,10.62,12.02,15,12.02c5.82,0,8.72-8.07,8.72-24.2\n\t\tc0-5.65-0.39-11.62-1.18-17.91h-0.2c-0.33,2.64-2.29,5.59-5.88,8.87c-2.55,1.67-5.06,2.5-7.55,2.5h-1.18\n\t\tc-5.36,0-9.77-3.6-13.23-10.81c-1.5-4.03-2.25-8.39-2.25-13.07c0-3.92,0.36-8.09,1.08-12.5c-1.63-0.11-2.45-0.73-2.45-1.86\n\t\tc0-1.08,0.55-1.91,1.67-2.5h0.59c0.59,0,1.4,0.43,2.45,1.29c0.85-0.7,1.8-1.13,2.84-1.29c1.44,0.38,2.16,1.1,2.16,2.18\n\t\tc-0.26,1.67-1.21,2.5-2.84,2.5h-0.59c-1.05,5.16-1.57,9.44-1.57,12.83c0,9.73,3.23,16.08,9.7,19.04c1.04,0.38,2.25,0.62,3.63,0.73\n\t\tc4.77,0,8.3-3.01,10.59-9.03c0.39-2.1,0.59-3.82,0.59-5.16c0-4.57-1.41-9.65-4.22-15.25c-2.16-0.16-3.23-0.94-3.23-2.34\n\t\tc0-1.08,0.59-1.86,1.76-2.34c0.46,0,1.21,0.3,2.25,0.89c0.46-1.34,1.21-2.02,2.25-2.02h0.39c1.5,0,2.51,0.94,3.04,2.82\n\t\tc0,0.32-0.39,1.05-1.18,2.18c1.31,2.26,2.91,7.61,4.8,16.05c1.5,9.2,2.25,16.99,2.25,23.39\n\t\tC389.75,161.73,385.08,171.25,375.73,171.25z", 2, "fill", "#FF00CC"], ["d", "M236.41,194.02c-0.85-0.04-1.7-0.62-2.54-1.75c-0.67,0.2-1.34,0.29-2,0.26c-1.64-0.27-2.44-0.93-2.39-1.98\n\t\tc0.69-1.76,1.87-2.6,3.52-2.52l0.64,0.03c0.47-2.04,0.72-3.21,0.73-3.52l-0.57-0.03c-0.05,1.01-1.25,1.59-3.62,1.76\n\t\tc-1.83-0.36-2.71-1.12-2.66-2.28c0.03-0.7,0.68-1.35,1.93-1.95c-0.49-0.76-0.71-1.43-0.69-2.01c0.04-0.81,0.81-1.24,2.33-1.29\n\t\tl0.49,0.02c1.92,0.36,2.85,1.16,2.79,2.4c0.23,0.01,0.45,0.06,0.63,0.15c0.66-3,1.06-6.01,1.2-9.04c0.32-6.86-1-13.16-3.94-18.9\n\t\tl-1.49,0.05c-1.7-0.08-2.74-1.06-3.12-2.94c0.04-0.93,0.89-1.47,2.56-1.63l1.69,0.31c0.63-1.41,1.42-2.09,2.36-2.05\n\t\tc1.74,0.08,2.74,1.1,2.98,3.05c-0.03,0.74-0.54,1.47-1.52,2.2c2.45,5.24,3.63,8.93,3.53,11.07c0.14,0.01,0.33,1.49,0.57,4.46\n\t\tc8.59-1.97,13.02-5.83,13.29-11.57c0.2-4.34-2.26-7.88-7.37-10.6c-2.04-0.75-3.82-1.17-5.33-1.24c-4.4,0.15-6.62,0.69-6.66,1.62\n\t\tc-0.06,1.2-1.13,1.95-3.22,2.24c-1.73-0.31-2.58-0.95-2.53-1.92l0.02-0.35c0.02-0.47,0.31-1,0.85-1.59\n\t\tc-1.3-0.56-1.92-1.31-1.88-2.24c0.43-1.18,1.38-1.74,2.84-1.68l0.92,0.04c1.92,0.44,2.86,0.91,2.84,1.41\n\t\tc2.29-0.55,4.45-0.79,6.48-0.69l1.91,0.09c5.98,0.28,10.59,3.23,13.83,8.86c0.84,2.18,1.23,4.04,1.16,5.59l-0.05,1.16\n\t\tc-0.22,4.81-3.21,8.75-8.98,11.83c-1.88,0.92-3.71,1.56-5.47,1.9l-0.01,0.17c5.18,0.24,8.58,1.95,10.18,5.13\n\t\tc0.29,0.91,0.42,1.59,0.4,2.06l-0.05,0.99c-0.12,2.6-1.96,4.67-5.53,6.22c-1.54,0.51-3.13,0.73-4.78,0.65l-1.7-0.08\n\t\tc-1.13-0.05-2.12-0.19-2.96-0.43c-0.32,0.8-0.52,2.07-0.6,3.82c1.1,0.71,1.63,1.57,1.58,2.58\n\t\tC238.54,193.37,237.69,194.08,236.41,194.02z M241.53,182.89c3.35,0.16,5.66-0.88,6.95-3.12c0.11-0.31,0.17-0.63,0.19-0.98\n\t\tc0.13-2.87-2.05-4.62-6.56-5.26c-0.57-0.03-1.37-0.02-2.41,0c-0.1,2.09-0.45,5.07-1.05,8.93\n\t\tC239.96,182.72,240.92,182.86,241.53,182.89z", 2, "fill", "#FF00CC"], ["d", "M268.03,190.83l-0.39-0.02c-0.96-0.04-1.85-1.13-2.67-3.26c-2.44-1.08-4.38-3.3-5.8-6.64c-1.82-4.26-2.6-9.14-2.34-14.64\n\t\tc0.43-9.34,3.19-16.07,8.28-20.2l2.49-1.34l-0.1-0.71c0.5-1.38,1.3-2.05,2.39-2l0.72,0.03c0.92,0.04,1.46,0.63,1.63,1.75\n\t\tc-0.02,0.36-0.35,1.01-1.01,1.95c1.06,0.77,1.58,1.42,1.55,1.96l-0.02,0.38c-0.3,0.85-0.96,1.25-1.96,1.21\n\t\tc-0.74-0.03-1.54-0.36-2.38-0.97c-2.05-0.09-3.95,2.57-5.69,8c-0.91,3.6-1.44,7.08-1.6,10.46c-0.2,9.93,1.61,16.24,5.43,18.94\n\t\tc0.09,0,0.13-0.05,0.14-0.16c0.89-1.29,1.9-1.91,3.04-1.86c1.09,0.05,1.7,0.67,1.82,1.87c-0.04,0.79-0.79,1.48-2.26,2.06\n\t\tc0.23,0.66,0.34,1.11,0.33,1.36l-0.03,0.65C269.42,190.48,268.9,190.87,268.03,190.83z M275.09,191.38l-0.39-0.02\n\t\tc-1.01-0.05-1.65-0.71-1.94-1.98c0.02-0.39,0.26-0.91,0.73-1.53c-1.15-0.74-1.7-1.48-1.67-2.24c0.04-0.83,0.69-1.28,1.97-1.37\n\t\tl0.13,0.01c0.9,0.33,1.6,0.81,2.1,1.45c1.92-0.78,3.62-3,5.1-6.68c1.26-3.65,1.99-7.49,2.17-11.51l0.05-1.02\n\t\tc0.37-8.01-0.87-13.81-3.72-17.4c-0.55-0.42-1.06-0.7-1.54-0.83c-0.54,1.24-1.35,1.83-2.44,1.78l-0.65-0.03\n\t\tc-0.96-0.04-1.53-0.59-1.7-1.64l0.02-0.43c0.03-0.61,0.6-1.11,1.71-1.49c-0.32-0.73-0.46-1.35-0.44-1.86\n\t\tc0.04-0.97,0.79-1.42,2.23-1.36c0.87,0.04,1.56,0.76,2.07,2.15c2.62,1.02,4.77,3.35,6.44,7c1.88,4.73,2.7,9.81,2.45,15.24\n\t\tc-0.43,9.34-3.23,15.95-8.4,19.81c-0.99,0.49-1.59,0.74-1.81,0.73C277.44,190.37,276.62,191.45,275.09,191.38z", 2, "fill", "#FF00CC"], ["d", "M294.14,195.23c-1.22-0.06-1.95-0.88-2.18-2.48l0.02-0.38c-0.66,0.15-1.1,0.22-1.32,0.21l-1.05-0.05\n\t\tc-1.14-0.05-1.8-0.79-2-2.2c0.06-1.29,1.3-2.06,3.72-2.31c0.87,0.04,1.75,0.37,2.65,0.99c2.83-2.6,5.55-6.42,8.14-11.45\n\t\tc0.01-0.14,0.18-0.59,0.52-1.33c-2.06-1.9-4.31-5.33-6.74-10.3c-2.97-8.56-4.41-13.94-4.31-16.13c-0.21-1.16-0.44-1.75-0.71-1.76\n\t\tc-1.46-0.54-2.17-1.4-2.11-2.58l0.01-0.21c0.31-0.99,0.88-1.47,1.71-1.43c0.57,0.03,1.25,0.35,2.06,0.96\n\t\tc0.81-0.54,1.63-0.79,2.46-0.75c0.83,0.04,1.4,0.57,1.7,1.59c-0.6,1.7-1.43,2.53-2.48,2.48c-0.06,1.29,0.93,5.53,2.96,12.72\n\t\tc1.56,4.03,3.35,7.45,5.37,10.24c0.87,1.12,1.34,1.68,1.43,1.69c2.45-7.63,3.9-16.13,4.33-25.51l-0.85-0.04\n\t\tc-1.09-0.05-1.76-0.77-2-2.15c0.42-1.49,1.2-2.21,2.33-2.16l0.72,0.03c0.57,0.03,1.31,0.44,2.24,1.24c0.73-0.61,1.53-0.9,2.4-0.86\n\t\tc0.74,0.03,1.26,0.71,1.55,2.02c-0.38,1.71-1.41,2.53-3.07,2.45l-0.15,3.23c-0.39,8.44-2.04,16.63-4.94,24.56l0.45,0.29\n\t\tc0.76-0.4,1.32-0.59,1.67-0.57l0.65,0.03c1.05,0.05,1.61,0.65,1.69,1.81c-0.06,1.22-1.02,1.79-2.9,1.7\n\t\tc-0.08,1.65-0.73,2.45-1.95,2.4c-1-0.23-1.48-0.54-1.47-0.93l-0.26-0.01c-1.67,4.03-4.33,7.56-7.97,10.6\n\t\tc0.53,0.78,0.79,1.42,0.76,1.93l-0.02,0.48C297.14,194.34,296.12,194.99,294.14,195.23z", 2, "fill", "#FF00CC"], ["d", "M335.33,193.08c-6.29-0.29-12.29-3.95-18-10.99l-0.13-0.01c-0.28,0.42-0.88,0.61-1.8,0.57c-1.14-0.05-1.9-0.95-2.3-2.7\n\t\tc0.04-0.79,0.65-1.19,1.83-1.21c0.57,0.03,1.15,0.09,1.76,0.19l0.03-0.59c0.25-1.61,0.96-2.39,2.14-2.33l0.52,0.02\n\t\tc1.18,0.05,1.91,0.79,2.2,2.21l-0.02,0.54c-0.02,0.4-0.44,0.9-1.25,1.51c4.57,6.26,9.21,9.5,13.93,9.72l1.11,0.05\n\t\tc3.45,0.16,6.4-1.31,8.87-4.4c0.61-0.94,0.94-1.86,0.98-2.76l0.04-0.86c0.15-3.31-2.66-6.35-8.44-9.14\n\t\tc-0.13-0.08-0.3-0.12-0.52-0.13c-0.02,0.5-0.67,0.82-1.95,0.94c-1.31-0.06-2.19-1-2.63-2.82c0.34-0.81,1.41-1.18,3.2-1.09\n\t\tl-0.06-1.46c0.28-1.25,0.94-1.85,1.99-1.8l0.39,0.02c1.73,0.33,2.57,1.09,2.52,2.28l-0.01,0.32c-0.02,0.5-0.33,0.98-0.92,1.42\n\t\tc6.93,3.31,10.29,7.37,10.07,12.19l-0.02,0.43c-0.2,4.24-3.12,7.4-8.77,9.48C338.09,192.99,336.51,193.13,335.33,193.08z\n\t\t M330.39,170.71l-0.26-0.01c-1.49-0.07-2.41-0.98-2.76-2.72c0.02-0.54,0.38-1.08,1.06-1.63l0-0.11c-4.73-2.77-7.93-6.49-9.59-11.14\n\t\tc-0.38-1.28-0.54-2.6-0.47-3.97c0.23-5.03,3.6-8.26,10.1-9.69c1.32-0.26,2.6-0.37,3.82-0.31l1.11,0.05\n\t\tc6.07,0.28,11.28,3.92,15.64,10.93c0.16,0.26,0.24,0.44,0.24,0.55c0.67-0.26,1.18-0.38,1.53-0.36c1.18,0.05,1.91,0.83,2.19,2.32\n\t\tc-0.06,1.26-0.63,1.86-1.72,1.81l-2.01-0.53c-0.6,1.7-1.45,2.52-2.54,2.47c-1.57-0.07-2.43-0.98-2.57-2.71\n\t\tc0.04-0.93,0.64-1.57,1.79-1.91l0.01-0.22c-3.66-6.07-8.08-9.23-13.28-9.47c-3.58-0.17-6.61,1.04-9.09,3.63\n\t\tc-0.71,1.08-1.13,2.25-1.28,3.51c-0.18,3.99,2.74,8.41,8.77,13.26c0.55-0.55,1.11-0.81,1.68-0.79l0.26,0.01\n\t\tc1.4,0.06,2.25,0.91,2.57,2.55c-0.04,0.79-0.69,1.21-1.96,1.26l-1.18-0.05l-0.07,1.56C332.06,170.19,331.4,170.75,330.39,170.71z", 2, "fill", "#FF00CC"], [1, "club"], [1, "bones"]], template: function LogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "path", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "path", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "path", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "path", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "g");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "path", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "path", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "path", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "path", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h4", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Bones");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h4", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Club");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  display: grid;\n  grid-template-areas: \"logo .\" \"logo club\";\n  grid-template-columns: -webkit-max-content -webkit-max-content;\n  grid-template-columns: max-content max-content;\n  grid-template-rows: -webkit-max-content -webkit-max-content;\n  grid-template-rows: max-content max-content;\n  row-gap: 0px;\n  transform: translateY(-12.5%) translateX(5%);\n  max-height: 30rem;\n  justify-self: center;\n  pointer-events: none !important;\n}\n[_nghost-%COMP%]   *[_ngcontent-%COMP%] {\n  pointer-events: none !important;\n}\n[_nghost-%COMP%]   svg[_ngcontent-%COMP%] {\n  grid-area: logo;\n  transform: scale(2);\n  filter: drop-shadow(0px 0px 10px #FF00CC);\n  animation: shine 4s infinite;\n}\n[_nghost-%COMP%]   h4[_ngcontent-%COMP%] {\n  filter: none !important;\n  font-weight: 100;\n  font-size: 3rem;\n}\n[_nghost-%COMP%]   span.club[_ngcontent-%COMP%] {\n  transform: translate(-165%, -155%);\n  grid-area: club;\n  display: grid;\n  grid-template-areas: \"bones bones\" \". club\";\n  grid-template-columns: -webkit-max-content -webkit-max-content;\n  grid-template-columns: max-content max-content;\n  grid-template-rows: -webkit-max-content -webkit-max-content;\n  grid-template-rows: max-content max-content;\n}\n[_nghost-%COMP%]   span.club[_ngcontent-%COMP%]   h4.bones[_ngcontent-%COMP%] {\n  grid-area: bones;\n}\n[_nghost-%COMP%]   span.club[_ngcontent-%COMP%]   h4.club[_ngcontent-%COMP%] {\n  grid-area: club;\n  transform: translateY(-25%);\n}\n@media (max-width: 540px) {\n  [_nghost-%COMP%] {\n    transform: scale(1.5) translate(10px, 0px);\n    max-height: 40rem;\n  }\n}\n@media (max-width: 410px) {\n  [_nghost-%COMP%] {\n    transform: scale(1.75) translate(10px, 10px);\n    max-height: 45rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxsb2dvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHlDQUNBO0VBRUEsOERBQUE7RUFBQSw4Q0FBQTtFQUNBLDJEQUFBO0VBQUEsMkNBQUE7RUFDQSxZQUFBO0VBQ0EsNENBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsK0JBQUE7QUFESjtBQUVJO0VBQ0ksK0JBQUE7QUFBUjtBQUVJO0VBQ0ksZUFBQTtFQUNBLG1CQUFBO0VBQ0EseUNBQUE7RUFDQSw0QkFBQTtBQUFSO0FBRUk7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUFSO0FBRUk7RUFDSSxrQ0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsMkNBQ0E7RUFFQSw4REFBQTtFQUFBLDhDQUFBO0VBQ0EsMkRBQUE7RUFBQSwyQ0FBQTtBQUZSO0FBR1E7RUFDSSxnQkFBQTtBQURaO0FBR1E7RUFDSSxlQUFBO0VBQ0EsMkJBQUE7QUFEWjtBQUlJO0VBM0NKO0lBNENRLDBDQUFBO0lBQ0EsaUJBQUE7RUFETjtBQUNGO0FBRUk7RUEvQ0o7SUFnRFEsNENBQUE7SUFDQSxpQkFBQTtFQUNOO0FBQ0YiLCJmaWxlIjoibG9nby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAnbG9nbyAuJ1xyXG4gICAgJ2xvZ28gY2x1Yic7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6bWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IG1heC1jb250ZW50O1xyXG4gICAgcm93LWdhcDowcHg7XHJcbiAgICB0cmFuc2Zvcm06dHJhbnNsYXRlWSgtMTIuNSUpIHRyYW5zbGF0ZVgoNSUpO1xyXG4gICAgbWF4LWhlaWdodDozMHJlbTtcclxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgKiB7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgc3ZnIHtcclxuICAgICAgICBncmlkLWFyZWE6bG9nbztcclxuICAgICAgICB0cmFuc2Zvcm06c2NhbGUoMik7XHJcbiAgICAgICAgZmlsdGVyOmRyb3Atc2hhZG93KDBweCAwcHggMTBweCAjRkYwMENDKTtcclxuICAgICAgICBhbmltYXRpb246IHNoaW5lIDRzIGluZmluaXRlO1xyXG4gICAgfVxyXG4gICAgaDQge1xyXG4gICAgICAgIGZpbHRlcjpub25lIWltcG9ydGFudDtcclxuICAgICAgICBmb250LXdlaWdodDoxMDA7XHJcbiAgICAgICAgZm9udC1zaXplOjNyZW07XHJcbiAgICB9XHJcbiAgICBzcGFuLmNsdWIge1xyXG4gICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUoLTE2NSUsIC0xNTUlKTtcclxuICAgICAgICBncmlkLWFyZWE6Y2x1YjtcclxuICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgICAnYm9uZXMgYm9uZXMnXHJcbiAgICAgICAgJy4gY2x1Yic7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtYXgtY29udGVudCBtYXgtY29udGVudDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IG1heC1jb250ZW50IG1heC1jb250ZW50O1xyXG4gICAgICAgIGg0LmJvbmVzIHtcclxuICAgICAgICAgICAgZ3JpZC1hcmVhOmJvbmVzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNC5jbHViIHtcclxuICAgICAgICAgICAgZ3JpZC1hcmVhOmNsdWI7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGVZKC0yNSUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOjU0MHB4KSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDEuNSkgdHJhbnNsYXRlKDEwcHgsIDBweCk7XHJcbiAgICAgICAgbWF4LWhlaWdodDo0MHJlbTtcclxuICAgIH1cclxuICAgIEBtZWRpYSAobWF4LXdpZHRoOjQxMHB4KSB7XHJcbiAgICAgICAgdHJhbnNmb3JtOnNjYWxlKDEuNzUpIHRyYW5zbGF0ZSgxMHB4LCAxMHB4KTtcclxuICAgICAgICBtYXgtaGVpZ2h0OjQ1cmVtO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logo',
                templateUrl: './logo.component.html',
                styleUrls: ['./logo.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "t2Pu":
/*!************************************************!*\
  !*** ./src/app/faq-page/faq-page.component.ts ***!
  \************************************************/
/*! exports provided: FaqPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPageComponent", function() { return FaqPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../project.service */ "QvXa");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _faq_item_faq_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./faq-item/faq-item.component */ "ZmE3");





function FaqPageComponent_app_faq_item_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-faq-item", 4);
} if (rf & 2) {
    const faqItem_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("answer", faqItem_r1.answer)("question", faqItem_r1.question);
} }
class FaqPageComponent {
    constructor(projectService) {
        this.projectService = projectService;
        this.faqItems = this.projectService.faqs;
    }
    ngOnInit() {
    }
}
FaqPageComponent.ɵfac = function FaqPageComponent_Factory(t) { return new (t || FaqPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"])); };
FaqPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FaqPageComponent, selectors: [["app-faq-page"]], decls: 7, vars: 1, consts: [[1, "heading"], [1, "shine"], [1, "faq-items"], [3, "answer", "question", 4, "ngFor", "ngForOf"], [3, "answer", "question"]], template: function FaqPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Discover our");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h5", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "FAQS");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, FaqPageComponent_app_faq_item_6_Template, 1, 2, "app-faq-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.faqItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _faq_item_faq_item_component__WEBPACK_IMPORTED_MODULE_3__["FaqItemComponent"]], styles: ["[_nghost-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-auto-rows: -webkit-max-content;\n  grid-auto-rows: max-content;\n  justify-content: center;\n  justify-items: center;\n  align-self: center;\n  row-gap: 2rem;\n}\n[_nghost-%COMP%]   *[_ngcontent-%COMP%] {\n  max-width: 100%;\n  max-height: 100%;\n}\n[_nghost-%COMP%]   span.heading[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-areas: \"h2 h5\";\n  grid-template-columns: -webkit-max-content -webkit-max-content;\n  grid-template-columns: max-content max-content;\n  grid-template-rows: -webkit-max-content;\n  grid-template-rows: max-content;\n  align-items: center;\n  align-content: center;\n  column-gap: 0.5rem;\n}\n[_nghost-%COMP%]   span.heading[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  grid-area: h5;\n  z-index: 2;\n  font-size: 7rem;\n  font-weight: 100;\n  align-self: center;\n  transform: translateY(10%);\n}\n[_nghost-%COMP%]   span.heading[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  grid-area: h2;\n  z-index: 1;\n}\n[_nghost-%COMP%]   div.faq-items[_ngcontent-%COMP%] {\n  align-self: start;\n  max-width: 100%;\n  max-height: 100vh;\n  min-width: 100%;\n  min-height: 50vh;\n  justify-self: start;\n  display: grid;\n  grid-auto-flow: row;\n  grid-auto-columns: 1fr;\n  grid-auto-rows: -webkit-max-content;\n  grid-auto-rows: max-content;\n  row-gap: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGZhcS1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBS0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsbUNBQUE7RUFBQSwyQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7QUFISjtBQVBJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0FBU1I7QUFBSTtFQUNJLGFBQUE7RUFDQSw0QkFDQTtFQUNBLDhEQUFBO0VBQUEsOENBQUE7RUFDQSx1Q0FBQTtFQUFBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0FBQ1I7QUFBUTtFQUNJLGFBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQkFBQTtBQUVaO0FBQVE7RUFDSSxhQUFBO0VBQ0EsVUFBQTtBQUVaO0FBQ0k7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtFQUFBLDJCQUFBO0VBQ0EsYUFBQTtBQUNSIiwiZmlsZSI6ImZhcS1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgbWF4LXdpZHRoOjEwMCU7XHJcbiAgICBtYXgtaGVpZ2h0OjEwMCU7XHJcbiAgICAqIHtcclxuICAgICAgICBtYXgtd2lkdGg6MTAwJTtcclxuICAgICAgICBtYXgtaGVpZ2h0OjEwMCU7XHJcbiAgICB9XHJcbiAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdyaWQtYXV0by1yb3dzOiBtYXgtY29udGVudDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgcm93LWdhcDoycmVtO1xyXG4gICAgc3Bhbi5oZWFkaW5nIHtcclxuICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczpcclxuICAgICAgICAnaDIgaDUnO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWF4LWNvbnRlbnQgbWF4LWNvbnRlbnQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICBjb2x1bW4tZ2FwOjAuNXJlbTtcclxuICAgICAgICBoNSB7XHJcbiAgICAgICAgICAgIGdyaWQtYXJlYTpoNTtcclxuICAgICAgICAgICAgei1pbmRleDoyO1xyXG4gICAgICAgICAgICBmb250LXNpemU6N3JlbTtcclxuICAgICAgICAgICAgZm9udC13ZWlnaHQ6MTAwO1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMCUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICAgIGdyaWQtYXJlYTpoMjtcclxuICAgICAgICAgICAgei1pbmRleDoxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRpdi5mYXEtaXRlbXMge1xyXG4gICAgICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xyXG4gICAgICAgIG1heC13aWR0aDoxMDAlO1xyXG4gICAgICAgIG1heC1oZWlnaHQ6MTAwdmg7XHJcbiAgICAgICAgbWluLXdpZHRoOjEwMCU7XHJcbiAgICAgICAgbWluLWhlaWdodDo1MHZoO1xyXG4gICAgICAgIGp1c3RpZnktc2VsZjpzdGFydDtcclxuICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgZ3JpZC1hdXRvLWZsb3c6IHJvdztcclxuICAgICAgICBncmlkLWF1dG8tY29sdW1uczogMWZyO1xyXG4gICAgICAgIGdyaWQtYXV0by1yb3dzOm1heC1jb250ZW50O1xyXG4gICAgICAgIHJvdy1nYXA6MnJlbTtcclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FaqPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-faq-page',
                templateUrl: './faq-page.component.html',
                styleUrls: ['./faq-page.component.scss']
            }]
    }], function () { return [{ type: _project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"] }]; }, null); })();


/***/ }),

/***/ "unvm":
/*!*******************************************************!*\
  !*** ./src/app/view-vip-page/view-vip-page.module.ts ***!
  \*******************************************************/
/*! exports provided: ViewVipPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewVipPageModule", function() { return ViewVipPageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _view_vip_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-vip-page.component */ "ZL7e");
/* harmony import */ var _vip_page_vip_box_vip_box_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vip-page/vip-box/vip-box.module */ "mKF4");





class ViewVipPageModule {
}
ViewVipPageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ViewVipPageModule });
ViewVipPageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ViewVipPageModule_Factory(t) { return new (t || ViewVipPageModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _vip_page_vip_box_vip_box_module__WEBPACK_IMPORTED_MODULE_3__["VipBoxModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ViewVipPageModule, { declarations: [_view_vip_page_component__WEBPACK_IMPORTED_MODULE_2__["ViewVipPageComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _vip_page_vip_box_vip_box_module__WEBPACK_IMPORTED_MODULE_3__["VipBoxModule"]], exports: [_view_vip_page_component__WEBPACK_IMPORTED_MODULE_2__["ViewVipPageComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewVipPageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_view_vip_page_component__WEBPACK_IMPORTED_MODULE_2__["ViewVipPageComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _vip_page_vip_box_vip_box_module__WEBPACK_IMPORTED_MODULE_3__["VipBoxModule"]
                ],
                exports: [
                    _view_vip_page_component__WEBPACK_IMPORTED_MODULE_2__["ViewVipPageComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "uvhv":
/*!***********************************!*\
  !*** ./src/app/nav/nav.module.ts ***!
  \***********************************/
/*! exports provided: NavModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavModule", function() { return NavModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav.component */ "izVM");
/* harmony import */ var _socials_socials_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../socials/socials.module */ "lmfK");
/* harmony import */ var _corner_logo_corner_logo_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../corner-logo/corner-logo.module */ "vxE0");






class NavModule {
}
NavModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NavModule });
NavModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NavModule_Factory(t) { return new (t || NavModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _socials_socials_module__WEBPACK_IMPORTED_MODULE_3__["SocialsModule"],
            _corner_logo_corner_logo_module__WEBPACK_IMPORTED_MODULE_4__["CornerLogoModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NavModule, { declarations: [_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _socials_socials_module__WEBPACK_IMPORTED_MODULE_3__["SocialsModule"],
        _corner_logo_corner_logo_module__WEBPACK_IMPORTED_MODULE_4__["CornerLogoModule"]], exports: [_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _socials_socials_module__WEBPACK_IMPORTED_MODULE_3__["SocialsModule"],
                    _corner_logo_corner_logo_module__WEBPACK_IMPORTED_MODULE_4__["CornerLogoModule"]
                ],
                exports: [
                    _nav_component__WEBPACK_IMPORTED_MODULE_2__["NavComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _view_vip_page_view_vip_page_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view-vip-page/view-vip-page.module */ "unvm");
/* harmony import */ var _view_vip_page_view_vip_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view-vip-page/view-vip-page.component */ "ZL7e");






const routes = [
    { path: 'view-vip/:id', component: _view_vip_page_view_vip_page_component__WEBPACK_IMPORTED_MODULE_3__["ViewVipPageComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes), _view_vip_page_view_vip_page_module__WEBPACK_IMPORTED_MODULE_2__["ViewVipPageModule"]], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"], _view_vip_page_view_vip_page_module__WEBPACK_IMPORTED_MODULE_2__["ViewVipPageModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes), _view_vip_page_view_vip_page_module__WEBPACK_IMPORTED_MODULE_2__["ViewVipPageModule"]],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vxE0":
/*!***************************************************!*\
  !*** ./src/app/corner-logo/corner-logo.module.ts ***!
  \***************************************************/
/*! exports provided: CornerLogoModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CornerLogoModule", function() { return CornerLogoModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _corner_logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./corner-logo.component */ "wd5C");




class CornerLogoModule {
}
CornerLogoModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: CornerLogoModule });
CornerLogoModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function CornerLogoModule_Factory(t) { return new (t || CornerLogoModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CornerLogoModule, { declarations: [_corner_logo_component__WEBPACK_IMPORTED_MODULE_2__["CornerLogoComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_corner_logo_component__WEBPACK_IMPORTED_MODULE_2__["CornerLogoComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CornerLogoModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_corner_logo_component__WEBPACK_IMPORTED_MODULE_2__["CornerLogoComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _corner_logo_component__WEBPACK_IMPORTED_MODULE_2__["CornerLogoComponent"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "wd5C":
/*!******************************************************!*\
  !*** ./src/app/corner-logo/corner-logo.component.ts ***!
  \******************************************************/
/*! exports provided: CornerLogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CornerLogoComponent", function() { return CornerLogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CornerLogoComponent {
    constructor() { }
    ngOnInit() {
    }
}
CornerLogoComponent.ɵfac = function CornerLogoComponent_Factory(t) { return new (t || CornerLogoComponent)(); };
CornerLogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CornerLogoComponent, selectors: [["app-corner-logo"]], decls: 2, vars: 0, consts: [["width", "62", "height", "76", "xmlns", "http://www.w3.org/2000/svg", 0, "xmlns", "xlink", "http://www.w3.org/1999/xlink", "viewBox", "36 22 62 76"], [0, "xlink", "href", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD4AAABMCAYAAAA1KwSOAAAAAXNSR0IArs4c6QAAEDdJREFUeF61nAfUPUlRxe9VFAGRoCRhkSB5RYJIFJacc1AQFAQxECSIILgCgiiSo7ACEiQq4JJlyS6wJAXFjIGogCuiCCLI9fyG7me/fj0vfv865zt7/vNmerq6q6tu3apZ6xhLku+TdEtJPyTpgpLOL+lckr5T0rc2r/83SZ+T9ElJfynpzySdavtvj8UUfdSDJmHMyxdlUfgHD3zHpyS9VtKLJJ1mOweONz1+JIonOYOk6xRlbyHpAkcxucEYWMITJP2e7f855B0HK57k5pJ+S9IlD5nIjs/+k6QH2n7Vjs8tbt9b8SSXkvQMSdfe8uWfkfR35e9vyn//u5x5zv1FJV1C0qUlfdeWY/6RpJ+yzdg7yc6KJzmjpF+R9GBJ3zbzti9LerGkt0lCyY/Z/s9tZlZ8xMUl/XBZ1OtvODo4xZ+0/bptxq/37KR4kh/gfEm67MxL/lHSkyS9wPZ/7DKRdfcmuYKkH5V0Z0nfO7j3G5J+yTbnfyvZWvEk9yim/e2DkQk5vybp5ba/vtWb97ipONHbFGtjMXp5rO2HbDP0RsWToOjTJf30YEDi7q9Keu46hZN8Twlrx5fYzQ5hEV+Q9HlJnNFPbLto5TjcVtLjJF2om9dWyq9VPAkg4w8k3XCg9O8U8/r3/rfiB25QwtsJxXFt2oj/lfQPkj4i6UPFP3zINteHUub3G5Lu3d3wi5vMflbxJGeT9ObiZNpx/0XSXWy/ZaAwyIxJ3F3SOTdpusXvWMSrJT3f9h+vWQDO/+9KOlO5B4u6te3XzD0zVDwJA7x+EKreJen2tjHxhSQh/DxC0s9LwuuP5GslhH1MEj4Bb4+JEwG+ozitK0rCUr5/MMCfSHrknDJJriUJRWsoxBIvZ/vjo8msKF7Oz0sk/Vj3AJDxHj1iSoIpv1DScYMXoBxHgl37+Dqz7RYSmIvl3GWwkKeUeXxiYHHMBSutYfY0SdcYvXekOPH5N7tBn8Vu9jg5CZN7cpds8ChmyRhvPARbJwHYcIZZgFa+KOkOtlFySZL8nKRnNhdBeE/s71tSvMTL90kCe1d5Bbs/UJqwwaRa+WtJD7D9xhlz3+tykh/hnEu6SDPA7DlOwjG9SbmXo3QZ28DchSwUT0KKyDlqwcmHJV3dNg8vJMkdJXEcquB5f52/Q5OHuZUpHvy3C4ipt+E3MOX3d/MjFQYeV5N/pe3bzSnem8hXi3NgF1ulSUb+tDgkrhOHb2P71HXbmYR4i/MDgHyp/OGA/krSX5SUc+ldo/GS3K9kaN9SfgctHj/YHMwdnaqwge+p/5h2vIAUYihnqsqJth/dKc39PHyVcv3vJV2vN6PuGXA3qO72kupk59YIj09YeqbtFXxQH0rynBIy66VH2H5k914SnnYhcXQozxH5Zj6e5K7lhfVZYvVFbH+lGwxP/9JyjZB2Fdus+IoU0wRZgfhapmWdYdTfSDxwSpzr0djgBRapmjLx/jjb/9XNFyu8enPtljUcVsXfIYk4WAXAz6QXUsIcRACmzqqdMAcqkvAykpkeTn6wZG1YDQt39sLWXFfSjQegh7T3PqPIkOQpku7bTJEMjbDazvlBhSuo155he0J5TkK2A71THR3Mxvlt/2s3COlhDR9Ptn3/md0ARRHz25T1ZMzdNs5zKEm4H/Bynw4iP8o2+cCSJDlfcWBnKT+8yjb4vVX8csUf1WtAYLi/SXFSPSZa5c22V7B5Eu7hXmLohUZnMAmkBORAVfqfJd11FG/XLACoEcuq1oJ1Xdk21tIrDy/wqHLxs7bP2ynOPHCkNaP8su1poVD82ZLu2TywEvBLOnh6gYNPsY1n7SfBhIGilW/7qKTr9vB2TuFuwoSe32+uAYRqXG53lHeCDitqPJ9t/FN7D0lPG6LPbfvzKA7KukZz77Vsg8nbh/Hi7y0XcGiAnF5xnNhJ5SLHBJz86W0UHd2TBGh6vfIbzOoFbXMk+/fC5P5huUhMf3c3d8DUjZprV+TIoTgrdJ7mh++2jVdtFa9OAvro7DUkdPdA/N26XLunbTD63pLkwpKwmjOXQeDWCHUrUqyWyHRZ21hAO3cWhcWpcm3b70BxgEo9A1+zvcKwJMFbgpffa/tqMy+vkYGQcl7bnK2DJAnpLTEbeajtHiJPPxTUebZ+w8pvveK3sn0yircE/em2YUuWJAmOhZRxBfrVG5OQnxOW3mKbCHAkUigv8MRL9kl4kryd0NtMBr/ztl7xL9omtvaKf1bSuQuJiEmtSIOmTrL9M0ei9cwgSUCDLDIL8qbeobWPJQFgtXjiqrZP6039S7bPOlC8WsVLbd9pRnHiOunf82xjosdEkvAeUt56JDla5AqjFJXQhV9qs1AwymdQvF+RswwAf3WA77Tdms1CuUIogpc/OOeENq1Ekl+QdGIBVEQb0kuOztfLOQbJjawJvHBh2/irdk6Utd7aXFocZRQndJHvVrm0bTKmdoCnUbEo8PF5mxTY5/ck15T0zsGzQFsyrcuURGdu+JvafkM3b8ANIKfKa2xPHh7F+0znJ2y3SG4fPaZnkvASLIQzCeIDfi4tah08yStLyrrv+4DED+8U78HL3Wrig+IAfQB/lZNt32rT20v2xS5wjkghP9JyWwMKiCEhNEgNIThai+IMMsa2NbPR9F5mG4KkLjq1PaBvFbAJGdxEqqB4i8q4Bptysbl0s+wkZCDhqw19kH93JmObUbpO4N22W6SIZQBzaQg4RN5quyI9xnwsvH8z4ENsc20SFCdXBofDo1d5um2ypKE0cb3/HQ8KR7fJq094udmdufO9y0K8y/aUWhd6HHjbcvuk0QsfUvPxmnnVFxEi8JKLyTWTJK37wC4zGtx787a6WbI6KquHyMLUZ8bDosgfJjheFcdESApaWSTt7cUk5MZLNM8es4VcoB43SRLwON675tZ7DDkxNgsaOcnjYXG6gShqTvWCqjj/xeG06RtnHVq2B/3UoW+6z8yaZx5uGx5uIUng54nj+8ol2kahwhhhyT/eDThZW0svQz68qbtpEfea3aG4cCgkXcnekgCV/3zP/plTbMPeLEkSLIgCJMRjFcLp8X1BgbSvx+I3sg2rUs0SthQHdohMOfFgoleWRFJRi3/bvAM4Df5e4Qh4OEmP3rh8Qq84Zw0nwwSqQDvDW0+Ma6GicRQkLfsIRTwc57Btq0yUVHIlZ5h52bNst/z5ym1JejL1xFHtjLAGqcBKVXmM7Yc1u36v0iywj+IPso3jmZUk+BqUh4xYJzQBwggt0eADS+rp8xfNlYnh1OhlqUKphlAwIaEkFAZIIoakxJqZkkxcfBuSopSe8fx9wbAOT4kZqmnI67dzSELZmZJSlffNKU6cnmjYInBokPGLEkwSGE1qVqPy8JzuNBTAt28tSSA1SJJaB8V8rmMbZ7hRCkgDqtZU9nMjU6ciSWmoCmHtan1hruw8K0naR2Vjk2yVA4wGKX4FMpNMi/nc0Db1tq0lCUiulsi+MVKc7qaWKKR9cs7cKs7GJ1xpzSx46RVGSHDrmf8/FIVbW6KQN41RjiZolM6LSUaKU/5dZDmlAN9y3CvvKTsCEQg70o9J9+I1ba/A3CQPKE4UM+bI0KyL81uqZW9SbNPvSWgqbsPn6SPF+xx2GHNnTJJuRAoUlG6m01CaClbifhLq6Q8djEN6SgUW4HEkMqiznTJSHJOoXDYvvnyfP6+bTTEr6mewH0+1/dT+/iR3g5tbMw4VGeDyQc2CBbZiibS3tHL/HsAAGvpWzKV0btstYAFmCg/gBM48PXTr5Ba2Mf29ZA1Hh37H9YqDl6k1tzJbwdhnRuWLhW3O8ONst0TCTq9LQis5FaBepjyhV5w4B5nQVlOeZrutQ+80gYGZ887a27ZurNfapul/Z0nCc5Sme6HRgI2cPqNYkiSAlKs2F4fdETvPpnkgCVCTTuh18mHbeOOdpEQYUFqPLZ5LVll5wZHiPVzlxcPS8E4zWla8Z1QxfQoCOD1q2kDkJ9nundLGVyZp21W4nxoeHR50TC1kLkkhI+t7UWeLdhtns2pVTA6vDrVFg86z+cwiCVVbnB5dkHt59KbAyVsZH+C0Ul6ew+pz4YYzcu++yWZXxY/i/iQAHsz5PW2Km4Q6fu3KWnRA9O8cKs5NSUgM+nZofsIs79VXLY5CmW3HKP0yFDLPIenRtik7TTLIvc9pu49U859fFSDymEHwr++AsKCbeKl7YtvJb3tfkotJ4nzSDjJ9elHo49ptCSSmHk+lht96xhgSZSWhmd3xZgUJDeTFc+nnc2yPvl7YVjcmy5cLJEbgiPvanhjfUq2BA+DdFAQpaE6N+0lggWq/zc1sv75sFoXFn21efqVR49BGxctLIO0gGElC+o/pWPFzteRCEhgaztnrbL+8WUQiBs2/oCdSy4lESAKsrN+SvNo2bZ91Qdqcm6bD+kxb8H+BJEyfEnY/v6n1Y+szPtquAgPh4OG42r4Smvf5hIPJ8t1YNS0oobM2uwTDWT/Mu5/tqWZXat6VE/+o7SnGlx1vP9taEJ9JRsToaNpLPaz1hq12vB+tmGa7EwuiPgkfztFuWWVulxZlqiQ3Kykpz9BgeKaK85PQOVU/uaqpJdXXTVi/vv+SfW2AH/ZVnH52gEH9DIMviGiVZpf4jZ2uPe/tLrU9dYtemeLA2q+GqaWRIaLgL0uii3GdkP5S4WUM8EGLPM8xakbcS/GiIN3AlYbmxZgnYYMFgYurHBk4H68MYwoSqwVFQAWdknhtys0rTYNbe8dv3kifC8VPamO1s/KTtoe02CGKtw5p3Rw5oxQI2q8edtRpcTuWROmJshboksWvdBK+B8tomxoWjvIg59Y+fEQVznULQPiink0BggQDoa/1zLXXJQllX44FQoEQa8K5Vll0QByl4tTV4cn5+r8KXDcMLdTTqBJSmwmrpVGHI/uD8G9bssDphKFTS5dy+7XwApB0DQjE97YvHiaJDogV1MZk9zb1cs77AuITbT8wCXGYDKwKveiEMkAHDgjPj5AmnlTKxHx9XFtQXmyb8z9JEkAMrR3IBFbKdXgDqrz1t3ZjZ1vLj0JxyMW2WMeq4/AAE21rx6KruPtCqI3lKMEXBdDUSx8KJMGMKTsttXAnARNQq79DZ8oUHOjeWmlsqPcdtONl1Vnx9v8DgdPh3LGzlbRcNAZ3dfA72n5Zs7MoAhHC9bZCiwkTojhGxHksirp3+1VFq/vUr9qf6/bfR6F431vO+HQ3ADBQHLqYDGmqjja0EMCEbuO+UxqkN6G18n0rsZwFgY2haYie2nUf9TzYNnzbWjlY8TJBPqGcaxHj7PK9yOKr4FJ3o2/2K0U5Yi0KEtOJ/5SmUHaloXiNNhw5Oi0WlnJMd7wojgen/YszPyecOzwt55Td50zD8rQc/qaN6n8nQaKcTP9s38Nz7He8KI9p4+X7npNdldl0P0eEReYPJnbKw3eVIzH19qVJQFBUNeccz7ZzJJbjzODkKGvBzMK8tpXcbcdaue/IFa9vKFkaH9CQl3NeqacDdiqOhkEB14PZ+SP8QQuT2aHs3oTjNqvxf0G5ZrNR6OU9AAAAAElFTkSuQmCC", "width", "62", "height", "76", "x", "36", "y", "22"]], template: function CornerLogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "svg", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "image", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  min-width: 4rem;\n  max-width: 4rem;\n  max-height: 4rem;\n  min-height: 4rem;\n  display: grid;\n  grid-template-areas: \"corner\";\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n  justify-self: center;\n  align-self: center;\n  justify-content: center;\n  align-content: center;\n  justify-items: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   svg[_ngcontent-%COMP%] {\n  min-width: 4rem;\n  max-width: 4rem;\n  max-height: 4rem;\n  min-height: 4rem;\n  grid-area: corner;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNvcm5lci1sb2dvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUNBO0VBQ0EsMEJBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQUFKO0FBQ0k7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUNSIiwiZmlsZSI6ImNvcm5lci1sb2dvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gICAgbWluLXdpZHRoOjRyZW07XHJcbiAgICBtYXgtd2lkdGg6NHJlbTtcclxuICAgIG1heC1oZWlnaHQ6NHJlbTtcclxuICAgIG1pbi1oZWlnaHQ6NHJlbTtcclxuICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAnY29ybmVyJztcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHN2ZyB7XHJcbiAgICAgICAgbWluLXdpZHRoOjRyZW07XHJcbiAgICAgICAgbWF4LXdpZHRoOjRyZW07XHJcbiAgICAgICAgbWF4LWhlaWdodDo0cmVtO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6NHJlbTtcclxuICAgICAgICBncmlkLWFyZWE6Y29ybmVyO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CornerLogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-corner-logo',
                templateUrl: './corner-logo.component.html',
                styleUrls: ['./corner-logo.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "whMc":
/*!*******************************************************************!*\
  !*** ./src/app/roadmap-page/roadmap-box/roadmap-box.component.ts ***!
  \*******************************************************************/
/*! exports provided: RoadmapBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoadmapBoxComponent", function() { return RoadmapBoxComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class RoadmapBoxComponent {
    constructor() { }
    ngOnInit() {
    }
    romanize(num) {
        if (isNaN(num)) {
            return '';
        }
        // tslint:disable-next-line:one-variable-per-declaration
        let digits = String(+num).split(''), key = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM',
            '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC',
            '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'], roman = '', i = 3;
        while (i--) {
            roman = (key[+digits.pop() + (i * 10)] || '') + roman;
        }
        return Array(+digits.join('') + 1).join('M') + roman;
    }
}
RoadmapBoxComponent.ɵfac = function RoadmapBoxComponent_Factory(t) { return new (t || RoadmapBoxComponent)(); };
RoadmapBoxComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoadmapBoxComponent, selectors: [["app-roadmap-box"]], inputs: { index: "index", text: "text" }, decls: 7, vars: 3, consts: [[1, "inner"], [1, "big-space"]], template: function RoadmapBoxComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.romanize(ctx.index), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text[0]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text[1], "\n");
    } }, styles: ["[_nghost-%COMP%] {\n  min-height: 50vh;\n  min-width: 100%;\n  display: grid;\n  grid-template-columns: 0.15fr 1fr 0.15fr;\n  grid-template-rows: 0.05fr 1fr 0.2fr;\n  grid-template-areas: \". . .\" \". inner .\" \". . .\";\n  justify-content: center;\n  justify-items: center;\n  border: 2px solid #FF00CC;\n  align-items: start;\n}\n[_nghost-%COMP%]   section.inner[_ngcontent-%COMP%] {\n  min-height: 100%;\n  grid-area: inner;\n  display: grid;\n  grid-template-areas: \"index\" \"heading\" \"text\";\n  grid-template-columns: 1fr;\n  grid-template-rows: -webkit-max-content 1fr 20vh;\n  grid-template-rows: max-content 1fr 20vh;\n  row-gap: 3rem;\n}\n[_nghost-%COMP%]   section.inner[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  grid-area: heading;\n  font-family: \"Kittaro\";\n  font-size: 3rem;\n}\n[_nghost-%COMP%]   section.inner[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%] {\n  justify-self: start;\n  text-align: left;\n  grid-area: index;\n  font-size: 5rem;\n  letter-spacing: 0.5rem;\n}\n[_nghost-%COMP%]   section.inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  grid-area: text;\n  text-align: left;\n  text-transform: unset;\n  font-weight: 100;\n  font-size: 1rem;\n}\n@media (max-width: 820px) {\n  [_nghost-%COMP%]   section.inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 2rem;\n  }\n}\n@media (max-width: 410px) {\n  [_nghost-%COMP%]   section.inner[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 3rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxyb2FkbWFwLWJveC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSx3Q0FBQTtFQUNBLG9DQUFBO0VBQ0EsZ0RBQ0E7RUFHQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQUZKO0FBR0k7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDZDQUNBO0VBR0EsMEJBQUE7RUFDQSxnREFBQTtFQUFBLHdDQUFBO0VBQ0EsYUFBQTtBQUpSO0FBS1E7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtBQUhaO0FBS1E7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFIWjtBQUtRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFIWjtBQUlZO0VBTko7SUFPUSxlQUFBO0VBRGQ7QUFDRjtBQUVZO0VBVEo7SUFVUSxlQUFBO0VBQ2Q7QUFDRiIsImZpbGUiOiJyb2FkbWFwLWJveC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICAgIG1pbi1oZWlnaHQ6NTB2aDtcclxuICAgIG1pbi13aWR0aDoxMDAlO1xyXG4gICAgZGlzcGxheTpncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAwLjE1ZnIgMWZyIDAuMTVmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMC4wNWZyIDFmciAwLjJmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6XHJcbiAgICAnLiAuIC4nXHJcbiAgICAnLiBpbm5lciAuJ1xyXG4gICAgJy4gLiAuJztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgYm9yZGVyOjJweCBzb2xpZCAjRkYwMENDO1xyXG4gICAgYWxpZ24taXRlbXM6c3RhcnQ7XHJcbiAgICBzZWN0aW9uLmlubmVyIHtcclxuICAgICAgICBtaW4taGVpZ2h0OjEwMCU7XHJcbiAgICAgICAgZ3JpZC1hcmVhOmlubmVyO1xyXG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAgICdpbmRleCdcclxuICAgICAgICAnaGVhZGluZydcclxuICAgICAgICAndGV4dCc7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtYXgtY29udGVudCAxZnIgMjB2aDtcclxuICAgICAgICByb3ctZ2FwOjNyZW07XHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgICBncmlkLWFyZWE6aGVhZGluZztcclxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdLaXR0YXJvJztcclxuICAgICAgICAgICAgZm9udC1zaXplOjNyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg1IHtcclxuICAgICAgICAgICAganVzdGlmeS1zZWxmOiBzdGFydDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgZ3JpZC1hcmVhOmluZGV4O1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDVyZW07XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjVyZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgICBncmlkLWFyZWE6dGV4dDtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdW5zZXQ7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OjEwMDtcclxuICAgICAgICAgICAgZm9udC1zaXplOjFyZW07XHJcbiAgICAgICAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA4MjBweCkge1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOjJyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQxMHB4KSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6M3JlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoadmapBoxComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-roadmap-box',
                templateUrl: './roadmap-box.component.html',
                styleUrls: ['./roadmap-box.component.scss']
            }]
    }], function () { return []; }, { index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ybZN":
/*!****************************************************!*\
  !*** ./src/app/background/background.component.ts ***!
  \****************************************************/
/*! exports provided: BackgroundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackgroundComponent", function() { return BackgroundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var iphone_inline_video__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! iphone-inline-video */ "0v7F");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../project.service */ "QvXa");




const _c0 = ["videoEle"];
const _c1 = ["backgroundEle"];
class BackgroundComponent {
    constructor(renderer, projectService) {
        this.renderer = renderer;
        this.projectService = projectService;
        this.videoPlaying = false;
        this.zTransform = 0;
        this.yTransform = 0;
        this.xTransform = 0;
        this.lastMovement = new Date().getTime();
    }
    // @ViewChild('pinkBackgroundEle') private pinkBackgroundEle: ElementRef;
    onMouseWheel(event) {
        this.scrollElement(event.deltaY, event.deltaX);
    }
    ngOnInit() {
        //     webView.configuration.allowsInlineMediaPlayback = true
        // if #available(iOS 10.0, *) {
        //     webConfiguration.mediaTypesRequiringUserActionForPlayback = []
        // } else {
        //     // Fallback on earlier versions
        //     webConfiguration.mediaPlaybackRequiresUserAction = false
        // }
        const video = document.querySelector('video');
        Object(iphone_inline_video__WEBPACK_IMPORTED_MODULE_1__["default"])(video);
    }
    scrollElement(deltaY, deltaX) {
        if (this.lastMovement - new Date().getTime() > -500) {
            return;
        }
        this.lastMovement = new Date().getTime();
        const element = this.backgroundEle.nativeElement;
        this.zTransform += (deltaY / 2);
        if (this.zTransform > 30) {
            this.zTransform = 0;
        }
        else if (this.zTransform <= -19) {
            this.zTransform = 10;
        }
        this.renderer.setStyle(element, 'transform', `translateZ(${this.zTransform}vw) translate3d(0,0,${this.zTransform}vw)`);
        // this.xTransform += (deltaY / 2);
        // if (this.xTransform < 1) {
        //   this.xTransform = 50;
        // }
        // this.yTransform +=  (Math.random() - 0.25) * deltaY;
        // if (this.yTransform < -50) {
        //   this.yTransform = 50;
        // }
        // this.renderer.setStyle(
        //   element,
        //   'backgroundPosition',
        //   `(${this.xTransform}%) ${this.yTransform}%)`
        //   );
        // this.transforms = this.xTransform + '% ' + this.yTransform + '%';
    }
    ngAfterViewInit() {
        this.projectService.videoEle.next(this.videoEle);
        this.videoEle.nativeElement.volume = 0;
        this.videoEle.nativeElement.defaultMuted = true;
        this.videoEle.nativeElement.muted = true;
        setTimeout(() => {
            if (this.videoPlaying === false) {
                this.videoEle.nativeElement.play();
                this.renderer.setProperty(this.videoEle.nativeElement, 'play', true);
                this.show();
            }
        }, 4000);
    }
    show() {
        setTimeout(() => {
            this.renderer.addClass(this.backgroundEle.nativeElement, 'show');
        }, 1000);
    }
    play() {
        this.videoPlaying = true;
    }
}
BackgroundComponent.ɵfac = function BackgroundComponent_Factory(t) { return new (t || BackgroundComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"])); };
BackgroundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BackgroundComponent, selectors: [["app-background"]], viewQuery: function BackgroundComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.videoEle = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.backgroundEle = _t.first);
    } }, hostBindings: function BackgroundComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousewheel", function BackgroundComponent_mousewheel_HostBindingHandler($event) { return ctx.onMouseWheel($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 6, vars: 3, consts: [[2, "webkit-perspective", "100vw", "perspective", "100vw", "webkit-perspective-origin", "50%", "perspective-origin", "50%"], [1, "background"], ["backgroundEle", ""], ["src", "../../assets/images/background.webp", 3, "load", "loaded"], ["src", "../../assets/videos/floor_smoke.webm", "autoplay", "", "repeat", "", "loop", "", "muted", "", "playsinline", "", 3, "muted", "check"], ["videoEle", ""]], template: function BackgroundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("load", function BackgroundComponent_Template_img_load_3_listener() { return ctx.show(); })("loaded", function BackgroundComponent_Template_img_loaded_3_listener() { return ctx.show(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "video", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("check", function BackgroundComponent_Template_video_check_4_listener() { return ctx.play(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-position", ctx.transforms);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("muted", true);
    } }, styles: ["[_nghost-%COMP%] {\n  justify-self: center;\n  align-self: start;\n  justify-items: center;\n  align-items: center;\n  justify-content: center;\n  align-content: center;\n  min-width: 100vw;\n  max-width: 100vw;\n  min-height: 100vh;\n  max-height: 100vh;\n  display: grid;\n  grid-template-areas: \"vid1\";\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n  overflow: hidden;\n  position: fixed;\n  pointer-events: none !important;\n}\n[_nghost-%COMP%]   *[_ngcontent-%COMP%] {\n  pointer-events: none !important;\n}\n[_nghost-%COMP%]   span[_ngcontent-%COMP%] {\n  transform: translate3d(0, 0, 0);\n  webkit-backface-visibility: visible;\n  -webkit-backface-visibility: visible;\n          backface-visibility: visible;\n  display: grid;\n  grid-template-areas: \"video\";\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n  z-index: 1;\n}\n[_nghost-%COMP%]   span[_ngcontent-%COMP%]   section.background[_ngcontent-%COMP%] {\n  transform: translate3d(0, 0, 0);\n  webkit-backface-visibility: visible;\n  -webkit-backface-visibility: visible;\n          backface-visibility: visible;\n  z-index: 5;\n  justify-self: center;\n  align-self: center;\n  min-width: 100vw;\n  max-width: 100vw;\n  min-height: 100vh;\n  max-height: 100vh;\n  grid-area: video;\n  background-attachment: fixed;\n  background-position: 50% 50%;\n  background-repeat: repeat;\n  background-size: 110% auto;\n  transition: 1s;\n  opacity: 0;\n  mix-blend-mode: exclusion;\n  background-blend-mode: exclusion;\n  display: grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: 1fr;\n  justify-content: center;\n  align-content: center;\n  justify-items: center;\n  align-items: center;\n}\n[_nghost-%COMP%]   span[_ngcontent-%COMP%]   section.background[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  animation: 16s shiney infinite;\n}\n@keyframes shiney {\n  50% {\n    filter: brightness(1);\n  }\n  75% {\n    filter: brightness(1.25);\n  }\n}\n[_nghost-%COMP%]   span[_ngcontent-%COMP%]   section.background.show[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n[_nghost-%COMP%]   video[_ngcontent-%COMP%] {\n  z-index: 3;\n  grid-area: video;\n  min-width: 100vw;\n  max-width: 100vh;\n  min-height: 100vh;\n  max-height: 100vh;\n  object-fit: cover;\n  opacity: 0.5;\n  background-attachment: fixed;\n  background-position: center center;\n  background-repeat: repeat;\n  background-size: 110% auto;\n  filter: hue-rotate(99deg) brightness(1) saturate(6.5);\n  -webkit-filter: hue-rotate(99deg) brightness(1) saturate(6.5);\n}\n[_nghost-%COMP%]   .IIV[_ngcontent-%COMP%]::-webkit-media-controls-play-button, [_nghost-%COMP%]   .IIV[_ngcontent-%COMP%]::-webkit-media-controls-start-playback-button {\n  opacity: 0;\n  pointer-events: none;\n  width: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGJhY2tncm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFJQSwyQkFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQUZKO0FBR0k7RUFDSSwrQkFBQTtBQURSO0FBR0k7RUFDSSwrQkFBQTtFQUNBLG1DQUFBO0VBQ0Esb0NBQUE7VUFBQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSw0QkFDQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0FBRlI7QUFHUTtFQUNJLCtCQUFBO0VBQ0EsbUNBQUE7RUFDQSxvQ0FBQTtVQUFBLDRCQUFBO0VBQ0EsVUFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBRUEsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0NBQUE7RUFpQkEsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQWxCWjtBQUpZO0VBQ0ksOEJBQUE7QUFNaEI7QUFMZ0I7RUFDSTtJQUVJLHFCQUFBO0VBT3RCO0VBTGtCO0lBRUksd0JBQUE7RUFPdEI7QUFDRjtBQUpZO0VBQ0ksVUFBQTtBQU1oQjtBQUtJO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSw0QkFBQTtFQUNBLGtDQUFBO0VBQ0EseUJBQUE7RUFDQSwwQkFBQTtFQUNBLHFEQUFBO0VBRUEsNkRBQUE7QUFKUjtBQXNCSTs7RUFFQyxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0FBcEJMIiwiZmlsZSI6ImJhY2tncm91bmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICAgIGFsaWduLXNlbGY6IHN0YXJ0O1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG4gICAgbWluLXdpZHRoOjEwMHZ3O1xyXG4gICAgbWF4LXdpZHRoOjEwMHZ3O1xyXG4gICAgbWluLWhlaWdodDoxMDB2aDtcclxuICAgIG1heC1oZWlnaHQ6MTAwdmg7XHJcbiAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAvLyBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgLy8gJ3ZpZDEgdmlkMic7XHJcbiAgICAvLyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAuNWZyIDAuNWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogJ3ZpZDEnO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuICAgIG92ZXJmbG93OmhpZGRlbjtcclxuICAgIHBvc2l0aW9uOmZpeGVkO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgKiB7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgc3BhbiB7XHJcbiAgICAgICAgdHJhbnNmb3JtOnRyYW5zbGF0ZTNkKDAsMCwwKTtcclxuICAgICAgICB3ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOlxyXG4gICAgICAgICd2aWRlbyc7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgICAgICAgei1pbmRleDoxO1xyXG4gICAgICAgIHNlY3Rpb24uYmFja2dyb3VuZCB7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLDAsMCk7XHJcbiAgICAgICAgICAgIHdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgICAgICAgICB6LWluZGV4OjU7XHJcbiAgICAgICAgICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDoxMDB2dztcclxuICAgICAgICAgICAgbWF4LXdpZHRoOjEwMHZ3O1xyXG4gICAgICAgICAgICBtaW4taGVpZ2h0OjEwMHZoO1xyXG4gICAgICAgICAgICBtYXgtaGVpZ2h0OjEwMHZoO1xyXG4gICAgICAgICAgICBncmlkLWFyZWE6dmlkZW87XHJcbiAgICAgICAgICAgIC8vIGJhY2tncm91bmQ6dXJsKCcuLi8uLi9hc3NldHMvaW1hZ2VzL2JhY2tncm91bmQud2VicCcpO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiA1MCUgNTAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDExMCUgYXV0bztcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjoxcztcclxuICAgICAgICAgICAgb3BhY2l0eTowO1xyXG4gICAgICAgICAgICBtaXgtYmxlbmQtbW9kZTogZXhjbHVzaW9uO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWJsZW5kLW1vZGU6IGV4Y2x1c2lvbjtcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIGFuaW1hdGlvbjoxNnMgc2hpbmV5IGluZmluaXRlO1xyXG4gICAgICAgICAgICAgICAgQGtleWZyYW1lcyBzaGluZXkge1xyXG4gICAgICAgICAgICAgICAgICAgIDUwJSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOmJyaWdodG5lc3MoMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbHRlcjpicmlnaHRuZXNzKDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICA3NSUge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAtd2Via2l0LWZpbHRlcjpicmlnaHRuZXNzKDEuMjUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6YnJpZ2h0bmVzcygxLjI1KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5zaG93IHtcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6MTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHZpZGVvIHtcclxuICAgICAgICB6LWluZGV4OjM7XHJcbiAgICAgICAgZ3JpZC1hcmVhOnZpZGVvO1xyXG4gICAgICAgIG1pbi13aWR0aDoxMDB2dztcclxuICAgICAgICBtYXgtd2lkdGg6MTAwdmg7XHJcbiAgICAgICAgbWluLWhlaWdodDoxMDB2aDtcclxuICAgICAgICBtYXgtaGVpZ2h0OjEwMHZoO1xyXG4gICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgICAgIG9wYWNpdHk6MC41O1xyXG4gICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTEwJSBhdXRvO1xyXG4gICAgICAgIGZpbHRlcjogaHVlLXJvdGF0ZShcclxuICAgICAgICAgICAgOTlkZWcpIGJyaWdodG5lc3MoMSkgc2F0dXJhdGUoNi41KTtcclxuICAgICAgICAtd2Via2l0LWZpbHRlcjogaHVlLXJvdGF0ZShcclxuICAgICAgICAgICAgOTlkZWcpIGJyaWdodG5lc3MoMSkgc2F0dXJhdGUoNi41KTtcclxuICAgICAgICAvLyAgICAgYW5pbWF0aW9uOjZzIGxpZ2h0LXVwIGluZmluaXRlO1xyXG4gICAgICAgIC8vICAgICBAa2V5ZnJhbWVzIGxpZ2h0LXVwIHtcclxuICAgICAgICAvLyAgICAgICAgIDc1JSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZmlsdGVyOiBodWUtcm90YXRlKFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA5OWRlZykgYnJpZ2h0bmVzcygxKSBzYXR1cmF0ZSg2LjUpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC13ZWJraXQtZmlsdGVyOiBodWUtcm90YXRlKFxyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICA5OWRlZykgYnJpZ2h0bmVzcygxKSBzYXR1cmF0ZSg2LjUpO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgOTAlIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBmaWx0ZXI6IGh1ZS1yb3RhdGUoXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDk5ZGVnKSBicmlnaHRuZXNzKDMpIHNhdHVyYXRlKDYuNSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLXdlYmtpdC1maWx0ZXI6IGh1ZS1yb3RhdGUoXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIDk5ZGVnKSBicmlnaHRuZXNzKDMpIHNhdHVyYXRlKDYuNSk7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgIH1cclxuICAgIC5JSVY6Oi13ZWJraXQtbWVkaWEtY29udHJvbHMtcGxheS1idXR0b24sXHJcbiAgICAuSUlWOjotd2Via2l0LW1lZGlhLWNvbnRyb2xzLXN0YXJ0LXBsYXliYWNrLWJ1dHRvbiB7XHJcbiAgICAgb3BhY2l0eTogMDtcclxuICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICB3aWR0aDogNXB4O1xyXG4gfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BackgroundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-background',
                templateUrl: './background.component.html',
                styleUrls: ['./background.component.scss']
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"] }]; }, { videoEle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['videoEle']
        }], backgroundEle: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['backgroundEle']
        }], onMouseWheel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:mousewheel', ['$event']]
        }] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map