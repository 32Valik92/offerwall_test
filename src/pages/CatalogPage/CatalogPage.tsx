import "./CatalogPage.css";

import React, {FC} from "react";

import {BooksListComponent} from "../../components";

const CatalogPage: FC = () => {
   return (
      <div className="catalog-page">
         <div className="catalog-title">SHOP</div>

         <BooksListComponent/>

         <div className="see-more-container">
            <button className="see-more-button">SEE MORE</button>
         </div>
      </div>
   );
};

export {CatalogPage};