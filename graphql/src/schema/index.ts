import { buildSchema } from 'graphql'

export const schema = buildSchema(`
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
    linkSkills(memberId: Int, skill: String): [LinkSkill]
  }
`)