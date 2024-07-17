import express from "express"
import cors from "cors"
import session from "express-session"
import dotenv from "dotenv"
import UserRouter from "./Routes/user.routes.js"
import ProductRouter from "./Routes/product.routes.js"
import SessionRouter from "./Routes/session.routes.js"
import DB from "./Config/db.config.js"

dotenv.config() //configuro para poder utilizar variables de entorno

const app = express()
const PORT = process.env.PORT ?? 3000




app.use(express.json()) 

app.use(express.urlencoded({extends : true}))
const corsOptions = {
    origin: "http://localhost:5173", // Asegúrate de que esta URL coincida con la URL de tu frontend
    optionsSuccessStatus: 200
  };
  app.use(cors(corsOptions));

app.use(session({
    secret : process.env.SECRET,
    resave : false,
    saveUninitialized : true,
    cookie : {secure : false}
})) 

app.use("/api/v1/users",UserRouter) //http://localhost:3000/api/v1/users/metodoUsar/id en caso de necesitar
app.use("/api/v1/products",ProductRouter)
app.use("/api/v1/session",SessionRouter)


app.listen(PORT,()=>{
    console.log(`Server on Running in Port ${PORT}`)
})