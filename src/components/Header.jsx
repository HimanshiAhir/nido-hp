import React, { useState } from 'react';
import { Box, Select, MenuItem, FormControl, IconButton, Drawer } from '@mui/material';
import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

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
  paddingLeft: '15px',
  paddingRight: '15px',
});

const LogoWrap = styled('a')({
  display: 'inline-flex',
  height: '42px',
});

const Logo = styled('img')({
  display: 'inline-flex',
  height: '36px',
});

const Nav = styled('nav')(({ theme }) => ({
  '@media (max-width: 992px)': {
    display: 'none',
  },
}));

const NavList = styled('ul')({
  listStyle: 'none',
  display: 'flex',
  flexWrap: 'wrap',
  gap: '28px',
});

const NavItem = styled('li')({});

const NavLink = styled(Link)(({ theme }) => ({
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
}));

const HeaderCtaWrap = styled('div')({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  '@media (max-width: 992px)': {
    '.n-btn-primary': {
      display: 'none',
    }
  },
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

// New styled components for mobile menu
const MobileMenuButton = styled(IconButton)({
  display: 'none',
  fontSize: '24px',
  color: 'rgb(36, 60, 132)',
  '@media (max-width: 992px)': {
    display: 'flex',
  },
});

const HamburgerIcon = styled('div')({
  width: '24px',
  height: '18px',
  position: 'relative',
  transform: 'rotate(0deg)',
  transition: '.5s ease-in-out',
  cursor: 'pointer',
  '& span': {
    display: 'block',
    position: 'absolute',
    height: '3px',
    width: '100%',
    background: 'rgb(36, 60, 132)',
    borderRadius: '3px',
    opacity: 1,
    left: 0,
    transform: 'rotate(0deg)',
    transition: '.25s ease-in-out',
  },
  '& span:nth-of-type(1)': {
    top: 0,
  },
  '& span:nth-of-type(2)': {
    top: '8px',
  },
  '& span:nth-of-type(3)': {
    top: '16px',
  }
});

const DrawerContent = styled(Box)({
  width: '280px',
  padding: '30px 20px',
});

const MobileNavList = styled('ul')({
  listStyle: 'none',
  padding: 0,
  margin: '30px 0',
});

const MobileNavItem = styled('li')({
  marginBottom: '20px',
});

const MobileNavLink = styled(Link)({
  fontSize: '18px',
  fontWeight: 600,
  color: 'rgb(36, 60, 132)',
  textDecoration: 'none',
  display: 'block',
  padding: '8px 0',
  '&:hover': {
    color: 'rgb(0, 0, 0)',
  }
});

const MobileLoginButton = styled(PrimaryButton)({
  width: '100%',
  marginTop: '20px',
  textAlign: 'center',
});

const Header = () => {
  const [language, setLanguage] = useState('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLanguageChange = (event) => {
    setLanguage(event.target.value);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <HeaderContainer className="n-header">
      <HeaderInner className="n-container n-header-inner">
        <LogoWrap to="/" component={Link} className="n-logo-wrap">
          <Logo src={`${process.env.PUBLIC_URL}/assets/media/logo.svg`} alt="nido logo" />
        </LogoWrap>
        <Nav className="n-header-nav">
          <NavList className="n-header-nav-list">
            <NavItem className="n-header-nav-item"><NavLink to="/crm" className="n-header-nav-link">CRM</NavLink></NavItem>
            <NavItem className="n-header-nav-item"><NavLink to="/installer" className="n-header-nav-link">Installer</NavLink></NavItem>
            <NavItem className="n-header-nav-item"><NavLink to="/marketplace" className="n-header-nav-link">Marketplace</NavLink></NavItem>
            <NavItem className="n-header-nav-item"><NavLink to="/pricing" className="n-header-nav-link">Pricing</NavLink></NavItem>
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
          <MobileMenuButton onClick={toggleMobileMenu} aria-label="Toggle mobile menu">
            <HamburgerIcon>
              <span></span>
              <span></span>
              <span></span>
            </HamburgerIcon>
          </MobileMenuButton>
        </HeaderCtaWrap>
        
        {/* Mobile Menu Drawer */}
        <Drawer
          anchor="right"
          open={mobileMenuOpen}
          onClose={toggleMobileMenu}
          PaperProps={{
            sx: {
              backgroundColor: 'rgba(255, 255, 255, 0.97)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
            }
          }}
        >
          <DrawerContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Logo src={`${process.env.PUBLIC_URL}/assets/media/logo.svg`} alt="nido logo" style={{ height: '30px' }} />
              <IconButton onClick={toggleMobileMenu}>
                <Box sx={{ fontSize: '24px', fontWeight: 'bold' }}>×</Box>
              </IconButton>
            </Box>
            <MobileNavList>
              <MobileNavItem><MobileNavLink to="/crm" onClick={toggleMobileMenu}>CRM</MobileNavLink></MobileNavItem>
              <MobileNavItem><MobileNavLink to="/installer" onClick={toggleMobileMenu}>Installer</MobileNavLink></MobileNavItem>
              <MobileNavItem><MobileNavLink to="/marketplace" onClick={toggleMobileMenu}>Marketplace</MobileNavLink></MobileNavItem>
              <MobileNavItem><MobileNavLink to="/pricing" onClick={toggleMobileMenu}>Pricing</MobileNavLink></MobileNavItem>
            </MobileNavList>
            <MobileLoginButton href="#" className="n-btn-primary" onClick={toggleMobileMenu}>
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
            </MobileLoginButton>
          </DrawerContent>
        </Drawer>
      </HeaderInner>
    </HeaderContainer>
  );
};

export default Header;
