"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const hash_pass_from_request_1 = require("../utils/hash-pass-from-request");
const user_entity_1 = require("./entities/user.entity");
let UserService = class UserService {
    constructor(userModel) {
        this.userModel = userModel;
    }
    async create(createUserDto) {
        try {
            const createUser = await (0, hash_pass_from_request_1.hashFromRequest)(createUserDto);
            const createdUser = new this.userModel(createUser);
            return await createdUser.save();
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 500);
        }
    }
    async findAll() {
        try {
            return await this.userModel.find({}, { password: 0, __v: 0 });
            ;
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 500);
        }
    }
    async findOne(id) {
        try {
            return await this.userModel.findById(id, { password: 0, __v: 0 });
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 500);
        }
    }
    async update(id, updateUserDto) {
        try {
            return await this.userModel.findByIdAndUpdate(id, updateUserDto);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 500);
        }
    }
    async remove(id) {
        try {
            return await this.userModel.findByIdAndDelete(id);
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 500);
        }
    }
    async findByUsername(username) {
        try {
            return await this.userModel.findOne({ email: username });
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 500);
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_entity_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map