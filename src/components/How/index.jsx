import {
  HowContainer,
  HowWrapper,
  HowRow,
  ArrowRow,
  Column1,
  Column2,
  TextWrapper,
  Heading,
  Subtitle,
  HowLink,
  Image,
} from "./HowElements";
import CursorRed from "../CursorRed";
import FastImage from "../../images/three-cols-04.png";
import FlexibleImage from "../../images/left.png";

const How = () => {
  return (
    <>
      <HowContainer id="how">
        <HowWrapper>
          <HowRow>
            <Column1>
              <TextWrapper>
                <Heading>Fast</Heading>
                <Image src={FastImage} />
                <Subtitle>
                  sdofjslafjlsajf Sed ut perspiciatis unde omnis iste natus
                  error sit voluptatem accusantium doloremque laudantium, totam
                  rem aperiam{" "}
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <TextWrapper>
                <Heading>Flexible</Heading>
                <Subtitle>
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                  accusantium doloremque laudantium, totam rem aperiam{" "}
                </Subtitle>
              </TextWrapper>
              <Image src={FlexibleImage} />
            </Column2>
          </HowRow>
          <ArrowRow>
            {" "}
            <HowLink
              to="zones"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              <CursorRed />
            </HowLink>
          </ArrowRow>
        </HowWrapper>
      </HowContainer>
    </>
  );
};

export default How;
