import express from 'express'
import cors from 'cors'

import { graphqlHTTP } from 'express-graphql'
import { schema } from './schema'
import { MEMBERS } from '../../data/members'
import { SelectedMemberAndSkill } from './types'
import { findCurrentLinkSkills } from './resolver'

const port = 4000

const rootValue = {
  members: () => MEMBERS,
  linkSkills: (obj: SelectedMemberAndSkill) => findCurrentLinkSkills(obj)
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
