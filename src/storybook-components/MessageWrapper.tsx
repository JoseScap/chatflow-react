import { X } from "lucide-react";
import { CSSProperties } from "react";
import ActionMessage from "../components/ActionMessage";

export default function MessageWrapper() {
    return <div style={chatBoxWrapper}>
    <div style={chatBoxHeader}>
      <h4 style={chatBoxTitle}>Chat</h4>
      <button style={closeButton} onClick={() => undefined}>
        <X />
      </button>
    </div>
    <div style={chatBoxContent}>
      <ActionMessage text="click me" onAction={() => undefined} />
    </div>
  </div>
}

const chatBoxWrapper: CSSProperties = {
  width: '300px',
  maxHeight: '400px',
  backgroundColor: '#fff',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
};

const chatBoxHeader: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  backgroundColor: '#2563EB',
  color: '#fff',
  borderTopLeftRadius: '8px',
  borderTopRightRadius: '8px',
};

const chatBoxTitle: CSSProperties = {
  margin: 0,
  fontSize: '16px',
};

const closeButton: CSSProperties = {
  background: 'transparent',
  border: 'none',
  color: '#fff',
  cursor: 'pointer',
  fontSize: '20px',
};

const chatBoxContent: CSSProperties = {
  flex: 1,
  padding: '10px',
  overflowY: 'auto',
};