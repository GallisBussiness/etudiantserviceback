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
exports.SessionService = void 0;
const common_1 = require("@nestjs/common");
const abstractmodel_1 = require("../utils/abstractmodel");
const session_entity_1 = require("./entities/session.entity");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let SessionService = class SessionService extends abstractmodel_1.AbstractModel {
    constructor(sessionModel) {
        super(sessionModel);
        this.sessionModel = sessionModel;
    }
    async findAllActivate() {
        try {
            return await this.sessionModel.find({ etat: true });
        }
        catch (err) {
            throw new common_1.HttpException(err.message, 500);
        }
    }
};
SessionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(session_entity_1.Session.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SessionService);
exports.SessionService = SessionService;
//# sourceMappingURL=session.service.js.map