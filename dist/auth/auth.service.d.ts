import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { User } from 'src/user/entities/user.entity';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(username: string, pass: string): Promise<User | null>;
    login(user: any): {
        data: {
            token: string;
            id: any;
        };
        statusCode: number;
    };
}
