import { useMutation } from "@tanstack/react-query";
import useAuthContext from "./useAuthContext";

import axiosClient from "../axiosInstance";

export default function useDeleteProfile() {

    const { dispatch, user } = useAuthContext();

    async function deleteProfile() {
        return await axiosClient.delete("/auth/delete", {
            headers: {
                "Authorization": `Bearer ${user.accessToken}`
            }
        });
    }

    const { mutate, isPending, } = useMutation({
        mutationFn: deleteProfile,
        onSuccess: () => {
            dispatch({ type: "LOGOUT", payload: null });
        },
    })

    return {
        mutate,
        isPending,
    }
}
