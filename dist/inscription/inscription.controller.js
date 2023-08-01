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
exports.InscriptionController = void 0;
const common_1 = require("@nestjs/common");
const inscription_service_1 = require("./inscription.service");
const create_inscription_dto_1 = require("./dto/create-inscription.dto");
const update_inscription_dto_1 = require("./dto/update-inscription.dto");
const etudiant_service_1 = require("../etudiant/etudiant.service");
let InscriptionController = class InscriptionController {
    constructor(inscriptionService, etudiantService) {
        this.inscriptionService = inscriptionService;
        this.etudiantService = etudiantService;
    }
    create(createInscriptionDto) {
        return this.inscriptionService.create(createInscriptionDto);
    }
    findAll() {
        return this.inscriptionService.findAll();
    }
    findTotalByDepartement(idP) {
        return this.inscriptionService.findTotalByDepartment(idP);
    }
    findTotalByFormation(idF) {
        return this.inscriptionService.findTotalByFormation(idF);
    }
    findBySession(id) {
        return this.inscriptionService.findBySession(id);
    }
    findBySessionAndFormation(session, formation) {
        return this.inscriptionService.findBySessionAndFormation(session, formation);
    }
    findByEtudiant(id) {
        return this.inscriptionService.findByEtudiant(id);
    }
    findOne(id) {
        return this.inscriptionService.findOne(id);
    }
    async update(id, updateInscriptionDto) {
        const ins = await this.inscriptionService.update(id, updateInscriptionDto);
        if ((updateInscriptionDto === null || updateInscriptionDto === void 0 ? void 0 : updateInscriptionDto.active) === true) {
            await this.etudiantService.update(ins.etudiant._id, { formation: updateInscriptionDto.formation });
        }
        return ins;
    }
    remove(id) {
        return this.inscriptionService.remove(id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_inscription_dto_1.CreateInscriptionDto]),
    __metadata("design:returntype", void 0)
], InscriptionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], InscriptionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('gettotalbydepartment/:idP'),
    __param(0, (0, common_1.Param)('idP')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InscriptionController.prototype, "findTotalByDepartement", null);
__decorate([
    (0, common_1.Get)('gettotalbyformation/:idF'),
    __param(0, (0, common_1.Param)('idF')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InscriptionController.prototype, "findTotalByFormation", null);
__decorate([
    (0, common_1.Get)('/bysession/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InscriptionController.prototype, "findBySession", null);
__decorate([
    (0, common_1.Get)('/bysessionandformation/:session/:formation'),
    __param(0, (0, common_1.Param)('session')),
    __param(1, (0, common_1.Param)('formation')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", void 0)
], InscriptionController.prototype, "findBySessionAndFormation", null);
__decorate([
    (0, common_1.Get)('/byetudiant/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InscriptionController.prototype, "findByEtudiant", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InscriptionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_inscription_dto_1.UpdateInscriptionDto]),
    __metadata("design:returntype", Promise)
], InscriptionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], InscriptionController.prototype, "remove", null);
InscriptionController = __decorate([
    (0, common_1.Controller)('inscription'),
    __metadata("design:paramtypes", [inscription_service_1.InscriptionService, etudiant_service_1.EtudiantService])
], InscriptionController);
exports.InscriptionController = InscriptionController;
//# sourceMappingURL=inscription.controller.js.map