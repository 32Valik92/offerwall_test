import "./FooterComponent.css";

import React, {FC} from "react";

const FooterComponent: FC = () => {
   return (
      <footer className="footer-component">
         <div className="footer">
            <div className="footer-elements">
               <div className="elements-logo-name">
                  <div className="footer-logo"><img src="/images/logo_LivroMundo.svg" alt="logo_LivroMundo"/>
                  </div>
                  <div className="footer-shop-name">LivroMundo</div>
               </div>

               <div className="elements-icons">
                  <img src="/images/facebook_icon.svg" alt="facebook_icon"/>
                  <img src="/images/instagram_icon.svg" alt="instagram_icon"/>
                  <img src="/images/twitter_icon.svg" alt="twitter_icon"/>
                  <img src="/images/pinterest_icon.svg" alt="pinterest_icon"/>
               </div>

               <div className="elements-small-text">©&#34;LivroMundo&#34; JSC, 2023 - 2024</div>
            </div>

            <div className="address-phone-workingtime">
               <div className="footer-contact footer-address">
                  <div className="footer-icon"><img src="/images/address_icon.svg" alt="address_icon"/></div>
                  <div className="info-text">Statensingel 52, 3039 LP Rotterdam, Netherlands</div>
               </div>

               <div className="footer-contact footer-phone">
                  <div className="footer-icon"><img src="/images/phone_icon.svg" alt="phone_icon"/></div>
                  <div className="info-text">+31 6 18426954</div>
               </div>

               <div className="footer-contact footer-worktime">
                  <div className="footer-icon"><img src="/images/letter_icon.svg" alt="letter_icon"/></div>
                  <div className="info-text">info@moviestore.nl</div>
               </div>
            </div>

            <div className="elements-small-mobile-text">©&#34;LivroMundo&#34; JSC, 2023 - 2024</div>

         </div>
      </footer>
   );
};

export {FooterComponent};