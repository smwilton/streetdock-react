import styled from "styled-components";

// OrderContainer,
// Form,
// Input,
// Select,
// Text,
// Paragraph,

export const OrderContainer = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: inherit;
  padding: 20px;
  
`;

export const TextWrap = styled.div`
  padding-top: 24px;

`
export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600px;
  text-align: center;
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;
export const Subtitle = styled.p`
  /* max-width: 440px; */
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
`;

// export const OrderBg = styled.div`
//   position: absolute;
//   top: 0;
//   right: 0;
//   bottom: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   overflow: hidden;
//   opacity: 0.6;
//   @media screen and (max-width: 1000px) {
//     width: 100%;
//     height: 100%;
//   }
// `;

// export const ImgBg = styled.img`
//   width: 100%;
//   height: 100%;
//   -o-object-fit: cover;
//   object-fit: cover;
//   background: #000;
//   @media screen and (max-width: 1000px) {
//     width: 100%;
//     height: 100%;
//   }
// `;
