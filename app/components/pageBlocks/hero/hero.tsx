import { ReactNode } from "react"
import Image, { StaticImageData } from "next/image"
import styles from "./hero.module.css"

interface HeroProps {
  imageSrc: StaticImageData,
  texts: ReactNode
  buttons: ReactNode
}

export default function Hero({ imageSrc, texts, buttons }: HeroProps) {
  return <>
    <div
      className={styles.hero}
      style={{
        backgroundImage: `url(${imageSrc.src})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className={styles.gradient} />
      
      <div className={`pageBlockContainer ${styles.container}`}>
        <div className={styles.texts}>
          {texts}
        </div>
        <div className={styles.buttons}>
          {buttons}
        </div>
      </div>
    </div>
  </>
}