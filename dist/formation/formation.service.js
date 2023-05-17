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
exports.FormationService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const abstractmodel_1 = require("../utils/abstractmodel");
const formation_entity_1 = require("./entities/formation.entity");
let FormationService = class FormationService extends abstractmodel_1.AbstractModel {
    constructor(formationModel) {
        super(formationModel);
        this.formationModel = formationModel;
    }
    async findByNiveau() {
        try {
            return await this.formationModel.aggregate().group({
                _id: { _id: { $substr: ["$nom", { $subtract: [{ $strLenBytes: "$nom" }, 8] }, -1] }, departement: "$departement" },
                total: {
                    $sum: 1
                }
            }).addFields({
                "departement": { "$toObjectId": "$_id.departement" }
            }).lookup({
                from: "departements",
                localField: "departement",
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
};
FormationService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(formation_entity_1.Formation.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], FormationService);
exports.FormationService = FormationService;
//# sourceMappingURL=formation.service.js.map