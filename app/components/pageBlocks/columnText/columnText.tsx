import styles from './columnText.module.css'

interface ColumnTextProps {
  title: string,
  body: string
}

export default function ColumnText({ title, body }: ColumnTextProps) {
  return <>
    <div className="pageBlockContainer">
      <h2>{title}</h2>
      <div className={styles.bodyContainer}>
        <p>{body}</p>
      </div>
    </div> 
  </>
}