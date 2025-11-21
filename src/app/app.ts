import { Component, signal } from '@angular/core';
import { ListOfBooks } from './components/list-of-books/list-of-books';

@Component({
  selector: 'app-root',
  imports: [ListOfBooks],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('online-library');
}
