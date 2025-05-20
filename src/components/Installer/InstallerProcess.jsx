import React, { useState } from "react";
import { styled, Box, Container } from "@mui/material";

const ProcessSection = styled("section")`
  padding: 100px 0;
  @media (max-width: 992px) {
    padding: 60px 0;
  }
`;

const ProcessContainer = styled(Container)`
  width: calc(100% - 32px);
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const ProcessHeading = styled("h3")`
  font-size: 40px;
  text-align: center;
  margin-bottom: 30px;
  @media (max-width: 992px) {
    font-size: 38px;
  }
`;

const ProcessRow = styled("div")`
  display: flex;
  justify-content: center;
  max-width: 1080px;
  margin: 0 auto;
  gap: 32px;
  margin-top: 80px;

  @media (max-width: 992px) {
    flex-wrap: wrap;
    gap: 20px;
  }
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const ProcessItem = styled("div")`
  width: 33.33%;
  background: #fff;
  border-radius: 38px;
  padding: 65px 36px 45px 36px;
  box-shadow: 5px 6px 5px 0px rgba(0, 0, 0, 0.08);
  position: relative;

  @media (max-width: 992px) {
    width: 46%;
    margin-bottom: 20px;
  }
  @media (max-width: 576px) {
    width: 100%;
  }

  &.active .n-process-text,
  &.active .n-process-desc {
    opacity: 1;
    color: rgb(var(--color-primary-blue, 36, 60, 132));
  }
  &.active .n-process-step {
    background-color: rgb(var(--color-primary-blue, 36, 60, 132));
  }
  &.active .n-process-count {
    color: rgb(var(--color-primary-blue, 36, 60, 132));
  }
  &:hover .n-process-text,
  &:hover .n-process-desc {
    opacity: 1;
    color: rgb(var(--color-primary-blue, 36, 60, 132));
  }
  &:hover .n-process-step {
    background-color: rgb(var(--color-primary-blue, 36, 60, 132));
  }
  &:hover .n-process-count {
    color: rgb(var(--color-primary-blue, 36, 60, 132));
  }

  /* Divider line, only on desktop and not on last item */
  @media (min-width: 577px) {
    &:not(:last-child)::after {
      content: "";
      position: absolute;
      width: 32px;
      height: 1px;
      background-color: #d3cfcf;
      top: 50%;
      right: -32px;
    }
  }
`;

const ProcessText = styled("h3")`
  font-size: 24px;
  margin-bottom: 12px;
  opacity: 0.35;
  transition: all 0.3s ease;
`;

const ProcessDesc = styled("p")`
  font-size: 21px;
  line-height: 37px;
  opacity: 0.35;
  transition: all 0.3s ease;
`;

const ProcessStep = styled("div")`
  position: absolute;
  width: 60px;
  height: 60px;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d3cfcf;
  border-radius: 50px;
  top: -26px;
  left: 50%;
  transform: translateX(-50%);
`;

const ProcessCount = styled("span")`
  background-color: #f7f7f7;
  width: 38px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  font-weight: 700;
  color: #a1a1a1;
  transition: all 0.3s ease;
  border-radius: 50px;
`;

const ProcessNavigator = styled("div")`
  display: flex;
  align-items: center;
  gap: 12px;
  justify-content: center;
  margin-top: 50px;
`;

const ProcessDot = styled("span")`
  width: 7px;
  height: 7px;
  background-color: #d9d9d9;
  border-radius: 50%;
  display: block;
`;

const NavigatorButton = styled("div")`
  cursor: pointer;
`;

const processItems = [
  {
    title: "Formulario web",
    desc: "Te entregamos un micrositio para compartir con tus clientes o poner en tu web",
  },
  {
    title: "Formulario para no técnicos",
    desc: "Si recibes llamadas a tus comerciales o recepcionistas, les damos una guia de preguntas a hacer a los prospectos",
  },
  {
    title: "Presupuesto automático",
    desc: "El sistema genera un dimesionamiento preliminar para ver que tipo de trabajo ha llegado, este se puede compartir con el cliente para validar intensión",
  },
];

const InstallerProcess = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const handlePrevClick = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? processItems.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === processItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <ProcessSection className="n-process-section n-section">
      <ProcessContainer className="n-container">
        <ProcessHeading className="n-section-heading n-center n-process-heading">
          Nuestro proceso
        </ProcessHeading>
        <ProcessRow className="n-process-row">
          {processItems.map((item, idx) => (
            <ProcessItem
              key={idx}
              className={`n-process-item${idx === activeIndex ? " active" : ""}`}
            >
              <ProcessText className="n-process-text">{item.title}</ProcessText>
              <ProcessDesc className="n-process-desc">{item.desc}</ProcessDesc>
              <ProcessStep className="n-process-step">
                <ProcessCount className="n-process-count">{idx + 1}</ProcessCount>
              </ProcessStep>
            </ProcessItem>
          ))}
        </ProcessRow>
        <ProcessNavigator className="n-process-navigator">
          <NavigatorButton 
            className="n-process-navigator-prev"
            onClick={handlePrevClick}
          >
            {/* Left Arrow */}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 18 24" fill="none">
              <path d="M16.5 13.51C17.3284 13.51 18 12.8384 18 12.01C18 11.1816 17.3284 10.51 16.5 10.51L16.5 13.51ZM0.939336 10.9494C0.353552 11.5352 0.353556 12.485 0.939344 13.0707L10.4853 22.6166C11.0711 23.2024 12.0209 23.2024 12.6066 22.6166C13.1924 22.0308 13.1924 21.0811 12.6066 20.4953L4.12132 12.0101L12.6066 3.52475C13.1924 2.93896 13.1923 1.98921 12.6066 1.40343C12.0208 0.817643 11.071 0.817647 10.4852 1.40344L0.939336 10.9494ZM16.5 12.01L16.5 10.51L1.99999 10.5101L2 12.0101L2.00001 13.5101L16.5 13.51L16.5 12.01Z" fill="#06307B"/>
            </svg>
          </NavigatorButton>
          <ProcessDot className="n-process-dot" />
          <NavigatorButton 
            className="n-process-navigator-next"
            onClick={handleNextClick}
          >
            {/* Right Arrow */}
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="24" viewBox="0 0 18 24" fill="none">
              <path d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5L2 10.5ZM17.0607 13.0607C17.6464 12.4749 17.6464 11.5251 17.0607 10.9393L7.51472 1.3934C6.92893 0.807612 5.97919 0.807612 5.3934 1.3934C4.80761 1.97919 4.80761 2.92893 5.3934 3.51472L13.8787 12L5.3934 20.4853C4.80761 21.0711 4.80761 22.0208 5.3934 22.6066C5.97918 23.1924 6.92893 23.1924 7.51472 22.6066L17.0607 13.0607ZM2 12L2 13.5L16 13.5L16 12L16 10.5L2 10.5L2 12Z" fill="#06307B"/>
            </svg>
          </NavigatorButton>
        </ProcessNavigator>
      </ProcessContainer>
    </ProcessSection>
  );
};

export default InstallerProcess;