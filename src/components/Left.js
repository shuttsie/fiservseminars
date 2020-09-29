import React, { Component } from 'react';
import Iframe from 'react-iframe';
import Chat from '../components/Chat/Chat';
import MeetingVideo from '../components/MeetingVideo/MeetingVideo';

class Left extends Component {
  render() {
    if (
      window.location.href === 'http://localhost:3000/home' ||
      window.location.href === 'http://localhost:3000/' ||
      window.location.href === 'https://test.fiservseminars.com/home' ||
      window.location.href === 'https://test.fiservseminars.com/' ||
      window.location.href === 'https://master.dorsxmbom1bqx.amplifyapp.com/' ||
      window.location.href ===
        'https://master.dorsxmbom1bqx.amplifyapp.com/home'
    ) {
      return (
        <section className='left'>
          <div>
            <div className="greetings">
              <img
              class='mb-3 app-logo'
              src='https://precision.fiservseminars.com/static/media/header.bcc4edba.png'
              alt='React logo'
              width=''
            />
            </div>
            
            <h1>Introduction</h1>
            <p>
              We are better together. Join Fiserv experts and your peers for
              interactive presentations and discussions that provide the
              necessary insight to become more efficient. Use this virtual venue
              to learn more about the software you use every day and share your
              best practices and software tips all while building a diverse
              network of professional relationships.
            </p>
            <p>
              This fall, the Precision Education Seminars are three days of
              interactive sessions that provide the ideal setting to gain new
              perspectives and make valuable connections with peers and Fiserv
              experts. During the three days you will experience a Simulive
              training event, On-Demand recordings including a look into the new
              User Interface (UI) and Abiliti for online banking, a virtual
              social hour, a chance to win awesome prizes, a few special video
              surprises and access to the electronic version of the meeting
              material.
            </p>
          </div>
        </section>
      );
    } else {
      return (
        <section className='left meetings'>
          <div className='meeting-video'>
            <h1>Video</h1>
             <MeetingVideo/>
          </div>
          <div className='chat'>
            <h1>Chat</h1>
            <Chat />
          </div>
        </section>
      );
    }
  }
}

export default Left;
