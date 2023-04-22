import { DataTypes } from "sequelize"
import sequelize from "../database/database.js"

export const Task = sequelize.define(
    'Tasks',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true
        },
        title:{
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        done: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    },
    {
        timestamps: false
    }
)