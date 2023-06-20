import { axiosInstance } from "./config/axios"

export const QuestionsApi = {
    getFollowing: async () => {
        return await axiosInstance.get('following')
    },
    getForYou: async () => {
        return await axiosInstance.get('for_you')
    },
    getReveal: async (id: string) => {
        return await axiosInstance.get(`reveal?id=${id}`)
    }
}