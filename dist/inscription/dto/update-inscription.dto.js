"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInscriptionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_inscription_dto_1 = require("./create-inscription.dto");
class UpdateInscriptionDto extends (0, mapped_types_1.PartialType)(create_inscription_dto_1.CreateInscriptionDto) {
}
exports.UpdateInscriptionDto = UpdateInscriptionDto;
//# sourceMappingURL=update-inscription.dto.js.map