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
  CursorImg
} from "./Why3Elements";
import Image from "../../images/standard-image-05.png";
import CursorWhite from "../CursorWhite";

const Why3 = () => {
  return (
    <>
      <WhyContainer id="why3">
        <WhyWrapper>
          <WhyRow>
            <Column1>
              <TextWrapper>
                <Heading>We drive cost out of city-centre delivery.</Heading>
                <Subtitle>
                  We’re a company of many firsts, not least of which is keeping
                  accountants and environ- mentalists equally happy. At the same
                  time. The last mile of a parcel’s journey accounts for 53%* of
                  it’s cost due to the inefficiency of huge vans dropping only
                  one or two parcels per stop. We cut that cost in half and at
                  the same time cut carbon emissions and harmful exhaust gas
                  pollution to zero.
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img 
                src={Image}
                />
                
              </ImgWrap>
              <WhyLink
                to="how"
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

export default Why3;
