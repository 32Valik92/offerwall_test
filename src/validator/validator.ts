import Joi from "joi";

const cardValidator = Joi.object({
   nameUser: Joi.string().required(),
   cardNumber: Joi.string().length(16).pattern(/^[0-9]+$/).required(),
   expirationMonth: Joi.required(),
   expirationYear: Joi.required(),
   securityCode: Joi.string().length(3).pattern(/^[0-9]+$/).required()
});

export {
   cardValidator
};