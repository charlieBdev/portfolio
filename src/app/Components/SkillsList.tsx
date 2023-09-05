"use client"

import skillsArr from "@/data/skillsArr"
import SkillsCard from "./SkillsCard"

const SkillsList = () => {

  return (
    // <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
          {skillsArr.map(skill => (
            <SkillsCard key={skill.topic} topic={skill.topic} skills={skill.skills} svg={skill.svg} />
          ))}
    </div>
  )
}

export default SkillsList
