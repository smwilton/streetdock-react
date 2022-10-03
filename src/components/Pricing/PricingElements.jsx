
import styled from "styled-components";




export const CardMainContainer = styled.div`
  color: #fff;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
 
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  margin-left: 5%;
  margin-right: 5%;
  max-width: 100%;
  /* height: auto; */
  z-index: 1;
  height: 860px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 786px) {
    grid-template-columns: 1fr;
  }
`;
export const Card = styled.div`
  position: relative;
  border-radius: 15px;
  margin-top: 10%;
  margin-bottom: 10%;
  /* background-color: #3993b4; */
  background-image: linear-gradient(180deg, #e64752 ,#ed7e85);
`;

export const CardHeading = styled.h1`
  text-align: center;

`
export const ImageWrap = styled.div`
padding: 15px 15px 15px 15px`;

export const CardImage = styled.img`
  display: block;
  width: 100%;
  height: auto;
  background-color: #3993b4;
`;

export const Subtitle = styled.p`
  /* max-width: 440px; */
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: #fff;
  background-color: transparent;
  text-align: center;
`;

export const CardFooter = styled.p`
  font-size: 12px;
  margin-left: 5%;
  padding-top: 25%;
  
`
