import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, ArrowDown, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight, HeroPlayButton, Controls, Actions, HeroMuteButton } from './HeroElements'
import Video from '../../videos/streetdock_explainer_video.mp4'
// import PlayButton from '../../images/icons/play.svg'
import useVideoPlayer from '../../hooks/useVideoPlayer'
import { useRef } from 'react'
import {FiPlayCircle, FiPauseCircle} from "react-icons/fi";
import {VscUnmute, VscMute} from "react-icons/vsc"
import CursorWhite from '../CursorWhite';

const Hero = () => {

  // const videoElement = useRef(null);
  // const {
  //   playerState,
  //   togglePlay,
  //   toggleMute
  // } = useVideoPlayer(videoElement);


  return (
    <HeroContainer id='hero'>
      <HeroBg>
        <VideoBg
           autoPlay
           loop
           muted
           src={Video}
          // ref={videoElement}
        />
      </HeroBg>
      {/* <Controls>
          <Actions>
            <HeroPlayButton onClick={togglePlay}>
              {!playerState.isPlaying ? (
                <FiPlayCircle/>
              ) : (
                <FiPauseCircle/>
              )}
             
            </HeroPlayButton>
          </Actions>
          <HeroMuteButton onClick={toggleMute}>
            {!playerState.isMuted ? (
              <VscUnmute />
            ) : (
             <VscMute />
            )}
          </HeroMuteButton>
        </Controls> */}
      <HeroH1></HeroH1>
    
    </HeroContainer>
  )
}

export default Hero