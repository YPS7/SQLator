
interface CodeDisplayProps {
    text: string
}

const CodeDisplay = ({ text } : CodeDisplayProps) => {
    return (
      <div className="code-display">
        <div className="buttons">
            <div className="button f"></div>
            <div className="button s"></div>
            <div className="button t"></div>
        </div>
        <div className="code-output">
            <p>{text}</p>

        </div>
      </div>
    );
  }
  
  export default CodeDisplay;
  