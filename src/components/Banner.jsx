import React from 'react';
import { Container, Button } from '@mui/material';
import { styled } from '@mui/system';

// Styled components for the banner section
const BannerSection = styled('section')(({ theme }) => ({
  backgroundColor: 'rgba(247, 247, 247, 1)',
  position: 'relative',
  backgroundImage: 'url(./assets/media/HeatPump.png)',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'auto 100%',
  backgroundPosition: 'right top',
}));

const BannerInner = styled(Container)(({ theme }) => ({
  maxWidth: '1240px',
}));

const BannerContentWrap = styled('div')(({ theme }) => ({
  wordWrap: 'break-word',
  paddingTop: '300px',
  paddingBottom: '170px',
  textAlign: 'center',
  '@media (max-width: 1200px)': {
  paddingTop: '200px',
  paddingBottom: '120px',
  },
  '@media (max-width: 992px)': {
    width: '100%',
    maxWidth: '664px',
    margin: '0 auto',
  },
}));

const BannerTitle = styled('h1')(({ theme }) => ({
  fontSize: '95px',
  lineHeight: 1.2,
  fontWeight: 'bold',
  letterSpacing: '0.4px',
  color: 'rgb(0, 0, 0)',
  marginBottom: '8px',
  '@media (max-width: 767px)': {
    fontSize: '42px',
  },
}));

const BannerPara = styled('p')(({ theme }) => ({
  fontSize: '32px',
  color: 'rgb(0, 0, 0)',
  lineHeight: 1.28,
  letterSpacing: '0.4px',
  marginBottom: '42px',
  fontWeight: 400,
  '@media (max-width: 767px)': {
    fontSize: '26px',
  },
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

const Banner = () => {
  return (
    <BannerSection className="n-banner">
      <BannerInner maxWidth="lg" className="n-banner-inner">
        <BannerContentWrap className="n-banner-content-wrap">
          <BannerTitle className="n-banner-title">
            Heat Pumps Made Simple
          </BannerTitle>
          <BannerPara className="n-banner-para">Sell twice as much with half the effort</BannerPara>
          <PrimaryButton 
            variant="contained" 
            disableElevation 
            disableRipple
            href="#"
            className="n-btn-primary font-lg"
          >
            Book a Demo
          </PrimaryButton>
        </BannerContentWrap>
      </BannerInner>
    </BannerSection>
  );
};

export default Banner;