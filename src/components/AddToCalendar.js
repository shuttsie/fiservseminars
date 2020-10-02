import React from 'react';
import AddToCalendar from 'react-add-to-calendar';

class Calendar extends React.Component {
  static displayName = 'Example';
  state = {
    event: {
      title: 'Precision Fall Education Seminar',
      description: 'This fall, the Precision Education Seminars are three days of interactive sessions that provide the ideal setting to gain new perspectives and make valuable connections with peers and Fiserv experts. During the three days you will experience a Simulive training event, On-Demand recordings including a look into the new User Interface (UI) and Abiliti for online banking, a virtual social hour, a chance to win awesome prizes, a few special video surprises and access to the electronic version of the meeting material.',
      location: 'Online',
      startTime: '2016-09-16T20:15:00-04:00',
      endTime: '2016-09-16T21:45:00-04:00'
    }
  };

  render() {
    return <AddToCalendar event={this.state.event}/>;
  };
}

export default Calendar;