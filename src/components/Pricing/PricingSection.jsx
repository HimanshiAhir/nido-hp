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

const CheckmarkSVG = ({ color = '#093988', strokeColor = '#1C3D88' }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 36 37" fill="none" aria-hidden="true" role="img">
    <title>Checkmark</title>
    <path d="M14.1993 27.4799L6.69141 20.27L9.87337 16.69L14.0455 20.69L25.2448 8.83997L28.5902 12.25L14.1993 27.4799Z" fill={color}/>
    <path d="M17.6404 35.4699C26.8307 35.4699 34.2808 27.72 34.2808 18.1599C34.2808 8.59989 26.8307 0.849976 17.6404 0.849976C8.45017 0.849976 1 8.59989 1 18.1599C1 27.72 8.45017 35.4699 17.6404 35.4699Z" stroke={strokeColor} strokeWidth="1.7" strokeMiterlimit="10"/>
  </svg>
);

const PricingSection = () => {


  return (
    <PricingTableSection>
      <PricingContainer>
        <PricingTitle>Tu periodo de prueba ha expirado</PricingTitle>
        <PricingDesc>Suscríbete para seguir trabajando con Nido.</PricingDesc>
        <PricingGrid role="grid" aria-label="Pricing Options">
          {/* Row 1: Headings */}
          <PricingCell feature noBorder></PricingCell>
          <PricingCell basic heading noBorder role="columnheader">
            <HeadingTitle>Basic</HeadingTitle>
            <HeadingSubtitle>Software as a Service</HeadingSubtitle>
          </PricingCell>
          <PricingCell pro heading noBorder bgColor="darkBlue" role="columnheader">
            <HeadingTitle>Pro</HeadingTitle>
            <HeadingSubtitle>Escala con soporte personalizado</HeadingSubtitle>
          </PricingCell>
          <PricingCell enterprise heading noBorder bgColor="blue" role="columnheader">
            <HeadingTitle>Enterprise</HeadingTitle>
          </PricingCell>
    
          {/* Monthly Price */}
          <PricingCell feature category>Precio Mensual</PricingCell>
          <PricingCell basic>
            <ResponsiveLabel>Precio Mensual</ResponsiveLabel>
            €199
          </PricingCell>
          <PricingCell pro bgColor="blue">
            <ResponsiveLabel style={{ color: '#fff' }}>Precio Mensual</ResponsiveLabel>
            €999
          </PricingCell>
          <PricingCell enterprise bgColor="darkBlue">
            <ResponsiveLabel style={{ color: '#fff' }}>Precio Mensual</ResponsiveLabel>
            €1,499
          </PricingCell>
    
          {/* Annual Price */}
          <PricingCell feature category>Precio Anual</PricingCell>
          <PricingCell basic noBorder>
            <ResponsiveLabel>Precio Anual</ResponsiveLabel>
            €1,990
          </PricingCell>
          <PricingCell pro noBorder bgColor="blue">
            <ResponsiveLabel style={{ color: '#fff' }}>Precio Anual</ResponsiveLabel>
            €9,990
          </PricingCell>
          <PricingCell enterprise noBorder bgColor="darkBlue">
            <ResponsiveLabel style={{ color: '#fff' }}>Precio Anual</ResponsiveLabel>
            €14,990
          </PricingCell>
    
          {/* Platform Description */}
          <PricingCell feature noBorder></PricingCell>
          <PricingNoteWrap basic>
            <PricingNote>
              <strong>Herramienta de autoservicio:</strong> Para aumentar tu productividad desde hoy
            </PricingNote>
          </PricingNoteWrap>
          <PricingNoteWrap pro bgColor="blue">
            <PricingNote bgColor="lightBlue">
              <strong>Solución llave en mano:</strong> Ingeniería a tu disposición
            </PricingNote>
          </PricingNoteWrap>
          <PricingNoteWrap enterprise bgColor="darkBlue">
            <PricingNote bgColor="mediumBlue">
              <strong>Solución llave en mano:</strong> Ingeniería a tu disposición
            </PricingNote>
          </PricingNoteWrap>

          {/* Platform Category */}
          <PricingCell feature category>Plataforma</PricingCell>
          <PricingCell basic noBorder>
            <ResponsiveLabel category>Plataforma</ResponsiveLabel>
          </PricingCell>
          <PricingCell pro noBorder bgColor="blue">
            <ResponsiveLabel style={{ color: '#fff' }} category>Plataforma</ResponsiveLabel>
          </PricingCell>
          <PricingCell enterprise noBorder bgColor="darkBlue">
            <ResponsiveLabel style={{ color: '#fff' }} category>Plataforma</ResponsiveLabel>
          </PricingCell>

          {/* Access Nest */}
          <PricingCell feature>Acceso a Nido</PricingCell>
          <PricingCell basic>
            <ResponsiveLabel>Acceso a Nido</ResponsiveLabel>
            <CheckmarkSVG />
          </PricingCell>
          <PricingCell pro bgColor="blue">
            <ResponsiveLabel style={{ color: '#fff' }}>Acceso a Nido</ResponsiveLabel>
            <CheckmarkSVG color="white" strokeColor="white" />
          </PricingCell>
          <PricingCell enterprise bgColor="darkBlue">
            <ResponsiveLabel style={{ color: '#fff' }}>Acceso a Nido</ResponsiveLabel>
            <CheckmarkSVG color="white" strokeColor="white" />
          </PricingCell>

          {/* Brand Customization */}
          <PricingCell feature>Personalización con Marca</PricingCell>
          <PricingCell basic>
            <ResponsiveLabel>Personalización con Marca</ResponsiveLabel>
            <em>Logo y colores</em>
          </PricingCell>
          <PricingCell pro bgColor="blue">
            <ResponsiveLabel style={{ color: '#fff' }}>Personalización con Marca</ResponsiveLabel>
            <em>Personalización completa</em>
          </PricingCell>
          <PricingCell enterprise bgColor="darkBlue">
            <ResponsiveLabel style={{ color: '#fff' }}>Personalización con Marca</ResponsiveLabel>
            <em>Personalización completa</em>
          </PricingCell>

          {/* Engineering Personalization */}
          <PricingCell feature>Personalización de Ingeniería</PricingCell>
          <PricingCell basic>
            <ResponsiveLabel>Personalización de Ingeniería</ResponsiveLabel>
            <em>Selección de marcas</em>
          </PricingCell>
          <PricingCell pro bgColor="blue">
            <ResponsiveLabel style={{ color: '#fff' }}>Personalización de Ingeniería</ResponsiveLabel>
            <em>Parámetros de ingeniería</em>
          </PricingCell>
          <PricingCell enterprise bgColor="darkBlue">
            <ResponsiveLabel style={{ color: '#fff' }}>Personalización de Ingeniería</ResponsiveLabel>
            <em>Parámetros de ingeniería</em>
          </PricingCell>

          {/* Technical and Commercial Support */}
          <PricingCell feature category>Soporte Técnico y Comercial</PricingCell>
          <PricingCell basic noBorder>
            <ResponsiveLabel category>Soporte Técnico y Comercial</ResponsiveLabel>
          </PricingCell>
          <PricingCell pro noBorder bgColor="blue">
            <ResponsiveLabel category style={{ color: '#fff' }}>Soporte Técnico y Comercial</ResponsiveLabel>
          </PricingCell>
          <PricingCell enterprise noBorder bgColor="darkBlue">
            <ResponsiveLabel category style={{ color: '#fff' }}>Soporte Técnico y Comercial</ResponsiveLabel>
          </PricingCell>

          {/* Technical Support */}
          <PricingCell feature>Soporte Técnico</PricingCell>
          <PricingCell basic>
            <ResponsiveLabel>Soporte Técnico</ResponsiveLabel>
            <em>Inteligencia Artificial</em>
          </PricingCell>
          <PricingCell pro bgColor="blue">
            <ResponsiveLabel style={{ color: '#fff' }}>Soporte Técnico</ResponsiveLabel>
            <em>IA + Nuestros ingenieros</em>
          </PricingCell>
          <PricingCell enterprise bgColor="darkBlue">
            <ResponsiveLabel style={{ color: '#fff' }}>Soporte Técnico</ResponsiveLabel>
            <em>IA + Nuestros ingenieros</em>
          </PricingCell>
    
          {/* Onboarding */}
          <PricingCell feature>Onboarding</PricingCell>
          <PricingCell basic>
            <ResponsiveLabel>Onboarding</ResponsiveLabel>
            <em>1 sesión</em>
          </PricingCell>
          <PricingCell pro bgColor="blue">
            <ResponsiveLabel style={{ color: '#fff' }}>Onboarding</ResponsiveLabel>
            <em>Seguimiento mensual</em>
          </PricingCell>
          <PricingCell enterprise bgColor="darkBlue">
            <ResponsiveLabel style={{ color: '#fff' }}>Onboarding</ResponsiveLabel>
            <em>Seguimiento mensual</em>
          </PricingCell>
    
          {/* Formations */}
          <PricingCell feature>Formaciones</PricingCell>
          <PricingCell basic noBorder>
            <ResponsiveLabel>Formaciones</ResponsiveLabel>
            <em>Videos</em>
          </PricingCell>
          <PricingCell pro noBorder bgColor="blue">
            <ResponsiveLabel style={{ color: '#fff' }}>Formaciones</ResponsiveLabel>
            <em>Personalizadas</em>
          </PricingCell>
          <PricingCell enterprise noBorder bgColor="darkBlue">
            <ResponsiveLabel style={{ color: '#fff' }}>Formaciones</ResponsiveLabel>
            <em>Personalizadas</em>
          </PricingCell>
    
          {/* Call to Action */}
          <PricingCell feature noBorder></PricingCell>
          <PricingAction href="/signup/basic" aria-label="Contratar plan Basic ahora">Contratar ahora</PricingAction>
          <PricingAction href="/signup/pro" bgColor="darkBlue" aria-label="Contratar plan Pro ahora">Contratar ahora</PricingAction>
          <PricingAction enterprise href="/contact" bgColor="lightBlue" aria-label="Contactar al equipo de ventas">Contactar equipo</PricingAction>
        </PricingGrid>



        {/* Enterprise Plan For Responsive */}
        <PricingGrid enterpriseMobile role="grid" aria-label="Pricing Options">

          {/* Row 1: Heading */}
          <PricingCell heading noBorder bgColor="blue" role="columnheader">
            <HeadingTitle>Enterprise</HeadingTitle>
          </PricingCell>

          {/* Monthly Price */}
          <PricingCell bgColor="darkBlue">
            <ResponsiveLabel style={{ color: '#fff' }}>Precio Mensual</ResponsiveLabel>
            €1,499
          </PricingCell>

          {/* Annual Price */}
          <PricingCell noBorder bgColor="darkBlue">
            <ResponsiveLabel style={{ color: '#fff' }}>Precio Anual</ResponsiveLabel>
            €14,990
          </PricingCell>

          {/* Platform Description */}
          <PricingNoteWrap bgColor="darkBlue">
            <PricingNote bgColor="mediumBlue">
              <strong>Solución llave en mano:</strong> Ingeniería a tu disposición
            </PricingNote>
          </PricingNoteWrap>

          {/* Platform Category */}
          <PricingCell noBorder bgColor="darkBlue">
            <ResponsiveLabel style={{ color: '#fff' }}>Plataforma</ResponsiveLabel>
          </PricingCell>

          {/* Access Nest */}
          <PricingCell bgColor="darkBlue">
            <ResponsiveLabel style={{ color: '#fff' }}>Acceso a Nido</ResponsiveLabel>
            <CheckmarkSVG color="white" strokeColor="white" />
          </PricingCell>

          {/* Brand Customization */}
          <PricingCell bgColor="darkBlue">
            <ResponsiveLabel style={{ color: '#fff' }}>Personalización con Marca</ResponsiveLabel>
            <em>Personalización completa</em>
          </PricingCell>

          {/* Engineering Personalization */}
          <PricingCell bgColor="darkBlue">
            <ResponsiveLabel style={{ color: '#fff' }}>Personalización de Ingeniería</ResponsiveLabel>
            <em>Parámetros de ingeniería</em>
          </PricingCell>

          {/* Technical and Commercial Support */}
          <PricingCell noBorder bgColor="darkBlue">
            <ResponsiveLabel style={{ color: '#fff' }}>Soporte Técnico y Comercial</ResponsiveLabel>
          </PricingCell>

          {/* Technical Support */}
          <PricingCell bgColor="darkBlue">
            <ResponsiveLabel style={{ color: '#fff' }}>Soporte Técnico</ResponsiveLabel>
            <em>IA + Nuestros ingenieros</em>
          </PricingCell>

          {/* Onboarding */}
          <PricingCell bgColor="darkBlue">
            <ResponsiveLabel style={{ color: '#fff' }}>Onboarding</ResponsiveLabel>
            <em>Seguimiento mensual</em>
          </PricingCell>
        
          {/* Formations */}
          <PricingCell enterprise noBorder bgColor="darkBlue">
            <ResponsiveLabel style={{ color: '#fff' }}>Formaciones</ResponsiveLabel>
            <em>Personalizadas</em>
          </PricingCell>

          {/* Call to Action */}
          <PricingAction href="/contact" bgColor="lightBlue" aria-label="Contactar al equipo de ventas">
            Contactar equipo
          </PricingAction>
        </PricingGrid>
      </PricingContainer>
    </PricingTableSection>
  );
};

export default PricingSection;