import React from 'react';
import './FloatingButton.css';

interface FloatingButtonProps {
  onClick: () => void;
  text: string;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick, text }) => {
  return (
    <div className="floating-button" onClick={onClick}>
      {text}
    </div>
  );
};

export default FloatingButton;
