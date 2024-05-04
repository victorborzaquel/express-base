import { User } from '../../database/entities/user';
export declare abstract class UserJson {
    id: string;
    name: string;
}
export declare function userToJson(user: User): UserJson;
