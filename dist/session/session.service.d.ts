import { CreateSessionDto } from './dto/create-session.dto';
import { UpdateSessionDto } from './dto/update-session.dto';
import { AbstractModel } from 'src/utils/abstractmodel';
import { Session, SessionDocument } from './entities/session.entity';
import { Model } from 'mongoose';
export declare class SessionService extends AbstractModel<Session, CreateSessionDto, UpdateSessionDto> {
    private sessionModel;
    constructor(sessionModel: Model<SessionDocument>);
    findAllActivate(): Promise<Session[]>;
}
