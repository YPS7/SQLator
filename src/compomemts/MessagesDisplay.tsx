import MessageDisplay from "./MessageDisplay";

interface UserMessage {
    role: string,
    content: string
}

interface MessageDisplayProps {
    userMessages: UserMessage[]

}

const MessagesDisplay = ({ userMessages } : MessageDisplayProps) => {
    return (
      <div className="messages-display">
        {userMessages.map((userMessage, _index) => <MessageDisplay key={_index} message={userMessage}/>)}
    
        
      </div>
    );
  }
  
  export default MessagesDisplay;
  