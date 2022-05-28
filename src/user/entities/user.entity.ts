import { LocalDateTime } from '@js-joda/core';
import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column({
    unique: true,
    nullable: false,
  })
  uuid: string;

  @Column({
    unique: true,
    nullable: false,
  })
  email: string;

  @Column({
    unique: true,
    nullable: false,
  })
  userId: string;

  @Column({
    unique: false,
    nullable: false,
  })
  password: string;

  @Column({
    type: 'datetime',
  })
  createdAt: LocalDateTime;

  @Column({
    type: 'datetime',
  })
  updatedAt: LocalDateTime;
}
