import React, { useState } from 'react';
import Timestamp from './TimeStamp';

import './ChatEntry.css';

const ChatEntry = (props) => {
  const { handleLike } = props;
  const entryClasses = `chat-entry ${props.entry.source}`;
  const [liked, setLike] = useState(false);
  const handleClick = () => {
    handleLike(!liked, setLike)
  };

  return (
    <article className={entryClasses}>
      <h2 className="entry-name">{props.entry.sender}</h2>
      <div className="entry-bubble">
        <p className="entry-body">{props.entry.body}</p>
        <p className="entry-time">
          <Timestamp time={props.entry.timeStamp} />
        </p>
        <button className="like" onClick={handleClick}>{liked ? '❤️' : '🤍'}</button>
      </div>
    </article>
  );
};

export default ChatEntry;
