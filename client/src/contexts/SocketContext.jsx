import { createContext, useEffect, useState } from "react";

import useAuthContext from '../hooks/useAuthContext'

import io from "socket.io-client"

export const SocketContext = createContext();

export function SocketContextProvider({ children }) {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([]);

    const { user } = useAuthContext();
    useEffect(() => {

        if (user) {
            const options = {
                query: {
                    userId: user._id
                }
            }
            const socket = io(import.meta.env.VITE_APP_SERVER_URL, options);

            setSocket(socket);

            socket.on('getOnlineUsers', (users) => { // we get the users from the io.emit("getOnlineUsers")... 
                setOnlineUsers(users);
            })

            return () => socket.close(); // close the connection when component unmounts
        } else {
            if (socket) {
                socket.close();
                setSocket(null)
            }
        }

    }, [user])

    const ContextValue = {
        socket, onlineUsers
    }

    return (
        <SocketContext.Provider value={ContextValue}>
            {children}
        </SocketContext.Provider>
    )
}