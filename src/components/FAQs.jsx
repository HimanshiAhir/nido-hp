import React, { useState } from 'react';
import { Box, Typography, Container, styled } from '@mui/material';

// Styled components
const SectionHeading = styled(Typography)(({ theme }) => ({
  fontSize: '42px',
  fontWeight: 700,
  marginBottom: '20px',
  textAlign: 'center',
}));

const SectionSubHeading = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 400,
  marginBottom: '60px',
  textAlign: 'center',
  color: '#444',
}));

const FAQContainer = styled(Box)(({ theme }) => ({
  maxWidth: '1076px',
  margin: '0 auto',
}));

const FAQItem = styled(Box)(({ theme }) => ({
  backgroundColor: '#fff',
  borderRadius: '20px 20px 0 0',
  boxShadow: '0px 0px 1px 0px rgba(66, 71, 76, 0.25), 0px 8px 48px 0px rgba(10, 11, 30, 0.08), 0px 4px 8px 0px rgba(10, 11, 30, 0.06)',
  marginBottom: '16px',
  overflow: 'hidden',
}));

const FAQQuestion = styled(Box)(({ theme }) => ({
  padding: '12px 32px',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  cursor: 'pointer',
  transition: 'all 0.3s',
  '&:hover': {
    backgroundColor: 'rgba(0, 0, 0, 0.02)',
  },
}));

const FAQQuestionText = styled(Typography)(({ theme }) => ({
  fontSize: '18px',
  lineHeight: '34px',
  fontWeight: 600,
  color: '#000',
}));

const FAQAnswer = styled(Box)(({ theme, open }) => ({
  padding: open ? '12px 30px 24px' : '0 30px',
  height: open ? 'auto' : '0',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  opacity: open ? 1 : 0,
  maxHeight: open ? '500px' : '0',
}));

const FAQAnswerText = styled(Typography)(({ theme }) => ({
  fontSize: '16px',
  fontWeight: 400,
  color: '#444',
  lineHeight: '1.6',
}));

const PlusIcon = styled(Box)(({ theme, open }) => ({
  width: '24px',
  height: '24px',
  position: 'relative',
  '&::before, &::after': {
    content: '""',
    position: 'absolute',
    backgroundColor: open ? '#E50A0A' : '#E50A0A',
    borderRadius: '2px',
    transition: 'all 0.3s',
  },
  '&::before': {
    width: '2px',
    height: '24px',
    left: '11px',
    top: '0',
    transform: open ? 'rotate(90deg)' : 'rotate(0)',
  },
  '&::after': {
    width: '24px',
    height: '2px',
    left: '0',
    top: '11px',
  },
}));

const CTASection = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginTop: '60px',
}));

const CTAText = styled(Typography)(({ theme }) => ({
  fontSize: '20px',
  marginBottom: '6px',
}));

const CTALink = styled('a')(({ theme }) => ({
  fontSize: '20px',
  fontWeight: 600,
  color: '#243c84',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
}));

const FAQs = () => {
  // State to track which FAQ is open
  const [openFAQ, setOpenFAQ] = useState(null);

  // Toggle FAQ open/close
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  // FAQ data
  const faqItems = [
    {
      question: 'How long does it take to set-up Nido?',
      answer: "In just 10-15 minutes, you'll be able to customize and start using the tool."
    },
    {
      question: 'Are subsidies included in the budgeting process?',
      answer: 'Our kit includes everything you need to install faster and more efficiently (3D model of the installation, electrical and hydraulic diagrams, and a bill of materials).'
    },
    {
      question: 'Who owns my customers information?',
      answer: 'All client information belongs to the user. Nido and its employees are not allowed to use opportunity data.'
    },
    {
      question: 'Does the system comply with regulations?',
      answer: 'Our system complies with the current regulations in each country where we operate. In some cases, we consider additional requirements based on common market practices.'
    },
    {
      question: 'What kind of training can I receive?',
      answer: "You'll have access to one month of Pro service, which includes support from an account manager, engineering support, and technical advice. After that, it will depend on the plan you choose."
    },
    {
      question: 'How customizable is Nido?',
      answer: "You can customize your company's logo and colors. You'll also be able to include your own pricing and the equipment you want to work with. Contracts can also be personalized."
    },
  ];

  return (
    <Box component="section" sx={{ py: 8, backgroundColor: '#f9f9f9' }} className="n-faqs-section n-section">
      <Container maxWidth="lg">
        <SectionHeading component="h2" className="n-section-heading">
          FAQ's
        </SectionHeading>
        <SectionSubHeading component="p" className="n-section-subheading">
          Most common questions from our customers
        </SectionSubHeading>
        
        <FAQContainer>
          {faqItems.map((item, index) => (
            <FAQItem key={index} className="n-faq-item">
              <FAQQuestion 
                onClick={() => toggleFAQ(index)}
                className="n-faq-question"
              >
                <FAQQuestionText className="n-faq-question-text">
                  {item.question}
                </FAQQuestionText>
                <PlusIcon open={openFAQ === index} className="n-faq-icon" />
              </FAQQuestion>
              <FAQAnswer 
                open={openFAQ === index}
                className={`n-faq-answer ${openFAQ === index ? 'n-open' : ''}`}
              >
                <FAQAnswerText className="n-faq-answer-text">
                  {item.answer}
                </FAQAnswerText>
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQContainer>
        
        <CTASection className="n-faq-cta">
          <CTAText className="n-cta-text">
            Still have questions? We're here to help.
          </CTAText>
          <CTALink href="#schedule-demo" className="n-cta-link">
            Schedule a demo with our team.
          </CTALink>
        </CTASection>
      </Container>
    </Box>
  );
};

export default FAQs;