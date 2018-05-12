import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookAdditionalInfoComponent } from './book-additional-info.component';

describe('BookAdditionalInfoComponent', () => {
  let component: BookAdditionalInfoComponent;
  let fixture: ComponentFixture<BookAdditionalInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookAdditionalInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookAdditionalInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
