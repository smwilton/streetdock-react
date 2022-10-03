import {
  CardMainContainer,
  Card,
  ImageWrap,
  CardImage,
  CardOverlay,
  CardOverlayText,
  CardOverlayTitle,
  CardHeading,
  Subtitle,
  CardFooter,
} from "./PricingElements";
import Image1 from "../../images/left.png";
import Image2 from "../../images/middle.png";
import Image3 from "../../images/right.png";
import CursorRed from "../CursorRed";
const Pricing = () => {
  return (
    <CardMainContainer id="pricing">
      <Card>
        <CardHeading>Zone 1 pre-booked</CardHeading>
        <ImageWrap>
          <CardImage src={Image1} />
        </ImageWrap>
        <CardHeading>£4</CardHeading>
        <Subtitle>This is sometihng about the price and area covered</Subtitle>
        <CardFooter>*if you place your order at least a day in advance</CardFooter>
      </Card>
      <Card>
        <CardHeading>Zone 1 same-day</CardHeading>
        <ImageWrap>
          <CardImage src={Image2} />
        </ImageWrap>
        <CardHeading>£5</CardHeading>
        <Subtitle>This is sometihng about the price and area covered</Subtitle>
        <CardFooter>*if you place order for same day delivery</CardFooter>
      </Card>
      <Card>
        <CardHeading>Zone 2</CardHeading>
        <ImageWrap>
          <CardImage src={Image3} />
        </ImageWrap>
        <CardHeading>£6 - £10</CardHeading>
        <Subtitle>This is sometihng about the price and area covered</Subtitle>
        <CardFooter>*for areas outside of Zone 1. Price will depend on the distance covered and size/weight of parcel.</CardFooter>
      </Card>
    </CardMainContainer>
  );
};

export default Pricing;
