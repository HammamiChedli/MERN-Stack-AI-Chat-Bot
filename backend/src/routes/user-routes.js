import { Router } from "express";
import { getAllUser, userSignIn, userSignUp } from "../controllers/user-controllers.js";
import { signinValidator, signupValidator, validate } from "../middleware/validator.js";

const userRoutes = Router()

userRoutes.get("/", getAllUser)        // http://localhost:5000/api/user/

userRoutes.post('/signup', validate(signupValidator), userSignUp)  // http://localhost:5000/api/user/signup
userRoutes.post('/signin', validate(signinValidator), userSignIn)


export default userRoutes