import { useEffect } from "react";

import { useQueryClient } from "@tanstack/react-query";

import useAuthContext from "./useAuthContext";
import useSocketContext from "./useSocketContext";

export default function useNewRegisteredUser() {
    const { user } = useAuthContext();
    const { socket } = useSocketContext();
    const queryClient = useQueryClient();

    useEffect(() => {

        if (!socket || !user) return;

        socket.on("newUser", (newUser) => {

            queryClient.setQueryData(['conversations', user._id], (oldUsers) => {
                if (!oldUsers) return [newUser];
                return [...oldUsers, newUser];
            });
        });
    }, [socket, user]);
};