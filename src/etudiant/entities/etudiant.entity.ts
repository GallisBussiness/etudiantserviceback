import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';
import { Formation } from 'src/formation/entities/formation.entity';
export type EtudiantDocument = Etudiant & Document;

@Schema({ timestamps: true })
export class Etudiant {
  _id: string;

  
  @Prop({ type: String })
  nce: string;

  @Prop({ type: String, required: true, unique: true })
  cni: string;

  @Prop({ type: String, required: true })
  prenom: string;

  @Prop({ type: String, required: true })
  nom: string;

  @Prop({ type: String, required: true })
  sexe: string;

  @Prop({ type: String, required: true })
  dateDeNaissance: string;

  @Prop({ type: String, required: true })
  lieuDeNaissance: string;

  @Prop({ type: String, required: true })
  adresse: string;

  @Prop({ type: String, required: true })
  telephone: string;

  @Prop({ type: String })
  email: string;

  @Prop({ type: Boolean, default: false })
  apte: boolean;

  @Prop({ type: String, default: 'uploads/default_avatar.jpg' })
  avatar: string;

  @Prop({ type: Types.ObjectId,ref: Formation.name,autopopulate: true })
  formation: string;

}

export const EtudiantSchema = SchemaFactory.createForClass(Etudiant);
