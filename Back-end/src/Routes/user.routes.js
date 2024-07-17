import { CreateOneUserController, DeleteOneUserController, GetAllUsersController, GetOneUserController, UpdateOneUserController } from "../Controllers/User.controller.js";
import {Router} from "express"

const router = Router()

router.get("/getAllUsers",GetAllUsersController),//Funciona
router.get("/getUserById/:id",GetOneUserController), //Funciona
router.post("/createUser",CreateOneUserController), //Funciona
router.put("/updateUser/:id",UpdateOneUserController) //Funciona
router.delete("/deleteOneUser/:id",DeleteOneUserController)  //Funciona

export default router;