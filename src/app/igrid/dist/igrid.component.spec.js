"use strict";
exports.__esModule = true;
var testing_1 = require("@angular/core/testing");
var igrid_component_1 = require("./igrid.component");
describe('IgridComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [igrid_component_1.IgridComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(igrid_component_1.IgridComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
