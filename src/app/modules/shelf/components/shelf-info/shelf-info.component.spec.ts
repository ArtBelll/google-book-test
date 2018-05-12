import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShelfInfoComponent } from './shelf-info.component';

describe('ShelfInfoComponent', () => {
  let component: ShelfInfoComponent;
  let fixture: ComponentFixture<ShelfInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShelfInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShelfInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
