import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import useAuthContext from "./useAuthContext";

import axiosClient from "../../axiosInstance";
import { toast } from "react-hot-toast";

async function login(values) {
    const response = await axiosClient.post("/auth/login", values);
    return response.data;
}

export default function useLogin() {

    const navigate = useNavigate();
    const { dispatch } = useAuthContext();

    const { mutate, isPending } = useMutation({
        mutationFn: login,
        onSuccess: (userData) => {
            dispatch({ type: "LOGIN", payload: userData });
            navigate("/chat");
        },
        onError: (error) => toast.error(error.response.data.message)
    })
    
    return {
        mutate,
        isPending,
    }
}
