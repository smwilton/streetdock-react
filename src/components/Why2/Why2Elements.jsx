import styled from "styled-components";
import { Link as LinkS } from 'react-scroll'

export const WhyContainer = styled.div`
  color: #000;
  background-color: white;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;
export const WhyWrapper = styled.div`
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100% auto;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  color: #000;
  background-color: white;
`;
export const WhyRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
     color: #000;
  background-color: white;
  @media screen and (max-width: 768px) {
    grid-template-areas:  'col1' 'col2' };
`;
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
  color: #000;
  background-color: white;
  margin-left: 10%;
`;
export const Column2 = styled.div`
  margin-bottom: 15px;
  margin-left: 10%;
  padding: 0 15px;
  grid-area: col2;
  color: #000;
  background-color: white;
  padding-right: 10%;
`;
export const TextWrapper = styled.div`
  /* max-width: 540px; */
  padding-top: 0;
  padding-bottom: 60px;
  color: #000;
  background-color: white;
`;


export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600px;
  color: #000;
  background-color: white;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const Subtitle = styled.p`
  /* max-width: 440px; */
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #000;
  background-color: white;
`;
export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;
export const ImgWrap = styled.div`
  /* max-width: 555px; */
  height: 100%;
  background-color: #fff;
`;

export const VidWrap = styled.div`
  /* max-width: 555px; */
  height: 100%;
  width: 100%;
`;
export const Img = styled.img`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const Vid = styled.video`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;


export const WhyLink = styled(LinkS)`
  cursor: pointer; 
  
`
