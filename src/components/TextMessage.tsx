import { Sender } from "../types";

interface Props {
  text: string;
  sender: Sender;
}

const textMessageStyle = (sender: Sender) => ({
  padding: "8px",
  width: "90%",
  borderRadius: "8px",
  backgroundColor: sender === "User" ? "#2563EB" : "#E5E7EB",
  color: sender === "User" ? "#FFFFFF" : "#000000",
  alignSelf: sender === "User" ? "flex-end" : "flex-start",
  marginLeft: sender === "User" ? "auto" : "0",
});

const TextMessage = ({ text, sender }: Props) => (
  <div
    aria-label={sender === "User" ? "Mensaje del usuario" : "Mensaje del bot"}
    style={textMessageStyle(sender)}
    role="contentinfo"
  >
    {text}
  </div>
);

export default TextMessage;
