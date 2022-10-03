import {
  HowContainer,
  HowWrapper,
  HowRow,
  ImgWrapper,
  Image,
  ArrowRow,
  HowLink,
  ArrowWrapper,
  Heading,
  Subtitle,
  Column1,
  Column2
} from "./How2Elements";
import Image1 from "../../images/signup.jpg";
import { AiOutlineArrowRight } from "react-icons/ai";
import { BsArrowRightCircle } from "react-icons/bs";
import CursorRed from "../CursorRed";
const How2 = () => {
  return (
    <>
      <HowContainer id="how">
        <HowWrapper>
          <HowRow>
            {/* <ImgWrapper>
            {/* <Image src={Image1}/> */}
            {/* </ImgWrapper> */}
            <Column1>
              {" "}
              <Heading>How this works.</Heading>
              <Subtitle>Works like this.</Subtitle>
            </Column1>
            <Column2></Column2>
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

export default How2;
