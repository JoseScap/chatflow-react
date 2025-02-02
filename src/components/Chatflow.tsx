import { useState } from "react";
import ChatflowBox from "./ChatflowBox";
import ChatflowButton from "./ChatflowButton";
import TextMessage from "./TextMessage";
import ActionMessage from "./ActionMessage";
import useChatFlow from "../hooks/use-chat-flow";

const Chatflow = () => {
  const [isOpened, setIsOpened] = useState(false)
  const { messages, input, setInput, handleSend, handleNextFlowResponse } =
    useChatFlow();

  return (
    <>
      <ChatflowButton onPress={() => setIsOpened(prev => !prev)} />
      <ChatflowBox
        input={input}
        isOpened={isOpened}
        onClose={() => setIsOpened(false)}
        onChangeInput={setInput}
        onSend={handleSend}
      >
        {messages.map((msg, index) =>
          msg.type === "Text" ? (
            <TextMessage
              key={index}
              sender={msg.sender}
              text={msg.text}
            />
          ) : (
            <ActionMessage
              key={index}
              text={msg.text}
              onAction={() => handleNextFlowResponse(msg.nextFlowId)}
            />
          )
        )}
      </ChatflowBox>
    </>
  );
}

export default Chatflow