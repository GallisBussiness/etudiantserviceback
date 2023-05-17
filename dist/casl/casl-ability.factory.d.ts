import { Ability, InferSubjects } from '@casl/ability';
import { User } from 'src/user/entities/user.entity';
export declare enum Action {
    Manage = "manage",
    Create = "create",
    Read = "read",
    Update = "update",
    Delete = "delete"
}
export type Subjects = InferSubjects<typeof User> | 'all';
export type AppAbility = Ability<[Action, Subjects]>;
export declare class CaslAbilityFactory {
    createForUser(user: User): Ability<[Action, Subjects], import("@casl/ability").MongoQuery<import("@casl/ability/dist/types/types").AnyObject>>;
}
