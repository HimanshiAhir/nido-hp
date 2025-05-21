import React from 'react';
import { Box, styled } from '@mui/material';
import Header from '../Header';
import Footer from '../Footer';
import PricingSection from './PricingSection';

// Styled components
const PageContainer = styled(Box)(({ theme }) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'rgb(247, 247, 247, 1)'
}));

const MainContent = styled(Box)(({ theme }) => ({
  flex: 1,
}));

const PricingPage = () => {
  return (
    <PageContainer>
      <Header />
      <MainContent>
        <PricingSection />
      </MainContent>
      <Footer />
    </PageContainer>
  );
};

export default PricingPage;
