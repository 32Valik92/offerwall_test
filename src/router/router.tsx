import React from "react";
import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "../layouts";
import {CatalogPage, ShoppingCartPage} from "../pages";

const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout/>,
      errorElement: <h1>404</h1>,
      children: [
         {
            index: true,
            element: <CatalogPage/>,
         },
         {
            path: "shopping-cart",
            element: <ShoppingCartPage/>
         }
      ]
   }
]);

export {
   router
};
