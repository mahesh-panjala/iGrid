import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IgridComponent } from './igrid.component';

describe('IgridComponent', () => {
  let component: IgridComponent;
  let fixture: ComponentFixture<IgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
