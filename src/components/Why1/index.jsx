import {
  WhyContainer,
  WhyWrapper,
  WhyRow,
  Column1,
  Column2,
  TextWrapper,
  CursorImg,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  Vid,
  VidWrap,
  WhyLink

} from "./Why1Elements";
import Video from "../../videos/streetdock_explainer_animation.mp4";
import CursorWhite from "../CursorWhite";
const Why1 = () => {
  return (
    <>
      <WhyContainer id="why">
        <WhyWrapper>
          <WhyRow>
            <Column1>
              <TextWrapper>
                <Heading>Re-thinking urban delivery</Heading>
                <Subtitle>
                  We believe that city centres should be organised around the
                  needs of people, not vehicles because doing that makes them
                  more pleasant places to be. It’s no surprise that people
                  prefer to shop, eat and enjoy life on cleaner, fresher, less
                  congested streets. By consolidating their cargo delivery
                  infrastructure, cities can free up space for people to move,
                  play and live, clear the air of harmful exhaust gases and
                  drive their carbon count down to net zero.
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <VidWrap>
                <Vid autoPlay loop muted src={Video} />
              </VidWrap>
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
            </Column2>
          </WhyRow>
        </WhyWrapper>
      </WhyContainer>
    </>
  );
};

export default Why1;
