import { Model } from 'mongoose';
import { AbstractModel } from 'src/utils/abstractmodel';
import { CreateUfrDto } from './dto/create-ufr.dto';
import { UpdateUfrDto } from './dto/update-ufr.dto';
import { Ufr, UfrDocument } from './entities/ufr.entity';
export declare class UfrService extends AbstractModel<Ufr, CreateUfrDto, UpdateUfrDto> {
    private ufrModel;
    constructor(ufrModel: Model<UfrDocument>);
}
