import { Router } from "express";
import userRoutes from "./user-routes.js";
import chatRoutes from "./chat-routes.js";

const appRouter = Router()

appRouter.use("/user", userRoutes)   // http://localhost:5000/api/user
appRouter.use("/chat", chatRoutes)   // http://localhost:5000/api/chat

export default appRouter