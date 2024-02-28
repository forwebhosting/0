// chatbot.js

import React, { useState, useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import "./ChatBot.css";
import ChatBotIcon from "./chatbot.png";
import ChatBotLogo from "./ChatBotLogo.png";
import messageTone from "./messageTone.mp3";
import Popupsound from "./popup-sound.mp3";
import fetchUserInfo from "./userinfo"; // Import the userinfo.js function
import chatbotData from "./chatbotData.json"; // Import the JSON data

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
            "Hello! I am Thowfick's virtual assistant. How may I assist you today?"
          );
          playMessageTone();
          setFirstTime(false);
        }, 2000);
      }
    }
  }, [showChatbot, firstTime]);

  const toggleChatbot = () => {
    const popupAudio = new Audio(Popupsound);
    popupAudio.play();
    setShowChatbot((prev) => !prev);
  };

  const handleUserMessage = async (message) => {
    if (message.trim() === "") {
      return;
    }

    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, type: "user" },
    ]);

    // Check for auto-reply based on patterns
    const matchedReply = chatbotData.find(({ patterns }) =>
      patterns.some((pattern) => new RegExp(pattern, "i").test(message))
    );

    if (matchedReply) {
      setTimeout(() => {
        handleBotMessage(matchedReply.reply);
        playMessageTone();
        chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
      }, 1000);
    } else {
      // If no pattern is found, reply with a default message
      setTimeout(() => {
        handleBotMessage("Sorry, I am in the developing stage.");
        playMessageTone();
        chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
      }, 1000);

      // Ask a follow-up question
      setTimeout(() => {
        handleBotMessage("Shall I provide some information about you?");
        playMessageTone();
        chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
      }, 2000);

      let infoProvided = false; // Flag to track if information has been provided

      // Check if the user wants information about themselves
      if (message.toLowerCase() === "yes" || message.toLowerCase() === "y") {
        if (!infoProvided) {
          // Set the flag to true to prevent repeated information
          infoProvided = true;

          // Fetch user information from userinfo.js
          const userMessages = await fetchUserInfo();

          if (userMessages) {
            // Display user messages in the chat
            userMessages.forEach((userMessage, index) => {
              setTimeout(() => {
                handleBotMessage(userMessage);
                playMessageTone();
                chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
              }, 3000 + index * 1000);
            });
          } else {
            // Handle the case when user information cannot be fetched
            setTimeout(() => {
              handleBotMessage("Unable to retrieve user information.");
              playMessageTone();
              chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
            }, 3000);
          }
        } else {
          // Inform the user that information has already been provided
          setTimeout(() => {
            handleBotMessage("I already provided information about you.");
            playMessageTone();
            chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
          }, 3000);
        }
      } else {
        // If the user's response is not "yes," thank them
        setTimeout(() => {
          handleBotMessage("Thank you!");
          playMessageTone();
          chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
        }, 10000);
      }
    }

    inputRef.current.value = "";
  };

  const handleBotMessage = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, type: "bot" },
    ]);
  };

  const playMessageTone = () => {
    const audio = new Audio(messageTone);
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
