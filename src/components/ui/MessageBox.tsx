import React, { useState, useEffect } from 'react';

interface MessageProps {
  message: string;
  onClose: () => void; 
}

const MessageBox: React.FC<MessageProps> = ({ message, onClose }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const messageBoxRef = document.getElementById('messageBox');
      if (messageBoxRef && !messageBoxRef.contains(event.target as Node)) {
        onClose(); 
        setShow(false); 
      }
    };

    if (show) {
      document.addEventListener('mousedown', handleOutsideClick);
    }

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [show, onClose]);

  return (
    show && (
      <div id="messageBox" className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-lg shadow-md" >
        {message}
      </div>
    )
  );
};

export default MessageBox;