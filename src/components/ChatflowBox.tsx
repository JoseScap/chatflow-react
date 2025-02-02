import { CSSProperties, PropsWithChildren, SetStateAction } from "react";
import { X } from "lucide-react";

interface ChatflowBoxProps extends PropsWithChildren {
  isOpened: boolean
  input: string
  onChangeInput: (value: SetStateAction<string>) => void;
  onClose: () => void;
  onSend: () => void;
}

const ChatflowBox = ({
    children,
    input,
    isOpened,
    onChangeInput,
    onClose,
    onSend,
  }: ChatflowBoxProps) => {
  if (!isOpened) return null

  return (
    <div style={styles.chatflowBoxWrapper}>
      <div style={styles.header}>
        <span style={styles.title}>Chatbot</span>
        <button onClick={onClose} style={styles.closeButton}>
          <X size={18} />
        </button>
      </div>
      <div style={styles.messagesContainer}>
        {children}
      </div>
      <div style={styles.inputContainer}>
        <input
          style={styles.input}
          type="text"
          value={input}
          onChange={(e) => onChangeInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSend()}
        />
        <button style={styles.sendButton} onClick={onSend}>
          Enviar
        </button>
      </div>
    </div>
  );
}

export default ChatflowBox

const styles: Record<string, CSSProperties> = {
  chatflowBoxWrapper: {
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: "0px 0px 10px 0px rgba(0,0,0,1)",
    bottom: '80px',
    display: 'flex',
    flexDirection: 'column',
    height: 'calc(100% - 80px - 16px)',
    maxHeight: '400px',
    position: 'fixed',
    right: '16px',
    width: '300px',
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: "1px solid #E5E7EB",
    padding: "8px",
  },
  closeButton: {
    background: "none",
    border: "none",
    cursor: "pointer",
  },
  title: {
    fontWeight: "bold",
  },
  messagesContainer: {
    flex: 1,
    height: "240px",
    overflowY: "auto",
    padding: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  inputContainer: {
    display: "flex",
    borderTop: "1px solid #E5E7EB",
    padding: "8px",
  },
  input: {
    flex: 1,
    border: "1px solid #D1D5DB",
    padding: "8px",
    borderRadius: "8px 0 0 8px",
    outline: "none",
  },
  sendButton: {
    backgroundColor: "#2563EB",
    color: "white",
    padding: "8px 16px",
    borderRadius: "0 8px 8px 0",
    border: "none",
    cursor: "pointer",
  },
}
