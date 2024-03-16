import React, { useState, useRef, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import "./ChatBot.css";
import ChatBotIcon from "./chatbot.png";
import ChatBotLogo from "./ChatBotLogo.png";
import messageTone from "./messageTone.mp3";
import Popupsound from "./popup-sound.mp3";
import fetchUserInfo from "./userinfo"; // Import the userinfo.js function
import chatbotData from "./chatbotData.json"; // Import the JSON data
import jokeData from "./jokeData.json";
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

      // Ask a follow-up question with options for input
      setTimeout(() => {
        handleBotMessage("Please select an option:", [
          "Shall i say about you?",
          "Do you want to know about me?",
          "Shall i tell a joke to you?",
        ]);
        playMessageTone();
        chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
      }, 2000);
    }

    inputRef.current.value = "";
  };

  const handleBotMessage = (message, options) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, type: "bot", options },
    ]);
  };

  const playMessageTone = () => {
    const audio = new Audio(messageTone);
    audio.play();
  };

  const handleOptionClick = async (option) => {
    // Show confirmation message based on the selected option
    switch (option) {
      case "Shall i say about you?":
        handleBotMessage(
          `You have chosen: "${option}". Please wait while I gather information about you...`
        );
        break;
      case "Do you want to know about me?":
        handleBotMessage(
          `You have chosen: "${option}". Let me provide some information about myself...`
        );
        break;
      case "Shall i tell a joke to you?":
        handleBotMessage(
          `You have chosen: "${option}". Get ready for a good laugh...`
        );
        break;
      default:
        // Handle default case
        break;
    }
    playMessageTone();
    chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;

    // Handle each option accordingly
    switch (option) {
      case "Shall i say about you?":
        // Fetch user information
        const userMessages = await fetchUserInfo();
        if (userMessages) {
          // Display user messages in the chat
          userMessages.forEach((userMessage, index) => {
            setTimeout(() => {
              handleBotMessage(userMessage);
              playMessageTone();
              chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
            }, 1000 * (index + 1)); // Adjust the delay as needed
          });
        } else {
          // Handle the case when user information cannot be fetched
          setTimeout(() => {
            handleBotMessage("Unable to retrieve user information.");
            playMessageTone();
            chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
          }, 1000);
        }
        break;
      case "Do you want to know about me?":
        setTimeout(() => {
          handleBotMessage(
            `You can check out my creator's portfolio at https://thowfickofficial.netlify.app. It showcases various projects and skills!`
          );
          playMessageTone();
          chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
        }, 1000);

        setTimeout(() => {
          handleBotMessage(
            `Mohamed Thowfick has expertise in web development, programming languages like JavaScript, React, Node.js, and more!`
          );
          playMessageTone();
          chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
        }, 2000);

        setTimeout(() => {
          handleBotMessage(
            `With a passion for cybersecurity, ethical hacking, and full stack development, Mohamed Thowfick is an aspiring IT professional.`
          );
          playMessageTone();
          chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
        }, 3000);

        setTimeout(() => {
          handleBotMessage(
            `Explore Mohamed Thowfick's skills in Git, Docker, WordPress, MongoDB, MySQL, Python, Node.js, PHP, C, Bash, Typing, Linux, Networking, Computer Hardware, Web Applications, CLI App Development on Linux, Photoshop, Figma, React, HTML5, CSS3, JavaScript, Tailwind CSS, Bootstrap, and more.`
          );
          playMessageTone();
          chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
        }, 4000);

        setTimeout(() => {
          handleBotMessage(
            `Explore Mohamed Thowfick's internship experience in Cyber Security, Full Stack Development, and Web Development.`
          );
          playMessageTone();
          chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
        }, 5000);

        setTimeout(() => {
          handleBotMessage(
            `Learn about Mohamed Thowfick's educational journey, including a Bachelor of Business Administration, Secondary School Education, and a Diploma in Computer Hardware Technology.`
          );
          playMessageTone();
          chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
        }, 6000);

        setTimeout(() => {
          handleBotMessage(
            `With a passion for cybersecurity, ethical hacking, and full stack development, I'm Mohamed Thowfick—an aspiring IT professional. Throughout my self-learning journey, My career goals revolve around exploring the extreme of technology. I aspire to make a meaningful impact in the IT and cybersecurity industry by ensuring robust security measures and staying ahead of emerging threats. Let's connect to explore how my skills and passion can contribute to the advancement of cybersecurity and the IT industry. Seeking growth opportunities and ready to make a positive impact!`
          );
          playMessageTone();
          chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
        }, 7000);

        // You can continue adding more messages as needed
        break;
      case "Shall i tell a joke to you?":
        handleBotMessage(`Alright, here's a joke for you: ${getRandomJoke()}`);
        playMessageTone();
        chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;

        // Ask if the user wants to hear another joke
        setTimeout(() => {
          handleBotMessage("Would you like to hear another joke?");
          playMessageTone();
          chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
        }, 1000);

        // Provide options for the user to choose from
        setTimeout(() => {
          handleBotMessage("Please select an option:", ["Yes", "No"]);
          playMessageTone();
          chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
        }, 2000);
        break;
      // Handle the case when the user wants to hear another joke
      case "Yes":
        // Get and display another joke
        handleBotMessage(
          `Alright, here's another joke for you: ${getRandomJoke()}`
        );
        playMessageTone();
        chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;

        // Ask if the user wants to hear another joke
        setTimeout(() => {
          handleBotMessage("Would you like to hear another joke?");
          playMessageTone();
          chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
        }, 1000);

        // Provide options for the user to choose from
        setTimeout(() => {
          handleBotMessage("Please select an option:", ["Yes", "No"]);
          playMessageTone();
          chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
        }, 2000);
        break;

      // Handle the case when the user doesn't want to hear another joke
      case "No":
        // Display a thank you message
        handleBotMessage(
          "Thank you for chatting with me! If you have any other questions, feel free to ask."
        );
        playMessageTone();
        chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
        break;
      // Handle other cases similarly

      default:
        // Handle default case
        break;
    }
  };

  // Function to get a random joke from the joke data
  const getRandomJoke = () => {
    const randomIndex = Math.floor(Math.random() * jokeData.length);
    return jokeData[randomIndex];
  };
  const isMobileView = window.innerWidth <= 767;

  useEffect(() => {
    // Scroll to the bottom of the chatbox container
    if (chatboxRef.current) {
      chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
    }
  }, [messages]);

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
                {msg.options && (
                  <div className="options">
                    {msg.options.map((option, optionIndex) => (
                      <button
                        key={optionIndex}
                        onClick={() => handleOptionClick(option)}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
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
