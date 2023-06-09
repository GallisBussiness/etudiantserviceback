"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InscriptionModule = void 0;
const common_1 = require("@nestjs/common");
const inscription_service_1 = require("./inscription.service");
const inscription_controller_1 = require("./inscription.controller");
const mongoose_1 = require("@nestjs/mongoose");
const inscription_entity_1 = require("./entities/inscription.entity");
const etudiant_module_1 = require("../etudiant/etudiant.module");
let InscriptionModule = class InscriptionModule {
};
InscriptionModule = __decorate([
    (0, common_1.Module)({
        imports: [mongoose_1.MongooseModule.forFeatureAsync([{ name: inscription_entity_1.Inscription.name, useFactory: () => {
                        const schema = inscription_entity_1.InscriptionSchema;
                        schema.plugin(require('mongoose-autopopulate'));
                        return schema;
                    } }]),
            etudiant_module_1.EtudiantModule,
        ],
        controllers: [inscription_controller_1.InscriptionController],
        providers: [inscription_service_1.InscriptionService]
    })
], InscriptionModule);
exports.InscriptionModule = InscriptionModule;
//# sourceMappingURL=inscription.module.js.map