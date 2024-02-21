// ChatBot.js

import React, { useState, useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import "./ChatBot.css";
import ChatBotIcon from "./chatbot.png";
import ChatBotLogo from "./ChatBotLogo.png";
import popSound from "./popup.mp3";

const ChatBot = () => {
  const [showChatbot, setShowChatbot] = useState(false);
  const [messages, setMessages] = useState([]);
  const inputRef = useRef(null);
  const chatboxRef = useRef(null);
  const [firstTime, setFirstTime] = useState(true);

  useEffect(() => {
    if (showChatbot) {
      inputRef.current.focus();
      if (firstTime) {
        setTimeout(() => {
          handleBotMessage(
            "Hi there! I am SAM (Smart Assist Manager). How can I assist you today?"
          );
          playPopSound(); // Play the sound effect
          setFirstTime(false);
        }, 2000);
      }
    }
  }, [showChatbot, firstTime]);

  const toggleChatbot = () => {
    setShowChatbot((prev) => !prev);
  };

  const handleUserMessage = (message) => {
    // Check if the message is empty or contains only whitespaces
    if (message.trim() === "") {
      return;
    }

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, type: "user" },
    ]);

    // Simulate a delayed response from the chatbot
    setTimeout(() => {
      handleBotMessage("I am a Beta Version Bot");
      playPopSound(); // Play the sound effect
      // Scroll to the bottom of the chatbox
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }, 1000);

    // Clear the input field
    inputRef.current.value = "";
  };

  const handleBotMessage = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, type: "bot" },
    ]);
  };

  const playPopSound = () => {
    const audio = new Audio(popSound);
    audio.play();
  };

  const isMobileView = window.innerWidth <= 767;

  return (
    <div
      className={`chatbot-container ${showChatbot ? "show-chatbot" : ""} ${
        isMobileView ? "mobile-view" : ""
      }`}
    >
      {showChatbot && (
        <div className="chatbot">
          <div className="chat-header">
            <div className="chatbot-logo-container">
              <img
                src={ChatBotLogo}
                alt="Chatbot Logo"
                className="chatbot-logo"
              />
            </div>
            <h2>Chatbot</h2>
            {isMobileView ? (
              <button
                className="mob-chatbot-close-icon"
                onClick={toggleChatbot}
              >
                <FaTimes />
              </button>
            ) : null}
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
                if (e.key === "Enter") {
                  handleUserMessage(e.target.value);
                }
              }}
            />
            <button
              onClick={() =>
                inputRef.current && handleUserMessage(inputRef.current.value)
              }
            >
              Send
            </button>
          </div>
        </div>
      )}
      {showChatbot && !isMobileView ? (
        <button className="chatbot-close-icon" onClick={toggleChatbot}>
          <FaTimes />
        </button>
      ) : (
        <button className="chatbot-icon" onClick={toggleChatbot}>
          <img src={ChatBotIcon} alt="Chatbot" />
        </button>
      )}
    </div>
  );
};

export default ChatBot;
