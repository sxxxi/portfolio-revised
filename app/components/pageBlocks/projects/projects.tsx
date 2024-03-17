import { Box, VStack } from "@chakra-ui/react"
import ProjectCard, { ProjectCardProps } from "./project/projectCard"
import styles from './projects.module.css'

interface ProjectsProps {
  containerBgSrc?: string,
  content: Array<ProjectCardProps>
}

export default function Projects({ containerBgSrc, content }: ProjectsProps) {
  return <Box className={`pageBlockContainer ${styles.container}`} bgImg={containerBgSrc}>
      <h2 className={styles.title}>Projects</h2>
      <VStack gap={48}>
      {
        content.map(p => {
          return <ProjectCard imageSrc={p.imageSrc} name={p.name} description={p.description} />
        })
      }
      </VStack>

  </Box>
}