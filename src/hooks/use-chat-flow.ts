import { useState, Dispatch, SetStateAction } from "react";
import { v4 } from "uuid";

import { ChatFlow, Message } from "../types";
import { MAIN_FLOW, NOT_FOUND_FLOW, WELCOME_FLOW } from "../mocks";

interface IUseChatFlow {
  messages: Message[];
  input: string;
  setInput: Dispatch<SetStateAction<string>>
  handleSend: () => void
  handleNextFlowResponse: (idFlow: string | null) => void
}

const useChatFlow = (): IUseChatFlow => {
  const [messages, setMessages] = useState<Message[]>([...WELCOME_FLOW.messages]);
  const [input, setInput] = useState<string>("");
  const [chatFlows] = useState<ChatFlow[]>(MAIN_FLOW)

  const handleNextFlowResponse = (idFlow: string | null) => {
    const nextFlow =
      chatFlows.find((flow) => flow.id === idFlow) ?? NOT_FOUND_FLOW;

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