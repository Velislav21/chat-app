import { useEffect } from 'react';

import styles from './Messages.module.css'

import Message from './message/Message'
import MessageInput from './message-input/MessageInput'
import NoSelectedChat from '../select-chat/NoSelectedChat'
import useConversationContext from '../../../hooks/useConversationContext'

export default function Messages() {
    const { currentConversation } = useConversationContext();

    useEffect(() => {
        if (currentConversation) {
        }

    }, [currentConversation]);

    return (
        <>
            {
                !currentConversation ?
                    <NoSelectedChat />
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