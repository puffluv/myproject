import { User } from '@src/modules/user/models';
import { Column, ForeignKey, Model, Table } from 'sequelize-typescript';

@Table
export class Watchlist extends Model {
  @ForeignKey(() => User)
  user: User;

  @Column
  name: string;

  @Column
  assetId: string;
}
