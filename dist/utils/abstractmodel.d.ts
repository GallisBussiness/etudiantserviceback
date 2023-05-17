import { Model } from "mongoose";
export declare class AbstractModel<T, C, U> {
    protected model: Model<any>;
    constructor(model: Model<any>);
    create(createDto: C): Promise<T>;
    findAll(): Promise<T[]>;
    findOne(id: string): Promise<T>;
    update(id: string, updateDto: U): Promise<T>;
    remove(id: string): Promise<T>;
}
