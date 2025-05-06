import styles from './NoSelectedChat.module.css'
import { MessagesSquare } from 'lucide-react'


export default function NoSelectedChat() {
    return (
        <div className={styles["no-selected-chat"]}>

            <p>Welcome,
                <span> Someone!</span>
            </p>
            <p>Select a chat</p>
            <div className={styles["svg-wrapper"]}>
                <MessagesSquare size={50} />
            </div>
        </div>
    )
}
