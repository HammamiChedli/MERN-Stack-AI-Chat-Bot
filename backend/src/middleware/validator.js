
import { body, validationResult } from 'express-validator'


/**
 * @param {import('express-validator').ValidationChain[]} Validations
 */
export const validate = (Validations) => {
    return async (req, res, next) => {
        for (let Validation of Validations) {
            const result = await Validation.run(req)
            if (!result.isEmpty()) break
        }

        const error = validationResult(req)
        if (error.isEmpty()) {
            return next()
        }
        return res.status(422).json({ message: error.array() })
    }
}

export const signinValidator = [
    body("email").trim().isEmail().withMessage("L'email est requis !"),
    body("password").trim().isStrongPassword().withMessage("un mot de passe fort est requis !")
]

export const signupValidator = [
    body("name").notEmpty().withMessage("Le nom est requis !"),
    ...signinValidator
]

