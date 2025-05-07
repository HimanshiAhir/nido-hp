import React from 'react';
import { Box, Typography, Container, styled } from '@mui/material';

// Styled components
const NidoSection = styled(Box)(({ theme }) => ({
    padding: '100px 0',
  backgroundImage: 'url(./assets/media/iphone-bg-image.png)',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  height: '750px',
  backgroundSize: 'cover',
  [theme.breakpoints.down('lg')]: {
    height: '600px',
  },
  [theme.breakpoints.down('sm')]: {
    height: 'auto',
    backgroundImage: 'none',
  },
}));

const SectionHeading = styled(Typography)(({ theme }) => ({
  fontSize: '40px',
  fontWeight: 700,
  [theme.breakpoints.down('sm')]: {
    fontSize: '34px',
  },
}));

const DemoContent = styled(Box)(({ theme }) => ({
  width: '100%',
  maxWidth: '600px',
}));

const StepsWrap = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '30px',
  gap: '16px',
}));

const StepItem = styled(Box)(({ theme }) => ({
  marginBottom: '16px',
}));

const StepHeading = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  lineHeight: '36px',
  fontWeight: 600,
}));

const StepSubtext = styled(Typography)(({ theme }) => ({
  fontSize: '17px',
  lineHeight: '36px',
}));

const DemoButtonWrap = styled(Box)(({ theme }) => ({
  marginTop: '20px',
}));

const PrimaryButton = styled('a')(({ theme }) => ({
  boxShadow: 'none',
  outline: 'none',
  borderRadius: '10px',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  fontSize: '30px',
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
  fontWeight: 500,
  textDecoration: 'none',
  '&:hover': {
    color: 'rgb(36, 60, 132)',
    backgroundColor: 'rgb(255, 255, 255)',
    borderColor: 'rgb(36, 60, 132)',
    transform: 'translateY(1px)',
  },
}));

const NidoInAction = () => {
  const steps = [
    {
      heading: 'Easy setup',
      subtext: 'Customize your offer: tailored pricing and brands',
    },
    {
      heading: 'Manage your subcontractors',
      subtext: 'Add internal and external collaborators',
    },
    {
      heading: 'Cross-department communication',
      subtext: 'Project-based interactions between teams',
    },
  ];

  return (
    <NidoSection component="section" className="n-nido-section n-section">
      <Container maxWidth="lg" className="n-nido-container">
        <DemoContent className="n-demo-content">
          <SectionHeading component="h3" className="n-section-heading">
            See Nido in Action
          </SectionHeading>
          <StepsWrap className="n-steps-wrap">
            {steps.map((step, index) => (
              <StepItem key={index} className="n-step-item">
                <StepHeading className="n-step-heading">
                  {step.heading}
                </StepHeading>
                <StepSubtext className="n-step-subtext">
                  {step.subtext}
                </StepSubtext>
              </StepItem>
            ))}
            <DemoButtonWrap className="n-demo-btn-wrap">
              <PrimaryButton href="#" className="n-btn-primary font-lg">
                Book a Demo
              </PrimaryButton>
            </DemoButtonWrap>
          </StepsWrap>
        </DemoContent>
      </Container>
    </NidoSection>
  );
};

export default NidoInAction;