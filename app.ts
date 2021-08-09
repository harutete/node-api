import express from 'express'
import group from './routes/group'

const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

app.use('/', group)