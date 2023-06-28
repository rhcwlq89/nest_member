import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  userUid: number;

  @Column()
  email: string;

  @Column()
  name: string;

  @Column()
  password: string;
}
