import { createAction, props } from "@ngrx/store";
import { Book } from "../book-list/book.model";

export const addBook = createAction('[Book list] add book', props<{ bookId: string }>());
export const removeBook = createAction('[Book list] remove book', props<{ bookId: string }>());
export const retrieveBook = createAction('[Book list/API] retrieve book success', props<Book>());