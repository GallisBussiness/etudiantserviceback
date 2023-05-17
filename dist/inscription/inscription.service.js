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
exports.InscriptionService = void 0;
const common_1 = require("@nestjs/common");
const abstractmodel_1 = require("../utils/abstractmodel");
const inscription_entity_1 = require("./entities/inscription.entity");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let InscriptionService = class InscriptionService extends abstractmodel_1.AbstractModel {
    constructor(inscriptionModel) {
        super(inscriptionModel);
        this.inscriptionModel = inscriptionModel;
    }
    async findBySession(id) {
        try {
            return await this.inscriptionModel.find({ session: id });
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 500);
        }
    }
    async findBySessionAndFormation(session, formation) {
        try {
            return await this.inscriptionModel.find({ session, formation });
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 500);
        }
    }
    async findByEtudiant(id) {
        try {
            return await this.inscriptionModel.find({ etudiant: id });
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 500);
        }
    }
    async findTotalByDepartment(id) {
        try {
            return await this.inscriptionModel.aggregate([{ $match: {
                        "session": id,
                        "active": true
                    } }, { $addFields: {
                        "etudiant": { "$toObjectId": "$etudiant" },
                        "session": { "$toObjectId": "$session" },
                        "formation": { "$toObjectId": "$formation" },
                    } }]).lookup({
                from: "formations",
                localField: "formation",
                foreignField: "_id",
                as: "formation"
            }).unwind({
                path: "$formation",
                preserveNullAndEmptyArrays: true
            }).group({
                _id: "$formation.departement",
                total: {
                    $sum: 1
                },
            }).addFields({
                "_id": { "$toObjectId": "$_id" }
            }).lookup({
                from: "departements",
                localField: "_id",
                foreignField: "_id",
                as: "departement"
            }).unwind({
                path: "$departement",
                preserveNullAndEmptyArrays: true
            });
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 500);
        }
    }
    async findTotalByFormation(id) {
        try {
            return await this.inscriptionModel.aggregate([{ $match: {
                        "session": id,
                        "active": true
                    } }]).group({
                _id: "$formation",
                total: {
                    $sum: 1
                }
            }).addFields({
                "_id": { "$toObjectId": "$_id" }
            }).lookup({
                from: "formations",
                localField: "_id",
                foreignField: "_id",
                as: "formation"
            }).unwind({
                path: "$formation",
                preserveNullAndEmptyArrays: true
            });
        }
        catch (error) {
            throw new common_1.HttpException(error.message, 500);
        }
    }
};
InscriptionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(inscription_entity_1.Inscription.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], InscriptionService);
exports.InscriptionService = InscriptionService;
//# sourceMappingURL=inscription.service.js.map