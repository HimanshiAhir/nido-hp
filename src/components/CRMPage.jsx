import React from 'react';
import { Box, Typography, Container, Grid, Button, styled } from '@mui/material';
import Header from './Header';
import Footer from './Footer';

// Styled components
const PageContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
}));

const MainContent = styled(Box)(({ theme }) => ({
  flex: 1,
  paddingTop: '80px',
  paddingBottom: '80px',
  backgroundColor: 'rgba(247, 247, 247, 1)',
}));

const HeroSection = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: '80px',
}));

const HeroTitle = styled(Typography)(({ theme }) => ({
  fontSize: '48px',
  fontWeight: 700,
  marginBottom: '24px',
  color: 'rgb(1, 41, 99)',
  [theme.breakpoints.down('md')]: {
    fontSize: '36px',
  },
}));

const HeroSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  color: 'rgb(102, 102, 102)',
  maxWidth: '800px',
  margin: '0 auto',
  [theme.breakpoints.down('md')]: {
    fontSize: '20px',
  },
}));

const FeatureSection = styled(Box)(({ theme }) => ({
  marginBottom: '80px',
}));

const FeatureGrid = styled(Grid)(({ theme }) => ({
  marginBottom: '40px',
}));

const FeatureItem = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  padding: '32px',
  borderRadius: '16px',
  height: '100%',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
}));

const FeatureTitle = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 600,
  marginBottom: '16px',
  color: 'rgb(1, 41, 99)',
}));

const FeatureDescription = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  color: 'rgb(102, 102, 102)',
  lineHeight: 1.6,
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  fontSize: '36px',
  fontWeight: 700,
  marginBottom: '40px',
  color: 'rgb(1, 41, 99)',
  textAlign: 'center',
}));

const CTASection = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffff',
  padding: '80px 0',
  textAlign: 'center',
  marginTop: '40px',
}));

const CTATitle = styled(Typography)(({ theme }) => ({
  fontSize: '36px',
  fontWeight: 700,
  marginBottom: '32px',
  color: 'rgb(1, 41, 99)',
}));

const CTAButton = styled(Button)(({ theme }) => ({
  fontSize: '20px',
  padding: '12px 32px',
  borderRadius: '10px',
  backgroundColor: 'rgb(1, 41, 99)',
  color: '#ffffff',
  textTransform: 'none',
  '&:hover': {
    backgroundColor: '#ffffff',
    color: 'rgb(1, 41, 99)',
    border: '1px solid rgb(1, 41, 99)',
  },
}));

const CRMPage = () => {
  const features = [
    {
      title: 'Customer Management',
      description: 'Track all your customer interactions, project history, and maintenance schedules in one centralized platform.'
    },
    {
      title: 'Project Tracking',
      description: 'Monitor installation progress, manage timelines, and coordinate with your team efficiently.'
    },
    {
      title: 'Document Management',
      description: 'Store and organize all project documents, permits, and certifications in a secure digital environment.'
    },
    {
      title: 'Automated Workflows',
      description: 'Streamline your processes with automated task assignments, reminders, and follow-ups.'
    },
    {
      title: 'Reporting & Analytics',
      description: 'Generate detailed reports on project performance, customer satisfaction, and business metrics.'
    },
    {
      title: 'Mobile Access',
      description: 'Access your CRM system on-the-go with our mobile-responsive platform.'
    }
  ];

  return (
    <PageContainer>
      <Header />
      <MainContent>
        <Container maxWidth="lg">
          <HeroSection>
            <HeroTitle variant="h1">
              CRM Solution for Heat Pump Installations
            </HeroTitle>
            <HeroSubtitle>
              Streamline your customer relationships and project management with our specialized CRM system designed for heat pump installation businesses.
            </HeroSubtitle>
          </HeroSection>

          <FeatureSection>
            <SectionTitle>
              Key Features
            </SectionTitle>
            <FeatureGrid container spacing={4}>
              {features.map((feature, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <FeatureItem>
                    <FeatureTitle>{feature.title}</FeatureTitle>
                    <FeatureDescription>{feature.description}</FeatureDescription>
                  </FeatureItem>
                </Grid>
              ))}
            </FeatureGrid>
          </FeatureSection>

          <CTASection>
            <CTATitle>
              Ready to Transform Your Business?
            </CTATitle>
            <CTAButton variant="contained" disableElevation>
              Schedule a Demo
            </CTAButton>
          </CTASection>
        </Container>
      </MainContent>
      <Footer />
    </PageContainer>
  );
};

export default CRMPage;