import { MessageCircle } from "lucide-react";
import { CSSProperties } from "react";

interface Props {
  onPress: () => void
}

const ChatflowButton = ({ onPress }: Props) => {

  return (
    <div style={styles.buttonWrapper}>
      <button style={styles.buttonStyle} onClick={onPress}>
        <MessageCircle />
      </button>
    </div>
  );
}

export default ChatflowButton

const styles: Record<string, CSSProperties> = {
  buttonWrapper: {
    position: 'fixed',
    bottom: '16px',
    right: '16px',
  },
  buttonStyle: {
    backgroundColor: '#2563EB',
    color: '#fff',
    padding: '12px',
    borderRadius: '12px',
    border: 'none',
    cursor: 'pointer',
  }
}
