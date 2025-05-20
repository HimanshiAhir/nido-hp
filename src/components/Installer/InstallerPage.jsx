import React from 'react';
import { Box, styled } from '@mui/material';
import Header from '../Header';
import Footer from '../Footer';
import InstallerBanner from './InstallerBanner';
import InstallerProcess from './InstallerProcess';
import HowToStart from './HowToStart';

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

const InstallerPage = () => {
  return (
    <PageContainer>
      <Header />
      <MainContent>
        <InstallerBanner />
        <InstallerProcess />
        <HowToStart />
      </MainContent>
      <Footer />
    </PageContainer>
  );
};

export default InstallerPage;
