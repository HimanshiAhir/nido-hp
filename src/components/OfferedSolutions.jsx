import React from 'react';
import { Box, Typography, Container, Grid, styled } from '@mui/material';

// Styled components
const OfferContentWrap = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgb(230, 230, 230)', // Changed from theme.palette.grey[100] to actual RGB value for --color-bg-grey
  borderTopLeftRadius: '120px',
  borderTopRightRadius: '120px',
  padding: '66px 0 0',
}));

const OfferContainer = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '1024px',
  margin: '0 auto',
}));

const SectionHeading = styled(Typography)(({ theme }) => ({
  fontSize: '42px',
  fontWeight: 700,
  textAlign: 'center',
  marginBottom: '60px',
}));

const OffersItemsGrid = styled(Grid)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(142px, 1fr))',
  gap: '32px',
  justifyContent: 'center',
}));

const OfferContentItem = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '28px',
}));

const OfferImage = styled('img')(({ theme }) => ({
  width: '70px',
  height: '70px',
}));

const OfferText = styled(Typography)(({ theme }) => ({
  fontSize: '22px',
  textAlign: 'center',
  fontWeight: 500,
  letterSpacing: '-0.4px',
  color: theme.palette.text.primary,
}));

// New styled components for manufacturer section
const ManufacturerInfoWrap = styled(Box)(({ theme }) => ({
  marginTop: '86px',
  padding: '60px 0',
  boxShadow: '0px 2px 9px 0px rgba(0, 0, 0, 0.1)',
  backgroundColor: '#f1f1f1',
  position: 'relative',
  zIndex: 4,
}));

const ManufacturerHeading = styled(Typography)(({ theme }) => ({
  fontSize: '26px',
  marginBottom: '46px',
  fontWeight: 400,
  color: theme.palette.text.primary, // Using theme color instead of CSS variable
  textAlign: 'center',
}));

const BrandLogosWrap = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '20px',
  '@media(max-width: 992px)': {
    flexWrap: 'wrap',
    gap: '42px',
    justifyContent: 'center',
  }
}));

const BrandLogo = styled('img')(({ theme }) => ({
  opacity: '50%',
  transition: '.3s opacity',
  '&:hover': {
    opacity: '100%',
  }
}));

const OfferedSolutions = () => {
  const offerItems = [
    { text: 'Installers', icon: './assets/media/Installers.svg' },
    { text: 'Renewable Energy Companies', icon: './assets/media/renewable-energy.svg' },
    { text: 'Energy Companies', icon: './assets/media/energy-companies.svg' },
    { text: 'Distributors', icon: './assets/media/distributors.svg' },
    { text: 'Manufacturers', icon: './assets/media/manufacturers.svg' },
    { text: 'Engineers & Architects', icon: './assets/media/engineers-architects.svg' },
  ];

  const brandLogos = [
    { src: './assets/media/mitsubishi.svg', alt: 'Mitsubishi' },
    { src: './assets/media/vaillant.svg', alt: 'Vaillant' },
    { src: './assets/media/samsung.svg', alt: 'Samsung' },
    { src: './assets/media/dsitsu.svg', alt: 'Dsitsu' },
    { src: './assets/media/ecoforest.svg', alt: 'Ecoforest' },
  ];

  return (
    <Box component="section" className="n-offer-section">
      <OfferContentWrap className="n-offer-content-wrap">
        <OfferContainer className="n-offer-container">
          <SectionHeading component="h3" className="n-section-heading n-center n-offer-heading">
            We offer solutions for
          </SectionHeading>
          <OffersItemsGrid container className="n-offers-items-row">
            {offerItems.map((item, index) => (
              <OfferContentItem key={index} className="n-offers-content">
                <OfferImage 
                  src={item.icon} 
                  alt={item.text} 
                  className="n-offer-img"
                />
                <OfferText className="n-offer-text">{item.text}</OfferText>
              </OfferContentItem>
            ))}
          </OffersItemsGrid>
        </OfferContainer>
        <ManufacturerInfoWrap className="n-manufacturer-info-wrap">
          <OfferContainer className="n-offer-container">
            <ManufacturerHeading component="h3" className="n-manufacturer-heading">
              Manufacturer Information Included
            </ManufacturerHeading>
            <BrandLogosWrap className="n-brand-logos-wrap">
              {brandLogos.map((logo, index) => (
                <BrandLogo 
                  key={index}
                  src={logo.src} 
                  alt={logo.alt} 
                  className="n-brand-logo"
                />
              ))}
            </BrandLogosWrap>
          </OfferContainer>
        </ManufacturerInfoWrap>
      </OfferContentWrap>
    </Box>
  );
};

export default OfferedSolutions;