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

                if (!oldUsers.some(currUser => currUser._id === newUser._id)) {
                    // couldnt figure out why, when a new user was registered,
                    //  the CHROME browser was receiving the new user 2-3 times.
                    // There was no such issue in: brave / mozilla / IE / opera. 
                    return [...oldUsers, newUser];
                }
            });
        });
        return () => {
            socket.off("newUser")
        }
    }, [socket, user, queryClient]);
};