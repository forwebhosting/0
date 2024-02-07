import React, { useState } from 'react';
import './ChatInput.css';

const ChatInput = ({ onSendMessage }) => {
  const [inputText, setInputText] = useState('');

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSendMessage = () => {
    if (inputText.trim() !== '') {
      onSendMessage(inputText);
      setInputText('');
    }
  };

  return (
    <div className="chat-input-container">
      <input
        type="text"
        placeholder="Type a message..."
        value={inputText}
        onChange={handleInputChange}
        className='chatbot-input'
      />
      <button className='chatbot-send-button' onClick={handleSendMessage}>Send</button>
    </div>
  );
};

export default ChatInput;
