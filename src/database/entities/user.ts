import {randomUUID} from 'crypto';
import {BaseEntity, Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

interface Props {
  id?: string;
  name: string;
}

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  constructor(props: Props) {
    super();
    if (props) {
      this.id = props.id || randomUUID();
      this.name = props.name;
    }
  }
}
