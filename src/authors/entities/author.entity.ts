import { AutoIncrement, Column, DataType, HasMany, Model, PrimaryKey, Table } from "sequelize-typescript";
import { Posts } from "src/posts/entities/post.entity";

export interface AuthorsAttributes{
    id: bigint,
    name: string,  
}

@Table({timestamps: true})
export class Authors extends Model<AuthorsAttributes> {
    @PrimaryKey 
    @AutoIncrement
    @Column(DataType.INTEGER)
    id: bigint

    @Column({
        type: DataType.TEXT("tiny"),
        allowNull: false
    })
    name: string

    @HasMany(() => Posts)
    post: Posts[];
}
