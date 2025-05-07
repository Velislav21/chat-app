import { useContext } from "react";
import { ConversationContext } from "../contexts/ConversationContext";

export default function useConversationContext() {
    return useContext(ConversationContext);
}
