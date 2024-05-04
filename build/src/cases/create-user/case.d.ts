import { User } from '../../database/entities/user';
import { UserRepository } from '../../database/repositories/user';
export declare class CreateUserCase {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    execute({ name }: {
        name: string;
    }): Promise<User>;
}
