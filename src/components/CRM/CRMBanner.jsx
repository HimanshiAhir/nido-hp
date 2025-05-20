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
  paddingBottom: '78px',
  textAlign: 'center',
  [theme.breakpoints.down('md')]: {
    paddingTop: '80px',
    paddingBottom: '100px',
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: '90px',
    paddingBottom: '90px',
  },
}));

const BannerTitle = styled(Typography)(({ theme }) => ({
  fontSize: '90px',
  lineHeight: '92px',
  fontWeight: 'bold',
  letterSpacing: '-1.08px',
  color: 'rgb(var(--color-black))',
  marginBottom: '8px',
  maxWidth: '900px',
  margin: '0 auto',
  letterSpacing: '0.4px',
  position: 'relative',
  zIndex: 2,
  [theme.breakpoints.down('md')]: {
    fontSize: '60px',
    lineHeight: '70px',
  },
}));

const BannerImageWrap = styled(Box)(({ theme }) => ({
  position: 'relative',
  maxHeight: '675px',
}));

const BannerImage = styled('img')(({ theme }) => ({
  position: 'relative',
  zIndex: 1,
  maxHeight: '100%',
}));

const PrimaryButton = styled(Button)(({ theme }) => ({
  boxShadow: 'none',
  outline: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  fontSize: '30px',
  lineHeight: 1.2,
  color: 'rgb(255, 255, 255)',
  backgroundColor: 'rgb(1, 41, 99)',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'transparent',
  padding: '12px 24px',
  marginTop: '24px',
  minWidth: '124px',
  transition: '0.3s ease-in-out',
  fontWeight: 500,
  textTransform: 'none',
  '&:hover': {
    color: 'rgb(1, 41, 99)',
    backgroundColor: 'rgb(255, 255, 255)',
    borderColor: 'rgb(1, 41, 99)',
    transform: 'translateY(1px)',
  },
}));

const CRMBanner = () => {
  return (
    <BannerSection>
      <BannerContainer className="n-banner-inner">
        <BannerContentWrap>
          <BannerTitle variant="h1"> El CRM especializado para climatización </BannerTitle>
          <BannerImageWrap>
            <BannerImage src="./assets/media/hero-img.gif" alt="Hero Image" />
          </BannerImageWrap>
          <PrimaryButton 
            variant="contained" 
            disableElevation 
            disableRipple
            href="#"
            className="n-btn-primary font-lg"
          >
           Prueba gratis
          </PrimaryButton>
        </BannerContentWrap>
      </BannerContainer>
    </BannerSection>
  );
};

export default CRMBanner;
