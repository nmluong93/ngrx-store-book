import { Book } from "../book-list/book.model";

export interface AppState {
    books: Array<Book>;
    collection: ReadonlyArray<string>;
  }