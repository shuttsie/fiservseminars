import React, { useEffect, useRef, useState } from 'react';

import { isElementInViewport } from './utils';
import { VolumeOff, VolumeUp } from '../../assets/icons';

const StreamPlayer = (props) => {
  const { active, loading, player, streamData, setStream } = props;
  const { id, stream, metadata } = streamData;

  const [muted, setMuted] = useState(false);

  const videoEl = useRef(null);
  const visibleRef = useRef(false);

  // handle case when autoplay with sound is blocked by browser
  useEffect(() => {
    if (!active || loading) return;

    setMuted(player.isMuted());
  }, [active, loading, player]);

  useEffect(() => {
    if (!active) return;

    player.pause();

    player.attachHTMLVideoElement(videoEl.current);
    player.load(stream.playbackUrl);

    player.play();
  }, [player, active, stream.playbackUrl]);

  useEffect(() => {
    const onVisibilityChange = () => {
      const visible = isElementInViewport(videoEl.current);

      if (visible === visibleRef.current) return;

      visibleRef.current = visible;
      setStream(id, visible);
    };

    onVisibilityChange();

    window.addEventListener('scroll', onVisibilityChange);
    window.addEventListener('resize', onVisibilityChange);

    return () => {
      window.removeEventListener('scroll', onVisibilityChange);
      window.removeEventListener('resize', onVisibilityChange);
    };
  }, [id, setStream]);

  const toggleMute = () => {
    const muteNext = !player.isMuted();

    player.setMuted(muteNext);
    setMuted(muteNext);
  };

  return (
    <div className={`stream-wrapper${active ? ' stream-wrapper--active' : ''}`}>
      <div className="aspect-16x9">
        <div className="player-ui">
          <video className="player-video-el" ref={videoEl} playsInline />

          {/* {!loading && (
            <div className="player-ui-actions">
              <button className="player-ui-button" onClick={toggleMute}>
                {muted ? <VolumeOff /> : <VolumeUp />}
              </button>
            </div>
          )} */}
        </div>
      </div>
    </div>
  );
};

export default StreamPlayer;
