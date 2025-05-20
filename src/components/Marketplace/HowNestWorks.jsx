import React, { useState } from 'react';
import { Box, Typography, styled } from '@mui/material';

// Styled Components
const WorksSection = styled(Box)(({ theme }) => ({
  padding: '66px 20px 66px 20px',
  backgroundColor: 'rgb(230, 230, 230)',
  borderTopLeftRadius: '120px',
  borderTopRightRadius: '120px',
  '@media (max-width: 992px)': {
    borderTopLeftRadius: '80px',
    borderTopRightRadius: '80px',
  },
  '@media (max-width: 767px)': {
    borderTopLeftRadius: '40px',
    borderTopRightRadius: '40px',
  },
}));

const WorksContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '64px',
    maxWidth: '1200px',
    margin: '0 auto',
    '@media (max-width:1024px)': {
        flexDirection: 'column',
        gap: '32px',
        alignItems: 'stretch',
    },
}));

const ContentWrap = styled(Box)(({ theme }) => ({
  maxWidth: '560px',
  '@media (max-width:1024px)': {
    maxWidth: '100%',
  }
}));

const WorksTitle = styled(Typography)(({ theme }) => ({
  fontSize: '40px',
  marginBottom: '38px',
  fontWeight: 'bold',
}));

const WorksList = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
}));

const WorksItem = styled(Box)(({ active, isBeforeActive, theme }) => ({
    display: 'flex',
    gap: '28px',
    padding: '22px 36px',
    cursor: 'pointer',
    borderBottom: active || isBeforeActive ? 'none' : '1px solid #D3CFCF',
    boxShadow: active ? `
        0px 2px 4px rgba(0, 0, 0, 0.02),
        0px 10px 8px rgba(0, 0, 0, 0.03),
        0px 10px 16px rgba(0, 0, 0, 0.08),
        0px 40px 32px rgba(0, 0, 0, 0.05),
        0px 50px 60px rgba(0, 0, 0, 0.06),
        0px -30px 100px rgba(0, 0, 0, 0.05)
    ` : 'none',
    backgroundColor: active ? '#F4F4F4' : 'transparent',
    borderRadius: active ? '12px' : '0',
    marginBottom: active ? '24px' : isBeforeActive ? '12px' : '0',
    '&:not(:last-child)': {
        borderBottom: active || isBeforeActive ? 'none' : '1px solid #D3CFCF',
    },
    '& svg': {
        flexShrink: 0,
        marginTop: '4px'
    },
    '@media (max-width:576px)': {
        padding: '16px 24px',
        gap: '16px',
    },
}));

const WorksItemContent = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
}));

const WorksHeading = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  lineHeight: '31.4px',
  fontWeight: '600',
}));

const WorksText = styled(Typography)(({ active }) => ({
  fontSize: '21px',
  lineHeight: '27px',
  display: active ? 'block' : 'none',
}));

const WorksImageWrap = styled(Box)(({ theme }) => ({
  flex: '1',
}));

const WorksImage = styled('img')(({ theme }) => ({
  borderRadius: '20px',
  padding: '10px',
  width: '100%',
  backgroundColor: '#f7f7f7',
}));

const HowNestWorks = () => {
  const [activeItem, setActiveItem] = useState(0);
  
  const workItems = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="34" height="22" viewBox="0 0 34 22" fill="none">
          <g clipPath="url(#clip0_1_482)">
            <path d="M8.1475 21.9854L3 16.8098L5.03 14.7687L8.1185 17.8741L14.281 11.6779L16.311 13.7628L8.1475 22V21.9854ZM8.1475 10.3221L3 5.14645L5.03 3.10537L8.1185 6.21074L14.281 0L16.311 2.08482L8.1475 10.3221ZM18.95 19.0696V16.1537H32V19.0696H18.95ZM18.95 7.40623V4.49039H32V7.40623H18.95Z" fill="#DA2222"/>
          </g>
          <defs>
            <clipPath id="clip0_1_482">
              <rect width="31" height="22" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      ),
      heading: "Listado de materiales automático desde el diseño",
      text: "Crea un nuevo proyecto y añade los datos de tu cliente.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none">
          <path d="M26.213 16.5405L16.5541 26.1861C16.2824 26.4574 15.9827 26.6538 15.6454 26.7942C15.3081 26.9345 14.9709 27 14.6336 27C14.2963 27 13.9591 26.9345 13.6218 26.7942C13.2845 26.6538 12.9847 26.4574 12.713 26.1861L0.777585 14.2765C0.534004 14.0333 0.337266 13.7432 0.206107 13.4158C0.074948 13.0884 0 12.7422 0 12.3867V2.70374C0 1.96466 0.262318 1.32848 0.796322 0.795218C1.33033 0.261954 1.95802 0 2.70749 0H12.4039C12.7599 0 13.1159 0.0748441 13.4532 0.215177C13.7904 0.355509 14.0808 0.561331 14.3338 0.804574L26.2224 12.7141C26.4941 12.9854 26.6908 13.2848 26.8126 13.6216C26.9344 13.9584 27 14.2952 27 14.632C27 14.9688 26.9344 15.3056 26.8126 15.6237C26.6908 15.9418 26.4941 16.2505 26.2224 16.5218L26.213 16.5405ZM14.6242 24.2963L24.2831 14.6507L12.3664 2.70374H2.69813V12.3493L14.6242 24.2869V24.2963ZM6.08015 8.10187C6.64226 8.10187 7.12006 7.90541 7.51353 7.51247C7.90701 7.11954 8.10375 6.64241 8.10375 6.08108C8.10375 5.51975 7.90701 5.04262 7.51353 4.64969C7.12006 4.25676 6.64226 4.06029 6.08015 4.06029C5.51804 4.06029 5.04025 4.25676 4.64677 4.64969C4.2533 5.04262 4.05656 5.51975 4.05656 6.08108C4.05656 6.64241 4.2533 7.11954 4.64677 7.51247C5.04025 7.90541 5.51804 8.10187 6.08015 8.10187Z" fill="#DA2222"/>
        </svg>
      ),
      heading: "Decide qué quieres comprar",
      text: "Crea un nuevo proyecto y añade los datos de tu cliente.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="31" height="24" viewBox="0 0 31 24" fill="none">
          <g clipPath="url(#clip0_1_475)">
            <g clipPath="url(#clip1_1_475)">
              <path d="M18.3207 13.4977C17.1431 13.4977 16.1504 13.0604 15.3288 12.1858C14.5073 11.3113 14.0965 10.2472 14.0965 9.00091C14.0965 7.75463 14.5073 6.69056 15.3288 5.81597C16.1504 4.94139 17.15 4.5041 18.3207 4.5041C19.4914 4.5041 20.4909 4.94139 21.3125 5.81597C22.1341 6.69056 22.5448 7.75463 22.5448 9.00091C22.5448 10.2472 22.1341 11.3113 21.3125 12.1858C20.4909 13.0604 19.4914 13.4977 18.3207 13.4977ZM8.45517 18.0018C7.68154 18.0018 7.01745 17.7103 6.4629 17.12C5.90835 16.5296 5.6345 15.8227 5.6345 14.9991V3.00273C5.6345 2.17917 5.90835 1.47221 6.4629 0.881871C7.01745 0.291528 7.68154 0 8.45517 0H28.1793C28.953 0 29.6171 0.291528 30.1716 0.881871C30.7262 1.47221 31 2.17917 31 3.00273V15.0064C31 15.8299 30.7262 16.5369 30.1716 17.1272C29.6171 17.7176 28.953 18.0091 28.1793 18.0091H8.45517V18.0018ZM11.2758 14.9991H25.3655C25.3655 14.1755 25.6394 13.4686 26.1939 12.8782C26.7485 12.2879 27.4125 11.9964 28.1862 11.9964V5.99818C27.4125 5.99818 26.7485 5.70665 26.1939 5.11631C25.6394 4.52596 25.3655 3.81901 25.3655 2.99545H11.2758C11.2758 3.81901 11.002 4.52596 10.4474 5.11631C9.89289 5.70665 9.2288 5.99818 8.45517 5.99818V11.9964C9.2288 11.9964 9.89289 12.2879 10.4474 12.8782C11.002 13.4686 11.2758 14.1755 11.2758 14.9991ZM26.7758 24H2.82067C2.04704 24 1.38295 23.7085 0.828401 23.1181C0.273852 22.5278 0 21.8208 0 20.9973V4.49681H2.82067V20.9973H26.7758V24ZM8.45517 14.9991V3.00273V15.0064V14.9991Z" fill="#DA2222"/>
            </g>
          </g>
          <defs>
            <clipPath id="clip0_1_475">
              <rect width="31" height="24" fill="white"/>
            </clipPath>
            <clipPath id="clip1_1_475">
              <rect width="31" height="24" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      ),
      heading: "Centraliza tus compras",
      text: "Crea un nuevo proyecto y añade los datos de tu cliente.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
          <g clipPath="url(#clip0_1_466)">
            <path d="M9.72557 29.9572C9.19414 29.9572 8.68928 29.8431 8.19771 29.6291C7.70614 29.4151 7.28099 29.1013 6.89571 28.7019L0.119995 21.398L1.22271 20.1854C1.52828 19.8573 1.91357 19.6291 2.35199 19.5007C2.79042 19.3723 3.24214 19.3866 3.68057 19.5007L5.97899 20.214V8.5592C5.97899 8.15977 6.11185 7.8174 6.36428 7.54636C6.61671 7.27532 6.93557 7.13267 7.30757 7.13267C7.67957 7.13267 7.99842 7.27532 8.25085 7.54636C8.50328 7.8174 8.63614 8.15977 8.63614 8.5592V24.0086L5.38114 23.01L8.80885 26.6904C8.94171 26.8331 9.08785 26.9472 9.24728 27.0185C9.40671 27.0899 9.56614 27.1327 9.75214 27.1327H15.3056C16.0363 27.1327 16.6607 26.8474 17.1789 26.291C17.697 25.7347 17.9627 25.0642 17.9627 24.2796V18.5735C17.9627 18.174 18.0956 17.8317 18.348 17.5606C18.6004 17.2896 18.9193 17.1469 19.2913 17.1469C19.6633 17.1469 19.9821 17.2896 20.2346 17.5606C20.487 17.8317 20.6199 18.174 20.6199 18.5735V24.2796C20.6199 25.8488 20.1017 27.1897 19.0521 28.3167C18.0159 29.4294 16.7537 30 15.2923 30H9.73885L9.72557 29.9572ZM9.95142 19.9715V14.2653C9.95142 13.8659 10.0843 13.5235 10.3367 13.2525C10.5891 12.9815 10.908 12.8388 11.28 12.8388C11.652 12.8388 11.9709 12.9815 12.2233 13.2525C12.4757 13.5235 12.6086 13.8659 12.6086 14.2653V19.9715H9.95142ZM13.9371 19.9715V15.6919C13.9371 15.2924 14.07 14.9501 14.3224 14.679C14.5749 14.408 14.8937 14.2653 15.2657 14.2653C15.6377 14.2653 15.9566 14.408 16.209 14.679C16.4614 14.9501 16.5943 15.2924 16.5943 15.6919V19.9715H13.9371ZM20.58 12.8388C18.5606 12.8388 16.7006 12.2682 15 11.127C13.2994 9.98573 12.0506 8.41655 11.28 6.4194C12.0506 4.42225 13.2994 2.85307 15 1.71184C16.7006 0.570613 18.5606 0 20.58 0C22.5994 0 24.4594 0.570613 26.16 1.71184C27.8606 2.85307 29.1094 4.42225 29.88 6.4194C29.1094 8.41655 27.8606 9.98573 26.16 11.127C24.4594 12.2682 22.5994 12.8388 20.58 12.8388ZM20.58 9.98573C21.8421 9.98573 23.0379 9.6719 24.1539 9.05849C25.2699 8.44508 26.1866 7.56063 26.8907 6.4194C26.1866 5.27817 25.2699 4.39372 24.1539 3.78031C23.0379 3.1669 21.8421 2.85307 20.58 2.85307C19.3179 2.85307 18.1221 3.1669 17.0061 3.78031C15.8901 4.39372 14.9734 5.27817 14.2693 6.4194C14.9734 7.56063 15.8901 8.44508 17.0061 9.05849C18.1221 9.6719 19.3179 9.98573 20.58 9.98573ZM20.58 8.5592C20.022 8.5592 19.557 8.34522 19.1717 7.93153C18.7864 7.51783 18.5871 7.00428 18.5871 6.4194C18.5871 5.83452 18.7864 5.32097 19.1717 4.90728C19.557 4.49358 20.0353 4.2796 20.58 4.2796C21.1247 4.2796 21.603 4.49358 21.9883 4.90728C22.3736 5.32097 22.5729 5.83452 22.5729 6.4194C22.5729 7.00428 22.3736 7.51783 21.9883 7.93153C21.603 8.34522 21.1247 8.5592 20.58 8.5592Z" fill="#DA2222"/>
          </g>
          <defs>
            <clipPath id="clip0_1_466">
              <rect width="30" height="30" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      ),
      heading: "Seguimiento de pedidos",
      text: "Crea un nuevo proyecto y añade los datos de tu cliente.",
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="21" viewBox="0 0 33 21" fill="none">
          <g clipPath="url(#clip0_1_449)">
            <g clipPath="url(#clip1_1_449)">
              <path d="M7.5 21C6.255 21 5.19 20.565 4.305 19.68C3.435 18.81 2.985 17.745 2.985 16.485H0V3C0 2.175 0.3 1.47 0.885 0.885C1.47 0.3 2.175 0 3 0H24L33 9V16.5H30C30 17.745 29.565 18.81 28.68 19.695C27.81 20.565 26.745 21.015 25.485 21.015C24.225 21.015 23.175 20.58 22.29 19.695C21.42 18.825 20.97 17.76 20.97 16.5H11.97C11.97 17.745 11.535 18.81 10.65 19.695C9.78 20.565 8.715 21.015 7.455 21.015L7.5 21ZM21 7.5H27L22.5 3H21V7.5ZM12 7.5H18V3H12V7.5ZM3 7.5H9V3H3V7.5ZM7.5 18.375C8.025 18.375 8.475 18.195 8.835 17.835C9.195 17.475 9.375 17.025 9.375 16.5C9.375 15.975 9.195 15.525 8.835 15.165C8.475 14.805 8.025 14.625 7.5 14.625C6.975 14.625 6.525 14.805 6.165 15.165C5.805 15.525 5.625 15.975 5.625 16.5C5.625 17.025 5.805 17.475 6.165 17.835C6.525 18.195 6.975 18.375 7.5 18.375ZM25.5 18.375C26.025 18.375 26.475 18.195 26.835 17.835C27.195 17.475 27.375 17.025 27.375 16.5C27.375 15.975 27.195 15.525 26.835 15.165C26.475 14.805 26.025 14.625 25.5 14.625C24.975 14.625 24.525 14.805 24.165 15.165C23.805 15.525 23.625 15.975 23.625 16.5C23.625 17.025 23.805 17.475 24.165 17.835C24.525 18.195 24.975 18.375 25.5 18.375ZM3 13.5H4.2C4.62 13.05 5.115 12.69 5.67 12.405C6.225 12.12 6.84 11.985 7.515 11.985C8.19 11.985 8.805 12.12 9.36 12.405C9.915 12.69 10.395 13.05 10.83 13.5H22.23C22.65 13.05 23.145 12.69 23.7 12.405C24.255 12.12 24.87 11.985 25.545 11.985C26.22 11.985 26.835 12.12 27.39 12.405C27.945 12.69 28.425 13.05 28.86 13.5H30.06V10.5H3V13.5Z" fill="#DA2222"/>
            </g>
          </g>
          <defs>
            <clipPath id="clip0_1_449">
              <rect width="33" height="21" fill="white"/>
            </clipPath>
            <clipPath id="clip1_1_449">
              <rect width="33" height="21" fill="white"/>
            </clipPath>
          </defs>
        </svg>
      ),
      heading: "Enviamos a dónde prefieras",
      text: "Crea un nuevo proyecto y añade los datos de tu cliente.",
    }
  ];

  return (
    <WorksSection>
      <WorksContainer>
        <ContentWrap>
          <WorksTitle variant="h2">Como funciona Nido</WorksTitle>
          <WorksList>
            {workItems.map((item, index) => (
              <WorksItem 
                key={index} 
                active={index === activeItem} 
                isBeforeActive={index === activeItem - 1}
                onClick={() => setActiveItem(index)}
              >
                {item.icon}
                <WorksItemContent>
                  <WorksHeading variant="h3">{item.heading}</WorksHeading>
                  <WorksText active={index === activeItem}>{item.text}</WorksText>
                </WorksItemContent>
              </WorksItem>
            ))}
          </WorksList>
        </ContentWrap>
        <WorksImageWrap>
          <WorksImage 
            src="/assets/media/Header_Vertical_Compra.gif" 
            alt="How Nido works" 
          />
        </WorksImageWrap>
      </WorksContainer>
    </WorksSection>
  );
};

export default HowNestWorks;
