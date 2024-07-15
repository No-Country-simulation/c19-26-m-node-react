import User from "../models/user.model.js"
import BaseManager from "../../Generic/Class.Manager.generic.js";

class UserManager extends BaseManager {
  constructor(){
    super(User)
  }

  //en caso de necesitar agregamos metodos unicos para usuarios
}

const ManagerUser = new UserManager;
export default ManagerUser;