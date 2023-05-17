"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateDepartementDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_departement_dto_1 = require("./create-departement.dto");
class UpdateDepartementDto extends (0, mapped_types_1.PartialType)(create_departement_dto_1.CreateDepartementDto) {
}
exports.UpdateDepartementDto = UpdateDepartementDto;
//# sourceMappingURL=update-departement.dto.js.map