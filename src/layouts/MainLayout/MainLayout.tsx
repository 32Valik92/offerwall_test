import "./MainLayout.css";

import React, {FC} from "react";
import {Outlet} from "react-router-dom";

import {HeaderComponent} from "../../components";

const MainLayout: FC = () => {
   return (
      <div className="main-layout">
         <HeaderComponent/>

         <Outlet/>
      </div>
   );
};

export {MainLayout};