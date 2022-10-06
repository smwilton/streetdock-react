import styled from "styled-components";
import PlayButton from "../../images/icons/play.svg";

export const HeroContainer = styled.div`
  /* flex: 1;
  flex-direction: row;
  align-items: stretch; */
  
  margin-top: 80px;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  height: 800px;
  position: relative;
  z-index: 100%;
  width: 100vw;
    height: 100vh;


  @media screen and (max-width: 1000px) {
    width: 100vw;
    height: 100vh;
  }
`;

export const HeroBg = styled.div`

  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  @media screen and (max-width: 1000px) {
    width: 100%;
    height: 100%;
  }
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #000;
  @media screen and (max-width: 1000px) {
    width: 100%;
    height: 100%;
  }
`;

export const HeroH1 = styled.div`
  position: relative;
  text-align: center;
  font-size: 80px;
  border: 1px solid #fff transparent;
  letter-spacing: 5px;
  line-height: 0.8;
  background: #fff;
  background-size: 80% 100%;
  background-repeat: no-repeat;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: 175px;
  font-family: "Lobster", cursive;

  @media screen and (max-width: 768px) {
    font-size: 80px;
  }

  @media screen and (max-width: 480px) {
  }
`;

export const ArrowDown = styled.img`
  height: 100px;
`;
export const HeroPlayButton = styled.button`
  position: absolute;
  top: 80%;
  left: 25%;
  width: 74px;
  height: 74px;
  margin: -37px 0 0 -37px;
  z-index: 10;
  opacity: 0.6;
  background: transparent;
  color: white;
  font-size: 100px;
`;
export const Controls = styled.div``;
export const Actions = styled.div``;
export const HeroMuteButton = styled.button`
  position: absolute;
  top: 80%;
  left: 75%;
  width: 74px;
  height: 74px;
  margin: -37px 0 0 -37px;
  z-index: 10;
  opacity: 0.6;
  background: transparent;
  color: white;
  font-size: 100px;
`;
