import Product from "../models/products.model.js";
import BaseManager from "../../Generic/Class.Manager.generic.js";

class ProductManager extends BaseManager {
  constructor(){
    super(Product)
  }

  //en caso de necesitar agregamos metodos unicos para productos
}

const ManagerProduct = new ProductManager;
export default ManagerProduct;