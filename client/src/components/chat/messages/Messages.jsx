import styles from './Messages.module.css'
import Message from './Message'

export default function Messages() {
  return (
    <div className={styles["messages-container"]}>
      <Message />
    </div>
  )
}
