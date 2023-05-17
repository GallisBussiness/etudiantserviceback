import { Module } from '@nestjs/common';
import { FormationService } from './formation.service';
import { FormationController } from './formation.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Formation, FormationSchema } from './entities/formation.entity';

@Module({
  imports: [MongooseModule.forFeatureAsync([{name: Formation.name, useFactory: () => {
    const schema = FormationSchema;
    schema.plugin(require('mongoose-autopopulate'));
    return schema;
  }}])],
  controllers: [FormationController],
  providers: [FormationService]
})
export class FormationModule {}
