import useAuthContext from '../../../hooks/useAuthContext'
import styles from './NoSelectedChat.module.css'
import { MessagesSquare } from 'lucide-react'


export default function NoSelectedChat() {

    const { user } = useAuthContext();

    return (
        <div className={styles["no-selected-chat"]}>

            <p>Welcome,
                <span> {user.fullname}!</span>
            </p>
            <p>Please, select a conversation to start chatting!</p>
            <div className={styles["svg-wrapper"]}>
                <MessagesSquare size={50} />
            </div>
        </div>
    )
}
