import express from "express"
import cors from "cors"
import session from "express-session"
import dotenv from "dotenv"
import UserRouter from "./Routes/user.routes.js"
import DB from "./Config/db.config.js"

const app = express()
const PORT = process.env.PORT ?? 3000

dotenv.config() //configuro para poder utilizar variables de entorno


app.use(express.json()) //Permite enviar en las querys formato JSON, mejorando la manipulacion de los datos
app.use(express.urlencoded({extends : true}))
app.use(cors()) //Permite compartir cosas del back al front
app.use(session({
    secret : process.env.SECRET,
    resave : false,
    saveUninitialized : true,
    cookie : {secure : true}
})) //configuramos la session para trabajarla con JWT, de modo de manipularlo mas facilmente

app.use("/api/v1/users",UserRouter) //http://localhost:3000/api/v1/users/metodoUsar/id en caso de necesitar

app.listen(PORT,()=>{
    console.log(`Server on Running in Port ${PORT}`)
})