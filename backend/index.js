import express from 'express'
import cors from 'cors'
import ConnectionDatabase from './db/connection.js'
import router from './router/router.js'

const app = express()

const PORT = 9070

app.use(express.json())
app.use(cors())


//connnection mongodb

ConnectionDatabase()

app.use('/api/v1', router)



app.get('/', (req, res) => {
  res.send("API Working")
})

app.listen(PORT, () => {
  console.log(`surver runing at ythe PORT http://localhost:${PORT}`)
})