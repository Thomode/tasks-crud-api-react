import { Sequelize } from "sequelize"

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'src/database/tasks.db'
})

export default sequelize