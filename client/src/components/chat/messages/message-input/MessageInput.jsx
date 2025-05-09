import { useState } from 'react';

import styles from './MessageInput.module.css'
import { Send } from 'lucide-react'
import useSendMessage from '../../../../hooks/useSendMessage';

export default function MessageInput() {

    const [message, setMessage] = useState('');
    const { sendMessage, isLoading } = useSendMessage();

    function handleSubmit(e) {
        e.preventDefault();

        if (!message) return;

        sendMessage(message);
        setMessage('');
    }

    function handleInputChange(e) {
        setMessage(e.target.value);
    }

    return (
        <form
            className={styles["message-input-form"]}
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                placeholder="Type a message..."
                className={styles["message-input"]}
                value={message}
                onChange={handleInputChange}
            />
            <SendButton isLoading={isLoading} />
        </form>
    )
}

function SendButton({ isLoading }) {
    return (
        <button
            type="submit"
            disabled={true}
            className={styles["send-button"]}
        >
            <Send />
        </button>
    )
}
