import express, { Application } from "express"
import dotenv from "dotenv"
dotenv.config()
// import { typeormConfig } from "@config"
import { router } from "./routes"
import { typeormConfig } from "@config/typeorm"

const app: Application = express()

typeormConfig.initialize()
    .then(() => { console.log(`db connected`) })
    .catch((err) => { console.log(err) })

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)


// server run   
const port = process.env.PORT
app.listen(port, () => { console.log(`Server is run on port: http://localhost:${port}`)})





