import { useQuery } from '@tanstack/react-query';
import useConversationContext from './useConversationContext';
import axiosInstance from '../axiosInstance';
import useAuthContext from './useAuthContext';
import toast from 'react-hot-toast';

export default function useGetMessages() {
    const { user } = useAuthContext();
    const { currentConversation } = useConversationContext();

    if (!currentConversation) return {};

    async function getMessages(conversationId, accessToken) {
        try {
            const response = await axiosInstance.get(`/message/${conversationId}`, {
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                }
            });
            return response.data;
        } catch (err) {
            toast.error(err.response.data.message);
        }
    }

    return useQuery({
        queryKey: ['messages', currentConversation._id],
        queryFn: () => getMessages(currentConversation._id, user.accessToken),
        staleTime: 1000 * 60 * 3 // 3 min
    });
}
