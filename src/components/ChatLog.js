import React from 'react';
import ChatEntry from './ChatEntry';

import './ChatLog.css';

const ChatLog = (props) => {
  const { entries, handleLike } = props;

  return (
    <section className="chat-log">
      {entries.map((entry, i) => {
        const source = i % 2 === 0 ? 'local' : 'remote';
        return <ChatEntry key={i} entry={{ ...entry, source }} handleLike={handleLike} />;
      })}
    </section>
  );
};

export default ChatLog;
