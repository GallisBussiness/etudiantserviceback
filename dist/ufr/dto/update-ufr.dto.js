"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUfrDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_ufr_dto_1 = require("./create-ufr.dto");
class UpdateUfrDto extends (0, mapped_types_1.PartialType)(create_ufr_dto_1.CreateUfrDto) {
}
exports.UpdateUfrDto = UpdateUfrDto;
//# sourceMappingURL=update-ufr.dto.js.map