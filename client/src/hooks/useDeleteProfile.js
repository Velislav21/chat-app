import { useMutation } from "@tanstack/react-query";
import useAuthContext from "./useAuthContext";

import axiosClient from "../axiosInstance";

export default function useDeleteProfile(modalRef) {

    const { dispatch, user } = useAuthContext();

    async function deleteProfile() {
        await axiosClient.delete("/auth/delete", {
            headers: {
                "Authorization": `Bearer ${user.accessToken}`
            }
        });
    }

    const { mutate, isPending } = useMutation({
        mutationFn: deleteProfile,
        onSuccess: () => {
            modalRef.close();
            dispatch({ type: "LOGOUT", payload: null });
        }
    })

    return {
        mutate,
        isPending,
    }
}
