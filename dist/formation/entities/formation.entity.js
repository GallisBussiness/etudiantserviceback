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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormationSchema = exports.Formation = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const departement_entity_1 = require("../../departement/entities/departement.entity");
let Formation = class Formation {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, unique: true }),
    __metadata("design:type", String)
], Formation.prototype, "nom", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: departement_entity_1.Departement.name, required: true, autopopulation: true }),
    __metadata("design:type", String)
], Formation.prototype, "departement", void 0);
Formation = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Formation);
exports.Formation = Formation;
exports.FormationSchema = mongoose_1.SchemaFactory.createForClass(Formation);
//# sourceMappingURL=formation.entity.js.map