import styled from "styled-components";
import { Link as LinkS } from "react-scroll";
import { Link as LinkR } from "react-router-dom";

export const ZonesContainer = styled.div`
  color: #fff;
  background-color: #000;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;
export const ZonesWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100% auto;
  /* max-width: 1100px; */
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  color: #fff;
  background-color: #000;
`;
export const ZonesRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;
export const ArrowRow = styled.div`
  margin-right: 5%;
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  margin-left: 10%;
  padding: 0 15px;
  grid-area: col1;
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  margin-right: 10%;
  /* margin-left: 10%; */
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  /* max-width: 540px; */
  padding-top: 0;
  padding-bottom: 60px;
  color: #fff;
  background-color: #000;
`;
export const TopLine = styled.p`
  color: #e64752;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
  background-color: #000;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600px;
  color: #fff;
  background-color: #000;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const Subtitle = styled.p`
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
  background-color: #000;
`;

export const ZonesLink = styled(LinkS)`
  cursor: pointer;
  background-color: #000;
`;

export const BelfastLink = styled(LinkR)`
  cursor: pointer;
  color: #fff;
  text-decoration: solid;
`;

export const Button = styled.button`
  background-color: #fff;
  color: #e64752;
  font-size: 20px;
  font-weight: bold;
  padding: 10px 60px;
  border-radius: 15px;
  margin: 10px 0px;
  cursor: pointer;
`;

export const ImgWrap = styled.div`
  /* max-width: 555px; */
  height: 100%;
  padding-top: 10%;
`;

export const MapImg = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;
