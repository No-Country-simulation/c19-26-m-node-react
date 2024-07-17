import ServiceUser from "../Services/user.service.js";

export const GetAllUsersController = async (req,res)=>{
    try {
        const user = await ServiceUser.findAll()
        console.log("Usuarios traidos",user)
        res.json(user)
    } catch (error) {
        res.status(500).json({error : error.message})
    }
}


export const GetOneUserController = async (req,res)=>{
    try {
        const {id} = req.params //saca el id de los parametros de url
        const user = await ServiceUser.findById(id)
        console.log("Usuario traido con exito")
        res.json(user)
    } catch (error) {
        res.status(500).json({error : error.message})
    }
}

export const CreateOneUserController = async (req,res)=>{
    try {
        const {data} = req.body //saca la data del body de la query
        const user = await ServiceUser.createOne(data)
        console.log("Usuario creado con exito", user)
        res.json(user)
    } catch (error) {
        res.status(500).json({error : error.message})
    }
}

export const UpdateOneUserController = async (req,res)=>{
   try {
    const {data} = req.body
    const {id} = req.params
    const user = await ServiceUser.updateOne(id,data)
    console.log("Usuario actualizado con exito",user)
    res.json(user)
   } catch (error) {
    res.status(500).json({error : error.message})
   }
}

export const DeleteOneUserController = async (req,res)=>{
    try {
        const {id} = req.params
        const user = await ServiceUser.deleteOne(id)
        console.log("Usuario Eliminado con exito",user)
        res.json(user)
    } catch (error) {
        res.status(500).json({error : error.message})
    }
}