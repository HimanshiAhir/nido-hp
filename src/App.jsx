// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Banner from './components/Banner';
import OurSolutions from './components/OurSolutions';
import OfferedSolutions from './components/OfferedSolutions';
import KeyBenefits from './components/KeyBenefits';
import NidoInAction from './components/NidoInAction';
import FAQs from './components/FAQs';
import CTA from './components/CTA';
import Footer from './components/Footer';
import CRMPage from './components/CRMPage';

function HomePage() {
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/crm" element={<CRMPage />} />
      </Routes>
    </Router>
  );
}

export default App;
