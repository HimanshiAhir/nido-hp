import React from 'react';
import { Box, Typography, Container, styled } from '@mui/material';

// Styled components
const KeyBenefitsSection = styled(Box)(({ theme }) => ({
    padding: '100px 0',
  paddingBottom: 0,
  backgroundColor: '#f7f7f7',
}));

const SectionHeading = styled(Typography)(({ theme }) => ({
  fontSize: '40px',
  fontWeight: 700,
  textAlign: 'center',
}));

const BenefitsSubheading = styled(Typography)(({ theme }) => ({
  fontSize: '22px',
  fontWeight: 400,
  color: theme.palette.common.black,
  marginTop: '28px',
  textAlign: 'center',
}));

const BenefitsContainer = styled(Box)(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
  gap: '34px 40px',
  marginTop: '70px',
  padding: '0 60px 60px 60px',
  borderBottom: `1px solid rgba(${theme.palette.primary.primaryBlue}, 74%)`,
  [theme.breakpoints.down('md')]: {
    marginTop: '50px',
  },
  [theme.breakpoints.down('sm')]: {
    padding: '0 0 60px 0',
    gridTemplateColumns: '1fr',
  },
}));

const BenefitItem = styled(Box)(({ theme, noBorder }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
  paddingBottom: '40px',
  borderBottom: noBorder ? 'none' : `1px solid rgba(${theme.palette.primary.primaryBlue}, 14%)`,
  [theme.breakpoints.down('md')]: {
    '& .n-key-benefits-item-inner': {
      justifyContent: 'center',
    },
    '& .n-key-benefits-para': {
      textAlign: 'center',
    },
  },
}));

const BenefitItemInner = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
}));

const BenefitTitle = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 500,
  letterSpacing: '-0.4px',
  lineHeight: '26px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px',
  },
}));

const BenefitPara = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  lineHeight: '1.5',
}));

const BenefitImage = styled('img')(({ theme }) => ({
  width: '28px',
  height: '28px',
}));

const KeyBenefits = () => {
  const benefits = [
    {
      title: 'Lightning fast estimates & offers',
      description: 'Speed up sales with on-the spot estimates',
      icon: './assets/media/sizing-quoting.svg',
      noBorder: false,
    },
    {
      title: 'Engineering as a Service',
      description: 'Access 3D plans and technical support for every project.',
      icon: './assets/media/engineering-design.svg',
      noBorder: false,
    },
    {
      title: 'Project Management',
      description: 'Track all your works and their status in one place.',
      icon: './assets/media/key-management.svg',
      noBorder: false,
    },
    {
      title: 'Remote Certification',
      description: 'Create professional project reports in just a few clicks.',
      icon: './assets/media/remote-certification.svg',
      noBorder: true,
    },
    {
      title: 'Automated Paperwork',
      description: 'Simplify all administrative tasks.',
      icon: './assets/media/automated-paperwork.svg',
      noBorder: true,
    },
    {
      title: 'Rebates & discounts',
      description: 'Automatically include discounts and subsidies in your proposals.',
      icon: './assets/media/discounts-tag.svg',
      noBorder: true,
    },
  ];

  return (
    <KeyBenefitsSection component="section" className="n-key-benefits-section n-section">
      <Container maxWidth="lg" className="n-key-benefits-container">
        <SectionHeading component="h3" className="n-section-heading n-center">
          Key Benefits
        </SectionHeading>
        <BenefitsSubheading className="n-benefits-subheading n-center">
          Our platform provides powerful tools to cut installation time by <strong>up to 50%.</strong>
        </BenefitsSubheading>
        
        <BenefitsContainer className="n-key-benefits-contain">
          {benefits.map((benefit, index) => (
            <BenefitItem 
              key={index} 
              className={`n-key-benefits-item ${benefit.noBorder ? 'n-border-0' : ''}`}
              noBorder={benefit.noBorder}
            >
              <BenefitItemInner className="n-key-benefits-item-inner">
                <BenefitImage 
                  src={benefit.icon} 
                  alt={benefit.title} 
                  className="n-key-benefits-img" 
                />
                <BenefitTitle className="n-key-benefits-title">
                  {benefit.title}
                </BenefitTitle>
              </BenefitItemInner>
              <BenefitPara className="n-key-benefits-para">
                {benefit.description}
              </BenefitPara>
            </BenefitItem>
          ))}
        </BenefitsContainer>
      </Container>
    </KeyBenefitsSection>
  );
};

export default KeyBenefits;