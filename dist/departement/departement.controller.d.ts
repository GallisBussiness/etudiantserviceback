import { DepartementService } from './departement.service';
import { CreateDepartementDto } from './dto/create-departement.dto';
import { UpdateDepartementDto } from './dto/update-departement.dto';
export declare class DepartementController {
    private readonly departementService;
    constructor(departementService: DepartementService);
    create(createDepartementDto: CreateDepartementDto): Promise<import("./entities/departement.entity").Departement>;
    findAll(): Promise<import("./entities/departement.entity").Departement[]>;
    findOne(id: string): Promise<import("./entities/departement.entity").Departement>;
    update(id: string, updateDepartementDto: UpdateDepartementDto): Promise<import("./entities/departement.entity").Departement>;
    remove(id: string): Promise<import("./entities/departement.entity").Departement>;
}
