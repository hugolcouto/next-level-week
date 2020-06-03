import express from 'express'

const app = express()
app.use(express.json())

const PORT = process.env.PORT || 2112
app.listen(PORT, () => console.log(`Executando em http://localhost:${PORT}`))

let usersArray: string[] = ['Hugo', 'Couto']

app.get('/', (req, res): object => {
    return res.json({ message: 'Hi from app' })
})