import { createReducer, on } from "@ngrx/store";
import { Book } from "../book-list/book.model";
import { retrieveBook } from "./books.actions";

export const initialState: ReadonlyArray<Book> = [];

export const reducer = createReducer(initialState,
    on(retrieveBook, (state, book) => [book] ));
    