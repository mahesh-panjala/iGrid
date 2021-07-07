"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var igrid_component_1 = require("./igrid/igrid.component");
var ej2_angular_grids_1 = require("@syncfusion/ej2-angular-grids");
var ej2_angular_navigations_1 = require("@syncfusion/ej2-angular-navigations");
var ej2_base_1 = require("@syncfusion/ej2-base");
ej2_base_1.enableRipple(true);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                igrid_component_1.IgridComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                ej2_angular_grids_1.GridModule,
                ej2_angular_navigations_1.ContextMenuModule
            ],
            providers: [ej2_angular_grids_1.PageService, ej2_angular_grids_1.SortService, ej2_angular_grids_1.FilterService, ej2_angular_grids_1.GroupService, ej2_angular_grids_1.ColumnChooserService, ej2_angular_grids_1.FreezeService, ej2_angular_grids_1.SelectionService, ej2_angular_grids_1.SearchService, ej2_angular_grids_1.ToolbarService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
