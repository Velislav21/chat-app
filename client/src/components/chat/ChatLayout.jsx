import Sidebar from '../sidebar/Sidebar'
import styles from './ChatLayout.module.css'
import Messages from './messages/Messages'

export default function ChatLayout() {
  return (
    <div className={styles["chat-container"]}>
        <Sidebar />
        <Messages />
    </div>
  )
}
