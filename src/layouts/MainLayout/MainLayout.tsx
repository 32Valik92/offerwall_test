import "./MainLayout.css";

import React, {FC} from "react";
import {Outlet} from "react-router-dom";

import {FooterComponent, HeaderComponent} from "../../components";

const MainLayout: FC = () => {
   return (
      <div className="main-layout">
         <HeaderComponent/>

         <Outlet/>
          
         <FooterComponent/>
      </div>
   );
};

export {MainLayout};