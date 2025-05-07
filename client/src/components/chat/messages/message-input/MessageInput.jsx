import { useState } from 'react';

import styles from './MessageInput.module.css'
import { Send } from 'lucide-react'
import useSendMessage from '../../../../hooks/useSendMessage';
import Spinner from '../../../../components/spinner/Spinner';

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
            <button
                type="submit"
                disabled={isLoading}
            >
                {isLoading ? <Spinner /> : <Send />}
            </button>
        </form>
    )
}
