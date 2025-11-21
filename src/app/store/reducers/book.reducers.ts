import { createReducer, on } from "@ngrx/store"
import * as bookActions  from "../actions/book.actions"
import { IBook, IBookState, initialBookState } from "../state/book.state"

function generateTodoId(listBook: IBook[]): number {
    if (listBook.length === 0) return 1;
    return Math.max(...listBook.map(book => book.id)) + 1;
  }

export const bookReducer = createReducer (
    initialBookState,

    on(bookActions.addBookToList, (state, {name, description, logo}): IBookState => {
        const newBook: IBook = {
            id: generateTodoId(state.bookList),
            name,
            description,
            logo,
            readIt: false
        }

        return {
            ...state,
            bookList: [...state.bookList, newBook]
        }
    }),
    on(bookActions.deleteBookToList, (state, {id}): IBookState => ({
        ...state,
        bookList: state.bookList.filter(book => book.id !== id)
    })),
    on(bookActions.addBookToListRead, (state, {id}): IBookState => ({
        ...state,
        bookList: state.bookList.map(book => book.id === id ? {...book, readIt: true} : book)
    })),
    on(bookActions.deleteBookToListRead, (state, {id}): IBookState => ({
        ...state,
        bookList: state.bookList.map(book => book.id === id ? {...book, readIt: false} : book)
    }))
)