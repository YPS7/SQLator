import { useState } from "react";
import CodeDisplay from "./compomemts/CodeDisplay";
import MessagesDisplay from "./compomemts/MessagesDisplay";


interface ChatData {
  role: string,
  content: string,
}
const App = () => {
  const [value, setValue] = useState<string>("");
  const [ chat, setChat] = useState<ChatData[]>([]);
  const getQuery = async () => {
    try {

      const options = {
        method: 'POST',
        headers: { 
          "Content-Type": "application/json"
         },
        body: JSON.stringify({
          message: value
        })
      }


     const response = await fetch("http://localhost:8000/completions", options);

     const data = await response.json()
     console.log(data)
     const userMessage = {
      role:"user",
      content: value
     }
     setChat(oldChat => [...oldChat, data, userMessage])

    } catch (error) {
      console.log(error);
    }
  }
   
  const clearChat = () => {
    setValue("")
    setChat([])
  }

  const filterUserMessages = chat.filter(message => message.role === "user")
  const latestCode = chat.filter(message => message.role === "assistant").pop()


  /*return (
    <div className="app">
      <MessagesDisplay userMessages={filterUserMessages}/>
      <input value={value} onChange={e => setValue(e.target.value)}/>
      <CodeDisplay text={latestCode?.content || ""}/>
      <div className="button-container">
        <button id="get-query" onClick={getQuery}>GET QUERY!</button>
        <button id="clear-chat" onClick={clearChat} >CLEAR CHAT</button>
       </div>
      
    </div>
  );*/

  return (
    <div className="app">
      <h1 style={{ textAlign: 'center' }}><span className="sql">SQL</span><span className="ator">ator</span></h1>
      <MessagesDisplay userMessages={filterUserMessages}/>
      <input value={value} onChange={e => setValue(e.target.value)}/>
      <CodeDisplay text={latestCode?.content || ""}/>
      <div className="button-container">
        <button id="get-query" onClick={getQuery}>GET QUERY!</button>
        <button id="clear-chat" onClick={clearChat} >CLEAR CHAT</button>
      </div>
    </div>
  );
  
}

export default App;
