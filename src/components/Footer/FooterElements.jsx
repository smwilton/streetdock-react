import styled from "styled-components";
import { Link as LinkR} from "react-router-dom";
import { Link as LinkS } from "react-scroll"

export const FooterContainer = styled.footer`
  background-color: #e64752;
  display: flex;
  position: sticky;
  /* justify-content: center; */
  /* align-items: center; */
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  /* flex-direction: column; */
  justify-content: left;
  align-items: left;
  /* max-width: 1100px; */
  margin: 0 auto;
  background-color: #e64752;
`;
export const FooterLinkContainer = styled.div`
  display: flex;
  justify-content: left;
  background-color: #e64752;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinkWrapper = styled.div`
  display: flex;
  background-color: #e64752;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;
export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  width: 160px;
  box-sizing: border-box;
  color: #fff;
  background-color: #e64752;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;
export const FooterLinkAddress = styled(LinkR)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  background-color: #e64752;

  &:hover {
    color: #000;
    transition: 0.3s ease-in-out;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
  background-color: #e64752;
`;
export const FooterLink = styled(LinkR)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  background-color: #e64752;

  &:hover {
    color: #000;
    transition: 0.3s ease-in-out;
  }
`;
export const FooterLinkEmail = styled(LinkR)`
  color: #fff;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 52px;
  background-color: #e64752;

  &:hover {
    color: #000;
    transition: 0.3s ease-in-out;
  }
`;

export const SocialMedia = styled.section`
  max-width: 1000px;
  width: 100%;
  background-color: #e64752;
  color: #fff;
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100px;
  margin: 40px auto 0 auto;
  background-color: #e64752;
  color: #fff;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(LinkR)`
  color: #fff;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  font-weight: bold;
  background-color: #e64752;
`;
export const WebsiteRights = styled.small`
  color: #fff;
  margin-bottom: 16px;
  background-color: #e64752;
`;
export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  background-color: #e64752;
  color: #fff;
`;
export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
  background-color: #e64752;
`;


export const FooterImg = styled.img`
float: left;
background-color: #e64752;
height: 100px;
`;

export const FooterImgLink = styled(LinkS)`
 background-color: #e64752;
 cursor: pointer; 
`
