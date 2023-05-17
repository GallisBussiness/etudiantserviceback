import { IsBoolean, IsOptional, IsString } from "class-validator";

export class CreateSessionDto {
@IsString()
nom: string;

@IsOptional()
@IsBoolean()
etat: boolean;
}
