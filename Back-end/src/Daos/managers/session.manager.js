import ManagerUser from "./user.manager.js";
import bcrypt from "bcrypt";

class SessionManager {
  async login(Correo_Electronico, Password) {
    try {
      const user = await ManagerUser.getUserByEmail(Correo_Electronico);
      if (!user) {
        console.error("Error el usuario no fue encontrado");
        return null;
      }

      const passwordCompare = await bcrypt.compare(Password, user.Password);
      if (!passwordCompare) {
        console.error("Error las contraseñas no coinciden");
        return null;
      }
      return user;
    } catch (error) {
      console.error("Error en el manager de LOGIN", error);
    }
  }

  async register(Correo_Electronico, First_Name, Last_Name, Password, Last_connection, Age) {
    try {
      const existUser = await ManagerUser.getUserByEmail(Correo_Electronico);
      if (existUser) {
        console.error("El usuario ya existe en la db");
        return { success: false, message: "El usuario ya existe en la db" };
      }

      const encriptPassword = await bcrypt.hash(Password, 10);
      const newUser = await ManagerUser.createOne({
        Correo_Electronico,
        First_Name,
        Last_Name,
        Password: encriptPassword,
        Last_connection,
        Age,
      });

      return { success: true, message: "Usuario creado con exito", newUser };
    } catch (error) {
      console.error("Error en el manager de REGISTER", error);
      return { success: false, message: "Error en el registro", error };
    }
  }
}

const ManagerSession = new SessionManager();
export default ManagerSession;
