import "./BooksListComponent.css";

import React, {FC, useEffect, useState} from "react";

import {IBook} from "../../models";
import {bookService} from "../../services";
import {BookComponent} from "../BookComponent/BookComponent";

const BooksListComponent: FC = () => {
   const [books, setBooks] = useState<IBook[]>([]); // Створюємо стан для збереження даних книг
   const [, setError] = useState<string | null>(null);

   useEffect(() => {
      const fetchBooks = async (): Promise<void> => {
         try {
            const data = await bookService.getAll();
            setBooks(data);
         } catch (err) {
            setError("Something happened");
         }
      };

      fetchBooks();
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