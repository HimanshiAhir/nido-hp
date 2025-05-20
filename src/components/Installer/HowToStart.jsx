import React from 'react';
import { Box, Typography, Container, Grid, styled } from '@mui/material';

// Styled components
const OfferSection = styled('section')(({ theme }) => ({
  width: '100%',
  paddingTop: '64px',
}));

const OfferContentWrap = styled(Box)(({ theme }) => ({
  backgroundColor: 'rgb(230, 230, 230)',
  borderTopLeftRadius: '120px',
  borderTopRightRadius: '120px',
  padding: '66px 20px 0 20px',
  [theme.breakpoints.down('md')]: {
    borderTopLeftRadius: '90px',
    borderTopRightRadius: '90px',
  },
  [theme.breakpoints.down('sm')]: {
    borderTopLeftRadius: '50px',
    borderTopRightRadius: '50px',
  },
}));

const OfferContainer = styled(Container)(({ theme }) => ({
  margin: '0 auto',
  [theme.breakpoints.down('lg')]: {
    width: 'calc(100% - 60px)',
  },
}));

const SectionHeading = styled(Typography)(({ theme }) => ({
  fontSize: '40px',
  textAlign: 'center',
  fontWeight: 900,
  [theme.breakpoints.down('md')]: {
    fontSize: '38px',
  },
}));

const OffersItemsRow = styled(Grid)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(284px, 1fr))',
  marginTop: '52px',
  alignItems: 'stretch',
  [theme.breakpoints.down('md')]: {
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

const OfferContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '28px',
  height: '100%',
  position: 'relative',
}));

const OfferItemHead = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  flex: 1,
  padding: '0 32px',
}));

const OfferImage = styled('img')(({ theme }) => ({
  width: '70px',
  height: '70px',
  marginBottom: '28px',
  [theme.breakpoints.down('lg')]: {
    width: '50px',
    height: '50px',
  },
}));

const OfferText = styled(Typography)(({ theme }) => ({
  fontSize: '22px',
  fontWeight: 700,
  lineHeight: 1.2,
  minHeight: 'calc(1.2em * 2)', // change 2 to the number of lines you want
  letterSpacing: '-0.2px',
  color: '#000',
}));

const OfferDesc = styled(Typography)(({ theme }) => ({
  fontSize: '21px',
  lineHeight: '26px',
  flex: 1,
  padding: '0 32px 94px',
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    width: '1.4px',
    height: '100%',
    backgroundColor: 'rgb(66,71,76)',
    left: '-1px',
    bottom: 0,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));

const HowToStart = () => {
  const features = [
    {
      icon: './assets/media/multi-account.svg',
      title: 'Usuarios',
      description: 'Crear usuarios que interacturarán en la plataforma, pueden ser diferentes areas de la empresa o hasta sub-contratas'
    },
    {
      icon: './assets/media/prices.svg',
      title: 'Precios de materiales y mano de obra',
      description: 'Cargar los precios estándar de vuestros productos y mano de obra'
    },
    {
      icon: './assets/media/machines.svg',
      title: 'Multi cuenta',
      description: 'Escoje las marcas que quieres incluir en tus proyectos'
    },
    {
      icon: './assets/media/color.svg',
      title: 'Marca y colores',
      description: 'Cargar tu logo, los colores y personalizar tu oferta'
    }
  ];

  return (
    <OfferSection className="n-offer-section">
      <OfferContentWrap>
        <OfferContainer>
          <SectionHeading variant="h3" className="n-section-heading">
            Como iniciar
          </SectionHeading>
          <OffersItemsRow container>
            {features.map((feature, index) => (
              <OfferContent key={index}>
                <OfferItemHead>
                  <OfferImage src={feature.icon} alt={feature.title} />
                  <OfferText>{feature.title}</OfferText>
                </OfferItemHead>
                <OfferDesc>{feature.description}</OfferDesc>
              </OfferContent>
            ))}
          </OffersItemsRow>
        </OfferContainer>
      </OfferContentWrap>
    </OfferSection>
  );
};

export default HowToStart;
