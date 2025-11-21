import { Component, inject, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { DialogAddBook } from '../dialog-add-book/dialog-add-book';
import { Store } from '@ngrx/store';
import { addBookToList, addBookToListRead, deleteBookToList, deleteBookToListRead } from '../../store/actions/book.actions';
import { Observable } from 'rxjs';
import { IBook } from '../../store/state/book.state';
import { selectAllBooks } from '../../store/selectors/book.selectors';
import { CommonModule } from '@angular/common';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-list-of-books',
  imports: [MatListModule, MatButtonModule, MatCardModule, CommonModule, MatSlideToggleModule, FormsModule],
  templateUrl: './list-of-books.html',
  styleUrl: './list-of-books.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class ListOfBooks implements OnInit {
  constructor(private dialog: MatDialog) { }
  private store = inject(Store);
  bookList$: Observable<IBook[]> = this.store.select(selectAllBooks);
  bookListBool = false
  readIt = false

  addReadBooks(readIt: boolean, id: number) {
    if (readIt) {
      this.store.dispatch(addBookToListRead({id}))
    } else {
      this.store.dispatch(deleteBookToListRead({id}))
    }
  }

  deleteBook(id: number) {
    console.log(id)
    this.store.dispatch(deleteBookToList({
      id: id
    }))
  }

  openDialog() {
    this.dialog.open(DialogAddBook).componentInstance.addSend.subscribe((component) => {
      if (component) {
        this.store.dispatch(addBookToList({
          name: component.name,
          description: component.description,
          logo: component.logo
        }))
        this.bookListBool = true
      }
    })
  }

  ngOnInit(): void {
  }
}