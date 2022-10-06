import {
  WhyContainer,
  WhyRow,
  TextDiv,
  ImageDiv,
  ArrowDiv,
  TextWrapper,
  Heading,
  Subtitle,
  VidWrap,
  Vid,
  WhyLink,
} from "./Why01Elements";
import Video from "../../videos/streetdock_explainer_animation.mp4";
import CursorWhite from "../CursorWhite";

const Why01 = () => {
  return (
    <WhyContainer id="why">
      <WhyRow>
        <TextDiv>
          <TextWrapper>
            <Heading>Re-thinking urban delivery</Heading>
            <Subtitle>
              We believe that city centres should be organised around the needs
              of people, not vehicles because doing that makes them more
              pleasant places to be. It’s no surprise that people prefer to
              shop, eat and enjoy life on cleaner, fresher, less congested
              streets. By consolidating their cargo delivery infrastructure,
              cities can free up space for people to move, play and live, clear
              the air of harmful exhaust gases and drive their carbon count down
              to net zero.
            </Subtitle>
          </TextWrapper>
        </TextDiv>
        <ImageDiv>
          <VidWrap>
            <Vid autoPlay loop muted src={Video} />
          </VidWrap>
        </ImageDiv>
        <ArrowDiv>
          <WhyLink
            to="why2"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
          >
            <CursorWhite />
          </WhyLink>
        </ArrowDiv>
      </WhyRow>
    </WhyContainer>
  );
};

export default Why01;
