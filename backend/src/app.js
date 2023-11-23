import express from "express"
import dotenv from "dotenv"
import morgan from "morgan"
import appRouter from "./routes/index.js"

dotenv.config()
const app = express()

app.use(express.json())
app.use(morgan("dev"))


app.use("/api", appRouter)     // http://localhost:5000/api


export default app
