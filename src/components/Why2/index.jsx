import {
  WhyContainer,
  WhyWrapper,
  WhyRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img,
  Vid,
  VidWrap,
  WhyLink,

} from "./Why2Elements";
import Image from "../../images/standard-image01.png";
import CursorRed from "../CursorRed";
const Why2 = () => {
  return (
    <WhyContainer id="why2">
      <WhyWrapper>
        <WhyRow>
          <Column1>
            <ImgWrap>
              <Img src={Image} />
            </ImgWrap>
          </Column1>
          <Column2>
            <TextWrapper>
              <Heading>We give cities room to breathe.</Heading>
              <Subtitle>
                Streetdock is a smart network of cargo storage points and zero
                emission delivery bikes. It transforms city centres by removing
                virtually all courier vans from the streets, contributing
                significantly to improved air quality, reduced congestion and
                lower carbon emissions. It’s an efficient, integrated
                infrastructure that reduces the impact caused by the current
                inefficient and fragmented courier market.
              </Subtitle>
            </TextWrapper>
            <WhyLink
                to="why3"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
              >
                <CursorRed />
              </WhyLink>
          </Column2>

        </WhyRow>
      </WhyWrapper>
    </WhyContainer>
  );
};

export default Why2;
