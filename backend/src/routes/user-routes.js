import { Router } from "express";
import { getAllUser, userSignUp } from "../controllers/user-controllers.js";
import { signupValidator, validate } from "../middleware/validator.js";

const userRoutes = Router()

userRoutes.get("/", getAllUser)        // http://localhost:5000/api/user/

userRoutes.post('/signup', validate(signupValidator), userSignUp)  // http://localhost:5000/api/user/signup


export default userRoutes