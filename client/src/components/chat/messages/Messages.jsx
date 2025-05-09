import styles from './Messages.module.css'

import Message from './message/Message'
import MessageInput from './message-input/MessageInput'
import useGetMessages from '../../../hooks/useGetMessages'
import SkeletonLoader from '../../skeleton-loader/SkeletonLoader'
import useAuthContext from '../../../hooks/useAuthContext'
export default function Messages({ currentConversation }) {

    const { user } = useAuthContext();
    const { data: messages, isFetching } = useGetMessages();
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
                    <h1>
                        <span>To:</span> {currentConversation.fullname}
                        <span> From:</span> {user.fullname}</h1>
                    {/* !TODO  remove the from span*/}
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
