import ProjectCard from './ProjectCard'
import projectsArr from "../../data/projectsArr"

const ProjectsList = () => {
  return (
    // <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4 justify-center w-lg">
    <section className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
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