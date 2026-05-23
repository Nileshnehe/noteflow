import Joi from "joi";

export const registerSchema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).trim().required(),

      email: Joi.string()
    .email({ tlds: { allow: false } })
    .lowercase()
    .required(),

  password: Joi.string()
    .min(8)
    .pattern(/[A-Z]/,       'one uppercase letter')
    .pattern(/[0-9]/,       'one number')
    .pattern(/[!@#$%^&*]/, 'one special character')
    .required()

    .custom((value, helpers) => {

        const {name} = helpers.state.ancestors[0];

        if(name && value.toLowerCase().includes(name.toLowerCase())){
          return helpers.message({custom: "Password can not contain you name"})
        }
        return value
    })
})

