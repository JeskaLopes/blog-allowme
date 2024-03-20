import { Sequelize } from "sequelize-typescript";
import { SEQUELIZE } from "../constants";
import databaseConfig from '../../configs/sequelize.config'
import { Posts } from "src/posts/entities/post.entity";
import { Authors } from "src/authors/entities/author.entity";

export const databaseProviders = [{
    provide: SEQUELIZE,
    useFactory: async () => {
        let config
        switch (process.env.NODE_ENV) {
            case 'development':
                config = databaseConfig.development
                break;
            default:
                config = databaseConfig.local
        }
        try {
            const sequelize = new Sequelize(config)
            sequelize.authenticate()
            sequelize.addModels([ Authors, Posts])
            await sequelize.sync()
            console.log('Banco conectado com sucesso!')
            return sequelize
        } catch (error) {
            return console.log('Foi não', error)
        }
    }
}]