import ServiceSession from "../Services/session.service.js";

export async function LoginController(req, res) {
  try {
    const { Password, Correo_Electronico } = req.body;
    const { user, token } = await ServiceSession.login(Correo_Electronico, Password);
    if (!user) {
      return res.status(400).json({ success: false, message: "Contraseña o Correo Equivocado" });
    }
    req.session.jwt = token;
    console.log("Usuario en la session", req.session.jwt);
    res.json({ user, token });
  } catch (error) {
    console.error("Error en el controller", error);
    res.status(500).json({ message: "Invalido el email o password" });
  }
}

export async function RegisterControllerSession(req, res) {
  try {
    const { Correo_Electronico, First_Name, Last_Name, Password, Last_connection, Age } = req.body.data;
    console.log("Datos del body", Password, Correo_Electronico, First_Name, Last_Name, Last_connection, Age);

    const result = await ServiceSession.register(
      Correo_Electronico,
      Age,
      Password,
      First_Name,
      Last_Name,
      Last_connection
    );
    if (result.success) {
      res.status(200).json({
        success: true,
        message: "Registro exitoso",
        result: result.newUser
      });
    } else {
      res.status(400).json({ success: false, error: result.message });
    }
  } catch (error) {
    res.status(400).json({ success: false, error: "Error en el registro" });
    throw error;
  }
}

export async function LogOutControllerSession(req, res) {
  req.session.destroy(err => {
    if (err) {
      return res.status(500).json({ success: false, message: 'Error al cerrar sesión' });
    }
    res.status(200).json({ success: true, message: 'Sesión cerrada exitosamente' });
  });
}
