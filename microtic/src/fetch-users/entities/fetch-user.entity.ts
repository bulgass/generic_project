import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('auth_users')  
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  email: string;

  @Column()
  createdAt: Date;
}
