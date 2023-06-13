import React from "react";
import Layout from "../components/Layout";
import HeroSection from "../components/sections/HeroSection";
import PartnerSection from "../components/sections/PartnerSection";
import WhyUs from "../components/sections/WhyUs";
import Strategy from "../components/sections/Strategy";
import Benefits from "../components/sections/Benifits";
import Clients from "../components/sections/Clients";
import FaqSection from "../components/sections/FAQSection";
import BackToTopSection from "../components/sections/BackToTopSection";
import HomeForm from "../components/sections/HomeForm";

export default function index() {
  return (
    <Layout>
      <HeroSection />
      <HomeForm />
      <PartnerSection />
      <WhyUs />
      <Strategy />
      <Benefits />
      <Clients />
      <FaqSection />
      <BackToTopSection />
    </Layout>
  );
}
