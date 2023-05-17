import { USER_ROLE } from '../entities/user.entity';
export declare class CreateUserDto {
    prenom: string;
    nom: string;
    email: string;
    password: string;
    role: USER_ROLE;
}
