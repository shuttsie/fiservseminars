import React, {useEffect, useRef} from 'react';
import {Helmet} from "react-helmet";

function LiveVideo() {

    return (
      <div>
        <div>
          <Helmet>
            <script src="https://fiservseminars-media.s3.amazonaws.com/Videos/video-script.js" type="text/javascript" />
          </Helmet>
        </div>
        <div className="video-container">
          <video id="amazon-ivs-videojs" className="video-js vjs-4-3 vjs-big-play-centered video-player" controls autoPlay></video>
        </div>
      </div>
    );
}

export default LiveVideo;