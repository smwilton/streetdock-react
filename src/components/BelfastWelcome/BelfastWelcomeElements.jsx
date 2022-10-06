import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const WelcomeContainer = styled.div`
  color: #000;
  background-color: #fff;
  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;
export const WelcomeWrapper = styled.div`
  margin-top: 100px;
  display: grid;
  z-index: 1;
  height: 860px;
  width: 100% auto;
  /* max-width: 1100px; */
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
  color: #000;
  background-color: white;
  font-size: xx-large;
  text-align: center;
  background-color: transparent;
  /*   
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); */
`;

export const WelcomeRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;

  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};
  background-color: white;
  text-align: center;
  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const ArrowRow = styled.div`
  margin-right: 5%;
  background-color: #fff;
`;

export const Column1 = styled.div`
  object-fit: contain;
  margin-bottom: 15px;
  margin-top:50px;
  padding: 0 15px;
  grid-area: col1;
  color: #000;
  background-color: white;
  margin-left: 10%;
  align-items: center;
`;
export const Column2 = styled.div`
  /* margin-bottom: 15px; */
  margin-top:50px;
  padding: 0 15px;
  grid-area: col2;
  color: #000;
  background-color: white;
  margin-bottom: 15px;
  margin-right: 10%;
  /* margin-right: 10%; */
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
export const RegisterLink = styled(LinkR)`
  color: #000;
  text-decoration: solid;
  /* background-color: #fff; */
  background-color: transparent;
`;

export const Button = styled.button`
  background-color: #000;
  color: #fff;
  font-size: 40px;
  /* font-weight: bold; */
  padding: 10px 60px;
  border-radius: 15px;
  margin: 10px 0px;
  cursor: pointer;
`;

export const Image = styled.img`
  width: 100%;
  margin-top: 20%;
  filter: blur(5px);
`;

export const WhyLink = styled(LinkS)`
  cursor: pointer;
  background-color: #fff;
`;

export const VidWrap = styled.div`
  /* max-width: 555px; */
  height: 100%;
`;
export const Vid = styled.video`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
  /* filter: blur(5px); */
`;
