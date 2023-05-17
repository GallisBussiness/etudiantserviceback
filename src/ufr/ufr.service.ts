import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbstractModel } from 'src/utils/abstractmodel';
import { CreateUfrDto } from './dto/create-ufr.dto';
import { UpdateUfrDto } from './dto/update-ufr.dto';
import { Ufr, UfrDocument } from './entities/ufr.entity';

@Injectable()
export class UfrService extends AbstractModel<Ufr,CreateUfrDto,UpdateUfrDto>{
  constructor(@InjectModel(Ufr.name) private ufrModel: Model<UfrDocument>) {
    super(ufrModel);
  }
}
