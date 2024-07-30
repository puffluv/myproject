import { User } from '@src/modules/user/models';
import { Column, Model, Table } from 'sequelize-typescript';

@Table
export class Watchlist extends Model {
  @Column
  user: User;

  @Column
  name: string;

  @Column
  assetId: string;
}
