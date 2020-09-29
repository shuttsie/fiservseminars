import React  from 'react';
import Clock from 'react-live-clock';
 
function MeetingVideo() {
    const clock = <Clock />
    {console.log("Clock", clock)}
    return (
        <Clock format={'h:mm:ss a'} ticking={true} timezone={'US/Central'} />
    );
  }
  
  export default MeetingVideo;