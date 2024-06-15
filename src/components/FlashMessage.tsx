import React, { useState, useEffect } from "react";
import "../styles/FlashMessage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";

const FlashMessage: React.FC<{ message: string }> = ({ message }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`flash-message ${isVisible ? "show" : ""}`}>
      <FontAwesomeIcon icon={faCircleCheck} />
      <span style={{ margin: 10 }}>{message}</span>
    </div>
  );
}

export default FlashMessage;
