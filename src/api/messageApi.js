import axiosInstance from "./axiosConfig";

export const getMessagesForChat = async (senderUid, receiverUid) => {
    const response = await axiosInstance.get(`/messages/${senderUid}/${receiverUid}`);
    return response.data;
};

export const getChatUsers = async () => {
    const response = await axiosInstance.get("/messages/chat-users");
    return response.data;
};

export const sendMessage = async (senderId, receiverId, content) => {
    const response = await axiosInstance.post("/messages", { senderId, receiverId, content });
    return response.data;
};