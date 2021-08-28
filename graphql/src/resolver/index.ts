import { LINK_SKILLS } from '../../../data/linkSkills'
import { SelectedMemberAndSkill } from '../types'

export const findCurrentLinkSkills = (args: SelectedMemberAndSkill) => {
  const { memberId, skill } = args

  return LINK_SKILLS.filter(currentSkill => {
    const { members, category } = currentSkill
    const isIncludedMember = !!members.find(currentMember => currentMember.id === memberId)
    return isIncludedMember && category === skill
  })
}