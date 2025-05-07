import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import useAuthContext from "./useAuthContext";

import axiosClient from "../axiosInstance";
import { toast } from "react-hot-toast";

async function register(values) {
    const response = await axiosClient.post("/auth/register", values);
    return response.data;
}

export default function useRegister() {

    const navigate = useNavigate();
    const { dispatch } = useAuthContext();

    const { mutate, isPending } = useMutation({
        mutationFn: register,
        onSuccess: (userData) => {
            dispatch({ type: "LOGIN", payload: userData });
            navigate("/");
        },
        onError: (error) => toast.error(error.response.data.message)
    })

    return {
        mutate,
        isPending,
    }
}
