import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import {
  Container,
  LogoDiv,
  Logo,
  EmailDiv,
  SocialMediaDiv,
  AddressDiv,
  WebsiteRights,
  SocialMediaLink
} from "./FooterElements";
import Image from "../../images/streetdock-large-logo.png";
const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }
 

  return (
    <Container id="contact">
      <LogoDiv>
        <Logo src={Image} to='/belfast' onClick={toggleHome} />
      </LogoDiv>
      <EmailDiv >hello@streetdock.com</EmailDiv>
      <SocialMediaDiv>
        <SocialMediaLink 
        href="https://twitter.com/streetdock?lang=en" target="_blank" rel="noreferrer">
        <FaTwitter />
        </SocialMediaLink>
        <SocialMediaLink href='https://www.linkedin.com/company/streetdock/about/' target="_blank" rel="noreferrer">
        <FaLinkedin />
        </SocialMediaLink>
        <SocialMediaLink href='https://www.instagram.com/streetdock/' target="_blank" rel="noreferrer">
        <FaInstagram />
        </SocialMediaLink>
        <br/>
      <WebsiteRights>streetdock © {new Date().getFullYear()} All rights reserved.</WebsiteRights>

      </SocialMediaDiv>
      <AddressDiv>3 Airport Road, <br/>Belfast Harbour Estate, <br/>Belfast BT3 9DY</AddressDiv>
    </Container>
  );
};
export default Footer;
