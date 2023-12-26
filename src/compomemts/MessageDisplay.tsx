import animatedIcon from './wer.png'; 

interface UserMessage {
    role: string,
    content: string
}

interface MessageDisplayProps {
    message: UserMessage
}

const MessageDisplay = ({ message }: MessageDisplayProps) => {
    return (
      <div className="message-display">
        <p id="icon"><img src={animatedIcon} alt="Animated Icon" style={{width: '25px', height: '25px'}} /></p>
        <p>{message.content}</p>
      </div>
    );
}

export default MessageDisplay;