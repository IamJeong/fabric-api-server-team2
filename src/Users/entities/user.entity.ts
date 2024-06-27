import { Entity, Column, PrimaryGeneratedColumn, Unique } from 'typeorm';

@Entity({ name: 'user' })
@Unique(['userid'])
@Unique(['phone'])

export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  userid: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  phone: number;

  @Column()
  mail: string;

}
