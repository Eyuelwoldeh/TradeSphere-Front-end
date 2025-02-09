import { useEffect, useState, useContext } from "react";
import { getMessagesForUser } from "../../api/messageApi";
import { UserContext } from "../../context/UserContext";
import Chat from "./Chat"; // Import the new Chat component

function Messages() {
    const { user } = useContext(UserContext);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (user?.uid) {
            console.log("Using User UID:", user.uid);

            getMessagesForUser(user.uid)
                .then(messages => {
                    console.log("Received messages:", messages);
                    setMessages(messages);
                })
                .catch(error => {
                    console.error("Failed to fetch messages:", error);
                    if (error.response) {
                        console.error("Error response:", error.response.data);
                    }
                });
        }
    }, [user]);

    return (
        <div>
            <h2>Your Messages</h2>
            <div className="chat-container">
                {/* Render the Chat component */}
                {messages.length > 0 ? (
                    <Chat messages={messages} />
                ) : (
                    <p>No messages yet. Start chatting!</p>
                )}
            </div>
        </div>
    );
}

export default Messages;