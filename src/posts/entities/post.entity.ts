import { AutoIncrement, Column, DataType, Model, PrimaryKey, Table } from "sequelize-typescript";

export interface PostAttributes{
    id: bigint,
    title: string, 
    content: string, 

}

@Table({timestamps: true})
export class Posts extends Model<PostAttributes> {
    @PrimaryKey 
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: bigint

    @Column({
        type: DataType.TEXT,
        allowNull: false
    })
    title: string

    @Column({
        type: DataType.TEXT,
        allowNull: false
    })
    content: string
}
