import ManagerProduct from "../Daos/managers/product.manager.js";
import BaseService from "../Generic/Class.Service.generic.js";

class ProductService extends BaseService{
    constructor(){
        super(ManagerProduct)
    }
    //en caso de necesitar cosas o metodos especificos los implementamos aca
}

const ServiceProduct = new ProductService()
export default ServiceProduct