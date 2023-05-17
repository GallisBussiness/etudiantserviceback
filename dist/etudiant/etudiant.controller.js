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
exports.EtudiantController = void 0;
const common_1 = require("@nestjs/common");
const convert_base64_to_image_1 = require("convert-base64-to-image");
const etudiant_service_1 = require("./etudiant.service");
const create_etudiant_dto_1 = require("./dto/create-etudiant.dto");
const update_etudiant_dto_1 = require("./dto/update-etudiant.dto");
const fs_1 = require("fs");
let EtudiantController = class EtudiantController {
    constructor(etudiantService) {
        this.etudiantService = etudiantService;
    }
    create(createEtudiantDto) {
        return this.etudiantService.create(createEtudiantDto);
    }
    findAll() {
        return this.etudiantService.findAll();
    }
    findOne(id) {
        return this.etudiantService.findOne(id);
    }
    findById(searchDTO) {
        return this.etudiantService.findById(searchDTO.id);
    }
    update(id, updateEtudiantDto) {
        return this.etudiantService.update(id, updateEtudiantDto);
    }
    async avatar(id, updateAvatarDto) {
        const unixPath = Date.now() + '-' + Math.round(Math.random() * 1e9);
        const pathToSaveImage = `./uploads/${unixPath}-avatar.jpg`;
        (0, convert_base64_to_image_1.converBase64ToImage)(updateAvatarDto.avatar, pathToSaveImage);
        const lt = await this.etudiantService.update(id, { avatar: `uploads/${unixPath}-avatar.jpg` });
        if (lt.avatar !== 'uploads/default_avatar.jpg') {
            (0, fs_1.unlinkSync)(lt.avatar);
        }
        return lt;
    }
    remove(id) {
        return this.etudiantService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_etudiant_dto_1.CreateEtudiantDto]),
    __metadata("design:returntype", void 0)
], EtudiantController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], EtudiantController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EtudiantController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)('byid'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], EtudiantController.prototype, "findById", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_etudiant_dto_1.UpdateEtudiantDto]),
    __metadata("design:returntype", void 0)
], EtudiantController.prototype, "update", null);
__decorate([
    (0, common_1.Patch)('avatar/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], EtudiantController.prototype, "avatar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EtudiantController.prototype, "remove", null);
EtudiantController = __decorate([
    (0, common_1.Controller)('etudiant'),
    __metadata("design:paramtypes", [etudiant_service_1.EtudiantService])
], EtudiantController);
exports.EtudiantController = EtudiantController;
//# sourceMappingURL=etudiant.controller.js.map