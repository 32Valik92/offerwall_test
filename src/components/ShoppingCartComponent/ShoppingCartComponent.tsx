import "./ShoppingCartComponent.css";

import React, {FC} from "react";
import {Link} from "react-router-dom";

import {useAppSelector} from "../../redux";
import {CartsComponent} from "../CartsComponent/CartsComponent";

const ShoppingCartComponent: FC = () => {
   const {buyingBooks, totalSum} = useAppSelector(state => state.bookStore);

   return (
      <div className="shopping-cart">
         <div className="shopping-cart-header">
                Shopping Cart
         </div>

         {
            buyingBooks.length > 0 
               ?
               <CartsComponent/>
               :
               ""
         }

         <div className="back-footer">
            <Link to={"/"} className="back-to-shop"><img src="/images/Line.svg" alt="Line"/> Back to shop</Link>

            <div>Subtotal <b>${totalSum.toFixed(2)}</b></div>
         </div>
      </div>
   );
};

export {ShoppingCartComponent};