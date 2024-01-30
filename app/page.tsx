"use client"
import chipi from '../public/img/chipi.jpg'
import traf from '../public/img/traf.jpg'
import styles from './page.module.css'
import { ReactNode } from 'react'
import Hero from './components/pageBlocks/hero/hero'
import ImageLeftBlock from './components/pageBlocks/imageLeftBlock/imageLeftBlock'
import ColumnText from './components/pageBlocks/columnText/columnText'
import Projects from './components/pageBlocks/projects/projects'

const content = {
  about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus vel magna et aliquet. Vivamus non tortor condimentum, malesuada velit quis, scelerisque lorem. Suspendisse dignissim erat nibh, in eleifend enim tincidunt eget. Suspendisse potenti. Aenean sollicitudin nulla in diam faucibus finibus. Nulla eget velit at elit fermentum faucibus. Sed a aliquet dui, vitae ultricies neque. " ,
  skills: [
    "Java", "Kotlin", "Rust", 
  ],
  projects: [
    {
      name: "Project 1",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque luctus vel magna et aliquet. Vivamus non tortor condimentum, malesuada velit quis, scelerisque lorem. Suspendisse dignissim erat nibh, in eleifend enim tincidunt eget. Suspendisse potenti. Aenean sollicitudin nulla in diam faucibus finibus. Nulla eget velit at elit fermentum faucibus. Sed a aliquet dui, vitae ultricies neque. " ,
      image: chipi
    }
  ]
}

export default function Home() {


  function Section({title, content}: {title: string, content: ReactNode}) {
    return <section id={title} className={styles.section}>
      <h2 className={styles.title}>{title}</h2>
      <p>
        {content}
      </p>
    </section>

  }

  return (
    <main className={styles.main}>
      {/* Header */}
      
      <Hero
        imageSrc={chipi}
        texts={
          <>
            <h1>Seiji Akakabe</h1>
            <p>Morbi accumsan lorem sed varius sagittis.</p>
          </>
        } 
        buttons={
          <>
            <button>Button 1</button>
            <button>Button 2</button>
          </>
        }
      />

      <ColumnText 
        title={"About"}
        body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor felis in mauris feugiat iaculis. Donec at fermentum ante. Morbi accumsan lorem sed varius sagittis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor felis in mauris feugiat iaculis. Donec at fermentum ante. Morbi accumsan lorem sed varius sagittis"}
      />

      <ImageLeftBlock
        imageSrc={traf}
        title={"Education"}
        content={
          <>
            <h3>Sheridan College</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam auctor felis in mauris feugiat iaculis. 
              Donec at fermentum ante. Morbi accumsan lorem sed varius sagittis. Lorem ipsum dolor sit amet, consectetur 
              adipiscing elit. Aliquam auctor felis in mauris feugiat iaculis. Donec at fermentum ante. 
              Morbi accumsan lorem sed varius sagittis.</p>
          </>
        }
      />


      <Projects content={content.projects}></Projects>

      {/* <Section
        title='Projects'
        content={
          content.projects.map(p => {
            return <ProjectCard name={p.name} description={p.description} />
          })
        }
      /> */}

    </main>
  )
}




