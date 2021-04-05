import { createReducer, on } from "@ngrx/store";
import { addBook, removeBook } from "./books.actions";
import { initialState } from "./books.reducer";

export const collectionReducer = createReducer(initialState,
    on(removeBook, (state, { bookId }) => state.filter(s => s.id !== bookId)),
    on(addBook, (state, { bookId }) => {
        if (state.indexOf(bookId) > -1) {
            return state;
        }
        return [...state, bookId];
    })
);