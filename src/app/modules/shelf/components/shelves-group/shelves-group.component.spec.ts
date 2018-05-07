import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelvesGroupComponent } from './shelves-group.component';

describe('ShelvesGroupComponent', () => {
  let component: ShelvesGroupComponent;
  let fixture: ComponentFixture<ShelvesGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShelvesGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelvesGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
