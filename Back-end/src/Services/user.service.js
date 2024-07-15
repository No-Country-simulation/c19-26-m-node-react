import ManagerUser from "../Daos/managers/user.manager.js";
import BaseService from "../Generic/Class.Service.generic.js";

class UserService extends BaseService{
    constructor(){
        super(ManagerUser)
    }
    //en caso de necesitar cosas o metodos especificos los implementamos aca
}

const ServiceUser = new UserService()
export default ServiceUser