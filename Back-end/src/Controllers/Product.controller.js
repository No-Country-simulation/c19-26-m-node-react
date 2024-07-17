import ServiceProduct from "../Services/product.service.js";

export const GetAllProductsController = async (req,res)=>{
    try {
        const product = await ServiceProduct.findAll()
        console.log("Productos traidos",product)
        res.json(product)
    } catch (error) {
        res.status(500).json({error : error.message})
    }
}

export const GetOneProductController = async (req,res)=>{
    try {
        const {id} = req.params
        const product = await ServiceProduct.findById(id)
        console.log("Producto traido con exito")
        res.json(product)
    }
    catch (error) {
        res.status(500).json({error : error.message})
    }
}

export const CreateOneProductController = async (req,res)=>{
    try {
        const {data} = req.body
        const product = await ServiceProduct.createOne(data)
        console.log("Producto creado con exito", product)
        res.json(product)
    } catch (error) {
        res.status(500).json({error : error.message})
    }
}

export const UpdateOneProductController = async (req,res)=>{
    try {
        const {data} = req.body
        const {id} = req.params
        const product = await ServiceProduct.updateOne(id,data)
        console.log("Producto actualizado con exito",product)
        res.json(product)
    } catch (error) {
        res.status(500).json({error : error.message})
    }
}

export const DeleteOneProductController = async (req,res)=>{
    try {
        const {id} = req.params
        const product = await ServiceProduct.deleteOne(id)
        console.log("Producto Eliminado con exito",product)
        res.json(product)
    } catch (error) {
        res.status(500).json({error : error.message})
    }
}