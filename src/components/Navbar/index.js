import React from "react";
import { NavLink } from "react-router-dom"
import  { Link as LinkR } from 'react-router-dom';
import styled from "styled-components";

const Nav = styled.div`
    background-color: ${({ theme }) => theme.card_light};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media screen and (max-width: 960px) {
     transition: 0.8s all ease;
}
`;    

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;



 const NavLogo = styled(LinkR)`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
      padding: 0 0px;
  }
`;

const Navbar = () => {
    return (
        <Nav>
     <NavContainer>
          <NavLogo>
             Logo
          </NavLogo>
          <MobileIcon></MobileIcon>
          <NavItems>
            <NavLink>Home</NavLink>
          </NavItems>
          <ButtonsContainer>
            <GitHubButton>Github profile</GitHubButton>
          </ButtonsContainer>
        </NavContainer>      
    </Nav>
    )
};

export default Navbar;