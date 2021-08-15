import express from 'express'
import cors from 'cors'

import { graphqlHTTP } from 'express-graphql'
import { buildSchema } from 'graphql'
import { MEMBERS } from '../../data/members'
import { LINK_SKILLS } from '../../data/linkSkills'

const port = 4000
const schema = buildSchema(`
  type Member {
    id: Int
    name: String
  }
  type LinkSkill {
    category: String
    category_name: String
    effect: Int
    skill_name: String
    is_act2: Boolean
    members: [Member]
  }
  type Query {
    members: [Member]
    linkSkills: [LinkSkill]
  }
`)

const rootValue = {
  members: () => MEMBERS,
  linkSkills: () => LINK_SKILLS
}

const app = express()
app.use(cors())
app.use('/graphql', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true
}))
app.listen(port)

console.log(`App listening at http://localhost:${port}/graphql`)
