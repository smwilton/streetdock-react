import React from "react";
import {
  WelcomeContainer,
  WelcomeWrapper,
  WelcomeRow,
  ArrowRow,
  Column1,
  Column2,
  RegisterLink,
  Button,
  Image,
  Heading,
  Subtitle,
  WhyLink,
  Vid,
  VidWrap,
} from "./BelfastWelcomeElements";
import Image1 from "../../images/belfast-city-hall.jpg";
import CursorRed from "../CursorRed";
import Video from "../../videos/streetdock_explainer_video.mp4"


const BelfastWelcome = () => {
  return (
    <>
      <WelcomeContainer id="welcome">
        <WelcomeWrapper>
          <WelcomeRow>
            <Column1>
              <Heading>Welcome to StreetDock Belfast!</Heading>

              <Subtitle>
                This is a paragraph about StreetDock and it's partnership with
                Belfast City Council.
              </Subtitle>

              <RegisterLink
                to="/"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                <Button>Sign up</Button>
              </RegisterLink>
              <Subtitle>Here are some links to news articles</Subtitle>
            </Column1>
            <Column2>
            <VidWrap>
                <Vid autoPlay loop muted src={Image1} />
              </VidWrap>
            </Column2>

          </WelcomeRow>
          {/* <ArrowRow> */}
          <WhyLink
              to="why"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              <CursorRed />
              </WhyLink>
          {/* </ArrowRow> */}
        </WelcomeWrapper>
      </WelcomeContainer>
    </>
  );
};

export default BelfastWelcome;
