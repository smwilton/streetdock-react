import logo from '../../images/logo.svg'
import {useState, useEffect} from 'react'
import { FaBars } from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavLinks, NavItem, NavBtn, NavBtnLink } from './NavbarElements'
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({toggle}) => {

  const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    if(window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
  //   <Container>
  //   <Navbar expand="lg" variant="dark" bg="dark" sticky='top'>
  //     <Container>
  //     <Navbar.Brand href="#home">
  //           <img
  //             src={logo}
  //             width="300"
  //             height="100"
  //             className="d-inline-block align-top"
  //             alt="React Bootstrap logo"
  //             style={{color:"black", marginLeft:"50px"}}

  //           />
  //         </Navbar.Brand>
  //     </Container>
  //   </Navbar>
  // </Container>
  
  <>
  <IconContext.Provider value={{ color: '#fff'}}>
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo to='/' onClick={toggleHome}>
        <img
              src={logo}
              width="300"
              height="80"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
              style={{color:"black", marginLeft:"50px"}}

            />
        </NavLogo>
        <MobileIcon onClick={toggle}>
          <FaBars />
        </MobileIcon>
        <NavMenu>
          <NavItem>
            <NavLinks to='why'
            smooth={true} duration={500} spy={true} exact='true' offset={-80}
            >Why StreetDock?</NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to='how'
            smooth={true} duration={500} spy={true} exact='true' offset={-80}
            >How does it work?</NavLinks>
          </NavItem>
          <NavItem>
              <NavLinks to='zones'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Zones</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to='contact'
              smooth={true} duration={500} spy={true} exact='true' offset={-80}
              >Contact Us</NavLinks>
            </NavItem>
          <NavItem>
            <NavLinks to='signup'
            smooth={true} duration={500} spy={true} exact='true' offset={-80}
            >Sign Up</NavLinks>
          </NavItem>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn>
      </NavbarContainer>
    </Nav>
  </IconContext.Provider>
  </>
   )
}

export default Navbar