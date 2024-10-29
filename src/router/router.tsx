import React from "react";
import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "../layouts";
import {CatalogPage} from "../pages";

const router = createBrowserRouter([
   {
      path: "/",
      element: <MainLayout/>,
      errorElement: <h1>404</h1>,
      children: [
         {
            index: true,
            element: <CatalogPage/>
         }
      ]
   }
]);

export {
   router
};