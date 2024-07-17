import ManagerSession from "../Daos/managers/session.manager.js";
import { generateTokenJWT } from "../Utils/jwt.config.js";

class sessionService {
  async login(Correo_Electronico, Password) {
    try {
      const user = await ManagerSession.login(Correo_Electronico, Password);
      if (!user) {
        console.log("Contraseña o Correo Equivocado");
        return { success: false, message: "Contraseña o Correo Equivocado" };
      }
      const token = generateTokenJWT({ id: user._id, Correo: user.Correo_Electronico });
      return { success: true, user, token };
    } catch (error) {
      console.error("Error en el service de session", error);
      throw error;
    }
  }

  async register(Correo_Electronico, Age, Password, First_Name, Last_Name, Last_connection) {
    try {
      const user = await ManagerSession.register(
        Correo_Electronico,
        First_Name,
        Last_Name,
        Password,
        Last_connection,
        Age
      );
      return user;
    } catch (error) {
      console.error("Error en el service de Register", error);
      return { success: false, message: "Error en el registro", error };
    }
  }
}

const ServiceSession = new sessionService();
export default ServiceSession;
