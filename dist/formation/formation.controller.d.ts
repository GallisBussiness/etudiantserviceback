import { FormationService } from './formation.service';
import { CreateFormationDto } from './dto/create-formation.dto';
import { UpdateFormationDto } from './dto/update-formation.dto';
export declare class FormationController {
    private readonly formationService;
    constructor(formationService: FormationService);
    create(createFormationDto: CreateFormationDto): Promise<import("./entities/formation.entity").Formation>;
    findAll(): Promise<import("./entities/formation.entity").Formation[]>;
    findByNiveau(): Promise<any>;
    findOne(id: string): Promise<import("./entities/formation.entity").Formation>;
    update(id: string, updateFormationDto: UpdateFormationDto): Promise<import("./entities/formation.entity").Formation>;
    remove(id: string): Promise<import("./entities/formation.entity").Formation>;
}
