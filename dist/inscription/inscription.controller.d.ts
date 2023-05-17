import { InscriptionService } from './inscription.service';
import { CreateInscriptionDto } from './dto/create-inscription.dto';
import { UpdateInscriptionDto } from './dto/update-inscription.dto';
import { EtudiantService } from 'src/etudiant/etudiant.service';
export declare class InscriptionController {
    private readonly inscriptionService;
    private etudiantService;
    constructor(inscriptionService: InscriptionService, etudiantService: EtudiantService);
    create(createInscriptionDto: CreateInscriptionDto): Promise<import("./entities/inscription.entity").Inscription>;
    findAll(): Promise<import("./entities/inscription.entity").Inscription[]>;
    findTotalByDepartement(idP: string): Promise<any>;
    findTotalByFormation(idF: string): Promise<any>;
    findBySession(id: string): Promise<import("./entities/inscription.entity").Inscription[]>;
    findBySessionAndFormation(session: string, formation: string): Promise<import("./entities/inscription.entity").Inscription[]>;
    findByEtudiant(id: string): Promise<import("./entities/inscription.entity").Inscription[]>;
    findOne(id: string): Promise<import("./entities/inscription.entity").Inscription>;
    update(id: string, updateInscriptionDto: UpdateInscriptionDto): Promise<import("./entities/inscription.entity").Inscription>;
    remove(id: string): Promise<import("./entities/inscription.entity").Inscription>;
}
