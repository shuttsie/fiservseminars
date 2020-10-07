// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import React, { Component } from 'react';
import * as config from '../../config';

// Components
import VideoPlayer from '../videoPlayer/VideoPlayer';
import SignIn from './SignIn';
import { withAuth0 } from '@auth0/auth0-react'

class Chat extends Component {
  constructor() {
    super ();
    this.state = {
      metadataId: null,
      showSignIn: false,
      username: '',
      message: '',
      messages: [],
      connection: null
    }
    this.chatRef = React.createRef();
    this.messagesEndRef = React.createRef();
  }

  componentDidMount() {
    const connection = new WebSocket(config.CHAT_WEBSOCKET);
    connection.onopen = (event) => {
      console.log("WebSocket is now open.");
    };

    connection.onclose = (event) => {
      console.log("WebSocket is now closed.");
    };

    connection.onerror = (event) => {
      console.error("WebSocket error observed:", event);
    };

    connection.onmessage = (event) => {
      // append received message from the server to the DOM element 
      const messages = this.state.messages;
      const data = event.data.split('::');
      const username = data[0];
      const message = data.slice(1).join('::'); // in case the message contains the separator '::'

      messages.push({
        timestamp: Date.now(),
        username,
        message
      });

      this.setState({ messages });
    };

    this.setState({ connection });
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  updateUsername = username => {
    this.setState({ username, showSignIn: false }, () => this.chatRef.current.focus());
  }

  handleOnClick = () => {
    const { username } = this.state;
    if (!username) {
      this.setState({ showSignIn: true });
    }
  }

  handleChange = e => {
    this.setState({ message: e.target.value })
  }

  handleKeyDown = (e) => {
    if (e.keyCode === 13) { // keyCode 13 is carriage return
      const { username, message, connection } = this.state;
      if (message) {
        const data = `{
          "action": "sendmessage",
          "data": "${username}::${message.replace(/\\/g, '\\\\').replace(/"/g, '\\"')}"
        }`;
        connection.send(data);
        
        this.setState({ message: '' });
      }
    }
  }

  parseUrls = (userInput) => {
    var urlRegExp = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_.~#?&//=]*)/g;
    let formattedMessage = userInput.replace(urlRegExp, (match) => {
      let formattedMatch = match;
      if (!match.startsWith('http')) {
        formattedMatch = `http://${match}`;
      }
      return `<a href=${formattedMatch} class="chat-line__link" target="_blank" rel="noopener noreferrer">${match}</a>`;
    });
    return formattedMessage;
  }
  
  renderMessages = () => {
    const { messages } = this.state;
    const { user } = this.props.auth0;
    return (
      messages.map(message => {
        let formattedMessage = this.parseUrls(message.message);
        return (
          <div className="chat-line" key={message.timestamp}>
            <p>
            <span className="username">{user.nickname}</span><br/>
            <span dangerouslySetInnerHTML={{__html: formattedMessage}} />
            </p>
          </div>
        )
      })
    )
  }

  setMetadataId = (metadataId) => {
    this.setState({ metadataId });
  }

  render() {
    const { username, message, showSignIn } = this.state;
    const { user } = this.props.auth0;
    console.log(user);
    return (
      <React.Fragment>
        <div className="main full-width full-height">
          <div className="content-wrapper mg-2">
          <VideoPlayer setMetadataId={this.setMetadataId} videoStream={config.PLAYBACK_URL} />
            <div className="chat-wrapper">
            <header>
              <h1>Live Chat</h1>
            </header>
              <div className="chat-container pos-absolute pd-t-1 top-0 bottom-0">
                <div className="messages">
                  {this.renderMessages()}
                  <div ref={this.messagesEndRef} />
                </div>
                <div className="composer">
                  <input 
                    ref={this.chatRef}
                    className={`rounded ${!user ? 'hidden' : ''}`}
                    id="chat-input" 
                    type="text" 
                    placeholder="Type your message"
                    value={message}
                    maxLength={510}
                    onChange={this.handleChange}
                    onKeyDown={this.handleKeyDown}
                  />
                  {!user && (
                    <fieldset>
                      <button onClick={this.handleOnClick} className="btn btn--primary full-width rounded">Click to send messages</button>
                    </fieldset>
                  )}
                </div>
              </div>
            </div>
          </div> 
        </div>
      </React.Fragment>
    )
  }
}

export default withAuth0(Chat);