import { User } from '../entities/user';
export declare class UserRepository {
    private readonly db;
    findAll(): Promise<User[]>;
    save(user: User): Promise<User>;
}
