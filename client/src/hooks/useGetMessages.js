import { useQuery } from '@tanstack/react-query';
import useConversationContext from './useConversationContext';
import axiosInstance from '../axiosInstance';
import toast from 'react-hot-toast';
import useAuthContext from './useAuthContext';

export default function useGetMessages() {

  const { user } = useAuthContext();
  const { currentConversation, setMessages } = useConversationContext();

  if (!currentConversation) return {};

  async function getMessages(conversationId, accessToken) {
    const response = await axiosInstance.get(`/message/${conversationId}`, {
      headers: {
        'Authorization': `Bearer ${accessToken}`
      }
    });
    setMessages(response.data);
    return response.data;
  }

  return useQuery({
    queryKey: ['messages', currentConversation._id],
    queryFn: () => getMessages(currentConversation._id, user.accessToken),
  })

}
