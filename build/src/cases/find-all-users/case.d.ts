import { UserRepository } from '../../database/repositories/user';
export declare class FindAllUsersCase {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    execute(): Promise<import("../../database/entities/user").User[]>;
}
