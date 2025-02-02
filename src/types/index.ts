export type Sender = "User" | "Bot";
export type Message = {
  id: string;
  text: string;
  sender: Sender;
  type: MessageType;
  nextFlowId: string | null;
}
export type MessageType = "Text" | "Action";
export type ChatFlow = {
  id: string;
  name: string;
  messages: Message[];
}