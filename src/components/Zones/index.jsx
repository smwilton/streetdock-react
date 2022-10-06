import {
  ZonesContainer,
  ZonesWrapper,
  ZonesRow,
  ZonesLink,
  CursorImg,
  TextWrapper,
  Heading,
  Subtitle,
  BelfastLink,
  Button,
  MapImg,
  Column1,
  Column2,
  ArrowRow,
  ImgWrap
} from "./ZonesElements";
import CursorWhite from "../CursorWhite";
import Map from "../../images/map.jpg";

const Zones = () => {


  return (
    <>
      <ZonesContainer id="zones" >
        <ZonesWrapper>
          <ZonesRow>
            <Column1>
              <TextWrapper>
                <Heading>Zones</Heading>
                <Subtitle>
                  We are currently delivering in Belfast. Click on the link
                  below to go to our BELFAST site!
                  <br />
                  <br />
                  <BelfastLink
                    to="/belfast"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                  >
                    <Button>BELFAST</Button>
                  </BelfastLink>
                  <br />
                  <br />
                  We'll update this page when more zones become available.
                </Subtitle>
              </TextWrapper>
            </Column1>
            <Column2>
            <ImgWrap>
              <MapImg src={Map} />
              </ImgWrap>
            </Column2>
          </ZonesRow>
          <ArrowRow>
            {" "}
            <ZonesLink
              to="contact"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              <CursorWhite />
            </ZonesLink>
          </ArrowRow>
        </ZonesWrapper>
      </ZonesContainer>
    </>
  );
};

export default Zones;
