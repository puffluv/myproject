import { Watchlist } from "@src/modules/watchlist/models";
import { Column, HasMany, Model, Table } from "sequelize-typescript";

@Table
export class User extends Model {
    @Column
    firstName: string

    @Column
    username: string

    @Column
    email: string

    @Column
    password: string

    @HasMany(() => Watchlist, {
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
    })
    watchlist: Watchlist[]
}