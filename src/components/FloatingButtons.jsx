import React from 'react';

const FloatingButtons = () => {
  return (
    <div className="floating-buttons">
      <a
        href="https://wa.me/34631234567"
        className="float-btn whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
      <a
        href="https://t.me/promptai_studio"
        className="float-btn telegram-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on Telegram"
      >
        <i className="fab fa-telegram-plane"></i>
      </a>
    </div>
  );
};

export default FloatingButtons; 