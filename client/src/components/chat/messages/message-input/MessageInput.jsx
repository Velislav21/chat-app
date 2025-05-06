import styles from './MessageInput.module.css'
import { Send } from 'lucide-react'

export default function MessageInput() {
  return (
    <form className={styles["message-input-form"]}>
        <input
          type="text"
          placeholder="Type a message..."
          className={styles["message-input"]}
        />
        <button
          type="submit"
        >
          <Send />
        </button>
    </form>
  )
}
