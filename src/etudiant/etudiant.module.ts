import { Module } from '@nestjs/common';
import { EtudiantService } from './etudiant.service';
import { EtudiantController } from './etudiant.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Etudiant, EtudiantSchema } from './entities/etudiant.entity';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      { name: Etudiant.name,useFactory: () => {
        const schema = EtudiantSchema;
        schema.plugin(require('mongoose-autopopulate'));
        return schema;
      }, },
    ])
  ],
  controllers: [EtudiantController],
  providers: [EtudiantService],
  exports: [EtudiantService],
})
export class EtudiantModule {}
