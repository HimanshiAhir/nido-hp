// src/App.jsx
import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import OurSolutions from './components/OurSolutions';
import OfferedSolutions from './components/OfferedSolutions';
import KeyBenefits from './components/KeyBenefits';
import NidoInAction from './components/NidoInAction';
import FAQs from './components/FAQs';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Banner />
      <OurSolutions />
      <OfferedSolutions />
      <KeyBenefits />
      <NidoInAction />
      <FAQs />
      <CTA />
      <Footer />
    </React.Fragment>
  );
}

export default App;
