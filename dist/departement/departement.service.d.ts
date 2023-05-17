import { Model } from 'mongoose';
import { AbstractModel } from 'src/utils/abstractmodel';
import { CreateDepartementDto } from './dto/create-departement.dto';
import { UpdateDepartementDto } from './dto/update-departement.dto';
import { Departement, DepartementDocument } from './entities/departement.entity';
export declare class DepartementService extends AbstractModel<Departement, CreateDepartementDto, UpdateDepartementDto> {
    private departementModel;
    constructor(departementModel: Model<DepartementDocument>);
}
