import { useEffect } from "react";

import { useQueryClient } from "@tanstack/react-query";

import useAuthContext from "./useAuthContext";
import useSocketContext from "./useSocketContext";

export default function useNewRegisteredUser() {
    const { user } = useAuthContext();
    const { socket } = useSocketContext();
    const queryClient = useQueryClient();

    useEffect(() => {

        if (!socket || !user || !queryClient) return;

        socket.on("newUser", (newUser) => {

            queryClient.setQueryData(['conversations', user._id], (oldUsers) => {
                if (!oldUsers) return [newUser];
                
                if (!oldUsers.some(currUser => currUser._id === user._id)) {
                    return [...oldUsers, newUser];
                }
            });
        });
        return () => {
            socket.off("newUser")
        }
    }, [socket, user, queryClient]);
};