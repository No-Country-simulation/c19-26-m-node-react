class BaseService {
    constructor(manager) {
        this.manager = manager;
        console.log("Manager instance:", this.manager)
    }

    async findAll() {
        try {
            console.log("Llamando a getAll en el manager...");
            const items = await this.manager.getAll(); 
            if (!items || items.length === 0) {
                console.log("No se encontraron items."); 
                return { success: false, error: "No se encontraron items" };
            }
            return {
                success: true,
                message: "Items traídos con éxito",
                items
            };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async findById(id) {
        try {
            const item = await this.manager.getById(id);
            console.log("item filtrado", item)
            if (!item) {
                return { success: false, error: "Item no encontrado" };
            }
            return {
                success: true,
                message: "Item traído con éxito",
                item
            };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async createOne(data) {
        try {
            const item = await this.manager.createOne(data);
            if (!item) {
                return { success: false, error: "Error al crear el item" };
            }
            return {
                success: true,
                message: "Item creado con éxito",
                item
            };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async updateOne(id, data) {
        try {
            const item = await this.manager.updateOne(id, data);
            if (!item) {
                return { success: false, error: "No se pudo actualizar el item" };
            }
            return {
                success: true,
                message: "Item actualizado con éxito",
                item
            };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }

    async deleteOne(id) {
        try {
            const item = await this.manager.deleteOne(id);
            if (!item) {
                return { success: false, error: "Error al eliminar el item" };
            }
            return {
                success: true,
                message: "Item eliminado con éxito",
                item
            };
        } catch (error) {
            return { success: false, error: error.message };
        }
    }
}

export default BaseService;
