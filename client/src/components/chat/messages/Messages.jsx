import styles from './Messages.module.css'

import Message from './message/Message'
import MessageInput from './message-input/MessageInput'
import useGetMessages from '../../../hooks/useGetMessages'
import useConversationContext from '../../../hooks/useConversationContext'
import SkeletonLoader from '../../skeleton-loader/SkeletonLoader'

export default function Messages({ currentConversation }) {

    // const { messages: messagesFromContext } = useConversationContext();
    const { data: messages, isLoading } = useGetMessages();
    console.log(messages);
    // console.log(messagesFromContext);
    return (
        <>
            {true ?
                <div className={styles["skeleton-loader-container"]}>
                    <SkeletonLoader />
                    <SkeletonLoader />
                    <SkeletonLoader />
                </div>
                :
                <div className={styles["chat-container"]}>
                    <h1> <span>To:</span> {currentConversation.fullname}</h1>
                    <div className={styles["messages-container"]}>
                        <Message />
                    </div>
                    <MessageInput />
                </div>
            }
        </>
    )
}
