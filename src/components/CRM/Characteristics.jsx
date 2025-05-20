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

const OfferContainer = styled('div')(({ theme }) => ({
    width: '100%',
    maxWidth: '1010px',
    margin: '0 auto',
    padding: '0 20px',
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
    backgroundColor: '#06307B',
    left: '-1px',
    bottom: 0,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
}));

const Characteristics = () => {
  const features = [
    {
      icon: './assets/media/project-control.svg',
      title: 'Control de proyectos',
      description: 'Todos tus proyectos en un solo panel, desde la oferta hasta la legalización'
    },
    {
      icon: './assets/media/notes.svg',
      title: 'Notas',
      description: 'Colabora con tu equipo y cualquier trabajador externo a través de Notas'
    },
    {
      icon: './assets/media/multi-account.svg',
      title: 'Multi cuenta',
      description: 'Gestiona colaboradores, sub-contratas y hasta tus clientes.'
    }
  ];

  return (
    <OfferSection className="n-offer-section">
      <OfferContentWrap>
        <OfferContainer>
          <SectionHeading variant="h3" className="n-section-heading">
            Características
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

export default Characteristics;
