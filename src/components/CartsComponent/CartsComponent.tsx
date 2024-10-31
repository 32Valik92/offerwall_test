import React, {FC} from "react";

import {useAppSelector} from "../../redux";
import {CartComponent} from "../CartComponent/CartComponent";

const CartsComponent: FC = () => {
   const {buyingBooks} = useAppSelector(state => state.bookStore);

   return (
      <div className="carts">
         {
            buyingBooks.map(book => <CartComponent book={book} key={book.id}/>)
         }
      </div>

   );
};

export {CartsComponent};