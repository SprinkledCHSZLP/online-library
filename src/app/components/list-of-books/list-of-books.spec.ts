import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfBooks } from './list-of-books';

describe('ListOfBooks', () => {
  let component: ListOfBooks;
  let fixture: ComponentFixture<ListOfBooks>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListOfBooks]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListOfBooks);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
