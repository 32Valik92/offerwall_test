import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IBook} from "../../models";
import {bookService} from "../../services";

interface IState {
    books: IBook[];
    buyingBooks: IBook[];
}

const initialState: IState = {
   books: [],
   buyingBooks: []
};

const getAll = createAsyncThunk<IBook[], void>(
   "bookSlice/getAll",
   async (_, {rejectWithValue, fulfillWithValue}) => {
      try {
         const books = await bookService.getAll();
         return fulfillWithValue(books);
      } catch (e) {
         console.log(e);
         return rejectWithValue(e);
      }
   }
);

const slice = createSlice({
   name: "bookSlice",
   initialState,
   reducers: {
      setBookForBuying: (state, action) => {
         const bookExists = state.buyingBooks.some(book => book.id === action.payload.id);
         if (!bookExists) {
            state.buyingBooks = [...state.buyingBooks, action.payload];
         }
      },
   },
   extraReducers: builder =>
      builder
         .addCase(getAll.fulfilled, (state, action) => {
            state.books = action.payload;
         }),
});

const {reducer: bookReducer, actions} = slice;

const bookActions = {
   ...actions,
   getAll
};

export {
   bookReducer,
   bookActions
};