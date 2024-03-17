import styles from './projectCard.module.css'
import Image, { StaticImageData } from 'next/image';
import { ReactNode, useState } from 'react';

export interface ProjectCardProps {
  name: string,
  description: string | undefined,
  imageSrc?: string,
}

export default function ProjectCard({ name, description, imageSrc }: ProjectCardProps) {
  const [toggled, setToggled] = useState(false)

  function contentsNotToggled() {
    return <div
      className={`${styles.container} ${styles.projectCard}`}
      onClick={_ => setToggled(true)}
    >
      <div className={styles.contents}>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>

      {
        (imageSrc)? <div className={styles.images}>
          <Image
            style={{ objectFit: "cover" }}
            fill={true}
            src={imageSrc}
            alt=""
          />  
        </div> : <></>
      }
    </div>
  }

  function contentsOnToggled(onCloseClicked: () => void) {
    return <div className={`${styles.container}`}>
      <button className={styles.closeButton} onClick={onCloseClicked}>Close</button> 

      <div className={styles.secondForm}>

        <div className={styles.toggleSection}>
          <h3 className={styles.toggleTitle}>Lessons Learned</h3> 
          <div className={styles.toggleContent}>
            {"1 Hour of Chipi Chipi Chapa Chapa Cat Videos"}
          </div>
        </div>

        <iframe
          className={styles.demoVideo}
          width="500"
          style={{ aspectRatio: 16 / 9 }}
          src="https://www.youtube.com/embed/0tOXxuLcaog"
          title="1 Hour of Chipi Chipi Chapa Chapa Cat Videos"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen /> 
      </div>
    </div>
  }

  function toggleSection(title: string, children: ReactNode) {
    return <div className={styles.toggleSection}>
      <h4 className={styles.toggleTitle}>{title}</h4>
      <div className={styles.toggleContent}>{children}</div>
    </div>
  }

  return toggled ? contentsOnToggled(
    () => setToggled(false)
  ) : contentsNotToggled()
}