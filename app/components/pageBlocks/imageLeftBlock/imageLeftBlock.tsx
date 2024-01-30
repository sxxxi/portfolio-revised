import Image, { StaticImageData } from 'next/image'
import styles from './imageLeftBlock.module.css'
import { ReactNode } from 'react'

interface ImageLeftBlockProps {
  imageSrc: StaticImageData
  title: string,
  content: ReactNode
}

export default function ImageLeftBlock({ imageSrc, title, content }: ImageLeftBlockProps) {
  return <>
    <div className={`pageBlockContainer ${styles.about}`}>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        {content}
      </div>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          src={imageSrc}
          alt={""}
          layout="responsive"
        />
      </div>
    </div> 
  </>
}