import {CreateOneProductController,DeleteOneProductController,GetAllProductsController,GetOneProductController,UpdateOneProductController} from "../Controllers/Product.controller.js";
import {Router} from "express"

const router = Router()

router.get("/getAllProducts",GetAllProductsController)//Si funciona
router.get("/getProductById/:id",GetOneProductController)// si funciona
router.post("/createProduct",CreateOneProductController) // si funciona
router.put("/updateProduct/:id",UpdateOneProductController)//si funciona
router.delete("/deleteProduct/:id",DeleteOneProductController)// si funciona

export default router;