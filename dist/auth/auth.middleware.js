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
exports.AuthMiddleware = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const authoriedKeys = ["b5909d77-6712-4982-9641-40acb07bfeb4"];
let AuthMiddleware = class AuthMiddleware {
    constructor(jwtService) {
        this.jwtService = jwtService;
    }
    use(req, res, next) {
        if (req.headers.authorization) {
            const token = req.headers.authorization.split(' ')[1];
            if (!authoriedKeys.includes(token)) {
                try {
                    const decoded = this.jwtService.verify(token);
                    const { email, prenom, nom, role, _id } = decoded;
                    req.user = { email, prenom, nom, role, _id };
                }
                catch (error) {
                    throw new common_1.HttpException("Authentication failed", 440);
                }
            }
        }
        next();
    }
};
AuthMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService])
], AuthMiddleware);
exports.AuthMiddleware = AuthMiddleware;
//# sourceMappingURL=auth.middleware.js.map