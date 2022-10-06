import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const WhyContainer = styled.div`
  flex: 1;
  flex-direction: row;
  align-items: stretch;

`;

export const WhyRow = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;

  flex: 1;
  width: null;
  height: null;
`;

export const TextDiv = styled.div`
  grid-area: 1 / 1 / 5 / 5;
`;
export const ImageDiv = styled.div`
  grid-area: 1 / 5 / 5 / 9;
`;
export const ArrowDiv = styled.div`
  grid-area: 5 / 1 / 6 / 9;
`;

export const TextWrapper = styled.div``;

export const Heading = styled.h1``;
export const Subtitle = styled.p``;
export const VidWrap = styled.div``;
export const Vid = styled.video``;
export const WhyLink = styled(LinkS)``;
