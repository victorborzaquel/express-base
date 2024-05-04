import { BaseEntity } from 'typeorm';
interface Props {
    name: string;
}
export declare class User extends BaseEntity {
    id: string;
    name: string;
    constructor(props: Props);
}
export {};
