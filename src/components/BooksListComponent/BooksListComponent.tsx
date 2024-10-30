import "./BooksListComponent.css";

import React, {FC, useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../redux";
import {bookActions} from "../../redux";
import {BookComponent} from "../BookComponent/BookComponent";

const BooksListComponent: FC = () => {
   const dispatch = useAppDispatch();
   const {books} = useAppSelector(state => state.bookStore);

   useEffect(() => {
      dispatch(bookActions.getAll());
   }, []);

   return (
      <div className="books-list">
         {
            books.length > 0 && books.map(book => <BookComponent key={book.id} book={book}/>)
         }
      </div>
   );
};

export {BooksListComponent};