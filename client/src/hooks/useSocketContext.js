import { useContext } from "react";
import { SocketContext } from "../contexts/SocketContext";

export default function useSocketContext() {
    return useContext(SocketContext);
}

