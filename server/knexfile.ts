import path from 'path'
import dotenv from 'dotenv'
dotenv.config()

module.exports = {
    client: process.env.APP_DATABASE_CLIENT,
    connection: {
        host: process.env.APP_DATABASE_HOST,
        user: process.env.APP_DATABASE_USER,
        password: process.env.APP_DATABASE_PASSWORD,
        database: process.env.APP_DATABASE_DBNAME
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'migrations')
    },
    seeds: {
        directory: path.resolve(__dirname, 'src', 'database', 'seeds')
    },
    useNullAsDefault: true
}