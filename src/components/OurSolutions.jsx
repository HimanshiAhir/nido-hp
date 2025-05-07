import React, { useState } from 'react';
import { Box, Typography, Container, Grid, styled } from '@mui/material';

// Styled components
const SolutionsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  margin: 'auto',
  gap: '50px',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
    gap: '30px',
  }
}));

const TabsWrap = styled(Box)(({ theme }) => ({
  width: '50%',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  }
}));

const TabsGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexWrap: 'wrap',
  width: '100%',
  gap: '36px 48px',
}));

const Tab = styled(Box)(({ theme, active }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '16px',
  padding: '12px 0 24px',
  cursor: 'pointer',
  color: active ? 'rgb(0, 0, 0)' : 'rgb(153, 153, 153)',
  fontWeight: 500,
  borderBottom: '1px solid rgb(200, 208, 231)',
  transition: 'all 0.3s',
  width: '45%',
  [theme.breakpoints.down('sm')]: {
    width: '100%',
  }
}));

const TabIcon = styled('img')(({ theme, active }) => ({
  width: '28px',
  height: '28px',
  opacity: active ? '100%' : '40%',
}));

const TabText = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  letterSpacing: '-0.4px',
  lineHeight: '26px',
  fontWeight: 700,
}));

const SectionHeading = styled(Typography)(({ theme }) => ({
  fontSize: '42px',
  fontWeight: 700,
  marginBottom: '60px',
}));

const TabContent = styled(Box)(({ theme, active }) => ({
  flex: 2,
  borderRadius: '25px',
  display: active ? 'block' : 'none',
  [theme.breakpoints.down('md')]: {
    width: '100%',
  }
}));

const TabImage = styled('img')(({ theme }) => ({
  width: '100%',
  maxWidth: '100%',
  borderRadius: '24px',
}));

const OurSolutions = () => {
  const [activeTab, setActiveTab] = useState('project');
  
  const tabs = [
    { id: 'project', text: 'Project Management', icon: './assets/media/project-management.svg' },
    { id: 'procurement', text: 'Procurement', icon: './assets/media/cart.svg' },
    { id: 'sizing', text: 'Sizing & Quoting', icon: './assets/media/sizing-quoting.svg' },
    { id: 'certification', text: 'Certification', icon: './assets/media/certification.svg' },
    { id: 'engineering', text: 'Engineering & Design', icon: './assets/media/engineering-design.svg' },
    { id: 'rebates', text: 'Rebates & Paperwork', icon: './assets/media/paperwork.svg' },
  ];

  const tabContents = {
    project: './assets/media/gif/GestionProyectos_WebSite_1.gif',
    procurement: './assets/media/gif/CompraMateriales_WebSite_1.gif',
    sizing: './assets/media/gif/Documents_WebSite_1.gif',
    certification: './assets/media/gif/Certificacion_WebSite_1.gif',
    engineering: './assets/media/gif/Diseño_WebSite_1.gif',
    rebates: './assets/media/gif/Documents_WebSite_1.gif',
  };

  return (
    <Box component="section" sx={{ py: 8, backgroundColor: 'rgba(247, 247, 247, 1)' }} className="n-solution-section n-section">
      <Container maxWidth="lg">
        <SolutionsContainer>
          <TabsWrap>
            <SectionHeading component="h2" className="n-section-heading n-solution-heading">
              Our Solutions
            </SectionHeading>
            <TabsGrid container>
              {tabs.map((tab) => (
                <Tab 
                  key={tab.id}
                  active={activeTab === tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`n-tab ${activeTab === tab.id ? 'n-active' : ''}`}
                >
                  <TabIcon 
                    src={tab.icon} 
                    className="n-tab-icon" 
                    alt={`${tab.text} icon`} 
                    active={activeTab === tab.id}
                  />
                  <TabText className="n-tab-text">{tab.text}</TabText>
                </Tab>
              ))}
            </TabsGrid>
          </TabsWrap>
          
          {Object.entries(tabContents).map(([id, imgSrc]) => (
            <TabContent 
              key={id}
              active={activeTab === id}
              className={`n-tab-content ${activeTab === id ? 'n-active' : ''}`}
            >
              <TabImage src={imgSrc} alt="" className="n-tab-img" />
            </TabContent>
          ))}
        </SolutionsContainer>
      </Container>
    </Box>
  );
};

export default OurSolutions;