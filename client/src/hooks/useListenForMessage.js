import { useEffect } from "react";

import useSocketContext from "./useSocketContext";
import { useQueryClient } from "@tanstack/react-query";

export default function useListenForMessage(messages, currentConversation) {

    const { socket } = useSocketContext();
    const queryClient = useQueryClient();

    useEffect(() => {
        if (!socket || !currentConversation?._id) return;

        socket.on("newMessage", (newMessage) => {

            queryClient.setQueryData(['messages', currentConversation._id], (oldMessages) => {
                if (!oldMessages) return [newMessage];
                return [...oldMessages, newMessage];
            });
        });

        return () => socket.off("newMessage")
    }, [socket, currentConversation?._id], messages)

}
