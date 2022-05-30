import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class UserAccessToken extends BaseEntity {
  @PrimaryGeneratedColumn()
  idx: number;

  @Column({
    length: 36,
  })
  @Generated('uuid')
  uuid: string;

  @Column({
    type: 'text',
  })
  accessToken: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
