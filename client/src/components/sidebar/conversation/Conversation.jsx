import styles from './Conversation.module.css'

import useConversationContext from '../../../hooks/useConversationContext'
import useSocketContext from '../../../hooks/useSocketContext';

export default function Conversation({ conversation }) {

    const { currentConversation, setCurrentConversation } = useConversationContext();

    const isCurrentConversation = currentConversation?._id === conversation._id;

    const { onlineUsers } = useSocketContext();
    
    const isOnline = onlineUsers.includes(conversation._id); // the received conversation object from the mapping function of the parent component

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
                {isOnline && <div className={styles["online-status"]}></div>}
            </div>
            <div className={styles["conversation-item-content"]}>
                {`${conversation.fullname} - ${conversation.username}`}
            </div>
        </div>
    )
}
