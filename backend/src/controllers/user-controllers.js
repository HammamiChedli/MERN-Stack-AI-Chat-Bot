
import User from '../models/user-model.js'
import { hash, compare } from 'bcrypt'


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
        const { email, password } = req.body
        const existingUser = await User.findOne({ email })
        if (existingUser) return res.status(401).send('Utilisateur deja inscrit !')
        const hashPassword = await hash(password, 10)
        const user = new User({ name, email, password: hashPassword })
        user.save()


        return res.status(201).send({ message: "User ID", user: user._id })

    } catch (error) {
        return res.status(401).json({ message: "ERREUR", cause: error.message })
    }
}

export const userSignIn = async (req, res, next) => {
    // user sign in

    try {

        const { email, password } = req.body
        const user = await User.findOne({ email })

        if (!user) {
            return res.status(401).send("L'utilisateur n'existe pas dans la basse de donnée Créer un compte !")
        }
        const correctPassword = await compare(password, user.password)
        if (!correctPassword) {
            return res.status(403).send("Incorrect password !")
        }
        return res.status(200).json({ message: "Welcome", user: user._id })

    } catch (error) {
        return res.status(401).json({ message: "ERREUR", cause: error.message })
    }
}