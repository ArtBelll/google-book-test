import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelvesPageComponent } from './shelves-page.component';

describe('ShelvesPageComponent', () => {
  let component: ShelvesPageComponent;
  let fixture: ComponentFixture<ShelvesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShelvesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelvesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
