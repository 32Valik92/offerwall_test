import "./BookComponent.css";

import React, {FC} from "react";

import {IBook} from "../../models";
import {useAppDispatch} from "../../redux";
import {bookActions} from "../../redux/bookSlice/bookSlice";

interface IProps {
    book: IBook;
}

const BookComponent: FC<IProps> = ({book}) => {
   const dispatch = useAppDispatch();
   const addToCart = (): void => {
      dispatch(bookActions.setBookForBuying(book));
   };
   return (
      <div className="book-item">
         <div className="book-img"><img src={book.imageURL} alt={book.title}/></div>

         <div className="title-price">
            <div className="title">&#34;{book.title}&#34;</div>

            <div className="price-buyButton">
               <div className="price">{book.price} $</div>
               <div className="buy-button-container">
                  <button className="buy-button" onClick={addToCart}>BUY</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export {BookComponent};