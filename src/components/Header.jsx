import React, { useState } from 'react';
import { Box, Select, MenuItem, FormControl } from '@mui/material';
import { styled } from '@mui/system';

// Styled components matching the CSS provided
const HeaderContainer = styled('header')({
  position: 'sticky',
  top: 0,
  transition: 'all 0.3s ease',
  backgroundColor: 'rgb(255, 255, 255, .75)',
  zIndex: 999,
  '&::before': {
    content: '""',
    width: '100%',
    height: '100%',
    backdropFilter: 'blur(10px)',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  }
});

const HeaderInner = styled('div')({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '24px',
  flexWrap: 'wrap',
  padding: '18px 0',
  maxWidth: '1200px',
  margin: '0 auto',
  width: '100%',
});

const LogoWrap = styled('a')({
  display: 'inline-flex',
  height: '42px',
});

const Logo = styled('img')({
  display: 'inline-flex',
  height: '36px',
});

const Nav = styled('nav')({});

const NavList = styled('ul')({
  listStyle: 'none',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '28px',
});

const NavItem = styled('li')({});

const NavLink = styled('a')({
  fontSize: '16px',
  fontWeight: 700,
  letterSpacing: '0.3px',
  color: 'rgb(0, 0, 0)',
  padding: '10px 8px',
  transition: 'all .3s ease',
  borderBottom: '1.5px solid transparent',
  textDecoration: 'none',
  '&:hover': {
    color: 'rgb(36, 60, 132)',
    borderColor: 'rgb(36, 60, 132)',
  }
});

const HeaderCtaWrap = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
});

const PrimaryButton = styled('a')({
  boxShadow: 'none',
  outline: 'none',
  borderRadius: '10px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  fontSize: '18px',
  lineHeight: 1.2,
  color: '#fff',
  backgroundColor: 'rgb(36, 60, 132)',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'transparent',
  padding: '12px 24px',
  minWidth: '124px',
  transition: '0.3s ease-in-out',
  position: 'relative',
  fontWeight: 600,
  textDecoration: 'none',
  '&:hover': {
    color: 'rgb(36, 60, 132)',
    backgroundColor: 'rgb(255, 255, 255)',
    borderColor: 'rgb(36, 60, 132)',
    transform: 'translateY(1px)',
    '& .n-arrow': {
      fill: 'rgb(36, 60, 132)',
    }
  },
  '&.font-lg': {
    fontSize: '30px',
    fontWeight: 500,
  }
});

const LanguageSelect = styled(Select)({
  fontSize: '14px',
  color: 'rgb(36, 60, 132)',
  fontWeight: 700,
  width: '48px',
  height: '48px',
  borderRadius: '10px',
  backgroundColor: 'rgba(36, 60, 132, 0.28)',
  textTransform: 'uppercase',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  '& .MuiSelect-select': {
    padding: '0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '48px !important',
    paddingRight: '0px !important',
  },
  '& .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '&:hover .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
    border: 'none',
  },
  '& .MuiSvgIcon-root': {
    display: 'none', // Hide the dropdown icon
  },
});

const LanguageMenuItem = styled(MenuItem)({
  fontSize: '14px',
  fontWeight: 700,
  textTransform: 'uppercase',
  justifyContent: 'center',
  color: 'rgb(36, 60, 132)',
});

const Header = () => {
  const [language, setLanguage] = useState('en');

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  return (
    <HeaderContainer className="n-header">
      <HeaderInner className="n-container n-header-inner">
        <LogoWrap href="#" className="n-logo-wrap">
          <Logo src={`${process.env.PUBLIC_URL}/assets/media/logo.svg`} alt="nido logo" />
        </LogoWrap>
        <Nav className="n-header-nav">
          <NavList className="n-header-nav-list">
            <NavItem className="n-header-nav-item"><NavLink href="#" className="n-header-nav-link">Our Solutions</NavLink></NavItem>
            <NavItem className="n-header-nav-item"><NavLink href="#" className="n-header-nav-link">Clients</NavLink></NavItem>
            <NavItem className="n-header-nav-item"><NavLink href="#" className="n-header-nav-link">Resources</NavLink></NavItem>
            <NavItem className="n-header-nav-item"><NavLink href="#" className="n-header-nav-link">About Us</NavLink></NavItem>
            <NavItem className="n-header-nav-item"><NavLink href="#" className="n-header-nav-link">Contact</NavLink></NavItem>
            <NavItem className="n-header-nav-item"><NavLink href="#" className="n-header-nav-link">Pricing</NavLink></NavItem>
          </NavList>
        </Nav>
        <HeaderCtaWrap className="n-header-cta-wrap">
          <PrimaryButton href="#" className="n-btn-primary">
            Log In 
            <svg className="n-arrow" width="17" height="15" viewBox="0 0 17 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_3_772)">
                <path d="M10.1969 1.72336L15.7969 7.32336M15.7969 7.32336L10.1969 12.9234M15.7969 7.32336H1.79688" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </g>
              <defs>
                <clipPath id="clip0_3_772">
                  <rect width="16" height="14" fill="currentColor" transform="translate(0.796875 0.723358)"/>
                </clipPath>
              </defs>
            </svg>
          </PrimaryButton>
          <FormControl className="n-language-select">
            <LanguageSelect
              value={language}
              onChange={handleLanguageChange}
              className="n-language-tag"
              IconComponent={() => null} // Remove dropdown icon completely
              MenuProps={{
                PaperProps: {
                  sx: {
                    borderRadius: '10px',
                    marginTop: '4px',
                  }
                }
              }}
            >
              <LanguageMenuItem value="en">En</LanguageMenuItem>
              <LanguageMenuItem value="es">Es</LanguageMenuItem>
            </LanguageSelect>
          </FormControl>
        </HeaderCtaWrap>
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;
