import { useMutation } from "@tanstack/react-query";
import axiosClient from "../../axiosInstance";

async function registerHandler(values) {
    const response = await axiosClient.post("/auth/register", values);
    return response.data;
}

export default function useRegister() {
    return useMutation({
        mutationFn: registerHandler,
    })
}
