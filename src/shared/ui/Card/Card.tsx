import styles from './Card.module.css'

type CardProps = {
  title: string
  description: string
  tag?: string
}

export function Card({ title, description, tag }: CardProps) {
  return (
    <div className={styles.card}>
      {tag ? <span className={styles.tag}>{tag}</span> : null}
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
    </div>
  )
}
