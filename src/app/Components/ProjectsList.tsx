import ProjectCard from './ProjectCard'
import projectsArr from "../../data/projectsArr"

const ProjectsList = () => {
  return (
    <section className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
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
