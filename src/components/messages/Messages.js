import { useEffect, useState, useContext } from "react";
import { getMessagesForChat, sendMessage } from "../../api/messageApi";
import { UserContext } from "../../context/UserContext";
import ChatSidebar from "./ChatSidebar";

function Messages() {
    const { user } = useContext(UserContext);
    const [selectedUser, setSelectedUser] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");

    useEffect(() => {
        if (user?.uid && selectedUser?.uid) {
            getMessagesForChat(user.uid, selectedUser.uid)
                .then(setMessages)
                .catch(console.error);
        }
    }, [user, selectedUser]);

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!newMessage.trim()) return;

        const message = await sendMessage(user.uid, selectedUser.uid, newMessage);
        setMessages([...messages, message]);
        setNewMessage("");
    };

    return (
        <div className="flex h-screen">
            <ChatSidebar onSelectUser={setSelectedUser} />
            <div className="w-3/4 flex flex-col">
                {selectedUser ? (
                    <>
                        <div className="p-4 border-b font-bold">{selectedUser.name}</div>
                        <div className="flex-1 overflow-y-auto p-4 space-y-2">
                            {messages.map(msg => (
                                <div key={msg.id} className={`p-2 rounded-md w-fit ${msg.senderId === user.uid ? "bg-blue-500 text-white self-end" : "bg-gray-200"}`}>
                                    {msg.content}
                                </div>
                            ))}
                        </div>
                        <form onSubmit={handleSendMessage} className="p-4 border-t flex">
                            <input 
                                type="text" 
                                className="flex-1 p-2 border rounded-md" 
                                placeholder="Type a message..." 
                                value={newMessage} 
                                onChange={(e) => setNewMessage(e.target.value)}
                            />
                            <button type="submit" className="ml-2 p-2 bg-blue-500 text-white rounded-md">Send</button>
                        </form>
                    </>
                ) : (
                    <div className="flex-1 flex items-center justify-center">Select a chat to start messaging</div>
                )}
            </div>
        </div>
    );
}

export default Messages;