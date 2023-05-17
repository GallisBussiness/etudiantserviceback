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
exports.CreateEtudiantDto = void 0;
const class_validator_1 = require("class-validator");
class CreateEtudiantDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEtudiantDto.prototype, "nce", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEtudiantDto.prototype, "cni", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEtudiantDto.prototype, "prenom", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEtudiantDto.prototype, "nom", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEtudiantDto.prototype, "sexe", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEtudiantDto.prototype, "dateDeNaissance", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEtudiantDto.prototype, "lieuDeNaissance", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEtudiantDto.prototype, "adresse", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], CreateEtudiantDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsPhoneNumber)('SN'),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateEtudiantDto.prototype, "telephone", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], CreateEtudiantDto.prototype, "apte", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateEtudiantDto.prototype, "avatar", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], CreateEtudiantDto.prototype, "formation", void 0);
exports.CreateEtudiantDto = CreateEtudiantDto;
//# sourceMappingURL=create-etudiant.dto.js.map