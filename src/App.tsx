import { useEffect, useState } from 'react';
import './index.less';
import { Login } from './Login/Login';
import { Main } from './Main/Main';
import { chatService } from './Dto/ChatService';

function App() {
  const [renderCount, setRenderCount] = useState(1);

  console.log("App render count: " + renderCount);

  useEffect( () => {
    const listener = () => setRenderCount(x => x + 1);
    chatService.addListener(listener);
    return () => chatService.removeListener(listener);
  }, []);
  
  return chatService.inbox ? <Main /> : <Login />;
}

const theme = localStorage["theme"];

if (theme) document.documentElement.classList.add("theme-light")
else localStorage["theme"] = "";

export default App
