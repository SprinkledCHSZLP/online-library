export interface IBook {
    id: number,
    name: string,
    description: string,
    logo: File | null,
    readIt: boolean
}

export interface IBookState {
    bookList: IBook[]
}

export const initialBookState: IBookState = {
    bookList: [],
};