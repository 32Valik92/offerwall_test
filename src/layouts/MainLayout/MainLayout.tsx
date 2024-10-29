import "./MainLayout.css";

import React, {FC} from "react";
import {Outlet} from "react-router-dom";

const MainLayout: FC = () => {
   return (
      <div className="mainLayout">
         <Outlet/>
      </div>
   );
};

export {MainLayout};