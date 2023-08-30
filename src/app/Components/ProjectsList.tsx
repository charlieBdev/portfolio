"use client"

import React, { useEffect, useState } from 'react'
import ProjectCard from './ProjectCard'
import projectsArr from "../../data/projectsArr"

const ProjectsList = () => {

  // const isDevelopment = process.env.NODE_ENV === 'development';
  // const projectsPath = isDevelopment ? '/public/projects.json' : 'projects.json';
  // console.log(projectsPath)

  const [projects, setProjects] = useState([{}])

  useEffect(() => {
    setProjects(projectsArr)
  }, [])

  console.log(projects, '<<< projects')

  return (
    <section className="grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:rows-1 w-lg">
        {projectsArr.map(project => (
          <ProjectCard
            key={project.name}
            name={project.name}
            desc={project.desc}
            imgURL={project.imgURL}
            tags={project.tags}
            btnText={project.btnText}
            btnLink={project.btnLink} />
        ))}
    </section>
  )
}

export default ProjectsList
