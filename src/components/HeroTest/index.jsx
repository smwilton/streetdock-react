import React, { useState } from "react";
import Image from "../../images/hero.png";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
  Button,
} from "./HeroTestElements";
import Image1 from "../../images/belfast-city-hall.jpg";
import Video from "../../videos/streetdock_explainer_video.mp4";

const HeroTest = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted src={Image1} />
      </HeroBg>
      <HeroContent>
        <HeroH1> Welcome to StreetDock Belfast!</HeroH1>
        <HeroP>
          {" "}
          This is a paragraph about StreetDock and it's partnership with Belfast
          City Council.
        </HeroP>
        <HeroBtnWrapper>
          <Button>Sign up</Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroTest;
