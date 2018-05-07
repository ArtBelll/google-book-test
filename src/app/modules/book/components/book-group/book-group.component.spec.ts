import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookGroupComponent } from './book-group.component';

describe('BookGroupComponent', () => {
  let component: BookGroupComponent;
  let fixture: ComponentFixture<BookGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
