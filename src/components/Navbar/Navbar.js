import React, { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons";
import { CgMenuRight } from "react-icons/cg";
import { useLocation, useNavigate } from "react-router-dom";

import {
  Nav,
  NavbarContainer,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavLinks,
  NavItem,
  NavLogo,
  NavButtons,
  NavLinkWrapper
} from "./Style";
import data from "../../data/NavbarData";
import { getToken } from "../../services/localStorage";

const Navbar = () => {
  const [show, setShow] = useState(false);

  let navigate = useNavigate();
  let location = useLocation();

  const handleClick = () => {
    setShow(!show);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if(element) 
      element.scrollIntoView({
        behavior: "smooth",
      });
  };
  const closeMobileMenu = (to, id) => {
    if (id && location.pathname === "/") scrollTo(id);
    navigate(to);
    setShow(false);
  };

  const token = getToken();
  const handleSignOut = () =>{
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <IconContext.Provider value={{ color: "#fff" }}>
      <Nav>
        <NavbarContainer>
          <NavLogo to='/'>
            <NavIcon iconColor={show ? '#fff' :'#1A5D1A'}/>
          </NavLogo>
          <MobileIcon onClick={handleClick}>
            {show ? <FaTimes /> : <CgMenuRight color="#1A5D1A"/>}
          </MobileIcon>
          <NavMenu show={show}>
            <NavLinkWrapper>
              {data.map((el, index) => (
                <NavItem key={index}>
                  <NavLinks onClick={() => closeMobileMenu(el.to, el.id)}>
                    {el.text}
                  </NavLinks>
                </NavItem>
              ))}
            </NavLinkWrapper>
            
            {!token ? 
             ( <>
                <NavButtons show={show}>
                  <NavItem>
                    <NavLinks onClick={() => closeMobileMenu('/login', null)}>
                      Login
                    </NavLinks>
                  </NavItem>
                  <NavItem>
                    <NavLinks btn='true' onClick={() => closeMobileMenu('/register', null)}>
                      Sign Up Free
                    </NavLinks>
                  </NavItem>
                </NavButtons>
              </>) : 
              (<>
                <button type="button" class="btn btn-primary btn-sm me-3" onClick={handleSignOut}>Sign out</button>
              </>)}
          </NavMenu>
        </NavbarContainer>
      </Nav>
    </IconContext.Provider>
  );
};

export default Navbar;
