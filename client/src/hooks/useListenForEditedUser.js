import { useEffect } from "react";

import { useQueryClient } from "@tanstack/react-query";

import useAuthContext from "./useAuthContext";
import useSocketContext from "./useSocketContext";

export default function useListenForEditedUser() {
    const { user } = useAuthContext();
    const { socket } = useSocketContext();
    const queryClient = useQueryClient();

    useEffect(() => {

        if (!socket || !user || !queryClient) return;

        socket.on("updatedUser", (updatedUser) => {

            queryClient.setQueryData(['conversations', user._id], (currentUsers) => {
                if (!currentUsers) return [updatedUser];

                return currentUsers.map(userInList => {
                    if (userInList._id === updatedUser._id) {
                        return {
                            ...userInList,
                            ...updatedUser
                        }
                    }
                    return userInList
                })
            });
        });
        return () => {
            socket.off("updatedUser")
        }
    }, [socket, user, queryClient]);
};