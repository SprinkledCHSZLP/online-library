import { createFeatureSelector, createSelector } from "@ngrx/store";
import { IBookState } from "../state/book.state";

export const selectBookState = createFeatureSelector<IBookState>('bookList');

export const selectAllBooks = createSelector(
  selectBookState,
  (state: IBookState) => state.bookList
);