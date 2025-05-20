import React from 'react';
import { styled, Box, Typography, Button } from '@mui/material';

// Styled components
const BannerSection = styled('section')(({ theme }) => ({
  backgroundImage: 'url(./assets/media/Header_HeatPump.png)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  minHeight: '710px',
  [theme.breakpoints.down('md')]: {
    backgroundImage: 'none',
  },
}));

const BannerContainer = styled(Box)(({ theme }) => ({
  width: 'calc(100% - 32px)',
  maxWidth: '1200px',
  marginLeft: 'auto',
  marginRight: 'auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '30px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const BannerContent = styled(Box)(({ theme }) => ({
  maxWidth: '492px',
  padding: '114px 0',
  display: 'flex',
  flexDirection: 'column',
  gap: '50px',
  [theme.breakpoints.down('md')]: {
    padding: '60px 0',
    alignItems: 'center',
  },
}));

const BannerTitle = styled(Typography)(({ theme }) => ({
  fontSize: '91px',
  letterSpacing: '-1px',
  lineHeight: '92px',
  fontWeight: 'bold',
  [theme.breakpoints.down('md')]: {
    fontSize: '60px',
    lineHeight: '70px',
    textAlign: 'center',
  },
}));

const BannerImageWrap = styled(Box)(({ theme }) => ({
  display: 'none',
  maxWidth: '600px',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
  },
}));

const BannerImage = styled('img')(({ theme }) => ({
  width: '100%',
  borderRadius: '10px',
}));

const PrimaryButton = styled(Button)(({ theme }) => ({
  boxShadow: 'none',
  outline: 'none',
  borderRadius: '10px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  fontSize: '30px',
  lineHeight: '1.2',
  color: 'rgb(255, 255, 255)',
  backgroundColor: 'rgb(36, 60, 132)',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'transparent',
  padding: '12px 24px',
  minWidth: '124px',
  transition: '0.3s ease-in-out',
  fontWeight: '500',
  zIndex: '99',
  maxWidth: 'max-content',
  '&:hover': {
    color: 'rgb(36, 60, 132)',
    backgroundColor: 'rgb(255, 255, 255)',
    borderColor: 'rgb(36, 60, 132)',
    transform: 'translateY(1px)',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '24px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px',
  },
}));

const InstallerBanner = () => {
  return (
    <BannerSection className="n-customer-banner">
      <BannerContainer>
        <BannerContent>
          <BannerTitle variant="h1">
            Invierte tu tiempo en lo importante, instalando
          </BannerTitle>
          <PrimaryButton href="#" variant="contained">
            Prueba gratis
          </PrimaryButton>
        </BannerContent>
        <BannerImageWrap>
          <BannerImage
            src="./assets/media/Header_HeatPump-mobile.png"
            alt="nido banner"
          />
        </BannerImageWrap>
      </BannerContainer>
    </BannerSection>
  );
};

export default InstallerBanner;
