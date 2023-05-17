"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractModel = void 0;
const common_1 = require("@nestjs/common");
class AbstractModel {
    constructor(model) {
        this.model = model;
    }
    async create(createDto) {
        try {
            const createdD = new this.model(createDto);
            return await createdD.save();
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 500);
        }
    }
    async findAll() {
        try {
            return await this.model.find().sort({ createdAt: -1 });
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 500);
        }
    }
    async findOne(id) {
        try {
            return await this.model.findById(id);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 500);
        }
    }
    async update(id, updateDto) {
        try {
            return await this.model.findByIdAndUpdate(id, updateDto);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 500);
        }
    }
    async remove(id) {
        try {
            return await this.model.findByIdAndDelete(id);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 500);
        }
    }
}
exports.AbstractModel = AbstractModel;
//# sourceMappingURL=abstractmodel.js.map