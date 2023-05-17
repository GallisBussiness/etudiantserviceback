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
exports.InscriptionSchema = exports.Inscription = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const etudiant_entity_1 = require("../../etudiant/entities/etudiant.entity");
const formation_entity_1 = require("../../formation/entities/formation.entity");
const session_entity_1 = require("../../session/entities/session.entity");
let Inscription = class Inscription {
};
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: etudiant_entity_1.Etudiant.name, required: true, autopopulate: true }),
    __metadata("design:type", etudiant_entity_1.Etudiant)
], Inscription.prototype, "etudiant", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: session_entity_1.Session.name, required: true, autopopulate: true }),
    __metadata("design:type", String)
], Inscription.prototype, "session", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: formation_entity_1.Formation.name, required: true, autopopulate: true }),
    __metadata("design:type", formation_entity_1.Formation)
], Inscription.prototype, "formation", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, required: true, default: false }),
    __metadata("design:type", Boolean)
], Inscription.prototype, "active", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, required: true, default: false }),
    __metadata("design:type", Boolean)
], Inscription.prototype, "is_codified", void 0);
Inscription = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Inscription);
exports.Inscription = Inscription;
exports.InscriptionSchema = mongoose_1.SchemaFactory.createForClass(Inscription);
//# sourceMappingURL=inscription.entity.js.map