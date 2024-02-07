import React, { useState } from 'react';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import './ChatBot.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you?', isUser: false },
  ]);

  const handleSendMessage = (message) => {
    setMessages([...messages, { text: message, isUser: true }]);
    // Perform chatbot logic or API call here and add the bot's response
    // For testing purposes, let's simulate a bot response after a short delay
    setTimeout(() => {
      setMessages([...messages, { text: 'Sure, I can help with that!', isUser: false }]);
    }, 1000);
  };

  return (
    <div className="chatbot">
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg.text} isUser={msg.isUser} />
        ))}
      </div>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};

export default ChatBot;
