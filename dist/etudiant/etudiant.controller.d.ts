import { EtudiantService } from './etudiant.service';
import { CreateEtudiantDto } from './dto/create-etudiant.dto';
import { UpdateEtudiantDto } from './dto/update-etudiant.dto';
export declare class EtudiantController {
    private readonly etudiantService;
    constructor(etudiantService: EtudiantService);
    create(createEtudiantDto: CreateEtudiantDto): Promise<import("./entities/etudiant.entity").Etudiant>;
    findAll(): Promise<import("./entities/etudiant.entity").Etudiant[]>;
    findOne(id: string): Promise<import("./entities/etudiant.entity").Etudiant>;
    findById(searchDTO: {
        id: string;
    }): Promise<import("./entities/etudiant.entity").Etudiant>;
    update(id: string, updateEtudiantDto: UpdateEtudiantDto): Promise<import("./entities/etudiant.entity").Etudiant>;
    avatar(id: string, updateAvatarDto: {
        avatar: string;
    }): Promise<import("./entities/etudiant.entity").Etudiant>;
    remove(id: string): Promise<import("./entities/etudiant.entity").Etudiant>;
}
