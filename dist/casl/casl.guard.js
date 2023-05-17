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
exports.CaslGuard = void 0;
const ability_1 = require("@casl/ability");
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const casl_ability_factory_1 = require("./casl-ability.factory");
const policy_decorator_1 = require("./policy.decorator");
let CaslGuard = class CaslGuard {
    constructor(reflector, caslAbilityFactory) {
        this.reflector = reflector;
        this.caslAbilityFactory = caslAbilityFactory;
    }
    async canActivate(context) {
        const rules = this.reflector.get(policy_decorator_1.POLICY_KEY, context.getHandler()) || [];
        const { user } = context.switchToHttp().getRequest();
        const ability = this.caslAbilityFactory.createForUser(user);
        try {
            rules.forEach(rule => ability_1.ForbiddenError.from(ability).setMessage('accés interdit !!').throwUnlessCan(rule.action, rule.subject));
            return true;
        }
        catch (err) {
            if (err instanceof ability_1.ForbiddenError)
                throw new common_1.ForbiddenException(err);
            (err.message);
        }
    }
};
CaslGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector,
        casl_ability_factory_1.CaslAbilityFactory])
], CaslGuard);
exports.CaslGuard = CaslGuard;
//# sourceMappingURL=casl.guard.js.map