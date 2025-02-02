import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { v4 } from "uuid";

import { Message } from "../types";
import { chatFlows, notFoundFlow, welcomeFlow } from "../mocks";

interface IUseChatFlow {
  messages: Message[];
  input: string;
  setInput: Dispatch<SetStateAction<string>>
  handleSend: () => void
  handleNextFlowResponse: (idFlow: string | null) => void
}

const useChatFlow = (): IUseChatFlow => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");

  useEffect(() => {
    setMessages(welcomeFlow.messages);
  }, []);

  const handleNextFlowResponse = (idFlow: string | null) => {
    const nextFlow =
      chatFlows.find((flow) => flow.id === idFlow) ?? notFoundFlow;

    setMessages((prev) => [...prev, ...nextFlow.messages]);
  };

  const handleSend = () => {
    if (input.trim()) {
      setMessages((prev) => [
        ...prev,
        { id: v4(), sender: "User", type: "Text", text: input, nextFlowId: null },
      ]);
      setInput("");
    }
  };

  return {
    messages,
    input,
    setInput,
    handleSend,
    handleNextFlowResponse,
  };
};

export default useChatFlow