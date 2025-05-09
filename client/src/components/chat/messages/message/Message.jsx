import styles from './Message.module.css'
import useAuthContext from '../../../../hooks/useAuthContext'
import useConversationContext from '../../../../hooks/useConversationContext'
import dateParser from '../../../../utils/dateParser'

export default function Message({ message }) {

    const { user } = useAuthContext();
    const { currentConversation } = useConversationContext();
    const isSender = message.senderId === user._id;

    return (
        <>
            <div className={`${styles["messageRow"]} ${isSender ? styles["senderRow"] : styles["receiverRow"]}`}>
                <span className={styles["time"]}>{dateParser(message.createdAt)}</span>
                <div className={styles["message-container"]}>
                    <img
                        className={styles["avatar"]}
                        alt="Obi-Wan"
                        src={isSender ? user.profilePicture : currentConversation.profilePicture}
                    />
                    <div className={`${styles["message"]} ${styles[`${isSender ? "sender" : "receiver"}`]}`}>{message.messageContent}</div>
                </div>
            </div>
        </>
    )
}
