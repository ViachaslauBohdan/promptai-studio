import React, { useState, useEffect } from 'react';

const TypewriterText = ({ text, speed = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length && isTyping) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (currentIndex >= text.length) {
      const pauseTimeout = setTimeout(() => {
        setIsTyping(false);
        setTimeout(() => {
          setDisplayText('');
          setCurrentIndex(0);
          setIsTyping(true);
        }, 2000);
      }, 1000);

      return () => clearTimeout(pauseTimeout);
    }
  }, [currentIndex, text, speed, isTyping]);

  return (
    <div style={{ position: 'relative', display: 'inline-block' }}>
      {displayText}
      <span className="cursor"></span>
    </div>
  );
};

export default TypewriterText; 