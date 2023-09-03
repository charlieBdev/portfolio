"use client"

import icons from "@/data/iconsArr"
import IconCard from "./IconCard"
import { useEffect, useState } from "react"
import IconCardSkeleton from "./IconCardSkeleton"


const IconsList = () => {
  
  const [isLoading, setIsLoading] = useState(false)
  
  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false)
  //   }, 500)
  // }, [])

  return (
    <div className="rounded-lg flex flex-wrap justify-center mt-3 shadow dark:border dark:border-neutral-800">
      {isLoading ? (
        <>
          <IconCardSkeleton />
          <IconCardSkeleton />
          <IconCardSkeleton />
          <IconCardSkeleton />
          <IconCardSkeleton />
          <IconCardSkeleton />
          <IconCardSkeleton />
          <IconCardSkeleton />
          <IconCardSkeleton />
          <IconCardSkeleton />
          <IconCardSkeleton />
          <IconCardSkeleton />
        </>
      ) : (
        icons.map(icon => (
          <IconCard key={icon.name} name={icon.name} svg={icon.svg} />
        ))
      )} 
    </div>
  )
}

export default IconsList
