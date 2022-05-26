import { BaseEntity, Column, Entity, PrimaryColumn, Unique } from 'typeorm';

@Entity()
@Unique(['idx', 'userId', 'uuid', 'email'])
export class User extends BaseEntity {
  @PrimaryColumn()
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
}
