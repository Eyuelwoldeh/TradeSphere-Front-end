import { useState, useEffect, useContext } from "react";
import { getChatUsers } from "../../api/messageApi";
import { UserContext } from "../../context/UserContext";

function ChatSidebar({ onSelectUser }) {
    const { user } = useContext(UserContext);
    const [chatUsers, setChatUsers] = useState([]);

    useEffect(() => {
        if (user?.uid) {
            getChatUsers(user.uid)
                .then(setChatUsers)
                .catch(console.error);
        }
    }, [user]);

    return (
        <div className="w-1/4 bg-gray-800 text-white h-screen p-4">
            <h2 className="text-lg font-bold mb-4">Chats</h2>
            <ul>
                {chatUsers.map(chatUser => (
                    <li 
                        key={chatUser.uid} 
                        onClick={() => onSelectUser(chatUser)} 
                        className="p-2 hover:bg-gray-700 cursor-pointer"
                    >
                        {chatUser.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default ChatSidebar;