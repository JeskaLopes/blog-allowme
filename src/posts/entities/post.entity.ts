import { AutoIncrement, BelongsTo, Column, DataType, ForeignKey, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Authors } from "src/authors/entities/author.entity";

export interface PostAttributes {
    id: bigint,
    title: string,
    content: string,

}

@Table({ timestamps: true })
export class Posts extends Model<PostAttributes> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: bigint

    @ForeignKey(() => Authors)
    @Column({
        type: DataType.INTEGER,
        allowNull: true
    })
    authorId: number;

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

    @BelongsTo(() => Authors)
    author: Authors;
}
