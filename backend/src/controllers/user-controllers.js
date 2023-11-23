
import User from '../models/user-model.js'
import { hash } from 'bcrypt'


export const getAllUser = async (req, res, next) => {
    // Get all users from DB
    try {

        const users = await User.find()
        return res.status(200).json({ message: "All users", users })

    } catch (error) {
        return res.status(201).json({ message: "ERREUR", cause: error.message })
    }
}

export const userSignUp = async (req, res, next) => {
    // user sign up



    try {

        console.log(req.body)
        const { name, email, password } = req.body
        const hashPassword = await hash(password, 10)
        const user = new User({ name, email, password: hashPassword })
        user.save()


        return res.status(200).json({ message: "User", user })

    } catch (error) {
        return res.status(201).json({ message: "ERREUR", cause: error.message })
    }
}