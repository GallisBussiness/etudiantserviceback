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
exports.EtudiantSchema = exports.Etudiant = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const formation_entity_1 = require("../../formation/entities/formation.entity");
let Etudiant = class Etudiant {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Etudiant.prototype, "nce", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, unique: true }),
    __metadata("design:type", String)
], Etudiant.prototype, "cni", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Etudiant.prototype, "prenom", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Etudiant.prototype, "nom", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Etudiant.prototype, "sexe", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Etudiant.prototype, "dateDeNaissance", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Etudiant.prototype, "lieuDeNaissance", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Etudiant.prototype, "adresse", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], Etudiant.prototype, "telephone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], Etudiant.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean, default: false }),
    __metadata("design:type", Boolean)
], Etudiant.prototype, "apte", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: 'uploads/default_avatar.jpg' }),
    __metadata("design:type", String)
], Etudiant.prototype, "avatar", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Types.ObjectId, ref: formation_entity_1.Formation.name, autopopulate: true }),
    __metadata("design:type", String)
], Etudiant.prototype, "formation", void 0);
Etudiant = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Etudiant);
exports.Etudiant = Etudiant;
exports.EtudiantSchema = mongoose_1.SchemaFactory.createForClass(Etudiant);
//# sourceMappingURL=etudiant.entity.js.map