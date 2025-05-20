import React from 'react';
import { Box, styled } from '@mui/material';
import Header from '../Header';
import Footer from '../Footer';
import CRMBanner from './CRMBanner';
import Characteristics from './Characteristics';

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

const CRMPage = () => {
  return (
    <PageContainer>
      <Header />
      <MainContent>
        <CRMBanner />
        <Characteristics />
      </MainContent>
      <Footer />
    </PageContainer>
  );
};

export default CRMPage;
