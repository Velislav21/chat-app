import { useRef, useEffect } from 'react';

import styles from './Messages.module.css'

import Message from './message/Message'
import MessageInput from './message-input/MessageInput'
import useGetMessages from '../../../hooks/useGetMessages'
import SkeletonLoader from '../../skeleton-loader/SkeletonLoader'
import useAuthContext from '../../../hooks/useAuthContext'
export default function Messages({ currentConversation }) {

    const { user } = useAuthContext();
    const { data: messages, isFetching } = useGetMessages();
    const lastMessageRef = useRef(null);

    useEffect(() => {
        setTimeout(() => {
            if (!isFetching && messages.length > 0) {
                lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100)
    }, [messages, isFetching]);

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
                        {messages.map((message, index) => (
                            <div 
                                ref={index === messages.length - 1 ? lastMessageRef : null} 
                                key={message._id}
                            >
                                <Message
                                    message={message}
                                />
                            </div>
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
