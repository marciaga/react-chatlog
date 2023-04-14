import React, { useState } from 'react';
import ChatLog from './components/ChatLog';
import './App.css';
import chatMessages from './data/messages.json';

// Return an array of each participant in the chat
const participants = () => {
  const senders = chatMessages.map(msg => msg.sender);
  const uniqueSenders = new Set(senders);

  return [...uniqueSenders];
}

const appTitle = () => {
  const [first, second] = participants();

  return `Chat between ${first} and ${second}`;
}

const App = () => {
  const [likes, setLikes] = useState(0)
  const handleLike = (liked, updateLike) => {
    setLikes(prev => liked ? prev + 1 : prev - 1);
    updateLike(!liked)
  }

  return (
    <div id="App">
      <header>
        <h1>{appTitle()}</h1>
        <section>
          <p>{likes} ❤️s</p>
        </section>
        <p>environment: {process.env.REACT_APP_ENV}</p>
      </header>
      <main>
        <ChatLog entries={chatMessages} handleLike={handleLike} />
      </main>
    </div>
  );
}

export default App;
