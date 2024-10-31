import "./ShoppingCartPage.css";

import {joiResolver} from "@hookform/resolvers/joi";
import React, {FC} from "react";
import {useForm} from "react-hook-form";

import {ShoppingCartComponent} from "../../components";
import {ICardData} from "../../models";
import {cardValidator} from "../../validator";

const ShoppingCartPage: FC = () => {
   const {register, handleSubmit, formState: {errors, isValid}} = useForm<ICardData>({
      mode: "all",
      resolver: joiResolver(cardValidator)
   });

   const onSubmit = (data: ICardData) => {
      console.log("Form data:", data);
   };

   const months = Array.from({length: 12}, (_, i) => i + 1);

   const currentYear = new Date().getFullYear();
   const years = Array.from({length: 16}, (_, i) => currentYear + i);

   return (
      <div className="shopping-cart-container">
         <ShoppingCartComponent/>

         <div className="card-details-container">
            <div className="card-container">
               <div className="form-header">Card details</div>

               <div className="payment-method">
                  <div className="payment-text">Select payment method</div>

                  <div className="cards-container">
                     <img src="/images/Mastercard.svg" alt="Mastercard"/>
                     <img src="/images/ApplePay.svg" alt="ApplePay"/>
                     <img src="/images/visa-logo.svg" alt="visa"/>
                  </div>
               </div>

               <form className="payment-form" onSubmit={handleSubmit(onSubmit)}>
                  <label>
                            Name on card
                     <input type="text" placeholder="Meet Patel"{...register("nameUser")}/>
                     {errors.nameUser && <span className="form-error-message">{errors.nameUser.message}</span>}
                  </label>

                  <label>
                            Card number
                     <input type="text" placeholder="0000 0000 0000 0000" {...register("cardNumber")}/>
                     {errors.cardNumber &&
                                <span className="form-error-message">{errors.cardNumber.message}</span>}
                  </label>

                  <label>
                            Card expiration
                     <div className="expiration-container">
                        <select defaultValue="" {...register("expirationMonth")}>
                           <option value="" disabled>Month</option>
                           {months.map(month => (
                              <option key={month} value={month}>
                                 {month < 10 ? `0${month}` : month}
                              </option>
                           ))}
                        </select>

                        <select defaultValue="" {...register("expirationYear")}>
                           <option value="" disabled>Year</option>
                           {years.map(year => (
                              <option key={year} value={year}>
                                 {year}
                              </option>
                           ))}
                        </select>
                     </div>
                     {errors.expirationMonth &&
                         <span className="form-error-message">{errors.expirationMonth.message}</span>}
                     {errors.expirationYear &&
                         <span className="form-error-message">{errors.expirationYear.message}</span>}
                  </label>

                  <label>
                     Card Security Code
                     <input type="text" placeholder="Code"{...register("securityCode")}/>
                     {errors.securityCode &&
                                <span className="form-error-message">{errors.securityCode.message}</span>}
                  </label>

                  <button type="submit" className="continue-button" disabled={!isValid}>Continue</button>
               </form>
            </div>
         </div>
      </div>
   );
};

export {ShoppingCartPage};
