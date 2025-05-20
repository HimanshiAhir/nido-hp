import React from 'react';
import { styled, Box, Typography, Button } from '@mui/material';

// Styled components
const BannerSection = styled('section')(({ theme }) => ({
  backgroundColor: 'rgba(247, 247, 247, 1)',
}));

const BannerContainer = styled(Box)(({ theme }) => ({
  width: 'calc(100% - 32px)',
  maxWidth: '1200px',
  marginLeft: 'auto',
  marginRight: 'auto',
}));

const BannerContentWrap = styled(Box)(({ theme }) => ({
  wordWrap: 'break-word',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  paddingTop: '78px',
  paddingBottom: '0',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    paddingTop: '60px',
    paddingBottom: '0',
  },
}));

const BannerTitle = styled(Typography)(({ theme }) => ({
  fontSize: '90px',
  lineHeight: 1.2,
  fontWeight: 'bold',
  letterSpacing: '-2px',
  color: 'rgb(0, 0, 0)',
  marginBottom: '8px',
  maxWidth: '825px',
  margin: '0 auto 48px',
  position: 'relative',
  zIndex: 2,
  [theme.breakpoints.down('md')]: {
    fontSize: '80px',
    lineHeight: '80px',
    marginBottom: '28px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '56px',
    lineHeight: '56px',
  },
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

const BannerImageWrap = styled(Box)(({ theme }) => ({
  width: '100%',
  marginLeft: '-1%',
  marginTop: '-2.4%',
}));

const BannerImage = styled('img')(({ theme }) => ({
  width: '100%',
  display: 'flex'
}));

const MarketplaceBanner = () => {
  return (
    <BannerSection>
      <BannerContainer>
        <BannerContentWrap className="n-marketplace-banner">
          <BannerTitle variant="h1">
            Compra en un click lo que vas a instalar
          </BannerTitle>
          <PrimaryButton href="#" variant="contained">
            Prueba gratis
          </PrimaryButton>
        </BannerContentWrap>
        <BannerImageWrap>
          <BannerImage
            src="./assets/media/Header_Ipad_Compra.png"
            alt="Marketplace banner"
            className="n-marketplace-img"
          />
        </BannerImageWrap>
      </BannerContainer>
    </BannerSection>
  );
};

export default MarketplaceBanner;
