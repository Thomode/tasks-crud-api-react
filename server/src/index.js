import app from "./app.js";
import sequelize from "./database/database.js";
import './models/Task.js'

const PORT = 4000

const main = async () => {
    try {
        await sequelize.sync()

        app.listen(PORT)
        console.log('Server listening on port:', PORT)

    } catch (error) {
        console.log('Error connection db:', error.message)
    }
}

main()