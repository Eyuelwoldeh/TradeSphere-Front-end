import axiosInstance from "./axiosConfig";

export const login = async (email, password) => {
    // Trimming the data since it is causing me headaches...
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    console.log("Login Request Payload:", { email: trimmedEmail, passwordHash: trimmedPassword });
    const response = await axiosInstance.post("/auth/login", { email: trimmedEmail, passwordHash: trimmedPassword });
    console.log("Login Response:", response.data);
    return response.data;
};

export const register = async (name, email, password) => {
    const response = await axiosInstance.post("/auth/register", { name, email, password });
    return response.data;
};