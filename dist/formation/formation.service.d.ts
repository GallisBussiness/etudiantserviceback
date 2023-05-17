import { Model } from 'mongoose';
import { AbstractModel } from 'src/utils/abstractmodel';
import { CreateFormationDto } from './dto/create-formation.dto';
import { UpdateFormationDto } from './dto/update-formation.dto';
import { Formation, FormationDocument } from './entities/formation.entity';
export declare class FormationService extends AbstractModel<Formation, CreateFormationDto, UpdateFormationDto> {
    private formationModel;
    constructor(formationModel: Model<FormationDocument>);
    findByNiveau(): Promise<any>;
}
