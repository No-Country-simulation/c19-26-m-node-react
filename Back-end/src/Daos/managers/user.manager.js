import User from "../models/user.model.js"
import BaseManager from "../../Generic/Class.Manager.generic.js";

class UserManager extends BaseManager {
  constructor(){
    super(User)
  }

  async getUserByEmail(email){
    try {
      const user = User.findOne({Correo_Electronico : email})
      return user
    } catch (error) {
      throw error
    }
  }
}

const ManagerUser = new UserManager;
export default ManagerUser;