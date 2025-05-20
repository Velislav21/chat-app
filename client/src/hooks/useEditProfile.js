import { useMutation } from "@tanstack/react-query";
import useAuthContext from "./useAuthContext";

import axiosClient from "../axiosInstance";
import { toast } from "react-hot-toast";


export default function useEditProfile() {

    const { dispatch, user } = useAuthContext();

    async function editProfile(values) {
        const response = await axiosClient.put("/auth/edit", values, {
            headers: {
                "Authorization": `Bearer ${user.accessToken}`
            }
        });
        return response.data;
    }

    const { mutate, isPending, error } = useMutation({
        mutationFn: editProfile,
        onSuccess: (updatedUserData) => {
            dispatch({ type: "LOGIN", payload: updatedUserData });
        },
        // onError: (error) => toast.error(error.response.data.message)
    })

    return {
        mutate,
        isPending,
        error
    }
}
