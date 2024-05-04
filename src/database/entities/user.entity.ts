import {randomUUID} from 'crypto';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

interface Props {
  id?: string;
  createdAt?: Date;
  updatedAt?: Date;
  name: string;
  username: string;
  passwordHash: string;
}

export class User {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  name: string;
  username: string;
  passwordHash: string;

  constructor(props: Props) {
    this.id = props.id || randomUUID();
    this.createdAt = props.createdAt || new Date();
    this.updatedAt = props.updatedAt || new Date();
    this.name = props.name;
    this.username = props.username;
    this.passwordHash = props.passwordHash;
  }
}

export class UserMapper {
  toPersistence(user: User): UserEntity {
    return Object.assign(new UserEntity(), user);
  }
  toDomain(entity: UserEntity): User {
    return new User(entity);
  }
  toDomainList(entities: UserEntity[]): User[] {
    return entities.map(this.toDomain);
  }
}

@Entity()
export class UserEntity extends BaseEntity implements User {
  @PrimaryGeneratedColumn('uuid') id: string;
  @CreateDateColumn() createdAt: Date;
  @UpdateDateColumn() updatedAt: Date;
  @Column() username: string;
  @Column() passwordHash: string;
  @Column() name: string;
}
