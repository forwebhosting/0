// ChatBot.js

import React, { useState, useRef, useEffect } from 'react';
import { FaComment, FaTimes } from 'react-icons/fa';
import './ChatBot.css';
import data from './data'; // Import the data.js file

const ChatBot = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [messages, setMessages] = useState([]);
  const inputRef = useRef(null);
  const chatboxRef = useRef(null);

  useEffect(() => {
    if (showChatbot) {
      inputRef.current.focus();
    }
  }, [showChatbot]);

  const toggleChatbot = () => {
    setShowChatbot((prev) => !prev);
  };

  const handleUserMessage = (message) => {
    setMessages((prevMessages) => [...prevMessages, { text: message, type: 'user' }]);

    // Find all matching responses in the data.js file
    const matchingResponses = data.filter((response) => response.pattern.test(message));

    // Choose the most relevant response (you can customize this logic)
    const botResponse = matchingResponses.length > 0 ? matchingResponses[0].reply : "I'm sorry, I didn't understand that. Can you please ask in a different way?";

    // Simulate a delayed response from the chatbot
    setTimeout(() => {
      setMessages((prevMessages) => [...prevMessages, { text: botResponse, type: 'bot' }]);
      // Scroll to the bottom of the chatbox
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }, 1000);
  };

  return (
    <div className={`chatbot-container ${showChatbot ? 'show-chatbot' : ''}`}>
      {showChatbot ? (
        <div className="chatbot">
          <div className="chat-header">
            <h2>Chatbot</h2>
            <button className="close-btn" onClick={toggleChatbot}>
              <FaTimes />
            </button>
          </div>
          <div ref={chatboxRef} className="chat-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`message ${msg.type}`}>
                {msg.text}
              </div>
            ))}
          </div>
          <div className="chat-input">
            <input
              ref={inputRef}
              type="text"
              placeholder="Type your message..."
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleUserMessage(e.target.value);
                  e.target.value = '';
                }
              }}
            />
            <button onClick={() => inputRef.current && handleUserMessage(inputRef.current.value)}>Send</button>
          </div>
        </div>
      ) : (
        <button className="chatbot-icon" onClick={toggleChatbot}>
          <FaComment />
        </button>
      )}
    </div>
  );
};

export default ChatBot;
