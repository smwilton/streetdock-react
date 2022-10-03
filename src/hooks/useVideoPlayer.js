import { useState, useEffect } from "react";

const useVideoPlayer =(videoElement) =>{
    const [playerState, setPlayerState] = useState({
        isPlaying: false,
        isMuted: false,
    });

    const togglePlay = () => {
        setPlayerState({
            ...playerState,
            isPlaying: !playerState.isPlaying,
        });
    };

    useEffect(() => {
        playerState.isPlaying
          ? videoElement.current.play()
          : videoElement.current.pause();
      }, [playerState.isPlaying, videoElement]);
 
      const toggleMute = () => {
        setPlayerState({
          ...playerState,
          isMuted: !playerState.isMuted,
        });
      };
    
      useEffect(() => {
        playerState.isMuted
          ? (videoElement.current.muted = true)
          : (videoElement.current.muted = false);
      }, [playerState.isMuted, videoElement]);

      return {
        playerState,
        togglePlay,
        toggleMute,
      };
}

export default useVideoPlayer;