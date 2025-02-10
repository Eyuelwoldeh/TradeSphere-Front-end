import axiosInstance from "./axiosConfig";

export const getMessagesForChat = async (senderUid, receiverUid) => {
    const response = await axiosInstance.get(`/messages/${senderUid}/${receiverUid}`);
    return response.data;
};

export const getChatUsers = async (uid) => {
    const response = await axiosInstance.get(`/messages/chat-users/${uid}`);
    return response.data;
};

export const sendMessage = async (senderUid, receiverUid, content) => {
    const response = await axiosInstance.post("/messages", { senderUid, receiverUid, content });
    return response.data;
};