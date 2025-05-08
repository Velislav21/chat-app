import styles from './Messages.module.css'

import Message from './message/Message'
import MessageInput from './message-input/MessageInput'
import useGetMessages from '../../../hooks/useGetMessages'
import useConversationContext from '../../../hooks/useConversationContext'
import SkeletonLoader from '../../skeleton-loader/SkeletonLoader'

export default function Messages({ currentConversation }) {

    // const { messages: messagesFromContext } = useConversationContext();
    const { data: messages, isFetching } = useGetMessages();
    console.log(messages);
    // console.log(messagesFromContext);
    return (
        <>
            {isFetching &&
                <div className={styles["skeleton-loader-container"]}>
                    <SkeletonLoader />
                    <SkeletonLoader />
                    <SkeletonLoader />
                    <SkeletonLoader />
                    <SkeletonLoader />
                </div>
            }
            {!isFetching && messages.length > 0 &&
                <div className={styles["chat-container"]}>
                    <h1> <span>To:</span> {currentConversation.fullname}</h1>
                    <div className={styles["messages-container"]}>

                        {messages.map((message) => (
                            <Message key={message._id} message={message} />
                        ))}
                        
                    </div>
                    <MessageInput />
                </div>
            }

            {!isFetching && messages.length === 0 &&
                <div className={styles["chat-container"]}>
                    <h1>No messages yet</h1>
                    <div className={styles["messages-container"]}>
                    </div>
                    <MessageInput />
                </div>
            }
        </>
    )
}
