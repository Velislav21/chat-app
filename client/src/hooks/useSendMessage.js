import { useMutation } from '@tanstack/react-query';
import useConversationContext from './useConversationContext';
import useAuthContext from './useAuthContext';

import axiosInstance from '../axiosInstance';

import toast from 'react-hot-toast';

export default function useSendMessage() {

    const { currentConversation, setMessages, messages } = useConversationContext();
    const { user } = useAuthContext();

    const { mutate: sendMessage, isLoading } = useMutation({
        mutationFn: sendMessageFn,
        onSuccess: (newMessage) => {
            setMessages([...messages, newMessage]);
            console.log(newMessage);
        },
        onError: (error) => {
            toast.error(error.message);
        }
    })

    async function sendMessageFn(message) {
        const response = await axiosInstance.post(`/message/send/${currentConversation._id}`, { message }, {
            headers: {
                "Authorization": `Bearer ${user.accessToken}`
            }
        });
        return response.data;
    }

    return { messages, sendMessage, isLoading };
}
