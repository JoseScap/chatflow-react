import { CSSProperties, useState } from "react";

interface Props {
  text: string;
  onAction: () => void;
}

const ActionMessage = ({ text, onAction }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <button
      aria-label="Acción de mensaje"
      style={{
        ...buttonStyle,
        ...(isHovered ? hoverStyle : {}),
        ...(isFocused ? focusStyle : {}),
      }}
      onClick={onAction}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    >
      {text}
    </button>
  );
};

const buttonStyle: CSSProperties = {
  padding: '8px',
  color: '#3B82F6', // blue-500
  border: '2px solid #3B82F6', // blue-500
  borderRadius: '0.5rem', // rounded-lg
  width: '90%',
  marginLeft: 'auto',
  display: 'block',
  transition: 'background-color 0.3s ease, ring 0.3s ease',
};

const hoverStyle: CSSProperties = {
  backgroundColor: '#DBEAFE', // blue-100
};

const focusStyle: CSSProperties = {
  outline: 'none',
  boxShadow: '0 0 0 4px 2px #3B82F6', // blue-500
};

export default ActionMessage;
