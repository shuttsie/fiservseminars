import React from 'react';
import ScriptTag from 'react-script-tag';

const Scripts = props => (
  <>
  <ScriptTag type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/video.js/7.6.6/video.min.js" />
  <ScriptTag type="text/javascript" src="https://player.live-video.net/1.0.0/amazon-ivs-videojs-tech.min.js" />
  <ScriptTag type="text/javascript" src="https://player.live-video.net/1.0.0/amazon-ivs-quality-plugin.min.js" />
  <ScriptTag type="text/javascript" src="https://fiservseminars-media.s3.amazonaws.com/Videos/video-script.js" />
  </>
) 

function StreamPlayer () {
  return (
    <div className="player-wrapper">
      <video id="amazon-ivs-videojs" className="" controls autoPlay></video>
    </div>
  );
}

export default StreamPlayer