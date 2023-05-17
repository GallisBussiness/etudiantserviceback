import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthService } from 'src/auth/auth.service';
import { User } from './entities/user.entity';
export declare class UserController {
    private readonly userService;
    private readonly authService;
    constructor(userService: UserService, authService: AuthService);
    login(req: any): Promise<any>;
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: string): Promise<User>;
}
