import { Model } from 'mongoose';
import { CreateEtudiantDto } from './dto/create-etudiant.dto';
import { UpdateEtudiantDto } from './dto/update-etudiant.dto';
import { Etudiant, EtudiantDocument } from './entities/etudiant.entity';
export declare class EtudiantService {
    private etudiantModel;
    constructor(etudiantModel: Model<EtudiantDocument>);
    create(createEtudiantDto: CreateEtudiantDto): Promise<Etudiant>;
    findAll(): Promise<Etudiant[]>;
    findOne(id: string): Promise<Etudiant>;
    findById(id: string): Promise<Etudiant>;
    update(id: string, updateEtudiantDto: UpdateEtudiantDto): Promise<Etudiant>;
    remove(id: string): Promise<Etudiant>;
}
