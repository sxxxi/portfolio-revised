import { ReactNode } from "react"
import Image, { StaticImageData } from "next/image"
import styles from "./hero.module.css"
import PageBlock from "../../pageBlock/PageBlock"

interface HeroProps {
  imageSrc: StaticImageData,
  bgSrc?: string,
  texts: ReactNode
  buttons: ReactNode
}

export default function Hero({ texts, buttons, bgSrc }: HeroProps) {
  return <>
    <PageBlock className={styles.hero} bgSrc={bgSrc} padding={'0'}>
      <div className={styles.gradient} />
      <div className={`pageBlockContainer ${styles.container}`}>
        <div className={styles.texts}>
          {texts}
        </div>
        <div className={styles.buttons}>
          {buttons}
        </div>
      </div>
    </PageBlock>
  </>
}