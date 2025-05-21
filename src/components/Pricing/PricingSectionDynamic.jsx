import React from 'react';
import { styled } from '@mui/material';

// Styled components for the pricing section
const PricingTableSection = styled('section')(({ theme }) => ({
  padding: '100px 0',
  backgroundColor: '#F5F5F5',
  '@keyframes fadeIn': {
    from: { opacity: 0, transform: 'translateY(-10px)' },
    to: { opacity: 1, transform: 'translateY(0)' }
  },
  '@keyframes slideUp': {
    from: { opacity: 0, transform: 'translateY(10px)' },
    to: { opacity: 1, transform: 'translateY(0)' }
  },
  '@media (max-width: 768px)': {
    padding: '60px 0',
  },
  '@media (max-width: 576px)': {
    padding: '40px 0',
  },
}));

const PricingContainer = styled('div')(({ theme }) => ({
  maxWidth: '1400px',
  margin: '0 auto',
  padding: '0 20px',
}));

// Label that appears only on mobile/tablet view inside cells
const ResponsiveLabel = styled('div')(({ theme, category }) => ({
  display: 'none',
  fontWeight: 600,
  color: '#003087',
  marginBottom: '10px',
  fontSize: '16px',
  width: '100%',
  ...category && {
    fontSize: '22px',
    marginBottom: '0',
    fontWeight: 700,
  },
  textAlign: 'center',
  '@media (max-width: 992px)': {
    display: 'block',
    animation: 'fadeIn 0.3s ease-in-out',
  },
  '@media (max-width: 576px)': {
    fontSize: category ? '22px' : '15px',
    marginBottom: category ? '0' : '8px',
  },
}));

const PricingTitle = styled('h1')(({ theme }) => ({
  fontSize: '42px',
  lineHeight: '62px',
  textAlign: 'center',
  fontWeight: 700,
  '@media (max-width: 768px)': {
    fontSize: '36px',
    lineHeight: '50px',
  },
  '@media (max-width: 576px)': {
    fontSize: '28px',
    lineHeight: '38px',
  },
}));

const PricingDesc = styled('p')(({ theme }) => ({
  fontSize: '42px',
  lineHeight: '62px',
  textAlign: 'center',
  fontWeight: 400,
  margin: '0 0 70px 0',
  '@media (max-width: 768px)': {
    fontSize: '32px',
    lineHeight: '42px',
  },
  '@media (max-width: 576px)': {
    fontSize: '24px',
    lineHeight: '32px',
    margin: '0 0 30px 0',
  },
}));

const PricingGrid = styled('div')(({ theme, enterpriseMobile }) => ({
  display: enterpriseMobile ? 'none' : 'grid',
  gridTemplateColumns: '22% calc(26% - 16px) calc(26% - 16px) calc(26% - 16px)',
  gap: '0 16px',
  marginTop: '24px',
  animation: 'fadeIn 0.6s ease-in-out',
  
  '@media (max-width: 992px)': {
    gridTemplateColumns: '1fr 1fr',
    gap: '0 12px',
  },
  '@media (max-width: 576px)': {
    gap: '0 8px',
    gridTemplateColumns: '1fr',
  },
  ...(enterpriseMobile && {
    gridTemplateColumns: '1fr',
    maxWidth: '480px',
    marginLeft: 'auto',
    marginRight: 'auto',
    '@media (max-width: 992px)': {
      display: 'grid',
    }
  }),
}));

const PricingCell = styled('div')(({ theme, feature, heading, category, noBorder, bgColor, enterprise }) => ({
  padding: '12px 20px',
  fontSize: '18px',
  lineHeight: 1.4,
  borderBottom: noBorder ? 'none' : '.5px solid #ccc',
  display: 'flex',
  alignItems: feature ? 'flex-start' : 'center',
  justifyContent: feature ? 'flex-start' : 'center',
  textAlign: feature ? 'left' : 'center',
  backgroundColor: bgColor ? bgColor : '#EDEEEF',
  fontWeight: feature ? 500 : 400,
  flexDirection: 'column',
  transition: 'all 0.3s ease',
  position: 'relative',
  ...(feature && {
    background: '#f5f5f5',
    fontSize: '20px',
    fontWeight: 500,
  }),
  ...(heading && {
    flexDirection: 'column',
    fontWeight: 700,
    background: '#E1E1E1',
    borderRadius: '20px 20px 0 0',
    padding: '20px 16px',
    // Headings should stay visible
    '@media (max-width: 992px)': {
      display: 'flex',
    }
  }),
  ...(category && {
    fontWeight: 600,
    color: '#003087',
  }),
  ...(bgColor === 'blue' && {
    background: '#074AAA',
    color: '#fff',
  }),
  ...(bgColor === 'darkBlue' && {
    background: '#0D285F',
    color: '#fff',
  }),
  '@media (min-width: 1201px)': {
    ...(feature && {
      marginRight: '-16px',
    }),
  },
  '@media (max-width: 1200px)': {
    ...(feature && {
      marginRight: '-12px',
    }),
  },

  '@media (max-width: 992px)': {
    ...(feature && {
      display: 'none',
    }),
    ...(enterprise && {
      display: 'none',
    }),

    padding: '14px 16px',
    flexDirection: 'column',
    alignItems: 'center',
  },
  '@media (max-width: 576px)': {
    fontSize: '16px',
    padding: '14px 12px',
  },
}));

const HeadingTitle = styled('h2')(({ theme }) => ({
  margin: 0,
  fontSize: '40px',
  fontWeight: 700,
  lineHeight: 1.2,
  color: 'inherit',
  '@media (max-width: 768px)': {
    fontSize: '32px',
  },
  '@media (max-width: 576px)': {
    fontSize: '26px',
  },
}));

const HeadingSubtitle = styled('p')(({ theme }) => ({
  margin: '4px 0 0',
  fontSize: '18px',
  fontWeight: 600,
  lineHeight: 1.3,
  color: 'inherit',
  '@media (max-width: 576px)': {
    fontSize: '16px',
  },
}));

const PricingNoteWrap = styled('div')(({ theme, bgColor, enterprise }) => ({
  gridColumn: 'span 1',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#EDEEEF',
  borderBottom: '.5px solid #ccc',
  padding: '0',
  ...(bgColor === 'blue' && {
    background: '#074AAA',
  }),
  ...(bgColor === 'darkBlue' && {
    background: '#0D285F',
  }),
  '@media (max-width: 992px)': {
    gridColumn: 'auto',
    ...(enterprise && {
      display: 'none',
    }),
  },
  '@media (max-width: 576px)': {
    gridColumn: 'auto',
  },
}));

const PricingNote = styled('div')(({ theme, bgColor }) => ({
  background: '#e5e5e5',
  fontSize: '16px',
  borderRadius: '20px 20px 0 0',
  padding: '18px 16px',
  lineHeight: 1.3,
  border: 0,
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  width: '100%',
  height: '100%',
  fontWeight: 400,
  display: 'flex',
  
  
  '& strong': {
    fontWeight: 700,
    fontSize: '18px',
    marginBottom: '2px',
  },
  ...(bgColor === 'lightBlue' && {
    backgroundColor: '#08439B',
    color: '#fff',
  }),
  ...(bgColor === 'mediumBlue' && {
    backgroundColor: '#0C2F6E',
    color: '#fff',
  }),
}));

const PricingAction = styled('a')(({ theme, bgColor, enterprise }) => ({
  background: '#dedede',
  fontWeight: 700,
  borderRadius: '0 0 20px 20px',
  cursor: 'pointer',
  padding: '30px 16px',
  fontSize: '22px',
  transition: 'all 0.3s ease',
  textDecoration: 'none',
  color: bgColor ? '#fff' : 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  animation: 'slideUp 0.5s ease forwards',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    opacity: 0.95,
    transform: 'translateY(-4px)',
    boxShadow: '0 6px 10px rgba(0,0,0,0.12)',
    textDecoration: 'none',
    color: bgColor ? '#fff' : 'inherit',
  },
  '&:active': {
    transform: 'translateY(-2px)',
    boxShadow: '0 3px 5px rgba(0,0,0,0.1)',
  },
  '&::after': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '5px',
    height: '5px',
    background: 'rgba(255,255,255,0.3)',
    opacity: 0,
    borderRadius: '100%',
    transform: 'scale(1, 1) translate(-50%)',
    transformOrigin: '50% 50%',
  },
  '&:hover::after': {
    animation: 'ripple 1s ease-out',
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(0, 0)',
      opacity: 0.5,
    },
    '100%': {
      transform: 'scale(40, 40)',
      opacity: 0,
    }
  },
  ...(bgColor === 'lightBlue' && {
    backgroundColor: '#08439B',
    color: '#fff',
  }),
  ...(bgColor === 'darkBlue' && {
    backgroundColor: '#0D285F',
    color: '#fff',
  }),
  '@media (max-width: 768px)': {
    padding: '24px 14px',
    fontSize: '20px',
  },
  '@media (max-width: 576px)': {
    padding: '20px 12px',
    fontSize: '18px',
  },
  '@media (max-width: 992px)': {
    ...(enterprise && {
      display: 'none',
    }),
  }
}));


//  CSS end =========


const plans = [
  {
    key: "basic",
    name: "Basic",
    desc: "Software as a Service",
    headingBg: "",
    cta: { text: "Contratar ahora", url: "/signup/basic" }
  },
  {
    key: "pro",
    name: "Pro",
    desc: "Escala con soporte personalizado",
    headingBg: "darkBlue", // Only heading cell
    cta: { text: "Contratar ahora", url: "/signup/pro", bgColor: "darkBlue" }
  },
  {
    key: "enterprise",
    name: "Enterprise",
    desc: "",
    headingBg: "blue", // Only heading cell
    cta: { text: "Contactar equipo", url: "/contact", bgColor: "lightBlue" }
  }
];

// Features/rows: type = label|category|note|cta
const features = [
  {
    key: "monthly",
    label: "Precio Mensual",
    type: "label",
    values: ["€199", "€999", "€1,499"],
    bgColor: [null, "blue", "darkBlue"]
  },
  {
    key: "annual",
    label: "Precio Anual",
    type: "label",
    values: ["€1,990", "€9,990", "€14,990"],
    bgColor: [null, "blue", "darkBlue"],
    noBorder: true
  },
  {
    key: "platformNote",
    type: "note",
    notes: [
      {
        strong: "Herramienta de autoservicio:",
        text: "Para aumentar tu productividad desde hoy",
        bg: undefined,
      },
      {
        strong: "Solución llave en mano:",
        text: "Ingeniería a tu disposición",
        bg: "lightBlue",
      },
      {
        strong: "Solución llave en mano:",
        text: "Ingeniería a tu disposición",
        bg: "mediumBlue",
      },
    ],
    noteWrapBg: [undefined, "blue", "darkBlue"],
  },
  {
    key: "platform",
    label: "Plataforma",
    type: "category",
    noBorder: true,
    bgColor: [null, "blue", "darkBlue"]
  },
  {
    key: "acceso",
    label: "Acceso a Nido",
    type: "label",
    values: [
      { icon: true },
      { icon: true, white: true },
      { icon: true, white: true },
    ],
    bgColor: [null, "blue", "darkBlue"]
  },
  {
    key: "brand",
    label: "Personalización con Marca",
    type: "label",
    values: [
      { em: "Logo y colores" },
      { em: "Personalización completa" },
      { em: "Personalización completa" },
    ],
    bgColor: [null, "blue", "darkBlue"]
  },
  {
    key: "engineering",
    label: "Personalización de Ingeniería",
    type: "label",
    values: [
      { em: "Selección de marcas" },
      { em: "Parámetros de ingeniería" },
      { em: "Parámetros de ingeniería" },
    ],
    bgColor: [null, "blue", "darkBlue"]
  },
  {
    key: "supportCategory",
    label: "Soporte Técnico y Comercial",
    type: "category",
    noBorder: true,
    bgColor: [null, "blue", "darkBlue"]
  },
  {
    key: "support",
    label: "Soporte Técnico",
    type: "label",
    values: [
      { em: "Inteligencia Artificial" },
      { em: "IA + Nuestros ingenieros" },
      { em: "IA + Nuestros ingenieros" },
    ],
    bgColor: [null, "blue", "darkBlue"]
  },
  {
    key: "onboarding",
    label: "Onboarding",
    type: "label",
    values: [
      { em: "1 sesión" },
      { em: "Seguimiento mensual" },
      { em: "Seguimiento mensual" },
    ],
    bgColor: [null, "blue", "darkBlue"]
  },
  {
    key: "formaciones",
    label: "Formaciones",
    type: "label",
    values: [
      { em: "Videos" },
      { em: "Personalizadas" },
      { em: "Personalizadas" },
    ],
    bgColor: [null, "blue", "darkBlue"],
    noBorder: true,
  },
  {
    key: "cta",
    type: "cta",
    cta: plans.map((p) => p.cta),
  },
];

const CheckmarkSVG = ({ color = '#093988', strokeColor = '#1C3D88' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 36 37" fill="none" aria-hidden="true" role="img">
    <title>Checkmark</title>
    <path d="M14.1993 27.4799L6.69141 20.27L9.87337 16.69L14.0455 20.69L25.2448 8.83997L28.5902 12.25L14.1993 27.4799Z" fill={color}/>
    <path d="M17.6404 35.4699C26.8307 35.4699 34.2808 27.72 34.2808 18.1599C34.2808 8.59989 26.8307 0.849976 17.6404 0.849976C8.45017 0.849976 1 8.59989 1 18.1599C1 27.72 8.45017 35.4699 17.6404 35.4699Z" stroke={strokeColor} strokeWidth="1.7" strokeMiterlimit="10"/>
  </svg>
);

const renderCellValue = (value, hasBgColor = false) => {
  if (typeof value === "string") return value;
  
  if (value?.icon) {
    // Apply white color automatically if the parent cell has a color background
    const iconColor = value.white || hasBgColor ? "white" : undefined;
    const iconStrokeColor = value.white || hasBgColor ? "white" : undefined;
    
    return <CheckmarkSVG 
      color={iconColor} 
      strokeColor={iconStrokeColor} 
    />;
  }
  
  if (value?.em) {
    return <em>{value.em}</em>;
  }
  
  return null;
};

const PricingSectionDynamic = () => {
  const enterpriseIdx = plans.length - 1;
  
  // Memoize plans to prevent unnecessary re-renders
  const memoizedPlans = React.useMemo(() => plans, []);

  return (
    <PricingTableSection>
      <PricingContainer>
        <PricingTitle>Tu periodo de prueba ha expirado</PricingTitle>
        <PricingDesc>Suscríbete para seguir trabajando con Nido.</PricingDesc>
        {/* --- MAIN GRID --- */}
        <PricingGrid role="grid" aria-label="Pricing Options">
          {/* Header row */}
          <PricingCell feature noBorder aria-hidden="true" />
          {memoizedPlans.map((plan, i) => (
            <PricingCell
              key={plan.key}
              heading
              noBorder
              bgColor={plan.headingBg}
              basic={i === 0}
              pro={i === 1}
              enterprise={i === 2}
              role="columnheader"
            >
              <HeadingTitle>{plan.name}</HeadingTitle>
              {plan.desc && <HeadingSubtitle>{plan.desc}</HeadingSubtitle>}
            </PricingCell>
          ))}

          {/* Features */}
          {features.map((feature, rowIdx) => {
            // NOTE ROW
            if (feature.type === "note") {
              return (
                <React.Fragment key={feature.key}>
                  <PricingCell feature noBorder />
                  {feature.notes.map((note, i) => (
                    <PricingNoteWrap key={i} bgColor={feature.noteWrapBg ? feature.noteWrapBg[i] : undefined}
                      basic={i === 0}
                      pro={i === 1}
                      enterprise={i === 2}
                    >
                      <PricingNote bgColor={note.bg}>
                        <strong>{note.strong}</strong> {note.text}
                      </PricingNote>
                    </PricingNoteWrap>
                  ))}
                </React.Fragment>
              );
            }
            
            // CATEGORY ROW (Plataforma, Soporte Técnico y Comercial)
            if (feature.type === "category") {
              return (
                <React.Fragment key={feature.key}>
                  <PricingCell feature category noBorder={feature.noBorder}>{feature.label}</PricingCell>
                  {plans.map((plan, i) => (
                    <PricingCell
                      key={plan.key}
                      noBorder={feature.noBorder}
                      bgColor={feature.bgColor && feature.bgColor[i] ? feature.bgColor[i] : undefined}
                      basic={i === 0}
                      pro={i === 1}
                      enterprise={i === 2}
                    >
                      <ResponsiveLabel style={i > 0 && feature.bgColor && feature.bgColor[i] ? { color: '#fff' } : undefined} category>{feature.label}</ResponsiveLabel>
                    </PricingCell>
                  ))}
                </React.Fragment>
              );
            }
            // CTA ROW
            if (feature.type === "cta") {
              return (
                <React.Fragment key={feature.key}>
                  <PricingCell feature noBorder />
                  {feature.cta.map((cta, i) => (
                    <PricingAction
                      key={i}
                      href={cta.url}
                      bgColor={cta.bgColor}
                      basic={i === 0}
                      pro={i === 1}
                      enterprise={i === 2}
                      aria-label={cta.text}
                    >
                      {cta.text}
                    </PricingAction>
                  ))}
                </React.Fragment>
              );
            }
            // LABEL/DEFAULT ROW
            return (
              <React.Fragment key={feature.key}>
                <PricingCell feature noBorder={feature.noBorder}>{feature.label}</PricingCell>
                {feature.values.map((value, i) => (
                  <PricingCell
                    key={i}
                    noBorder={feature.noBorder}
                    bgColor={feature.bgColor && feature.bgColor[i] ? feature.bgColor[i] : undefined}
                    basic={i === 0}
                    pro={i === 1}
                    enterprise={i === 2}
                  >
                    <ResponsiveLabel style={i > 0 && feature.bgColor && feature.bgColor[i] ? { color: '#fff' } : undefined}>{feature.label}</ResponsiveLabel>
                    {renderCellValue(value, i > 0 && feature.bgColor && feature.bgColor[i])}
                  </PricingCell>
                ))}
              </React.Fragment>
            );
          })}
        </PricingGrid>

        {/* --- ENTERPRISE MOBILE ONLY GRID --- */}
        <PricingGrid enterpriseMobile>
          {/* Enterprise heading */}
          <PricingCell heading noBorder bgColor={plans[enterpriseIdx].headingBg}>
            <HeadingTitle>{plans[enterpriseIdx].name}</HeadingTitle>
          </PricingCell>
          {/* Loop through features, show only Enterprise column value */}
          {features.map((feature, idx) => {
            if (feature.type === "note") {
              const note = feature.notes[enterpriseIdx];
              return (
                <PricingNoteWrap key={feature.key} bgColor="darkBlue">
                  <PricingNote bgColor="mediumBlue">
                    <strong>{note.strong}</strong> {note.text}
                  </PricingNote>
                </PricingNoteWrap>
              );
            }
            if (feature.type === "category") {
              return (
                <PricingCell key={feature.key} noBorder bgColor="darkBlue">
                  <ResponsiveLabel style={{ color: '#fff' }} category>
                    {feature.label}
                  </ResponsiveLabel>
                </PricingCell>
              );
            }
            if (feature.type === "cta") {
              const cta = feature.cta[enterpriseIdx];
              return (
                <PricingAction
                  key={feature.key}
                  href={cta.url}
                  bgColor={cta.bgColor}
                  aria-label={cta.text}
                >
                  {cta.text}
                </PricingAction>
              );
            }
            // Default: regular value
            const value = feature.values?.[enterpriseIdx];
            return (
              <PricingCell key={feature.key} bgColor="darkBlue">
                <ResponsiveLabel style={{ color: '#fff' }}>{feature.label}</ResponsiveLabel>
                {renderCellValue(value, true)}
              </PricingCell>
            );
          })}
        </PricingGrid>
      </PricingContainer>
    </PricingTableSection>
  );
};

export default PricingSectionDynamic;
