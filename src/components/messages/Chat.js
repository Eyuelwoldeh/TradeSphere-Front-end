import React, { useEffect, useState } from 'react';
import './Chat.css'; // Customize styles as needed
import { sendMessage, getMessagesForUser } from '../../api/messageApi';  // Use getMessagesForUser

const Chat = ({ senderUid, receiverUid }) => {
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState([]);

  // Fetch messages on component mount or when senderUid or receiverUid changes
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const allMessages = await getMessagesForUser(senderUid);  // Fetch messages for the sender
        // Filter the messages to only include those between the sender and receiver
        const filteredMessages = allMessages.filter(
          (msg) => (msg.senderUid === receiverUid || msg.receiverUid === receiverUid)
        );
        setMessages(filteredMessages);  // Update the state with filtered messages
      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, [senderUid, receiverUid]);

  // Handle message submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (message.trim()) {
      try {
        const newMessage = await sendMessage(senderUid, receiverUid, message);
        // Add the new message to the existing list of messages
        setMessages([...messages, newMessage]);
        setMessage('');  // Clear the input field
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  return (
    <div className="chat-container">
      <div className="messages-box">
        {/* Map through messages and display them */}
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.senderUid === senderUid ? 'sent' : 'received'}`}>
            <p>{msg.content}</p>
            <span className="timestamp">
              {new Date(msg.timestamp).toLocaleString()}  {/* Format timestamp */}
            </span>
          </div>
        ))}
      </div>

      {/* Message input form */}
      <form onSubmit={handleSubmit} className="message-form">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="message-input"
        />
        <button type="submit" className="send-btn">Send</button>
      </form>
    </div>
  );
};

export default Chat;