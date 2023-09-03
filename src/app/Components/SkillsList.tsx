"use client"

import skillsArr from "@/data/skillsArr"
import SkillsCard from "./SkillsCard"
import SkillsCardSkeleton from "./SkillsCardSkeleton"
import { useEffect, useState } from "react"

const SkillsList = () => {

  const [isLoading, setIsLoading] = useState(false)

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false)
  //   }, 1000)
  // })

  return (
    // <div className="flex flex-col sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 mt-3">
        {isLoading ? (
          <>
            <SkillsCardSkeleton />
            <SkillsCardSkeleton />
            <SkillsCardSkeleton />
            <SkillsCardSkeleton />
            <SkillsCardSkeleton />
            <SkillsCardSkeleton />
          </>
        ) : (
          skillsArr.map(skill => (
            <SkillsCard key={skill.topic} topic={skill.topic} skills={skill.skills} svg={skill.svg} />
          ))
        )}
    </div>
  )
}

export default SkillsList
