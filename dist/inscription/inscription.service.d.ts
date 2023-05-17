import { CreateInscriptionDto } from './dto/create-inscription.dto';
import { UpdateInscriptionDto } from './dto/update-inscription.dto';
import { AbstractModel } from 'src/utils/abstractmodel';
import { Inscription, InscriptionDocument } from './entities/inscription.entity';
import { Model } from 'mongoose';
export declare class InscriptionService extends AbstractModel<Inscription, CreateInscriptionDto, UpdateInscriptionDto> {
    private inscriptionModel;
    constructor(inscriptionModel: Model<InscriptionDocument>);
    findBySession(id: string): Promise<Inscription[]>;
    findBySessionAndFormation(session: string, formation: string): Promise<Inscription[]>;
    findByEtudiant(id: string): Promise<Inscription[]>;
    findTotalByDepartment(id: string): Promise<any>;
    findTotalByFormation(id: string): Promise<any>;
}
