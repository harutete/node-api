import express from 'express'
import cors from 'cors'

import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import { GROUP_LIST } from '../../data/group'

const port = 4000
const schema = buildSchema(`
  type Group {
    group_name: String
  }
  type Query {
    group: [Group]
  }
`)

const rootValue = {
  group: () => GROUP_LIST
}

const app = express()
app.use(cors())
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true
}))
app.listen(port)

console.log(`App listening at http://localhost:${port}`)
