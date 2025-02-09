import { useState, useContext } from "react";
import { sendMessage } from "../../api/messageApi";
import { UserContext } from "../../context/UserContext";

function MessageForm() {
    const { user } = useContext(UserContext);
    const [receiverId, setReceiverId] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!user) return alert("Please log in first!");
        await sendMessage(user.id, receiverId, content);
        alert("Message sent!");
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Receiver ID" value={receiverId} onChange={e => setReceiverId(e.target.value)} required />
            <textarea placeholder="Your message" value={content} onChange={e => setContent(e.target.value)} required />
            <button type="submit">Send</button>
        </form>
    );
}

export default MessageForm;