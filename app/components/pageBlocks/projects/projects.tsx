import ProjectCard, { ProjectCardProps } from "./project/projectCard"
import styles from './projects.module.css'

interface ProjectsProps {
  content: Array<ProjectCardProps>
}

export default function Projects({ content }: ProjectsProps) {
  return <>
    <div className={`pageBlockContainer ${styles.container}`}>
      <h2 className={styles.title}>Projects</h2>
      {
        content.map(p => {
          return <ProjectCard name={p.name} description={p.description} image={p.image} />
        })
      }
    </div>
  
  </>
}