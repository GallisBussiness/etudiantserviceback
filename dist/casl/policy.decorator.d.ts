import { Action, Subjects } from './casl-ability.factory';
export interface RequiredRule {
    action: Action;
    subject: Subjects;
}
export declare const POLICY_KEY = "POLICY_KEY";
export declare const CheckAbility: (...requirements: RequiredRule[]) => import("@nestjs/common").CustomDecorator<string>;
