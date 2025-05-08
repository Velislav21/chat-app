import NoSelectedChat from '../../select-chat/NoSelectedChat'
import useConversationContext from '../../../../hooks/useConversationContext'
import Messages from '../Messages'

export default function MessagesContainer() {
    const { currentConversation } = useConversationContext();

    return (
        <>
            {
                !currentConversation ?
                    <NoSelectedChat />
                    :
                    <Messages currentConversation={currentConversation} />
            }
        </>
    )
}