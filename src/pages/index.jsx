import React from 'react';
import Layout from '../components/layout';
import HeroSection from '../components/sections/HeroSection';
import CryptocurrencySection from '../components/sections/CryptocurrencySection';
import BuyAndTradeSection from '../components/sections/MultiStepForm';
import PartnerSection from '../components/sections/PartnerSection';
import CreditCardSection from '../components/sections/CreditCardSection';
import TradingToolsSection from '../components/sections/TradingToolsSections';
import SecuritySection from '../components/sections/SecuritySection';
import StepSection from '../components/sections/StepSection';
import FaqSection from '../components/sections/FAQSection';
import BackToTopSection from '../components/sections/BackToTopSection';
import HomeForm from '../components/sections/HomeForm';


export default function index() {
  return (
    <Layout>
        <HeroSection />
        {/* <CryptocurrencySection />  */}
        {/* <BuyAndTradeSection /> */}
        <HomeForm />
        <PartnerSection />
        <CreditCardSection />
        <TradingToolsSection />
        <SecuritySection />
        <StepSection />
        <FaqSection />
        <BackToTopSection />
    </Layout>

  );
}



