import { useQuery } from "@tanstack/react-query";
import useAuthContext from "./useAuthContext";
import axiosClient from "../axiosInstance";

export default function useGetConversations() {
    const { user } = useAuthContext();
    return useQuery({
        queryKey: ["conversations"],
        queryFn: async () => {
            const response = await axiosClient.get("/auth/users", {
                headers: {
                    Authorization: `Bearer ${user.accessToken}`
                }
            });
            return response.data;
        }
    })
}
