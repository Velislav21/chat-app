import { useMutation, useQueryClient } from '@tanstack/react-query';
import useConversationContext from './useConversationContext';
import useAuthContext from './useAuthContext';

import axiosInstance from '../axiosInstance';

import toast from 'react-hot-toast';

export default function useSendMessage() {
    const { currentConversation } = useConversationContext();
    const { user } = useAuthContext();
    const queryClient = useQueryClient();

    const { mutate: sendMessage, isLoading } = useMutation({
        mutationFn: sendMessageFn,
        onSuccess: (newMessage) => {
            queryClient.setQueryData(
                ['messages', currentConversation._id],
                (oldData) => {
                    if (!oldData) return [newMessage];
                    return [...oldData, newMessage];
                }
            );
        },
        onError: (error) => {
            toast.error(error.message);
        }
    })

    async function sendMessageFn(message) {
        try {
            const response = await axiosInstance.post(
                `/message/send/${currentConversation._id}`,
                { message },
                {
                    headers: {
                        "Authorization": `Bearer ${user.accessToken}`
                    }
                }
            );
            return response.data;
        } catch (err) {
            toast.error(err.response.data.message);
        }
    }

    return { sendMessage, isLoading };
}
