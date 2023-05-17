import { SessionService } from './session.service';
import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
export declare class SessionController {
    private readonly sessionService;
    constructor(sessionService: SessionService);
    create(createSessionDto: CreateSessionDto): Promise<import("./entities/session.entity").Session>;
    findAll(): Promise<import("./entities/session.entity").Session[]>;
    findAllActivate(): Promise<import("./entities/session.entity").Session[]>;
    findOne(id: string): Promise<import("./entities/session.entity").Session>;
    update(id: string, updateSessionDto: UpdateSessionDto): Promise<import("./entities/session.entity").Session>;
    remove(id: string): Promise<import("./entities/session.entity").Session>;
}
