import styles from './Conversation.module.css'
import useConversationContext from '../../../hooks/useConversationContext'
export default function Conversation({ conversation }) {

    const { currentConversation, setCurrentConversation } = useConversationContext();

    const isCurrentConversation = currentConversation?._id === conversation._id;

    return (
        <div
            className={isCurrentConversation ?
                `${styles["conversation-item"]} ${styles["active"]}`
                :
                styles["conversation-item"]}
            onClick={() => setCurrentConversation(conversation)}
        >
            <div className={styles["avatar-wrapper"]}>
                <img
                    src={conversation.profilePicture}
                    alt="avatar"
                />
                <div className={styles["online-status"]}></div>
                {/* //! Hide online status when needed*/}
            </div>
            <div className={styles["conversation-item-content"]}>
                {conversation.fullname}
            </div>
        </div>
    )
}
