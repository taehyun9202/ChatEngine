import './App.css';
import { ChatEngine } from 'react-chat-engine'
import ChatFeed from './components/ChatFeed'
function App() {
  
  return (
    <div className="app">
      <ChatEngine 
        height="100vh"
        projectID="84f10d90-e7bf-4cbe-a9fb-b8281a15ec95"
        userName="tyler"
        userSecret="123"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps}/>}
      />
    </div>
  );
}

export default App;
