import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelfAdderComponent } from './shelf-adder.component';

describe('ShelfAdderComponent', () => {
  let component: ShelfAdderComponent;
  let fixture: ComponentFixture<ShelfAdderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShelfAdderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelfAdderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
