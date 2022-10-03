import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinkWrapper,
  FooterLinkItems,
  FooterLinkContainer,
  FooterImg,
  FooterLinkTitle,
  FooterLink,
  FooterLinkEmail,
  FooterLinkAddress,
  SocialIconLink,
  SocialIcons,
  SocialLogo,
  SocialMedia,
  SocialMediaWrap,
  WebsiteRights,
  FooterImgLink,
} from "./FooterElements";
import { animateScroll as scroll } from "react-scroll";
import FooterImage from "../../images/streetdock-large-logo.png";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer id="contact">
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterImgLink
              to="hero"
              smooth={true}
              duration={500}
              spy={true}
              exact="true"
              offset={-80}
            >
              <FooterImg src={FooterImage} />
            </FooterImgLink>
            <FooterLinkItems>
              <FooterLinkEmail to="/" className="email">
                hello@streetdock.com
              </FooterLinkEmail>

              <FooterLinkAddress>
                3 Airport Road, Belfast Harbour Estate, Belfast BT3 9DY
              </FooterLinkAddress>
            </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinkContainer>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
