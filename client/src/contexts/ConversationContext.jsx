import { createContext, useState } from "react";
import useGetConversations from "../hooks/useGetConversations";

export const ConversationContext = createContext({
    conversations: [],
    isLoading: false,
    currentConversation: null,
    setCurrentConversation: () => {}
});

export function ConversationContextProvider({ children }) {
    const { data: conversations, isLoading } = useGetConversations();
    const [currentConversation, setCurrentConversation] = useState(null);

    const contextValue = {
        conversations,
        isLoading,
        currentConversation,
        setCurrentConversation
    }

    return (
        <ConversationContext.Provider value={contextValue}>
            {children}
        </ConversationContext.Provider>
    )
}   