import styles from './SkeletonLoader.module.css'

export default function SkeletonLoader() {
  return (
    <div className={styles["skeleton-conversation"]}>
      <div className={styles["skeleton-avatar"]}></div>
      <div className={styles["skeleton-content"]}></div>
    </div>
  )
}
