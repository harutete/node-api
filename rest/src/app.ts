import express from 'express'
import group from './routes/group'

const app = express()
const port = 3001

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})

app.use('/', group)