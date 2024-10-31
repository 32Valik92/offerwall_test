import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

import {IBook} from "../../models";
import {bookService} from "../../services";

interface IState {
    books: IBook[];
    buyingBooks: IBook[];
    totalSum: number;
}

const initialState: IState = {
   books: [],
   buyingBooks: [],
   totalSum: 0
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
      removeBookFromCart: (state, action) => {
         const bookToRemove = state.buyingBooks.find(book => book.id === action.payload);
         if (bookToRemove) {
            state.totalSum -= bookToRemove.price;
            state.buyingBooks = state.buyingBooks.filter(book => book.id !== action.payload);
         }
      },

      changeTotalSum: (state, action) => {
         state.totalSum = state.totalSum + action.payload;
      }
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