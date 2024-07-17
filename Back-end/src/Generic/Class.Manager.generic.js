class BaseManager {
    constructor(model) {
        this.model = model;
    }

    async getAll() {
        try {
            const documents = await this.model.find();
            return documents;
        } catch (error) {
            throw error;
        }
    }

    async getById(id) {
        try {
            const document = await this.model.findById(id);
            return document;
        } catch (error) {
            throw error;
        }
    }

    async createOne(data) {
        try {
            const document = await this.model.create(data);
            return document;
        } catch (error) {
            throw error;
        }
    }

    async updateOne(id, data) {
        try {
            const document = await this.model.findByIdAndUpdate(id, data, { new: true });
            return document;
        } catch (error) {
            throw error;
        }
    }

    async updateMany(query, data) {
        try {
            const result = await this.model.updateMany(query, data);
            return result;
        } catch (error) {
            throw error;
        }
    }

    async deleteOne(id) {
        try {
            const document = await this.model.findByIdAndDelete(id);
            return document;
        } catch (error) {
            throw error;
        }
    }

    async deleteMany(query) {
        try {
            const result = await this.model.deleteMany(query);
            return result;
        } catch (error) {
            throw error;
        }
    }
}

export default BaseManager;