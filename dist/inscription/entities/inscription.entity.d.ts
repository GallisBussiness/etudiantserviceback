/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document } from "mongoose";
import { Etudiant } from "src/etudiant/entities/etudiant.entity";
import { Formation } from "src/formation/entities/formation.entity";
export type InscriptionDocument = Inscription & Document;
export declare class Inscription {
    _id: string;
    etudiant: Etudiant;
    session: string;
    formation: Formation;
    active: boolean;
    is_codified: boolean;
}
export declare const InscriptionSchema: import("mongoose").Schema<Inscription, import("mongoose").Model<Inscription, any, any, any, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Inscription>;
