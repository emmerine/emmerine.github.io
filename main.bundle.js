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

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_reports_view_reports_component__ = __webpack_require__("./src/app/view-reports/view-reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mapview_mapview_component__ = __webpack_require__("./src/app/mapview/mapview.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'view-reports',
        component: __WEBPACK_IMPORTED_MODULE_3__view_reports_view_reports_component__["a" /* ViewReportsComponent */]
    },
    {
        path: 'mapview',
        component: __WEBPACK_IMPORTED_MODULE_4__mapview_mapview_component__["a" /* MapviewComponent */]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"site-wrapper\">\n\n  <div class=\"site-wrapper-inner\">\n\n    <div class=\"cover-container\">\n\n      <div class=\"masthead\" style=\"width:100%; left:0; background-color:#1f7872; border-top:10px solid #53A789;\">\n        <div class=\"inner\">\n          <h3 class=\"masthead-brand\" style=\"padding-left:5%\">{{title}}</h3>\n          <nav class=\"nav nav-masthead\" style=\"padding-right: 10%;\">\n            <a class=\"nav-link\" routerLink=''>Home</a>\n            <a class=\"nav-link\" routerLink='view-reports' >View Reports</a>\n            <a class=\"nav-link\" routerLink='mapview'>View Map</a>\n\n          </nav>\n        </div>\n      </div>\n\n\n      <router-outlet></router-outlet>\n\n      <div class=\"mastfoot\">\n        <div class=\"inner\" style=\"bottom:0;\">\n          <p>A dissertation project by <a href=\"\">Emma Catherine Wilson</a></p>\n        </div>\n      </div>\n\n      </div>\n\n      </div>\n\n      </div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Project-Ethics';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("./src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2__ = __webpack_require__("./node_modules/angularfire2/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__view_reports_view_reports_component__ = __webpack_require__("./src/app/view-reports/view-reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_reports_service__ = __webpack_require__("./src/app/services/reports.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__mapview_mapview_component__ = __webpack_require__("./src/app/mapview/mapview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__agm_core__ = __webpack_require__("./node_modules/@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__agm_js_marker_clusterer__ = __webpack_require__("./node_modules/@agm/js-marker-clusterer/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__view_reports_view_reports_component__["a" /* ViewReportsComponent */],
                __WEBPACK_IMPORTED_MODULE_11__mapview_mapview_component__["a" /* MapviewComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].firebase, 'ProjectEthics'),
                __WEBPACK_IMPORTED_MODULE_4_angularfire2_firestore__["b" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_10__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_12__agm_core__["a" /* AgmCoreModule */].forRoot({
                    apiKey: 'AIzaSyCrp7d5717SPzMgoQgp6zu96kdtWK3hQmw'
                }),
                __WEBPACK_IMPORTED_MODULE_13__agm_js_marker_clusterer__["a" /* AgmJsMarkerClustererModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_9__services_reports_service__["a" /* ReportsService */], { provide: __WEBPACK_IMPORTED_MODULE_14__angular_common__["g" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_14__angular_common__["d" /* HashLocationStrategy */] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "      <div class=\"inner cover\">\n        <h3 class=\"cover-heading\">Create a Report</h3>\n        <div class=\"wrapContainer\">\n        <form #myForm=\"ngForm\" (ngSubmit)=\"onSubmit();\">\n            <div class=\"form-group\">\n              <label for=\"locationSelect\">Location:</label>\n              <select class=\"form-control\" id=\"locationSelect\"  [ngModel]=\"'Select your location...'\" (ngModelChange)=\"report.location = $event\"  name=\"location\">\n                <option default disabled>Select your location...</option>\n                <optgroup label=\"England\">\n                  <option>Bedfordshire</option>\n                  <option>Berkshire</option>\n                  <option>Bristol</option>\n                  <option>Buckinghamshire</option>\n                  <option>Cambridgeshire</option>\n                  <option>Cheshire</option>\n                  <option>City of London</option>\n                  <option>Cornwall</option>\n                  <option>Cumbria</option>\n                  <option>Derbyshire</option>\n                  <option>Devon</option>\n                  <option>Dorset</option>\n                  <option>Durham</option>\n                  <option>East Riding of Yorkshire</option>\n                  <option>East Sussex</option>\n                  <option>Essex</option>\n                  <option>Gloucestershire</option>\n                  <option>Greater London</option>\n                  <option>Greater Manchester</option>\n                  <option>Hampshire</option>\n                  <option>Herefordshire</option>\n                  <option>Hertfordshire</option>\n                  <option>Isle of Wight</option>\n                  <option>Kent</option>\n                  <option>Lancashire</option>\n                  <option>Leicestershire</option>\n                  <option>Lincolnshire</option>\n                  <option>Merseyside</option>\n                  <option>Norfolk</option>\n                  <option>North Yorkshire</option>\n                  <option>Northamptonshire</option>\n                  <option>Northumberland</option>\n                  <option>Nottinghamshire</option>\n                  <option>Oxfordshire</option>\n                  <option>Rutland</option>\n                  <option>Shropshire</option>\n                  <option>Somerset</option>\n                  <option>South Yorkshire</option>\n                  <option>Staffordshire</option>\n                  <option>Suffolk</option>\n                  <option>Surrey</option>\n                  <option>Tyne and Wear</option>\n                  <option>Warwickshire</option>\n                  <option>West Midlands</option>\n                  <option>West Sussex</option>\n                  <option>West Yorkshire</option>\n                  <option>Wiltshire</option>\n                  <option>Worcestershire</option>\n                </optgroup>\n                <optgroup label=\"Wales\">\n                    <option>Anglesey</option>\n                    <option>Brecknockshire</option>\n                    <option>Caernarfonshire</option>\n                    <option>Carmarthenshire</option>\n                    <option>Cardiganshire</option>\n                    <option>Denbighshire</option>\n                    <option>Flintshire</option>\n                    <option>Glamorgan</option>\n                    <option>Merioneth</option>\n                    <option>Monmouthshire</option>\n                    <option>Montgomeryshire</option>\n                    <option>Pembrokeshire</option>\n                    <option>Radnorshire</option>\n                </optgroup>\n                <optgroup label=\"Scotland\">\n                    <option>Aberdeenshire</option>\n                    <option>Angus</option>\n                    <option>Argyllshire</option>\n                    <option>Ayrshire</option>\n                    <option>Banffshire</option>\n                    <option>Berwickshire</option>\n                    <option>Buteshire</option>\n                    <option>Cromartyshire</option>\n                    <option>Caithness</option>\n                    <option>Clackmannanshire</option>\n                    <option>Dumfriesshire</option>\n                    <option>Dunbartonshire</option>\n                    <option>East Lothian</option>\n                    <option>Fife</option>\n                    <option>Inverness-shire</option>\n                    <option>Kincardineshire</option>\n                    <option>Kinross</option>\n                    <option>Kirkcudbrightshire</option>\n                    <option>Lanarkshire</option>\n                    <option>Midlothian</option>\n                    <option>Morayshire</option>\n                    <option>Nairnshire</option>\n                    <option>Orkney</option>\n                    <option>Peeblesshire</option>\n                    <option>Perthshire</option>\n                    <option>Renfrewshire</option>\n                    <option>Ross-shire</option>\n                    <option>Roxburghshire</option>\n                    <option>Selkirkshire</option>\n                    <option>Shetland</option>\n                    <option>Stirlingshire</option>\n                    <option>Sutherland</option>\n                    <option>West Lothian</option>\n                    <option>Wigtownshire</option>\n                </optgroup>\n                <optgroup label=\"Northern Ireland\">\n                    <option>Antrim</option>\n                    <option>Armagh</option>\n                    <option>Down</option>\n                    <option>Fermanagh</option>\n                    <option>Londonderry</option>\n                    <option>Tyrone</option>\n                </optgroup>\n              </select>\n              <small id=\"locationHelp\" class=\"form-text text-dark\">We'll never share your location with anyone else or even remember it's yours!</small>\n            </div>\n\n            <div class=\"form-group\">\n              <label for=\"categorySelect\">Issue Category:</label>\n              <select class=\"form-control\" id=\"categorySelect\" [ngModel]=\"'Select your issue category...'\" (ngModelChange)=\"report.issueCategory = $event\" name=\"issueCategory\">\n                <option default disabled>Select your issue category...</option>\n                <option>Accents</option>\n                <option>Racism</option>\n                <option>Sexism</option>\n                <option>Other</option>\n                </select>\n            </div>\n\n\n\n            <div class=\"form-group\">\n              <label for=\"exampleTextarea\">Issue Description:</label>\n              <textarea class=\"form-control\" id=\"exampleTextarea\" rows=\"3\" placeholder=\"Insert description here...\" [(ngModel)]=\"report.issueDesc\" name=\"issueDesc\"></textarea>\n            </div>\n            <div id=\"successMsg\" class=\"alert alert-success\" style=\"display:none\"><h6 style=\"color:black;\">Your report has been submitted!</h6></div>\n            <button type=\"submit\" class=\"btn btn-danger\" onclick=\"setTimeout(function () {document.getElementById('successMsg').style.display='block'});\">Create Report</button>\n        </form>\n      </div>\n    </div>\n"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_reports_service__ = __webpack_require__("./src/app/services/reports.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(reportsService) {
        this.reportsService = reportsService;
        this.report = {
            location: '',
            date: '',
            issueCategory: '',
            issueDesc: '',
            locationLong: null,
            locationLat: null
        };
        this.title = 'Project-Ethics';
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getUserLocation();
        this.successMsg = true;
    };
    HomeComponent.prototype.getUserLocation = function () {
        var _this = this;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
            });
        }
    };
    HomeComponent.prototype.onSubmit = function () {
        if (this.report.location != '' && this.report.issueCategory != '' && this.report.issueDesc != '') {
            if (this.report.location != 'Select your location...' && this.report.issueCategory != 'Select your issue category...') {
                this.report.date = new Date().toLocaleDateString();
                this.report.locationLat = this.lat;
                this.report.locationLong = this.lng;
                this.reportsService.addItem(this.report);
                this.report.location = "Select your location...";
                this.report.date = '';
                this.report.issueDesc = "Insert description here...";
                this.report.issueCategory = "Select your issue category...";
            }
        }
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_reports_service__["a" /* ReportsService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/mapview/mapview.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"inner cover\">\n    <h3 class=\"cover-heading\">Map View</h3>\n  <agm-map [latitude]=\"54.631679\" [longitude]=\"-4.531563\" [zoom]=\"5\" [mapTypeId]=\"'hybrid'\" [styles]=\"styles\" [streetViewControl]=\"false\">\n\n\n    <agm-marker-cluster imagePath=\"https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclustererplus/images/m\">\n\n\n       <agm-marker *ngFor=\"let report of reports; let i = index\" [latitude]=\"report.locationLat\" [longitude]=\"report.locationLong\" onclick=\"console.log(yo)\">\n          <agm-info-window style=\"text-align:left\">\n            <h5>Date Reported: <u>{{report.date}}</u></h5>\n            <h6>Report Location: <u>{{report.location}}</u></h6>\n            <h6>Report Category: <u>{{report.issueCategory}}</u> </h6>\n            <p>{{report.issueDesc}}</p>\n\n          </agm-info-window>\n       </agm-marker>\n\n\n      </agm-marker-cluster>\n\n  </agm-map>\n  <button class=\"btn btn-danger\" onclick=\"window.location.reload()\" style=\"margin-top:10px\">Reload Map</button>\n</div>\n"

/***/ }),

/***/ "./src/app/mapview/mapview.component.scss":
/***/ (function(module, exports) {

module.exports = "agm-map {\n  height: 400px; }\n"

/***/ }),

/***/ "./src/app/mapview/mapview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_reports_service__ = __webpack_require__("./src/app/services/reports.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MapviewComponent = /** @class */ (function () {
    function MapviewComponent(reportService) {
        this.reportService = reportService;
        this.styles = [
            {
                featureType: "administrative",
                elementType: "labels",
                stylers: [
                    { visibility: "on" }
                ]
            }, {
                featureType: "poi",
                elementType: "labels",
                stylers: [
                    { visibility: "off" }
                ]
            }, {
                featureType: "water",
                elementType: "labels",
                stylers: [
                    { visibility: "off" }
                ]
            }, {
                featureType: "road",
                elementType: "labels",
                stylers: [
                    { visibility: "off" }
                ]
            }
        ];
    }
    MapviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reportService.getReports().subscribe(function (Report) {
            //console.log(Report);
            _this.reports = Report;
        });
    };
    MapviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mapview',
            template: __webpack_require__("./src/app/mapview/mapview.component.html"),
            styles: [__webpack_require__("./src/app/mapview/mapview.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_reports_service__["a" /* ReportsService */]])
    ], MapviewComponent);
    return MapviewComponent;
}());

//AIzaSyCrp7d5717SPzMgoQgp6zu96kdtWK3hQmw GOOGLE API


/***/ }),

/***/ "./src/app/services/reports.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__("./node_modules/angularfire2/firestore/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportsService = /** @class */ (function () {
    function ReportsService(afs) {
        this.afs = afs;
        this.reportsCollection = this.afs.collection('reports', function (ref) { return ref.orderBy('date', 'desc'); });
        this.reports = this.reportsCollection.snapshotChanges().map(function (changes) {
            return changes.map(function (a) {
                var data = a.payload.doc.data();
                data.id = a.payload.doc.id;
                return data;
            });
        });
    }
    ReportsService.prototype.getReports = function () {
        return this.reports;
    };
    ReportsService.prototype.addItem = function (report) {
        this.reportsCollection.add(report);
    };
    ReportsService.prototype.deleteReport = function (report) {
        this.reportDoc = this.afs.doc("reports/" + report.id);
        this.reportDoc.delete();
    };
    ReportsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["a" /* AngularFirestore */]])
    ], ReportsService);
    return ReportsService;
}());



/***/ }),

/***/ "./src/app/view-reports/view-reports.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"inner cover\">\n\n  <h3 class=\"cover-heading\">Reports</h3>\n  <div class=\"wrapContainer\">\n  <div *ngIf=\"reports?.length > 0; else noReports\" style=\"overflow-y: scroll; height:400px; ;\">\n\n    <div class=\"col-md-12\">\n    <div class=\"disableSelection\" *ngFor=\"let report of reports\" style=\"text-align:left; background-color:#EFEFEF; border-radius: 10px; padding:10px; margin-bottom:20px\" >\n\n      <div style=\"float:right; padding-right:20px;\" (click)=\"deleteReport($event, report)\">\n        <button type=\"button\" class=\"btn btn-sm\" style=\"background-color: #53A789; border-color:white;\">\n        <i class=\"fa fa-trash\" style=\"color:white;\"></i>\n        </button>\n      </div>\n      <h6><b>Date: </b>{{report.date}}</h6>\n      <h6><b>Location: </b>{{report.location}}</h6>\n      <h6><b>Issue Category: </b>{{report.issueCategory}}</h6>\n\n\n      <div id=\"description\">\n      <div style=\"border-top-style: dashed; opacity:0.05; padding-bottom:20px; margin-top:10px\" ></div>\n      <h6 style=\"text-align: center;\"><b>Issue Description: </b></h6>\n      <p style=\"text-align:center\">{{report.issueDesc}}</p>\n      </div>\n    </div>\n\n\n    </div>\n  </div>\n\n\n\n\n\n  <ng-template #noReports>\n    <p><b>THERE ARE NO REPORTS TO DISPLAY</b></p>\n    <button class=\"btn btn-danger\" onclick=\"window.location.reload()\">Retry</button>\n  </ng-template>\n\n</div>\n</div>\n"

/***/ }),

/***/ "./src/app/view-reports/view-reports.component.scss":
/***/ (function(module, exports) {

module.exports = ".disableSelection {\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  outline: 0; }\n"

/***/ }),

/***/ "./src/app/view-reports/view-reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewReportsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_reports_service__ = __webpack_require__("./src/app/services/reports.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ViewReportsComponent = /** @class */ (function () {
    function ViewReportsComponent(reportService) {
        this.reportService = reportService;
        this.title = 'Project-Ethics';
    }
    ViewReportsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reportService.getReports().subscribe(function (Report) {
            //console.log(Report);
            _this.reports = Report;
        });
    };
    ViewReportsComponent.prototype.deleteReport = function (event, report) {
        var password = prompt("Please enter admin password", "...");
        if (password == "emma") {
            this.reportService.deleteReport(report);
        }
    };
    ViewReportsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-view-reports',
            template: __webpack_require__("./src/app/view-reports/view-reports.component.html"),
            styles: [__webpack_require__("./src/app/view-reports/view-reports.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_reports_service__["a" /* ReportsService */]])
    ], ViewReportsComponent);
    return ViewReportsComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyDA0thDyO9P8bv0e585nVRu-bCLkbaXDPk",
        authDomain: "dissdb-84e65.firebaseapp.com",
        databaseURL: "https://dissdb-84e65.firebaseio.com",
        projectId: "dissdb-84e65",
        storageBucket: "dissdb-84e65.appspot.com",
        messagingSenderId: "1070225794251"
    }
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
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