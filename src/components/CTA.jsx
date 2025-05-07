import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/system";

// Styled components
const CTASection = styled("section")({
  padding: "40px 20px 0",
  position: "relative",
  backgroundColor: "rgba(247, 247, 247, 1)",
  display: "flex",
  "@media (max-width: 992px)": {
    flexDirection: "column",
  },
});

const CTAContent = styled(Box)({
  flexShrink: 0,
  maxWidth: "390px",
  padding: "120px 20px",
  "@media (min-width: 1240px)": {
    marginLeft: "calc((100vw - 1240px) / 2)",
  },
  "@media (max-width: 992px)": {
    maxWidth: "100%",
    padding: "40px 20px",
  },
});

const CTATitle = styled(Typography)({
  fontSize: "48px",
  lineHeight: 1.2,
  fontWeight: 800,
  marginBottom: "40px",
  color: "#000",
  "@media (max-width: 768px)": {
    fontSize: "36px",
  },
});

const CTAButton = styled("a")({
  boxShadow: "none",
  outline: "none",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "18px",
  lineHeight: 1.2,
  color: "#fff",
  backgroundColor: "rgb(36, 60, 132)",
  borderWidth: "1px",
  borderStyle: "solid",
  borderColor: "transparent",
  borderRadius: "15px",
  padding: "18px 32px",
  minWidth: "180px",
  transition: "0.3s ease-in-out",
  position: "relative",
  fontWeight: 600,
  textDecoration: "none",
  "&:hover": {
    color: "rgb(36, 60, 132)",
    backgroundColor: "rgb(255, 255, 255)",
    borderColor: "rgb(36, 60, 132)",
    transform: "translateY(1px)",
  },
});

const CTAImageWrapper = styled(Box)({
  width: "100%",
  maxWidth: "1024px",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  "@media (max-width: 992px)": {
    maxWidth: "100%",
  },
});

const CTAImage = styled("img")({
  maxWidth: "100%",
  height: "auto",
});

const CTA = () => {
  return (
    <CTASection id="cta">
      <CTAContent>
        <CTATitle variant="h2">Ready to get started?</CTATitle>
        <CTAButton href="#" className="n-btn-primary">
          Book a Demo
        </CTAButton>
      </CTAContent>
      <CTAImageWrapper>
        <CTAImage
          src={`${process.env.PUBLIC_URL}/assets/media/cta-image.png`}
          alt="Nido platform demonstration"
        />
      </CTAImageWrapper>
    </CTASection>
  );
};

export default CTA;
