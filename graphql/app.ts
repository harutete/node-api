import express from 'express'
import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import { GROUP_LIST } from '../data/group'

const schema = buildSchema(`
  type Group {
    group_name: String
  }
  type Query {
    group: Group
  }
`)

const rootValue = {
  group: () => GROUP_LIST
}

const app = express()
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true
}))
app.listen(4000)