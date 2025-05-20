import { useEffect } from "react";

import { useQueryClient } from "@tanstack/react-query";

import useAuthContext from "./useAuthContext";
import useSocketContext from "./useSocketContext";

export default function useListenForDeletedUser() {
    const { user } = useAuthContext();
    const { socket } = useSocketContext();
    const queryClient = useQueryClient();

    useEffect(() => {

        if (!socket || !user || !queryClient) return;

        socket.on("deletedUser", (deletedUserId) => {

            queryClient.setQueryData(['conversations', user._id], (oldUsers) => {
                return oldUsers.filter(currUser => currUser._id !== deletedUserId);
            });
        });
        return () => {
            socket.off("deletedUser");
        };
    }, [socket, user, queryClient]);
};