import { UfrService } from './ufr.service';
import { CreateUfrDto } from './dto/create-ufr.dto';
import { UpdateUfrDto } from './dto/update-ufr.dto';
export declare class UfrController {
    private readonly ufrService;
    constructor(ufrService: UfrService);
    create(createUfrDto: CreateUfrDto): Promise<import("./entities/ufr.entity").Ufr>;
    findAll(): Promise<import("./entities/ufr.entity").Ufr[]>;
    findOne(id: string): Promise<import("./entities/ufr.entity").Ufr>;
    update(id: string, updateUfrDto: UpdateUfrDto): Promise<import("./entities/ufr.entity").Ufr>;
    remove(id: string): Promise<import("./entities/ufr.entity").Ufr>;
}
