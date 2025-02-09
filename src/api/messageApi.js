import axiosInstance from "./axiosConfig";

export const getMessagesForUser = async (userId) => {
    const response = await axiosInstance.get(`/messages/${userId}`);
    return response.data;
};

export const sendMessage = async (senderId, receiverId, content) => {
    const response = await axiosInstance.post("/messages", { senderId, receiverId, content });
    return response.data;
};