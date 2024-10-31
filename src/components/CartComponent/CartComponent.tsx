import React, {FC, useState} from "react";

import {IBook} from "../../models";
import {bookActions, useAppDispatch} from "../../redux";

interface IProps {
    book: IBook;
}

const CartComponent: FC<IProps> = ({book}) => {
   const dispatch = useAppDispatch();
   const [count, setCount] = useState<number>(1);

   const decFun = (bookId: number, bookPrice: number) => {

      setCount(prev => {
         dispatch(bookActions.changeTotalSum(-bookPrice));
         const newCount = prev - 1;
         if (newCount === 0) {
            dispatch(bookActions.removeBookFromCart(bookId));


            return newCount;
         }
         return newCount;
      });
   };

   const incFun = () => {
      setCount(prevState => prevState + 1);
      dispatch(bookActions.changeTotalSum(book.price));

   };

   return (
      <div key={book.id} className="buy-book-item">
         <div className="book">
            <div className="buy-book-img"><img src={book.imageURL} alt={book.title}/></div>

            <div className="book-info">
               <div className="book-title mobile-width">{book.title}</div>

               <div className="book-price mobile-width">${book.price}</div>

               <div className="book-count mobile-width">
                  <span onClick={() => decFun(book.id, book.price)}>-</span>
                  <span className="count">{count}</span>
                  <span onClick={() => incFun()}>+</span>
               </div>

               <div className="book-price mobile-width">${(book.price * count).toFixed(2)}</div>
            </div>
         </div>

         <div className="trash" onClick={() => dispatch(bookActions.removeBookFromCart(book.id))}><img
            src="/images/trash.svg" alt="trash"/></div>
      </div>
   );
};

export {CartComponent};