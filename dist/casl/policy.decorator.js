"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckAbility = exports.POLICY_KEY = void 0;
const common_1 = require("@nestjs/common");
exports.POLICY_KEY = 'POLICY_KEY';
const CheckAbility = (...requirements) => (0, common_1.SetMetadata)(exports.POLICY_KEY, requirements);
exports.CheckAbility = CheckAbility;
//# sourceMappingURL=policy.decorator.js.map