import knex from 'knex'
import dotenv from 'dotenv'
dotenv.config()

const connection = knex({
    client: process.env.APP_DATABASE_CLIENT,
    connection: {
        host: process.env.APP_DATABASE_HOST,
        user: process.env.APP_DATABASE_USER,
        password: process.env.APP_DATABASE_PASSWORD,
        database: process.env.APP_DATABASE_DBNAME
    },
    useNullAsDefault: true
})

export default connection