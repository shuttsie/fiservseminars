import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';

import TextContainer from '../TextContainer/TextContainer';
import Messages from '../Messages/Messages';
import InfoBar from '../InfoBar/InfoBar';
import Input from '../Input/Input';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

import { w3cwebsocket as W3CWebSocket } from "websocket";
// import './Chat.css';

const socket = new W3CWebSocket('wss://kv2d95dyw1.execute-api.us-east-1.amazonaws.com/Prod');

const Chat = () => {
  let { user } = useAuth0();
  console.log(user);
  let name = `${user.nickname}`;
  const bankName = `${user[`https://fiservseminars.com/bank_name`]}`;
  const room = 'Fiserv Seminar';
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  console.log(bankName);
  if (bankName === 'Fiserv') {
    name = `${user.nickname} - Fiserv`;
  } else {
    name = `${user.nickname}`;
  }

  useEffect(() => {
    // Update the document title using the browser API
    socket.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    socket.onclose = (event) => {
      console.log("WebSocket is now closed.");
    };
  });

  const sendMessage = (event) => {
    event.preventDefault();

    if (message) {
      socket.onmessage('sendMessage', message, () => setMessage(''));
    }
  };
  console.log(messages);
  return (
    <div className='outerContainer'>
      <div className='container'>
        {/* <InfoBar room={room} /> */}

        <Messages messages={messages} name={name} />
        <Input
          message={message}
          setMessage={setMessage}
          sendMessage={sendMessage}
        />
      </div>
      {/* <TextContainer users={users} /> */}
    </div>
  );
};

export default Chat;