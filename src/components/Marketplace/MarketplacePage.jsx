import React from 'react';
import { Box, styled } from '@mui/material';
import Header from '../Header';
import Footer from '../Footer';
import MarketplaceBanner from './MarketplaceBanner';
import HowNestWorks from './HowNestWorks';

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

const MarketplacePage = () => {
  return (
    <PageContainer>
      <Header />
      <MainContent>
        <MarketplaceBanner />
        <HowNestWorks />
      </MainContent>
      <Footer />
    </PageContainer>
  );
};

export default MarketplacePage;
