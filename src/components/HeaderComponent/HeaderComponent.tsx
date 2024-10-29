import "./HeaderComponent.css";

import React, {FC} from "react";

const HeaderComponent: FC = () => {
   return (
      <header className="header-component">
         <div className="header">
            <div className="logo-name">
               <div className="logo"><img src="/images/logo_LivroMundo.svg" alt="logo_LivroMundo"/></div>
               <div className="shop-name">LivroMundo</div>
            </div>
             
            <div className="links-container">
               <div className="link link-home">Home</div>
               <div className="link link-shop">Shop</div>
               <div className="link link-about">About</div>
               <div className="link link-contact">Contact</div>
            </div>
             
            <div className="buy-icon"><img src="/images/Vector.svg" alt="Vector"/></div>
         </div>
      </header>
   );
};

export {HeaderComponent};